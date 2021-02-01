var lobby;
var lobbyState = "begin";
var gameState = "mainLobby";
var soundTimer_start = 1;
var soundTimer_htp = 1;
var mouse_over_sound;
var before_theme_timer = 1;
var lobby_song;
var lobby_song_timer = 1;
var click_timer = 1;
var soundTimer_back = 1;
var intro_helicopter;
var introTimer = 1;
var heliTimer;
var rope;
var character;
var ropeTimer;
var heli_score = 0;
var upState = "normal"
var heliState = "normal";
var upTimer;
var fade_away;
var fadeTimer;
var mainGameState = "notStarted";
var backSoundTimer_1 = 0;
var backSoundTimer_2 = 0;
var backSoundTimer_3 = 0;
var shootTimer;
var shootEndTimer;
var firingTimer = 1;
var crosshairState = "notAiming";
var crosshairGroup;
var aimState = "notAiming";
var testState = "notAiming";


function preload(){

lobby_normal = loadAnimation('lobby/normal_lobby/normal.png');
lobby_normal_start = loadAnimation('lobby/normal_lobby/start.png');
lobby_normal_htp = loadAnimation('lobby/normal_lobby/htp.png');

lobby_gun_selector = loadAnimation('lobby/gun_selector/normal.png');
lobby_gun_m16 = loadAnimation('lobby/gun_selector/m16.png');
lobby_gun_deagle = loadAnimation('lobby/gun_selector/deagle.png');
lobby_gun_sniper = loadAnimation('lobby/gun_selector/sniper.png');
lobby_gun_back = loadAnimation('lobby/gun_selector/back.png');

lobby_htp = loadAnimation('lobby/htp/htp_normal.png');
lobby_htp_back = loadAnimation('lobby/htp/htp_back.png')
lobby_htp_controls = loadAnimation('lobby/htp/htp_controls.png');
lobby_htp_gameplay = loadAnimation('lobby/htp/htp_gameplay.png');
lobby_htp_story = loadAnimation('lobby/htp/htp_story.png');

lobby_htp_controls_back = loadAnimation('lobby/htp/controls/back.png');
lobby_htp_controls_normal = loadAnimation('lobby/htp/controls/normal.png');



lobby_click_to_start = loadAnimation("press_to_start.png");


mouse_over_sound = loadSound('sounds/menu.mp3');
//beforeTheme = loadSound('sounds/before_theme.mp3');
lobby_song = loadSound('sounds/main_lobby_song.mp3');
click_sound = loadSound('sounds/click.mp3');
mouse_over_back = loadSound('sounds/menu.mp3');




helicopter = loadAnimation('intro/heli_animation/intro_heli_1.png','intro/heli_animation/intro_heli_2.png','intro/heli_animation/intro_heli_3.png','intro/heli_animation/intro_heli_4.png','intro/heli_animation/intro_heli_5.png','intro/heli_animation/intro_heli_6.png', );
intro_music = loadSound('sounds/intro_helicopter.mp3');

cloud_img = loadAnimation('intro/cloud_background.png');
blue_behind = loadAnimation('intro/blue_background.png');

rope_img = loadAnimation('intro/rope.png');
character_parachuting = loadAnimation('intro/char_parachuting.png');
character_normal = loadAnimation('intro/char_normal.png');

fade_animation = loadAnimation('intro/fade_away/Layer 0.png','intro/fade_away/Layer 1.png','intro/fade_away/Layer 2.png','intro/fade_away/Layer 3.png','intro/fade_away/Layer 4.png','intro/fade_away/Layer 5.png','intro/fade_away/Layer 6.png','intro/fade_away/Layer 7.png','intro/fade_away/Layer 8.png','intro/fade_away/Layer 9.png','intro/fade_away/Layer 10.png','intro/fade_away/Layer 11.png','intro/fade_away/Layer 12.png','intro/fade_away/Layer 13.png','intro/fade_away/Layer 14.png','intro/fade_away/Layer 15.png','intro/fade_away/Layer 16.png','intro/fade_away/Layer 17.png','intro/fade_away/Layer 18.png','intro/fade_away/Layer 19.png', 'intro/fade_away/Layer 20.png')

fade_normal = loadAnimation('intro/fade_away/Layer 0.png');

lobby_started = loadAnimation('started/ground.png');


started_music = loadSound('sounds/background_music.mp3');

teammateImg = loadAnimation('started/m16/teammate.png');
teammateShooting = loadAnimation('started/m16/teammate.png', 'started/m16/teammate_firing.png');
teammate_covering = loadAnimation('started/m16/taking_cover/cover_1.png', 'started/m16/taking_cover/cover_2.png');

backSound_1 = loadSound('sounds/background_gunshots_1.mp3');

cover_img = loadAnimation('started/cover.png');
firingSound1 = loadSound('sounds/gun_shots/gun_1.mp3')


leftCrosshair = loadAnimation('started/cross_hair/left.png');
upCrosshair = loadImage('started/cross_hair/up.png');
downCrosshair = loadImage('started/cross_hair/down.png');
rightCrosshair = loadImage('started/cross_hair/right.png');
centerCrosshair = loadImage('started/cross_hair/center.png');


scopedIn = loadImage('started/cross_hair/aimed_in.png');

}



