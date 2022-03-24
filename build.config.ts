import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
    inlineDependencies: false
  },
  externals: ['node-fetch'],
  entries: [
    'src/index',
    'src/cli'
  ]
})
