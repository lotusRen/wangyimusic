var path =require('path')
function resolve(str){
 return  path.join(__dirname,str)
}

module.exports={
  configureWebpack: {
    resolve: {
      alias: {
        'components': resolve('src/components'),
        'common': resolve('src/common')

      }
    }
  }
}