import { useAppDispatch } from 'redux/hooks';
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { changeForm } from 'redux/slices/formSlice';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

function SearchBar() {
  const dispatch = useAppDispatch();
  const form = useForm({
    initialValues: {
      searchInput: '',
    },
  });

  const submitHandler = () => {
    form.onSubmit((values) => {
      dispatch(changeForm({ keyword: values.searchInput }));
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <TextInput
        {...form.getInputProps('searchInput')}
        aria-label='Поиск'
        data-elem='search-input'
        icon={<SearchIcon />}
        placeholder='Введите название вакансии'
        rightSection={
          <Button type='submit' h={32} data-elem='search-button'>
            Поиск
          </Button>
        }
      />
    </form>
  );
}

export default SearchBar;
