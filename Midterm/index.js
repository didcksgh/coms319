let number = 0;
let w = 0, m = 0, r = 0, memorialUnion = 0, sg = 0, c = 0;
let picture = 0, others = 0;;
fetchJSON();





    function returnText() {

        console.log(number);
        
        let input = document.getElementById("myText").value;
        input = input.toLowerCase();
        console.log(input);
    
        if (input == "welch hall" && w < 1) { 

            number = 1;
            w = 1;
            fetchJSON();
            
        } else if ((input == "maple willow larch hall" || input == "maple hall" || input == "willow hall" || input == "larch hall") && ma < 1) {

            number = 2;
            m = 1;
            fetchJSON();
            

        } else if (input == "roberts hall" && r < 1) {


            number = 3;
            r = 1;
            fetchJSON();
            

        } else if (input == "memorial unoin" && memorialUnion < 1) {

            number = 4;
            memorialUnion = 1;
            fetchJSON();
            

        } else if (input == "state gym"  && sg< 1) {

            number = 5;
            sg = 1;
            fetchJSON();
            

        } else if (input == "campanile" && c < 1) {

            number = 6;
            c = 1;
            fetchJSON();
            

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
    
    var string = document.getElementById("myData");
    var div = document.createElement("div");
    var div2 = document.createElement("div2");
    var div3 = document.createElement("div3");
    var div4 = document.createElement("div4");
    var div5 = document.createElement("div5");
    var div6 = document.createElement("div6");
    var welch = document.getElementById("welch");
    var maple = document.getElementById("maple");
    var roberts = document.getElementById("roberts");
    var mu = document.getElementById("mu");
    var stategym = document.getElementById("stategym");
    var campanile = document.getElementById("campanile");


    div.innerHTML = `<img src = ${data.dorms[0].imageURL} width="450" height="250">`;
    welch.appendChild(div);
    
    div2.innerHTML = `<img src = ${data.dorms[1].imageURL} width="450" height="250">`;
    maple.appendChild(div2);

    div3.innerHTML = `<img src = ${data.dorms[2].imageURL} width="450" height="250">`;
    roberts.appendChild(div3);







    div4.innerHTML = `<img src = ${data.otherBuildings[0].imageURL} width="450" height="250">`;
    mu.appendChild(div4);
    
    div5.innerHTML = `<img src = ${data.otherBuildings[1].imageURL} width="450" height="250">`;
    stategym.appendChild(div5);

    div6.innerHTML = `<img src = ${data.otherBuildings[2].imageURL} width="450" height="250">`;
    campanile.appendChild(div6);
   


    if(number == 1) {

       // var div = document.createElement("div");
        
        div.innerHTML = `<br><br>Name of the building: ${data.dorms[0].name} <br> Year built: ${data.dorms[0].yearBuilt} <br> Address: ${data.dorms[0].Address} <br> Hours: ${data.dorms[0].Hours} <br> `;
        welch.appendChild(div);

    } else if (number == 2) {

       // var div = document.createElement("div");
     
        div2.innerHTML = `<br><br><br>Name of the building: ${data.dorms[1].name} <br> Year built: ${data.dorms[1].yearBuilt} <br> Address: ${data.dorms[1].Address} <br> Hours: ${data.dorms[1].Hours} <br>`;
        maple.appendChild(div2);

    } else if (number == 3) {

        //var div = document.createElement("div");
     
        div3.innerHTML = `<br><br><br>Name of the building: ${data.dorms[2].name} <br> Year built: ${data.dorms[2].yearBuilt} <br> Address: ${data.dorms[2].Address} <br> Hours: ${data.dorms[2].Hours}<br>`;
        roberts.appendChild(div3);

    } else if (number == 4) {

        div4.innerHTML = `Name of the building: ${data.otherBuildings[0].name} <br> Year built: ${data.otherBuildings[0].yearBuilt} <br> Address: ${data.otherBuildings[0].Address} <br> Hours: ${data.otherBuildings[0].Hours}`;
        string.appendChild(div4);

    } else if (number == 5) {

        div5.innerHTML = `Name of the building: ${data.otherBuildings[1].name} <br> Year built: ${data.otherBuildings[1].yearBuilt} <br> Address: ${data.otherBuildings[1].Address} <br> Hours: ${data.otherBuildings[1].Hours}`;
        string.appendChild(div5);

    } else if (number == 6) {

        div6.innerHTML = `Name of the building: ${data.otherBuildings[2].name} <br> Year built: ${data.otherBuildings[2].yearBuilt} <br> Address: ${data.otherBuildings[2].Address} <br> Hours: ${data.otherBuildings[2].Hours}`;
        string.appendChild(div6);

    }   

   /* for(var i = 0; i < data.length; i++) {

        var div = document.createElement("div");
        div.innerHTML = `${data[i].Address}`;
        string.appendChild(div);

    }
*/
        

    

}