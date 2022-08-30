import React from "react";

const Editor = (props) => {
  return (
    <section className="editor active">
      <h2>Editor</h2>
      <textarea
        id="editor"
        defaultValue={props.mdText ? props.mdText : ""}
        onChange={props.handleChange}
      ></textarea>
    </section>
  );
};

export default Editor;
