// imports go at the top of the file
// importing from DataModule.js
// the ./ means going up a folder
// "pArray" can be anything, it just defines the data array
//import pArray from "./modules/DataModule.js";
import { fetchData } from "./modules/Async.js";

// basic java syntax is (() => {code goes here})(); idk why, but it is
(() => {
    // writing this line allows you to see if ur .js file is loaded correctly
    console.log("Java Loaded");
    //console.log(pArray);

    function popErrorBox(message) {
        alert("Pop Error Box: ")
    }

    
    function handleDataSet(data) {
        // this defines the projDynamic tag in html as 'pDynamic'
        let pDynamic = document.querySelector(".projDynamic"),
            // .content used to access <template> tags
            // this is the content we're moving into the '.projDiv' tag
            pTemplate = document.querySelector(".projTemplate").content;

        // pID is the name we're assigning to every item in our pArray 
        // we put "data" for a generic variable for all of the array items
        for (let pID in data) {
            // 'Node' just means element in html
            // We're defining the node we want to copy as 'pCurrent'
            // In this case it's the .projTemplate .content from earlier
            let pCurrent = pTemplate.cloneNode(true),
                // the newly copied html tags in .projDiv are now known as 'pCurrentInfo'
                pCurrentInfo = pCurrent.querySelector(".projDiv").children;
            // elements children start at number 0
            // use the "data" again as a holder for all items
            // the .Name defines the column in the PHPMyAdmin database
            pCurrentInfo[0].textContent = data[pID].Name;
            pCurrentInfo[1].textContent = data[pID].Type;
            pCurrentInfo[2].textContent = data[pID].Description;
            // for an image (the path). it takes all assigned item images
            // you can add .jpg after {} if all file ext are the same
            pCurrentInfo[3].src = `./images/${data[pID].Pic}`;
            // adds the new data from pCurrent into pDynamic
            //'append' is a fancy way of saying 'add'
            pDynamic.appendChild(pCurrent);
        }
        console.log(data)
    }
    // the function we defined above, this line uses it
    //handleDataSet(pArray);


    //async statements go at bottom of page. for multiple .json files just add another
    //fetch, then use handleDataSet, catch the errors w log and popErrorBox
    fetchData("includes/functions.php").then(data => handleDataSet(data)).catch(err =>{console.log(err); popErrorBox(err);});
})();