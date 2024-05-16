const { program } = require('commander')
const { version } = require('./constants')
const { actions } = require('./actions')
const path = require('path')

// 遍历配置
Reflect.ownKeys(actions).forEach(action => {
    program.command(action)
           .alias(actions[action].alias)
           .description(actions[action].description)
           .action(()=>{
             if(action === '*') {
                console.warn(actions[action].description)
             } else {
                // 寻找对应操作的文件
                const actionPath = path.join(__dirname, action)
                // 导出文件函数
                const func = require(actionPath)
                // 执行函数，并传参
                typeof func === 'function' && func(...process.argv.slice(3))
             }
           })  
})

program.version(version)
        .parse(process.argv) // process.argv 命令行参数