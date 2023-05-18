import { TextInput, Button } from '@mantine/core';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

function SearchBar() {
  return (
    <TextInput
      aria-label='Поиск'
      data-elem='search-input'
      icon={<SearchIcon />}
      placeholder='Введите название вакансии'
      rightSection={
        <Button h={32} data-elem='search-button'>
          Поиск
        </Button>
      }
    />
  );
}

export default SearchBar;
