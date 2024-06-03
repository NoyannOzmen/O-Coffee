const client = require('./client');

const dataMapper = {
  getAllProducts : async () => {
    const sql = '#';
    const result = await client.query(sql);
    return result.rows;
  },
  getProductById : async () => {
    const sql = '#';
    const result = await client.query(sql);
    return result.rows[0];
  }
}