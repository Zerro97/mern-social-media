module.exports = (config, env) => {
    config.module.rules.push(
        {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader",
            ],
            include: /\.module\.css$/
        }
    )
    return config
}