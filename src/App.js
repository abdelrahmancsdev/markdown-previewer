import React, { Component } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import NavChanger from "./components/NavChanger";
import "./styles/main.css";

class App extends Component {
  state = {
    mdText:
      "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHere's some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!  \nOr _italic_.  \nOr... wait for it... **_both!_**  \nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [link](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here...\nAnd here. | Okay. | I think we get it.\n\n- And of course, there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n",
  };
  handleChange = (e) => {
    this.setState({
      mdText: e.target.value,
    });
  };
  navChanger = (e) => {
    let editorNav = document.querySelector(".editor-nav");
    let previewNav = document.querySelector(".preview-nav");
    let editor = document.querySelector(".editor");
    let preview = document.querySelector(".preview");
    if (!e.target.classList.contains("active")) {
      if (e.target === previewNav) {
        previewNav.classList.add("active");
        preview.classList.add("active");
        editorNav.classList.remove("active");
        editor.classList.remove("active");
      } else if (e.target === editorNav) {
        editorNav.classList.add("active");
        editor.classList.add("active");
        previewNav.classList.remove("active");
        preview.classList.remove("active");
      }
    }
  };
  render() {
    return (
      <>
        <NavChanger navChanger={this.navChanger} />
        <div className="container">
          <Editor mdText={this.state.mdText} handleChange={this.handleChange} />
          <Preview mdText={this.state.mdText} />
        </div>
      </>
    );
  }
}

export default App;
