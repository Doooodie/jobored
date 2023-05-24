import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { MantineProvider, Box } from '@mantine/core';
import customTheme from 'utils/mantine/customTheme';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useGetAuthQuery } from 'redux/api/jobsApi';
import { setAuth } from 'redux/slices/authSlice';
import Header from './Header';

function Layout() {
  const dispatch = useAppDispatch();
  const { ttl } = useAppSelector((store) => store.auth);
  const { data } = useGetAuthQuery(null, { skip: ttl > Date.now() / 1000 });

  useEffect(() => {
    if (data) {
      dispatch(
        setAuth({
          access_token: data.access_token,
          ttl: data.ttl,
        })
      );
    }
  }, [data, dispatch]);

  return (
    <MantineProvider theme={customTheme} withNormalizeCSS withGlobalStyles>
      <Header />
      <Box component='main' pt={40} pb={44} bg='#F5F5F5' mih='calc(100vh - 84px)'>
        <Outlet />
      </Box>
    </MantineProvider>
  );
}

export default Layout;
