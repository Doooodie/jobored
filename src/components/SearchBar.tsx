import { useRef } from 'react';
import { TextInput, Button } from '@mantine/core';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { useAppDispatch } from 'redux/hooks';
import { changeForm } from 'redux/slices/formSlice';

function SearchBar() {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(changeForm({ keyword: ref?.current?.value }));
  };

  return (
    <TextInput
      ref={ref}
      aria-label='Поиск'
      data-elem='search-input'
      icon={<SearchIcon />}
      placeholder='Введите название вакансии'
      onSubmit={onSubmit}
      rightSection={
        <Button h={32} data-elem='search-button'>
          Поиск
        </Button>
      }
    />
  );
}

export default SearchBar;
