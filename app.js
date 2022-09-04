let clicker = document.querySelector('.clicker')
let counter = document.querySelector('.counter');
let upgradeContainer = document.querySelector('.col2')

let player = new Player(0, 1)

// Generate first upgrade
let buddies = new Upgrade('buddies', 100,1)
buddies.generate()

clicker.onclick = function () {
    player.increaseScore()
    buddies.canPurchase()
}

buddies.element.onclick = function () {
    buddies.purchase()
    buddies.updateCost()
}

setInterval(() => {
    if(buddies.count >= 1){
        buddies.update()
    }
}, 1000)