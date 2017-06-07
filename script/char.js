function character(){
	this.x = 20;
	this.y = 130;
	
	this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
	
	this.show = function(){
		fill('#00FF9D');
		rect(this.x, this.y, 30, 30);
	}
	
	this.jump = function(){
		this.velocity += this.lift;
	}
	
	this.notJump = function(){
		return (this.y == 130);
	}
	
	this.update = function() {
    	this.velocity += this.gravity;
    	this.velocity *= 0.9;
   	 this.y += this.velocity;
    

    if (this.y > height-50) {
      this.y = height-50;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }
	
}
	