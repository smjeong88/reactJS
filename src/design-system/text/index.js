import styled from 'styled-components'

// margin, padding, bold, display => inline-block, color
export const Text = styled.div`
  ${({ fontSize }) =>
    `
    font-size: ${fontSize || 13}px;
  `}  
  ${({ bold }) =>
    bold &&
    `
      font-weight: bold;
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
  ${({ inlineBlock }) =>
    inlineBlock &&
    `
    display: inline-block;
  `}  
`
