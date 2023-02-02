//Promises vs Callbacks

//What are callbacks? 
//Callbacks are functions 

const harvested = ["aubergines", "carrots"];

function completeHarvest(callback) {
    setTimeout(function () {
        harvested.push("potatoes")
        callback();
        if (harvested.length < 3) {
            console.log("oops")
        } else {
            setTimeout(function () {
              harvested.push("peas");
                callback();
                if (harvested.length < 4) {
                    console.log("oops")
                }
                else {
 setTimeout(function () {
   harvested.push("raspberries");
   callback();
 }, 500);
                }     
            }, 500)
        }
        
    }, 500)
}

function getHarvestedProduct() {
    console.log(harvested);
}

// completeHarvest(getHarvestedProduct);
// callback - promise is an object
// Promise: rejected, fulfilled or pending. 

const promiseToHarvestAllPotatoes = new Promise((resolve, reject) => {
    setTimeout(function () {
        harvested.push("potatoes")
        if (harvested.length < 3) 
        {
            reject("The potatoes weren't harvested");    
        }
        else {
           resolve(harvested);
        }  
    }, 500)
}).then((harvested) => {
    // console.log(harvested)
    return harvested;
}).catch((error) => {
    console.log(error);
})

const promiseToHarvestAllRunnerBeans = new Promise((resolve, reject) => {
    setTimeout(function () {
      harvested.push("runner beans");
        resolve(harvested);
    }, 500);
}).then((harvested) => {
    // console.log(harvested)
    return harvested;
})

// Promise.all([promiseToHarvestAllPotatoes, promiseToHarvestAllRunnerBeans]).then((values) => {
//     console.log(values);
// })

//async await => synctatic sugar over promises:

async function getAllMyHarvestedProduct() {
    await promiseToHarvestAllPotatoes;
    await promiseToHarvestAllRunnerBeans;
    // console.log(harvestPotatoes);
    console.log(harvested);
}

getAllMyHarvestedProduct();