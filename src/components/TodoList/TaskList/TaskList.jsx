import { useSelector } from "react-redux";
// import { store } from "../../../redux/store";
const TaskList = () => {
  const list = useSelector((store) => store.todoList.tasks);
  console.log(list);
  return <div></div>;
};
export default TaskList;
