app.service('HexService', function () {

  // we could do additional work here too
  this.toHex = function(num) {
  		console.log("?"+num.toString(2));
        return num.toString(16) ;
    };
  // return {
  //   toHex: function (num) {
  //     console.log(num);
  //     return num = num + '6';
  //   }
  // };
});