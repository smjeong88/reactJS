import React from 'react'
import { boolean, text, number } from '@storybook/addon-knobs'
import { Container } from '.'

export default { title: 'Container', component: Container }

export const baseText = () => (
  <>
    <Container
      maxWidth="720"
      maring="10px"
      padding="20px"
      centered="margin:0 auto"
    >
      컨테이너 테스트
    </Container>
  </>
)
