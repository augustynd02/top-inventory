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

async function addProduct({ name, description, quantity, price, category }) {
        const q = `
        INSERT INTO products (name, description, quantity, price, category_id)
        VALUES ($1, $2, $3, $4, (SELECT id FROM categories WHERE categories.name = $5));
        `;
        await pool.query(q, [name, description, quantity, price, category]);
}

async function addCategory({ name, description }) {
    try {
        const q = "INSERT INTO categories (name, description) VALUES ($1, $2);";
        await pool.query(q, [name, description]);
    } catch (err) {
        next(err);
    }
}

async function deleteProduct(name) {
    try {
        const q = "DELETE FROM products WHERE products.name = ($1);";
        await pool.query(q, [name]);
    } catch (err) {
        next(err);
    }
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

module.exports = {
    getAllCategories,
    getAllProducts,
    addProduct,
    addCategory,
    deleteProduct,
    deleteCategory,
    editProduct,
    editCategory
}
