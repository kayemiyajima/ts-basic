export default function aliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample 1 :', japan)

  const usa: Country = {
    capital: 'Washington D.C.',
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object alias sample 2 :', usa)

  // Union Type and Intersection Type
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }
  // Union type: 冒険者はKnightまたはWizardの型を持ちますよ（初期設定）。
  type Adventurer = Knight | Wizard

  // Intersection type: 冒険者が成長してKnightとWizardの両方のを持つ魔法剣士になった。
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: 'Wooden sword',
    swordSkill: 'Triple slash',
  }

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 40,
    weapon: 'Wooden wand',
    magicSkill: 'Fire ball',
  }
  console.log('Object alias sample 3 :', adventurer1)
  console.log('Object alias sample 4 :', adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    //ここでmpが無いとエラーがでる。つまり、どちらの要素も持っていないとだめ。
    weapon: 'Steel sword',
    swordSkill: 'Triple slash',
    magicSkill: 'Thunder storm',
  }
  console.log('Object alias sample 5 :', paladin)
}
