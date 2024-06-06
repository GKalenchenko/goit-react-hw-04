import { Formik, Form, Field } from "formik";

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
          <Form>
            <Field
              type="text"
              name="searchInput"
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </>
  );
}
