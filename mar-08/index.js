function popup(n) {
    let a = document.getElementById(2*n);
    console.log(a);
    let b = document.getElementById(2*n+1);
    console.log(b);
    let deepak = document.getElementsByClassName("container1")[0];
    // console.log(k.classList);
    // console.log(a);
    deepak.style.display = "none";
    
    // console.log(body.classList);
    a.classList.remove("d-none");
    a.classList.add("initial");
       
}