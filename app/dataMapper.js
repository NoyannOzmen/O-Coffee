const client = require('./client');

const dataMapper = {
  getAllProducts : async () => {
    const sql = 'SELECT * FROM coffees';
    const result = await client.query(sql);
    return result.rows;
  },
  getSomeProducts : async () => {
    const sql = 'SELECT * FROM coffees LIMIT 3 OFFSET 13';
    const result = await client.query(sql);
    return result.rows;
  },
  getProductById : async (prodId) => {
    const sql = `SELECT * FROM coffees WHERE id = ${prodId}`;
    const result = await client.query(sql);
    return result.rows[0];
  },
  getProductbyCategory : async (prodCat) => {
    const sql = `SELECT * FROM coffees WHERE id = ${prodCat}`;
    const result = await client.query(sql);
    return result.rows;
  },
}