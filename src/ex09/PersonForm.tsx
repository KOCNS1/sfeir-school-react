import React, { useState } from "react";
import { Card, CardContent, CardActions, CardAction } from "../solution/Card";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";

const PersonFields: React.FC<{
  person: Person;
  onInputChange: (event: any) => void;
}> = ({ person, onInputChange }) => {
  return (
    <CardContent type="person-form">
      <TextField
        label="first name"
        name="firstname"
        value={person.firstname}
        onChange={onInputChange}
      />
      <TextField
        label="last name"
        name="lastname"
        value={person.lastname}
        onChange={onInputChange}
      />
      <Select
        label="position"
        name="position"
        value={person.position}
        onChange={onInputChange}
        options={[
          "Director",
          "Developer",
          "Product Owner",
          "Sales",
          "Human Resources",
        ]}
      />
      <TextField
        label="phone"
        name="phone"
        value={person.phone}
        onChange={onInputChange}
      />
      <TextField
        label="email"
        name="email"
        value={person.email}
        onChange={onInputChange}
      />
    </CardContent>
  );
};

type PersonFormProps = {
  person: Person;
  onSubmit: (newPerson: Person) => void;
};

export const PersonForm: React.FC<PersonFormProps> = ({ person, onSubmit }) => {
  const [model, setModel] = useState(person);

  const onInputChange = (event) => {
    setModel({
      ...model,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(model);
  };

  return (
    <Card>
      <form onSubmit={onFormSubmit}>
        <PersonFields person={model} onInputChange={onInputChange} />
        <CardActions>
          <CardAction type="submit">save</CardAction>
          <CardAction type="reset">cancel</CardAction>
        </CardActions>
      </form>
    </Card>
  );
};
