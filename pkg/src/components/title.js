import React from "react";
import PropTypes from "prop-types";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";

class Title extends React.Component {
  render() {
    const { text, color } = this.props;
    return (
      <Gradient name={color}>
        <BigText text={text} />
      </Gradient>
    );
  }
}

Title.defaultProps = {
  color: "blue",
  text: "paket phileep" // Define default text prop
};

Title.propTypes = {
  color: PropTypes.string, // Define text prop type
  text: PropTypes.string
};

export default Title;
