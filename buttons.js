//button and event management


function popUp(){
    document.getElementById("overlay").style.display = "block";

}
let closePopUp = function(){
    document.getElementById("start_game").style.display = "none";
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup3").style.display = "none";

}
function openNav() {
    document.getElementById("nav").style.width = "100%";
}
function exitMenu(){    
    //close all menus
    document.getElementById("actions_menu").style.display = "none";
    document.getElementById("family_menu").style.display = "none";
    document.getElementById("occupation_menu").style.display = "none";
    document.getElementById("assets_menu").style.display = "none";


    document.getElementById("nav").style.width = "0%";
    document.getElementById("nav2").style.width = "0%";
    document.getElementById("spouse_searcher").style.width = "0%";
    document.getElementById("pray_nav").style.width = "0%";
    document.getElementById("offer_nav").style.width = "0%";
    document.getElementById("join_army_nav").style.width = "0%";
    document.getElementById("be_doctor_nav").style.width = "0%";
    document.getElementById("be_craftsman_nav").style.width = "0%";
    document.getElementById("be_merchant_nav").style.width = "0%";
    document.getElementById("be_farmer_nav").style.width = "0%";
    document.getElementById("be_gladiator_nav").style.width = "0%";


    //close all objects
    document.getElementById("mingle_box").style.display = "none";
    document.getElementById("temple_box").style.display = "none";
    document.getElementById("entertainment_box").style.display = "none";
    document.getElementById("bath_box").style.display = "none";
    document.getElementById("politics_box").style.display = "none";

    //family objects
    document.getElementById("father_box").style.display = "none";
    document.getElementById("mother_box").style.display = "none";
    document.getElementById("sister_box").style.display = "none";
    document.getElementById("brother_box").style.display = "none";
    document.getElementById("spouse_box").style.display = "none";
    document.getElementById("child_box_1").style.display = "none";
    document.getElementById("child_box_2").style.display = "none";
    document.getElementById("child_box_3").style.display = "none";
    document.getElementById("child_box_4").style.display = "none";
    document.getElementById("child_box_5").style.display = "none";
    document.getElementById("child_box_6").style.display = "none";
    document.getElementById("child_box_7").style.display = "none";
    document.getElementById("child_box_8").style.display = "none";
    document.getElementById("child_box_9").style.display = "none";
    document.getElementById("child_box_10").style.display = "none";

}
function actionMenu(clicked_id){
    if (clicked_id == "actions"){
        document.getElementById("actions_menu").style.display = "block";
        document.getElementById("family_menu").style.display = "none";
        document.getElementById("occupation_menu").style.display = "none";
        document.getElementById("assets_menu").style.display = "none";

    }else if (clicked_id == "family"){
        document.getElementById("family_menu").style.display = "block";
        document.getElementById("actions_menu").style.display = "none";
        document.getElementById("occupation_menu").style.display = "none";
        document.getElementById("assets_menu").style.display = "none";

    }else if(clicked_id == "occupation"){
        //show career box
        if (occupation.length == 4){
            document.getElementById("occupation_info").style.display = "block";
            document.getElementById("occupation_name").innerHTML = occupation[0];
            document.getElementById("occupation_years").innerHTML = String(occupation[1]);
            document.getElementById("occupation_income").innerHTML = String(occupation[2]);
            setBar("occupation_happiness", occupation[3]);
        }

        document.getElementById("occupation_menu").style.display = "block";
        document.getElementById("family_menu").style.display = "none";
        document.getElementById("actions_menu").style.display = "none";
        document.getElementById("assets_menu").style.display = "none";

    }else if(clicked_id == "assets"){
        document.getElementById("assets_menu").style.display = "block";
        document.getElementById("occupation_menu").style.display = "none";
        document.getElementById("family_menu").style.display = "none";
        document.getElementById("actions_menu").style.display = "none";

    }
}

