export default function objectSample() {
  // const a: object = {
  //     name: 'Sherlock',
  //     age: 28
  // }

  //型エイリアス- object literal 記法
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'USA',
  }

  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const sherlock: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 18,
    lastName: 'Miyajima',
    firstName: 'Sherlock',
  }
  sherlock.gender = 'Male'
  sherlock.lastName = 'Blanco'
  // sherlock.firstName = 'Taro' エラーでる。

  console.log('Object object sample 3:', sherlock)

  // Index Signature Type

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Spain: 'Madrid',
  }
  console.log('Object object sample 4:', capitals)

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample 5:', capitals)
}
