var century, year, month, date;

//validate the inputs 
function readInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
 
//Give alert if the input data is outside the range
    if (century < 0 || century >= 22){
        alert("Enter a valid century");
        return false;
    } else if ( year < 0 || year >= 2020){
        alert("Enter a valid year")
        return false;
    } else if (month < 0 || month > 12){
        alert("Enter a valid month number");
        return false;
    } else if (date < 0 || date >31){
        alert("Enter a valid date");
    }

}
