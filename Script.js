const lobbybutton = function () {
    return `
        <div class="buttons">
            <div>
                <button class="kitchen">Kitchen</button>
                <button class="bathroom">Bathroom</button>
                <button class="bedroom">Bedroom</button>
            </div>
        </div>
    `
};

document.getElementById("menu").addEventListener("keypress", function () {
    if (event.keyCode == 32) {
        event.preventDefault();
        event.target.remove();
        $('#root').append(lobbybutton);
    }
});