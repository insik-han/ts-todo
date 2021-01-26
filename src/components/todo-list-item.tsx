import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../context/todo-context';
import React from 'react';

interface ITodoListItem {
  text: string;
  done: boolean;
  id: number;
}

interface IProps {
  done: boolean;
}

const TodoListItemContainer = styled.div<IProps>`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  :hover {
    .remove {
      display: block;
    }
  }
  .checkbox {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${(props) =>
      props.done &&
      css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
      `}
  }
  span {
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${(props) =>
      props.done &&
      css`
        color: #ced4da;
      `}
  }
  .remove {
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    :hover {
      color: #ff6b6b;
    }
    display: none;
  }
`;

const TodoListItem = ({ text, done, id }: ITodoListItem) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <TodoListItemContainer done={done}>
      <div className="checkbox" onClick={onToggle}>
        {done && <MdDone />}
      </div>
      <span>{text}</span>
      <div className="remove" onClick={onRemove}>
        <MdDelete />
      </div>
    </TodoListItemContainer>
  );
};

export default React.memo(TodoListItem);
