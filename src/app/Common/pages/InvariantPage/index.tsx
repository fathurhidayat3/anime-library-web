import * as React from "react";
import { Link } from "react-router-dom";

import styles from "./notFoundPage.module.css";
import { RoutePaths } from "../../../router";

type Props = {
  message?: string;
  backTo?: {
    text: string;
    to: string;
  };
};

export default function InvariantPage(props: Props): React.ReactElement {
  const {
    message = "Oopss... Something Wrong",
    backTo = { text: "Back to Home Page", to: RoutePaths.HOME },
  } = props;
  const { text, to } = backTo;

  return (
    <div className={styles["invariant"]}>
      <h3>{message}</h3>
      <Link to={to}>{text}</Link>
    </div>
  );
}
