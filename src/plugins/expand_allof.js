import merge from 'lodash.merge';

function expandAllOf(schema) {
  if (!schema || typeof schema !== 'object') {
    return schema;
  }
  let newSchema = Array.isArray(schema) ? [] : {};
  for (const k of Object.keys(schema)) {
    if (k !== 'allOf') {
      newSchema = merge(newSchema, {[k]: expandAllOf(schema[k])});
      continue;
    }
    newSchema = merge(newSchema, expandAllOf(schema[k]));
  }
  return newSchema;
}

export default expandAllOf;
