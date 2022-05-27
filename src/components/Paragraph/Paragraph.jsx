import PropTypes from "prop-types";
import classList from "./Paragraph.module.css"

var fontWeightComputation = (weight) => {
  var value = 300;
  switch (weight) {
    case "light":
      value = 300;
      break;
    case "regular":
      value = 400;
      break;
    case "medium":
      value = 500;
      break;
    case "semi-bold":
      value = 600;
      break;
    case "bold":
      value = 700;
      break;
    default:
      break;
  }
  return value;
};

const Paragraph = (props) => {
  var {
    children: content = "Paragraph",
    fontSize = 16,
    color = "white",
    fontWeight = "regular",
    style = {},
    customClass = "",
    marginBottom = "10",
    lineHeight = "1.5",
    padding = "0px",
    margin = "0px",
    gradient,
    ...restProps
  } = props;
  var fontWeightValue = fontWeightComputation(fontWeight);
  return (
    <p
      className={`${customClass} ${gradient && classList.gradient_text}`}
      style={{
        fontSize: `${fontSize}px`,
        color,
        marginBottom: `${marginBottom}px`,
        fontWeight: fontWeightValue,
        lineHeight: `${lineHeight}`,
        padding,
        margin,
        background: gradient,
        ...style,
      }}
      {...restProps}>
      {content}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string,
  fontWeight: PropTypes.string,
  style: PropTypes.object,
  customClass: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

export default Paragraph;
