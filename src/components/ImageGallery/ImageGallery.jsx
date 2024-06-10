import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ data }) {
  return (
    <>
      <ul className={css.list}>
        {data.map((imageData) => {
          return (
            <li key={imageData.id} className={css.item}>
              <ImageCard
                path={imageData.urls.full}
                description={imageData.alt_description}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
