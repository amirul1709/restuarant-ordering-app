import { menuArray } from './data.js'

const menuItems = document.getElementById('menu-items')

function getMenuItems () {
    return menuArray.map((item) => {
       const { name, ingredients, price, emoji, id} = item
        return `
                <div class="menu-item">
                    <div class="menu-item-info">
                        <p class="menu-item-emoji">${emoji}</p>
                            <div>
                                <p class="menu-item-name">${name}</p>
                                <p class="menu-item-ingredients">${ingredients.join(', ')}</p>
                                <p class="menu-item-price">$${price}</p>
                            </div>
                    </div>
                    <button class="menu-item-add-btn" data-menu-item-id="${id}">+</button>
                </div>
                `
    }).join('')
}

function addMenuItems () {
    menuItems.innerHTML = getMenuItems()
}

addMenuItems()

const cart = []

menuItems.addEventListener('click', (event) => {
    const button = event.target.closest('.menu-item-add-btn')
    if (!button) {
        return
    }

    const itemId = parseInt(button.dataset.menuItemId)

    console.log(menuArray.find((item) => item.id === itemId))

})