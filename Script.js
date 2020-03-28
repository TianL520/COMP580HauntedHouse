//menu keypress
document.getElementById("menu").addEventListener("keypress", function () {
    if (event.keyCode == 32) {
        $("#menu").remove();
    }
});

// visithouse
const VH = function () {
    return $(`
        <div class="house">
        <p>You walk towards the house and knock.  There is no response. You push the door open and to your surprise, it is unlocked. You enter the lobby of the house. </p>
        <button id="kitchen">Kitchen</button>
        <button id="bedroom">Bedroom</button>
        <button id="bathroom">Bathroom</button>
        </div>
    `);
}
document.getElementById("visitHouse").addEventListener("click", function () {
    event.preventDefault();
    event.target.parentNode.remove();
    $('#root').append(VH);
    kit();
})

//call Triple A
const CTA = function () {
    return $(`
        <div class="tripleA">
        <p> Looks like there is no service </p>
        <button id="visitHouse">Visit the house</button>
        <button id="HitchRide">Hitch a ride</button>
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
        event.target.parentNode.remove();
        $('#root').append(VH);
        kit();
    })

    // Hitch a Ride
    document.getElementById("HitchRide").addEventListener("click", function () {
        event.preventDefault();
        event.target.parentNode.remove();
        $('#root').append(HR);

        document.getElementById("visitHouse").addEventListener("click", function () {
            event.preventDefault();
            event.target.parentNode.remove();
            $('#root').append(VH);
            kit()
        })
    })
})


// Hitch a Ride
const HR = function () {
    return $(`
        <div class="ride">
        <p> You wait for a while but no one passes by. What do you do?  </p>
        <button id="visitHouse">Visit the house</button>
        <button id="callTripleA">Call Triple A</button>
        <button id="wait">Keep waiting</button>
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
        event.target.parentNode.remove();
        $('#root').append(VH);
        kit()
    })

    document.getElementById("callTripleA").addEventListener("click", function () {
        event.preventDefault();
        event.target.parentNode.remove();
        $('#root').append(CTA);

        document.getElementById("visitHouse").addEventListener("click", function () {
            event.preventDefault();
            event.target.parentNode.remove();
            $('#root').append(VH);
            kit();
        })
    })
})


//keep waiting 
const kw = function () {
    return $(`
        <p> You wait some more, but no one is here. </p>  
        <button id="visitHouse">Visit the house</button>
        <button id="wait">Keep waiting</button>
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
        event.target.parentNode.remove();
        $('#root').append(kw);

        document.getElementById("visitHouse").addEventListener("click", function () {
            event.preventDefault();
            event.target.remove();
            $('#root').append(VH);
            kit();
        })
    })
}

function keepwait2() {
    $("#wait").click(function () {
        event.preventDefault();
        event.target.parentNode.remove();
        $('body').append(kw);

        document.getElementById("visitHouse").addEventListener("click", function () {
            event.preventDefault();
            event.target.parentNode.remove();
            $('body').append(VH);
            kit();
        })
    })
}


//kitchen
const kt = function () {
    return $(`
        <p> You enter the kitchen. There’s a large fridge to your left, and a kitchen counter next to it. You hear a peculiar sound coming from the counter.  What do you do?</p>  
        <button id="investigate"> Investigate the noise </button>
        <button id="hide"> Hide </button>
    `);
}

const hideInKitchen = function () {
    return $(`
        <p> You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It’s a flashlight. After some time, the noises stop, you leave the kitchen and go back to the lobby. </p>  
        <button id="back"> Back to Lobby </button>
    `);
}

function kit() {
    $("#kitchen").click(function () {
        event.preventDefault();
        event.target.parentNode.remove();
        $('#root').append(kt);
        hide()
    })
}

function hide() {
    $("#hide").click(function () {
        event.preventDefault();
        event.target.parentNode.remove();
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