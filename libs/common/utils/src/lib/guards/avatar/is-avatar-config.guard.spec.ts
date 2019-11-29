import { Chance } from 'chance';
import { isAvatarConfig } from './is-avatar-config.guard';

const chance = new Chance();

describe('isAvatarConfig Guard', () => {
  it('Should pass when config is a non empty object', () => {
    const avatarConfig = { dateFormat: chance.string() };

    expect(isAvatarConfig(avatarConfig)).toEqual({
      guard: 'isAvatarConfig',
      valid: true,
      value: avatarConfig,
    });
  });

  it('Should fail when config is not an object', () => {
    const avatarConfig = chance.string();

    expect(isAvatarConfig(avatarConfig)).toEqual({
      errors: [{
        guard: 'isObject',
        message: 'Invalid Object',
        valid: false,
        value: avatarConfig,
      }],
      guard: 'isAvatarConfig',
      message: 'Is not a avatar config',
      valid: false,
      value: avatarConfig,
    });
  });

  it('Should fail when config is an empty object', () => {
    expect(isAvatarConfig({})).toEqual({
      errors: [{
        guard: 'isNotEmptyObject',
        message: 'Is not empty object',
        valid: false,
        value: {},
      }],
      guard: 'isAvatarConfig',
      message: 'Is not a avatar config',
      valid: false,
      value: {},
    });
  });
});
