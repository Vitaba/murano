import { Chance } from 'chance';
import { isObject } from './is-object.guard';

const chance = new Chance();

describe('isObject Guard', () => {
  it('Should pass when data is object', () => {
    expect(isObject({})).toEqual({
      guard: 'isObject',
      valid: true,
      value: {},
    });
  });

  it('Should fail when data is not an object', () => {
    const data = chance.string();

    expect(isObject(data)).toEqual({
      guard: 'isObject',
      message: 'Invalid Object',
      valid: false,
      value: data,
    });
  });
});
