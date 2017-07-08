describe('Split Array function', function() {
  it('is able to handle an array with one value', function() {
    // your code here
    expect(split([1])).toEqual([1]); 
  });	
  it('is able to split an even array into two halves', function() {
    // your code here
    expect(split([2,4,6,8])).toEqual([[2,4],[6,8]]); 
  });
  it('is able to split an odd array into two halves', function() {
    // your code here
    expect(split([1,3,5,7,9])).toEqual([[1,3,5],[7,9]]); 
  });
});

describe('Merge Sort', function(){
  it('is able to merge two even sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,3],[2,4])).toEqual([1,2,3,4]);
  });
  it('is able to merge two odd sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,3,5],[2,4])).toEqual([1,2,3,4,5]);
  });
  it('is able to recursively sort array using mergeSort', function(){
    expect(merge([2,1,4,3])).toEqual([1,2,3,4]);
  })
});
