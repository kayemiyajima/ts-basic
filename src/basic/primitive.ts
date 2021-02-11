export default function primitiveSample() {
  const name = 'Sherlock'
  //name = 123
  //この書き方はできませんよ、とエラーがでる。
  //: string を記述しなくても勝手に検知してくれる。
  console.log('primitive sample 1:', typeof name, name)

  const age = 29
  console.log('primitive sample 2:', typeof age, age)

  const isSingle = true
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitive sample 4:', typeof isOver20, isOver20)
}
