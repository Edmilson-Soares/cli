const fs = require('fs')
///npx micros g service -n user -f user
const g={

    async api({path,parameters,generate}){

        if(!fs.existsSync('src/app/services/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/services/'+parameters.options.n||parameters.options.name)

          if(!parameters.options.o){
            await generate({
                template: 'service.js.ejs',
                target: `src/app/services/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
                props:parameters.options,
            })
          }else{
            await generate({
                template: 'service.micro.js.ejs',
                target: `src/app/services/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
                props:parameters.options,
            })
          }


          if(!fs.existsSync('src/app/controllers/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/controllers/'+parameters.options.n||parameters.options.name)

          await generate({
            template: 'controller.ejs',
            target: `src/app/controllers/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
            props:parameters.options,
        })

        if(!fs.existsSync('src/app/routers/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/routers/'+parameters.options.n||parameters.options.name)

        await generate({
          template: 'router.ejs',
          target: `src/app/routers/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
          props:parameters.options,
      })


      if(!fs.existsSync('src/core/entities/'+parameters.options.n||parameters.options.name))
      fs.mkdirSync('src/core/entities/'+parameters.options.n||parameters.options.name)

      await generate({
        template: 'entity.ejs',
        target: `src/core/entities/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
        props:parameters.options,
    })

    },
    async app({path,parameters,generate}){

        if(!fs.existsSync('src/app/services/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/services/'+parameters.options.n||parameters.options.name)

          if(!parameters.options.o){
            await generate({
                template: 'service.js.ejs',
                target: `src/app/services/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
                props:parameters.options,
            })
          }else{
            await generate({
                template: 'service.micro.js.ejs',
                target: `src/app/services/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
                props:parameters.options,
            })
          }

      if(!fs.existsSync('src/core/entities/'+parameters.options.n||parameters.options.name))
      fs.mkdirSync('src/core/entities/'+parameters.options.n||parameters.options.name)

      await generate({
        template: 'entity.ejs',
        target: `src/core/entities/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
        props:parameters.options,
    })

    },
   async service({path,parameters,generate}){

        if(!fs.existsSync('src/app/services/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/services/'+parameters.options.n||parameters.options.name)

          if(!parameters.options.o){
            await generate({
                template: 'service.js.ejs',
                target: `src/app/services/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
                props:parameters.options,
            })
          }else{
            await generate({
                template: 'service.micro.js.ejs',
                target: `src/app/services/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
                props:parameters.options,
            })
          }




    },
    async event({path,parameters,generate}){

        if(!fs.existsSync('src/app/events/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/events/'+parameters.options.n||parameters.options.name)

          await generate({
            template: 'event.js.ejs',
            target: `src/app/events/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
            props: parameters.options,
        })

    },
    async command({path,parameters,generate}){

        if(!fs.existsSync('src/app/commands/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/commands/'+parameters.options.n||parameters.options.name)

          await generate({
            template: 'command.js.ejs',
            target: `src/app/commands/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
            props: parameters.options,
        })

    },

    async controller({path,parameters,generate}){

        if(!fs.existsSync('src/app/controllers/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/controllers/'+parameters.options.n||parameters.options.name)

          await generate({
            template: 'controller.ejs',
            target: `src/app/controllers/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
            props:parameters.options,
        })

    },

    async router({path,parameters,generate}){

        if(!fs.existsSync('src/app/routers/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/routers/'+parameters.options.n||parameters.options.name)

          await generate({
            template: 'router.ejs',
            target: `src/app/routers/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
            props:parameters.options,
        })

    },

    async module({path,parameters,generate}){

        if(!fs.existsSync('src/modules/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/modules/'+parameters.options.n||parameters.options.name)

          await generate({
            template: 'module.ejs',
            target: `src/modules/${parameters.options.n||parameters.options.name}/proto/${parameters.options.f||parameters.options.file}.proto`,
            props: { name:parameters.options.f||parameters.options.file},
        })

    },

    async middleware({path,parameters,generate}){

        if(!fs.existsSync('src/app/middlewares/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/app/middlewares/'+parameters.options.n||parameters.options.name)

          await generate({
            template: 'middleware.ejs',
            target: `src/app/middlewares/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
            props:parameters.options,
        })

    },

    async entity({path,parameters,generate}){

        if(!fs.existsSync('src/core/entites/'+parameters.options.n||parameters.options.name))
          fs.mkdirSync('src/core/entites/'+parameters.options.n||parameters.options.name)

          await generate({
            template: 'entity.ejs',
            target: `src/core/entites/${parameters.options.n||parameters.options.name}/${parameters.options.f||parameters.options.file}.js`,
            props:parameters.options,
        })

    },
    async lib({path,parameters,generate}){

        if(!fs.existsSync('src/core/libs/'+parameters.options.n||parameters.options.name)) {
            await generate({
                template: 'lib.ejs',
                target: `src/core/libs/${parameters.options.n||parameters.options.name}.js`,
                props:parameters.options,
            })
        }
   



    },
}


module.exports = {
    name: 'generate1',
    alias: ['g1'],
    run: async(toolbox) => {
        const {
            parameters,
            template: { generate },
            print,
            print: { info },
        } = toolbox

        const name = parameters.first

        await g[parameters.first]({
            generate,
            path:parameters.second,
            parameters,
            print
        })

       // console.log(parameters)

       /* await generate({
            template: 'event.js.ejs',
            target: `models/${name}-model.js`,
            props: { name },
        })
*/
       // info(`Generated file at models/${name}-model.js`)
    },
}