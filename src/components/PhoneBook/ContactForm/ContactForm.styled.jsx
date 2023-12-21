import styled from "styled-components";

export const Forma = styled.form`
  display: flex;
  flex-direction: column;

  padding: 40px;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 99%;
  height: 30px;
  margin-bottom: 10px;

  flex-grow: 1;
  font: inherit;

  &:focus {
    outline-color: orangered;
  }
`;

export const Button = styled.button`
  float: right;

  display: inline-flex;
  padding: 8px 12px;
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
