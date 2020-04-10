var speech_inst = window.speechSynthesis

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
    play('S2')
    play('S2_1')
    play('L1')
    play('L1_2')
    return $(`
        <div class="house">
            <div id="buttons">
                <button class="option" id="kitchen">Kitchen</button>
                <button class="option" id="bedroom">Bedroom</button>
                <button class="option" id="bathroom">Bathroom</button>
            </div>
            <p id="paragraphs">You walk towards the house and knock. There is no response. You push the door open and to your surprise, it is unlocked. You enter the lobby of the house.
            It is darkly lit and dusty, and full of old paintings on the walls. You notice three different rooms. The bedroom, the bathroom and the kitchen.</p>
            <audio controls autoplay class="music"><source src="./Assets/FootstepSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

document.getElementById("visitHouse").addEventListener("click", function () {
    stop_speech();
    event.preventDefault();
    event.target.parentNode.parentNode.remove();
    $('#root').append(VH);
    kit();
    bath();
    bd1();
})

//call Triple A
const CTA = function () {
    play('S3')
    play('SE_1')
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
    stop_speech();
    event.preventDefault();
    $('#start').remove();
    $('#root').append(CTA);

    //visit house 
    document.getElementById("visitHouse").addEventListener("click", function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(VH);
        kit();
        bath();
        bd1();
    })

    // Hitch a Ride
    document.getElementById("HitchRide").addEventListener("click", function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(HR);

        document.getElementById("visitHouse").addEventListener("click", function () {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            kit();
            bath();
            bd1();
        })
    })
})


// Hitch a Ride
const HR = function () {
    play('S4')
    play('S1_5')
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
    stop_speech();
    event.preventDefault();
    $('#start').remove();
    $('#root').append(HR);
    keepwait()

    //visit house 
    document.getElementById("visitHouse").addEventListener("click", function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(VH);
        kit();
        bath();
        bd1();
    })

    document.getElementById("callTripleA").addEventListener("click", function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(CTA);

        document.getElementById("visitHouse").addEventListener("click", function () {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            kit();
            bath();
            bd1();
        })
    })
})


//keep waiting 
const kw = function () {
    play('S5')
    play('S5_2')
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
    play('S5_5')
    play('S5_6')
    return $(`
        <p> Finally, you see a car in the distance. You wave at it but it doesn’t stop </p>  
        <button id="visitHouse">Visit the house</button>
        <button id="wait">Keep waiting</button>
    `);
}

function keepwait() {
    $("#wait").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(kw);

        document.getElementById("visitHouse").addEventListener("click", function () {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            kit();
            bath();
            bd1();
        })
    })
}

function keepwait2() {
    $("#wait").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('body').append(kw);

        document.getElementById("visitHouse").addEventListener("click", function () {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('body').append(VH);
            kit();
            bath();
            bd1();
        })
    })
}


//kitchen
const kt = function () {
    play('K1')
    play('K1_2')
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
    play('K1_2')
}

//add wait function later and flashlight == true
const hideInKitchen = function () {
    play('K19')
    play('K19_2')
    return $(`
        <div class="hide">
            <div id="buttons">
            <button class="option" id="back"> Back to Lobby </button>
            </div>
            <p id="paragraphs">You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It’s a flashlight. After some time, the noises stop. You leave the kitchen and go back to the lobby. </p>  
            <audio controls autoplay class="music"><source src="./Assets/DoorSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

function kit() {
    $("#kitchen").click(function () {
        stop_speech();
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
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(hideInKitchen);
        back();
    })
}

function back() {
    $("#back").click(function () {
        stop_speech();
        event.preventDefault();
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
        keepsearch1();
        badEndInKit1();
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
                <button class="option" id="exitbathroom"> Exit Bathroom </button>
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
        turnoffsink1();
        exitbath1();
    })
}


//turn off sink
const turnoffsink = function () {
    return $(`
        <div class="offsink">
            <div id="buttons">
                <button class="option" id="Hideincupboard"> Hide in the cupboard </button>
                <button class="option" id="LockTheDoor"> Lock the door </button>
            </div>
            <p id="paragraphs"> You hear footsteps running towards you. What do you do?</p>  
        </div>    
    `);
}

function turnoffsink1() {
    $("#turnOffSink").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(turnoffsink);
        lockdoor1();
        hideincupboard1();
    })
}

