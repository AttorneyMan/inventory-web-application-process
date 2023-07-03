const title = document.querySelector("h1");

const div = document.querySelector("div")

const form = document.querySelector("cart")


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


const FormForNewItem = document.querySelector("form")
  FormForNewItem.addEventListener("submit", (event) =>{
   console.log("submitting form !: ", event.target[0].value)
   div.append(event.target[0].value ,"  ")
   incart = !incart
   event.preventDefault()
   
  })

  const removeItemFromForm = document.querySelector("alert-button")
  removeItemFromForm.addEventListener("click", (event) =>{
   FormForNewItem.remove(event.target[0].value)
    incart = incart
    event.preventDefault()
  })


  
 
