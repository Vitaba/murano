import { GuardError } from '../../interfaces/guard/guard.interface';

// tslint:disable: no-any no-unsafe-any
export function isNotEmptyObject(arg: any) {
  const valid = Object.keys(arg).length > 0;
  const compose: GuardError = {
    valid,
    guard: 'isNotEmptyObject',
    value: arg,
  };

  if (!valid) {
    compose.message = 'Is not empty object';
  }

  return compose;
}
