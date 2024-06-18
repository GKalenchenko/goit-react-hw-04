import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({ imgFull, imgReg, description, modalOpen }) {
  return (
    <>
      <div className={css.container} onClick={() => modalOpen(imgFull)}>
        <img className={css.img} src={imgReg} alt={description} />
      </div>
    </>
  );
}
