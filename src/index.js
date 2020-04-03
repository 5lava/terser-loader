import { getOptions }  from 'loader-utils'
import validateOptions from 'schema-utils'
import Terser          from 'terser'

import schema from './options.json'


export const raw = false

export default function loader (source) {
  const options = getOptions(this) || {}

  validateOptions(schema, options, {
    name:         'terser-loader',
    baseDataPath: 'options',
  })

  const { code, error, warnings } = Terser.minify(source, options.terserOptions || {})

  if (error) this.emitError(error)
  if (warnings) this.emitWarning(warnings.map(w => `${w}`.trim()).join('\n'))

  let result = code

  if (options.stripTrailingSemicolon) {
    result = result.replace(/;([\s\uFEFF\xA0]*)$/g, '$1')
  }

  return result
}
