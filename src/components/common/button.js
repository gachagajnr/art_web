import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function FlatButton({ name, variant, size,icon }) {
  return (
    <Button variant={variant} size={size}>
        {name}
    </Button>
  );
}

FlatButton.propTypes = {
  variant: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};

export default FlatButton;
