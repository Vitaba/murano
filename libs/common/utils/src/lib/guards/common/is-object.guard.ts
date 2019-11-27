// tslint:disable:no-any
import { GuardError } from '../../interfaces/guard/guard.interface';

export function isObject(arg: any): GuardError {
  const valid = arg instanceof Object;
  const compose: GuardError = {
    valid,
    guard: 'isObject',
    value: arg,
  };

  if (!valid) {
    compose.message = 'Invalid Object';
  }

  return compose;
}
