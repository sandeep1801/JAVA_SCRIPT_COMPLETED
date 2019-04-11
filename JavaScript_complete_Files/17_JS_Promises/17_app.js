// Background of Promises
let doTask = (success,failed) => {
    // task preparation
    let taskDone = true;
    if(taskDone){
        success('Task is Done');
    }
    else{
        failed('Task is NOT Done');
    }
};

doTask((message) => {
    console.log('Success : ' + message);
} , (message) => {
    console.log('Failed : ' + message);
});

// JavaScript Promises
let promise1 = new Promise((resolve,reject) => {
    // doing promise
    let isDone = false;
    if(isDone){
        resolve('Promise is Done');
    }
    else{
        reject('Promise is NOT Done');
    }
});

// Calling the Promise
promise1.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

// Dependent Promises
getGraduate = new Promise((resolve,reject) => {
    // trying to get graduate
    let isDone = true;
    if(isDone){
        resolve('Graduation is Completed');
    }
    else{
        reject('Graduation is NOT Completed');
    }
});

getTraining = new Promise((resolve,reject) => {
    // doing the training
    let isDone = true;
    if(isDone){
        resolve('Training is Completed');
    }
    else{
        reject('Training is NOT Completed');
    }
});

getJob = new Promise((resolve,reject) => {
    // getting Job
    let isDone = true;
    if(isDone){
        resolve('Got a JOB');
    }
    else{
        reject('no JOB');
    }
});

// Call the dependent Promises
getGraduate.then((message) => {
    let msg = `${message} - `;
    getTraining.then((message) => {
        msg += `${message} - `;
        getJob.then((message) => {
            msg += `${message} `;
            console.log(msg);
        }).catch(() => {});
    }).catch(() => {});
}).catch(() => {});

