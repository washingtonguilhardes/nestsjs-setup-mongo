import { MongoClient } from 'mongodb';

import { configs } from './../../src/configs/database';

export const getDb = async () => {
  const { MongoURI } = configs();
  return MongoClient.connect(MongoURI, {
    useUnifiedTopology: true,
    authSource: 'lppappdatasource',
  }).then(client => client.db());
};
