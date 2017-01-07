(function() {
  'use strict';

  var chai = require('jasmine');

  var myApp = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return 0 for an empty array', function () {
        expect(myApp.findMinMax([])).toEqual(0);
      });

      it('should return the singular element in the array', function () {
        expect(myApp.findMinMax([9])).toEqual([9]);
      });


      it('should return the argument for a non array', function () {
        expect(myApp.findMinMax(7)).toEqual(7);
      });

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [3, 17] for [6, 3, 17, 4]', function () {
        expect(myApp.findMinMax([6, 3, 17, 4])).toEqual([3, 17]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [20,40] for [10, 20, 30 , 40]', function () {
        expect(myApp.findMinMax([10, 20, 30, 40])).toEqual([10, 40]);
      });

      it('should return [-1000, 0] for [-1000, -70, -100 , 0]', function () {
        expect(myApp.findMinMax([-1000, -70, -100 , 0])).toEqual([-1000, 0]);
      });
    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

  });

})();