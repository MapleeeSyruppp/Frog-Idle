let clicker = document.querySelector('.clicker')
let counter = document.querySelector('.counter');
let perSecond = document.querySelector('.counter-per-second')
let upgradeContainer = document.querySelector('.col2')

let player = new Player(0, 1)

// Generate Upgrades
let testMultiplier = new MultiplierUpgrade('clickies', 50,1)
testMultiplier.generate()

let lilypad = new Upgrade('lilypad', 100,1)
lilypad.generate()

let buddies = new Upgrade('buddies', 200,2)
buddies.generate()

clicker.onclick = function () {
    player.increaseScore()
    buddies.canPurchase()
    lilypad.canPurchase()
    testMultiplier.canPurchase()
}

buddies.element.onclick = function () {
    buddies.purchase()
    buddies.updateCost()
    buddies.updateImg()
    lilypad.canPurchase()
    testMultiplier.canPurchase()
}

lilypad.element.onclick = function () {
    lilypad.purchase()
    lilypad.updateCost()
    buddies.canPurchase()
    testMultiplier.canPurchase()
}

testMultiplier.element.onclick = function () {
    testMultiplier.purchase()
    testMultiplier.updateCost()
    buddies.canPurchase()
    lilypad.canPurchase()
}



setInterval(() => {
    if(lilypad.count >= 1){
        lilypad.update()
    }
    if(buddies.count >= 1){
        buddies.update()
    }
}, 1000)

setInterval(() => {
    perSecond.textContent = `${(buddies.count * buddies.increment) + (lilypad.count * lilypad.increment)} Fp/s`
}, 100)