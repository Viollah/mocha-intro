describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
    it("This should greet Viollah with 'Hello, Viollah'",function(){
          assert.equal("Hello, Viollah",greet("Viollah"))
    });
    

});