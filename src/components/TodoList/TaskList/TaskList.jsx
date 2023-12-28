import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { Li, Ul } from "./TaskList.styled";

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks);
  return (
    <Ul>
      {taskList.map((task) => (
        <Li key={task.id}>
          <Task task={task} />
        </Li>
      ))}
    </Ul>
  );
};
export default TaskList;
