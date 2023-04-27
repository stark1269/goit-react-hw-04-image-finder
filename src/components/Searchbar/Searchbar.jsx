import { Field, Form, Formik } from "formik"

export const Searchbar = ({onSubmit}) => {
  return (
    <Formik
      initialValues={
        {name: ''}
    }
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <button type="submit">Search</button>

        <Field
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
  </Formik>
  )
};