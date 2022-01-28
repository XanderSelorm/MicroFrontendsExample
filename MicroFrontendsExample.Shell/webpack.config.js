const path = require('path');
const fs = require("fs");

module.exports = [
    {
        name: "get-react",
        entry: () => fs.readdirSync("../ReactMicroFrontend/wwwroot/dist/").filter(f => f.endsWith(".js")).map(f => `../ReactMicroFrontend/wwwroot/dist/${f}`),
        devtool: "source-map",
        mode: "development",
        output: {
            filename: "app.js",
            path: path.resolve(__dirname, "./wwwroot/dist/react/")
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"]
                }
            ]
        }
    }
]