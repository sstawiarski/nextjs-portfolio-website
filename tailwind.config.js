module.exports = {
    important: true,
    purge: {
        content: ['./pages/**/*.tsx', './components/**/*.tsx']
    },
    theme: {
        fontFamily: {
            sans: ['Heebo', 'sans-serif'],
            mono: ['Roboto Mono', 'ui-monospace', 'Menlo', 'monospace']
        }
    },
    variants: {},
    plugins: [],
    future: {
        purgeLayersByDefault: true,
    },
};