//lock the door
const lockdoor = function () {
    return $(`
        <div class="lockdoor">
            <div id="buttons">
                <button class="option" id="Hideincupboard"> Hide in the cupboard </button>
                <button class="option" id="Hideinvent"> Hide in a vent </button>
            </div>
            <p id="paragraphs"> The footsteps come closer until it stops. Someone tries to open the door, but it is locked. Suddenly they start banging on the door</p>  
        </div>    
    `);
}

function lockdoor1() {
    $("#LockTheDoor").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(lockdoor);
        hideincupboard1();
        climbvent1();
    })
}

//hide in cupboard
const hideincupboard = function () {
    return $(`
        <div class="hidecupboard">
            <div id="buttons">
                <button class="option" id="Leavecupboard"> Leave the cupboard</button>
            </div>
            <p id="paragraphs"> You find a cupboard below the sink, and hide inside. Suddenly, the door is forced open. You hear footsteps nearing the cupboard, then a laugh. After some time, you hear footsteps walking out. What do you do?</p>  
        </div>    
    `);
}

function hideincupboard1() {
    $("#Hideincupboard").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(hideincupboard);
        leavecup1();
    })
}

//leave cupboard
const leavecup = function () {
    return $(`
        <div class="leavecup">
            <p id="paragraphs">You attempt to leave the cupboard. In your despair, you find out it is locked! What do you do? Bang on the cupboard. It’s useless! You can’t get out! What do you do? Bang even more. Didn’t I tell you it’s useless? You are now stuck in the cupboard of someone’s house. Nobody will find you here for a while. What terrible life decisions you’ve made to make it to this point is unclear, but you have a long, long time to think about it.</p>  
        </div>    
    `);
}

function leavecup1() {
    $("#Leavecupboard").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(leavecup);
    })
}

//Climb into the vent
const climbvent = function () {
    return $(`
        <div class="climbvent">
            <p id="paragraphs"> Above the toilet, you find a loose vent shaft. You pop it open and crawl inside, putting back the cover behind you. You crawl through the vents and reach another room. </p>  
        </div>    
    `);
}
//add wait function later to basement
function climbvent1() {
    $("#Hideinvent").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(climbvent);
    })
}

const exitbath = function () {
    return $(`
        <div class="exitbath">
            <div id="buttons">
                <button class="option" id="searchcup"> Search the cupboard </button>
                <button class="option" id="openseat"> Open the toilet seat </button>
            </div>
            <p id="paragraphs"> You try to leave but the door is stuck. What do you do?</p>  
        </div>    
    `);
}

function exitbath1() {
    $("#exitbathroom").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(exitbath);
        searchcupboard1();
        toiletseat1();
    })
}

const searchcupboard = function () {
    return $(`
        <div class="searchcupboard">
            <div id="buttons">
                <button class="option" id="breakdoor"> Break down the door with the hammer </button>
                <button class="option" id="Hideincupboard"> Hide in the cupboard </button>
            </div>
            <p id="paragraphs"> In the cupboard, you find a hammer. What do you do?</p>  
        </div>    
    `);
}

function searchcupboard1() {
    $("#searchcup").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append('<div><p id=hammer>you have a hammer</p></div>');
        $('#root').append(searchcupboard);
        hideincupboard1();
        breakdowndoor1();
    })
}


