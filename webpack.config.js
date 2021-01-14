module.exports = {
    module: {
        rules: [
            {
                test: /\.art$/,
                use: [
                    {
                        loader: 'art-template-loader'
                    }
                ]
            }
        ]
    }
}