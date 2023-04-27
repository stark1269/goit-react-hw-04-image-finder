import { Btn, Div } from "./Button.styled";
import PropTypes from 'prop-types';

export const Button = ({loadMore}) => {
  return (
    <Div><Btn onClick={loadMore} type="button">Load More...</Btn></Div>
  )
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
}