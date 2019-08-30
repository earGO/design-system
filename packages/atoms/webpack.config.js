const basic = require('../../webpack.config')

const local = {
    output: {
        library: 'atoms',
        libraryExport:'default',
        libraryTarget: 'commonjs2'
    },
}

module.exports = {...basic,...local}
