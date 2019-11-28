import { Chance } from 'chance';
import { isNotEmptyObject } from './is-not-empty-object.guard';

const chance = new Chance();

describe('isNotEmpty Guard', () => {
  it('Should pass when data is not empty', () => {
    const data = {
      address: chance.string(),
    };

    expect(isNotEmptyObject(data)).toEqual({
      guard: 'isNotEmptyObject',
      valid: true,
      value: data,
    });
  });

  it('Should fail when data is empty', () => {
    expect(isNotEmptyObject({})).toEqual({
      guard: 'isNotEmptyObject',
      message: 'Is not empty object',
      valid: false,
      value: {},
    });
  });
});
