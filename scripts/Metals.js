import { getMetals } from "./database.js"
import { getSizes} from "./database.js"
import { setMetal } from "./database.js"

const sizes = getSizes()
const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    const listItems = metals.map(metal => {
        return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
