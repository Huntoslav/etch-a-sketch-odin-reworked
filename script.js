addEventListener("DOMContentLoaded", function(e){
    let container = document.querySelector("#grid-container")


    for(let i = 0; i < 16 * 16; i++){
        let gridItem = document.createElement("div")
        gridItem.classList.add("gridDiv")
        container.appendChild(gridItem)

    }
    

    let gridSizeForm = document.querySelector(".grid-size-form")
    let num = document.querySelector(".number")
    
    
    

    let gridItems = document.querySelectorAll(".gridDiv")
    gridSizeForm.addEventListener("submit", function(e){
        e.preventDefault();
        
        
        if(num.value > 100 || num.value < 2 || isNaN(num.value)){
            alert("Invalid option! ENTER number between 2-100!")
            return
        }
        container.innerHTML = ""
        num.innerHTML = ""


        for(let i = 0; i < num.value * num.value; i++){
            let gridItem = document.createElement("div")
            gridItem.classList.add("gridDiv")
            gridItem.style.flexBasis = 100 / num.value + "%"
            container.appendChild(gridItem)
        }
        num.value = ""
    })


    // Black hover option -> Black button event listener which sets the hover on black color
   
    let blackButton = document.querySelector(".black") 
    blackButton.style.backgroundColor = "black"
    blackButton.style.color = "white"
    // Button chosen via the querySelector
   
    blackButton.addEventListener("click", function(){
        //Add event listener adds the function click which callbacks after clicking
        for(let black of document.getElementsByClassName("gridDiv")){
            // creates new variable "black" of all elements with class gridDiv
            black.addEventListener("mouseover", function(e){
                // adds mouse over (hover) effect to all BLACK (created in line above)
                black.style.backgroundColor = "black"
                // sets the background to black on hover
            })
        }
    })

    // Button that sets the  the background of the grid to default color
    let clearButton = document.querySelector(".clear")
    clearButton.addEventListener("click", function(e){
        for(let clearAll of document.getElementsByClassName("gridDiv")){
            clearAll.style.backgroundColor = ""
        }
    })

    // function that generates random RGB (color)
    function rainbow(){
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)

        return `rgb(${r}, ${g}, ${b})`
        
    }


    // button that on click sets the hover on random RGB(color) background
    let rainbowButton = document.querySelector(".rainbow")
    rainbowButton.style.backgroundColor = rainbow()
    rainbowButton.addEventListener("click", function(e){
        for(let toRainbow of document.getElementsByClassName("gridDiv")){
            toRainbow.addEventListener("mouseover", function(e){
                toRainbow.style.backgroundColor = rainbow() // function rainbow applied
            })
        }
    })

    // Eraser button changes the background color of the grid hovered over to default
    let eraser = document.querySelector(".eraser")
    eraser.style.backgroundColor = "grey"
    eraser.addEventListener("click", function(e){
        for(let erase of document.getElementsByClassName("gridDiv")){
            erase.addEventListener("mouseover", function(e){
                erase.style.backgroundColor = ""
            })
        }
    })
})


   