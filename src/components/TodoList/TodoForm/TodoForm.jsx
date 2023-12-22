import { Input, Forma, Button } from "./TodoForm.styled";

const TodoForm = () => {
  const handleSubmit = (e) => {
    e.peventDefault();
  };
  return (
    <Forma onSubmit={handleSubmit}>
      <Input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add</Button>
    </Forma>
  );
};

export default TodoForm;
