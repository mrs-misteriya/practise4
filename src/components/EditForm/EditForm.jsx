import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodo, editTodo } from 'reduxTodo/todoSlice';
import { selectEdit } from 'reduxTodo/selectors';

import style from './EditForm.module.css';

export const EditForm = () => {
  const dispatch = useDispatch();
  const todo = useSelector(selectEdit);

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.text;
    dispatch(editTodo(value));
    dispatch(changeTodo(null));
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={todo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        onClick={() => dispatch(changeTodo(null))}
        className={style.editButton}
        type="button"
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
