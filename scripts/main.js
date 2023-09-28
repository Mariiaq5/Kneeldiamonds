import { KneelDiamonds } from "./KneelDiamonds.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { Metals} from "./Metals.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds(), JewelryStyles(), DiamondSizes(), Metals()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    
    renderAllHTML()
})


