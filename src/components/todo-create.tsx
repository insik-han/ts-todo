import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';

interface ICircleProps {
  open: boolean;
}

const CircleButton = styled.button<ICircleProps>`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const TodoCreateContainer = styled.div`
  .input-form-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    .input-form {
      background-color: #f8f9fa;
      padding: 32px 32px 72px 32px;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
      border-top: 1px solid #e9ecef;
      input {
        padding: 12px;
        border-radius: 4px;
        border: 1px solid #dee2e6;
        width: 100%;
        outline: none;
        font-size: 1.125rem;
        box-sizing: border-box;
      }
    }
  }
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <>
      {open && (
        <TodoCreateContainer>
          <div className='input-form-container'>
            <div className='input-form'>
              <input placeholder="할 일을 입력 후, Enter를 누르세요" />
            </div>
          </div>
        </TodoCreateContainer>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default TodoCreate