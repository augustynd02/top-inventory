function editProductPopup(product, categories) {
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('hide');

    const container = document.createElement('div');
    container.classList.add('popup-container');

    const categoriesNodes = [];
    categories.forEach(category => {
        categoriesNodes.push(`<option value="${category.name}">${category.name}</option>`);
    });

    const optionsHTML = categoriesNodes.join('');

    container.innerHTML = `
        <div class="popup-header">
            <h2>Edit product</h2>
            <p>${product.name}</p>
        </div>
        <div class="popup-content">
            <form action="products/edit" method="POST">
                <input type="hidden" name="name" id="name" value="${product.name}" readonly>
                <label for="description">Description</label>
                <input type="text" name="description" id="description" value="${product.description}">
                <label for="quantity">Quantity</label>
                <input type="number" name="quantity" id="quantity" value="${product.quantity}">
                <label for="price">Price</label>
                <input type="number" name="price" id="price" value="${product.price}">
                <label for="category">Category</label>
                <select name="category" id="category">
                    ${optionsHTML}
                </select>

                <div class="buttons">
                    <button type="submit"><span class="material-icons">check</span></button>
                    <button type="button" id="close" onclick="closePopup()"><span class="material-icons">close</span></button>
                </div>
            </form>
        </div>
    `
    body.append(container);
}

function closePopup() {
    const popup = document.querySelector(".popup-container");
    document.body.removeChild(popup);
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.remove('hide');
}

