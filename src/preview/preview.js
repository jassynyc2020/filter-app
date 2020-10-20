import React, { Component } from "react";
import tree1 from "../images/preview1.jpeg";
import tree2 from "../images/preview2.jpeg";
import tree3 from "../images/preview3.jpeg";
import tree4 from "../images/preview4.jpeg";
import logo from "../images/logo.jpeg";
import "../preview/preview.css";

class Preview extends Component {
  state = {
    index: 0,
    picList: [tree1, tree2, tree3, tree4],
  };

  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };
  render() {
    return (
      <div>
        <img className="img" src={logo} alt="imagine-logo"></img>

        <img className="images" src={this.state.picList[this.state.index]} alt="viewer"/>
        {""}
        <br />
        <button
          className="button"
          style={{ fontSize: "18px" }}
          onClick={this.onClickPrevious}
        >
          {""}
          Previous{""}
        </button>
        <button
          className="button"
          style={{ "margin-left": "5px", fontSize: "18px" }}
          onClick={this.onClickNext}
        >
          {""}
          Next{""}
        </button>
      </div>
    );
  }
}
export default Preview;
