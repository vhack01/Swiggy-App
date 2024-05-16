import UserCard from "./UserCard";
import { Component } from "react";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
    this.state = {};
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  render() {
    console.log("Parent Render");
    // const { users } = this.state;
    // console.log("users:", users.length);
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name="FirstChild" />
        <UserClass name="SecondChild" />
      </div>
    );
  }
}

export default AboutClass;
