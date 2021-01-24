import styled from 'styled-components';
import TodoListItem from './todo-list-item';

const TodoListContainer = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
`;

const todoItems = [
  {
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    text: '컴포넌트 스타일링 하기',
    done: true,
  },
  {
    text: 'Context 만들기',
    done: false,
  },
  {
    text: '기능 구현하기',
    done: false,
  },
];

const TodoList = () => {
  return (
    <TodoListContainer>
      {todoItems.map((v, i) => <TodoListItem key={i} text={v.text} done={v.done}/>)}
    </TodoListContainer>
  )
}

export default TodoList
