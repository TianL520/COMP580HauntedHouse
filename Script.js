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
    bath();
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
        investigatekit();
    })
}

//hide in kitchen
function hide() {
    $("#hide").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(hideInKitchen);
        back();
    })
}

function back() {
    $("#back").click(function () {
        // event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(VH);

        bath()
    })

}

//Investigate noise
const investigateInKitchen = function () {
    return $(`
    <div class="investigate">

        <div id="buttons">
        <button class="option" id="searchFridge"> Search Fridge </button>
        <button class="option" id="searchOven"> Search Oven </button>
        </div>            
        <p id="paragraphs">You follow the source of the noise but you don’t find anything. There’s a fridge and an oven in the kitchen. What do you do?</p>  
    <div>
    `);
}

function investigatekit() {
    $("#investigate").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(investigateInKitchen);
        searchFri();
        searchOven()
    })
}

//in fridge
const fridge = function () {
    return $(`
    <div class="infridge">
    <div id="buttons">
        <button class="option" id="red"> Red apple </button>
        <button class="option" id="green"> Green apple </button>
        </div>            
        <p id="paragraphs">There are two apples inside the fridge. A red apple and a green apple. What do you do? </p>
        </div>  
    `);
}

function searchFri() {
    $("#searchFridge").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(fridge);
        frired();
        frigreen();
    })
}

//red apple 
const redapp = function () {
    return $(`
    <div class="redapple">          
        <p id="paragraphs">You pick up and eat the red apple. You faint </p>
        </div>  
    `);
}
//green apple
const greenapp = function () {
    return $(`
    <div class="greenapple">
    <div id="buttons">
        <button class="option" id="pickup">Pick up the apple </button>
        <button class="option" id="ignore"> Ignore the apple </button>
        </div>            
        <p id="paragraphs">You reach for the green apple. When you pull it out from the fridge, your hand slips and the apple falls to the kitchen floor. What do you do? </p>
        </div>  
    `);
}

//add wait function later jump to basement
function frired() {
    $("#red").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(redapp);
    })
}

function frigreen() {
    $("#green").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(greenapp);
        pickgreen();
        ignoregreenapple();
    })
}

const pickgreenapple = function () {
    return $(`
    <div class="pickgreen">
    <div id="buttons">
        <button class="option" id="press">Press the button </button>
        <button class="option" id="putback"> Put the remote back</button>
        </div>            
        <p id="paragraphs">You reach for the green apple. When you pull it out from the fridge, your hand slips and the apple falls to the kitchen floor. What do you do? </p>
        </div>  
    `);
}

function pickgreen() {
    $("#pickup").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(pickgreenapple);
        pressbutton();
        putremote();
    })
}

//ignore green apple
function ignoregreenapple() {
    $("#ignore").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append('<p id="paragraphs">You ignore green apple, check oven</p>');
        $('#root').append(checkoven);
        searchOven();
    })
}

const pressremote = function () {
    return $(`
    <div class="pressbtn">
    <div id="buttons">
        <button class="option" id="back">back to lobby </button>
        </div>            
        <p id="paragraphs">The noise in the kitchen stops. Looks like it was from a remote-controlled speaker. </p>
        </div>  
    `);
}

function pressbutton() {
    $("#press").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(pressremote);
        back();
    })
}

const putremoteback = function () {
    return $(`
    <div class="putback">
    <div id="buttons">
    <button class="option" id="red"> Red apple </button>
    <button class="option" id="searchOven"> Search Oven </button>
    </div>            
        <p id="paragraphs">You put the remote back where you found it. What do you do next? </p>
        </div>  
    `);
}

function putremote() {
    $("#putback").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(putremoteback);
        frired();
        searchOven();
    })
}

//search oven
const checkoven = function () {
    return $(`
    <div class="oven">
    <div id="buttons">
    <button class="option" id="clean"> Clean the object </button>
    <button class="option" id="leave"> Leave the object </button>
    </div>            
        <p id="paragraphs">You smell something burnt. You peer inside and find a charred object. What do you do?  </p>
        </div>  
    `);
}

