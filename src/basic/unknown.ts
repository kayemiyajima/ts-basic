export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10
  //これはmybeNumberに対して、unknown型なので足し算ができない
  //というエラーがでる。

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
  //if文の中で参照した上でならnumberとして使える。
  //一旦unknownにしておいて、後からその型を判定して使うのが定石。便利。
}
