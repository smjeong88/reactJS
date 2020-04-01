//{useEffect, useState} : 비동기 방식으로 데이터를 가져오고 상태 체크를 할 때
import React, { useEffect, useState } from 'react'

/**
 * ../../design-system/container/container.stories.js : story 북에 추가하는 파일
 * ../../design-system/container/index.js 파일안에
 * export const Container = styled.div` 형태로 export 한 변수, 함수를 받는다.
 */
import { Container } from '../../design-system/container'

/**
 * ./service : 비동기 통신하는 파일
 * export async function fetchWebtoons() {} : json 타입
 * const response = [{title:제목,description:내용}]
 * return response
 */
import { fetchWebtoons } from './service'
import Webtoon from './webtoon'

function Webtoons() {
  //ES6 문법 const[a,b] = useState(null)
  //const webtoons = useState(null)
  //const setWebtoons = useState(null)
  const [webtoons, setWebtoons] = useState(null)

  useEffect(() => {
    async function fetchAndSetWebtoons() {
      const webtoons = await fetchWebtoons()
      setWebtoons(webtoons)
    }
    fetchAndSetWebtoons()
  }, [])

  if (!webtoons) {
    return null
  }

  return (
    <Container>
      {webtoons.map((webtoon, idx) => (
        <Webtoon key={idx} source={webtoon} />
      ))}
    </Container>
  )
}

export default Webtoons
