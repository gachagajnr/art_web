import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function ArtCard({ item }) {
  const { name, description, btnName } = item;
  return (
    <Card style={{ width: "18rem",   }} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{btnName}</Button>
      </Card.Body>
    </Card>
  );
}

ArtCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  btnName: PropTypes.number,
};
export default ArtCard;
