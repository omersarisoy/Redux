import React from "react";
import { setTechnologies } from "./actions/action";
import { store } from "./store/store";

const dispatchBtnAction = (e) => {
  const text = e.target.dataset.tech
  store.dispatch(setTechnologies(text))
}

const ButtonGroup = ({technologies}) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);

export default ButtonGroup;