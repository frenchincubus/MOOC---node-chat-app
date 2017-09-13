const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var res = generateMessage('Lionel', 'new message');
    expect(res.from).toExist();
    expect(res.text).toExist();
    expect(res.createdAt).toBeA('number');
    // expect(res).toInclude({from, message});

  });
});
