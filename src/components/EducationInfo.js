import React, { Component } from "react";

class EducationInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;
    
        return (
          <div>
            <h2>Educational Background</h2>
          </div>
        );
    }
}

export default EducationInfo