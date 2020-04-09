var speech_inst = window.speechSynthesis
var hours = 2;
///////////////////////////////////////////////////////Scene setup functions///////////////////////////////////////////////////////
// Start scene 
const SS = function () {
    play('S1');
    play('S1_2');
    play('S1_3');
    play('S1_4');
    play('S1_5');
}

// Visit house scene
const VH = function () {
    play('S2');
    play('S2_1');
    play('L1');
    play('L1_2');
    return $(`
        <div id="houseS">
            <div id="buttons">
                <button class="option" id="kitchen">Kitchen</button>
                <button class="option" id="bedroom">Bedroom</button>
                <button class="option" id="bathroom">Bathroom</button>
                <button class="option" id="leave">Leave the house</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You walk towards the house and knock. There is no response. You push the door open and to your surprise, it is unlocked. You enter the lobby of the house.
            It is darkly lit and dusty, and full of old paintings on the walls. You notice three different rooms. The bedroom, the bathroom and the kitchen.</p>
            <audio controls autoplay class="music"><source src="./Assets/FootstepSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

// Call triple a scene
const CTA = function () {
    play('S3');
    play('SE_1');
    return $(`
        <div id="tripleAS">
            <div id="buttons">
                <button class="option" id="visitHouse">Visit the house</button>
                <button class="option" id="HitchRide">Hitch a ride</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">Looks like there is no service.</p>
            <audio controls autoplay loop class="music" id="call"><source src="./Assets/CallSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

// Hitch a ride scene
const HR = function () {
    play('S4');
    play('S4_2');
    return $(`
        <div id="rideS">
            <div id="buttons">
                <button class="option" id="visitHouse">Visit the house</button>
                <button class="option" id="callTripleA">Call Triple A</button>
                <button class="option" id="wait">Keep waiting</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You waited for an hour but no one passes by. What do you do?</p>
        </div>
    `);
}

// Keep waiting scene
const KW = function () {
    play('S5');
    play('S5_2');
    return $(` 
        <div id="keepwaitingS">
            <div id="buttons">
                <button class="option" id="visitHouse">Visit the house</button>
                <button class="option" id="wait">Keep waiting</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphsHours">You waited for 2 hours but no one passes by. What do you do?</p> 
        </div>
    `);
}

// Keep waiting after 5 hours- BAD ENDING 
const KWBE = function () {
    play('S5_7');
    return $(` 
        <div id="keepwaitingBES">
            <div id="buttons">
                <button class="BEoption">Placeholder</button>
            </div>
            <p id="paragraphsHours">But now he is no longer alone. He looks behind him and sees a ghostly figure with a most terrifying face.</p> 
            <audio controls autoplay class="music"><source src="./Assets/ScreamSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

// Kitchen scene
const KT = function () {
    play('K1');
    play('K1_2');
    return $(`
        <div id="kitchenS">
            <div id="buttons">
                <button class="option" id="investigate">Investigate the noise</button>
                <button class="option" id="hide">Hide</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You enter the kitchen. There’s a large fridge to your left, and a kitchen counter next to it. You hear a peculiar sound coming from the counter. What do you do?</p>  
            <audio controls autoplay loop class="music"><source src="./Assets/ChopSE.mp3" type='audio/mp3'></audio>
        </div>    
    `);
    play('K1_2')
}

//add wait function later and flashlight == true
// Hide in kitchen scene
const HIK = function () {
    play('K19');
    play('K19_2');
    return $(`
        <div id="hideS">
            <div id="buttons">
                <button class="option" id="back">Back to Lobby</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It’s a flashlight. After some time, the noises stop. You leave the kitchen and go back to the lobby. </p>  
            <audio controls autoplay class="music"><source src="./Assets/DoorSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

// Investigate noise scene
const IIK = function () {
    play('K2');
    play('K2_2');
    return $(`
        <div class="investigate">
            <div id="buttons">
                <button class="option" id="searchFridge">Search Fridge</button>
                <button class="option" id="searchOven">Search Oven</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You follow the source of the noise but you don’t find anything. There’s a fridge and an oven in the kitchen. What do you do?</p>  
        <div>
    `);
}

// Search fridge scene
const SF = function () {
    play('K3');
    play('K3_2');
    return $(`
        <div class="infridge">
            <div id="buttons">
                <button class="option" id="red">Red apple</button>
                <button class="option" id="green">Green apple</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">There are two apples inside the fridge. A red apple and a green apple. What do you do? </p>
        </div>  
    `);
}

// Search oven scene
const SO = function () {
    play('K9');
    play('K9_2');
    return $(`
        <div class="oven">
            <div id="buttons">
                <button class="option" id="clean">Clean the object</button>
                <button class="option" id="leave">Leave the object</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You smell something burnt. You peer inside and find a charred object. What do you do?  </p>
        </div>  
    `);
}

// Clean oven scene
const CO = function () {
    play('K10');
    play('K10_2');
    return $(`
        <div class="oven">
            <div id="buttons">
                <button class="option" id="turnOffRadio">Turn off the radio</button>
                <button class="option" id="changeFrequency">Change the frequency</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You clean the object. It’s a radio. The noises you heard seem to have come from the radio. What do you do? </p>
        </div>  
    `);
}


// Red apple scene
const RA = function () {
    play('K4');
    return $(`
        <div class="redapple">          
            <p id="paragraphs">You pick up and eat the red apple. You faint </p>
        </div>  
    `);
}

// Green apple scene
const GA = function () {
    play('K5');
    play('K5_2');
    return $(`
        <div class="greenapple">
            <div id="buttons">
                <button class="option" id="pickup">Pick up the apple</button>
                <button class="option" id="ignore">Ignore the apple</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You reach for the green apple. When you pull it out from the fridge, your hand slips and the apple falls to the kitchen floor. What do you do? </p>
        </div>  
    `);
}

// Pick green apple scene
const PGA = function () {
    play('K5');
    play('K5_2');
    return $(`
        <div class="pickgreen">
            <div id="buttons">
                <button class="option" id="press">Press the button</button>
                <button class="option" id="putback">Put the remote back</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You reach for the green apple. When you pull it out from the fridge, your hand slips and the apple falls to the kitchen floor. What do you do? </p>
        </div>  
    `);
}

// Press remote scene
const PR = function () {
    play('K7');   
    return $(`
        <div class="pressbtn">
            <div id="buttons">
                <button class="option" id="back">Back to lobby</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">The noise in the kitchen stops. Looks like it was from a remote-controlled speaker. </p>
        </div>  
    `);
}

// Put remote back scene
const PRB = function () {
    play('K8');
    play('K8_2');
    return $(`
        <div class="putback">
            <div id="buttons">
                <button class="option" id="red">Red apple</button>
                <button class="option" id="searchOven">Search oven</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You put the remote back where you found it. What do you do next?</p>
        </div>  
    `);
}

// Turn off radio scene
const OR = function () {
    play('K11');
    return $(`
        <div class="offradio">
            <div id="buttons">
                <button class="option" id="leave">Leave the object</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You turn off the radio.</p>
        </div>  
    `);
}

// Change frequency scene
const CF = function () {
    play('K11');
    return $(`
        <div class="changefreq">
            <div id="buttons">
                <button class="option" id="lookundermat">Look under mat</button>
                <button class="option" id="ignoreinstruction">Ignore the instruction</button>    
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You turn off the radio.</p>
        </div>  
    `);
}

// Find key in kitchen scene
const FKIK = function () {
    play('K14');
    return $(`
        <div class="findkey">
            <div id="buttons">
                <button class="option" id="leavehouse">Leave house</button>
                <button class="option" id="back">Back to Lobby</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You look under the mat by the kitchen sink. You find a key.</p>
        </div>  
    `);
}

// Leave house scene - GOOD ENDING
const LH = function () {
    return $(`
        <div class="goodending1">
            <p id="paragraphs">You leave the house.</p>
        </div>  
    `);
}

// Leave object scene
const LO = function () {
    play('K15');
    play('K15_2');
    return $(`
        <div class="leaveobject">
            <div id="buttons">
                <button class="option" id="keepsearch">Keep searching</button>
                <button class="option" id="lookdoor">Investigate the door</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You close the oven door and look around the kitchen. Suddenly, you feel a shadow flash behind you. What do you do? </p>
        </div>  
    `);
}

// Keep searching scene
const KS = function () {
    play('K16');
    play('K16_2');
    return $(`
        <div class="keep">
            <div id="buttons">
                <button class="option" id="lookdoor">Investigate the door</button>
                <button class="option" id="back">Back to Lobby</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">After searching for a while, you notice a door hidden behind the fridge. What do you do?  </p>
        </div>  
    `);
}

// Kitchen fridge scene - BAD ENDING
const BEIK = function () {
    play('K17');
    play('K17_2');
    return $(`
        <div class="kitchenbe">
            <p id="paragraphs">You pull on the fridge with all your strength. You turn the knob on the door and push. Behind the door you see a woman clad in white, back facing you. Her right hand is moving, chopping down on something in front of her. Suddenly, she stops and turns to you. She smiles and stares you in the eye.</p>
        </div>  
    `);
}

// Bathroom scene
const BT = function () {
    play('BR_2');
    return $(`
        <div id="bathroomS">
            <div id="buttons">
                <button class="option" id="turnOffSink">Turn off sink</button>
                <button class="option" id="exitbathroom">Exit bathroom</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> You enter the bathroom. The sink is on. What do you do? </p>  
        </div>    
    `);
}

// Turn off sink scene
const TOS = function () {
    play('BR2');
    play('BR2_2');
    return $(`
        <div class="offsink">
            <div id="buttons">
                <button class="option" id="Hideincupboard">Hide in the cupboard</button>
                <button class="option" id="LockTheDoor">Lock the door</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> You hear footsteps running towards you. What do you do?</p>  
        </div>    
    `);
}

// Lock the door scene
const LD = function () {
    play('BR3');
    play('BR3_2');
    return $(`
        <div class="lockdoor">
            <div id="buttons">
                <button class="option" id="Hideincupboard">Hide in the cupboard</button>
                <button class="option" id="Hideinvent">Hide in a vent</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> The footsteps come closer until it stops. Someone tries to open the door, but it is locked. Suddenly they start banging on the door</p>  
        </div>    
    `);
}

// Hide in cupboard scene
const HIC = function () {
    play('BR4');
    play('BR4_2');
    play('BR4_3');
    return $(`
        <div class="hidecupboard">
            <div id="buttons">
                <button class="option" id="Leavecupboard">Leave the cupboard</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> You find a cupboard below the sink, and hide inside. Suddenly, the door is forced open. You hear footsteps nearing the cupboard, then a laugh. After some time, you hear footsteps walking out. What do you do?</p>  
        </div>    
    `);
}

// Leave cupboard scene
const LC = function () {
    play('BR5');
    play('BR5_2');
    return $(`
        <div class="leavecup">
            <p id="paragraphs">You attempt to leave the cupboard. In your despair, you find out it is locked! What do you do? Bang on the cupboard. It’s useless! You can’t get out! What do you do? Bang even more. Didn’t I tell you it’s useless? You are now stuck in the cupboard of someone’s house. Nobody will find you here for a while. What terrible life decisions you’ve made to make it to this point is unclear, but you have a long, long time to think about it.</p>  
        </div>    
    `);
}

// Climb into the vent scene
const CV = function () {
    play('BR6');
    return $(`
        <div class="climbvent">
            <p id="paragraphs"> Above the toilet, you find a loose vent shaft. You pop it open and crawl inside, putting back the cover behind you. You crawl through the vents and reach another room. </p>  
        </div>    
    `);
}

// Exit bathroom scene
const EB = function () {
    play('BR7');
    play('BR7_2');
    return $(`
        <div class="exitbath">
            <div id="buttons">
                <button class="option" id="searchcup">Search the cupboard</button>
                <button class="option" id="openseat">Open the toilet seat</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> You try to leave but the door is stuck. What do you do?</p>  
        </div>    
    `);
}

const SCB = function () {
    play('BR8');
    play('BR9');
    return $(`
        <div class="searchcupboard">
            <div id="buttons">
                <button class="option" id="breakdoor">Break down the door with the hammer</button>
                <button class="option" id="Hideincupboard">Hide in the cupboard</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> In the cupboard, you find a hammer. What do you do?</p>  
        </div>    
    `);
}

const BD = function () {
    play('BR10');
    play('BR10_2');
    return $(`
        <div class="breakdowndoor">
            <div id="buttons">
                <button class="option" id="back">Back to Lobby</button>
            </div>
            <p id="paragraphs"> You hold your hammer with both hands, then swing down. After a couple of tries, the door breaks! You enter the lobby with your trusty new hammer</p>  
        </div>    
    `);
}

// Toilet seat scene
const TS = function () {
    play('BR11');
    play('BR11_2');
    return $(`
        <div class="toiletseat">
            <div id="buttons">
                <button class="option" id="Closetoiletseat">Close the toilet seat</button>
                <button class="option" id="back">Leave the bathroom</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> You open the toilet seat. To your surprise, it’s full of bugs! What do you do? </p>  
        </div>    
    `);
}

// Close toilet seat scene
const CTS = function () {
    play('BR12');
    return $(`
        <div class="closeseat">
            <div id="buttons">
                <button class="option" id="searchcup">Search the cupboard</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> There is a cupboard below the sink. You decide to search it</p>  
        </div>    
    `);
}

// Bad ending scene
const BE = function () {
    play('S5_4');
    play('S5_8');
    return $(` 
        <div id="BadEndingS">
            <div id="buttons">
                <button class="option" id="replayGame">Replay</button>
            </div>
            <p id="paragraphs">Game over. What do you do?</p> 
        </div>
    `);
}

///////////////////////////////////////////////////////Choose option functions///////////////////////////////////////////////////////
// Press spacebar to navigate from menu to the start scene
document.getElementById("menu").addEventListener("keypress", function () {
    if (event.keyCode == 32) {
        $("#menu").remove();
        $('#root').append(SS);
        Replay();
        $('audio')[0].play();
        $('audio').prop("volume", 0.2);
    }
});

// Visit house
document.getElementById("visitHouse").addEventListener("click", function () {
    stop_speech();
    event.preventDefault();
    event.target.parentNode.parentNode.remove();
    $('#root').append(VH);
    Replay();
    kit();
    bath();
})

// Call triple a 
document.getElementById("callTripleA").addEventListener("click", function () {
    stop_speech();
    event.preventDefault();
    $('#startS').remove();
    $('#root').append(CTA);
    Replay();

    // Visit house 
    document.getElementById("visitHouse").addEventListener("click", function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(VH);
        Replay();
        kit();
    })

    // Hitch a ride
    document.getElementById("HitchRide").addEventListener("click", function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(HR);
        Replay();

        // Visit house
        document.getElementById("visitHouse").addEventListener("click", function () {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            Replay();
            kit()
        })
    })
})

// Hitch a ride
document.getElementById("HitchRide").addEventListener("click", function () {
    stop_speech();
    event.preventDefault();
    $('#startS').remove();
    $('#root').append(HR);
    Replay();
    keepwait();

    // Visit house
    document.getElementById("visitHouse").addEventListener("click", function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(VH);
        Replay();
        kit()
    })

    // Call triple a 
    document.getElementById("callTripleA").addEventListener("click", function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(CTA);
        Replay();

        // Visit house
        document.getElementById("visitHouse").addEventListener("click", function () {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            Replay();
            kit();
        })
    })
})

