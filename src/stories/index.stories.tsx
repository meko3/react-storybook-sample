import * as React from "react";
import { storiesOf } from "@storybook/react";
import App from "../App";

storiesOf("App", module)
  .add("with text", () => (<App />));
