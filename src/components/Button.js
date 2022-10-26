import React from "react";

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render(){
      return (<button className={this.props.className}>{this.props.value}</button>);
    }
}

export default Button;