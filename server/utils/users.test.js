const {Users} = require('./users');

const expect = require('expect');



describe('Users', () => {
  var users;

  beforeEach( () => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mikael',
      room: 'node room'
    },{
      id: '2',
      name: 'Aurore',
      room: 'Angular room'
    },{
      id: '3',
      name: 'Alain',
      room: 'node room'
    }];
  });

  it('should create a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'lionel',
      room: 'office fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {

    users.removeUser('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var user = users.removeUser('5');

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var match = users.getUser('2');
    expect(match.id).toBe('2');
  });

  it('should not find user', () => {
    var match = users.getUser(1);
    expect(match).toNotExist();
  });

  it('should return users name for node room', () => {
    var userList = users.getUserList('node room');

    expect(userList).toEqual(['Mikael', 'Alain']);
  });
});
