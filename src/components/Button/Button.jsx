import { ButtonStyle } from "./Button.styled";

const Button = ({ selected = false, type = "button", children }) => {
  return (
    <ButtonStyle selected={selected} type={type}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
