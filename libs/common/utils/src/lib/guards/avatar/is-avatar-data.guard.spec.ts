import { Chance } from 'chance';
import { isAvatarData } from './is-avatar-data.guard';

const chance = new Chance();

describe('isAvatarData Guard', () => {
  it('Should pass when data is a non empty object', () => {
    const avatarData = {
      date: chance.string(),
      image: {
        alt: chance.string(),
        value: chance.url(),
      },
      name: chance.string(),
    };

    expect(isAvatarData(avatarData, [{
      name: 'name', type: 'string',
    }, {
      name: 'date', type: 'string',
    }, {
      name: 'image', type: 'object',
    }])).toEqual({
      guard: 'isAvatarData',
      valid: true,
      value: avatarData,
    });
  });

  it('Should fail with one incorrect property type', () => {
    const avatarData = {
      date: chance.string(),
      image: {
        alt: chance.string(),
        value: chance.url(),
      },
      name: chance.integer({ min: 0 }),
    };

    expect(isAvatarData(avatarData, [{
      name: 'name', type: 'string',
    }, {
      name: 'date', type: 'string',
    }, {
      name: 'image', type: 'object',
    }])).toEqual({
      errors: [{
        errors: [{
          guard: 'String Validation',
          message: 'Is not a string',
          valid: false,
          value: { name: 'name', type: 'string' },
        }],
        guard: 'hasProperties',
        valid: false,
        value: avatarData,
      }],
      guard: 'isAvatarData',
      message: 'Is not a avatar data',
      valid: false,
      value: avatarData,
    });
  });

  it('Should fail with many incorrect property type', () => {
    const avatarData = {
      date: chance.string(),
      image: chance.integer({ min: 0 }),
      name: chance.integer({ min: 0 }),
    };

    expect(isAvatarData(avatarData, [{
      name: 'name', type: 'string',
    }, {
      name: 'date', type: 'string',
    }, {
      name: 'image', type: 'object',
    }])).toEqual({
      errors: [{
        errors: [{
          guard: 'String Validation',
          message: 'Is not a string',
          valid: false,
          value: { name: 'name', type: 'string' },
        }, {
          guard: 'Object Validation',
          message: 'Is not an object',
          valid: false,
          value: { name: 'image', type: 'object' },
        }],
        guard: 'hasProperties',
        valid: false,
        value: avatarData,
      }],
      guard: 'isAvatarData',
      message: 'Is not a avatar data',
      valid: false,
      value: avatarData,
    });
  });

  it('Should fail when missing one property', () => {
    const avatarData = {
      image: {
        alt: chance.string(),
        value: chance.url(),
      },
      name: chance.string(),
    };

    expect(isAvatarData(avatarData, [{
      name: 'name', type: 'string',
    }, {
      name: 'date', type: 'string',
    }, {
      name: 'image', type: 'object',
    }])).toEqual({
      errors: [{
        errors: [{
          guard: 'String Validation',
          message: 'Is not a string',
          valid: false,
          value: { name: 'date', type: 'string' },
        }],
        guard: 'hasProperties',
        valid: false,
        value: avatarData,
      }],
      guard: 'isAvatarData',
      message: 'Is not a avatar data',
      valid: false,
      value: avatarData,
    });
  });

  it('Should fail when missing many properties', () => {
    const avatarData = {
      image: {
        alt: chance.string(),
        value: chance.url(),
      },
    };

    expect(isAvatarData(avatarData, [{
      name: 'name', type: 'string',
    }, {
      name: 'date', type: 'string',
    }, {
      name: 'image', type: 'object',
    }])).toEqual({
      errors: [{
        errors: [{
          guard: 'String Validation',
          message: 'Is not a string',
          valid: false,
          value: { name: 'name', type: 'string' },
        }, {
          guard: 'String Validation',
          message: 'Is not a string',
          valid: false,
          value: { name: 'date', type: 'string' },
        }],
        guard: 'hasProperties',
        valid: false,
        value: avatarData,
      }],
      guard: 'isAvatarData',
      message: 'Is not a avatar data',
      valid: false,
      value: avatarData,
    });
  });
});
