// ________________________________________________________________
// Task 1: Order System (setTimeout)
console.log("Order placed");

setTimeout(()=>{
    console.log("Preparing food");
    setTimeout(()=>{
        console.log("Food ready");
        setTimeout(()=>{
            console.log("Delivered");
        }, 1000)
    }, 2000)
}, 2000)
// ________________________________________________________________
// Task 2: Digital Clock (setInterval)
let secRemaining = 0;

const clock = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
    secRemaining++;

    if (secRemaining === 10) {
        clearInterval(clock);
        console.log("Clock stopped.");
    }
}, 1000);
// ________________________________________________________________
// Task 3: Callback Hell Simulation
function loginUser() {
    setTimeout(() => {
        console.log("User Logged In");
        getUserData(); 
    }, 1000);
}

function getUserData() {
    setTimeout(() => {
        console.log("User Data Fetched");
        getUserPosts(); 
    }, 1000);
}

function getUserPosts() {
    setTimeout(() => {
        console.log("User Posts Fetched");
    }, 1000);
}

loginUser();
// ________________________________________________________________
// Task 4: Fake API Promise
function getProducts() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        fetch('https://fakestoreapi.com')
        .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
        })
        .then((data) => resolve(data))
        .catch(() => reject("API Failed"));
    }, 2000);
    });
}

getProducts()
.then((products) => {
    console.log("Products received:", products);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("Operation finished.");
});
