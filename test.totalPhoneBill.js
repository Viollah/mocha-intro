function totalPhoneBill(phone){
    const list = phone.split(',');
    let counter = 0;
    for( var i=0;i<list.length;i++){  
      const currentItem = list[i].trim();
    if(currentItem.startsWith('call')){
    counter += 2.75;
    }
    else if(currentItem.startsWith('sms')) {
      counter += 0.65;
    }
      
    }
     return 'R' + counter.toFixed(2);
  }  
  //console.log('R7.45',totalPhoneBill('call, sms, call, sms,sms'));
  