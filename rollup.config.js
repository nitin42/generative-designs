import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import pkg from './package.json'

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return id => pattern.test(id)
}

const ensureArray = maybeArr =>
  Array.isArray(maybeArr) ? maybeArr : [maybeArr]

const createConfig = ({ output, min = false, env } = {}) => ({
  input: 'design-catalogue/designs-core/src/index.js',
  output: ensureArray(output).map(format =>
    Object.assign({}, format, {
      name: 'GenerativeDesign',
      exports: 'named',
      globals: {
        react: 'React',
        emotion: 'emotion',
        Two: 'two.js'
      }
    })
  ),
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]),
  plugins: [
    babel({ plugins: ['external-helpers'] }),
    env && replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    min && uglify()
  ].filter(Boolean)
})

export default [
  createConfig({
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }),
  createConfig({
    output: { file: pkg.unpkg, format: 'umd' },
    env: 'production',
    min: true
  })
]
