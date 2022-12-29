import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import styles from "./thumbnail.module.css";

type Props = {
  src: string;
  alt: string;
};

export default function Thumbnail(props: Props): React.ReactElement {
  const { src, alt } = props;

  return (
    <LazyLoadImage
      className={styles["img"]}
      src={src}
      alt={alt}
      effect="blur"
    />
  );
}
