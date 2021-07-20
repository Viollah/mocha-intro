function findItemsOver20(listItem){
    const list =[];
    for(var i=0; i<listItem.length;i++){
      if(listItem[i].qty>20) list.push(listItem[i])
    }
    console.log(list);
    return list;
  }
  function findItemsOver(listItem,itemList){
    const list1 =[];
    for(var i in listItem){
      if(listItem[i].qty>itemList) list1.push(listItem[i])
    }
    console.log(list1);
    return list1;
  }