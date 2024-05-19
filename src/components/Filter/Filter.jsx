import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterTodos } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      onChange={e => {
        dispatch(filterTodos(e.target.value));
      }}
      className={style.input}
      placeholder="Find it"
      name="filter"
    />
  );
};
