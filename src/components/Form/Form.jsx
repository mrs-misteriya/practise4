import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodos } from 'reduxTodo/todoSlice';

export const Form = () => {
  const dispacth = useDispatch();

  const [value, setValue] = useState('');

  const hadleInput = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      text: value,
    };

    dispacth(addTodos(data));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        onChange={hadleInput}
        value={value}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
