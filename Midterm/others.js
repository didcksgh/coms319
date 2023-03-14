let number = 0;
let m = 0, s = 0, c = 0;
let picture = 0, mu = "mu", stategym = "stategym", campanile = "campanile";
let input = "";

fetchJSON();

    function answerMU(){
        if (document.getElementById("myText").value != "") {

            input = document.getElementById("myText").value;
            input = input.toLowerCase();

        }
        returnText(mu);
    }

    function answerSG(){
        if (document.getElementById("myText2").value != "") {

            input = document.getElementById("myText2").value;
            input = input.toLowerCase();

       }

        returnText(stategym);     
    }

    function answerCamp(){

        if (document.getElementById("myText3").value != "") {

            input = document.getElementById("myText3").value;
            input = input.toLowerCase();
    
       }    
        returnText(campanile);
    }

    function showMU() {

        input="memorial union";

    
        returnText(mu);
        

    }

    function showSG() {

        input = "state gym";
        

        returnText(stategym);

    }

    function showCamp() {

        input = "campanile";

        returnText(campanile);

    }



    function returnText(type) {


        switch(type) {

            case "mu":

            if (input == "memorial union" && m < 1) {

                number = 1;
                m = 1;
                fetchJSON();

            };

            break;

            case "stategym":

            if (input == "state gym" && s < 1) {

                number = 2;
                s = 1;
                fetchJSON();
                
    
            };

            break;

            case "campanile":

            if (input == "campanile" && c < 1) {

                number = 3;
                c = 1;
                fetchJSON();
    
            };

            break;

        }
        input = undefined;
        
        
       
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

    let muh = document.getElementById("mu2");
    let sgh = document.getElementById("stategym2");
    let ch = document.getElementById("campanile2");


    if(picture == 0) {

        div.innerHTML = `<img src = ${data.otherbuildings[0].imageURL} width="450" height="250">`;
        muh.appendChild(div);
    
        div2.innerHTML = `<img src = ${data.otherbuildings[1].imageURL} width="450" height="250">`;
        sgh.appendChild(div2);

        div3.innerHTML = `<img src = ${data.otherbuildings[2].imageURL} width="450" height="250">`;
        ch.appendChild(div3);

        picture = 1;

    }

   


    if(number == 1) {

        div.innerHTML = `<br><br>Name of the building: ${data.otherbuildings[0].name} <br> Year built: ${data.otherbuildings[0].yearBuilt} <br> Address: ${data.otherbuildings[0].Address} <br> Hours: ${data.otherbuildings[0].Hours} <br>`;
        muh.appendChild(div);

    } else if (number == 2) {

        div2.innerHTML = `<br><br><br>Name of the building: ${data.otherbuildings[1].name} <br> Year built: ${data.otherbuildings[1].yearBuilt} <br> Address: ${data.otherbuildings[1].Address} <br> Hours: ${data.otherbuildings[1].Hours} <br>`;
        sgh.appendChild(div2);

    } else if (number == 3) {
     
        div3.innerHTML = `<br><br><br>Name of the building: ${data.otherbuildings[2].name} <br> Year built: ${data.otherbuildings[2].yearBuilt} <br> Address: ${data.otherbuildings[2].Address} <br> Hours: ${data.otherbuildings[2].Hours}<br>`;
        ch.appendChild(div3);

    }

    

}