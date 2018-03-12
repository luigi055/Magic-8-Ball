import React, { Component } from "react";
import MagicBall from "./../../components/MagicBall/MagicBall";
import "./SelectLanguage.css";

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "",
      options: [],
      answer: ""
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(state) {
    this.setState(state);
  }

  render() {
    return this.state.lang.length > 0 ? (
      <MagicBall {...this.state} updateState={this.updateState} />
    ) : (
      <div className="select-language">
        <div className="select-language__wrapper">
          <h2 className="select-language__title h2">Select Your Language</h2>
          <h4 className="select-language__title h3">Elige tu Idioma</h4>
          <button
            onClick={SelectLanguage.selectEnglish(this.updateState)}
            type="button"
            aria-label="select english"
            className="select-language__btn"
          >
            English
          </button>
          <button
            onClick={SelectLanguage.selectSpanish(this.updateState)}
            type="button"
            aria-label="seleccionar español"
            className="select-language__btn"
          >
            Español
          </button>
        </div>
      </div>
    );
  }
}

SelectLanguage.selectEnglish = updateState => e => {
  e.preventDefault();
  updateState({ lang: "en" });
};

SelectLanguage.selectSpanish = updateState => e => {
  e.preventDefault();
  updateState({ lang: "es" });
};

export default SelectLanguage;
