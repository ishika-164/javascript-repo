const clock=document.querySelector('#clock')

setInterval(()=>{
    let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000) // here 1000 is time in millisec in which function is always running
