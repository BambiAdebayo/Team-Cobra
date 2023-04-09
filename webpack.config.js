
const path = require("path")

module.exports ={
    mode:"development",
    entry:"./src/register.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    // module: {
    //     rules: [{ test: /\.html/, use: 'raw-loader' }],
    //   },
    watch:true}