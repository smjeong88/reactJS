import React from 'react'
import { boolean, text, number, select } from '@storybook/addon-knobs'
import { Container } from '.'

export default { title: 'Container', component: Container }

export const base = () => (
  <>
    <Container
      maxWidth={number('maxWidth', 720)}
      margin={text('margin')}
      padding={text('padding')}
      centered={boolean('centered', false)}
      textAlign={select('textAlign', ['left', 'center', 'right'], 'left')}
    >
      가나다라마바사아자차카
    </Container>
  </>
)
