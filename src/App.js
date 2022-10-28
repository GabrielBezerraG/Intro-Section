import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisibility: false,
      featuresVisibility: false,
      companyVisibility: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility(element) {
    const currentState = this.state[element];
    this.setState({
      [element]: !currentState
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.menuVisibility && <div className="background-opacity" />}
        <Header 
          toggleVisibility={this.toggleVisibility} 
          menuVisibility={this.state.menuVisibility}
          featuresVisibility={this.state.featuresVisibility}
          companyVisibility={this.state.companyVisibility}
        />
        <Hero />
      </div>
    )
  }
}