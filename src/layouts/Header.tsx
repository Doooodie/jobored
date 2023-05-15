import { Link, useLocation } from 'react-router-dom';
import {
  Header as MantineHeader,
  Container,
  Group,
  Image,
  Title,
  Flex,
  Anchor,
  SimpleGrid,
} from '@mantine/core';
import logo from 'assets/logo.svg';

function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <MantineHeader height={84}>
      <Container h='100%'>
        <SimpleGrid
          h='100%'
          cols={3}
          breakpoints={[
            { maxWidth: '48rem', cols: 2 },
            { maxWidth: '36rem', cols: 1 },
          ]}
          sx={{
            alignItems: 'center',
            '@media (max-width: 36rem)': {
              gridTemplateColumns: 'auto',
              justifyItems: 'center',
            },
          }}
        >
          <Group spacing={12} noWrap>
            <Image src={logo} width={30} alt='Jobored logo' />
            <Title order={2} sx={{ fontFamily: 'Poppins, sans-serif', cursor: 'default' }}>
              Jobored
            </Title>
          </Group>

          <Flex justify='space-between' wrap='wrap' gap={20} maw={273}>
            <Anchor component={Link} to='/' c={isHome ? 'blue' : ''}>
              Поиск Вакансий
            </Anchor>
            <Anchor component={Link} to='/favorites' c={!isHome ? 'blue' : ''}>
              Избранное
            </Anchor>
          </Flex>
        </SimpleGrid>
      </Container>
    </MantineHeader>
  );
}

export default Header;
