document.getElementById("applyBtn").addEventListener("click", function(){
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor = "lightgreen";
    }
})

document.getElementById("centerBtn").addEventListener("click", function(){
    const center = document.getElementById("middleFriend");
    center.style.textAlign = "center";
})

document.getElementById("addFriend").addEventListener("click", function(){
    const addFriend = document.getElementById("friendContainer");
    const createFriend = document.createElement("div");
    createFriend.classList.add("friend");
    createFriend.innerHTML = `
                <h3 class="friendName" id="middleFriend">Friend-3</h3>
                <p>Soluta, repellat! Veniam, dolore doloremque!</p>
    `
    addFriend.appendChild(createFriend);
})