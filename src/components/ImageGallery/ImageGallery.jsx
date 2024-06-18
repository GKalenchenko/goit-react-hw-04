import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ data, modalOpen }) {
  return (
    <>
      <ul className={css.list}>
        {data.map(({ urls, id, alt_description }) => {
          return (
            <li key={id} className={css.item}>
              <ImageCard
                imgFull={urls.full}
                imgReg={urls.regular}
                description={alt_description}
                modalOpen={modalOpen}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
