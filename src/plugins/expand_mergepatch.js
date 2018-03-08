const merge = require('lodash.merge');
const mergePatch = require('json-merge-patch');

function applyMergePatch(schema) {
  if (!schema || typeof schema !== 'object') {
    return schema;
  }
  let newSchema = Array.isArray(schema) ? [] : {};
  for (const k of Object.keys(schema)) {
    if (k !== '$merge' && k !== '$patch') {
      newSchema = merge(newSchema, {[k]: applyMergePatch(schema[k])});
      continue;
    }
    const source = applyMergePatch(schema[k].source);
    const patch = applyMergePatch(schema[k].with);
    return mergePatch.apply(source, patch);
  }
  return newSchema;
}

export default applyMergePatch;
