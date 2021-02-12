export default function tupleSample() {
  let response: [number, string] = [200, 'OK']
  console.log('tuple sumple 1:', response)
  // response=[400, 'Bad Request', 'Email parameter is missing']
  response = [400, 'Bad Request']
  console.log('tuple sumple 2:', response)

  const dogFriends: [string, ...string[]] = ['Tintin', 'Sherlock', 'Taro', 'Kiwi']
  dogFriends.push('Curcuma')
  console.log('array sample 3:', dogFriends)
}
