module.exports = (ext) => ({
    plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'postcss-nested-props': {},
        'postcss-simple-vars': {},
        'postcss-nested': {},
        tailwindcss: {},
        autoprefixer: {},
        cssnano: ext.env === 'production' ? {
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true
                    }
                }
            ] 
        } : false
    }
});
