// 비동기 방식으로 데이터를 가져가는 파일
// fetchPokemons = list.js
// fetchPokemon = detail.js
export async function fetchPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')

  if (!response.ok) {
    return []
  }

  const { results } = await response.json()
  return results
}

export async function fetchPokemon(url) {
  const response = await fetch(url)

  if (!response.ok) {
    return []
  }

  const data = await response.json()
  return data
}
