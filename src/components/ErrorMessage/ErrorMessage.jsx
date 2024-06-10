import css from "../ErrorMessage/ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.message}>
      Failed to load images. Please try again later.
    </p>
  );
}
