import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gnb from './components/gnb'
import { Container } from './design-system/container'
import { GlobalStyle } from './components/reset-style'
import WebtoonsPage from './pages/webtoons'
import HomePage from './pages/home'
import PokemonPage from './pages/pokemon'

function App() {
  return (
    //하이 오더 컴포넌트 최상단에서 연산을 하고 자식 컴포넌트에게 내려주는 방식
    <Router>
      <GlobalStyle />
      <Container>
        <Gnb title="Navbar" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/webtoon" component={WebtoonsPage} />
          <Route path="/pokemon" component={PokemonPage} />
          <Route component={() => <div>404:Error</div>} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
