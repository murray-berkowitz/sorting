describe('Bubble sort', function(){

    beforeEach(function () {
        var arr;
        spyOn(sortObj, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });

    it('counts calls to swap', function () {
        arr = [1,2,3,4];
        sortObj.bubbleSort(arr);
        expect(sortObj.swap.calls.count()).toEqual(arr.length * arr.length);
    }); 

    it('handles an empty array', function(){
        expect(sortObj.bubbleSort([])).toEqual([]);
    });

    it('handles an empty array', function(){
        sortObj.bubbleSort([5]);
         expect(sortObj.swap.calls.count()).toEqual(0);
    });

    it('sorts an unsorted array',function(){
        
         expect(sortObj.bubbleSort(arr)).toEqual([1,2,3,4]);
    });
});