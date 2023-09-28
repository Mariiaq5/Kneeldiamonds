import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
         addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>🤘🖤Kneel Diamonds🖤🤘</h1>

        <article class="choices">
            <section class="choices__metals options">
            <div>
                <h2>Metals🐈‍⬛</h2>
                ${Metals()}
                </div>
            <img src="images/skelet.png" class="skelete">
            </section>
            <section class="choices__sizes options">
            <div>
                <h2>Sizes🐈‍⬛</h2>
                ${DiamondSizes()}
                </div>
            <img src="images/skeletwhitebackground.png" class="skelete">
            </section>
            <section class="choices__styles options">
            <div>
                <h2>Styles🐈‍⬛</h2>
                ${JewelryStyles()}
                </div>
            <img src="images/skelet3.png" class="skelete">
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order⚡</button>
        </article>

        <article class="customOrders">
          <div>
        <h2>Custom Jewelry Orders👽</h2>
            ${Orders()} 
            </div>
            <img src="images/ring_silver.png" class="silverRing">
            <img src="images/cat_silv_ring.png" class="catRing">
            <img src="images/silv_ring.png" class="silverRing">
        </article>`
}

