import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user_name, user_phone, user_email } = this.props;

    return (
      <div>
        <h2>General Info</h2>
        <p>Name: { user_name }</p>
        <p>Phone: { user_phone }</p>
        <p>Email: { user_email }</p>
      </div>
    );
  }
}

export default GeneralInfo;