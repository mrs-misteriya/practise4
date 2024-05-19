import { selectFilteredTodos } from 'reduxTodo/selectors';
import { useSelector } from 'react-redux';
import { Grid } from '../Grid/Grid';
import { Todo } from '../Todo/Todo';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <Grid>
      {todos.map((item, index) => (
        <Todo key={item.id} item={item} index={index + 1} />
      ))}
    </Grid>
  );
};
