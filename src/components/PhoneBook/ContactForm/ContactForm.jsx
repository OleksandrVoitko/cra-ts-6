import { Button, Forma, Input, Label } from "./ContactForm.styled";

const ContactForm = () => {
  return (
    <Forma action="">
      <Label htmlFor="firstName">
        Name
        <Input
          type="text"
          id="firstName"
          minLength="2"
          placeholder="Enter name..."
          required
        />
      </Label>

      <Label htmlFor="phone">
        Phone
        <Input
          type="tel"
          id="phone"
          minLength="2"
          placeholder="Enter phone..."
          required
        />
      </Label>
      <div>
        <Button type="submit">Add</Button>
      </div>
    </Forma>
  );
};

export default ContactForm;
