import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      className, value, onClick, id,
    } = this.props;
    return (<button className={className} type="button" onClick={onClick} id={id}>{value}</button>);
  }
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Button;
