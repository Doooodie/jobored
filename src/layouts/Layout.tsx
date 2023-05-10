import { Outlet } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Header from './Header';

function Layout() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Header />
      <Outlet />
    </MantineProvider>
  );
}

export default Layout;
