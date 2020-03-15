import React from 'react'
import { boolean, text, number } from '@storybook/addon-knobs'
import { Text } from '.'

export default { title: 'Text', component: Text }

export const base = () => (
  <>
    <Text
      fontSize={number('fontSize', 13)}
      bold={boolean('bold', false)}
      inlineBlock={boolean('inlineBlock', false)}
      margin={text('margin')}
      padding={text('padding')}
    >
      가나다라마바사아자차카
    </Text>
  </>
)
