var Year = function (num){
  this.num = num;

  this.isLeap=function(){
    return num % 400 == 0 || num % 4 == 0 && num % 100 != 0
  }
};
module.exports = Year;
