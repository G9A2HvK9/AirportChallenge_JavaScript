function Weather(){
  this.condition = function(){
    if(Math.random() + 0.3 >= 1){
      return  "stormy"
    }
    else {
      return "sunny"
    }
  };
};
