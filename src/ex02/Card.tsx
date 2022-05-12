import React from "react";

export const Card: React.FC = ({ children }) => (
  <section className="mdc-card">
    <div className="card-content content-type-person-info">{children}</div>
  </section>
);

// implement these subcomponents

export const CardImage: React.FC<{
  url: string;
  desc: string;
}> = (props) => {
  return (
    <figure>
      <img src={props.url} alt={props.desc} />
    </figure>
  );
};

type CardHeaderProps = {
  title: React.ReactNode;
  subTitle: React.ReactNode;
};
export const CardHeader: React.FC<CardHeaderProps> = ({ title, subTitle }) => {
  return (
    <header>
      <h1 className="mdc-typography--headline5">{title}</h1>
      <h2 className="mdc-typography--subtitle1">{subTitle}</h2>
    </header>
  );
};

export const CardInfo: React.FC<{
  icon: string;
  desc?: string;
  children: React.ReactNode;
}> = ({ desc, icon, children }) => {
  return (
    <p>
      <i
        className="rmwc-icon material-icons rmwc-icon--size-small"
        title={desc}
      >
        {icon}
      </i>
      &nbsp;
      {children}
    </p>
  );
};
