console.log("Button clicked!");


document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);

    if(event.key == "a") {
        document.getElementById("a").style.color = "red";
    }
});