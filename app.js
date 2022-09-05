let clicker = document.querySelector('.clicker')
let counter = document.querySelector('.counter');
let upgradeContainer = document.querySelector('.col2')

let player = new Player(0, 1)

// Generate first upgrade
let lilypad = new Upgrade('lilypad', 50,1)
lilypad.generate()

let buddies = new Upgrade('buddies', 100,2)
buddies.generate()

clicker.onclick = function () {
    player.increaseScore()
    buddies.canPurchase()
    lilypad.canPurchase()
}

buddies.element.onclick = function () {
    buddies.purchase()
    buddies.updateCost()
}

lilypad.element.onclick = function () {
    lilypad.purchase()
    lilypad.updateCost()
}

setInterval(() => {
    if(lilypad.count >= 1){
        lilypad.update()
    }
    if(buddies.count >= 1){
        buddies.update()
        if(buddies.count <= 10){
            var img = document.querySelector('.clicker')
            img.src = `./images/frog_buddies_${buddies.count}.png`
        }
        else{
            img.src = `./images/frog_buddies_${10}.png`
        }
    }
}, 1000)