import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";

const error = () => toast.error("Please, enter the keyword!");

export default function SearchBar({ onSubmit }) {
  const initialValues = {
    searchInput: "",
  };

  const handelSubmit = ({ searchInput }, actions) => {
    if (searchInput.trim() === "") {
      error();
      console.log("aha");
      return;
    }

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
