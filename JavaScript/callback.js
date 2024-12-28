

function databaseSharing() {
    console.log("Data Stored Successfully");
}

function submitForm(formMsg,dbs){
    setTimeout(()=>{
        dbs()
        console.log(formMsg)
    },6000)
}
submitForm("Form submitted successfully",databaseSharing)
