import { useSelector } from "react-redux";
import { TextP } from "./ContactCounter.styled";

const ContactCounter = () => {
  const contacts = useSelector((store) => store.contacts);
  return (
    <div>
      <TextP>
        Total: <span>{contacts.length}</span>
      </TextP>
    </div>
  );
};

export default ContactCounter;
