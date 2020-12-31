import React, {Component} from "react";

class JobExperienceInfo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { title } = this.props;
    
        return (
          <div>
            <h2>Job Experience</h2>
          </div>
        );
    }
}

export default JobExperienceInfo