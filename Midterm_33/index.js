fetchJSON();

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
    let dorm = document.getElementById("dormitory");
    div.innerHTML = `<img src = ${data.homepage[0].imageURL} width = "450" height = "250">`;
    dorm.appendChild(div);

    let div2 = document.createElement("div2");
    let ISU = document.getElementById("ISU");
    div2.innerHTML = `<img src = ${data.homepage[1].imageURL} width = "450" height = "250">`;
    ISU.appendChild(div2);


}