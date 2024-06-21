/** @type {import('next-i18next').UserConfig} */

const path = require('path')

module.exports = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    localeDetection: false
  },
  reloadOnPrerender: true,
  localePath: path.resolve('./public/locales')
}
