import { Route, Routes } from "react-router-dom";
import { KanbanBoard } from "../pages/KanbanBoard/KanbanBoard";
import { PhoneBook } from "../pages/PhoneBook/PhoneBook";
import { SharedLoyout } from "./SharedLoyout/SharedLoyout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLoyout />}>
        <Route index element={<PhoneBook />} />
        <Route path="kanban" element={<KanbanBoard />} />
      </Route>
    </Routes>
  );
}

export default App;
