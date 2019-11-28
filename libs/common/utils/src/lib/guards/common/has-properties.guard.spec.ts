import { Chance } from 'chance';
import { hasProperties } from './has-properties.guard';

const chance = new Chance();

describe('hasProperties Guard', () => {
  it('Should pass when data is passed in type', () => {
    const data = {
      date: chance.string(),
      name: chance.string(),
    };

    expect(hasProperties(data, [{
      name: 'date', type: 'string',
    }, {
      name: 'name', type: 'string',
    }])).toEqual({
      errors: [],
      guard: 'hasProperties',
      valid: true,
      value: data,
    });
  });

  it('Should fail when missing properties', () => {
    const data = {
      date: chance.string(),
    };

    expect(hasProperties(data, [{
      name: 'date', type: 'string',
    }, {
      name: 'name', type: 'string',
    }, {
      name: 'age', type: 'number',
    }])).toEqual({
      errors: [{
        guard: 'String Validation',
        message : 'Is not a string',
        // this should be false
        valid : true,
        value: { name: 'name', type: 'string' },
      }, {
        guard: 'Number Validation',
        message : 'Is not a number',
        // this should be false
        valid : true,
        value: { name: 'age', type: 'number' },
      }],
      guard: 'hasProperties',
      valid: false,
      value: data,
    });
  });

  it('Should fail with incorrect property types', () => {
    const data = {
      age: chance.string(),
      date: chance.string(),
      name: chance.string(),
    };

    expect(hasProperties(data, [{
      name: 'date', type: 'string',
    }, {
      name: 'year', type: 'number',
    }, {
      name: 'age', type: 'number',
    }])).toEqual({
      errors: [{
        guard: 'Number Validation',
        message : 'Is not a number',
        // this should be false
        valid : true,
        value: { name: 'year', type: 'number' },
      }, {
        guard: 'Number Validation',
        message : 'Is not a number',
        // this should be false
        valid : true,
        value: { name: 'age', type: 'number' },
      }],
      guard: 'hasProperties',
      valid: false,
      value: data,
    });
  });
});
