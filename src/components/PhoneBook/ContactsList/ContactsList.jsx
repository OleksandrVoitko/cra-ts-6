import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { Li, Ul } from "./ContactsList.styled";

const ContactsList = () => {
  const contacts = useSelector((store) => store.contacts);
  const filter = useSelector((store) => store.filterContacts);

  const renderedContscts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Ul>
      {renderedContscts.map((contact) => (
        <Li key={contact.id}>
          <Contact contact={contact} />
        </Li>
      ))}
    </Ul>
  );
};

export default ContactsList;