// Keep waiting
function keepwait() {
    $("#wait").click(function () {
        if (hours == 6) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(KWBE);
            setTimeout(function(){
                $('#keepwaitingBES').remove(); 
                $('#root').append(BE);
                ReplayGame();}, 8000);
        }
        else {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            manuscript.set('S5', "You waited for " + hours + " hours but no one passes by.")
            $('#root').append(KW);
            Replay();
            document.getElementById('paragraphsHours').innerHTML = "You waited for " + hours + " hours but no one passes by. What do you do?";
            hours++;
            
            // Visit house
            document.getElementById("visitHouse").addEventListener("click", function () {
                stop_speech();
                event.preventDefault();
                event.target.parentNode.parentNode.remove();
                $('#root').append(VH);
                Replay();
                kit();
            })
            keepwait();
        }
    })
}

// Kitchen
function kit() {
    $("#kitchen").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(KT);
        Replay();
        hide();
        investigatekit();
    })
}

// Hide in kitchen
function hide() {
    $("#hide").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(HIK);
        Replay();
        back();
    })
}

// Back to lobby
function back() {
    $("#back").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(VH);
        Replay();
        bath()
    })

}

// Investigate the kitchen
function investigatekit() {
    $("#investigate").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(IIK);
        Replay();
        searchFri();
        searchOven()
    })
}

