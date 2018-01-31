

(function(){
    var cars=[
    {
         name: "Compact",
         description: "small compact car, good on gas",
         price: 40,
         image: "compact.jpg",
         review: "Great car for Great price! Would rent again.",
         available: true
        }, 
        {
         name: "SUV",
         description: "Large car, great for moving or family road trips",
         price: 80,
         image: "suv.jpg",
         review: "Great car, was awesome for our family trip up to vermont. No issues!",
         available: false
        }];
      var app = angular.module('carStore', []);
      app.controller('StoreController', function(){
        this.product = cars;
      });
    })();


