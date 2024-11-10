const pool = require('./pool');

async function getAllCategories() {
    try {
        const q = "SELECT * FROM categories;";
        const { rows } = await pool.query(q);
        return rows;
    } catch (e) {
        console.log('Error: ' + e);
    }
}

module.exports = {
    getAllCategories,
}
