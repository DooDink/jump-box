var score = 0;
obstacles = [];

function setup(){
	createCanvas (340, 200);
	frameRate(144);
	character = new character();
	obstacles.push(new obstacle());
}

function draw(){
	background('#00FFE2');
	fill('#BA6301');
	rect(-1, 160, 341, 50);
	
	for (var i = obstacles.length-1; i >= 0; i--) {
		obstacles[i].update();
		obstacles[i].show();
		
		if (obstacles[i].offscreen()) {
       	 obstacles.splice(i, 1);
    	}
	}
	
	character.update()
	character.show();
	
	
    if (frameCount % 90 == 0) {
    	obstacles.push(new obstacle());
    }
  
    if (frameCount % 90 == 10) {
    	score += 1;
    }
    
}

function mousePressed() {
	if(character.notJump()){
    	character.jump();
    }
}
