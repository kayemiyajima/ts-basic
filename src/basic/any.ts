export default function anySample() {
  let name: any = 'Sherlock'
  console.log('any sample 1:', typeof name, name)

  name = 123
  //ここで今回はエラーが出ない。anyなので。
  //値も型も変化してしまうので、扱いづらい、し危険。
  console.log('any sample 2:', typeof name, name)
}
