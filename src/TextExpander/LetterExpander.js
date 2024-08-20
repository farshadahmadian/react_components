import PropTypes from "prop-types";
import { useState } from "react";

const LetterExpander = ({
  children,
  wordsNumToShow = 20,
  // wordsNumToShow = children.length, // the values of the previous props can be used for default values of other props
  /* buttonText = wordsNumToShow < children.length
    ? expandBtnText
    : collapseBtnText, */
  isCollapsedAtBeginning = true,
  btnPreFix = "... ",
  // collapseBtnText = btnPreFix + "less",
  // expandBtnText = btnPreFix + "more",
  collapseBtnText = "less",
  expandBtnText = "more",
  btnColor = "blue",
  textDecoration = "underline",
  isBtnInline = true,
  containerClassName = "",
  textClassName = "",
  btnClassName = "",
}) => {
  const textInit = isCollapsedAtBeginning
    ? children?.slice(0, wordsNumToShow)
    : children;
  const [text, setText] = useState(textInit);

  const btnStyle = {
    color: btnColor,
    textDecoration: textDecoration,
    cursor: "pointer",
    display: isBtnInline ? "inline-block" : "block",
  };

  const handleClick = () => {
    setText((text) => {
      if (text?.length < children?.length) {
        return children;
      } else {
        return children?.slice(0, wordsNumToShow);
      }
    });
  };
  if (!text?.length) return;
  return (
    <div className={containerClassName}>
      <span className={textClassName}>
        {text} {text?.length < children?.length ? btnPreFix : ""}
      </span>
      <span className={btnClassName} style={btnStyle} onClick={handleClick}>
        {text?.length < children?.length ? expandBtnText : collapseBtnText}
      </span>
    </div>
  );
};

LetterExpander.propTypes = {
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

export default LetterExpander;
