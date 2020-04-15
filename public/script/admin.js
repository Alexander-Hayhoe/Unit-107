var serverURL="http://restclass.azurewebsites.net/API/";

var items=[];

function init(){
  console.log("Admin Page");
}

window.onload=init;

class Item {
  constructor(code,title,price,description,category,image){
  this.code=code;
  this.title=title;
  this.price=price;
  this.description=description;
  this.category=category;
  this.image=image;
  this.user="Havoc";
  }
}

function clearForm(){
  $('#code').val("");
  var code=$("#code").focus();
  var title=$("#title").val("");
  var price=$("#price").val("");
  var description=$("#description").val("");
  var category=$("#category").val("");
  var image=$("#image").val("");
}

function register(){
  console.log("Current items")+items.length;

  var code=$("#code").val();
  var title=$("#title").val();
  var price=$("#price").val();
  var description=$("#description").val();
  var category=$("#category").val();
  var image=$("#image").val();

  if(code!="" && title!=""){

  var newItem=new Item(code,title,price,description,category,image);

  items.push(newItem);
  var jsonString=JSON.stringify(newItem);

  console.log(newItem);
  console.log(jsonString);

  $.ajax({
    url:serverURL+"points",
    type:"POST",
    contentType:"application/json",
    data:jsonString,
    success:function(){
      console.log("it works",response);
      $('#alert-box').removeClass("hidden");
      setTimeout(function(){
        $('#alert-box').addClass('hidden');
      },3000);
      clearForm();
    },
    error:function(errorDetails){
      console.log("Error, something went wrong.",errorDetails);
    }

  });

  }
}

$("#register-btn").on('click',function(){
  register();
});

function solveHW(){
  var data=[
    {
      age:28,
      name:'Eli',
      color:'orange'
    }
    {
      age:35,
      name:'Zach',
      color:'blue'
    }
    {
      age:36,
      name:'Larry',
      color:'blue'
    }
    {
      age:32,
      name:'Alexander',
      color:'green'
    }
    {
      age:37,
      name:'Ed',
      color:'blue'
    }
    {
      age:30,
      name:'Jeremy',
      color:'Peach'
    }
  ]
}

//HOMEWORK: Display by oldest. Use For Loop, If Statements, and Arrays.
//HOMEWORK: Display by youngest. Use For Loop, If Statements, and Arrays.
//HOMEWORK: Sum of all ages.
