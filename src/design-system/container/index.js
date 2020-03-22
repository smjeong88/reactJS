import styled from 'styled-components'

// position, width, height, margin, padding, maxWidth
export const Container = styled.div`
  ${({ display }) =>
    display &&
    `
  display: ${display};
  `}
  ${({ position }) =>
    position &&
    `
    position: ${position};
  `}
  ${({ width }) =>
    width &&
    `
    width: ${width}px;
  `}
  ${({ maxWidth }) =>
    maxWidth &&
    `
    max-width: ${maxWidth}px;
  `}
  ${({ height }) =>
    height &&
    `
    height: ${height}px;
  `}
  ${({ margin }) =>
    margin &&
    `
      margin: ${margin};
    `}
  ${({ padding }) =>
    padding &&
    `
    padding: ${padding};
    `}
  ${({ centered }) =>
    centered &&
    `
    margin: 0 auto;
  `}  
  ${({ textAlign }) =>
    textAlign &&
    `
      text-align: ${textAlign};
    `} 
`
