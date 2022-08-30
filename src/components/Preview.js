import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Preview = (props) => {
  return (
    <section className="preview">
      <h2>Preview</h2>
      <div id="preview">
        {props.mdText ? (
          <ReactMarkdown children={props.mdText} remarkPlugins={[remarkGfm]} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Preview;
