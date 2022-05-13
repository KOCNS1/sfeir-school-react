import React, { SyntheticEvent, useState } from "react";
import { Card, CardContent, CardActions, CardAction } from "../solution/Card";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";
import { useForm } from "react-hook-form";
import { savePerson } from "../utils";

type FieldsProps = {
  register: any;
};
const PersonFields: React.FC<FieldsProps> = ({ register }) => {
  const hackedRegister = (fieldName) => {
    const { ref, ...rest } = register(fieldName);
    return { inputRef: ref, ...rest };
  };
  return (
    <CardContent type="person-form">
      <TextField label="first name" {...hackedRegister("firstname")} />
      <TextField label="last name" {...hackedRegister("lastname")} />
      <Select
        label="position"
        options={[
          "Director",
          "Developer",
          "Product Owner",
          "Sales",
          "Human Resources",
        ]}
        {...hackedRegister("position")}
      />
      <TextField label="phone" {...hackedRegister("phone")} />
      <TextField label="email" {...hackedRegister("email")} />
    </CardContent>
  );
};

type PersonFormProps = {
  person: Person;
  cancel: () => void;
};

export const PersonForm: React.FC<PersonFormProps> = ({ person, cancel }) => {
  const { register, handleSubmit } = useForm({ defaultValues: person });

  const doSave = (data) => {
    savePerson(data);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(doSave)}>
        <PersonFields register={register} />
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
