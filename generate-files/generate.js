const { generateTemplateFiles } = require('generate-template-files');
 
const config = require('../package.json');

const { type } = process.env
 
console.log(type)

const generateFile = (optionValues) => {

    if(typeof optionValues != "array")
        optionValues = [optionValues]

    const options = []

    const defaultOption = {
        option: `Create ${type}`,
        defaultCase: '(pascalCase)',
        entry: {
          folderPath:''
        },
        stringReplacers: ['__store__', { question: 'Insert model name', slot: '__model__' }],
        output: {
          path:'',
          pathAndFileNameDefaultCase: '(kebabCase)',
          overwrite: true,
        },
    }  

    optionValues.forEach(({
        folderPath,
        path
    }) => {

        defaultOption.entry.folderPath = folderPath

        defaultOption.output.path = path

        options.push(defaultOption)

    })


    generateTemplateFiles(options);
}

switch (type) {

    case 'Component':
        generateFile({
            folderPath:'./generate-files/tools/component/',
            path:'./src/components/__store__(lowerCase)',
            type
        })

    case 'Full-Component':
        generateFile([
            {
                folderPath:'./generate-files/tools/component/',
                path:'./src/components/__store__(lowerCase)',
                type
            },
            {
                folderPath:'./generate-files/tools/redux-action/',
                path:'./src/redux/actions/__store__(lowerCase)',
                type
            },
            {
                folderPath:'./generate-files/tools/redux-reducer/',
                path:'./src/redux/reducers/__store__(lowerCase)',
                type
            },
            {
                folderPath:'./generate-files/tools/types/',
                path:'./src/types/__store__(lowerCase)',
                type
            }
        ])

    case 'Redux':
        generateFile([
            {
                folderPath:'./generate-files/tools/redux-action/',
                path:'./src/redux/actions/__store__(lowerCase)',
                type
            },
            {
                folderPath:'./generate-files/tools/redux-reducer/',
                path:'./src/redux/reducers/__store__(lowerCase)',
                type
            }
        ])

    case 'Redux-Action':
        generateFile({
            folderPath:'./generate-files/tools/redux-action/',
            path:'./src/redux/actions/__store__(lowerCase)',
            type
        })

    case 'Redux-Reducer':
        generateFile({
            folderPath:'./generate-files/tools/redux-reducer/',
            path:'./src/redux/reducers/__store__(lowerCase)',
            type
        })

    case 'Types':
        generateFile({
            folderPath:'./generate-files/tools/types/',
            path:'./src/types/__store__(lowerCase)',
            type
        })

    // default:
        // generateFile({
        //     folderPath:'./tools/component/',
        //     path:'./src/components/__store__(lowerCase)',
        //     type
        // })
        // throw new Error('Please select valid file type.')

}

// generateTemplateFiles([
//   {
//     option: 'Create Redux Store',
//     defaultCase: '(pascalCase)',
//     entry: {
//       folderPath: './tools/templates/react/redux-store/',
//     },
//     stringReplacers: ['__store__', { question: 'Insert model name', slot: '__model__' }],
//     output: {
//       path: './src/stores/__store__(lowerCase)',
//       pathAndFileNameDefaultCase: '(kebabCase)',
//       overwrite: true,
//     },
//   },
  
// ]);