function setup() {
createCanvas(2250, 1150);
lobby = createSprite(2250/2, 1150/2);
lobby.addAnimation("main_normal",lobby_normal);
lobby.addAnimation("clickToStart", lobby_click_to_start);
lobby.addAnimation("main_htp", lobby_normal_htp);
lobby.addAnimation("main_start",lobby_normal_start);
lobby.addAnimation("normalGunSelector", lobby_gun_selector);
lobby.addAnimation("m16", lobby_gun_m16);
lobby.addAnimation("deagle", lobby_gun_deagle);
lobby.addAnimation("sniper", lobby_gun_sniper);
lobby.addAnimation("lobby_gun_back", lobby_gun_back);
lobby.addAnimation("blue_background", blue_behind);
lobby.addAnimation("started", lobby_started);
lobby.addAnimation("htp", lobby_htp);
lobby.addAnimation("htp_back", lobby_htp_back);
lobby.addAnimation("htp_controls", lobby_htp_controls);
lobby.addAnimation("htp_gameplay", lobby_htp_gameplay);
lobby.addAnimation("htp_story", lobby_htp_story);
lobby.addAnimation("htp_controls_back", lobby_htp_controls_back);
lobby.addAnimation("htp_controls_normal", lobby_htp_controls_normal);

crosshairGroup = createGroup();


startButton = createSprite(((2215-1820)/2)+1820, ((750-540)/2) + 540,  2214-1825, 760-550  );
startButton.visible = false;

htp = createSprite(((2211-1632)/2)+1632, ((1061-823)/2) +823, 2211-1632, 1061-823);
htp.visible = false;

backButton = createSprite(((2070-1620)/2)+1620, ((1000-765)/2)+765,2070-1620, 1000-765 );
backButton.visible = false;

m16Button = createSprite(((825-170)/2)+170, ((335-167)/2)+167, 825-170,335-167); 
m16Button.visible = false;

pistolBtton = createSprite(((558-228)/2)+220, ((656-490)/2)+490, 565-228, 656-490);
pistolBtton.visible = false;

sniperButton = createSprite(((852-153)/2)+153, ((992-815)/2)+815, 852-153, 992-815);
sniperButton.visible =  false;

upTimer = createSprite(0, 200, 10, 10);
upTimer.visible = false;







intro_helicopter = createSprite(-1500, 1150/2);
intro_helicopter.addAnimation("normalHele", helicopter);
intro_helicopter.frameDelay = 0

heliTimer = createSprite(0, 40, 10, 10);
heliTimer.visible = false;

cloud = createSprite(1250, 1150/2);
cloud.addAnimation("clouds", cloud_img);
cloud.visible = false;

rope = createSprite(1250,-1000);
rope.addAnimation("normal_rope", rope_img);

character = createSprite(rope.x +5, -120);
character.addAnimation("char_parachuting", character_parachuting);
character.addAnimation("char_normal", character_normal);
character.velocityY = 0;
character.scale = 1.3;

character2 = createSprite(rope.x +5, -500);
character2.addAnimation("char_parachuting", character_parachuting);
character2.addAnimation("char_normal", character_normal);
character2.velocityY = 0;
character2.scale = 1.3;

character3 = createSprite(rope.x +5, -900);
character3.addAnimation("char_parachuting", character_parachuting);
character3.addAnimation("char_normal", character_normal);
character3.velocityY = 0;
character3.scale = 1.3;

ropeTimer = createSprite(0, 50, 10, 10);
ropeTimer.visible = false;

fade_away = createSprite(2250/2, 1150/2);
fade_away.addAnimation("notFading", fade_normal);  
fade_away.addAnimation("faded", fade_animation)
fade_away.visible = false;
  
fadeTimer = createSprite(0, 200, 10, 10);
fadeTimer.visible = false;

musicTimer = 1;

backsoundTimer = createSprite(0, 10, 10, 10);
backsoundTimer.visible = false;

teammate = createSprite(268, 993);
teammate.addAnimation("normal", teammateImg);
teammate.addAnimation("shooting", teammateShooting);
teammate.addAnimation("covering", teammate_covering);
teammate.scale = 0.4;
teammate.visible = false; 

shootTimer = createSprite(0, 50, 10 ,10);
shootTimer.visible = false;

shootEndTimer = createSprite(0, 40, 10, 10);
shootEndTimer.visible = false;
cover = createSprite(700, 1030)
  cover.addAnimation("coverImg", cover_img);
  cover.scale = 0.5
  cover.visible = false;

  fireTimer1 = createSprite(0, 60, 10, 10);
  fireTimer1.visible = false;


//the crosshair section
crosshair_left = createSprite(mouseX-100, mouseY);
crosshair_left.addAnimation("leftCrosshair", leftCrosshair);

crosshair_up = createSprite(mouseY-100, mouseX);
crosshair_up.addImage(upCrosshair);
crosshair_up.visible = false;

crosshair_right = createSprite(40, 40);
crosshair_right.addImage(rightCrosshair);
crosshair_right.visible = false;

crosshair_down = createSprite(40, 40);
crosshair_down.addImage(downCrosshair);
crosshair_down.visible = false;

crosshair_center = createSprite(40,40);
crosshair_center.addImage(centerCrosshair);
crosshair_center.visible = false;

scope = createSprite(mouseX, mouseY);
scope.addImage(scopedIn);
scope.visible = false;




controlsButton = createSprite(((645-150)/2)+150, ((380-160)/2)+160, 645-150, 160-380);
controlsButton.visible = false;

storyButton = createSprite(((533-157)/2)+157, ((690-440)/2)+440, 533-157, 690-440 );
storyButton.visible = false;

gameplayButton = createSprite(((585-150)/2)+150, ((994-753)/2)+753, 585-150, 994-753);
gameplayButton.visible = false;

//teammate_1 = createSprite()
crosshairGroup.add(crosshair_center, crosshair_down, crosshair_left, crosshair_right, crosshair_up);

}

