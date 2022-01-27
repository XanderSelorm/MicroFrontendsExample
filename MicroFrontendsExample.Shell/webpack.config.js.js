module.exports = [
    {
        name: "get-react",
        entry: () => fs.readdirSync("../ReactHello/wwwroot/dist/").filter(f => f.endsWith(".js")).map(f => `../ReactMicroFrontend/wwwroot/dist/react/${f}`),
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