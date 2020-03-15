import React from 'react'
import { boolean, text, number } from '@storybook/addon-knobs'
import { Text } from '.'

export default { title: 'Text', component: Text }

export const baseText = () => (
  <>
    <Text
      fontSize={number('fontSize', 13)}
      bold={boolean('bold', false)}
      margin={text('margin')}
      padding={text('padding')}
      inlineBlock={boolean('inlineBlock', false)}
    >
      텍스트 테스트
    </Text>
  </>
)
