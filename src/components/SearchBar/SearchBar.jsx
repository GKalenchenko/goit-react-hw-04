import { Formik, Form, Field } from "formik";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const initialValues = {
    searchInput: "",
  };

  const handelSubmit = ({ searchInput }, actions) => {
    onSubmit(searchInput);
    actions.resetForm();
  };

  return (
    <>
      <header>
        <Formik initialValues={initialValues} onSubmit={handelSubmit}>
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="searchInput"
              placeholder="Search images and photos"
            />
            <button type="submit" className={css.button}>
              Search
            </button>
          </Form>
        </Formik>
      </header>
    </>
  );
}
