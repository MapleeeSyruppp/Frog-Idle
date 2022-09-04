class Player{
    constructor(score, increment){
        this.score = score
        this.increment = increment
    }

    increaseScore(){
        this.score += this.increment
        counter.textContent = `${this.score} Flies`
    }

    update(){
        counter.textContent = `${this.score} Flies`
    }

}

class Upgrade{
    constructor(name,price,increment){
        this.name = name
        this.price = price
        this.increment = increment
        this.count = 0
    }
    generate(opt){
        if(opt === 0 || opt === null || opt === undefined){
            let container = document.createElement('div')
            container.setAttribute('class',`${this.name}`)

            // Creates header of the upgrade
            let header = document.createElement('h3')
            header.textContent = `${this.name} `
            container.append(header)

            // Creates the cost of the upgrade
            let priceParagraph = document.createElement('p')
            priceParagraph.textContent = 'Cost: '
            let price = document.createElement('span')
            price.setAttribute('class','cost')
            price.textContent = this.price
            priceParagraph.append(price)
            container.append(priceParagraph)

            // Appends the tags to the col2 container
            upgradeContainer.append(container)
            // Creates element property in the object
            this.element = document.querySelector(`.${this.name}`)
        }
    }
    updateCost(){
        let price = document.querySelector(`.${this.name} .cost`)
        price.textContent = this.price
    }
    canPurchase(){
        if(player.score >= this.price){
            this.element.style = 'background-color: rgb(29, 165, 36)'
        }
    }
    purchase(){
        if(player.score >= this.price){
            this.element.style = 'background-color: rgb(54, 54, 54)'
            // Increase buddie count
            this.count += 1
            this.element.children[0].textContent = `${this.name} (${this.count})`
            // Subtract price from players score
            player.score -= this.price
            // Change their click increment
            counter.textContent = `${player.score} Flies`

            this.price = Math.round(this.price * 1.55)
            this.updateCost()
            this.canPurchase()
            this.updateImg()
        }
        else{
            console.log(`cant purchase`)
        }
    }
    update(){
        player.score += this.increment * this.count
        counter.textContent = `${player.score} Flies`
    }
    updateImg(){
        if(this.count <= 10){
            var img = document.querySelector('.clicker')
            img.src = `./images/frog_buddies_${this.count}.png`
        }
        else{
            img.src = `./images/frog_buddies_${10}.png`
        }
    }
}