const pool = require('./pool');

async function getAllCategories() {
    try {
        const q = "SELECT * FROM categories;";
        const { rows } = await pool.query(q);
        return rows;
    } catch (err) {
        next(err)
    }
}

async function getAllProducts() {
    try {
        const q = "SELECT * FROM products";
        const { rows } = await pool.query(q);
        return rows;
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllCategories,
    getAllProducts
}
