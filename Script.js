//menu keypress
document.getElementById("menu").addEventListener("keypress", function () {
    if (event.keyCode == 32) {
        $("#menu").remove();
        $('audio')[0].play();
        $('audio').prop("volume", 0.3);
    }
});

// visithouse
const VH = function () {
    return $(`
        <div class="house">
            <div id="buttons">
                <button class="option" id="kitchen">Kitchen</button>
                <button class="option" id="bedroom">Bedroom</button>
                <button class="option" id="bathroom">Bathroom</button>
            </div>
            <p id="paragraphs">You walk towards the house and knock. There is no response. You push the door open and to your surprise, it is unlocked. You enter the lobby of the house.</p>
            <audio controls autoplay class="music"><source src="./Assets/FootstepSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}
document.getElementById("visitHouse").addEventListener("click", function () {
    event.preventDefault();
    event.target.parentNode.parentNode.remove();
    $('#root').append(VH);
    kit();
})

//call Triple A
const CTA = function () {
    return $(`
        <div class="tripleA">
            <div id="buttons">
                <button class="option" id="visitHouse">Visit the house</button>
                <button class="option" id="HitchRide">Hitch a ride</button>
            </div>
            <p id="paragraphs">Looks like there is no service.</p>
            <audio controls autoplay loop class="music" id="call"><source src="./Assets/CallSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

document.getElementById("callTripleA").addEventListener("click", function () {
    event.preventDefault();
    $('#start').remove();
    $('#root').append(CTA);

    //visit house 
    document.getElementById("visitHouse").addEventListener("click", function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(VH);
        kit();
    })

    // Hitch a Ride
    document.getElementById("HitchRide").addEventListener("click", function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(HR);

        document.getElementById("visitHouse").addEventListener("click", function () {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            kit()
        })
    })
})


// Hitch a Ride
const HR = function () {
    return $(`
        <div class="ride">
            <div id="buttons">
                <button class="option" id="visitHouse">Visit the house</button>
                <button class="option" id="callTripleA">Call Triple A</button>
                <button class="option" id="wait">Keep waiting</button>
            </div>
        <p id="paragraphs">You wait for a while but no one passes by. What do you do?</p>
        </div>
    `);
}

document.getElementById("HitchRide").addEventListener("click", function () {
    event.preventDefault();
    $('#start').remove();
    $('#root').append(HR);
    keepwait()

    //visit house 
    document.getElementById("visitHouse").addEventListener("click", function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(VH);
        kit()
    })

    document.getElementById("callTripleA").addEventListener("click", function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(CTA);

        document.getElementById("visitHouse").addEventListener("click", function () {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            kit();
        })
    })
})


//keep waiting 
const kw = function () {
    return $(` 
        <div class="ride">
            <div id="buttons">
                <button class="option" id="visitHouse">Visit the house</button>
                <button class="option" id="wait">Keep waiting</button>
            </div>
            <p id="paragraphs"> You wait some more, but no one is here. </p> 
        </div>
    `);
}
const kw2 = function () {
    return $(`
        <p> Finally, you see a car in the distance. You wave at it but it doesn’t stop </p>  
        <button id="visitHouse">Visit the house</button>
        <button id="wait">Keep waiting</button>
    `);
}

function keepwait() {
    $("#wait").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(kw);

        document.getElementById("visitHouse").addEventListener("click", function () {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            kit();
        })
    })
}

function keepwait2() {
    $("#wait").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('body').append(kw);

        document.getElementById("visitHouse").addEventListener("click", function () {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('body').append(VH);
            kit();
        })
    })
}


//kitchen
const kt = function () {
    return $(`
        <div class="kitchen">
            <div id="buttons">
                <button class="option" id="investigate"> Investigate the noise </button>
                <button class="option" id="hide"> Hide </button>
            </div>
            <p id="paragraphs"> You enter the kitchen. There’s a large fridge to your left, and a kitchen counter next to it. You hear a peculiar sound coming from the counter.  What do you do?</p>  
            <audio controls autoplay loop class="music"><source src="./Assets/ChopSE.mp3" type='audio/mp3'></audio>
        </div>    
    `);
}

const hideInKitchen = function () {
    return $(`
        <div class="hide">
            <div id="buttons"><button class="option" id="back"> Back to Lobby </button></div>
            <p id="paragraphs">You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It’s a flashlight. After some time, the noises stop, you leave the kitchen and go back to the lobby. </p>  
            <audio controls autoplay class="music"><source src="./Assets/DoorSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

function kit() {
    $("#kitchen").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(kt);
        hide();
    })
}

function hide() {
    $("#hide").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('body').append(hideInKitchen);
    })
}

function back() {
    $("#back").click(function () {
        event.preventDefault();
        event.target.parentNode.remove();
        $('#root').append(VH);
    })
}