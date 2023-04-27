import { Formik } from "formik"
import { Button, Form, Icon, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

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
        <Button type="submit"><Icon /></Button>

        <Input
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
      </Form>
  </Formik>
  )
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};