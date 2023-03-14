let choice = 999;
let muCheck = 0, stategymCheck = 0, campanileCheck = 0, memorialUnion = "memorialUnion", stategym = "stategym", campanile = "campanile";

let picture = 0;
let input = "";

fetchJSON();

    function answerMU(){


        if (document.getElementById("myText").value != "") {

            input = document.getElementById("myText").value;
            input = input.toLowerCase();

       }

        returnText(memorialUnion);

    }

    function answerStategym(){


        if (document.getElementById("myText2").value != "") {

            input = document.getElementById("myText2").value;
            input = input.toLowerCase();

       }

        returnText(stategym);     

    }

    function answerCampanile(){

        if (document.getElementById("myText3").value != "") {

            input = document.getElementById("myText3").value;
            input = input.toLowerCase();
    
       }    

        returnText(campanile);

    }

    function showMU() {

        input="memorial union";
        returnText(memorialUnion);
        

    }

    function showStategym() {

        input = "state gym";
        returnText(stategym);

    }

    function showCampanile() {

        input = "campanile";
        returnText(campanile);

    }



    function returnText(type) {

        switch(type) {

            case "memorialUnion":

            if ((input == "memorial union" && muCheck < 1)) {

                choice = 0;
                muCheck = 1;
                fetchJSON();

            };

            break;

            case "stategym":

            if (((input == "state gym" || input == "stategym") && stategymCheck < 1)) {

                choice = 1;
                stategymCheck = 1;
                fetchJSON();
    
            };

            break;

            case "campanile":

            if ((input == "campanile" && campanileCheck < 1)) {

                choice = 2;
                campanileCheck = 1;
                fetchJSON();
    
            };

            break;

        }
       
    }

function fetchJSON() {

    
    fetch("data.json") 
    .then(function(response) {

        return response.json();

    })
    .then(function(data) {

        appendData(data);

    })

}

function appendData(data) {
    
  
    let div = document.createElement("div");
    let div2 = document.createElement("div2");
    let div3 = document.createElement("div3");

    let mu = document.getElementById("mu");
    let stategym = document.getElementById("stategym");
    let campanile = document.getElementById("campanile");


    if (picture == 0) {

    div.innerHTML = `<img src = ${data.otherBuildings[0].imageURL} width="450" height="250">`;
    mu.appendChild(div);
    
    div2.innerHTML = `<img src = ${data.otherBuildings[1].imageURL} width="450" height="250">`;
    stategym.appendChild(div2);

    div3.innerHTML = `<img src = ${data.otherBuildings[2].imageURL} width="450" height="250">`;
    campanile.appendChild(div3);

        picture = 1;

    }

   

    if(choice == 0) {

        div.innerHTML = `<br><br>Name of the building: ${data.otherBuildings[0].name} <br> Year built: ${data.otherBuildings[0].yearBuilt} <br> Address: ${data.otherBuildings[0].Address} <br> Hours: ${data.otherBuildings[0].Hours} <br>`;
        mu.appendChild(div);

    } else if (choice == 1) {

        div2.innerHTML = `<br><br><br>Name of the building: ${data.otherBuildings[1].name} <br> Year built: ${data.otherBuildings[1].yearBuilt} <br> Address: ${data.otherBuildings[1].Address} <br> Hours: ${data.otherBuildings[1].Hours} <br>`;
        stategym.appendChild(div2);

    } else if (choice == 2) {
     
        div3.innerHTML = `<br><br><br>Name of the building: ${data.otherBuildings[2].name} <br> Year built: ${data.otherBuildings[2].yearBuilt} <br> Address: ${data.otherBuildings[2].Address} <br> Hours: ${data.otherBuildings[2].Hours}<br>`;
        campanile.appendChild(div3);

    }
    

}

