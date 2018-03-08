import fs from 'fs';
import path from 'path';
import $RefParser from 'json-schema-ref-parser';
const YAML = $RefParser.YAML;

const SocketSchemaResolver = socket => {
  const resolver = {
    order: 1
  };
  resolver.isExtraSchema = p =>
    path.resolve('.') === path.dirname(p) &&
    socket.schemas &&
    typeof socket.schemas[path.basename(p)] !== undefined;
  resolver.canRead = file => {
    return resolver.isExtraSchema(file.url);
  };
  resolver.read = file => {
    return new Promise((resolve, reject) => {
      var p = path.join(
        path.resolve('.'),
        'src',
        socket.schemas[path.basename(file.url)]
      );
      fs.readFile(p, (err, data) => {
        resolve(data);
      });
    });
  };
  return resolver;
};

export default socket =>
  new $RefParser().dereference(socket, {
    resolve: {
      socket: SocketSchemaResolver(socket)
    }
  });
