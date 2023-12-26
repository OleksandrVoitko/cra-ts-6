import { WrapperDiv } from "./StatusFilter.styled";
import { useSelector } from "react-redux";
import { statusFilters } from "../../../redux/todoList/constants";
import Button from "../../Button";

const StatusFilter = () => {
  const filter = useSelector((state) => state.todoList.filters.status);

  return (
    <WrapperDiv>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </WrapperDiv>
  );
};

export default StatusFilter;