const breakdowndoor = function () {
    return $(`
        <div class="breakdowndoor">
        <div id="buttons">
        <button class="option" id="back"> Back to Lobby </button>
        </div>
            <p id="paragraphs"> You hold your hammer with both hands, then swing down. After a couple of tries, the door breaks! You enter the lobby with your trusty new hammer</p>  
        </div>    
    `);
}

//add wait function back to lobby with hammer
function breakdowndoor1() {
    $("#breakdoor").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(breakdowndoor);
        hideincupboard1();
        back();
    })
}

const toiletseat = function () {
    return $(`
        <div class="toiletseat">
        <div id="buttons">
        <button class="option" id="Closetoiletseat"> Close the toilet seat</button>
        <button class="option" id="back"> Leave the bathroom </button>
        </div>
        <p id="paragraphs"> You open the toilet seat. To your surprise, it’s full of bugs! What do you do? </p>  
        </div>    
    `);
}

function toiletseat1() {
    $("#openseat").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(toiletseat);
        back();
        closetoiletseat1();
    })
}

const closetoiletseat = function () {
    return $(`
        <div class="closeseat">
        <div id="buttons">
        <button class="option" id="searchcup"> Search the cupboard </button>
        </div>
        <p id="paragraphs"> There is a cupboard below the sink. You decide to search it</p>  
        </div>    
    `);
}

function closetoiletseat1() {
    $("#Closetoiletseat").click(function () {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(closetoiletseat);
        searchcupboard1();
    })
}

