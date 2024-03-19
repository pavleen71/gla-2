const url= "https://fakestoreapi.com/products";
let data=document.querySelector("#data");
let products=[];
// Fetch data from the API
const promise = async () => {
     let response=await fetch(url);
     let reply= await response.json();
    products=reply;
    display(products);
     
};
// Display products on the webpage
function display(product){
data.innerHTML="";
product.forEach(element => {
  const card=document.createElement("div");
  card.classList="product-card";
  card.innerHTML=`
            <img src="${element.image}" alt="${element.title}">
            <h3>${element.title}</h3>
            <p>Price: $${element.price}</p>
            <p>Rating: ${element.rating.rate}</p>
            <p>Count: ${element.rating.count}</p>
            <button class="desc">Description</button>
            <p class="description" style="display: none;">${element.description}</p>
            <button class="cat">Category</button>
            <p class="category" style="display: none;">${element.category}</p>
        `;
data.appendChild(card);

});
let  btn=document.querySelectorAll(".desc");
btn.forEach(click =>{
    click.addEventListener('click',()=>{
        const description = click.nextElementSibling;
        if (description.style.display == "none") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }

        
        })
})
let  c=document.querySelectorAll(".cat");
c.forEach(click =>{
    click.addEventListener('click',()=>{
        const description = click.nextElementSibling;
        if (description.style.display == "none") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }

        
        })
})
    // Sort products based on selected category and sort order
let priceSort =document.querySelector("#sort")
priceSort.addEventListener("change",()=>{
    const selectedCategory = filter.value;
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;
const sortOrder=priceSort.value;
if(sortOrder=="Ascending"){
    filteredProducts.sort((a,b)=>a.price-b.price);
    display(filteredProducts);
    
}
else if(sortOrder=="Descending"){
    filteredProducts.sort((a,b)=>b.price-a.price);
    display(filteredProducts);
    
}
else{
    display(filteredProducts);
}
})
 // Filter products based on selected category
let filter=document.querySelector("#category")
filter.addEventListener('change', () => {
    const selectedCategory = filter.value;
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;
const sortOrder=priceSort.value;

if(sortOrder=="Ascending"){
    filteredProducts.sort((a,b)=>a.price-b.price);
    display(filteredProducts);
    
}
else if(sortOrder=="Descending"){
    filteredProducts.sort((a,b)=>b.price-a.price);
    display(filteredProducts);
    
}
else{
    display(filteredProducts);
}
});
}
promise();
