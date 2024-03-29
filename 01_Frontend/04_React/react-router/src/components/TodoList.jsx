import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList).filter(
    (el) => el.done === false,
  );
  const todoListLen = useSelector((state) => state.todo.todoList).length;
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            if (inputRef.current.value === '') return;
            dispatch(create({ id: todoListLen, text: inputRef.current.value }));
            inputRef.current.value = '';
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((el) => (
          <li key={el.id}>
            {el.text}{' '}
            <button onClick={() => dispatch(done(el.id))}>완료</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
