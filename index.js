import { categories } from './data.js'

const vehicleCategories = document.querySelector('.vehicle-categories')

function renderCategories() {
    vehicleCategories.innerHTML = categories
    .reduce((acc, {category, icon, desc}) => {
        acc.push(`
            <li class="${category}-category">
                <img src="./images/${icon}" alt="" aria-hidden="true">
                <h2>${category}</h2>
                <p>${desc}</p>
                <a href="/${category}" rel="noopener norefferer">Learn More</a>
            </li>
        `)
        return acc
    }, []).join("")
}

renderCategories()