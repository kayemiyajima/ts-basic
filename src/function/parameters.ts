export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Fucntion parameters sample 1: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Fucntion parameters sample 2: User is not signed in!')
    return false
  }
}

export const isUserSignedIn2 = (userId: string, userName = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Fucntion parameters sample 3: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Fucntion parameters sample 4: User is not signed in!')
    return false
  }
}

export const sumPrice = (...prices: number[]): number => {
  return prices.reduce((prevTotal: number, price: number) => {
    return prevTotal + price
  }, 0)
}
