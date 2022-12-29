import styles from "./mainLayout.module.css";

type Props = {
  children: React.ReactElement;
};

export default function MainLayout(props: Props) {
  const { children } = props;

  return <div className={styles["main-layout"]}>{children}</div>;
}
