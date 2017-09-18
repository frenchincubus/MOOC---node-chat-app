const expect = require('expect');

const {isRealString} = require('./validation');

describe('Join Page', () => {
  it('should reject non-string values', () => {
    var randomValue = isRealString(4564);
    expect(randomValue).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var spaceValue = isRealString('   ');
    expect(spaceValue).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var newValue = isRealString('   gfdjkefjfds   ');
    expect(newValue).toBe(true);
  });
});
