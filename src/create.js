const download = require('download-git-repo')  //github api 拉取代码
const inquirer = require('inquirer')  //用户询问
const ora = require('ora') //实现loading效果

// key是给用户选择的名字，value对应github里面的项目名
const templateMap = {
    vite_react: 'vite_react_project_template',
    ui_library: 'ui-test',
    monorepo: 'monorepo-test'
}

const fetchTemplate = async (options, filename) => {
    const { template } = options
    const templateUrl = `drxiong/${templateMap[template]}`
    //根据template模板
    const loading = ora('fetching')
    loading.start()
    // ${process.cwd()} 表示当前目录
    console.log(templateUrl,`${process.cwd()}/${filename}`)
    download(templateUrl, `${process.cwd()}/${filename}`, err => {
        if(err){
            console.log('err:', err)
            return
        }
        loading.succeed('success!!!')
    })
}

const templateOptions = ['vite_react', 'ui_library', 'monorepo']
const styleOptions = ['无', 'less', 'sass']

// 拉取代码之前询问配置，之后再根据用户选择

const askOptions = async () => {
    const { template } = await inquirer.prompt([
        {
            type: 'list',
            name: 'template',
            message: '请选择一个你要创建的项目',
            choices: templateOptions
        }
    ])

    return {
        template
    }
}

module.exports = async (projectName) => {
    const result = await askOptions()
    fetchTemplate(result, projectName)
}
