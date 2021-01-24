import styled from 'styled-components';

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
`;

const TodoHead = () => {
  return (
    <TodoHeadContainer>
      <h1>2019년 7월 10일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadContainer>
  )
}

export default TodoHead
