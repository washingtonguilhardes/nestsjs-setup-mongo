import { getDb } from './../migrations-utils/db';

export const up = async () => {
  const db = await getDb();
  db.collection('test').insertOne({
    version: '0.1',
  });
};

export const down = async () => {
  const db = await getDb();
  db.collection('test').deleteMany({
    version: '0.1',
  });
};
