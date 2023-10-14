const fs = require('fs')

module.exports = {
    name: 'test1',
    alias: ['t1'],
    run: async(toolbox) => {
/*
      const nodeVersion =await toolbox.system.run('yarn', { trim: true })
      console.log(nodeVersion)
*/

//const whereIsIt = toolbox.system.which('npm')

//await toolbox.system.run('npm run dev')

//await toolbox.system.run('npm install')


// text input
const askAge = { type: 'input', name: 'age', message: 'How old are you?' }

// multiple choice
const askShoe = {
  type: 'select',
  name: 'shoe',
  message: 'What shoes are you wearing?',
  choices: ['Clown', 'Other'],
}

// ask a series of questions
const questions = [askAge, askShoe]
const { age, shoe } = await toolbox.prompt.ask(questions)

console.log(age,shoe)



const isThe90s = await toolbox.prompt.confirm('Ya`ll ready for this?')

console.log(isThe90s)


const choices = ['red', 'green', toolbox.prompt.separator(), 'cheese', 'bread']


console.log(choices)


    },
}