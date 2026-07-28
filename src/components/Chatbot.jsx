import { useState, useRef, useEffect, useCallback } from 'react';
import { useLang } from '../context/LangContext';
import './Chatbot.css';
import iconImg from '../assets/icon.png';

const EMOJIS = [
  '😀','😂','😍','🥰','😎','🤔','👍','👋','🙏','🔥',
  '💯','✅','❤️','🚀','💡','🎉','😊','😅','🤝','💪',
  '😢','😮','🤩','😴','🥳','👏','🌟','💬','📱','⚡',
];

function getBotReply(input, rules, fallback) {
  const lower = input.toLowerCase().trim();
  let bestRule = null;
  let bestScore = 0;

  for (const rule of rules) {
    let score = 0;
    for (const k of rule.match) {
      if (lower.includes(k)) score += k.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestRule = rule;
    }
  }

  if (bestRule && bestScore > 0) return bestRule.reply;
  return fallback;
}

export default function Chatbot() {
  const { t, lang } = useLang();
  const cb = t.chatbot;
  const [open, setOpen]           = useState(false);
  const [messages, setMessages]   = useState([]);
  const [input, setInput]         = useState('');
  const [typing, setTyping]       = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recSeconds, setRecSeconds] = useState(0);
  const fileRef   = useRef(null);
  const bottomRef = useRef(null);
  const recTimer  = useRef(null);

  const isOnlyGreeting = useCallback((msgs) =>
    msgs.length === 1 && msgs[0].from === 'bot', []);

  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 0 || isOnlyGreeting(prev)) {
        return [{ from: 'bot', text: cb.greeting, time: now() }];
      }
      return prev;
    });
  }, [lang, cb.greeting, isOnlyGreeting]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages(prev => [...prev, { from: 'user', text: msg, time: now() }]);
    setInput('');
    setShowEmoji(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, {
        from: 'bot',
        text: getBotReply(msg, cb.rules, cb.fallback),
        time: now(),
      }]);
    }, 900);
  };

  const handleKey = e => { if (e.key === 'Enter') sendMessage(); };

  const insertEmoji = (emoji) => {
    setInput(prev => prev + emoji);
    setShowEmoji(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setMessages(prev => [...prev, {
      from: 'user',
      text: `📎 ${file.name}`,
      time: now(),
    }]);
    e.target.value = '';
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, {
        from: 'bot',
        text: cb.fileThanks.replace('{name}', file.name),
        time: now(),
      }]);
    }, 900);
  };

  const toggleRecording = () => {
    if (recording) {
      clearInterval(recTimer.current);
      setRecording(false);
      const secs = recSeconds;
      setRecSeconds(0);
      setMessages(prev => [...prev, {
        from: 'user',
        text: `🎤 ${cb.voiceMessage} (${secs}s)`,
        time: now(),
      }]);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages(prev => [...prev, {
          from: 'bot',
          text: cb.voiceReply,
          time: now(),
        }]);
      }, 900);
    } else {
      setRecording(true);
      setRecSeconds(0);
      recTimer.current = setInterval(() => setRecSeconds(s => s + 1), 1000);
    }
  };

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(!open)} aria-label={open ? cb.closeChat : cb.openChat}>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <img src={iconImg} alt={cb.assistantName} className="chat-fab-avatar" />
        )}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-topbar">
            <div className="chat-topbar-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              {cb.messagesTitle}
            </div>
            <button className="chat-topbar-close" onClick={() => setOpen(false)} aria-label={cb.minimizeChat}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          <div className="chat-header">
            <div className="chat-header-left">
              <div className="chat-avatar">
                <img src={iconImg} alt={cb.assistantName} />
                <span className="chat-avatar-online" />
              </div>
              <div className="chat-header-info">
                <strong>{cb.botName}</strong>
                <span className="chat-header-sub">{cb.headerSub}</span>
              </div>
            </div>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                {m.from === 'bot' && (
                  <div className="msg-avatar">
                    <img src={iconImg} alt={cb.assistantName} />
                  </div>
                )}
                <div className="msg-content">
                  {m.from === 'bot' && (
                    <div className="msg-sender">
                      {cb.assistantName} <span className="msg-bot-tag">{cb.botTag}</span>
                    </div>
                  )}
                  <div className={`chat-bubble ${m.from}`}>
                    {m.text.split('\n').map((line, j) => (
                      <span key={j}>{line}{j < m.text.split('\n').length - 1 && <br />}</span>
                    ))}
                  </div>
                  <div className="msg-meta">
                    <span className="msg-time">{m.time}</span>
                    {m.from === 'user' && (
                      <span className="msg-read" aria-label={cb.read}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 6 7 17l-5-5" />
                          <path d="m22 6-11 11-2-2" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <div className="msg-avatar">
                  <img src={iconImg} alt={cb.assistantName} />
                </div>
                <div className="msg-content">
                  <div className="chat-bubble bot typing">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-footer">
            {showEmoji && (
              <div className="emoji-picker">
                {EMOJIS.map(e => (
                  <button key={e} type="button" className="emoji-btn" onClick={() => insertEmoji(e)}>{e}</button>
                ))}
              </div>
            )}

            <div className="chat-footer-box">
              {recording ? (
                <div className="rec-indicator">
                  <span className="rec-dot" />
                  {cb.recording} {recSeconds}s
                </div>
              ) : (
                <input
                  type="text"
                  placeholder={cb.placeholder}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  aria-label={cb.placeholder}
                />
              )}

              <div className="chat-footer-bottom">
                <div className="chat-footer-icons">
                  <button type="button" className={`footer-icon-btn ${showEmoji ? 'active' : ''}`} onClick={() => setShowEmoji(v => !v)} aria-label={cb.emoji} title={cb.emoji}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8.5 14.5c.9 1.1 2.1 1.7 3.5 1.7s2.6-.6 3.5-1.7" />
                      <circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
                      <circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" />
                    </svg>
                  </button>
                  <button type="button" className="footer-icon-btn" onClick={() => fileRef.current.click()} aria-label={cb.attachFile} title={cb.attachFile}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                  </button>
                  <input ref={fileRef} type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                  <button type="button" className={`footer-icon-btn ${recording ? 'recording' : ''}`} onClick={toggleRecording} aria-label={recording ? cb.stopRecording : cb.voice} title={recording ? cb.stop : cb.voice}>
                    {recording ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="7" y="7" width="10" height="10" rx="2" fill="currentColor" stroke="none" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                        <path d="M12 18v4" />
                        <path d="M8 22h8" />
                      </svg>
                    )}
                  </button>
                </div>

                <button type="button" className="chat-send-btn" onClick={() => sendMessage()} aria-label={cb.send}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function now() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
