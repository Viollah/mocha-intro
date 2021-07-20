function mostProfitableDepartment(salesData1){
    const departListing ={};
    for (var i=0;i<salesData1.length;i++){
      const prod = salesData1[i];
      departListing[prod.department]=0;
      
    }
     for(var i=0; i<salesData1.length;i++){
       const prod = salesData1[i];
       var depart = departListing[prod.department];
       depart += prod.sales;
       departListing[prod.department]= depart 
  }
    var currSales=0;
    var currDepart= '';
    for(const departSales in departListing){
      const currDepartSales =departListing[departSales];
      if(currDepartSales>currSales){
       currSales=currDepartSales;
        currDepart=departSales;
      }
    }
    return currDepart;
  }
  
  function mostProfitableDay(saleData2){
    const profit = {};
    for(var i=0;i<saleData2.length;i++){
      const prod1= saleData2[i];
      profit[prod1.day]=0;
    }
    for(var i=0;i<saleData2.length;i++){
      const prod1=saleData2[i];
      
      var currDay= profit[prod1.day];
      currDay += prod1.sales;
      profit[prod1.day]=currDay;
    }
    var currSales =0;
    var currDay = '';
    for(const daySales in profit){
      const currDaySales=profit[daySales];
      if(currDaySales>currSales){
        currSales=currDaySales;
        currDay=daySales;
      }
    }
    return currDay;
    
  }