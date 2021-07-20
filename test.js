describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
});

    describe('greeting function',function(){
    it("This should greet Viollah with 'Hello, Viollah'",function(){
          assert.equal("Hello, Viollah",greet("Viollah"))
    });
});
describe('Weekday oryearMonth',function(){
    it("This should show either 'weekDay or yearMonth'",function(){
        assert.equal(isDayName('Saturday'), true);
        assert.equal(isDayName('Monday'), true);
        assert.equal(isDayName('January'), false, 'January is not a day');

    });
}); 
describe('This is yearsAgo',function(){
    it("This should show how long ago in years",function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })
});
describe('CheckReg',function(){
    it("This should show which registration plate belongs to which province",function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    })
});
describe('CountAllFromTown',function(){
    it("This should show how many town",function(){
        assert.equal(fromStellies, 3);
        
    })
});
describe('CountAllPaarl',function(){
    it("This should should how many paarl are there", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
});

describe('totalphonebill',function(){
    it("This is the total phone bill",function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
});
describe('fromWhere',function(){
    it("This should show which registration is from where", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CC'), 'Some other place!');
    })
});
describe('findItemsOver20',function(){
    it("This should show all the items that are over 20", function(){
        assert.deepEqual(results, findItemsOver20(itemList));
        assert.deepEqual(results2, findItemsOver20(itemList2));
        assert.deepEqual(results3, findItemsOver20(itemList3));
    })
});
describe('findItemsOver',function(){
    it("This should display items that are over ",function(){
         assert.deepEqual(results, findItemsOver(itemList, 20));
         assert.deepEqual(results2, findItemsOver(itemList2, 20));
         assert.deepEqual(results3, findItemsOver(itemList3, 20));
    })
});
describe('mostprofitabledepartment',function(){
    it("This should show from the departments which one is profitable",function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
         assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");

        assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 1");
        assert.equal('Wednesday', mostProfitableDay(salesData2), "Most profitable day is 'Wednesday' for dataset 2");
    })
});
describe('regCount',function(){
    it("This should count all the registration available", function(){
        assert.equal(regCount, 3);
        assert.equal(regCount, 1);
    })

});