import React from "react";
import PropTypes from "prop-types";
import blacklist from "blacklist";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
const BLACKLIST_PROPS = ["text"];

class Title extends React.Component {
  render() {
    const props = blacklist(this.props, BLACKLIST_PROPS);
    const text = props.text ?? "paket phileep";
    return (
      <Gradient name="blue">
        <BigText text={text} />
      </Gradient>
    );
  }
}

Title.defaultProps = {
  columns: 0,
  percent: 1,
  left: 0,
  right: 0,
  character: "█",
  rightPad: false
};

Title.propTypes = {
  columns: PropTypes.number,
  percent: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  character: PropTypes.string,
  rightPad: PropTypes.bool
};

export default Title;
