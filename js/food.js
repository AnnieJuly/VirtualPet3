class Food {
constructor(){
    this.milk = loadImage("images/milk.png");
    this.food = 0;
    this.lastFed = 0;
}
getFoodstock(){
     database.ref("foodStock").on("value",function(data){
         foodStock = data.val();
     });
}

updateFoodstock(x){
      if(x<=0){
        x=0;
    }
    database.ref('/').update({foodStock:x})
    
}


display(){
    var x=80,y=100;
    imageMode(CENTER);
    background("green");
    image(this.milk,750,350,70,70);
    
    if(foodStock!=0){
        for(var i=0;i<foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.milk,x,y,50,50);
            x=x+30
        }    }
}
garden(){
    background(garden,550,400)
}

bedroom(){
    background(bedroom,550,400)
}
washroom(){
    background(washroom,550,400)
}

}
