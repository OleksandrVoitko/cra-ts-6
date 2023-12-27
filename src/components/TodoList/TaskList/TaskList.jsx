import { useSelector } from "react-redux";

const TaskList = () => {
  const list = useSelector((store) => store.tasks);
  console.log(list);
  return <div></div>;
};
export default TaskList;
