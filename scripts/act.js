document.addEventListener("DOMContentLoaded", () => {


    for(c of categories) {
        categorySelect.appendChild(new Option(c));
    }

categorySelect.addEventListener("change", () => {
    activitySelect.innerHTML = "";
    activitySelect.appendChild(new Option("Select an Activity"));
    for(a of activities) {
        if (a.category === categorySelect.value) {
            activitySelect.appendChild(new Option(a.name));
        }
    }
});

    activitySelect.addEventListener("change", ()=>{
        console.log("activity changing")
        for(a of activities) {
            console.log("one activity")
            console.log(a)
            console.log(activitySelect.value)
            if(a.name === activitySelect.value) {
                console.log("found match")
                for(key in a) { //a is the activity object
                    console.log("one key")
                    details.innerHTML += `
                        <tr><th> ${key} </th></td> ${a[key]} </th></td></tr>
                    `;
                }
            }
        }
    })




});
