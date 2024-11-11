function addProductPopup(element) {
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('hide');

    const container = document.createElement('div');
    container.classList.add('popup-container');

    // TODO: category input to a selection
    container.innerHTML = `
        <div class="popup-header">
            <h2>Add product</h2>
        </div>
        <div class="popup-content">
            <form action="products/add" method="POST">
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
                <label for="description">Description</label>
                <input type="text" name="description" id="description">
                <label for="quantity">Quantity</label>
                <input type="number" name="quantity" id="quantity">
                <label for="price">Price</label>
                <input type="number" name="price" id="price">
                <label for="category">Category</label>
                <input type="text" name="category" id="category">

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

