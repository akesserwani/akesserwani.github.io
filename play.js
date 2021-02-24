//data
var family = {};

var children = {};

var pet = {
    1: ["Name", "Age", "Type", "Relation Score"]
};

//"Occupation", "years", "Income", "Satisfaction"
var occupation = [];

var assets = [];

//praetorian/legatus/quaestor hasnt been asked yet
var praetorian = true;
var legatus = true;
var quaestor = true;

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function randomIntAB(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  

function autoscroll(id){
    var objDiv = document.getElementById(id);
    objDiv.scrollTop = objDiv.scrollHeight - objDiv.clientHeight;
}

function changeBar(name, amount_change){
  x =  document.getElementById(name).value;
  document.getElementById(name).value = String(x+amount_change);
}

function setBar(name, amount_change){
    document.getElementById(name).value = String(amount_change);
}

//Changing Variables
var year_num = randomInt(-100, 300);
var age_num = 1;
var net_worth;


//praenomen - nomen - cognomen
var praenomen = ["Aullus","Appius", "Decimus", "Faustus", "Gaius", "Gnaeus", "Lucius", "Manius", "Marcus", "Maximus", "Mettius", "Numerius", "Octavius", "Paullus", "Publius", "Quintus", "Septimus", "Sextus", "Tiberius", "Titus", "Tullius", "Vibius"];
var nomen = ["Aelius", "Aemelius", "Antonius", "Arrius", "Atius", "Artorius", "Cassius", "Claudius", "Cornelius", "Didius", "Flavius", "Julius", "Licinius", "Livius", "Lucilius", "Lucretius", "Manlius", "Marius", "Numerius", "Pontius", "Valerius"];
var cognomen = ["Appolonius", "Brutus", "Cassianus", "Cincinnatus", "Cicero", "Crassus", "Fabianus", "Herculanus", "Liberius", "Macrobius", "Meridius", "Vorenus", "Proximus", "Pilatus", "Romulus", "Sabinus", "Secundus", "Tertius", "Tiberianus", "Ulpianus"];

var nomen_a = ["Aelia", "Aemelia", "Antonia", "Attia", "Cassia", "Claudia", "Cornelia", "Flavia", "Julia", "Licinia", "Livia", "Lucilia", "Lucretia", "Numeria", "Valeria", "Fausta", "Gaia", "Octavia", "Vibia"];

function randomNameGenerator(gender, ethnicity){
    if (gender == "male"){
        if (ethnicity == "roman"){
            var random_name = praenomen[randomInt(praenomen.length)] + " " + nomen[randomInt(nomen.length)] + " " + cognomen[randomInt(cognomen.length)];
            return(random_name);
        }else if (ethnicity == "greek"){
            var greek_name;
        }

    }else if (gender == "female"){
        if (ethnicity == "roman"){
            var random_name_a = nomen_a[randomInt(nomen_a.length)] + " " + cognomen[randomInt(cognomen.length)];
            return(random_name_a);
        }
    }
}




function time(){
    year_num += 1;
    age_num += 1;

    //update family age
    if ("father" in family){
        family["father"][2] += 1;
    } 
     if ("mother" in family){
        family["mother"][2] += 1;
    } 
    if ("brother" in family){
        family["brother"][2] += 1;
    } 
    if ("sister" in family){
        family["sister"][2] += 1;
    } 
    if ("spouse" in family){
        family["spouse"][2] += 1;
    }

    //time for children 


    //age careers
    if (typeof occupation[1] !== 'undefined'){
        occupation[1] += 1;
    } 

}

function createEvent(insert_event){
    const console = document.querySelector('#console');
    var text_event = document.createElement("p");

    text_event.innerHTML = insert_event;
    document.getElementById("console").appendChild(text_event);

}

function timeline(){
    const console = document.querySelector('#console');
    var text_event = document.createElement("p");

    if (year_num > 0){
        date_tag = " AD";
    }else if (year_num < 0){
        date_tag = " BC";
    }else if (year_num == 0){
        date_tag = "";
    }
    
    text_event.innerHTML = "Age: " + age_num.toString() + " - Year: " + Math.abs(year_num).toString() + date_tag + " - ";
    document.getElementById("console").appendChild(text_event);

}


//career menu
//join career probabilities
function joinArmy(){
        if (age_num >= 16 && age_num <= 35){

            if (family["player"][4] == "pleb"){
                createEvent("You joined the army as a Pedes");
                //push info to array
                occupation.push("Pedes", 0, randomIntAB(500,600), 100);
                exitMenu();

            } else if (family["player"][4] == "pat" || family["player"][4] == "eq"){
                createEvent("You joined the army as an Aquilifer");
                //push info to array
                occupation.push("Aquilifier", 0, randomIntAB(500,600), 100);
                exitMenu();
            }
        }
        else if (age_num < 16){
            createEvent("You are to young to join the army");
            exitMenu();
            
        }else if (age_num > 35){
                createEvent("You are to old to join the army");
                exitMenu();
        } 
}

let bePraet = function(){
    createEvent("You are now a Praetorian");
    occupation[0] = "Praetorian";
    occupation[1] = 0;
    occupation[2] = randomIntAB(20000,30000);
    occupation[3] = 100;

    player_reputation += 10

    closePopUp();
}

let beLegatus = function(){

    occupation[0] = "Legatus";
    occupation[1] = 0;
    occupation[2] = randomIntAB(100000,150000);
    occupation[3] = 90;

    player_reputation += 10

    closePopUp();
}

let beQuaestor = function(){

    occupation[0] = "Quaestor";
    occupation[1] = 0;
    occupation[2] = 0;
    occupation[3] = 90;

    player_reputation += 10

    closePopUp();

}



//declare bonus which will be added to net worth every year if merchant or craftsman
var bonus;

function careerProgression(){
    //military
    var avg_strength = 0;
    if(occupation[0] == "Pedes" && player_strength > avg_strength && occupation[1] > randomIntAB(3,4)){
        createEvent("You have been promoted to an Aquilifier");
        popUp1("You have been promoted to an Aquilifier", "Ok");

        occupation[0] = "Aquilifier";
        occupation[1] = 0;
        occupation[2] = randomIntAB(2000,3000);
        occupation[3] = 100;

        player_reputation += 10;
    }
    if(occupation[0] == "Aquilifier" && player_strength > avg_strength && occupation[1] > randomIntAB(3,5)){
        createEvent("You have been promoted to an Optio");
        popUp1("You have been promoted to an Optio", "Ok");

        occupation[0] = "Optio";
        occupation[1] = 0;
        occupation[2] = randomIntAB(5000,6000);
        occupation[3] = 100;

        player_reputation += 10
    }
    if(occupation[0] == "Optio" && player_strength > avg_strength && occupation[1] > randomIntAB(2,3)){
        createEvent("You have been promoted to a Centurion");
        popUp1("You have been promoted to a Centurion", "Ok");

        occupation[0] = "Centurion";
        occupation[1] = 0;
        occupation[2] = randomIntAB(8000,10000);
        occupation[3] = 75;

        player_reputation += 10
    }
    //If equite or patricican - advance quickly to tribune
    //If pleb - advance to primus pilus

    if(occupation[0] == "Centurion" && player_strength > avg_strength + 0 && occupation[1] > randomIntAB(5,10) && social_class == "pleb"){
        createEvent("You have been promoted to Primus Pilus");
        popUp1("You have been promoted to Primus Pilus", "Ok");

        occupation[0] = "Primus Pilus";
        occupation[1] = 0;
        occupation[2] = randomIntAB(15000,20000);
        occupation[3] = 80;

        player_reputation += 10
    }
    if(occupation[0] == "Centurion" && player_strength > avg_strength - 0 && occupation[1] > randomIntAB(6,8) && social_class == "pat" || social_class == "eq"){
        createEvent("You have been promoted to Tribune");
        popUp1("You have been promoted to Tribune", "Ok");

        occupation[0] = "Tribune";
        occupation[1] = 0;
        occupation[2] = randomIntAB(50000,70000);
        occupation[3] = 90;

        player_reputation += 10
    }

    //make legatus an invitation
    if(occupation[0] == "Tribune" && player_strength > avg_strength - 0 && occupation[1] > randomIntAB(6,8) && legatus == true){
        legatus = false;
        
        createEvent("You have been invited to serve as Legatus");
        popUp2("You have been invited to be Legatus", "Accept", "Decline", beLegatus, closePopUp);
    }

    if(occupation[0] == "Primus Pilus" && player_strength > avg_strength && occupation[1] > randomIntAB(6,8) && praetorian == true){
        //create var to check if function has been clicked
        praetorian = false;

        createEvent("You have been invited to serve the emperor as a Praetorian Guard");
        popUp2("You have been invited to join the Praetorian Guard", "Accept", "Decline", bePraet, closePopUp);
    }

    //invitation to leave army and become Quaestor
    if(occupation[0] == "Tribune" && player_strength > avg_strength - 0 && occupation[1] > randomIntAB(2,3) && quaestor == true){
        quaestor = false;
        
        createEvent("You have been appointed by the Senate to be a Quaestor");
        popUp2("You have been invited to be a Quaestor. By accepting you will be retiring from the Army", "Accept", "Decline", beQuaestor, closePopUp);
    }




    //pleb careers

    //Doctor
    if (occupation[0] == "Medical Student" && occupation[1] == 4){
        createEvent("You are now a doctor");
        occupation[0] = "Doctor";
        occupation[1] = 0;
        occupation[2] = randomIntAB(12000,15000);
        occupation[3] = 90;

    }

    //Becoming Craftsman
    if (occupation[0] == "Apprentice" && occupation[1] > randomIntAB(8,10)){
        createEvent("You are now a craftsman");
        occupation[0] = "Craftsman";
        occupation[1] = 0;
        occupation[2] = randomIntAB(6000,8000);
        occupation[3] = 90;
    }


    //1-3  max profit = 2000     dirt 100%  cheap 50    medium 25   Expensive 10
    //3-5  max profit = 4000     dirt 100%  cheap 75    medium 40   Expensive 30
    //5-10 max profit = 16000    dirt 100%  cheap 80    medium 50   Expensive 40
    //10-20 max profit = 32000   dirt 100%  cheap 85    medium 60   Expensive 50%
    //20-30   max profit = 64000  dirt 100%  cheap 90    medium 70   Expensive 60%
    //30-40   max profit = 128000  dirt 120%  cheap 95    medium 90   Expensive 75%
    //40+     max profit = 256000  dirt 140%  cheap 100%    medium 100%   Expensive 100%


    //textiles 70 happiness -1
    //glass 80  happiness -3
    //dye 100  happiness -5
    //spices 90 happiness - 4
    //wine 80  happiness - -3

    //profits decrease by 50% during wartime
    var sector_profit;
    if (occupation[4] == "textiles"){
        sector_profit = 0.7;
    }else if (occupation[4] == "glass"){
        sector_profit = 0.8;
    } else if (occupation[4] == "dye"){
        setor_profit = 1;
    } else if (occupation[4] == "spices"){
        sector_profit = 0.9;
    } else if (occupation[4] == "wine"){
        sector_profit = 0.8;
    }


    if (occupation[0] == "Merchant" && occupation[1] >= 0 && occupation[1] <= 3 ){
        //define profit for experience bracket
        bonus = randomIntAB(2000,3000);
    
        if (occupation[5] == "dirt_cheap"){
            bonus = bonus * 1;
        } else if (occupation[5] == "low"){
            bonus = bonus * 0.5;
        } else if (occupation[5] == "medium"){
            bonus = bonus * 0.25;
        } else if (occupation[5] == "high"){
            bonus = bonus * 0.1;
        }
    }
    if (occupation[0] == "Merchant" && occupation[1] > 3 && occupation[1] <= 5 ){
        bonus = randomIntAB(4000,5000);

        if (occupation[5] == "dirt_cheap"){
            bonus = bonus * 1;
        } else if (occupation[5] == "low"){
            bonus = bonus * 0.40;
        } else if (occupation[5] == "medium"){
            bonus = bonus * 0.25;
        } else if (occupation[5] == "high"){
            bonus = bonus * 0.30;
        }
    }
    if (occupation[0] == "Merchant" && occupation[1] > 5 && occupation[1] <= 10 ){
        bonus = randomIntAB(14000,16000);

        if (occupation[5] == "dirt_cheap"){
            bonus = bonus * 1;
        } else if (occupation[5] == "low"){
            bonus = bonus * 0.80;
        } else if (occupation[5] == "medium"){
            bonus = bonus * 0.50;
        } else if (occupation[5] == "high"){
            bonus = bonus * 0.40;
        }
    }
    if (occupation[0] == "Merchant" && occupation[1] > 10 && occupation[1] <= 20 ){
        bonus = randomIntAB(30000,32000);

        if (occupation[5] == "dirt_cheap"){
            bonus = bonus * 1;
        } else if (occupation[5] == "low"){
            bonus = bonus * 0.85;
        } else if (occupation[5] == "medium"){
            bonus = bonus * 0.60;
        } else if (occupation[5] == "high"){
            bonus = bonus * 0.50;
        }
    }
    if (occupation[0] == "Merchant" && occupation[1] > 20 && occupation[1] <= 30 ){
        bonus = randomIntAB(60000,64000);

        if (occupation[5] == "dirt_cheap"){
            bonus = bonus * 1;
        } else if (occupation[5] == "low"){
            bonus = bonus * 0.90;
        } else if (occupation[5] == "medium"){
            bonus = bonus * 0.70;
        } else if (occupation[5] == "high"){
            bonus = bonus * 0.60;
        }
    }
    if (occupation[0] == "Merchant" && occupation[1] > 30 && occupation[1] <= 40 ){
        bonus = randomIntAB(120000,128000);

        if (occupation[5] == "dirt_cheap"){
            bonus = bonus * 1.1;
        } else if (occupation[5] == "low"){
            bonus = bonus * 0.95;
        } else if (occupation[5] == "medium"){
            bonus = bonus * 0.90;
        } else if (occupation[5] == "high"){
            bonus = bonus * 0.70;
        }
    }
    if (occupation[0] == "Merchant" && occupation[1] > 40){
        bonus = randomIntAB(250000,256000);

        if (occupation[5] == "dirt_cheap"){
            bonus = bonus * 1.2;
        } else if (occupation[5] == "low"){
            bonus = bonus * 1;
        } else if (occupation[5] == "medium"){
            bonus = bonus * 1;
        } else if (occupation[5] == "high"){
            bonus = bonus * 1;
        }
    }

    var bonus = bonus * sector_profit;



    //advance to Quaestor
    if (occupation[0] == "Quaestor" && occupation[1] > randomIntAB(2,3)){
        createEvent("You have been appointed as Aedile");
        popUp1("You have been appointed as Aedile", "Ok");
        occupation[0] = "Aedile";
        occupation[1] = 0;
        occupation[2] = 0;
        occupation[3] = 100;
    }




}





function doctor(){
    if(age_num > 16){
        //subtract money
        createEvent("You traveled to Alexandria to study medicine");
        occupation[0] = "Medical Student";
        occupation[1] = 0;
        occupation[2] = randomIntAB(200,500);
        occupation[3] = 60;

        exitMenu();

    } else{
        createEvent("You are too young to study medicine");
        exitMenu();
    }
}


function craftsman(){
    //show price ranges
    document.getElementById("price_ranges").style.display = "block";
    document.getElementById("submit_career_change").style.display = "block";

    if(age_num > 8){
        createEvent("You have started your apprenticeship");
        occupation[0] = "Apprentice";
        occupation[1] = 0;
        occupation[2] = randomIntAB(200,500);
        occupation[3] = 80;

        exitMenu();
    }
    else{
        createEvent("You are too young");
        exitMenu();
    }
}

function merchant(){
    //show stuff to sell
    document.getElementById("merchant_selection").style.display = "block";
    //show price ranges
    document.getElementById("price_ranges").style.display = "block";
    document.getElementById("submit_career_change").style.display = "block";

    //add specialization to occupation array
    //empty array
    var craftsman_selection = document.getElementById("craftsman_selection").value;


    if(age_num > 18){
        createEvent("You became a merchant");
        occupation[0] = "Merchant";
        occupation[1] = 0;
        occupation[2] = randomIntAB(3000,4000);
        occupation[3] = 60;

        if (typeof occupation[4] !== "undefined"){
            occupation[4] = craftsman_selection;
        } else{
            occupation.push(craftsman_selection);
        }

        exitMenu();
    }
    else{
        createEvent("You are too young");
        exitMenu();
    }
}

function gladiator(){

    if(age_num > 18){
        createEvent("You became a gladiator");
        occupation[0] = "Gladiator";
        occupation[1] = 0;
        occupation[2] = 0;
        occupation[3] = 20;

        exitMenu();
    }
    else{
        createEvent("You are too young");
        exitMenu();
    }

}

function submitCareerChange(){
    if (occupation[0] == "Merchant"){

        var merchant_selection_drop = document.getElementById("merchant_selection").value;

        if (typeof occupation[4] !== "undefined"){
            occupation[4] = merchant_selection_drop;
        } else{
            occupation.push(merchant_selection_drop);
        }

        var price_ranges_drop = document.getElementById("price_ranges").value;

        if (typeof occupation[5] !== "undefined"){
            occupation[5] = price_ranges_drop;
        } else{
            occupation.push(price_ranges_drop);
        }


    }else if (occupation[0] == "Craftsman"){
        var price_ranges_drop = document.getElementById("price_ranges").value;

        if (typeof occupation[5] !== "undefined"){
            occupation[5] = price_ranges_drop;
        } else{
            occupation.push(price_ranges_drop);
        }
        
    }

    exitMenu();
}


//in game action functions

//make baby 
var child_name
var child_age;
var child_reputation;
var child_looks;


function makeBaby(){

    var baby_gender;

    if (Object.keys(children).length == 10){
        createEvent("You and " + family["spouse"][0] + " could not make a child.");
    } 
    else if(randomIntAB(0,1) == 0){
        if (randomIntAB(0,1) == 0){
            gender = "boy";
        }
        else {
            gender = "girl";
        }

        prompt_name_child = prompt("It is a " + gender + "! Name your baby: ");

        //add child to children object
        children[Object.keys(children).length + 1] = [prompt_name_child + " " + father_nomen + " " + father_cognomen, 100, 0, (player_looks + family["spouse"][3])/2 + randomIntAB(-10, 10), player_reputation, gender];
        
        //create event in console
        createEvent("You and " + family["spouse"][0] + " have made a child!");
    
        //allow child tab to be opened, dependent on number of children
        if (Object.keys(children).length == 1){
            document.getElementById("child1_tab").style.display = "block";
        } else if(Object.keys(children).length == 2){
            document.getElementById("child2_tab").style.display = "block";
        }else if(Object.keys(children).length == 3){
            document.getElementById("child3_tab").style.display = "block";
        }else if(Object.keys(children).length == 4){
            document.getElementById("child4_tab").style.display = "block";
        }else if(Object.keys(children).length == 5){
            document.getElementById("child5_tab").style.display = "block";
        }else if(Object.keys(children).length == 6){
            document.getElementById("child6_tab").style.display = "block";
        }else if(Object.keys(children).length == 7){
            document.getElementById("child7_tab").style.display = "block";
        }else if(Object.keys(children).length == 8){
            document.getElementById("child8_tab").style.display = "block";
        }else if(Object.keys(children).length == 9){
            document.getElementById("child9_tab").style.display = "block";
        }else if(Object.keys(children).length == 10){
            document.getElementById("child10_tab").style.display = "block";
        }
 

        exitMenu()
    }
    else{
        createEvent("You and " + family["spouse"][0] + " could not make a child.");
        exitMenu()
    }
}

//make lover

//making spouse
var spouse_name;
var spouse_age;
var spouse_reputation;
var spouse_looks;

function generateSpouse(){
    var random_ages = [12,13,14,15];

    spouse_name = randomNameGenerator("female", "roman");
    spouse_age = String(random_ages[randomInt(3)]);
    spouse_looks = randomInt(100);
    spouse_reputation = randomInt(100);

    document.getElementById("generate_spouse_name").innerHTML = spouse_name;
    document.getElementById("generate_spouse_age").innerHTML = "Age: " + spouse_age;
    setBar("spouse_reputation", spouse_reputation);
    setBar("spouse_looks", spouse_looks);

}

function marrySpouse(){
    createEvent("You got married to " + spouse_name);
    //bar
    changeBar("happiness", 20);
    //add spouse to family
    //spouse is happier if you are good looking
    var spouse_relation;
    if (player_looks > 70){
        spouse_relation = 100;
    } else{
        spouse_relation = 70;
    }
    //relation = name, relation strength, age, looks, repuatation
    family["spouse"] = [spouse_name, spouse_relation, parseInt(spouse_age), spouse_looks, player_reputation];
    document.getElementById("spouse_searcher").style.display = "none";
    
    //create spouse tab
    document.getElementById("spouse_tab").style.display = "block";
    exitMenu();
}




function pray(){
    var drop_down_value = document.getElementById("pray_god").value;
    createEvent("You prayed to " + drop_down_value);
    //increase reputation
    changeBar("reputation", 10);
    exitMenu();

}

function offer(){
    var drop_down_god = document.getElementById("offer_god").value;
    var drop_down_offering = document.getElementById("offering_type").value;
    createEvent("You made a " + drop_down_offering + " offering to " + drop_down_god);

    //increase reputation
    changeBar("reputation", 10);
    exitMenu();

}




//generate class/career
var social_class;
var father_reputation;
var player_reputation;
var father_career;

function classCareer(){
    if (randomInt(15) == 1){
        social_class = "pat";
        father_reputation = randomIntAB(70,100);
        player_reputation = father_reputation;

        var patrician_careers = ["Quaestor", "Aedile", "Magistrate", "Tribune", "Senator", "Legatus"];
        father_career = patrician_careers[randomInt(patrician_careers.length)];

    } else if (randomInt(10) == 1){
        social_class = "eq";
        father_reputation = randomIntAB(50,80);
        player_reputation = father_reputation;

        var equite_careers = ["Quaestor", "Aedile", "Magistrate", "Tribune", "Legatus"];

        father_career = equite_careers[randomInt(equite_careers.length)];


    } else{
        social_class = "pleb";
        father_reputation = randomIntAB(0,50);
        player_reputation = father_reputation;

        var pleb_careers = ["Pedes", "Aquilifier", "Optio", "Centurion", "Primus Pilus", "Farmer", "Carpenter", "Craftsman", "Merchant", "Smith", "Laborer"];

        father_career = pleb_careers[randomInt(pleb_careers.length)];
    }
}


//create parent variables outside function for global access
var father_name = randomNameGenerator("male", "roman");
var father_looks = randomInt(100);
var father_age = randomIntAB(18, 40);
var mother_name = randomNameGenerator("female", "roman");
var mother_looks = randomInt(100);
var mother_age = randomIntAB(16, 32 );

//split fathers name
var fathers_name_split = father_name.split(" ");
var father_nomen = fathers_name_split[1];
var father_cognomen = fathers_name_split[2];

// create player variables globally
var player_happiness = randomInt(100);
var player_strength = randomInt(100);
var player_looks = (father_looks + mother_looks)/2;

function set(){
    //set class and father reputation
    classCareer();

    //generate family members
    //relation = name, relation strength, age, looks, repuatation
    family["father"] = [father_name, 100, father_age, father_looks, father_reputation, social_class, father_career];
    family["mother"] = [mother_name, 100, mother_age, mother_looks, father_reputation, social_class ];

    //Generate Siblings
    family["brother"] = [praenomen[randomInt(praenomen.length)] + " " + father_nomen + " " + father_cognomen, 100, randomIntAB(1,4), (father_looks + mother_looks)/2, father_reputation, social_class];
    family["sister"] = [father_nomen.slice(0,-2) + "a", 100, randomIntAB(1,4), (father_looks + mother_looks)/2, father_reputation, social_class];

    //Generate Player
    setBar("reputation", player_reputation);
    setBar("happiness", player_happiness);
    setBar("strength", player_strength);
    setBar("looks", player_looks);


    //create name
    player_name = praenomen[randomInt(praenomen.length)] + " " + father_nomen + " " + father_cognomen;
    document.getElementById("name").innerHTML = player_name;

    //add player to object
    family["player"] = [player_name, 0, player_looks, player_reputation, social_class];



    //close pop_up
    closePopUp();
}



function main(){
    time();
    autoscroll("console");
    timeline();
    careerProgression();

    var history_time_line = true;
    if (history_time_line == true){
        consoleEvents();
    }
    
}

