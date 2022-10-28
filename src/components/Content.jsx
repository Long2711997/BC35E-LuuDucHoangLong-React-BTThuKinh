import React, { Component } from "react";
import model from "../assets/images/model.jpg";
import v1 from "../assets/images/v1.png";
import v2 from "../assets/images/v2.png";
import v3 from "../assets/images/v3.png";
import v4 from "../assets/images/v4.png";
import v5 from "../assets/images/v5.png";
import v6 from "../assets/images/v6.png";
import v7 from "../assets/images/v7.png";
import v8 from "../assets/images/v8.png";
import v9 from "../assets/images/v9.png";

export default class Content extends Component {
  renderGlasses = (img) => {
    this.setState({
      imgURL: img,
    });
  };

  state = {
    imgURL: v1,
  };

  render() {
    return (
      <div className="container">
        <div className="renderArea">
          <img id="model" src={model} alt="" />
          <img src={this.state.imgURL} alt="" className="renderGlasses" />
        </div>
        <div className="glasses">
          <img
            src={v1}
            alt="g1"
            className="glassesItem"
            onClick={() => this.renderGlasses(v1)}
          />
          <img
            src={v2}
            alt="g2"
            className="glassesItem"
            onClick={() => this.renderGlasses(v2)}
          />
          <img
            src={v3}
            alt="g3"
            className="glassesItem"
            onClick={() => this.renderGlasses(v3)}
          />
          <img
            src={v4}
            alt="g4"
            className="glassesItem"
            onClick={() => this.renderGlasses(v4)}
          />
          <img
            src={v5}
            alt="g5"
            className="glassesItem"
            onClick={() => this.renderGlasses(v5)}
          />
          <img
            src={v6}
            alt="g6"
            className="glassesItem"
            onClick={() => this.renderGlasses(v6)}
          />
          <img
            src={v7}
            alt="g7"
            className="glassesItem"
            onClick={() => this.renderGlasses(v7)}
          />
          <img
            src={v8}
            alt="g8"
            className="glassesItem"
            onClick={() => this.renderGlasses(v8)}
          />
          <img
            src={v9}
            alt="g9"
            className="glassesItem"
            onClick={() => this.renderGlasses(v9)}
          />
        </div>
      </div>
    );
  }
}
