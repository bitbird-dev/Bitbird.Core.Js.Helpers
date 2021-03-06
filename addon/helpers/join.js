import { helper } from '@ember/component/helper';
import ArrayProxy from '@ember/array/proxy';

export function join(params, hash) {
  let value = params[0],
    separator = hash.separator || params[1] || ', ',
    path = hash.path || params[2] || 'name';

  if(value instanceof Array) {
    return value.join(separator);
  } else if(value instanceof ArrayProxy) {
    return value.getEach(path).join(separator);
  }
  return value.toString();
}

export default helper(join);
