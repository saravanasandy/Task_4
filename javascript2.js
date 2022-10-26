var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
   // console.log (data [0].name);
   console.log (data);
   for(var i =0; i<data.length;i++){
  // console.log (data[i].name);
   // console.log (data[i].region);
   // console.log (data[i].subregion);
   // console.log (data[i].population);
   console.log (`${data[i].name.common} , ${data[i].region} , ${data[i].subregion} , ${data[i].population}`);
}
  
   
   
}

