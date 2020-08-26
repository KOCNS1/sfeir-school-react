import React from "react";
import { render } from "react-dom";

import { Config } from "../solution/Config";

// import { PeopleProvider } from "../solution/ex08/PeopleContext";
import { App } from "./App";
import { PeopleProvider } from "./PeopleContext";
// import { App } from "../solution/ex08/App";

render(
  <Config useRouter>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </Config>,
  document.getElementById("root")
);
