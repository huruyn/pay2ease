import { Outlet } from 'react-router-dom';
import VerticalNavLinks from './VerticalNavLinks';

export default function HomeLoggedIn() {
  return (
    <main className="default-layout">
      <div className="left-side-nav">
        <VerticalNavLinks />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
}
