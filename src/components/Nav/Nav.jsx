
export const Nav = ({children, gap, flexDirection, width, height, position, top, margin, hover}) => {
  return(
    <nav style={{
      position: position,
      top: top,
      margin: margin,
      hover: hover
    }}>
      <ul style={{
        display: 'flex', 
        gap: gap,
        flexDirection: flexDirection,
        width: width,
        height: height,
        hover: hover
        }}>
        {children}
      </ul>
    </nav>
  );
}