// Search fridge
function searchFri() {
    $("#searchFridge").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(SF);
        Replay();
        frired();
        frigreen();
    })
}

//add wait function later jump to basement
// Red apple
function frired() {
    $("#red").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(RA);
        Replay();
    })
}

// Green apple
function frigreen() {
    $("#green").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(GA);
        Replay();
        pickgreen();
        ignoregreenapple();
    })
}

// Pick green apple
function pickgreen() {
    $("#pickup").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(PGA);
        Replay();
        pressbutton();
        putremote();
    })
}

// Ignore green apple
function ignoregreenapple() {
    play('K20');
    $("#ignore").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append('<p id="paragraphs">You ignore green apple and check the oven instead</p>');
        $('#root').append(SO);
        Replay();
        searchOven();
    })
}

// Press button
function pressbutton() {
    $("#press").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(PR);
        Replay();
        back();
    })
}

// Put remote
function putremote() {
    $("#putback").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(PRB);
        Replay();
        frired();
        searchOven();
    })
}

// Search oven
function searchOven() {
    $("#searchOven").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(SO);
        Replay();
        clean();
        leaveobject1();
    })
}

// Clean
function clean() {
    $("#clean").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(CO);
        Replay();
        offradio();
        change();
    })
}

// Turn off the radio
function offradio() {
    $("#turnOffRadio").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(OR);
        Replay();
        leaveobject1();
    })
}

