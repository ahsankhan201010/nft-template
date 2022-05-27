import PropTypes from "prop-types";
import classList from "./Header.module.css";



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



const Header = (props) => {
  var {
    children: content = "Heading",
    fontWeight = "regular",
    style = {},
    customClass = "",
    variant = "h1",
    fontSize,
    color = "white",
    wrapperStyle = {},
    padding = "0px",
    margin = "0px",
    gradient,
    ...restProps
  } = props;
  var fontWeightValue = fontWeightComputation(fontWeight);
  var VariantComponent = `${variant}`;
  return (
    <div style={{ fontSize: "16px", padding, margin, ...wrapperStyle }}>
      <VariantComponent
        className={`${customClass} ${gradient && classList.gradient_text}`}
        style={{
          fontSize: fontSize && `${fontSize}px`,
          color,
          fontWeight: fontWeightValue,
          background: gradient,
          ...style,
        }}
        {...restProps}
      >
        {content}
      </VariantComponent>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.string,
  fontWeight: PropTypes.string,
  style: PropTypes.object,
  customClass: PropTypes.string,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

export default Header;
