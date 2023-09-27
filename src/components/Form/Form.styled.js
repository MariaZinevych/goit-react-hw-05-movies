import styled from 'styled-components';
export const FormList = styled.form`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 16px;
  flex-wrap: wrap;
`;

export const But = styled.button`
  display: inline-block;
  width: 58px;
  height: 58px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 8px 32px 8px 8px;
  width: 250px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #064e8a;
  outline: none;
`;
