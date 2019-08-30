var arr = [1,2,3,4,5,6];

array.forEach(arr, function(nro) {
    console.log(nro*2);
});



function countDown(num){
    var intervalID = setInterval(function(){
        num--;
        if(num===0)
        {
            console.log("Ring Ring Ring!!!");
            clearInterval(intervalID);
        }
        else{
            console.log("num:" + num);
        }
      
        
    },1000);
  
}