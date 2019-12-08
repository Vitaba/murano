// tslint:disable: no-any no-unsafe-any
import { GuardError, hasProperties, isObject } from '@vitaba/common-utils';

export function isCategoriesStyles(
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
    guard: 'isCategoriesStyles',
    value: arg,
  };

  if (!valid) {
    compose.message = 'Is not a categories styles';
    compose.errors = errors;
  }

  return compose;
}
