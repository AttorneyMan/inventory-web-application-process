const title = document.querySelector("h1");

const div = document.querySelector("div")

let incart = false


const h2ForAddToCart = document.querySelector("h2")
h2ForAddToCart.addEventListener("click" , (event)=>{
incart = !incart
  console.log("ADDED TO CART", event.target.innerText)
})


const h3ForAddToCart = document.querySelector("h3")
h3ForAddToCart.addEventListener("click" , (event)=>{
  incart = !incart
  console.log("ADDED TO CART", event.target.innerText)
})


const FormForNewItem = document.querySelector("button")
  FormForNewItem.addEventListener("submit", (event)=>{
   
    console.log("submitting form !: ", event.target[0].value)

    event.preventDefault()
   
  })

  
 
