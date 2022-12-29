import * as React from "react";

import styles from "./badge.module.css";

type Props = { name: string };

export default function Badge(props: Props): React.ReactElement {
  const { name } = props;
  return <div className={styles["badge"]}>{name}</div>;
}
