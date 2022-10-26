import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, value } = this.props;
    return (<button className={className} type="button">{value}</button>);
  }
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
