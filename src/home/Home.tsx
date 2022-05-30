import { useIsAuthenticated } from '@azure/msal-react';
import HomeLoggedIn from './HomeLoggedIn';
import HomeLoggedOut from './HomeLoggedOut';

export default function Home() {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? <HomeLoggedIn /> : <HomeLoggedOut />;
}
