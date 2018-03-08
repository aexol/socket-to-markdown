function run(socket, parsers) {
  if (parsers.length === 0) {
    return socket;
  }
  socket = require(parsers[0])(socket);
  if (typeof socket.then === 'function') {
    return socket.then(socket => run(socket, parsers.slice(1)));
  }
  return run(socket, parsers.slice(1));
}
function parser(socket, opts) {
  let parsers = [
    './plugins/expand_refs',
    './plugins/expand_allof',
    './plugins/expand_mergepatch'
  ];
  if (opts.parsers) {
    parsers = parsers.concat(opts.parsers);
  }
  return run(socket, parsers);
}

export default parser;
