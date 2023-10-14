const fs = require('fs')

module.exports = {
    name: 'generate',
    alias: ['g'],
    run: async(toolbox) => {

const askAge = { type: 'input', name: 'name', message: 'Qual é o nome do seu projeto?' }

// multiple choice
const askShoe = {
  type: 'select',
  name: 'type',
  message: 'Qual é o tipo do seu projeto?',
  choices: ['api (full-stack)', 'micro-service'],
}

// ask a series of questions
const questions = [askAge, askShoe]
const { name, type } = await toolbox.prompt.ask(questions)

console.log(name, type )



//const isThe90s = await toolbox.prompt.confirm('Ya`ll ready for this?')



    },
}