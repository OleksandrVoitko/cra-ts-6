import { Button, Forma, Input, Label } from "./ContactForm.styled";

export const ContactForm = () => {
  return (
    <Forma action="">
      <Label for="firstName"> First name</Label>
      <Input
        type="text"
        id="firstName"
        minlength="2"
        placeholder=" "
        required
      />

      <Label for="phone">Phone </Label>
      <Input type="tel" id="phone" minlength="2" placeholder=" " required />
      <div>
        <Button type="submit">Add</Button>
      </div>
    </Forma>
  );
};
