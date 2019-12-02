// tslint:disable:no-any no-unsafe-any
import { GuardError } from '../../interfaces/guard/guard.interface';
import { hasProperties } from '../common/has-properties.guard';
import { isObject } from '../common/is-object.guard';

export function isAvatarStyle(
  arg: any,
  properties: Array<{ name: string; type: string }>,
) {
  const isObjectValidation = isObject(arg);
  const hasPropertiesValidation = hasProperties(arg, properties);
  const valid = isObjectValidation.valid && hasPropertiesValidation.valid;
  const compose: GuardError = {
    valid,
    guard: 'isAvatarStyle',
    value: arg,
  };

  const errors = [];

  if (!isObjectValidation.valid) {
    errors.push({ ...isObjectValidation });
  }
  if (!hasPropertiesValidation.valid) {
    errors.push({ ...hasPropertiesValidation });
  }

  if (!valid) {
    compose.message = 'Is not a avatar style';
    compose.errors = errors;
  }

  return compose;
}
