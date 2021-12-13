db = db.getSiblingDB('cbnu-alrami');
db.createCollection('test');

db.createUser({
  user: 'mongo',
  pwd: 'mongo',
  roles: [{ role: 'readWrite', db: 'test' }],
});
db.test.insertMany([
  {
    name: 'hello-world',
  },
]);
