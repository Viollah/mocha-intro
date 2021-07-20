function countAllPaarl(fromTown){
    var list = fromTown.split(',');
    let counter= 0;
    var town = [];
    for( var i =0; i<list.length; i++){
      var newList= list[i].trim();
      if(newList.startsWith('CJ')){
        // town.push(newList);
         counter++;
        //return counter;
    }
  } 
    //console.log(newList);
    return  counter;
  }