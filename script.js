var input = document.querySelector('#textBox');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var button= document.querySelector('#grid1');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=877f9771a0c56219f84088325b52afe2')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];

  main.innerHTML = nameValue;
  temp.innerHTML = Math.round(tempValue-273.15)+"°C";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})