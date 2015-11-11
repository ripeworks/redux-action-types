export function createTypes(prefix, ...args) {
  return args.reduce((types, type) => {
    [].concat(type).map(v => types[v] = prefix + v)
    return types
  }, {})
}

export function async(type) {
  return [type, `${type}_SUCCESS`, `${type}_FAIL`]
}
