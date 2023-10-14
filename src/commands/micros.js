const fs = require('fs')
const { exec } = require("child_process");
const create={

  async 'create-service'({path,print,generate,filesystem}){
    print.info('Create paths... []')
   fs.mkdirSync(path+'/src/app')
    fs.mkdirSync(path+'/src/app/commands')
    fs.mkdirSync(path+'/src/app/events')
    fs.mkdirSync(path+'/src/app/services')
    fs.mkdirSync(path+'/src/modules')

    fs.mkdirSync(path+'/src/core')
    fs.mkdirSync(path+'/src/core/entities')
    fs.mkdirSync(path+'/src/core/libs')

    fs.mkdirSync(path+'/src/infra')
    fs.mkdirSync(path+'/src/infra/jobs')
    fs.mkdirSync(path+'/src/infra/db')

    //print.sucess('Created paths.')

    await generate({
      template: 'setting.js.ejs',
      target: `${path}/src/setting.json`,
      props: {},
    })


    await generate({
      template: 'env.ejs',
      target: `${path}/.env`,
      props: {},
    })

    await generate({
      template: 'git.ejs',
      target: `${path}/.gitignore`,
      props: {},
    })

    const package_ = { 
      name:path,
      "version": "1.0.0",
      "description": "",
      "type": "module",
      "main": "node_modules/aitec/bin/index.js",
      "aitec":"service",
      "scripts": {
         "dev": "nodemon",
         "test:dev": "vitest watch",
        "test":"vitest",
        "start": "node .",
        "build": "npx prisma db push"
      },
      "prisma": {
            "schema": "src/infra/db/schema.prisma"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {   
        "aitec": "^1.0.20",
        "@prisma/client": "^4.11.0",
        "dotenv": "^16.3.1",
        "ejs": "^3.1.9",
        "express": "^4.18.2"
      }
    }

    filesystem.write(`${path}/package.json`, package_)


  },
  async 'create-app'({path,print,generate,filesystem}){
    print.info('Create paths... []')
    fs.mkdirSync(path+'/public')
    fs.mkdirSync(path+'/src/app')
    fs.mkdirSync(path+'/src/app/commands')
    fs.mkdirSync(path+'/src/app/events')

    fs.mkdirSync(path+'/src/app/services')


    fs.mkdirSync(path+'/src/modules')

    fs.mkdirSync(path+'/src/core')
    fs.mkdirSync(path+'/src/core/entities')
    fs.mkdirSync(path+'/src/core/libs')

    fs.mkdirSync(path+'/src/infra')
    fs.mkdirSync(path+'/src/infra/middlewares')
    fs.mkdirSync(path+'/src/infra/views')
    fs.mkdirSync(path+'/src/infra/jobs')
    fs.mkdirSync(path+'/src/infra/routers')
    fs.mkdirSync(path+'/src/infra/db')


    await generate({
      template: 'setting_app.js.ejs',
      target: `${path}/src/setting.json`,
      props: {},
    })


    await generate({
      template: 'env.ejs',
      target: `${path}/.env`,
      props: {},
    })

    await generate({
      template: 'git.ejs',
      target: `${path}/.gitignore`,
      props: {},
    })

    const package_ = { 
      name:path,
      "version": "1.0.0",
      "description": "",
      "type": "module",
      "main": "node_modules/aitec/bin/index.js",
      "aitec":"app",
      "scripts": {
         "dev": "nodemon",
        "test":"vitest",
        "start": "node .",
        "test:dev": "vitest watch",
        "build": "npx prisma db push"
      },
      "prisma": {
            "schema": "src/infra/db/schema.prisma"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {   
        "aitec": "^1.0.20",
        "@prisma/client": "^4.11.0",
        "dotenv": "^16.3.1",
        "ejs": "^3.1.9",
        "express": "^4.18.2"
      }
    }

    filesystem.write(`${path}/package.json`, package_)


  }
}



const command = {
  name: 'micros',
  run: async (toolbox) => {
    const { print,filesystem,parameters,template: { generate } } = toolbox

    if(!create[parameters.first]) return print.info('comando não encontrado')

   
    if(parameters.second!='.'){
      fs.mkdirSync(parameters.second)
    }
    fs.mkdirSync(parameters.second+'/src')


      await create[parameters.first]({
        path:parameters.second,
        print,
        generate,
        filesystem
      })


    await generate({
      template: 'prisma.ejs',
      target: `${parameters.second}/src/infra/db/schema.prisma`,
      props: {},
    })

    await generate({
      template: 'index.js.ejs',
      target: `${parameters.second}/src/index.js`,
      props: {},
    })

   


  },
}

module.exports = command
