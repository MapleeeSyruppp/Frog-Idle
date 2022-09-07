let clicker = document.querySelector('.clicker')
let counter = document.querySelector('.counter');
let upgradeContainer = document.querySelector('.upgrades')

// Player 
let player = new Player(0, 1)

// Generate Upgrades
let clickies = new MultiplierUpgrade('clickies', 50,1)
let lilypad = new Upgrade('lilypad', 100,2)
let buddies = new Upgrade('buddies', 200,4)
let flybait = new Upgrade('flybait', 400,6)
let flytrap = new Upgrade('flytrap', 800, 8)
let bugzapper = new Upgrade('bugzapper', 1000, 10)

// Upgrades Array
const upgrades = [clickies, lilypad, buddies, flybait, flytrap, bugzapper]

// Generate each upgrade
upgrades.forEach((upgrade) => {
    upgrade.generate()
})

// Can player purchase any upgrade
function canPurchase(){
    upgrades.forEach((upgrade) => {
        upgrade.canPurchase()
    })
}

// Adds click event listener to each upgrade button
upgrades.forEach((upgrade) => {
    upgrade.element.addEventListener("click", (ev) => {
        // Upgrade Btn on click
        upgrade.purchase()
        upgrade.updateCost()
        if(upgrade.name === "buddies"){
            buddies.updateImg()
        }
    })
})

clicker.onclick = function () {
    const audio = new Audio("./sound/click_sound.mp3")
    audio.volume = 0.01
    audio.play()
    player.increaseScore()
    canPurchase()
}

setInterval(() => {
    let updateableUpgrades = [upgrades[1], upgrades[2], upgrades[3], upgrades[4], upgrades[5]]
    updateableUpgrades.forEach((upgrade) => {
        if(upgrade.count >= 1){
            upgrade.update()
            canPurchase()
        }
    })
}, 1000)

setInterval(() => {
    let perSecond = document.querySelector('.counter-per-second')
    perSecond.textContent = `${
        (buddies.count * buddies.increment) + 
        (lilypad.count * lilypad.increment) + 
        (flybait.count * flybait.increment) + 
        (flytrap.count * flytrap.increment) +
        (bugzapper.count * bugzapper.increment)} Fp/s`
}, 100)