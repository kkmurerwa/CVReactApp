import React, { Component } from "react";
import EducationInfo from "./components/EducationInfo";
import JobExperienceInfo from "./components/JobExperienceInfo";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview_mode: false,
      title: "My Curriculum Vitae",
      name: "",
      email: "",
      phone: "",
      school_name: "",
      course: "",
      course_date: "",
    };

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  previewCV = (e) => {
    e.preventDefault();
    this.setState({
      preview_mode: true,
    });
  }

  modifyCV = (e) => {
    e.preventDefault();
    this.setState({
      preview_mode: false,
    });
  }

  render() {
    const {title, user_name, user_phone, user_email, preview_mode} = this.state

    if (preview_mode){
      return (
        <div>
          <h1>{title}</h1>
          <form onSubmit={this.modifyCV}>
            <GeneralInfo user_name={user_name} user_phone={user_phone} user_email={user_email} />
            <button type="submit"> Modify CV </button>
          </form>
            
        </div>
      );
    } else {
      return (
        <div>
          <h1>{ title }</h1>
          <form onSubmit={this.previewCV}>
            <h2>General Information</h2>
            <p>
              <label htmlFor="userName">Name </label>
              <input
                onChange={this.handleChange}
                value={user_name}
                type="text"
                name="user_name" 
                id="userName"/>
            </p>
  
            <p>
              <label htmlFor="userPhone">Phone </label>
              <input
                onChange={this.handleChange}
                value={user_phone}
                type="phone"
                name="user_phone" 
                id="userPhone"/>
            </p>
  
            <p>
              <label htmlFor="userEmail">Email </label>
              <input
                onChange={this.handleChange}
                value={user_email}
                type="email"
                name="user_email" 
                id="userEmail"/>
            </p>
  
            <button type="submit"> Preview CV </button>
          </form>
          
        </div>
      );
    }

    
  }
}

export default App;