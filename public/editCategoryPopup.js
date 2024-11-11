function editCategoryPopup(category) {
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('hide');

    const container = document.createElement('div');
    container.classList.add('popup-container');

    // TODO: category input to a selection
    container.innerHTML = `
        <div class="popup-header">
            <h2>Edit category</h2>
            <p>${category.name}</p>
        </div>
        <div class="popup-content">
            <form action="categories/edit" method="POST">
                <input type="hidden" name="name" id="name" value="${category.name}" readonly>
                <label for="description">Description</label>
                <input type="text" name="description" id="description" value="${category.description}">

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

