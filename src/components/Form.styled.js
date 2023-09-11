import styled from 'styled-components';
export const FormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
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
  display: inline-block;
  width: 5cm;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background: gray;
`;
