const fs = require('fs')

module.exports = {
    name: 'test',
    alias: ['t'],
    run: async(toolbox) => {
/*
      const nodeVersion =await toolbox.system.run('yarn', { trim: true })
      console.log(nodeVersion)
*/

//const whereIsIt = toolbox.system.which('npm')

//await toolbox.system.run('npm run dev')

//await toolbox.system.run('npm install')


// text input
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