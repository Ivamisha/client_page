import { FC } from "react";
import { IProgressBar } from "./interface";
import "./style.scss";

const ProgressBar: FC<IProgressBar> = ({
  text,
  colorText,
  count,
  linearColor,
}) => (
  <div className="progress-bar">
    <span className="progress-bar__text">
      {text}

      <span
        className="progress-bar__text_colored"
        style={{ color: linearColor }}
      >
        {colorText}
      </span>
    </span>

    <div className="progress-bar__wrapper">
      <div
        className="progress-bar__linear"
        style={{ background: linearColor, width: count }}
      />
    </div>
  </div>
);

export default ProgressBar;
