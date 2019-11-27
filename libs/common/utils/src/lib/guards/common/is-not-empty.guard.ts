import { GuardError } from '../../interfaces/guard/guard.interface';

// tslint:disable: no-any no-unsafe-any
export function isNotEmpty(arg: any) {
  const valid = arg.length > 0;
  const compose: GuardError = {
    valid,
    guard: 'isNotEmpty',
    value: arg,
  };

  if (!valid) {
    compose.message = 'Is not empty';
  }

  return compose;
}
