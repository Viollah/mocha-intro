function countAllFromTown(regNum,town){
    var list = regNum.split(',');
    let counter = 0;
    var fromTown = [];
    for (var i=0; i<list.length; i++){
      var newList = list[i].trim();
      if(newList.includes(town)){
       counter++; 
       
      }
    }
   console.log(newList);
    return counter;
  }