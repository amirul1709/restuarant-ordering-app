import { menuArray } from './data.js'

const menuItems = document.getElementById('menu-items')

function getMenuItems () {
    const items = menuArray.map((item) => {
       const { name, ingredients, id, price, emoji} = item
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
                <button class="menu-item-add-btn">+</button>
            </div>
        `
    })
    return items.join('')
}

function addMenuItems () { menuItems.innerHTML = getMenuItems() }

addMenuItems()