// Change the radio frequency
function change() {
    $("#changeFrequency").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(CF);
        Replay();
        findkey();
        ignoreinstruction();
    })
}

// Find key
function findkey() {
    $("#lookundermat").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(FKIK);
        Replay();
        leavehouse();
        back();
    })
}

// Ignore instruction
function ignoreinstruction() {
    $("#ignoreinstruction").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(LO);
        Replay();

    })
}

// Leave the house
function leavehouse() {
    $("#leavehouse").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(LH);
        Replay();
    })
}

// Leave object
function leaveobject1() {
    $("#leave").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(LO);
        Replay();
        keepsearch();
        badEndInKit();
    })
}

// Keep searching
function keepsearch() {
    $("#keepsearch").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(KS);
        Replay();
        back();
        badEndInKit1();
    })
}

// Bad ending in kitchen
function badEndInKit() {
    $("#lookdoor").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(BEIK);
        Replay();
    })
}

// Bathroom
function bath() {
    $("#bathroom").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(BT);
        Replay();
        turnoffsink();
        exitbath();
    })
}

// Turn off the sink
function turnoffsink() {
    $("#turnOffSink").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(TOS);
        Replay();
        lockdoor();
        hideincupboard();
    })
}

// Lock the door
function lockdoor() {
    $("#LockTheDoor").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(LD);
        Replay();
        hideincupboard();
        climbvent();
    })
}

