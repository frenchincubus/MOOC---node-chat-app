const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var res = generateMessage('Lionel', 'new message');
    expect(res.from).toExist();
    expect(res.text).toExist();
    expect(res.createdAt).toBeA('number');
    // expect(res).toInclude({from, message});


  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'lionel';
    var lat = 1;
    var long = 1;
    var url = `https://www.google.fr/maps?q=${lat},${long}`;
    var res = generateLocationMessage(from, lat, long);
    expect(res).toInclude({from, url});
    expect(lat).toBeA('number');
    expect(long).toBeA('number');
  });
});
