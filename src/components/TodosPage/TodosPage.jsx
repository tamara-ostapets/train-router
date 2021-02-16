import {useEffect, useState} from 'react';
import {TodoTable} from '../TodoTable';
import {getTodos} from '../../helpers';

export const TodosPage = ({match}) => {
  const [todos, setTodos] = useState([]);

  const todoId = +match.params.todoId;

  useEffect(() => {
    getTodos()
      .then(setTodos);
  }, []);

  return (
    <>
      <h2 className="subtitle">Todos page</h2>
      <TodoTable 
        todos={todos} 
        selectedTodoId={todoId}
      />
    </>
  )
}