function onChanged() {
    var toggleButton = document.getElementById("flexSwitch");
    if (toggleButton.checked) {
        document.body.classList.remove("bg-cyan");
        document.body.classList.add("bg-dark");
    } else {
        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-cyan");
    }
}

// function getWorkExperience() {
//     var today = new Date();
//     var todayString = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
//     var todayDate = new Date(todayString);
    
//     var joiningDate = new Date('03/18/2012');
    
//     var differenceInTime = todayDate.getTime() - joiningDate.getTime();
//     var differenceInDays = differenceInTime / (1000 * 3600 * 24);
//     return ((differenceInDays / 365) - 1).toFixed(1);
// }

// function getYearPassed(date1, date2) {   
//     var differenceInTime = date2.getTime() - date1.getTime();
//     var differenceInDays = differenceInTime / (1000 * 3600 * 24);
//     return ((differenceInDays / 365)).toFixed(1);
// }
