

console.log('hii');

 //firstFun=()=>{
   // let getData =document.getElementById('input-box').value;
fetch('https://api.covid19api.com/summary')
.then((data1)=>{
 
    return data1.json();
})
.then((mainData)=>{
 const mydata = mainData.Countries[77];
 // console.log(`country name${mydata.Country}.total case is ${mydata.TotalConfirmed}`);

//console.log(mydata);
document.getElementById('1').innerHTML=mydata.NewConfirmed;
document.getElementById('2').innerHTML=mydata.TotalConfirmed;
document.getElementById('3').innerHTML=mydata.NewDeaths;
document.getElementById('4').innerHTML=mydata.TotalDeaths;
document.getElementById('5').innerHTML=mydata.NewRecovered;
document.getElementById('6').innerHTML=mydata.TotalRecovered;




}).catch((error)=>{
    console.log(`${error}`);
});
     

//}