var manuscript = new Map()
manuscript.set('S1', "After a long week of work, you decide a weekend camping at the mountains alone would be a good activity.")
manuscript.set('S1_2', "Suddenly, your car stops.")
manuscript.set('S1_3', "Oh great, not again. Your car has broken down for the third time this month.")
manuscript.set('S1_4', "It's getting late. In the distance, you see an old mansion.")
manuscript.set('S1_5', "What do you do? Visit the house. Call Triple A. Hitch a ride.")
manuscript.set('S2', "You walk towards the house and knock.")
manuscript.set('S2_1', "There is no response. You push the door open and to your surprise, it is unlocked. You enter the lobby of the house.")
manuscript.set('S3', "Looks like there is no service.")
manuscript.set('S4', "You wait for a while but no one passes by.")
manuscript.set('S4_2', "What do you do? Visit the house. Call Triple A. Keep waiting.")
manuscript.set('S5', "You wait some more, but no one is here.")
manuscript.set('S5_2', "What do you do? Visit the house. Keep waiting.")
manuscript.set('S5_3', "Still no one, it's getting late.")
manuscript.set('S5_4', "What do you do? Visit the house. Keep waiting.")
manuscript.set('S5_5', "Finally, you see a car in the distance.")
manuscript.set('S5_6', "You wave at it but it doesn't stop.")
manuscript.set('S5_7', "What do you do? Visit the house. Keep waiting.")
manuscript.set('S5_8', "It's now nighttime, it's unlikely that any cars will pass at this point.")
manuscript.set('S5_7', "What do you do? Visit the house. Keep waiting.")
manuscript.set('S5_8', "You wait, wait, wait and wait some more, and finally, someone drives by and picks you up, taking you home. By sheer willpower and determination, you somehow find yourself out of this problem. The next day, you get your car towed. Your weekend is ruined but at least you are safe.")
manuscript.set('SE_1', "What do you do? Visit the house. Hitch a ride")
manuscript.set('L1', "It is darkly lit and dusty, and full of old paintings on the walls. You notice three different rooms. The bedroom, the bathroom and the kitchen.")
manuscript.set('L1_2', "What do you do? Enter the bedroom. Enter the bathroom. Enter the kitchen. Leave the house.")
manuscript.set('LV', "You try to leave the house. To your dismay, the door is shut and locked behind you!")
manuscript.set('LV_2', "The keyhole is embossed with a unique snake pattern. It seems like you need a key to leave.")
manuscript.set('LV2', "With the key in your hand you open the large wooden doors. You push hard and the doors creak to an open. Finally, you've escaped!")
manuscript.set('B1', "You enter the bedroom.")
manuscript.set('B1_2', "Suddenly, the television turns on.")
manuscript.set('B1_3', "What do you do? Turn the television off. Watch the television.")
manuscript.set('B2', "You turn the television off.")
manuscript.set('B2_2', "To your surprise, it comes back on!")
manuscript.set('B3', "You grip your hammer with your right hand.")
manuscript.set('B3_2', "What do you do? Smash the TV. Do nothing.")
manuscript.set('B4', "You smash the TV with all your strength. It shatters and everything becomes quiet.")
manuscript.set('B4_2', "What do you do next? Search the drawers. Look under the bed.")
manuscript.set('B5', "You find a note. It tells you to look under the right side of the bed.")
manuscript.set('B6', "You choose to watch the television.")
manuscript.set('B7', "Which side do you look under? Left side. Right side.")
manuscript.set('B8', "You check the left side of the bed.")
manuscript.set('B9', "You check the right side of the bed.")
manuscript.set('B9_2', "You find a golden key! it must open a secret room somewhere.")
manuscript.set('BS1', "You faint.")
manuscript.set('BS1_2', "You wake up in a cold room. It is too dark to see. It seems to be the basement. There is a door behind you.")
manuscript.set('BS1_3', "What do you do? Leave through the door. Crawl through the floor. Walk by using the walls as a guide.")
manuscript.set('BS2', "The door is locked. It seems like you need a key to open it.")
manuscript.set('BS3', "You crawl around the room until you find a desk with two drawers.")
manuscript.set('BS4', "You decided to use the walls as guidance to walk around the room.")
manuscript.set('BS5', "You grip your flashlight in your back pocket. You turn it on, and find a drawer. You walk towards the desk with 2 drawers. ")
manuscript.set('BS5_2', "Which do you open? Open the left drawer. Open the right drawer.")
manuscript.set('BS6', "You find a key in the drawer. You quickly rush back to the door and exit using the key. You find yourself back in the lobby.")
manuscript.set('BS7', "You decide to check the right drawer.")
manuscript.set('K1', "You enter the kitchen. There's a large fridge to your left, and a kitchen counter next to it. You hear a peculiar sound coming from the counter.")
manuscript.set('K1_2', "What do you do? Investigate the noise. Hide.")
manuscript.set('K2', "You follow the source of the noise but you don't find anything. There's a fridge and an oven in the kitchen.")
manuscript.set('K2_2', "What do you do? Search the fridge. Search the oven.")
manuscript.set('K3', "You find two apples inside the fridge. A red apple and a green apple.")
manuscript.set('K3_2', "What do you do? Pick up the red apple. Pick up the green apple.")
manuscript.set('K4', "You pick up and eat the red apple. You faint.")
manuscript.set('K5', "You reach for the green apple. When you pull it out from the fridge, your hand slips and the apple falls to the kitchen floor.")
manuscript.set('K5_2', "What do you do? Pick up the apple. Ignore the apple.")
manuscript.set('K6', "You reach downwards to pick up the apple. In the gap between the fridge and the floor, you find a remote with a single red button.")
manuscript.set('K6_2', "What do you do? Press the button. Put the remote back.")
manuscript.set('K7', "The noise in the kitchen stops. Looks like it was from a remote-controlled speaker.")
manuscript.set('K8', "You put the remote back where you found it.")
manuscript.set('K8_2', "What do you do next? Check the oven. Pick up the red apple.")
manuscript.set('K9', "You smell something burnt. You peer inside and find a charred object.")
manuscript.set('K9_2', "What do you do? Clean the object. Leave the object.")
manuscript.set('K10', "You clean the object. It's a radio. The noises you heard seem to have come from the radio.")
manuscript.set('K10_2', "What do you do? Turn off the radio. Change the frequency.")
manuscript.set('K11', "You turn off the radio.")
manuscript.set('K12', "Look under the mat.")
manuscript.set('K13', "What do you do? Look under the mat. Ignore the instruction.")
manuscript.set('K14', "You look under the mat by the kitchen sink. You find a silver key with a snake pattern.")
manuscript.set('K15', "You close the oven door and look around the kitchen. Suddenly, you feel a shadow flash behind you.")
manuscript.set('K15_2', "What do you do? Keep searching. Hide.")
manuscript.set('K16', "After searching for a while, you notice a door hidden behind the fridge.")
manuscript.set('K16_2', "What do you do? Investigate the door. Leave the kitchen.")
manuscript.set('K17', "You pull on the fridge with all your strength. You turn the knob on the door and push. Behind the door you see a woman clad in white, back facing you. Her right hand is moving, chopping down on something in front of her. Suddenly, she stops.")
manuscript.set('K17_2', "She turns towards you with a smile, staring you in the eye.")
manuscript.set('K18', "You return to the lobby.")
manuscript.set('K19', "You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It's a flashlight.")
manuscript.set('K19_2', "After some time, the noises stop, you leave the kitchen and go back to the lobby.")
manuscript.set('BR', "You enter the bathroom. The sink is on.")
manuscript.set('BR_2', "What do you do? Turn off the sink. Open toilet seat.")
manuscript.set('BR2 ', "You hear footsteps running towards you.")
manuscript.set('BR2_2', "What do you do? Lock the door. Hide in the cupboard.")
manuscript.set('BR3', "The footsteps come closer until it stops.")
manuscript.set('BR3_2', "Someone tries to open the door, but it is locked. Suddenly they start banging on the door.")
manuscript.set('BR3_3', "What do you do? Hide in the cupboard. Hide in a vent.")
manuscript.set('BR4', "You find a cupboard below the sink, and hide inside. Suddenly, the door is forced open.")
manuscript.set('BR4_2', "You hear footsteps nearing the cupboard, then a laugh.")
manuscript.set('BR4_3', "After some time, you hear footsteps walking out. What do you do? Leave the cupboard.")
manuscript.set('BR5', "You attempt to leave the cupboard. In your despair, you find out it is locked!")
manuscript.set('BR5_2', "What do you do? Bang on the cupboard.")
manuscript.set('BR5_3', "It's useless! You can't get out! What do you do? Bang even more.")
manuscript.set('BR5_4', "Didn't I tell you it's useless? You are now stuck in the cupboard of someone's abandoned  house. Nobody will find you here for a while. What terrible life decisions you've made to make it to this point is unclear, but you have a long, long time to think about it.")
manuscript.set('BR6', "Above the toilet, you find a loose vent shaft. You pop it open and crawl inside, putting back the cover behind you. You crawl through the vents and reach another room.")
manuscript.set('BR7', "You try to leave but the door is stuck.")
manuscript.set('BR7_2', "What do you do? Search the cupboard. Open the toilet seat.")
manuscript.set('BR8', "In the cupboard, you find a hammer.")
manuscript.set('BR9', "What do you do? Break down the door with the hammer. Hide in the cupboard.")
manuscript.set('BR10', "You hold your hammer with both hands, then swing down.")
manuscript.set('BR10_2', "After a couple of tries, the door breaks! You enter the lobby with your trusty new hammer.")
manuscript.set('BR11', "You open the toilet seat. To your surprise, it's full of bugs!")
manuscript.set('BR11_2', "What do you do? Close the toilet seat. Leave the bathroom.")
manuscript.set('BR12', "There is a cupboard below the sink. You decide to search it.")
manuscript.set('BR13', "You leave the bathroom into the lobby.")

// usage play(code)
// eg. play(BR13)
function play(key) {
    var msg = new SpeechSynthesisUtterance(manuscript.get(key));
    speech_inst.speak(msg);
}

function stop_speech() {
    speech_inst.cancel()
}