import { Outlet } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import customTheme from 'utils/customTheme';
import Header from './Header';

function Layout() {
  return (
    <MantineProvider theme={customTheme} withNormalizeCSS withGlobalStyles>
      <Header />
      <Outlet />
    </MantineProvider>
  );
}

export default Layout;
