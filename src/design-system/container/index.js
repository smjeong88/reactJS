import styled, { css } from 'styled-components'

//margin, padding, position, width, height, max-width
export const Container = styled.div`
${({ width }) =>
  width &&
  `
width:${width}px;
`}
${({ height }) =>
  height &&
  `
height:${height};
`}
  ${({ maxWidth }) =>
    maxWidth &&
    `
max-width:${maxWidth}px;
`}

  ${({ padding }) =>
    padding &&
    `
padding:${padding};
`}

  ${({ centered }) =>
    centered &&
    `
margin:0 auto;
`}

`
