// GETTING THE MESSAGE FROM THE USER
const messageInput = document.querySelector("#message-input");

messageInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        getMessage();
    }
})

// FUNCTION TO RUN WHEN THE BUTTON IS CLICKED
function getMessage(){

    // 
    document.querySelector("#message-output").innerHTML = messageInput.value;

    // CLEAR THE MESSAGE INPUT BOX AFTER PASSING THE MESSAGE
    messageInput.value = "";
}