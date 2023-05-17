import { TextInput, Button } from '@mantine/core';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

function SearchBar() {
  return (
    <TextInput
      aria-label='Поиск'
      icon={<SearchIcon />}
      placeholder='Введите название вакансии'
      rightSection={<Button h={32}>Поиск</Button>}
    />
  );
}

export default SearchBar;
