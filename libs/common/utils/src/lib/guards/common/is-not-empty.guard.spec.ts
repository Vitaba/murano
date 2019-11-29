import { Chance } from 'chance';
import { isNotEmpty } from './is-not-empty.guard';

const chance = new Chance();

describe('isNotEmpty Guard', () => {
  it('Should pass when data is not empty', () => {
    const data = [{
      address: chance.string(),
    }];

    expect(isNotEmpty(data)).toEqual({
      guard: 'isNotEmpty',
      valid: true,
      value: data,
    });
  });

  it('Should fail when data is empty', () => {
    expect(isNotEmpty([])).toEqual({
      guard: 'isNotEmpty',
      message: 'Is not empty',
      valid: false,
      value: [],
    });
  });
});