// Hide in cupboard
function hideincupboard() {
    $("#Hideincupboard").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(HIC);
        Replay();
        leavecup();
    })
}

// Leave cupboard
function leavecup() {
    $("#Leavecupboard").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(LC);
        Replay();
    })
}

//add wait function later to basement
// Climb the vent
function climbvent() {
    $("#Hideinvent").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(CV);
        Replay();
    })
}

// Exit bathroom
function exitbath() {
    $("#exitbathroom").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(EB);
        Replay();
        searchcupboard();
        toiletseat();
    })
}

// Search cupboard
function searchcupboard() {
    $("#searchcup").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(SCB);
        Replay();
        hideincupboard();
        breakdowndoor();
    })
}

//add wait function back to lobby with hammer
// Break door
function breakdowndoor() {
    $("#breakdoor").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(BD);
        Replay();
        hideincupboard();
        back();
    })
}

// Toilet seat
function toiletseat() {
    $("#openseat").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(TS);
        Replay();
        back();
        closetoiletseat();
    })
}

// Close toilet seat
function closetoiletseat() {
    $("#Closetoiletseat").click(function () {
        stop_speech();
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        $('#root').append(CTS);
        Replay();
        searchcupboard();
    })
}

// Player chooses to replay the game
function ReplayGame() {
    $('#replayGame').click(function () {
        location.reload();
    })
}

