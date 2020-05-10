import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gnb from './components/gnb'
import { Container } from './design-system/container'
import { GlobalStyle } from './components/reset-style'
import WebtoonsPage from './pages/webtoons'
import HomePage from './pages/home'
import PokemonPage from './pages/pokemon'
import TodoPage from './pages/todo'
import PracticePage from './pages/practice'

function App() {
  return (
    /**
     * <2020.03.22>
     * 1.Context API : 페이지 변동간 가져가야 할 값이 많을 경우
     * 2.하이오더 컴포넌트 : 두 자식간의 데이터 이동이 필요한 경우 부모 컴포넌트에 값을 전달한 후 값을 공유 하는 방식
     *
     */
    <Router>
      <GlobalStyle />
      <Container>
        <Gnb title="Navbar" description="제목" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/webtoon" component={WebtoonsPage} />
          <Route path="/pokemon" component={PokemonPage} />
          <Route path="/todo" component={TodoPage} />
          <Route path="/practice" component={PracticePage} />
          <Route component={() => <div>404:Error</div>} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
