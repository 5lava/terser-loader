import { getOptions }                  from 'loader-utils'
import { validate as validateOptions } from 'schema-utils'
import Terser                          from 'terser'

import schema from './options.json'


export const raw = false

export default async function loader (source) {
  const options = getOptions(this) || {}

  validateOptions(schema, options, {
    name:         'terser-loader',
    baseDataPath: 'options',
  })

  const webpackCallback = this.async()

  let minifyResult
  try {
    minifyResult = await Terser.minify(source, options.terserOptions || {})

  } catch (error) {
    webpackCallback(error)
    return
  }

  let result = minifyResult.code

  if (options.stripTrailingSemicolon) {
    result = result.replace(/;([\s\uFEFF\xA0]*)$/g, '$1')
  }

  webpackCallback(null, result)
}
