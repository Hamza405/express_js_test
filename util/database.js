const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = callback => {
  MongoClient.connect('mongodb://localhost:27017/').then((client => {
    console.log('Connected');
    _db = client.db('shop');
    callback();
  })).catch(e=>{console.log(e);
    throw e;
  });
}

const getDb = () => {
  if(_db){
    return _db
  }
  throw 'No database found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;