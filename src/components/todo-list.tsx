import styled from 'styled-components';
import { useTodoState } from '../context/todo-context';
import TodoListItem from './todo-list-item';

const TodoListContainer = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListContainer>
      {todos.map((v: any, i: number) => <TodoListItem key={i} id={v.id} text={v.text} done={v.done}/>)}
    </TodoListContainer>
  )
}

export default TodoList
