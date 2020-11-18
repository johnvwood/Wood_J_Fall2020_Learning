(()=> {

// XMLHttp object THIS IS AJAX BTW
let myReq = new XMLHttpRequest;
// readies us for the introduction of new database info
myReq.addEventListener("readystatechange", handleRequest);
// opens our database to get the info
myReq.open('GET', './DataSet.json');
// sends the request for the info
myReq.send();
// handleRequest function (copy and paste it around idc)
function handleRequest() {
    if (myReq.readyState === XMLHttpRequest.DONE) {
        // 200 means everything is good
        if (myReq.status === 200) {
            handleDataSet(JSON.parse(myReq.responseText));
        // if we dont get 200, then there's an error
        } else {
           console.error(`${myReq.status} : This is an Error Message!`);
        }
    } else {
        // the else statement here means 'if the "if" statement fails, then show this message
        console.log(`Request state: ${myReq.readyState}. Server Lagging Out`)
    }
}



// the new ajax call
fetch("./DataSet.json")
.then(res => res.json()) // parse means translate
.then(data => {
    handleDataSet(data);
})
.catch((error) => console.log(error));
    


})();