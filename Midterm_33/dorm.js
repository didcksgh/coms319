let choice = 999;
let welchCheck = 0, mapleCheck = 0, robertsCheck = 0, welch = "welch", maple = "maple", roberts = "roberts";
let picture = 0;
let input = "";

fetchJSON();

    function answerWelch(){


        if (document.getElementById("myText").value != "") {

            input = document.getElementById("myText").value;
            input = input.toLowerCase();

       }

        returnText(welch);

    }

    function answerMaple(){


        if (document.getElementById("myText2").value != "") {

            input = document.getElementById("myText2").value;
            input = input.toLowerCase();

       }

        returnText(maple);     

    }

    function answerRoberts(){

        if (document.getElementById("myText3").value != "") {

            input = document.getElementById("myText3").value;
            input = input.toLowerCase();
    
       }    

        returnText(roberts);

    }

    function showWelch() {

        input="welch hall";

    
        returnText(welch);
        

    }

    function showMaple() {

        input = "maple hall";
        

        returnText(maple);

    }

    function showRoberts() {

        input = "roberts hall";

        returnText(roberts);

    }



    function returnText(type) {

        switch(type) {

            case "welch":

            if ((input == "welch hall" && welchCheck < 1)) {

                choice = 0;
                welchCheck = 1;
                fetchJSON();

            };

            break;

            case "maple":

            if (((input == "maple willow larch hall" || input == "maple willow larch commons" || input == "maple hall" || input == "willow hall" || input == "larch hall") && mapleCheck < 1)) {

                choice = 1;
                mapleCheck = 1;
                fetchJSON();
                
    
            };

            break;

            case "roberts":

            if ((input == "roberts hall" && robertsCheck < 1)) {

                choice = 2;
                robertsCheck = 1;
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

    let welch = document.getElementById("welch");
    let maple = document.getElementById("maple");
    let roberts = document.getElementById("roberts");


    if (picture == 0) {

    div.innerHTML = `<img src = ${data.dorms[0].imageURL} width="450" height="250">`;
    welch.appendChild(div);
    
    div2.innerHTML = `<img src = ${data.dorms[1].imageURL} width="450" height="250">`;
    maple.appendChild(div2);

    div3.innerHTML = `<img src = ${data.dorms[2].imageURL} width="450" height="250">`;
    roberts.appendChild(div3);

        picture = 1;

    }

   


    if(choice == 0) {

        div.innerHTML = `<br><br>Name of the building: ${data.dorms[0].name} <br> Year built: ${data.dorms[0].yearBuilt} <br> Address: ${data.dorms[0].Address} <br> Hours: ${data.dorms[0].Hours} <br>`;
        welch.appendChild(div);

    } else if (choice == 1) {

        div2.innerHTML = `<br><br><br>Name of the building: ${data.dorms[1].name} <br> Year built: ${data.dorms[1].yearBuilt} <br> Address: ${data.dorms[1].Address} <br> Hours: ${data.dorms[1].Hours} <br>`;
        maple.appendChild(div2);

    } else if (choice == 2) {
     
        div3.innerHTML = `<br><br><br>Name of the building: ${data.dorms[2].name} <br> Year built: ${data.dorms[2].yearBuilt} <br> Address: ${data.dorms[2].Address} <br> Hours: ${data.dorms[2].Hours}<br>`;
        roberts.appendChild(div3);

    }
    

}