import { GuardError } from '../../interfaces/guard/guard.interface';
import { hasProperties } from '../common/has-properties.guard';
import { isObject } from '../common/is-object.guard';

// tslint:disable: no-any no-unsafe-any

export function isCategoriesData(
  arg: any,
  properties: Array<{ name: string; type: string }>,
) {
  const isObjectValidation = isObject(arg);
  const hasPropertiesValidation = hasProperties(arg, properties);
  const valid = isObjectValidation && hasPropertiesValidation.valid;

  const errors = [];

  if (!isObjectValidation.valid) {
    errors.push({ ...isObjectValidation });
  }
  if (!hasPropertiesValidation.valid) {
    errors.push({ ...hasPropertiesValidation });
  }

  const compose: GuardError = {
    valid,
    guard: 'isCategoriesData',
    value: arg,
  };

  if (!valid) {
    compose.message = 'Is not a categories data';
    compose.errors = errors;
  }

  return compose;
}
