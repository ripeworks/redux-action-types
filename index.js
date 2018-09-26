export function createTypes(prefix, ...args) {
  return args.reduce((types, type) => {
    [].concat(type).map(v => types[v] = prefix + v)
    return types
  }, {})
}

export function async(type, subTypes = ["REQUEST", "SUCCESS", "FAIL"]) {
  return [].concat(subTypes.map(t => `${type}_${t}`));
}
