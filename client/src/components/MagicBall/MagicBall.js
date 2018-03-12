import React, { Component } from "react";
import axios from "axios";
import Spinner from "./../Spinner/Spinner";
import Ball from "./Ball/Ball";
import "./style.css";

class MagicBall extends Component {
  componentDidMount() {
    (async () => {
      try {
        const { data: options } = await axios.get(
          `/api/${this.props.lang}/answers`
        );
        this.props.updateState({
          options
        });
      } catch (err) {
        throw new Error(err);
      }
    })();
  }

  render() {
    return (
      <div className="magic-ball">
        {this.props.options.length === 0 || !this.props.options ? (
          <Spinner />
        ) : (
          <Ball
            lang={this.props.lang}
            answer={this.props.answer}
            options={this.props.options}
            updateState={this.props.updateState}
          />
        )}
      </div>
    );
  }
}

export default MagicBall;
