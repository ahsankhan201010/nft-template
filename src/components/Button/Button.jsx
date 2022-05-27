import PropTypes from "prop-types";
import classList from "./Button.module.css";
import Header from "../Header/Header";

const Button = (props) => {
  var {
    children = "button",
    fontSize = 16,
    fontWeight = "semi-bold",
    backgroundColor = "var(--primary-gradient)",
    color = "#fff",
    hoverLight,
    hover,
    style,
    customClass,
    ...restProps
  } = props;
  return (
    <>
      <button
        style={{ background: backgroundColor, ...style }}
        className={`${classList.buttonContainer} ${hoverLight && classList.hover_light || hover && classList.hover || ""}  ${customClass}`}
        {...restProps}>
        <Header
          color={color}
          style={{ letterSpacing: "1.5px" }}
          fontSize={fontSize}
          fontWeight={fontWeight}
          marginBottom="0">
          {children}
        </Header>
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  hoverLight:PropTypes.bool,
  hover:PropTypes.bool,
};

export default Button;
