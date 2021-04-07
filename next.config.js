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
    images: {
        domains: ['206e126d-9f30-4cd7-90d7-80d8d2207339.s3.us-east-2.amazonaws.com']
    }
}