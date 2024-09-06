////Step 1
function AddCountry(){
    var land = document.getElementById("country").value;

    if (land) {

        var newList = document.createElement("li");
        newList.textContent = land;

        //// Step 2: Delete
        var deleteIcon = document.createElement("i");
        deleteIcon.className = "material-icons";
        deleteIcon.textContent = "delete";
        deleteIcon.addEventListener("click", function() {
            newList.remove();
        });
        newList.appendChild(deleteIcon);
        //

        document.getElementById("countrylist").appendChild(newList);
    

        document.getElementById("country").value="";
        list.push(land) 
    }
}
document.getElementById("addButton").addEventListener("click", AddCountry);

////Step 3: Search functions A
function A (element, searchWord) {
    if (element.toLowerCase().startsWith (searchWord.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}
console.log(A("Forfatter", "For")); // True
console.log(A("Forfatter", "for")); // false


////Step 3: Search functions B
function B (list, searchWord) {
    const lister = list.filter(element => A(element, searchWord));
    return lister;
}
// let list = ["India","Norway","Denmark","Sweden","Indonesia"];
// let searchWord = "Ind";

// let result = B(list, searchWord);
// console.log(result);



////Step 4: Integrating search
let list = [];

document.getElementById('searchitem').addEventListener('keyup', function(){
    var value = this.value;
    console.log("value", value) 
    var data = step4(value, list)
    console.log("Filtered Data:", data)
});

function step4(value, data){
    var searchdata = [];

    for (var i = 0; i < data.length; i++) {
        value = value.toLowerCase();
        var name = data[i].toLowerCase();

        if (name.startsWith(value)) {
            searchdata.push(data[i]);
        }
    }

    document.getElementById('countrylist').innerHTML = '';
    searchdata.forEach(function(country) {
        var newList = document.createElement("li");
        newList.textContent = country;

        document.getElementById("countrylist").appendChild(newList);
    });

    return searchdata;
}





