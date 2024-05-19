import { Text } from 'components';
import { GridItem } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodos, changeTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ item, index }) => {
  const dispatch = useDispatch();

  const deleteTodo = () => dispatch(deleteTodos(item.id));
  const editTodo = () => dispatch(changeTodo(item));

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {index}
        </Text>

        <Text>{item.text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={deleteTodo}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button onClick={editTodo} className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
