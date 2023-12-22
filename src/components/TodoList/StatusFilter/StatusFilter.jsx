import { Button, WrapperDiv } from "./StatusFilter.styled";

const StatusFilter = () => {
  return (
    <WrapperDiv>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </WrapperDiv>
  );
};

export default StatusFilter;
