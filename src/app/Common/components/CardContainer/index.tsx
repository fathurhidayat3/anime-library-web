import Card, { Props as CardProps } from "../Card";
import styles from "./cardContainer.module.css";

type Props = {
  items: CardProps[];
};

export default function CardContainer(props: Props) {
  const { items } = props;

  return (
    <div className={styles["card-container"]}>
      {items.length > 0
        ? items.map((anime: any) => {
            return (
              <Card
                key={anime.id}
                id={anime.id}
                thumbnailSrc={anime.thumbnailSrc}
                to={`/detail/${anime.id}`}
                title={anime.title}
                subtitle={anime.subtitle}
                content={anime.content}
              />
            );
          })
        : null}
    </div>
  );
}
