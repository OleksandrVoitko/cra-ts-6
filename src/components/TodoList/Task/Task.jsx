import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Button, DivWrapper, InputCheckbox, PText } from "./Task.styled";

const Task = ({ task }) => {
  // const dispatch = useDispatch();
  // const hadleChange = () => dispatch();
  return (
    <DivWrapper>
      <InputCheckbox type="checkbox" checked={task.completed} />
      <PText>{task.text}</PText>
      <Button>
        <MdClose size={24} />
      </Button>
    </DivWrapper>
  );
};

export default Task;
