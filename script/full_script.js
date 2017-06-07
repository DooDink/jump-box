var score = 0;
obstacles = [];
var cont = true;
var gamePlayed = false;
var val = 0;
var go = false;
var ve = 0;
var ves = false;
var obsNum = 100;

function setup(){
    createCanvas (340, 420);
    frameRate(144);
    character = new character();
    trigger = new trigger();
    
    
}

function draw(){
    background('#00FFE2');
    fill('#BA6301');
    rect(-1, 160, 341, 50);
    textSize(10);
    
    if(score >= 1){
        text("scores: "+obsNum,width-70, 20);
    }
    if(score < 1){
   	 text("scores: 0",width-70, 20);
    }
    
    trigger.draw();
    
    if(!gamePlayed){
    	fill('#98000F');
		text("touch or click here to play",(width/2)-60, (height/2)+100);
		fill("#FF0900");
		textSize(50);
		text("Ready?", (width/2)-75, 90);
	}
    
    if(gamePlayed){
   	 for (var i = obstacles.length-1; i >= 0; i--) {
       	 obstacles[i].update();
       	 obstacles[i].show();
       	 obstacles[i].addScore();
        
      	  if (obstacles[i].offscreen()) {
       	     obstacles.splice(i, 1);
    	    }
       	 if(obstacles[i].hits()){
        	    cont = false;
         	   alert("you lose, your score is: "+score);
        	    window.location.href = "index.html";
       	 }
       	 
       
       	 if(!cont){
            	obstacles.splice(i, 2);
       	 }
    	}
    }
    
    character.update()
    character.show();
    
    //character.move();
    if(gamePlayed){
    	if(cont){
    		if (frameCount % obsNum == 0) {
     			   obstacles.push(new obstacle());
   		 }
  		  //if(frameCount % 60 == 20){
        		//character.jump();
  		  //}
   		 //if (frameCount % 90 == 80) {
       		// score += 1;
   		// }
   		 //if (frameCount % 120 == 0) {
   		//	character.right();
   		// }
   		val++;
   		go = true;
   		if(val >= 50){
   			go = false
   		}
   		if(go){
   			fill("#3B8D00");
   			textSize(50);
   			text("Go!", (width/2)-40, 90);
   		}
    		
    		if(ve == 20){
    			ve = 0;
    			ves = false;
    		}
    		if(ves){
    			ve++;
    			fill("#24BEFF");
    			textSize(50);
    			text("Point", (width/2)-60, 90);
    		}
   	 }
    }
    
    
}

function mousePressed() {
	trigger.clicked();
}


function trigger(){
	this.draw = function(){
		fill("#AEFFFF");
		rect(-1, 210, 341, 420-(160+50));
	}
	
	this.clicked = function(){
		if(mouseY > 210){
			if(!gamePlayed){
				gamePlayed = true;
			}
   		 //if(character.notJump()){
        		character.jump();
  		  //}
		}
		
		if(mouseX < 70 || mouseX > 280){
			if(mouseX > -50 && mouseX < 400){
				if(mouseY > -90 && mouseY < -30){
					window.location.href = "../index.php";
				}
			}
		}
	}
}

function obstacle(){
	this.top = Math.floor(Math.random()*((160-10)-(160-20))+(160-20));
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.treeLine = Math.floor(Math.random()*(200 - 170)+170);
    this.treePos = Math.floor(Math.random()*(30 - 10) + 10);
    
    this.highlight = false;

    this.hits = function(){
      if (character.y+30 > this.top && character.y+30 <= 160) {
        if (character.x+30 > this.x && character.x < this.x + this.w) {
          this.highlight = true;
          return true;
        }
      }
      return false;
    }
    
    this.addScore = function(){
    	if(character.x == this.x+20){
    		score++;
    		ves = true;
    		obsNum-=-1;
    	}
    }

    this.show = function() {
      fill('#22BE00');
      rect(this.x, this.top, this.w, 160-this.top);
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

function character(){
    this.x = 20;
    this.y = 130;
    this.dir = 1;
    
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    
    this.move = function(){
    	this.x += this.dir;
    	if(this.x == 310){
    		this.dir = -1;
    	}
    	if(this.x == 0){
    		this.dir = 1;
    	}
    }
    
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
    

    if (this.y > 130) {
      this.y = 130;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }
    
}
    