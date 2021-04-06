module.exports = {
    distDir: 'build',
    publicRuntimeConfig: {
        // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
    },
    webpack: (config) => {
        // extend your webpack configuration here
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })
        return config;
    },
}