import { Link } from "react-router-dom";

export const UseFul = ({ margin, color, textDecoration, to, value, target, hover, fontWeight  }) => {
  return (
    <p style={{ margin: margin }}>
      <Link
        style={{
          color: color,
          textDecoration: textDecoration,
          hover: hover,
          fontWeight: fontWeight
        }}
        to={to}
        target={target}
      >{value}</Link>
    </p>
  );
}