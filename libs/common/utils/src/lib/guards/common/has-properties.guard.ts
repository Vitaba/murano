import { GuardError } from '../../interfaces/guard/guard.interface';

// tslint:disable: no-any no-unsafe-any
export function hasProperties(
  arg: {},
  properties: Array<{ name: string; type: string }>,
) {
  return properties.reduce(
    (
        validation:
        GuardError,
        value: { name: string; type: 'array' },
    ) => {
      const sample = {
        array: () => ({
          guard: 'Array validation',
          message: 'Is not an array',
          valid:
          arg.hasOwnProperty(value.name) && arg[value.name] instanceof Array,
        }),
        number: () => ({
          guard: 'Number Validation',
          message: 'Is not a number',
          valid :
          arg.hasOwnProperty(value.name) && typeof arg[value.name] === 'number',
        }),
        object: () => ({
          guard: 'Object Validation',
          message : 'Is not an object',
          valid :
          arg.hasOwnProperty(value.name) && arg[value.name] instanceof Object,
        }),
        string: () => ({
          guard: 'String Validation',
          message : 'Is not a string',
          valid :
          arg.hasOwnProperty(value.name) && typeof arg[value.name] === 'string',
        }),
      };

      const propertyValidation = sample[value.type]();

      if (!propertyValidation.valid) {
        validation.valid = validation.valid && propertyValidation.valid;
        validation.errors.push({
          value,
          guard: propertyValidation.guard,
          message: propertyValidation.message,
          valid: !propertyValidation.valid,
        });
      }

      return validation;
    },
    { valid: true, guard: 'hasProperties', value: arg, errors: [] },
  );
}
