import { Chance } from 'chance';
import { isAvatarConfig } from './is-avatar-config.guard';

const chance = new Chance();

describe('isAvatarConfig Guard', () => {
  it('Should pass when config is correct', () => {
    const avatarConfig = { dateFormat: 'medium' };

    expect(isAvatarConfig(avatarConfig)).toEqual({
      guard: 'isAvatarConfig',
      valid: true,
      value: avatarConfig,
    });
  });

  it('Should fail when config is not an object', () => {
    const avatarConfig = chance.string();

    expect(isAvatarConfig({ arg: avatarConfig })).toEqual({
      errors: [{
        errors: [{
          guard: 'String Validation',
          message: 'Is not a string',
          valid: false,
          value: {
            name: 'dateFormat',
            type: 'string',
          },
        }],
        guard: 'hasProperties',
        valid: false,
        value: { arg: avatarConfig },
      }],
      guard: 'isAvatarConfig',
      message: 'Is not a avatar config',
      valid: false,
      value: { arg: avatarConfig },
    });
  });

  it('Should fail when config is an empty object', () => {
    expect(isAvatarConfig({})).toEqual({
      errors: [{
        errors: [{
          guard: 'String Validation',
          message: 'Is not a string',
          valid: false,
          value: {
            name: 'dateFormat',
            type: 'string',
          },
        }],
        guard: 'hasProperties',
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
