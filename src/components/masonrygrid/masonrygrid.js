/**
 *
 * MasonryGrid
 *
 */

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import PropTypes from "prop-types";
// import styled from 'styled-components';

function MasonryGrid(props) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry gutter="15px">{props.children}</Masonry>
    </ResponsiveMasonry>
  );
}

MasonryGrid.propTypes = {
  children: PropTypes.node,
};

export default MasonryGrid;
