import styles from "./thumbnail.module.css";

type Props = {
  src: string;
  alt: string;
};

export default function Thumbnail(props: Props): React.ReactElement {
  const { src, alt } = props;

  return <img className={styles["img"]} src={src} alt={alt} />;
}
