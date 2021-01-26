import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../context/todo-context';
import { useRouter } from 'next/router';

const TodoHeadContainer = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 2.25rem;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 1.313rem;
  }
  .tasks-left {
    color: #20c997;
    font-size: 1.125rem;
    margin-top: 40px;
    font-weight: bold;
  }
  a {
    cursor: pointer;
    :hover {
      color: #20c997;
    }
  }
`;

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo: any) => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  const router = useRouter();

  return (
    <TodoHeadContainer>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
      <br />
      <a onClick={() => router.push('/api-test')}>api 테스트</a>
    </TodoHeadContainer>
  );
};

export default TodoHead;
