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
  getProductbyId : async (prodId) => {
    const sql = `SELECT * FROM coffees WHERE id = ${prodId} ORDER BY name`;
    const result = await client.query(sql);
    return result.rows[0];
  },
  getProductbyCategory : async (prodCat) => {
    const sql = `SELECT * FROM coffees WHERE category = '${prodCat}' ORDER By name`;
    const result = await client.query(sql);
    return result.rows;
  },
}

module.exports = dataMapper;