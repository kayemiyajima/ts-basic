import World from './world'

const root = document.getElementById('root')
const world = new World('Hello World!')
world.sayHello(root)

import { logMessage, logMessage2, logMessage3, logMessage4, logMessage5 } from './function/basic'
logMessage('Hello TypeScript!')
logMessage2('named function')
logMessage3('basic function')
logMessage4('arrow function')
logMessage5('type signature')

import { isUserSignedIn, isUserSignedIn2, sumPrice } from './function/parameters'
isUserSignedIn('ABC', 'Sherlock')
isUserSignedIn('BGF')
isUserSignedIn2('ABC')
isUserSignedIn2('ABC', 'Miguel')
const sum = sumPrice(100, 200, 300, 400, 500, 600)
console.log('Function parameters sample 5:', sum)
