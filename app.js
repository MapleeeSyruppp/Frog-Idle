let clicker = document.querySelector('.clicker')
let counter = document.querySelector('.counter');
let perSecond = document.querySelector('.counter-per-second')
let upgradeContainer = document.querySelector('.col2')
// TODO
// FLYBAIT UPGRADE
// BIGGER POND UPGRADE
// FLYTRAP UPGRADE
// BUGZAPPER UPGRADE
let player = new Player(0, 1)

// Generate Upgrades
let testMultiplier = new MultiplierUpgrade('clickies', 50,1)
testMultiplier.generate()

let lilypad = new Upgrade('lilypad', 100,1)
lilypad.generate()

let buddies = new Upgrade('buddies', 200,2)
buddies.generate()

let flybait = new Upgrade('flybait', 400,4)
flybait.generate()

function canPurchase(){
    buddies.canPurchase()
    lilypad.canPurchase()
    testMultiplier.canPurchase()
    flybait.canPurchase()
}

clicker.onclick = function () {
    player.increaseScore()
    canPurchase()
}

buddies.element.onclick = function () {
    buddies.purchase()
    buddies.updateCost()
    buddies.updateImg()
    canPurchase()
}

lilypad.element.onclick = function () {
    lilypad.purchase()
    lilypad.updateCost()
    canPurchase()
}

testMultiplier.element.onclick = function () {
    testMultiplier.purchase()
    testMultiplier.updateCost()
    canPurchase()
}

flybait.element.onclick = function () {
    flybait.purchase()
    flybait.updateCost()
    canPurchase()
}


setInterval(() => {
    if(lilypad.count >= 1){
        lilypad.update()
    }
    if(buddies.count >= 1){
        buddies.update()
    }
    if(flybait.count >= 1){
        flybait.update()
    }
}, 1000)

setInterval(() => {
    perSecond.textContent = `${(buddies.count * buddies.increment) + (lilypad.count * lilypad.increment) + (flybait.count * flybait.increment)} Fp/s`
}, 100)