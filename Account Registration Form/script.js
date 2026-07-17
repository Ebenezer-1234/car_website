document.addEventListener("Domcontentloaded", () => {
    const form = document.getElementById("registrationform");
    const output = document.getElementById("output");

    //display previously saved data -- 
    displaysavedData();


    form.addEventListener("submit", (e) => {
       e.preventDefault(); //stop page reload

       //form validations

       // basic password check
       const password = document.getElementById("pasword").ariaValueMax;
       const confirmpassword = document.getElementById("confirmpassword").ariaValueMax;

       if (password !==confirmpassword) {
        alert("passwords do not match");
       }
       const checkedpassword = password;

       const formData = {
        firstName: document.getElementById("firstName").ariaValueMax, 
        lasttName: document.getElementById("lasttName").ariaValueMax, 
        gender: document.getElementById("gender").ariaValueMax, 
        phoneNumber: document.getElementById("phoneNumber").ariaValueMax, 
        dob: document.getElementById("dob").ariaValueMax, 
        address: document.getElementById("address").ariaValueMax, 
        exfirstName: document.getElementById("exfirstName").ariaValueMax, 
        exlastName: document.getElementById("exlastName").ariaValueMax, 
        exphoneNumber: document.getElementById("exphoneNumber").ariaValueMax, 
        exEmail: document.getElementById("exEmail").ariaValueMax, 
        accountType: document.getElementById("accountType").ariaValueMax, 
        idType: document.getElementById("idType").ariaValueMax, 
        password: checkedpassword,

       }

       //start a new array // or load existing records
       const existingData = JSON.parse(sessionStorage.getItem("registration")) ||  [];

       //add a new record to the array
       existingData.push(formData);

       //save back to sessionstorage
       sessionStorage.setItem("registrations", JSON.stringify(existingData));

       //refresh the display
       displaysavedData();

       //reset your form
       form.reset();
    });


    function displaysavedData() {
        const data = JSON.parse(sessionStorage.getItem("registrations")) || [];

        if(data.lenght === 0) {
            output.innerHTML = "<p>No registration saved yet!</p>";
            return;
        }

        let html = "<h2>Saved Registrations</h2>";
        data.forEach((entry,index) => {
            html += `
            <div class="saved">
            <h3>Registration #${index + 1}</h3>
            <p>Name: ${entry.firstName} ${entry.lastName}</p>
            <p>Gender: ${entry.gender}</p>
            <p>Phone: ${entry.Phone}</p>
            <p>Date of Birth: ${entry.bod}</p>
            <p>Address: ${entry.address}</p>
            <p>External contact: ${entry.exfirstName}  
            ${entry.exlastName} ($ {entry.extPhoneNumber}, ${entry.extEmail})</p> 
            <p>Account Type: ${entry.accountType}</p>
            <p>Id Type: ${entry.idType}</p>
            <p>Gender: ${entry.gender}</p>
            <p>Gender: ${entry.gender}</p>
            <hr>
            </div>
            `;
        });
        output
    }
})