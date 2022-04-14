import React from "react";
import { Card, CardContent, CardActions, CardAction } from "../solution/Card";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";
import { Form, Formik, useField, useFormikContext } from "formik";
import { ObjectFlags } from "typescript";

const PersonFields: React.FC = () => {
  const { values, handleChange, errors } = useFormikContext<Person>();

  const [field, meta] = useField("firstname");

  return (
    <CardContent type="person-form">
      <TextField
        invalid={errors.firstname === "Required"}
        name="firstname"
        label="first name"
        value={meta.value}
        onChange={field.onChange}
      />
      {errors.firstname}

      <TextField
        invalid={errors.lastname === "Required"}
        name="lastname"
        label="last name"
        value={values.lastname}
        onChange={handleChange}
      />
      {errors.lastname}

      <Select
        name="position"
        label="position"
        options={[
          "Director",
          "Developer",
          "Product Owner",
          "Sales",
          "Human Resources",
        ]}
        value={values.position}
        onChange={handleChange}
      />
      <TextField
        invalid={errors.phone === "Required"}
        name="phone"
        label="phone"
        value={values.phone}
        onChange={handleChange}
      />
      {errors.phone}

      <TextField
        name="email"
        label="email"
        value={values.email}
        onChange={handleChange}
      />
    </CardContent>
  );
};

type PersonFormProps = {
  person: Person;
  onSave: (person: Person) => void;
  onCancel: () => void;
};

export const PersonForm: React.FC<PersonFormProps> = ({
  person,
  onSave,
  onCancel,
}) => {
  const onSubmit = (newPerson) => onSave(newPerson);

  const onValidate = (values) => {
    let errors = {};

    Object.keys(values).forEach((key) => {
      console.log(key);
      if (values[key] === "") {
        errors[key] = "Required";
      }
    });

    return errors;
  };

  return (
    <Card>
      <Formik initialValues={person} onSubmit={onSubmit} validate={onValidate}>
        {({ errors }) => (
          <Form>
            <PersonFields />
            <CardActions>
              <CardAction
                type="submit"
                disabled={Object.keys(errors).length > 0}
              >
                save
              </CardAction>
              <CardAction type="reset">cancel</CardAction>
            </CardActions>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
