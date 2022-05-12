import React from "react";
import { Card, CardImage, CardHeader, CardInfo } from "./Card";

type PersonCardProps = {
  person: Person;
};

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const { id, photo, firstname, lastname } = person;

  let manager = null;

  if (person.managerId !== "") {
    manager = (
      <CardInfo
        icon="supervisor_account"
        desc="manager"
        children={<a href={`/person/${person.managerId}`}>{person.manager}</a>}
      />
    );
  }

  return (
    <Card>
      <CardImage url={photo} desc={`face of ${firstname}`} />
      <CardHeader
        title={
          <a href={`/person/${id}`}>
            {firstname} {lastname}
          </a>
        }
        subTitle={person.position}
      />
      <CardInfo icon="email">
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </CardInfo>
      <CardInfo icon="phone">
        <a href={"tel:" + person.phone}>{person.phone}</a>
      </CardInfo>

      {manager}
    </Card>
  );
};
