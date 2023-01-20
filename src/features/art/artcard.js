import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import PropTypes from "prop-types";
import Collapse from "react-bootstrap/Collapse";

import { ThreeDotsVertical } from "react-bootstrap-icons";

function ArtCard({ item }) {
  const [open, setOpen] = useState(false);

  const { name, description, price, category } = item;
  return (
    <div className="border-bottom">
      <img
        alt=""
        style={{ width: "100%", display: "block" }}
        height="auto"
        // background-size="contain"
        src="http://3.bp.blogspot.com/_EqZzf-l7OCg/TNmdtcyGBZI/AAAAAAAAAD8/KD5Y23c24go/s1600/homer-simpson-1280x1024.jpg"
      />

      <h6 style={{ fontWeight: 200 }}>The sun rises {name}</h6>
      <p className="font-weight-light" style={{ fontSize: 13 }}>
        Print{category}
      </p>
      <Stack direction="horizontal" gap={2}>
        <div className="ms-auto"/>
          <h6 style={{ fontSize: 14, fontWeight: 300 }}>KES{" "}3700{price}</h6>
          
        <ThreeDotsVertical onClick={() => setOpen(!open)} />
      </Stack>

      <Collapse in={open}>
        <p class="font-italic"> {description}</p>
      </Collapse>
    </div>
  );
}

ArtCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
export default ArtCard;
