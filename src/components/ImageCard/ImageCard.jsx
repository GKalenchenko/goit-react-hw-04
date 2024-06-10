import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({ path, description }) {
  return (
    <>
      <div className={css.container}>
        <img className={css.img} src={path} alt={description} />
      </div>
    </>
  );
}