///////////////////////////////////////////////////////Speech script related functions///////////////////////////////////////////////////////
var manuscript = new Map()
manuscript.set('S1', "After a long week of work, you decide a weekend camping at the mountains alone would be a good activity.")
manuscript.set('S1_2', "Suddenly, your car stops.")
manuscript.set('S1_3', "Oh great, not again. Your car has broken down for the third time this month.")
manuscript.set('S1_4', "It's getting late. In the distance, you see an old mansion.")
manuscript.set('S1_5', "What do you do? Visit the house. Call Triple A. Hitch a ride. Replay narration.")
manuscript.set('S2', "You walk towards the house and knock.")
manuscript.set('S2_1', "There is no response. You push the door open and to your surprise, it is unlocked. You enter the lobby of the house.")
manuscript.set('S3', "Looks like there is no service.")
manuscript.set('S4', "You waited for an hour but no one passes by.")
manuscript.set('S4_2', "What do you do? Visit the house. Call Triple A. Keep waiting. Replay narration.")
manuscript.set('S5', "You waited for " + hours + " hours but no one passes by.")
manuscript.set('S5_2', "What do you do? Visit the house. Keep waiting. Replay narration.")
manuscript.set('S5_3', "Still no one, it's getting late.")
manuscript.set('S5_4', "Game over. What do you do?")
manuscript.set('S5_5', "Finally, you see a car in the distance.")
manuscript.set('S5_6', "You wave at it but it doesn't stop.")
manuscript.set('S5_7', "But now he is no longer alone. He looks behind him and sees a ghostly figure with a most terrifying face.")
manuscript.set('S5_8', "Replay")
manuscript.set('SE_1', "What do you do? Visit the house. Hitch a ride. Replay narration.")
manuscript.set('L1', "It is darkly lit and dusty, and full of old paintings on the walls. You notice three different rooms. The bedroom, the bathroom and the kitchen.")
manuscript.set('L1_2', "What do you do? Enter the kitchen. Enter the bedroom. Enter the bathroom. Leave the house. Replay narration.")
manuscript.set('LV', "You try to leave the house. To your dismay, the door is shut and locked behind you!")
manuscript.set('LV_2', "The keyhole is embossed with a unique snake pattern. It seems like you need a key to leave.")
manuscript.set('LV2', "With the key in your hand you open the large wooden doors. You push hard and the doors creak to an open. Finally, you've escaped!")
manuscript.set('B1', "You enter the bedroom.")
manuscript.set('B1_2', "Suddenly, the television turns on.")
manuscript.set('B1_3', "What do you do? Turn the television off. Watch the television. Replay narration.")
manuscript.set('B2', "You turn the television off.")
manuscript.set('B2_2', "To your surprise, it comes back on!")
manuscript.set('B3', "You grip your hammer with your right hand.")
manuscript.set('B3_2', "What do you do? Smash the TV. Do nothing. Replay narration.")
manuscript.set('B4', "You smash the TV with all your strength. It shatters and everything becomes quiet.")
manuscript.set('B4_2', "What do you do next? Search the drawers. Look under the bed. Replay narration.")
manuscript.set('B5', "You find a note. It tells you to look under the right side of the bed.")
manuscript.set('B6', "You choose to watch the television.")
manuscript.set('B7', "Which side do you look under? Left side. Right side. Replay narration.")
manuscript.set('B8', "You check the left side of the bed.")
manuscript.set('B9', "You check the right side of the bed.")
manuscript.set('B9_2', "You find a golden key! it must open a secret room somewhere.")
manuscript.set('BS1', "You faint.")
manuscript.set('BS1_2', "You wake up in a cold room. It is too dark to see. It seems to be the basement. There is a door behind you.")
manuscript.set('BS1_3', "What do you do? Leave through the door. Crawl through the floor. Walk by using the walls as a guide. Replay narration.")
manuscript.set('BS2', "The door is locked. It seems like you need a key to open it.")
manuscript.set('BS3', "You crawl around the room until you find a desk with two drawers.")
manuscript.set('BS4', "You decided to use the walls as guidance to walk around the room.")
manuscript.set('BS5', "You grip your flashlight in your back pocket. You turn it on, and find a drawer. You walk towards the desk with 2 drawers. ")
manuscript.set('BS5_2', "Which do you open? Open the left drawer. Open the right drawer. Replay narration.")
manuscript.set('BS6', "You find a key in the drawer. You quickly rush back to the door and exit using the key. You find yourself back in the lobby.")
manuscript.set('BS7', "You decide to check the right drawer.")
manuscript.set('K1', "You enter the kitchen. There's a large fridge to your left, and a kitchen counter next to it. You hear a peculiar sound coming from the counter.")
manuscript.set('K1_2', "What do you do? Investigate the noise. Hide. Replay narration.")
manuscript.set('K2', "You follow the source of the noise but you don't find anything. There's a fridge and an oven in the kitchen.")
manuscript.set('K2_2', "What do you do? Search the fridge. Search the oven. Replay narration.")
manuscript.set('K3', "You find two apples inside the fridge. A red apple and a green apple.")
manuscript.set('K3_2', "What do you do? Pick up the red apple. Pick up the green apple. Replay narration.")
manuscript.set('K4', "You pick up and eat the red apple. You faint.")
manuscript.set('K5', "You reach for the green apple. When you pull it out from the fridge, your hand slips and the apple falls to the kitchen floor.")
manuscript.set('K5_2', "What do you do? Pick up the apple. Ignore the apple. Replay narration.")
manuscript.set('K6', "You reach downwards to pick up the apple. In the gap between the fridge and the floor, you find a remote with a single red button.")
manuscript.set('K6_2', "What do you do? Press the button. Put the remote back. Replay narration.")
manuscript.set('K7', "The noise in the kitchen stops. Looks like it was from a remote-controlled speaker.")
manuscript.set('K8', "You put the remote back where you found it.")
manuscript.set('K8_2', "What do you do next? Check the oven. Pick up the red apple.")
manuscript.set('K9', "You smell something burnt. You peer inside and find a charred object.")
manuscript.set('K9_2', "What do you do? Clean the object. Leave the object. Replay narration.")
manuscript.set('K10', "You clean the object. It's a radio. The noises you heard seem to have come from the radio.")
manuscript.set('K10_2', "What do you do? Turn off the radio. Change the frequency. Replay narration.")
manuscript.set('K11', "You turn off the radio.")
manuscript.set('K12', "Look under the mat.")
manuscript.set('K13', "What do you do? Look under the mat. Ignore the instruction. Replay narration.")
manuscript.set('K14', "You look under the mat by the kitchen sink. You find a silver key with a snake pattern.")
manuscript.set('K15', "You close the oven door and look around the kitchen. Suddenly, you feel a shadow flash behind you.")
manuscript.set('K15_2', "What do you do? Keep searching. Hide. Replay narration.")
manuscript.set('K16', "After searching for a while, you notice a door hidden behind the fridge.")
manuscript.set('K16_2', "What do you do? Investigate the door. Leave the kitchen. Replay narration.")
manuscript.set('K17', "You pull on the fridge with all your strength. You turn the knob on the door and push. Behind the door you see a woman clad in white, back facing you. Her right hand is moving, chopping down on something in front of her. Suddenly, she stops.")
manuscript.set('K17_2', "She turns towards you with a smile, staring you in the eye.")
manuscript.set('K18', "You return to the lobby.")
manuscript.set('K19', "You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It's a flashlight.")
manuscript.set('K19_2', "After some time, the noises stop, you leave the kitchen and go back to the lobby.")
manuscript.set('K20', "You ignore green apple and check the oven instead.")
manuscript.set('BR', "You enter the bathroom. The sink is on.")
manuscript.set('BR_2', "What do you do? Turn off the sink. Open toilet seat. Replay narration.")
manuscript.set('BR2 ', "You hear footsteps running towards you.")
manuscript.set('BR2_2', "What do you do? Lock the door. Hide in the cupboard. Replay narration.")
manuscript.set('BR3', "The footsteps come closer until it stops.")
manuscript.set('BR3_2', "Someone tries to open the door, but it is locked. Suddenly they start banging on the door.")
manuscript.set('BR3_3', "What do you do? Hide in the cupboard. Hide in a vent. Replay narration.")
manuscript.set('BR4', "You find a cupboard below the sink, and hide inside. Suddenly, the door is forced open.")
manuscript.set('BR4_2', "You hear footsteps nearing the cupboard, then a laugh.")
manuscript.set('BR4_3', "After some time, you hear footsteps walking out. What do you do? Leave the cupboard. Replay narration.")
manuscript.set('BR5', "You attempt to leave the cupboard. In your despair, you find out it is locked!")
manuscript.set('BR5_2', "What do you do? Bang on the cupboard. Replay narration.")
manuscript.set('BR5_3', "It's useless! You can't get out! What do you do? Bang even more. Replay narration.")
manuscript.set('BR5_4', "Didn't I tell you it's useless? You are now stuck in the cupboard of someone's abandoned  house. Nobody will find you here for a while. What terrible life decisions you've made to make it to this point is unclear, but you have a long, long time to think about it.")
manuscript.set('BR6', "Above the toilet, you find a loose vent shaft. You pop it open and crawl inside, putting back the cover behind you. You crawl through the vents and reach another room.")
manuscript.set('BR7', "You try to leave but the door is stuck.")
manuscript.set('BR7_2', "What do you do? Search the cupboard. Open the toilet seat. Replay narration.")
manuscript.set('BR8', "In the cupboard, you find a hammer.")
manuscript.set('BR9', "What do you do? Break down the door with the hammer. Hide in the cupboard. Replay narration.")
manuscript.set('BR10', "You hold your hammer with both hands, then swing down.")
manuscript.set('BR10_2', "After a couple of tries, the door breaks! You enter the lobby with your trusty new hammer.")
manuscript.set('BR11', "You open the toilet seat. To your surprise, it's full of bugs!")
manuscript.set('BR11_2', "What do you do? Close the toilet seat. Leave the bathroom. Replay narration.")
manuscript.set('BR12', "There is a cupboard below the sink. You decide to search it.")
manuscript.set('BR13', "You leave the bathroom into the lobby.")

// Play speech
function play(key) {
    var msg = new SpeechSynthesisUtterance(manuscript.get(key));
    speech_inst.speak(msg);
    msg.volume = 1;
}

// Stop speech
function stop_speech() {
    speech_inst.cancel()
}

// Narration dictionary
var dict = {
    "startS": SS,
    "houseS": VH,
    "tripleAS": CTA,
    "rideS": HR,
    "keepwaitingS": KW,
    "kitchenS": KT,
    "hideS": HIK,
    "bathroomS": BT
};

// Replay narration click function
const Replay = function () {
    $(".Replay").on('click', function(event){
        console.log("Clicked" + event.target.parentNode.parentNode.id)
        stop_speech();
        dict[event.target.parentNode.parentNode.id]();
    });
}

Replay();