function draw() {
  background(220);

  crosshair_center.x = mouseX;
  crosshair_center.y=  mouseY;



if(lobbyState === "begin"){
  

//if(before_theme_timer === 1){
  //beforeTheme.play();
  //beforeTheme.setVolume(0.2)
 // before_theme_timer = 0;
//}
lobby.changeAnimation("clickToStart", lobby_click_to_start);
  if(mousePressedOver(lobby)){
   // beforeTheme.pause();
    lobbyState = "normal";
  }
}

if( lobby_song_timer === 1){
  if(lobbyState === "normal" || lobbyState === "gun_selector" && gameState != "m16_play" && gameState != "pistol_play" && gameState != "sniper_play"){
    lobby_song.play();
  lobby_song.setVolume(0.7);
  lobby_song_timer = 0;
}
}
if(gameState === "m16_play" || gameState === "pistol_play" || gameState === "sniper_play"){
  lobby_song.pause();
 }
 
  if(lobbyState === "normal"){

    startButton.x = ((2215-1820)/2)+1820;
    htp.x = ((2211-1632)/2)+1632;
  lobby.changeAnimation("main_normal", lobby_normal);
  
if(gameState === "mainLobby"){
if(mouseIsOver(startButton)){

lobby.changeAnimation("main_start", lobby_normal_start);

if(soundTimer_start === 1){
  mouse_over_sound.play();
  soundTimer_start = 0;
}


}


if(mouseIsOver(htp) && gameState != "m16_play"){
  lobby.changeAnimation("main_htp", lobby_normal_htp);
if(soundTimer_htp === 1){
  mouse_over_sound.play();
  soundTimer_htp = 0;

}


  }  
}

}if(mousePressedOver(startButton) && gameState != "m16_play"){
    if(click_timer === 1){
      click_sound.play();
      click_timer = 0;
      lobbyState = "gun_selector"
    }
  }

  if(mousePressedOver(htp) && gameState != "m16_play"){
    if(click_timer === 1){
      click_sound.play();
      click_timer = 0;
      lobbyState = "htp"
    }
    soundTimer_back =1;
    click_timer = 1;

    mouseX = 100
  }

  

  if(mouseIsOver(startButton) === false){
    soundTimer_start = 1;
    click_timer = 1;
  }

  if(mouseIsOver(htp) === false){
    soundTimer_htp = 1;
    click_timer = 1;
  }

  if(lobbyState === "htp"){
lobby.changeAnimation("htp", lobby_htp);
htp.x = 100000;
startButton.x = 10000;

backButton.y = ((360-118)/2)+118;
backButton.x =  ((2070-1620)/2)+1620+(2113-2068)



if(mouseIsOver(backButton)){
  lobby.changeAnimation("htp_back", lobby_htp_back);
  if(soundTimer_back === 1){
    mouse_over_sound.play();
    soundTimer_back = 0;
  
  }
  
  
}
if(mouseIsOver(backButton) === false && mouseIsOver(controlsButton) === false && mouseIsOver(storyButton) === false && mouseIsOver(gameplayButton) === false){

    soundTimer_back = 1;
    click_timer = 1;
  

  }

if(mousePressedOver(backButton)){
  lobby.changeAnimation("main_lobby", lobby_normal);
  lobbyState = "normal";
  if(click_timer === 1){
    click_sound.play();
    click_timer = 0;
  }
}


if(mousePressedOver(controlsButton)){
  lobbyState = "controls";
  if(click_timer === 1){
    click_sound.play();
    click_timer = 0;
  }
}
//


///backButton.visible = true;

if(mouseIsOver(controlsButton)){

lobby.changeAnimation("htp_controls", lobby_htp_controls);

if(soundTimer_back === 1){
  mouse_over_sound.play();
  soundTimer_back = 0;
}

}
if(mouseIsOver(storyButton)){
  lobby.changeAnimation("htp_story", lobby_htp_story);

  if(soundTimer_back === 1){
    mouse_over_sound.play();
    soundTimer_back = 0;
  }
}

if(mouseIsOver(gameplayButton)){
  lobby.changeAnimation("htp_gameplay", lobby_htp_gameplay);

  if(soundTimer_back ===1 ){
    mouse_over_sound.play();
    soundTimer_back = 0;
  }
}



  }

  if(lobbyState === "controls"){
    lobby.changeAnimation("htp_controls_normal", lobby_htp_controls_normal);

    if(mouseIsOver(backButton)){
      lobby.changeAnimation("htp_controls_back", lobby_htp_controls_back);
      if(soundTimer_back === 1){
        mouse_over_sound.play();
        soundTimer_back = 0;
      
      }
    }
    if(mouseIsOver(backButton) === false && mouseIsOver(controlsButton) === false && mouseIsOver(storyButton) === false && mouseIsOver(gameplayButton) === false){

      soundTimer_back = 1;
      click_timer = 1;
    
  
    }

    if(mousePressedOver(backButton)){
      //lobby.changeAnimation("main_lobby", lobby_normal);
      lobbyState = "htp";
      if(click_timer === 1){
        click_sound.play();
        click_timer = 0;
      }

      mouseX = 100
    }



  }

  
if(lobbyState === "gun_selector"){

  soundTimer_start = 1;
backButton.x = ((2070-1620)/2)+1620;
backButton.y = ((1000-765)/2)+765;
  
startButton.x = 10000;
  lobby.changeAnimation("normalGunSelector" ,lobby_gun_selector);

if(mouseIsOver(m16Button)&& gameState!= "m16_play"){
  lobby.changeAnimation("m16", lobby_gun_m16);
  

 } 
 if(mousePressedOver(m16Button)&& gameState!= "m16_play"){
    gameState = "m16_play";
    if(click_timer === 1){
    click_sound.play();
    click_timer = 0;
  }
  }


if(mouseIsOver(pistolBtton)&& gameState != "m16_play"){
  lobby.changeAnimation("deagle", lobby_gun_deagle);
}
if(mouseIsOver(sniperButton)&& gameState!= "m16_play"){
  lobby.changeAnimation("sniper", lobby_gun_sniper);
}



if(mouseIsOver(backButton)&& gameState!= "m16_play"){
  lobby.changeAnimation("lobby_gun_back", lobby_gun_back);
  if(soundTimer_back === 1){
    mouse_over_sound.play();
    soundTimer_back = 0;
  }

if(mousePressedOver(backButton) && gameState!= "m16_play"){
  lobby.changeAnimation("main_lobby", lobby_normal);
  if(click_timer === 1){
    click_sound.play();
    click_timer = 0;
  }

  mouseX = 200;
  
  lobbyState = "normal";
}

  
}

if(mouseIsOver(backButton) === false){
   soundTimer_back =1;
 click_timer = 1;

if(mouseIsOver(m16Button) === false){
  click_timer = 1;
}

}
}



if(gameState === "m16_play"){
  lobby.changeAnimation("blue_background", blue_behind);

if(keyWentDown("l")){
  mainGameState = "m16";
  heliState = "lol";
  cloud.visible = false;
  intro_music.pause();
}

  heliTimer.velocityX = 8;
  if(introTimer === 1){
    intro_music.play();
    introTimer = 0;
  }


  cloud.velocityX = -234;
  cloud.visible = true;

intro_helicopter.depth = cloud.depth;
cloud.depth = cloud.depth+1;

if(cloud.x<-2000){
  cloud.x = cloud.width/2;
}

  heliTimer.velocityX = 15;  
  if(intro_helicopter.x <1000 ){
    intro_helicopter.velocityX = 30;
  }
  if(intro_helicopter.x>1000){
    intro_helicopter.velocityX = 0;
    

  }
  
  if(heliTimer.x>1800 && heliState === "normal"){
    
    upTimer.velocityX = 20;
    

  intro_helicopter.velocityY = -20;
    intro_helicopter.velocityX = 3;
    upState = "over";
    upTimer.destroy();

    
  }

 
if(intro_helicopter.y<-300 && heliState === "normal"){
heliTimer.x = 0;
    heliTimer.velocityX = 0;
      intro_helicopter.velocityY = 0;
    intro_helicopter.velocityX = 0;
   ropeTimer.velocityX = 50;}
   if(ropeTimer.x > 2250){
     rope.velocityY = 15;
     heliState = "over"
   

    
  }
  
 
if(rope.y >570){
   if(heliState === "over"){rope.velocityY = 0;
   heliTimer.velocityX = 8;}
  if(heliTimer.x >2000){
    character.velocityY = 25;
    character2.velocityY = 25;
    character3.velocityY = 25;
    fade_away.visible = true;
    fade_away.changeAnimation("faded", fade_animation);
    fadeTimer.velocityX = 50;
    cloud.depth = fade_away.depth;
    fade_away.depth = fade_away.depth+1;

    intro_helicopter.depth = fade_away.depth;
    fade_away.depth = fade_away.depth+1;

    rope.depth = fade_away.depth;
    fade_away.depth = fade_away.depth +1;
    fade_away.depth = fade_away.depth+100000000;
    

  }
  
}if(fadeTimer.x>2250){
      fade_away.visible = false;
      cloud.visible = false;
      intro_helicopter.visible = false;
      rope.visible = false;
      character.visible = false;
      character2.visible = false;
      character3.visible = false;
      
        
        fade_away.visible = false;
    }
if(character.y > 1000){
    rope.velocityY = -20;
    helicopter.velocityY = -20;
    mainGameState = "m16"
    
    
  }
  }

  //AAAAAAAAAAAAAAAAA
  //BBBBBBBBBBBBBBBBB
  //CCCCCCCCCCCCCCCCC
  //DDDDDDDDDDDDDDDDD
  //EEEEEEEEEEEEEEEEE
  //FFFFFFFFFFFFFFFFF
  //GGGGGGGGGGGGGGGGG
  //HHHHHHHHHHHHHHHHH

  if(mainGameState === "m16"){
if(crosshair_left.x<crosshair_center.x-100){
  testState = "aimOut"
}

crosshair_down.x =crosshair_center.x;
crosshair_up.x = crosshair_center.x;
crosshair_right.y = crosshair_center.y;
crosshair_left.y = crosshair_center.y;
crosshair_center.x = mouseX;
crosshair_center.y = mouseY;

crosshair_left.visible = true;
crosshair_right.visible = true;
crosshair_up.visible = true;
crosshair_down.visible = true;
crosshair_center.visible = true;


if(crosshairState === "notAiming"){
  
  crosshair_down.y = crosshair_center.y+100;
  crosshair_up.y =crosshair_center.y-100;
  crosshair_right.x = crosshair_center.x+100;
  crosshair_left.x =crosshair_center.x-100;
  crosshair_left.velocityX = 0;
    crosshair_right.velocityX = 0;
    crosshair_up.velocityY = 0;
    crosshair_velocityY = 0;
  if(keyWentDown("ctrl")){
   crosshairState = "aiming"; 
   
  }  
}
if(crosshairState === "aiming"){
  
 if(aimState === "notAiming" ){
   crosshair_down.velocityY = -30;
   crosshair_up.velocityY = 30;
   crosshair_left.velocityX = 30;
   crosshair_right.velocityX = -30;
   crosshair_down.x = crosshair_center.x;
  crosshair_up.x = crosshair_center.x;
  crosshair_left.y = crosshair_center.y;
  crosshair_right.y = crosshair_center.y;
   //aimState = "aiming";

if(crosshair_left.x>crosshair_center.x-35){
  crosshair_down.velocityY = 0;
  crosshair_up.velocityY = 0;
  crosshair_left.velocityX =0;
  crosshair_right.velocityX = 0;

  
  aimState = "aimed"

}


 }
 if(aimState === "aimed"){

crosshair_down.x = crosshair_center.x;
  crosshair_up.x = crosshair_center.x;
  crosshair_left.y = crosshair_center.y;
  crosshair_right.y = crosshair_center.y;
  
  crosshair_down.y = crosshair_center.y+35;
 crosshair_up.y = crosshair_center.y-35;
  crosshair_left.x = crosshair_center.x-35;
  crosshair_right.x = crosshair_center.x+35;

 }
 
 
  
 

}
if(keyWentUp("ctrl") && crosshairState === "aiming"){
 
 
 aimState = "aimOut"
 
  
}

if(aimState === "aimOut"){
 // if(crosshair_left.x>crosshair_center.x-100){

   // crosshair_down.velocityY = 30;;
    //crosshair_up.velocityY = -30;
    //crosshair_left.velocityX = -30;
    //crosshair_right.velocityX = 30;

  //}

if(testState === "aimOut"){
  
  crosshair_down.velocityY = 30;
  crosshair_up.velocityY = -30;
  crosshair_left.velocityX =-30;
  crosshair_right.velocityX = 30
  crosshairState = "notAiming";
  aimState = "notAiming";

}

}

if(crosshair_left.x<crosshair_center.x-100){
  crosshair_left.velocityX = 10000000;
}

  




if(musicTimer === 1){
    started_music.play();
    started_music.setVolume(0.3);
    musicTimer = 0;
    

  }
lobby.changeAnimation("started", lobby_started);
fade_away.visible = false;
teammate.visible = true;

if(backSoundTimer_1 === 7){
  backSound_1.play();
  backSoundTimer_1 = 1;
  backSound_1.setVolume(0.6);
  backsoundTimer.velocityX = 60;
}

shootTimer.velocityX = Math.round(random(30, 50));
if(shootTimer.x>2250){
  teammate.changeAnimation("shooting", teammateShooting);
  teammateShooting.frameDelay =0;
  if(firingTimer === 1){
    fireTimer1.velocityX = 60;
    firingTimer = 0;
  }
  if(fireTimer1.x>170){
    fireTimer1.x = 0;
    firingTimer = 1;
    //firingSound1.play();
  }
  
}
cover.visible = true;
}


  
console.log(mouseX, mouseY)
drawSprites();
}


