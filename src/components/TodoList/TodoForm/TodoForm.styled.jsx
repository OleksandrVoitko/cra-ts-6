import styled from "styled-components";

export const Forma = styled.form`
  display: flex;
  gap: 0 10px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  font: inherit;

  &:focus {
    outline-color: orangered;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 10px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #e2e5e8;
  color: black;

  &:hover,
  &:focus {
    color: white;
    background-color: orangered;
  }
`;
