db.auth('root', 'example');

db.getSiblingDB('lppappdatasource').createUser({
  user: 'lppappdatasourceuser',
  pwd: 'lppappdatasourcepwd',
  roles: [
    {
      role: 'readWrite',
      db: 'lppappdatasource',
    },
  ],
});
