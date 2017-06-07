function obstacle(){
	this.top = Math.floor(Math.random()*((160-10)-(160-20))+(160-20));
    this.x = width;
    this.w = 20;
    this.speed = 2;
    
    this.highlight = false;

    this.hits = function(character) {
      if (character.y > this.top || character.y < 160) {
        if (character.x > this.x && character.x < this.x + this.w) {
          this.highlight = true;
          fill("#FF0000");
          text("You lose", 100, 100);
          return true;
        }
      }
      this.highlight = false;
      return false;
    }

    this.show = function() {
      fill('#22BE00');
      rect(this.x, this.top, this.w, 160-this.top);
      text("cy: "+character.y+" cx:"+character.x+" ox:"+this.x, 10, 100);
    }

    this.update = function() {
   	 this.x -= this.speed;
    }

    this.offscreen = function() {
      if (this.x < -this.w) {
    	  return true;
      } else {
     	 return false;
      }
    }

}