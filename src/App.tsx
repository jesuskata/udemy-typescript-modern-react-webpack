// Dependencies
import React, { Fragment, useState } from 'react';

// Types
type InputElement = React.ChangeEvent<HTMLInputElement>;
type FormElement = React.FormEvent<HTMLFormElement>;

// Interfaces
interface ITodo {
  text: string;
  complete: boolean;
}

export const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChangeValue = (e: InputElement): void => {
    setValue(e.target.value);
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>TODO List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={value}
          onChange={handleChangeValue}
          name="todo"
          id="todo"
        />
        <button type="submit">Add TODO</button>
        <section>
          {todos.map(
            (todo: ITodo, index: number): JSX.Element => (
              /* eslint-disable-next-line react/no-array-index-key */
              <Fragment key={`${todo.text}-${index}`}>
                <p
                  style={{
                    textDecoration: todo.complete ? 'line-through' : null,
                  }}
                >
                  {todo.text}
                </p>
                <button type="button" onClick={() => completeTodo(index)}>
                  {todo.complete ? 'Incomplete' : 'Complete'}
                </button>
                <button type="button" onClick={() => deleteTodo(index)}>
                  &times;
                </button>
              </Fragment>
            )
          )}
        </section>
      </form>
    </>
  );
};
