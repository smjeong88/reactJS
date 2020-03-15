import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

const Button = styled.button``

export default {
  component: Button,
  title: 'Button',
}

export const text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
