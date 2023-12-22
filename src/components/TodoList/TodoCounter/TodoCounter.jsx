import { TextP } from "./TodoCounter.styled";

const TodoCounter = () => {
  return (
    <div>
      <TextP>
        Active: <span>0</span>
      </TextP>
      <TextP>
        Completed: <span>0</span>
      </TextP>
    </div>
  );
};

export default TodoCounter;
