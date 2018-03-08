module.exports = (socket, options) => {
  const notAllowed = [];
  const anyOf = socket.endpoints.adgroup.inputs.POST.not.anyOf;
  for (const k of Object.keys(anyOf)) {
    notAllowed.push(anyOf[k].required[0]);
  }
  notAllowed.forEach(
    v => delete socket.endpoints.adgroup.inputs.POST.properties[v]
  );
  return '';
};
