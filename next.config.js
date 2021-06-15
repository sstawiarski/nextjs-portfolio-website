const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const config = {
    distDir: 'build',
    publicRuntimeConfig: {
        // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
    },
    webpack: (config) => {
        // extend your webpack configuration here
/*         config.module.rules.push({
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  prettier: false,
                  svgo: false,
                  svgoConfig: {
                    plugins: [{ removeViewBox: false }],
                  },
                  titleProp: true,
                  ref: true,
                },
              },
              {
                loader: 'file-loader',
                options: {
                  name: 'static/media/[name].[hash].[ext]',
                },
              },
            ],
            issuer: {
              and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
          }); */


        return config;
    },
    images: {
        domains: ['206e126d-9f30-4cd7-90d7-80d8d2207339.s3.us-east-2.amazonaws.com', 'i.imgur.com']
    }
}

module.exports = withBundleAnalyzer(config);