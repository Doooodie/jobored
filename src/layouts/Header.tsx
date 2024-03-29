import { Link, useLocation } from 'react-router-dom';
import { Box, Container, Group, Image, Title, Flex, Anchor, SimpleGrid } from '@mantine/core';
import logo from 'assets/logo.svg';

function Header() {
  const { pathname } = useLocation();
  const isHome = /^\/\d*$/.test(pathname);
  const isFavorites = pathname === '/favorites';

  return (
    <Box component='header' h={84}>
      <Container h='100%'>
        <SimpleGrid
          h='100%'
          cols={3}
          verticalSpacing={0}
          breakpoints={[
            { maxWidth: 900, cols: 2 },
            { maxWidth: 600, cols: 1 },
          ]}
          sx={{
            alignItems: 'center',
            '@media (max-width: 600px)': {
              gridTemplateColumns: 'auto',
              justifyItems: 'center',
            },
          }}
        >
          <Group spacing={12}>
            <Image src={logo} width={30} alt='Jobored logo' />
            <Title
              size={24}
              order={2}
              sx={{
                fontFamily: 'Poppins, sans-serif',
                cursor: 'default',
                letterSpacing: '-0.02em',
              }}
            >
              Jobored
            </Title>
          </Group>

          <Flex justify='space-between' gap={60} sx={{ justifySelf: 'center' }}>
            <Anchor component={Link} to='/' c={isHome ? 'blue' : ''}>
              Поиск Вакансий
            </Anchor>
            <Anchor component={Link} to='/favorites' c={isFavorites ? 'blue' : ''}>
              Избранное
            </Anchor>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Header;
