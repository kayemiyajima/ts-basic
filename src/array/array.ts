export default function arraySample() {
  const colors: string[] = ['red', 'blue', 'yellow']
  console.log('array sample 1:', colors)
  colors.push('green')
  console.log('array sample 2:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  console.log('array sample 3:', even)

  //配列の型推論
  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }
  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('array sample 4:', someArray)

  //Immutable Array
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push できません。
  // commands[2]= できません。

  const numbers: ReadonlyArray<number> = [1, 2, 3, 4]
  const names: Readonly<string[]> = ['Sherlock', 'Taro', 'Max']

  console.log('Immutable array sample:', commands, numbers, names)
}
