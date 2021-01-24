import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

interface ITodoListItem {
  text: string;
  done: boolean;
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
    ${props => props.done && css`
      border: 1px solid #38d9a9; 
      color: #38d9a9;`
    }
  }
  span {
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
      props.done &&
      css`color: #ced4da;`
    }
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

const TodoListItem = ({ text, done }: ITodoListItem) => {
  return (
    <TodoListItemContainer done={done}>
      <div className='checkbox'>{done && <MdDone />}</div>
      <span>{text}</span>
      <div className="remove"><MdDelete /></div>
    </TodoListItemContainer>
  )
}

export default TodoListItem
