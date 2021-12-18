db = db.getSiblingDB("cbnu-alrami");
db.createCollection("test");
db.createUser({
  user: "mongo",
  pwd: "mongo",
  roles: [{ role: "readWrite", db: "cbnu-alrami" }],
});
db.test.insertMany([
  {
    name: 'hello-world',
  },
]);