export default function genericsBasicSample() {
  const stringReducer = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 1:', stringReducer(['May ', 'the ', 'force ', 'be ', 'with ', 'you '], ''))

  const numberReducer = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 2:', numberReducer([100, 200, 300, 400], 1000))

  //make these two with generics type
  type Reduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericsStringReducer: Reduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log(
    'Generics basic sample 3:',
    genericsStringReducer(['Make ', 'the ', 'world ', 'better ', 'for ', 'us'], '')
  )

  //GENERICS TYPE DECLARATION
  type GenericReducer2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  type GenericReducer3<T> = (array: T[], initialValue: T) => T
  type GenericReducer4 = <U>(array: U[], initialValue: U) => U
}
