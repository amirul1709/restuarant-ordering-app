import { menuArray } from './data.js'

const menuItems = document.getElementById('menu-items')
const yourOrderSummery = document.getElementById('your-order-summary')


//get menu items function
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

//add button event listener
menuItems.addEventListener('click', (event) => {
    const button = event.target.closest('.menu-item-add-btn')
    if (!button) {
        return
    }

    const itemId = parseInt(button.dataset.menuItemId)

    const item = menuArray.find((item) => item.id === itemId)

    console.log(item)
    cart.push(item)
    yourOrderSummery.innerHTML = getCheckoutItems()
})

//get items for checkout function
function getCheckoutItems () {
    return cart.map((item) => {
        const { name, price} = item
        return `
            <div class="order-item">
                <div>
                    <span class="item-name">${name}</span>
                    <button class="remove-item-btn">remove</button>
                </div>
                <span class="item-price">$${price}</span>
            </div>
        `
    }).join('')

}