function secondMenu(clicked_id){
    document.getElementById("nav2").style.width = "100%";

    if (clicked_id == "mingle"){
        document.getElementById("mingle_box").style.display = "block";
    } else if (clicked_id == "temple"){
        document.getElementById("temple_box").style.display = "block";
    }else if (clicked_id == "enjoy"){
        document.getElementById("entertainment_box").style.display = "block";
    }else if (clicked_id == "bath"){
        document.getElementById("bath_box").style.display = "block";
    }else if (clicked_id == "politics"){
        document.getElementById("politics_box").style.display = "block";
    } 

    else if (clicked_id == "father_tab"){
        document.getElementById("father_box").style.display = "block";

        //set father info
        document.getElementById("father_name").innerHTML = family["father"][0];
        document.getElementById("father_age").innerHTML = String(family["father"][2]);
        setBar("father_relation_score", family["father"][1]);
        setBar("father_reputation", family["father"][4]);
        setBar("father_looks", family["father"][3]);

    }else if (clicked_id == "mother_tab"){
        document.getElementById("mother_box").style.display = "block";

        //set mother info
        document.getElementById("mother_name").innerHTML = family["mother"][0];
        document.getElementById("mother_age").innerHTML = String(family["mother"][2]);
        setBar("mother_relation_score", family["mother"][1]);
        setBar("mother_reputation", family["mother"][4]);
        setBar("mother_looks", family["mother"][3]);

    } else if (clicked_id == "brother_tab"){
        document.getElementById("brother_box").style.display = "block";

        //set brother info
        document.getElementById("brother_name").innerHTML = family["brother"][0];
        document.getElementById("brother_age").innerHTML = String(family["brother"][2]);
        setBar("brother_relation_score", family["brother"][1]);
        setBar("brother_reputation", family["brother"][4]);
        setBar("brother_looks", family["brother"][3]);

    }else if (clicked_id == "sister_tab"){
        document.getElementById("sister_box").style.display = "block";

        //set sister info
        document.getElementById("sister_name").innerHTML = family["sister"][0];
        document.getElementById("sister_age").innerHTML = String(family["sister"][2]);
        setBar("sister_relation_score", family["sister"][1]);
        setBar("sister_reputation", family["sister"][4]);
        setBar("sister_looks", family["sister"][3]);

    }else if (clicked_id == "spouse_tab"){
        //set spouse info
        document.getElementById("spouse_name").innerHTML = family["spouse"][0];
        document.getElementById("spouse_age").innerHTML = String(family["spouse"][2]);
        setBar("spouse_relation_score", family["spouse"][1]);
        setBar("spouse_reputation", family["spouse"][4]);
        setBar("spouse_looks", family["spouse"][3]);
    }else if (clicked_id == "child1_tab"){
        document.getElementById("child_box_1").style.display = "block";

    }else if (clicked_id == "child2_tab"){
        document.getElementById("child_box_2").style.display = "block";
    }else if (clicked_id == "child3_tab"){
        document.getElementById("child_box_3").style.display = "block";
    }else if (clicked_id == "child4_tab"){
        document.getElementById("child_box_4").style.display = "block";
    }else if (clicked_id == "child5_tab"){
        document.getElementById("child_box_5").style.display = "block";
    }else if (clicked_id == "child6_tab"){
        document.getElementById("child_box_6").style.display = "block";
    }else if (clicked_id == "child7_tab"){
        document.getElementById("child_box_7").style.display = "block";
    }else if (clicked_id == "child8_tab"){
        document.getElementById("child_box_8").style.display = "block";
    }else if (clicked_id == "child9_tab"){
        document.getElementById("child_box_9").style.display = "block";
    }else if (clicked_id == "child10_tab"){
        document.getElementById("child_box_10").style.display = "block";
    }

}


//open other menus
function findSpouse(){
    document.getElementById("spouse_searcher").style.width = "100%";
    generateSpouse();
}
function openPrayer(){
    document.getElementById("pray_nav").style.width = "100%";
}
function openOffer(){
    document.getElementById("offer_nav").style.width = "100%";
}
function openArmy(){
    document.getElementById("join_army_nav").style.width = "100%";
}
function beDoctor(){
    document.getElementById("be_doctor_nav").style.width = "100%";
}
function beCrafts(){
    document.getElementById("be_craftsman_nav").style.width = "100%";
}
function beMerchant(){
    document.getElementById("be_merchant_nav").style.width = "100%";
}
function beFarmer(){
    document.getElementById("be_farmer_nav").style.width = "100%";
}
function beGladiator(){
    document.getElementById("be_gladiator_nav").style.width = "100%";
}