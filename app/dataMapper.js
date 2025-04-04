const client = require('./client');

const dataMapper = {
  getAllProducts : async () => {
    const sql = 'SELECT * FROM coffees';
    const result = await client.query(sql);
    return result.rows;
  },
  getSomeProducts : async () => {
    const sql = `SELECT * FROM coffees ORDER BY name LIMIT 3 OFFSET 13`;
    const result = await client.query(sql);
    return result.rows;
  },
  getProductById : async (prodId) => {
    const text = "SELECT * FROM coffees WHERE id = $1 ORDER BY name";
    const values = [`${prodId}`];
    const result = await client.query(text, values);
    return result.rows[0];
  },
  getProductByCategory : async (prodCat) => {
    const text = "SELECT * FROM coffees WHERE category = $1 ORDER By name";
    const values = [`${prodCat}`];
    const result = await client.query(text, values);
    return result.rows;
  },
}

module.exports = dataMapper;