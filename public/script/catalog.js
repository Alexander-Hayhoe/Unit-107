/*var items=[
  {
    code:'tv006',
    title:'Television',
    price:1000,
    description:'Samsung, 62"',
    category:'Electronics',
    image:'img/tv.jpg'
  },
  
  {code:'alien',
  title:'Alienware',
  price:1200,
  description:'MX2, 35"',
  category:'Electronics',
  image:'img/computer.jpg'
  },

  {code:'mouse',
  title:'Corsair Mouse',
  price:120,
  description:'Wireless',
  category:'Electronics',
  image:'img/mouse.jpg'
  }
];
*/

var items=[];
var serverURL="http://localhost:8080/api/";

function fetchCatalog(){
  $.ajax({
    url:serverURL+"catalog",
    type:"GET",
    success:function(res){
      console.log("Server responded OK",res);
      for(var j=0;j<res.length;j++){

        if(res[j].user=="Havoc" && res[j].title!=""){
        items.push(res[j]);
       }
      }
    },

    error:function(details){
      console.log("Error",details);
    }
  });

  displayCatalog();

}

function displayCatalog(){
  for(var i=0;i<items.length;i++){
    displayItems(items[i]);
  }
}

function displayItems(product){
//  for(var i=0;i<items.length;i++){
    var layout = `<div class="item" id="${product.code}">;
    <img src="${product.image}">
    <h4>${product.title}</h4>
    <h6 class="item-price">${product.price}</h6>
    <p>${product.description}</p>
    <div class="button-div">
    <button class="btn btn-primary mb-2">Add to Cart</button>
    </div>`;
    $("#catalog").append(layout);
  }

function init(){
  console.log("Catalog page");
  fetchCatalog();
  //displayCatalog();
  $("#search-btn").click(Search);

  $('#search-txt').keypress(function(e){
    if(e.keyCode==13)
    Search();
  });
}

function register(){
  console.log("Current items")+items.length;
  var code=$("#code").val();
  var title=$("#title").val();
  var price=$("#price").val();
  var description=$("#description").val();
  var category=$("#category").val();
  var image=$("#image").val();

  items.push({
    code:code,
    title:title,
    price:price,
    description:description,
    category:category,
    image:image
  });

  console.log("New item:" + items.length);
}

$("#register-btn").on('click',function(){
  register();
});

function Search(){

}
  var searchString=$('#search-txt').val();
  for(var i=0;i<items.length;i++){
    if(items[i].title.toUpperCase().includes(searchString.toUpperCase()|| items[i].code.toUpperCase().includes(searchString.toUpperCase()))){
      $('#'+items[i].code).hide();
    }

    else{
      $('#'+items[i].code).show();
    }
    if(searchString==""){
      $('#'+items[i].code).show();
    }
  };

window.onload=init;