function searchOven() {
    $("#searchOven").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(checkoven);
        clean();
        leaveobject1();
    })
}


//clean
const cleanoven = function () {
    return $(`
    <div class="oven">
    <div id="buttons">
    <button class="option" id="turnOffRadio"> Turn off the radio </button>
    <button class="option" id="changeFrequency"> Change the frequency </button>
    </div>            
        <p id="paragraphs">You clean the object. It’s a radio. The noises you heard seem to have come from the radio. What do you do? </p>
        </div>  
    `);
}

function clean() {
    $("#clean").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(cleanoven);
        offradio1();
        change1();
    })
}

//turn off radio
const offradio = function () {
    return $(`
    <div class="offradio">
    <div id="buttons">
    <button class="option" id="leave"> Leave the object </button>
    </div>            
        <p id="paragraphs">You turn off the radio.  </p>
        </div>  
    `);
}

function offradio1() {
    $("#turnOffRadio").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(offradio);
        leaveobject1();
    })
}

const change = function () {
    return $(`
    <div class="changefreq">
    <div id="buttons">
    <button class="option" id="lookundermat"> Look under mat </button>
    <button class="option" id="ignoreinstruction"> Ignore the instruction</button>    </div>            
        <p id="paragraphs">You turn off the radio.  </p>
        </div>  
    `);
}

function change1() {
    $("#changeFrequency").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(change);
        findkey();
        ignoreinstruction();
    })
}



const findkeyinkitchen = function () {
    return $(`
    <div class="findkey">
    <div id="buttons">
    <button class="option" id="leavehouse"> Leave house </button>
    <button class="option" id="back"> Back to Lobby </button></div>
    <p id="paragraphs">You look under the mat by the kitchen sink. You find a key</p>
        </div>  
    `);
}

function findkey() {
    $("#lookundermat").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(findkeyinkitchen);
        leavehouse();
        back();
    })
}

function ignoreinstruction() {
    $("#ignoreinstruction").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(leaveobject);

    })
}

//leave house good ending
const leave = function () {
    return $(`
    <div class="goodending1">
    <p id="paragraphs">You leave house</p>
        </div>  
    `);
}

function leavehouse() {
    $("#leavehouse").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(leave);
    })
}

//leave object
const leaveobject = function () {
    return $(`
    <div class="leaveobject">
    <div id="buttons">
    <button class="option" id="keepsearch"> Keep searching </button>
    <button class="option" id="lookdoor"> Investigate the door </button></div>
    <p id="paragraphs">You close the oven door and look around the kitchen. Suddenly, you feel a shadow flash behind you. What do you do? </p>
        </div>  
    `);
}

function leaveobject1() {
    $("#leave").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(leaveobject);
        keepsearch1();
        badEndInKit1();
    })
}

//keep searching
const keepsearch = function () {
    return $(`
    <div class="keep">
    <div id="buttons">
    <button class="option" id="lookdoor"> Investigate the door </button>
    <button class="option" id="back"> Back to Lobby </button></div>
    <p id="paragraphs">After searching for a while, you notice a door hidden behind the fridge. What do you do?  </p>
    </div>  
    `);
}

function keepsearch1() {
    $("#keepsearch").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(keepsearch);
        back();
        badEndInKit1();
    })
}

const badEndInKit = function () {
    return $(`
    <div class="kitchenbe">

    <p id="paragraphs">You pull on the fridge with all your strength. You turn the knob on the door and push. Behind the door you see a woman clad in white, back facing you. Her right hand is moving, chopping down on something in front of her. Suddenly, she stops and turns to you. She smiles and stares you in the eye.</p>
        </div>  
    `);
}

function badEndInKit1() {
    $("#lookdoor").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(badEndInKit);
    })
}








//bathroom
const bt = function () {
    return $(`
        <div class="bathroom">
            <div id="buttons">
                <button class="option" id="turnOffSink"> turn off sink </button>
                <button class="option" id="LockTheDoor"> Lock the door </button>
            </div>
            <p id="paragraphs"> You enter the bathroom. The sink is on. What do you do? </p>  
        </div>    
    `);
}

function bath() {
    $("#bathroom").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(bt);
    })
}