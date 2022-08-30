import React from "react";

function NavChanger(props) {
  return (
    <nav>
      <button className="editor-nav active" onClick={props.navChanger}>
        Editor
      </button>
      <button className="preview-nav" onClick={props.navChanger}>
        Preview
      </button>
    </nav>
  );
}

export default NavChanger;
