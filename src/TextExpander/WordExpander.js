import PropTypes from "prop-types";
import { useState } from "react";

const WordExpander = ({
  children,
  wordsNumToShow = 20,
  isCollapsedAtBeginning = true,
  btnPreFix = "... ",
  collapseBtnText = "less",
  expandBtnText = "more",
  btnColor = "blue",
  textDecoration = "underline",
  isBtnInline = true,
  containerClassName = "",
  textClassName = "",
  btnClassName = "",
}) => {
  const [isCollapsed, setIsCollapsed] = useState(isCollapsedAtBeginning);
  const text =
    children.split(" ").slice(0, wordsNumToShow).join(" ") + btnPreFix;

  const btnStyle = {
    color: btnColor,
    textDecoration: textDecoration,
    cursor: "pointer",
    display: isBtnInline ? "inline-block" : "block",
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    margin: isBtnInline ? "0 0 0 10px" : "0",
  };

  const handleClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  if (!children?.length) return;
  return (
    <div className={containerClassName}>
      <span className={textClassName}>{isCollapsed ? text : children}</span>
      <button className={btnClassName} style={btnStyle} onClick={handleClick}>
        {isCollapsed ? expandBtnText : collapseBtnText}
      </button>
    </div>
  );
};

WordExpander.propTypes = {
  children: PropTypes.string.isRequired,
  wordsNumToShow: PropTypes.number,
  isCollapsedAtBeginning: PropTypes.bool,
  btnPreFix: PropTypes.string,
  collapseBtnText: PropTypes.string,
  expandBtnText: PropTypes.string,
  btnColor: PropTypes.string,
  textDecoration: PropTypes.string,
  isBtnInline: PropTypes.bool,
  className: PropTypes.string,
};

export default WordExpander;
