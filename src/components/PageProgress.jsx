import { useNavigation } from '../context/NavigationContext';
import './PageProgress.css';

export default function PageProgress() {
  const { visible, progress } = useNavigation();
  if (!visible) return null;

  return (
    <div
      className={`page-progress-bar${progress >= 100 ? ' is-complete' : ''}`}
      style={{ width: `${progress}%` }}
    />
  );
}
