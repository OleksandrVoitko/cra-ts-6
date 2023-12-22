import { Route, Routes } from "react-router-dom";
import PhoneBook from "../pages/PhoneBook/PhoneBook";
import TodoList from "../pages/TodoList/TodoList";
import SharedLoyout from "./SharedLoyout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLoyout />}>
        <Route index element={<PhoneBook />} />
        <Route path="todo-list" element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default App;
