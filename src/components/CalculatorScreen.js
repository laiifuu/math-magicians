import React from 'react';
import PropTypes from 'prop-types';

class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    return (<div className="width_100 black left-text">{`${total || ''} ${operation || ''} ${next || ''}`}</div>);
  }
}

CalculatorScreen.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default CalculatorScreen;
