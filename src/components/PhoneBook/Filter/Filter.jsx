import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/phoneBook/actions";
import { Input } from "./Filter.styled";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.filterContacts);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <Input
        type="text"
        name="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter searched name..."
      />
    </div>
  );
};

export default Filter;
