# micros CLI

A CLI for micros.


# License

MIT - see LICENSE


npx micros-cli create-service path 

npx micros-cli create-app path

""

************************************************************************************************************

npx micros-cli g service -n(name) 'name of service' -f(file) 'name of file'

npx micros-cli g service -n(name) 'name of service' -f(file) 'name of file' -o grpc

npx micros-cli g controller -n(name) 'name of controller' -f(file) 'name of file' -o (word,pdf,excel)

npx micros-cli g router -n(name) 'name of router' -f(file) 'name of file' -o ('api,view',word,pdf,excel)

npx micros-cli g event -n(name) 'name of event' -f(file) 'name of file' -o (service,cron,sokect,rabbitmq,redis)

npx micros-cli g entity -n(name) 'name of entity' -f(file) 'name of file'

npx micros-cli g lib -n(name) 'name of lib'

npx micros-cli g command -n(name) 'name of command' -f(file) 'name of file'


npx micros-cli g job -n(name) 'name of job' -f(file) 'name of file'

npx micros-cli g worker -n(name) 'name of worker' -f(file) 'name of file'

npx micros-cli g middleware -n(name) 'name of middleware' -f(file) 'name of file'

************************************************************************************************************