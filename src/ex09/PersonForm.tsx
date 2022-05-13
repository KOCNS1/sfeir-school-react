import React, { SyntheticEvent, useState } from "react";
import { Card, CardContent, CardActions, CardAction } from "../solution/Card";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";
import { savePerson } from "../utils";

type FieldsProps = {
  fields: Person;
  updateField: (ev: SyntheticEvent) => void;
};
const PersonFields: React.FC<FieldsProps> = ({ fields, updateField }) => {
  return (
    <CardContent type="person-form">
      <TextField
        label="first name"
        onChange={updateField}
        name="firstname"
        value={fields.firstname}
      />
      <TextField
        label="last name"
        onChange={updateField}
        name="lastname"
        value={fields.lastname}
      />
      <Select
        label="position"
        onChange={updateField}
        name="position"
        value={fields.position}
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
        onChange={updateField}
        name="phone"
        value={fields.phone}
      />
      <TextField
        label="email"
        name="email"
        value={fields.email}
        onChange={updateField}
      />
    </CardContent>
  );
};

type PersonFormProps = {
  person: Person;
  cancel: () => void;
};

export const PersonForm: React.FC<PersonFormProps> = ({ person, cancel }) => {
  const [fields, setFields] = useState(person);
  const updateField = (ev) => {
    setFields({ ...fields, [ev.target.name]: ev.target.value });
  };
  console.log(person, fields);

  const doSave = (ev) => {
    ev.preventDefault();
    savePerson(fields);
  };

  return (
    <Card>
      <form onSubmit={doSave}>
        <PersonFields fields={fields} updateField={updateField} />
        <CardActions>
          <CardAction type="submit">save</CardAction>
          <CardAction type="reset" onClick={cancel}>
            cancel
          </CardAction>
        </CardActions>
      </form>
    </Card>
  );
};
