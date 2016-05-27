describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('getDescendingNumbers function', function(){
        it('should return false when numberFrom<numberTo', function(){
            expect(app.getDescendingNumbers(5, 6)).toEqual(false);
        });
        it('should return false when numberFrom!==number', function(){
            expect(app.getDescendingNumbers('5', 9)).toEqual(false);
        });
        it('sholud return string when numberFrom is more than numberTo', function(){
            expect(app.getDescendingNumbers(9, 3)).toEqual('9 8 7 6 5 4 3');
        });
    });
    describe('areaOfTrapezoid function', function(){
        it('should return false when a, b or h is less than 0', function(){
            expect(app.areaOfTrapezoid(-2, -4, -9)).toEqual(false);
        });
        it('should calculate area of trapezoid when a, b, c are more than 0', function(){
            expect(app.areaOfTrapezoid(5, 6, 9)).toEqual(49.5);
        });
        it('should return false when a, b or c is not a number', function(){
            expect(app.areaOfTrapezoid('5', 7, 3)).toEqual(false);
        });
    });
    describe('maxArray function', function(){
        it('should return false when array contain not numerical', function(){
            expect(app.maxArray([2, 3, 8, 'abc', 4])).toEqual(false);
        });
        it('should return max number from array', function(){
            expect(app.maxArray([2, 3, 8, 6, 4])).toEqual(8);
            expect(app.maxArray([10, 55, 66, 22])).toEqual(66);
        });
    });
    describe('squareOdd function', function(){
        it('should return array where elements are square from base array if elements from base array are even', function(){
            expect(app.squareOdd([3, 5, 9])).toEqual([9, 25, 81]);
        });
        it('should return array where strings and odd numbers from base array are unchanged', function(){
            expect(app.squareOdd([8, 'abc', 10, 'lkj'])).toEqual([8, 'abc', 10, 'lkj']);
        });
    })
});

