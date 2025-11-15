import { menuArray } from './data.js'

const menuItems = document.getElementById('menu-items')
const yourOrderSummery = document.getElementById('your-order-summary')
const checkOut = document.getElementById('checkout')
const yourOrder = document.getElementById('your-order')
const yourCardInfo = document.getElementById('your-card-info')
const yourCardForm = document.getElementById('your-card-form')


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
    const addItemButton = event.target.closest('.menu-item-add-btn')
    if (!addItemButton) {
        return
    }
    const itemId = parseInt(addItemButton.dataset.menuItemId)
    const item = menuArray.find((item) => item.id === itemId)

    cart.push(item)

    yourOrder.style.display = 'flex'

    yourOrderSummery.innerHTML = getCheckoutItems()
    checkOut.innerHTML = `
        <span>Total price:</span>
        <span id="total-price">$${getTotalPrice()}</span>
        `
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

function getTotalPrice () {
    return cart.reduce((total, item) => {
        return total + item.price}, 0)
}

yourOrder.addEventListener('click', (event) => {
    const checkoutButton = event.target.closest('#checkout-btn')
    if (!checkoutButton) {
        return
    }
    yourCardInfo.style.display = 'flex'
})

yourCardForm.addEventListener('submit', (event) => {
    event.preventDefault()

    yourCardInfo.style.display = 'none'
    yourOrderSummery.innerHTML = `<p>Thank you!</p>`
    checkOut.innerHTML = ``
})