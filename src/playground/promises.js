const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('This is my resolved call');
    // }, 5000);
    setTimeout(() => {
        reject('Something went wrong');
    }, 2000);    
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('Error:', err);
});

console.log('after');