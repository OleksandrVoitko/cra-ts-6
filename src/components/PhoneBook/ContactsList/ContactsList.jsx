import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { Li, Ul } from "./ContactsList.styled";

const ContactsList = () => {
  const contacts = useSelector((store) => store.contacts);

  return (
    <Ul>
      {contacts.map((contact) => (
        <Li key={contact.id}>
          <Contact contact={contact} />
        </Li>
      ))}
    </Ul>
  );
};

export default ContactsList;
