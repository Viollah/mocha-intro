describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
    it("This should greet Viollah with 'Hello, Viollah'",function(){
          assert.equal("Hello, Viollah",greet("Viollah"))
    });
    it("This should show either 'weekDay or yearMonth'",function(){
        assert.equal(isDayName('Saturday'), true);
        assert.equal(isDayName('Monday'), true);
        assert.equal(isDayName('January'), false, 'January is not a day');

    });

});