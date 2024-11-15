const pool = require('./pool');

async function getAllCategories() {
    const q = "SELECT * FROM categories;";
    const { rows } = await pool.query(q);
    return rows;
}

async function getAllProducts() {
    const q = "SELECT * FROM products";
    const { rows } = await pool.query(q);
    return rows;
}

async function addProduct({ name, description, quantity, price, category }) {
    const q = `
        INSERT INTO products (name, description, quantity, price, category_id)
        VALUES ($1, $2, $3, $4, (SELECT id FROM categories WHERE categories.name = $5));
        `;
    await pool.query(q, [name, description, quantity, price, category]);
}

async function addCategory({ name, description }) {
    const q = "INSERT INTO categories (name, description) VALUES ($1, $2);";
    await pool.query(q, [name, description]);
}

async function deleteProduct(name) {
    const q = "DELETE FROM products WHERE products.name = ($1);";
    await pool.query(q, [name]);
}

async function deleteCategory(name) {
    const q = "DELETE FROM categories WHERE categories.name = ($1);";
    await pool.query(q, [name]);
}

async function editProduct({ name, description, quantity, price }) {
    const q = "UPDATE products SET description = $2, quantity = $3, price = $4 WHERE name = $1;"
    await pool.query(q, [name, description, quantity, price]);
}

async function editCategory({ name, description }) {
    const q = "UPDATE categories SET description = $2 WHERE name = $1;";
    await pool.query(q, [name, description]);
}

async function getTotalPrice() {
    const q = `SELECT SUM(quantity * price) FROM products`;
    const { rows } = await pool.query(q);
    return rows[0].sum;
}

module.exports = {
    getAllCategories,
    getAllProducts,
    addProduct,
    addCategory,
    deleteProduct,
    deleteCategory,
    editProduct,
    editCategory,
    getTotalPrice
}
