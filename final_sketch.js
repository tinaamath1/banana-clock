let minX = [];
let minY = [];
let hourX = [];
let hourY =[];
let flyX;
let flyY;
let flySpeedX;
let flySpeedY;
let flyPause;
let sunlight = true;


function setup() {
  createCanvas(windowWidth,windowHeight);
  clusterX = random(width);
  clusterY = random(height);
  noStroke();
  
  const x1 = 582
  const y1 = 565 //527 //539 
  const x2 = 645 //652 //618
  const y2 = 533
  const x3 = 580
  const y3 = 596 //583 //574
  const x4 = 511 //495 //537
  const y4 = 536
  // flyX = random(width);
  // flyY = random(height);
  // flySpeedX = random(1, 2);
  // flySpeedY = random(1, 2);
  // flyPause = false;

  for(let i =0; i<= 60;i++){
    minX.push(random(x4,x2));
    minY.push(random(y1,y3));
  }

  for(let j=0; j <= 24; j++){
    hourX.push(random(x4,x2));
    hourY.push(random(y1,y3))
  }


}

function draw() {
  let d = new Date()
  let mySecond = d.getSeconds()
  let myMinute = d.getMinutes()
  let myHour = d.getHours()
  let timeString = myHour + ":" + myMinute + ":" + mySecond

  if(myHour >= 6 && myHour < 18){
    sunlight=true;
  }else{
    sunlight=false;
  }

  //Draw background
  background("#F6F1E7");


  //left wall
  fill("#DBCEBC");
  quad(0, height, 0, 70, width, 70, width, height);

  // window wall
  noStroke();
  fill("#C3B6A6");
  quad(1100, height, 1100, 70, width, 0, width, height);

  // window indent
  fill("#DD8E65");
  quad(1150, 400, 1150, 95, 1300, 60, 1300, 430);

  // window glass
  if (sunlight){
    fill("#E8D3B0");
  }else{
    fill("#3A314D");
  }
  quad(1170, 395, 1170, 107, 1300, 78, 1300, 420);

  // window bars
  strokeWeight(10);
  stroke("#AF583A");
  line(1235, 410, 1235, 83);
  strokeWeight(9);
  line(1170, 255, 1300, 245);

  //window indent shadow
  noStroke();
  fill("#BA7150");
  quad(1170, 107, 1150, 95, 1300, 60, 1300, 78);

  //bar overflow cover
  fill("#C3B6A6");
  quad(1300, 265, 1300, 210, 1305, 210, 1305, 265);

  // window light
  if (sunlight){
    fill("#FEF2D3");
  }else{
    fill("#DBCEBC");
  }
  quad(905, 465, 905, 170, 1075, 120, 1075, 415);

  // window bar shadow
  strokeWeight(11);
  stroke("#DBCEBC");
  line(990, 145, 990, 490);
  strokeWeight(10);
  line(905, 317, 1075, 267);


  //floor
  noStroke();
  fill("#7D5449");
  quad(0,height-40, 1100, height-40, width, height, 0, height);



  //draw table legs
  fill("#9C9B7E");
  noStroke();
  rect(width/4, height-200, 25, 200); //front left leg

  fill("#9C9B7E");
  noStroke();
  rect(width/4+100, height-230, 25, 200,5); //back left leg

  fill("#9C9B7E");
  noStroke();
  rect(width/2-50, height-230, 25, 200,5); //back right leg

  fill("#9C9B7E");
  noStroke();
  rect(width/2+50, height-200, 25, 200); //front right leg

  //draw table top
  fill("#645E2E");
  quad(width/4,height-200,width/4+100, height-230, width/2-25,height-230, width/2+75,height-200)

  //draw table bottom
  fill("#9C9B7E");
  rect(width/4, height-200, 435, 25); //front left leg


  //Draw banana
  drawBanana(width/4+230, height-250, 4, 0);

  //Draw Minutes
  constrain(drawMinutes(myMinute),570,633);
  // for (let i=0; i<myMinute;i++) {
  //   let theta = map(i,0,60,1/4*PI,3/4*PI)
  //   let radius = 100;
  //   //calculating points (from the center)
  //   let xpos = width/4+230 + radius*cos(theta)
  //   let ypos = height/2+75 + radius*sin(theta)
  //   fill('green')
  //   ellipse(minX[i],minY[i],5,5)
  // }



  //Draw hour

  drawHours(myHour);
  // elipse((width/4+200)+10, (height-250), 20, 5); 

  drawSeconds(mySecond);




  //Draw Seconds
  //Fly if statements
  // Move the fly randomly

  // if (!flyPause) {
  //   flyX += flySpeedX;
  //   flyY += flySpeedY;
  // }

  // // Keep the flt within the canvas
  // if (flyX < 0 || flyX > width) {
  //   flySpeedX = -flySpeedX;
  // }
  // if (flyY < 0 || flyY > height) {
  //   flySpeedY = -flySpeedY;
  // }

  // Draw the fly on the screen
  // fill("black");
  // circle(flyX, flyY, 7);

  // Pause every second before continuing to move

  //   if (mySecond % 2 == 0) {
  //     flyPause = true; // Pause the fly
  //   } else {
  //     flyPause = false; // Resume moving the fly after a 1-second pause
  // }


}


//Draw banana function
function drawBanana(x, y, w, rot) {
  push();
  translate(x, y); x=0; y=0; rotate(rot*PI/180); noFill();
  scale(w); translate(-((w-1)*x/w), -((w-1)*y/w));
  
  stroke(255, 245, 100, 255); strokeWeight(5); 
  curve(x-50, y-30, x-20, y-2, x+17.5, y-2,  x+50, y-30);
  stroke(255, 240, 0, 255); strokeWeight(8);
  curve(x-50, y-50, x-20, y, x+15, y, x+50, y-50);
  stroke(240, 220, 0, 255); strokeWeight(4); 
  curve(x-30, y-70, x-22.5, y, x+17.5, y,  x+30, y-70);
  stroke(250, 230, 0, 255); strokeWeight(5);
  line(x-23, y-3, x-30, y-7);
  stroke(150, 100, 0, 255);
  point(x+18, y-3);
  pop();
}



//Minutes Function
function drawMinutes(myMinute){
  fill("#4b2d0b");
  // console.log(mouseX,mouseY);
  for(let i =0; i < myMinute ; i++){
    circle (minX[i], minY[i], 5);
    // constrain(dot, 570, 633);
    // circle((width/4+200)+5*i, (height-250), 3); //minute
  }
}



//Hours Function
function drawHours(myHour){
  fill("#654321"); 
  for(let j=0; j < myHour; j++){
    ellipse(hourX[j],hourY[j],15,7,15,7);
  }
}

function drawSeconds(mySecond) {
  const clusterRadius = 100; // Radius of the cluster
  fill("black");
  for (let k = 0; k < mySecond; k++) {
    if (k >= 60) {
      break; // Stop drawing dots when it reaches a minute
    }
    // Generate random angle within a range
    const angle = random(0, TWO_PI);
    // Calculate random distance from the cluster center within the cluster radius
    const distance = random(0, clusterRadius);
    // Calculate dot position based on angle, distance, and cluster center position
    const dotX = clusterX + cos(angle) * distance;
    const dotY = clusterY + sin(angle) * distance;
    circle(dotX, dotY, 4);
  }
}
