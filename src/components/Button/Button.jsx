import './Button.css';

export const Button = ({children, width, height, color, margin}) => {
  return(
    <button
    style={{
      width: width,
      height: height,
      backgroundColor: color && 'white',
      color: color,
      margin: margin
    }}
    >{children}</button>
  );
}