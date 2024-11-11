function deletePopup(type, name) {
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('hide');

    const container = document.createElement('div');
    container.classList.add('popup-container');

    container.innerHTML = `
        <div class="popup-header">
            <h2>Are you sure that you want to delete ${name}?</h2>
        </div>
        <div class="popup-content">
            <form action="${type}/delete" method="POST">
                <input type="hidden" name="name" value="${name}">
                <div class="buttons">
                    <button type="submit">Yes, delete.</button>
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


