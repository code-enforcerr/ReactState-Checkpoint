import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Code Enforcer",
        bio: "A passionate software developer.",
        imgSrc: "https://imgs.search.brave.com/zWlMflQxMJ0r4p8NNVUYtVasp9zanPdqEVqrkbYZCUs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg0/MDExNDEwL3Bob3Rv/L2hhbmRzb21lLXNt/aWxpbmctbWFuLWxv/b2tpbmctYXdheS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VEJlYmJveTJOMEZ2/WGp0b0I3VWxjVGZD/THVSaXROZFZ0elJu/RGhLTG5YUT0",
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide" : "Show"} Profile
        </button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <h2>{this.state.person.profession}</h2>
          </div>
        )}
        <p>Time since mounted: {this.state.mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
