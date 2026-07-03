import { useNavigation } from '../context/NavigationContext';
import { useLocation } from 'react-router-dom';

/**
 * Drop-in replacement for <Link> that triggers the progress bar.
 */
export default function TransitionLink({ to, children, className, style, onClick, ...rest }) {
  const { navigateTo } = useNavigation();
  const { pathname }   = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    if (pathname !== to) navigateTo(to);
  };

  return (
    <a href={to} className={className} style={style} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
