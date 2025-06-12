
export const Nav = ({children, gap, flexDirection, width, height, position, top, margin}) => {
  return(
    <nav style={{
      position: position,
      top: top,
      margin: margin
    }}>
      <ul style={{
        display: 'flex', 
        gap: gap,
        flexDirection: flexDirection,
        width: width,
        height: height,
        }}>
        {children}
      </ul>
    </nav>
  );
}