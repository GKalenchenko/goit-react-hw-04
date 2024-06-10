import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onAction }) {
  return (
    <div className={css.container}>
      <button onClick={onAction} type="button" className={css.button}>
        Load more
      </button>
    </div>
  );
}
