// tslint:disable:no-any
import { GuardError } from '../../interfaces/guard/guard.interface';
import { isNotEmptyObject } from '../common/is-not-empty-object.guard';
import { isObject } from '../common/is-object.guard';

export function isAvatarConfig(arg: any) {
  const isObjectValidation = isObject(arg);
  const isNotEmptyValidation = isNotEmptyObject(arg);
  const valid = isObjectValidation.valid && isNotEmptyValidation.valid;
  const compose: GuardError = {
    valid,
    guard: 'isAvatarConfig',
    value: arg,
  };

  const errors = [];

  if (!isObjectValidation.valid) {
    errors.push({ ...isObjectValidation });
  }
  if (!isNotEmptyValidation.valid) {
    errors.push({ ...isNotEmptyValidation });
  }

  if (!valid) {
    compose.message = 'Is not a avatar config';
    compose.errors = errors;
  }

  return compose;
}
