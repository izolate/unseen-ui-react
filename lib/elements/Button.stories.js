import "../../build/unseen.css";

import Button from "./Button";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  component: Button,
  title: "Button",
};

export const unstyled = () => (
  <Button type="button" onClick={action("clicked")}>
    Hello Button
  </Button>
);

export const primary = () => (
  <Button primary type="button" onClick={action("clicked")}>
    Select
  </Button>
);

export const success = () => (
  <Button success type="button" onClick={action("clicked")}>
    Select
  </Button>
);
