function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    FileList("red");

    if(mouseIsPressed){
        Reflect(mouseX, mouseY, 20, 35);
    }

    
  }
