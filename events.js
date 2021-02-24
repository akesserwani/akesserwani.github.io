
//time frame from 100 to 420

function gameEvent(year, game_event){
    if (year_num == year){
        //createEvent(game_event);
    }
}

function popUp1(text, btn_text){
        document.getElementById("popup1").style.display = "block";
        document.getElementById("popup_text").innerHTML = text;
        document.getElementById("popup_btn").innerHTML = btn_text;    
}


function popUp2(text, btn1, btn2, action1, action2){
        document.getElementById("popup2").style.display = "block";
        document.getElementById("popup_text2").innerHTML = text;
        document.getElementById("popup_btn1").innerHTML = btn1;    
        document.getElementById("popup_btn2").innerHTML = btn2;  
        document.getElementById("popup_btn1").onclick = action1;    
        document.getElementById("popup_btn2").onclick = action2;    
}

function popUp3(text, btn1, action1, btn2, action2, btn3, action3){
    document.getElementById("popup3").style.display = "block";
    document.getElementById("popup_text3").innerHTML = text;
    document.getElementById("popup_btn3").innerHTML = btn1;    
    document.getElementById("popup_btn4").innerHTML = btn2;  
    document.getElementById("popup_btn5").innerHTML = btn3;  
    document.getElementById("popup_btn3").onclick = action1;    
    document.getElementById("popup_btn4").onclick = action2;  
    document.getElementById("popup_btn5").onclick = action3;   
}


function draft(year, enemy){
    var army_positions = ["Pedes", "Aquilifier", "Optio", "Centurion", "Primus Pilus", "Tribune", "Legatus"];

    if (year_num == year && army_positions.includes(occupation[0]) == false){
        if(age_num >= 17 && age_num <= 30 && randomInt(1) == 1){
            //you have been drafted pop up
            if(social_class == "pleb"){
                occupation[0] = "Pedes";
                createEvent("You have been drafted into the army as an infantryman");
            } else{
                occupation[0] = "Aquilifier";
                createEvent("You have been drafted into the army as an aquilifer")
            }
        }
    } else if (year_num == year && army_positions.includes(occupation[0]) == false){
        //create going to war pop up
        createEvent("You are going off to war to fight " + enemy + "!")
    }
}

function combat_army(enemy_race){
    popUp3("You are facing ");
}



function consoleEvents(){



    //historical events
    gameEvent(-100, "Gaius Marius has been elected as consul");       
    gameEvent(-91, "Client states in Italy have rebelled against Rome!");       
    gameEvent(-88, "The Consul Sulla has led an army through the city of Rome! War is upon us.");       
    gameEvent(-87, "Roman Forces have landed in Epirus. Death to the Kingdom of Pontus.");
    gameEvent(-85, "The Senate has signed a peace agreement with Pontus.");
    gameEvent(-82, "Sulla has been declared dictator.");
    gameEvent(-80, "Roman General Quintus Sertorius has landed in Iberia to crush rebels.");
    gameEvent(-73, "Seventy Gladiators have escaped from the Ludus in Capua, under a leader called Spartacus");
    gameEvent(-72, "The rebels in Iberia have been slaughtered!");
    gameEvent(-71, "The Army of Gladiators have been crushed... and Spartacus was executed!");
    gameEvent(-63, " Pompey Magnus has conquered Jerusalem!");
    gameEvent(-60, " Pompey Magnus has joined a political alliance with consul Gaius Julius Caesar and censor Marcus Licinius Crassus");
    gameEvent(-58, "Roman forces have invaded Gaul under Julius Caesar");
    gameEvent(-55, "Roman forces have invaded Britain under Julius Caesar");
    gameEvent(-53, "A small Parthian Army has destroyed a larger Roman force and murdered Marcus Crassus.");
    gameEvent(-50, "The Gallic War has ended with a Roman Victory!");
    gameEvent(-49, "Julius Caesar has illegally crossed the Rubicon River with his army at the Senate's dismay.");
    gameEvent(-48, "Caesar has defeated Pompey Magnus' army at Pharsulus. Victory to Caesar.");
    gameEvent(-44, "Oh no! Caesar has been assassinated by a group of senators.");
    gameEvent(-43, "Caesar's adopted son, Octavius has joined a triumvirate with Marcus Antonius and Marcus Aemilius Lepidus.");
    gameEvent(-42, "Octavius and Marcus Antonius have avenged Julius Caesar and murdered his killers.");
    gameEvent(-33, "Marcus Antonius failed to conquer Parthia.");
    gameEvent(-30, "Octavius has defeated Marcus Antonius at Actium");
    gameEvent(-29, "Rome has deployed 8,000 soldiers against the Cantabri in Iberia.");
    gameEvent(-27, "Octavius has been declared Augustus for life!");
    gameEvent(-12, "Roman forces have crossed the Rhine into Germania." );
    gameEvent(9, "German forces have ambushed and destroyed 3 legions in the Teutoburg Forest." );
    gameEvent(14, "The first Emperor Augustus has died, his step-son, Tiberius has succeeded him." );
    gameEvent(16, "The legions have defeated a Germanic Army on the Weser River." );
    gameEvent(37, "Tiberius has died and been succeeded by Caligula." );
    gameEvent(41, "Caligula has been assassinated. He has been succeeded by Cladius." );
    gameEvent(43, "The Roman Conquest of Britain has begun.");
    gameEvent(54, "Cladius has died, his adopted son, Nero has taken his place.");
    gameEvent(60, "The Warrior Queen, Boudica, has build a rebellion of the Iceni and Trinovantes Tribe against Rome.");
    gameEvent(61, "The Romans have destroyed Boudica's Rebellion." );
    gameEvent(64, "Oh no! A fire has broken out in Rome and destroyed half the city." );
    gameEvent(66, "The Jewish population of Judea has revolted against Rome." );
    gameEvent(68, "Galba has replaced Nero as emperor." );
    gameEvent(69, "Galba has been assassinated and succeeded by Vespasian." );
    gameEvent(70, "The Roman General Titus has breached the walls of Jerusalem and destroyed the city.");
    gameEvent(71, "Roman forces have entered Scotland" );
    gameEvent(73, "Roman forces have breached the walls of Masada in Judea." );
    gameEvent(79, "Vespasian has died and been succeeded by his son Titus." );
    gameEvent(79, "Mount Vesuvius has erupted, destroying Pompeii and Herculaneum." );
    gameEvent(80, "The new colloseum, the Flavian Amphitheatre, has been completed." );
    gameEvent(81, "Titus has died of fever and been succeeded by his brother, Domitian." );
    gameEvent(96, "Domitian has been assassinated by the Senate, and Nerva has been declared ruler." );
    gameEvent(98, "Nerva has died and been succeeded by Trajan." );







    //army events





}





//career events 




//family events