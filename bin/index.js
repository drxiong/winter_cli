#!/usr/bin/env node  
//一定要写，表明了index.js是node可执行文件

require('../src/main')

// const { program } = require('commander')

// function strToArr (value) {
//     return value?.split(',')
// }

// program
//     .version(`version is ${require('../package.json').version}`)
//     .option('-d, --debug', '调试')
//     .option('-l, --list <value>', '把字符串分割为数组', strToArr)
//     .action((options, command) => {
//         if(options.debug) {
//             console.log('调试成功')
//         }
//         if(options.list !== undefined){
//             console.log(options.list)
//         }
//     })

// program
//     .command('create <filename>')
//     .description('创建一个项目')
//     .action((filename) => {
//         console.log('项目名为：', filename)
//     })

// program.parse(process.argv)
    
// const download = require('download-git-repo')
// download('drxiong/vite_react_project_template', `${process.cwd()}/../${projectName}`, function (err) {
//     if(err){
//         console.log('err:', err)
//         return
//     } else {
//         console.log('success')
//     }
// })

// const inquirer = require('inquirer')
// const templateOption = ['vite-react']
// const questionMap = [
//     {
//         type: 'list',
//         name: 'template',
//         message: '请选择一个你要创建的项目',
//         choices: templateOption
//     }
// ]
// const askOptions = async () => {
//     const { template } = await inquirer.createPromptModule(questionMap)
//     return template
// }
// // const result = await askOptions()
// // console.log('result:', result)

// (async () => {
//     const result = await askOptions();
//     console.log('result:', result);
// })();
