let dec = document.querySelector("#dec");
let res = document.querySelector("#res");
let inc = document.querySelector("#inc");
let count = 0;

dec.addEventListener("click", () => {
    if(count === 0){
        console.log("aur kitna neeche girega")
    }else{
        count--;
        increaseNumn();
    }
} )

res.addEventListener("click", () => {
    count = 0;
    increaseNumn();
} )

inc.addEventListener("click", () => {
    count++;
    increaseNumn();
} )

function increaseNumn(){
    document.querySelector("#num").innerText = count;
}
