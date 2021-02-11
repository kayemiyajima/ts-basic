export default function unexistSmaple() {
  const name = null
  console.log('unexist sample 1:', typeof name, name)

  if (!name) {
    console.log('unexist sample 2:', '我輩は猫である。名前はまだ ' + name)
  } else {
    console.log('unexist sample 3:', 'Soy un genio, me llamo ' + name)
  }

  const age = undefined
  console.log('unexist sample 4:', typeof age, age)

  if (!age) {
    console.log('unexist sample 5:', '年齢は秘密です')
  } else {
    console.log('unexist sample 6:', '年齢は' + age + 'です')
  }
}
