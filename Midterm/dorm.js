let number = 0;
let w = 0, m = 0, r = 0;
let picture = 0, welch = "welch", maple = "maple", roberts = "roberts";
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

            if ((input == "welch hall" && w < 1)) {

                number = 1;
                w = 1;
                fetchJSON();

            };

            break;

            case "maple":

            if (((input == "maple willow larch hall" || input == "maple hall" || input == "willow hall" || input == "larch hall") && m < 1)) {

                number = 2;
                m = 1;
                fetchJSON();
                
    
            };

            break;

            case "roberts":

            if ((input == "roberts hall" && r < 1)) {

                number = 3;
                r = 1;
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

    let welchh = document.getElementById("welch2");
    let mapleh = document.getElementById("maple2");
    let robertsh = document.getElementById("roberts2");


    if(picture == 0) {

    div.innerHTML = `<img src = ${data.dorms[0].imageURL} width="450" height="250">`;
    welchh.appendChild(div);
    
    div2.innerHTML = `<img src = ${data.dorms[1].imageURL} width="450" height="250">`;
    mapleh.appendChild(div2);

    div3.innerHTML = `<img src = ${data.dorms[2].imageURL} width="450" height="250">`;
    robertsh.appendChild(div3);

        picture = 1;

    }

   


    if(number == 1) {

        div.innerHTML = `<br><br>Name of the building: ${data.dorms[0].name} <br> Year built: ${data.dorms[0].yearBuilt} <br> Address: ${data.dorms[0].Address} <br> Hours: ${data.dorms[0].Hours} <br>`;
        welchh.appendChild(div);

    } else if (number == 2) {

        div2.innerHTML = `<br><br><br>Name of the building: ${data.dorms[1].name} <br> Year built: ${data.dorms[1].yearBuilt} <br> Address: ${data.dorms[1].Address} <br> Hours: ${data.dorms[1].Hours} <br>`;
        mapleh.appendChild(div2);

    } else if (number == 3) {
     
        div3.innerHTML = `<br><br><br>Name of the building: ${data.dorms[2].name} <br> Year built: ${data.dorms[2].yearBuilt} <br> Address: ${data.dorms[2].Address} <br> Hours: ${data.dorms[2].Hours}<br>`;
        robertsh.appendChild(div3);

    }

    

}