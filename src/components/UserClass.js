import React from "react";
import { GIT_USER_IMAGE } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Construct");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Pta nhi",
        status: "Pta nhi",
        avatar_url: "",
      },
      count: 0,
    };
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);
    console.log(this.props.name + " ComponentDidMount");
    try {
      const res = await fetch(`https://api.github.com/users/vhack01`);
      const userData = await res.json();
      console.log(userData);

      this.setState({
        userInfo: userData,
      });
    } catch (err) {
      console.log("Failed to fetch data from server:", err);
    }
  }

  componentDidUpdate() {
    console.log(this.props.name + " ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("this:", this);
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + " Render");
    const { userInfo } = this.state;
    // debugger;
    return (
      <div
        style={{
          width: "fit-content",
          border: "1px solid gray",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{this.props.name}</h1>
        <img
          style={{ width: "10%", borderRadius: "80%", objectFit: "contain" }}
          src={userInfo.avatar_url}
        />
        <h2>Name : {userInfo?.name} </h2>
        <h2>Status : {userInfo?.bio}</h2>
        <h2>Location : {userInfo?.location}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Counter : {this.state.count}
        </button>
      </div>
    );
  }
}

export default UserClass;
