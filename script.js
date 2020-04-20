var speech_inst = window.speechSynthesis
var hours = 2;
var hammerW, flashlightW = false;
///////////////////////////////////////////////////////Scene setup functions///////////////////////////////////////////////////////
const WS = function () {
    play('WS');
    return $(`
        <div id="warningS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
        </div>
    `);
}
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
                <button class="option" id="kitchen">Enter the kitchen</button>
                <button class="option" id="bedroom">Enter the bedroom</button>
                <button class="option" id="bathroom">Enter the bathroom</button>
                <button class="option" id="leave">Leave the house</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You walk towards the house and knock. There is no response. You push the door open and to your surprise, it is unlocked. You enter the lobby of the house.
            It is darkly lit and dusty, and full of old paintings on the walls. You notice three different rooms. The bedroom, the bathroom and the kitchen. What do you do?</p>
            <audio controls autoplay class="music"><source src="./Assets/FootstepSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Enter the) kitchen': function() {
                    var button = document.getElementById("kitchen");
                    annyang.pause();
                    button.click();
                },
                '(Enter the) bedroom': function() {
                    var button = document.getElementById("bedroom");
                    annyang.pause();
                    button.click();
                },
                '(Enter the) bathroom': function() {
                    var button = document.getElementById("bathroom");
                    annyang.pause();
                    button.click();
                },
                'Leave (the house)': function() {
                    var button = document.getElementById("leave");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("kitchen");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("bedroom");
                    annyang.pause();
                    button.click();
                },
                '3': function() {
                    var button = document.getElementById("bathroom");
                    annyang.pause();
                    button.click();
                },
                '4': function() {
                    var button = document.getElementById("leave");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
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
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">Looks like there is no service. What do you do?</p>
            <audio controls autoplay loop class="music" id="call"><source src="./Assets/CallSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Visit the) house': function() {
                    var button = document.getElementById("visitHouse");
                    annyang.pause();
                    button.click();
                },
                'Hitch a ride': function() {
                    var button = document.getElementById("HitchRide");
                    annyang.pause();
                    button.click();
                },
                'Catch a ride': function() {
                    var button = document.getElementById("HitchRide");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("visitHouse");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("HitchRide");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
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
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You waited for an hour but no one passes by. What do you do?</p>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Visit the) house': function() {
                    var button = document.getElementById("visitHouse");
                    annyang.pause();
                    button.click();
                },
                'Call Triple A': function() {
                    var button = document.getElementById("callTripleA");
                    annyang.pause();
                    button.click();
                },
                'Call AAA': function() {
                    var button = document.getElementById("callTripleA");
                    annyang.pause();
                    button.click();
                },
                'Keep waiting': function() {
                    var button = document.getElementById("wait");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("visitHouse");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("callTripleA");
                    annyang.pause();
                    button.click();
                },
                '3': function() {
                    var button = document.getElementById("wait");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
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
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphsHours">You waited for 2 hours but no one passes by. What do you do?</p> 
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Visit the) house': function() {
                    var button = document.getElementById("visitHouse");
                    annyang.pause();
                    button.click();
                },
                'Keep waiting': function() {
                    var button = document.getElementById("wait");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("visitHouse");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("wait");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Keep waiting after 5 hours- BAD ENDING 
const KWBE = function () {
    play('S5_7');
    return $(` 
        <div id="keepwaitingBES">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphsHours">But now you are no longer alone. You look behind yourself and see a ghostly figure with the most terrifying face.</p> 
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
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You enter the kitchen. There’s a large fridge to your left, and a kitchen counter next to it. You hear a peculiar sound coming from the counter. What do you do?</p>  
            <audio controls autoplay loop class="music"><source src="./Assets/ChopSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                'Investigate (the noise)': function() {
                    var button = document.getElementById("investigate");
                    annyang.pause();
                    button.click();
                },
                'Hide': function() {
                    var button = document.getElementById("hide");
                    annyang.pause();
                    button.click();
                },
                'Height': function() {
                    var button = document.getElementById("hide");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("investigate");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("hide");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>    
    `);
}

// Try to leave house scene
const TTLH = function () {
    play('LV');
    play('LV_2');
    play('LV_3');
    return $(`
        <div id="trytoleavehouseS">
            <div id="buttons">
                <button class="option" id="back">Back to the lobby</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You try to leave the house. To your dismay, the door is shut and locked behind you! The keyhole is embossed with a unique snake pattern. It seems like you need a key to leave. What do you do?</p>  
            <audio controls autoplay class="music"><source src="./Assets/DoorLockedSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Back to the) lobby': function() {
                    var button = document.getElementById("lobby");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("lobby");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>        
    `);
}


// Hide in kitchen scene
const HIK = function () {
    play('K19');
    play('K19_2');
    flashlightW = true;
    return $(`
        <div id="hideS">
            <div id="buttons">
                <button class="option" id="back">Back to the lobby</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It’s a flashlight. What do you do?</p>  
            <audio controls autoplay class="music"><source src="./Assets/DoorSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>
        if (annyang) {
            var commands = {
                '(Back to the) lobby': function() {
                    var button = document.getElementById("lobby");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("lobby");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>    
    `);
}

// Investigate noise scene
const IIK = function () {
    play('K2');
    play('K2_2');
    return $(`
        <div id="investigateS">
            <div id="buttons">
                <button class="option" id="searchFridge">Search the fridge</button>
                <button class="option" id="searchOven">Search the oven</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You follow the source of the noise but you don’t find anything. There’s a fridge and an oven in the kitchen. What do you do?</p>  
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Search the) fridge': function() {
                    var button = document.getElementById("searchFridge");
                    annyang.pause();
                    button.click();
                },
                '(Search the) oven': function() {
                    var button = document.getElementById("searchOven");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("searchFridge");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("searchOven");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Search fridge scene
const SF = function () {
    play('K3');
    play('K3_2');
    return $(`
        <div id="infridgeS">
            <div id="buttons">
                <button class="option" id="red">Pick up the red apple</button>
                <button class="option" id="green">Pick up the green apple</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You find two apples inside the fridge. A red apple and a green apple. What do you do? </p>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Pick up the) red apple': function() {
                    var button = document.getElementById("red");
                    annyang.pause();
                    button.click();
                },
                '(Pick up the) green apple': function() {
                    var button = document.getElementById("green");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("red");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("green");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>  
    `);
}

// Search oven scene
const SO = function () {
    play('K9');
    play('K9_2');
    return $(`
        <div id="ovenS">
            <div id="buttons">
                <button class="option" id="leave">Leave the object</button>
                <button class="option" id="clean">Clean the object</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You smell something burnt. You peer inside and find a charred object. What do you do?  </p>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                'Clean (the object)': function() {
                    var button = document.getElementById("clean");
                    annyang.pause();
                    button.click();
                },
                'Leave (the object)': function() {
                    var button = document.getElementById("leave");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("clean");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("leave");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>  
    `);
}

// Clean oven scene
const CO = function () {
    play('K10');
    play('K10_2');
    return $(`
        <div id="cleanOvenS">
            <div id="buttons">
                <button class="option" id="turnOffRadio">Turn off the radio</button>
                <button class="option" id="changeFrequency">Change the frequency</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You clean the object. It’s a radio. The noises you heard seem to have come from the radio. What do you do?</p>
            <audio controls autoplay class="music"><source src="./Assets/RadioSE.mp3" type='audio/mp3'></audio>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                'Turn off (the radio)': function() {
                    var button = document.getElementById("turnOffRadio");
                    annyang.pause();
                    button.click();
                },
                'Change (the frequency)': function() {
                    var button = document.getElementById("changeFrequency");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("turnOffRadio");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("changeFrequency");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Red apple scene
const RA = function () {
    play('K4');
    return $(`
        <div id="redappleS">          
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You pick up and eat the red apple and fainted.</p>
        </div>  
    `);
}

// Green apple scene
const GA = function () {
    play('K5');
    play('K5_2');
    return $(`
        <div id="greenappleS">
            <div id="buttons">
                <button class="option" id="pickup">Pick up the apple</button>
                <button class="option" id="ignore">Ignore the apple</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You reach for the green apple. When you pull it out from the fridge, your hand slips and the apple falls to the kitchen floor. What do you do? </p>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                'Pick up (the apple)': function() {
                    var button = document.getElementById("pickup");
                    annyang.pause();
                    button.click();
                },
                'Ignore (the apple)': function() {
                    var button = document.getElementById("ignore");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("pickup");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("ignore");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Pick green apple scene
const PGA = function () {
    play('K6');
    play('K6_2');
    return $(`
        <div id="pickgreenS">
            <div id="buttons">
                <button class="option" id="press">Press the button</button>
                <button class="option" id="putback">Put the remote back</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You reach downwards to pick up the apple. In the gap between the fridge and the floor, you find a remote with a single red button. What do you do?</p>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Press the) button': function() {
                    var button = document.getElementById("press");
                    annyang.pause();
                    button.click();
                },
                '(Put the) remote (back)': function() {
                    var button = document.getElementById("putback");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("press");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("putback");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>  
    `);
}

// Ignore green apple scene
const IGA = function () {
    play('K20');
    return $(`
        <div id="ignoreGreenS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>            
            <p id="paragraphs">You decided to ignore the green apple and check the oven instead.</p>
        </div>  
    `);
}

// Press remote scene
const PR = function () {
    play('K7');
    play('K7_2')
    return $(`
        <div id="pressbtnS">
            <div id="buttons">
                <button class="option" id="back">Back to the lobby</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">The noise in the kitchen stops. Looks like it was from a remote-controlled speaker. What do you do?</p>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Back to the) lobby': function() {
                    var button = document.getElementById("back");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("back");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Put remote back scene
const PRB = function () {
    play('K8');
    play('K8_2');
    return $(`
        <div id="putbackS">
            <div id="buttons">
            <button class="option" id="red">Pick up the red apple</button>
                <button class="option" id="searchOven">Check the oven</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You put the remote back where you found it. What do you do next?</p>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Check the) oven': function() {
                    var button = document.getElementById("searchOven");
                    annyang.pause();
                    button.click();
                },
                '(Pick up the) red apple': function() {
                    var button = document.getElementById("red");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("searchOven");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("red");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Turn off radio scene
const OR = function () {
    play('K11');
    return $(`
        <div id="offradioS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>     
            <p id="paragraphs">You turn off the radio.</p>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Leave the) object': function() {
                    var button = document.getElementById("leave");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("leave");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Change frequency scene
const CF = function () {
    play('K12');
    play('K13');
    return $(`
        <div id="changefreqS">
            <div id="buttons">
                <button class="option" id="lookundermat">Look under the mat</button>
                <button class="option" id="ignoreinstruction">Ignore the voice</button>    
                <button class="option Replay" id="replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You changed the radio frequency and you heard a voice that tells you to look under the mat. What do you do?</p>
            <audio controls autoplay class="music"><source src="./Assets/RadioSE.mp3" type='audio/mp3'></audio>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Look under the) mat': function() {
                    var button = document.getElementById("lookundermat");
                    annyang.pause();
                    button.click();
                },
                'Ignore (the instruction)': function() {
                    var button = document.getElementById("ignoreinstruction");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("lookundermat");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("ignoreinstruction");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Find key in kitchen scene
const FKIK = function () {
    play('K14');
    return $(`
        <div id="findkeyS">
            <div id="buttons">
            <button class="option" id="leavehouse">Leave house</button>
            <button class="option" id="back">Back to the lobby</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You look under the mat by the kitchen sink. You find a silver key with a snake pattern.</p>
        </div> 
        <script>    
        if (annyang) {
            var commands = {
                'Leave (the house)': function() {
                    var button = document.getElementById("leavehouse");
                    annyang.pause();
                    button.click();
                },
                '(Back to the) lobby': function() {
                    var button = document.getElementById("back");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("leavehouse");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("back");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script> 
    `);
}

// Leave house scene - GOOD ENDING
const LH = function () {
    play('GE1');
    return $(`
        <div id="goodending1S">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You found the front door key and you quickly left the house.</p>
        </div>  
    `);
}

// Leave object scene
const LO = function () {
    play('K15');
    play('K15_2');
    return $(`
        <div id="leaveobjectS">
            <div id="buttons">
                <button class="option" id="lookdoor">Investigate the door</button>
                <button class="option" id="keepsearch">Keep searching</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You decided to look around the kitchen. Suddenly, you feel a shadow flash behind you. What do you do? </p>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                'Keep searching': function() {
                    var button = document.getElementById("keepsearch");
                    annyang.pause();
                    button.click();
                },
                '(Investigate the) door': function() {
                    var button = document.getElementById("lookdoor");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("keepsearch");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("lookdoor");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Keep searching scene
const KS = function () {
    play('K16');
    play('K16_2');
    return $(`
        <div id="keepS">
            <div id="buttons">
                <button class="option" id="lookdoor">Investigate the door</button>
                <button class="option" id="back">Back to the lobby</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">After searching for a while, you notice a door hidden behind the fridge. What do you do?  </p>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Investigate the) door': function() {
                    var button = document.getElementById("lookdoor");
                    annyang.pause();
                    button.click();
                },
                '(Back to the) lobby': function() {
                    var button = document.getElementById("back");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("lookdoor");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("back");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Kitchen fridge scene - BAD ENDING
const BEIK = function () {
    play('K17');
    play('K17_2');
    return $(`
        <div id="kitchenbeS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You pull on the fridge with all your strength. You turn the knob on the door and push. Behind the door you see a woman clad in white, back facing you. Her right hand is moving, chopping down on something in front of her. Suddenly, she stops. She turns towards you with a smile, staring you in the eye.</p>
            <audio controls autoplay loop class="music"><source src="./Assets/ChopSE.mp3" type='audio/mp3'></audio>
        </div>  
    `);
}

// Bathroom scene
const BT = function () {
    play('BR');
    play('BR_2');
    return $(`
        <div id="bathroomS">
            <div id="buttons">
                <button class="option" id="turnOffSink">Turn off the sink</button>
                <button class="option" id="exitbathroom">Back to the lobby</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You enter the bathroom. The sink is on. What do you do?</p> 
            <audio controls autoplay loop class="music"><source src="./Assets/SinkSE.mp3" type='audio/mp3'></audio> 
        </div>    
        <script>    
        if (annyang) {
            var commands = {
                '(Turn off the) sink': function() {
                    var button = document.getElementById("turnOffSink");
                    annyang.pause();
                    button.click();
                },
                '(Back to the) lobby': function() {
                    var button = document.getElementById("exitbathroom");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("turnOffSink");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("exitbathroom");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}


// Turn off sink scene
const TOS = function () {
    play('BR2');
    play('BR2_2');
    return $(`
        <div id="offsinkS">
            <div id="buttons">
                <button class="option" id="LockTheDoor">Lock the door</button>
                <button class="option" id="Hideincupboard">Hide in the cupboard</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You hear footsteps running towards you. What do you do?</p>  
            <audio controls autoplay loop class="music"><source src="./Assets/FootstepSE.mp3" type='audio/mp3'></audio>
        </div>    
        <script>    
        if (annyang) {
            var commands = {
                '(Lock the) door': function() {
                    var button = document.getElementById("LockTheDoor");
                    annyang.pause();
                    button.click();
                },
                '(Hide in the) cupboard': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                '(Height in the) cupboard': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("LockTheDoor");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Lock the door scene
const LD = function () {
    play('BR3');
    play('BR3_2');
    return $(`
        <div id="lockdoorS">
            <div id="buttons">
            <button class="option" id="Hideinvent">Hide in the vents</button>
                <button class="option" id="Hideincupboard">Hide in the cupboard</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">The footsteps come closer until it stops. Someone tries to open the door, but it is locked. Suddenly they start banging on the door</p>  
            <audio controls autoplay loop class="music"><source src="./Assets/BangDoorSE.mp3" type='audio/mp3'></audio>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Hide in the) cupboard': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                '(Height in the) cupboard': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                '(Hide in the) vents': function() {
                    var button = document.getElementById("Hideinvent");
                    annyang.pause();
                    button.click();
                },
                '(Height in the) vents': function() {
                    var button = document.getElementById("Hideinvent");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("Hideinvent");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>  
    `);
}

// Hide in cupboard scene
const HIC = function () {
    play('BR4');
    play('BR4_2');
    play('BR4_3');
    return $(`
        <div id="hidecupboardS">
            <div id="buttons">
                <button class="option" id="Leavecupboard">Leave the cupboard</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You find a cupboard below the sink, and hide inside. Suddenly, the door is forced open. You hear footsteps nearing the cupboard, then a laugh. After some time, you hear footsteps walking out. What do you do?</p>  
            <audio controls autoplay class="music"><source src="./Assets/LaughBathSE.mp3" type='audio/mp3'></audio>
        </div>    
        <script>    
        if (annyang) {
            var commands = {
                '(Leave the) cupboard': function() {
                    var button = document.getElementById("Leavecupboard");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("Leavecupboard");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Leave cupboard scene
const LC = function () {
    play('BR5');
    play('BR5_2');
    return $(`
        <div id="leavecupS">
            <div id="buttons">
                <button class="option" id="bangCupboard">Bang on the cupboard</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You attempt to leave the cupboard. In your despair, you find out it is locked! What do you do?</p>  
            <audio controls autoplay class="music"><source src="./Assets/DoorLockedSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Bang on the) cupboard': function() {
                    var button = document.getElementById("bangCupboard");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("bangCupboard");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>    
    `);
}

// Climb into the vent scene
const CV = function () {
    play('BR6');
    return $(`
        <div id="climbventS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">Above the toilet, you find a loose vent shaft. You pop it open and crawl inside, putting back the cover behind you. You crawl through the vents and reach another room.</p>  
            <audio controls autoplay loop class="music"><source src="./Assets/VentSE.mp3" type='audio/mp3'></audio>
        </div>    
    `);
}

// Banging on the cupboard scene
const CB = function () {
    play('BR5_3');
    return $(`
        <div id="bangCupboardS">
            <div id="buttons">
                <button class="option" id="bangEvenMore">Bang even more</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">It’s useless! You can’t get out! What do you do?</p>  
            <audio controls autoplay loop class="music"><source src="./Assets/BangDoorSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                'Bang (even more)': function() {
                    var button = document.getElementById("bangEvenMore");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("bangEvenMore");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>        
    `);
}

// Stuck in the cupboard scene - BAD END
const SC = function () {
    play('BR5_4');
    return $(`
        <div id="stuckCupboardS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">Didn't I tell you it's useless? You are now stuck in the cupboard of someone’s abandoned  house. Nobody will find you here for a while. What terrible life decisions you’ve made to make it to this point is unclear, but you have a long, long time to think about it.</p>  
        </div>    
    `);
}

// Exit bathroom scene
const EB = function () {
    play('BR7');
    play('BR7_2');
    return $(`
        <div id="exitbathS">
            <div id="buttons">
                <button class="option" id="searchcup">Search the cupboard</button>
                <button class="option" id="openseat">Open the toilet seat</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs"> You try to leave but the door is stuck. What do you do?</p>  
            <audio controls autoplay class="music"><source src="./Assets/DoorLockedSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>    
        if (annyang) {
            var commands = {
                '(Search the) cupboard': function() {
                    var button = document.getElementById("searchcup");
                    annyang.pause();
                    button.click();
                },
                '(Open the) toilet seat': function() {
                    var button = document.getElementById("openseat");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("searchcup");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("openseat");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>    
    `);
}

// Turn TV off creepy scene 
const TTVO = function () {
    play('B2');
    if (hammerW) {
        play('B3');
        play('B3_2');
        return $(`
            <div id="trytoturnTVoffS">
                <div id="buttons">
                    <button class="option" id="yes">Smash the TV</button>
                    <button class="option" id="doNothing">Do nothing</button>
                    <button class="option Replay" id="replay">Replay narration</button>
                </div>
                <p id="paragraphs">You turn the television off. To your surprise, it comes back on! You grip your hammer with your right hand. What do you do?</p>  
                <audio controls autoplay loop class="music"><source src="./Assets/TelevisionSE.mp3" type='audio/mp3'></audio>
            </div>    
            if (annyang) {
                var commands = {
                    'Smash the TV': function() {
                        var button = document.getElementById("yes");
                        annyang.pause();
                        button.click();
                    },
                    'Do nothing': function() {
                        var button = document.getElementById("doNothing");
                        annyang.pause();
                        button.click();
                    },
                    '1': function() {
                        var button = document.getElementById("yes");
                        annyang.pause();
                        button.click();
                    },
                    '2': function() {
                        var button = document.getElementById("doNothing");
                        annyang.pause();
                        button.click();
                    },
                    'Replay (Narration)': function() {
                        annyang.pause();
                        replay_narration();
                    }
                };
                annyang.removeCommands();
                annyang.addCommands(commands);
            }
        `);
    } else {
        play('B2_2');
        return $(`
            <div id="trytoturnTVoffS">
                <div id="buttons">
                    <button class="hiddenOption">Placeholder</button>
                </div>
                <p id="paragraphs">You turn the television off. To your surprise, it comes back on! The television just continue playing over and over again.</p>  
                <audio controls autoplay loop class="music"><source src="./Assets/TelevisionFaintSE.mp3" type='audio/mp3'></audio>
            </div>    
        `);
    }
}

// Search the cupboard scene
const SCB = function () {
    play('BR8');
    play('BR9');
    hammerW = true;
    return $(`
        <div id="searchcupboardS">
            <div id="buttons">
                <button class="option" id="breakdoor">Break door with hammer</button>
                <button class="option" id="Hideincupboard">Hide in the cupboard</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">In the cupboard, you find a hammer. What do you do?</p>  
        </div>    
        <script>    
        if (annyang) {
            var commands = {
                'Break down the door (with the hammer)': function() {
                    var button = document.getElementById("breakdoor");
                    annyang.pause();
                    button.click();
                },
                '(Hide in the) cupboard': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                '(Height in the) cupboard': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("breakdoor");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("Hideincupboard");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Break door with hammer scene
const BD = function () {
    play('BR10');
    play('BR10_2');
    return $(`
        <div id="breakdowndoorS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You hold your hammer with both hands, then swing down. After a couple of tries, the door breaks! You enter the lobby with your trusty new hammer.</p>  
            <audio controls autoplay class="music"><source src="./Assets/DoorSmashSE.mp3" type='audio/mp3'></audio>
        </div>    
    `);
}

// Toilet seat scene
const TS = function () {
    play('BR11');
    play('BR11_2');
    return $(`
        <div id="toiletseatS">
            <div id="buttons">
                <button class="option" id="Closetoiletseat">Close the toilet seat</button>
                <button class="option" id="back">Leave the bathroom</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You open the toilet seat. To your surprise, it’s full of bugs! What do you do?</p>  
            <audio controls autoplay loop class="music"><source src="./Assets/BugCrawlingSE.mp3" type='audio/mp3'></audio>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Close the) toilet seat': function() {
                    var button = document.getElementById("Closetoiletseat");
                    annyang.pause();
                    button.click();
                },
                'Leave (the bathroom)': function() {
                    var button = document.getElementById("back");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("Closetoiletseat");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("back");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>  
    `);
}

// Close toilet seat scene
const CTS = function () {
    play('BR12');
    return $(`
        <div id="closeseatS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">There is a cupboard below the sink. You decide to search it.</p>  
        </div>    
        <script>    
        if (annyang) {
            var commands = {
                '(Search the) cupboard': function() {
                    var button = document.getElementById("searchcup");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("searchcup");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    replay_narration();
                    annyang.pause();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Good ending scene
const GE = function () {
    play('BR14');
    play('S5_8');
    return $(` 
        <div id="GoodEndingS">
            <div id="buttons">
                <button class="option" id="replayGame">Replay game</button>
            </div>
            <p id="paragraphs">You successfully escaped the old mansion! What do you do?</p> 
        </div>
        <script>    
        if (annyang) {
            var commands = {
                'Replay game': function() {
                    var button = document.getElementById("replayGame");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("replayGame");
                    annyang.pause();
                    button.click();
                },
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Bad ending scene
const BE = function () {
    play('S5_4');
    play('S5_8');
    return $(` 
        <div id="BadEndingS">
            <div id="buttons">
                <button class="option" id="replayGame">Replay game</button>
            </div>
            <p id="paragraphs">Game over. What do you do?</p> 
        </div>
        <script>    
        if (annyang) {
            var commands = {
                'Replay game': function() {
                    var button = document.getElementById("replayGame");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("replayGame");
                    annyang.pause();
                    button.click();
                },
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}


// Basement scene
const BM = function () {
    play('BS1');
    play('BS1_2');
    if (flashlightW) {
        play('BS1_4');
        return $(` 
            <div id="basementS">
                <div id="buttons">
                    <button class="option" id="leavedoor">Leave through the door</button>
                    <button class="option" id="crawlfloor">Crawl through the floor</button>
                    <button class="option" id="useflash">Use the flashlight</button>
                    <button class="option Replay" id="replay">Replay narration</button>
                </div>
                <p id="paragraphs">You fainted. You wake up in a cold room. It is too dark to see. It seems to be the basement. There is a door behind you. What do you do?</p> 
                <audio controls autoplay loop class="music"><source src="./Assets/BasementSE.mp3" type='audio/mp3'></audio>
            </div>
            <script>
            if (annyang) {
                var commands = {
                    'Leave (through the door)': function() {
                        var button = document.getElementById("leavedoor");
                        annyang.pause();
                        button.click();
                    },
                    'Crawl through the (floor)': function() {
                        var button = document.getElementById("crawlfloor");
                        annyang.pause();
                        button.click();
                    },
                    '(Use the) flashlight': function() {
                        var button = document.getElementById("useflash");
                        annyang.pause();
                        button.click();
                    },
                    '1': function() {
                        var button = document.getElementById("leavedoor");
                        annyang.pause();
                        button.click();
                    },
                    '2': function() {
                        var button = document.getElementById("crawlfloor");
                        annyang.pause();
                        button.click();
                    },
                    '3': function() {
                        var button = document.getElementById("useflash");
                        annyang.pause();
                        button.click();
                    },
                    'Replay (Narration)': function() {
                        annyang.pause();
                        replay_narration();
                    }
                };
                annyang.removeCommands();
                annyang.addCommands(commands);
            }
            </script>
        `);
    } else {
        play('BS1_3');
        return $(` 
            <div id="basementS">
                <div id="buttons">
                    <button class="option" id="leavedoor">Leave through the door</button>
                    <button class="option" id="crawlfloor">Crawl through the floor</button>
                    <button class="option" id="wallguide">Walk by the wall</button>
                    <button class="option Replay" id="replay">Replay narration</button>
                </div>
                <p id="paragraphs">You fainted. You wake up in a cold room. It is too dark to see. It seems to be the basement. There is a door behind you. What do you do?</p> 
                <audio controls autoplay loop class="music"><source src="./Assets/BasementSE.mp3" type='audio/mp3'></audio>
            </div>
            <script>
            if (annyang) {
                var commands = {
                    'Leave (through the door)': function() {
                        var button = document.getElementById("leavedoor");
                        annyang.pause();
                        button.click();
                    },
                    'Crawl through the (floor)': function() {
                        var button = document.getElementById("crawlfloor");
                        annyang.pause();
                        button.click();
                    },
                    '(Walk by the) wall': function() {
                        var button = document.getElementById("wallguide");
                        annyang.pause();
                        button.click();
                    },
                    '1': function() {
                        var button = document.getElementById("leavedoor");
                        annyang.pause();
                        button.click();
                    },
                    '2': function() {
                        var button = document.getElementById("crawlfloor");
                        annyang.pause();
                        button.click();
                    },
                    '3': function() {
                        var button = document.getElementById("wallguide");
                        annyang.pause();
                        button.click();
                    },
                    'Replay (Narration)': function() {
                        annyang.pause();
                        replay_narration();
                    }
                };
                annyang.removeCommands();
                annyang.addCommands(commands);
            }
            </script>
        `);
    }
}

// Bedroom scene
const BDR = function () {
    play('B1');
    play('B1_2');
    play('B1_3');
    return $(` 
        <div id="bedroomS">
            <div id="buttons">
                <button class="option" id="off">Turn the television off</button>
                <button class="option" id="watch">Watch the television</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You enter the bedroom. Suddenly, the television turns on. What do you do?</p> 
            <audio controls autoplay loop class="music"><source src="./Assets/TelevisionSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>
        if (annyang) {
            var commands = {
                'Turn the television off': function() {
                    var button = document.getElementById("off");
                    annyang.pause();
                    button.click();
                },
                'Watch the television': function() {
                    var button = document.getElementById("watch");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("off");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("watch");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Smash TV scene
const SMTV = function () {
    play('B4');
    play('B4_2');
    return $(` 
        <div id="smashtvS">
            <div id="buttons">
                <button class="option" id="searchdrawer">Search the drawers</button>
                <button class="option" id="underbed">Look under the bed</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You smash the TV with all your strength. It shatters and everything becomes quiet. What do you do?</p> 
            <audio controls autoplay class="music"><source src="./Assets/SmashSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>
        if (annyang) {
            var commands = {
                '(Search the) drawers': function() {
                    var button = document.getElementById("searchdrawer");
                    annyang.pause();
                    button.click();
                },
                'Look under the bed': function() {
                    var button = document.getElementById("underbed");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("searchdrawer");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("underbed");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Look under the bed in the bedroom scene
const BBDR = function () {
    play('B5');
    play('B7');
    return $(` 
        <div id="lookunderbedDrawerS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You find a note. It tells you to look under the right side of the bed.</p> 
        </div>
    `);
}

// Find a gold key under the bed scene
const LRS = function () {
    play('B9_2');
    return $(` 
        <div id="lookrightsideS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You find a golden key! Apparently it is spare key for the front door. You can leave now.</p> 
        </div>
    `);
}

// Watch TV scene
const WTV = function () {
    play('B6');
    play('B7');
    return $(` 
        <div id="watchtvS">
            <div id="buttons">
                <button class="option" id="leftside">Left side of the bed</button>
                <button class="option" id="rightside">Right side of the bed</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You choose to watch the television and you heard a voice to tell you to look under the bed. Which side do you look at?</p> 
            <audio controls autoplay class="music"><source src="./Assets/TelevisionSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>
        if (annyang) {
            var commands = {
                'Left (side of the bed)': function() {
                    var button = document.getElementById("leftside");
                    annyang.pause();
                    button.click();
                },
                'Right (side of the bed)': function() {
                    var button = document.getElementById("rightside");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("leftside");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("rightside");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Look under bed scene
const LUB = function () {
    play('B7');
    return $(` 
        <div id="lookunderbedS">
            <div id="buttons">
                <button class="option" id="leftside">Left side of the bed</button>
                <button class="option" id="rightside">Right side of the bed</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">Which side do you look at?</p> 
        </div>
        <script>
        if (annyang) {
            var commands = {
                'Left (side of the bed)': function() {
                    var button = document.getElementById("leftside");
                    annyang.pause();
                    button.click();
                },
                'Right (side of the bed)': function() {
                    var button = document.getElementById("rightside");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("leftside");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("rightside");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Look left side of the bed
const LBS = function () {
    play('BE1');
    return $(` 
        <div id="leftbedS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">Unfortunately you chose the wrong side. There's someone waiting for you...</p> 
            <audio controls autoplay class="music"><source src="./Assets/DevilLaughSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

// Leave through door scene
const LTD = function () {
    play('BS2');
    play('BS2_2');
    return $(` 
        <div id="leavethroughdoorS">
            <div id="buttons">
                <button class="option" id="crawlfloor">Crawl through the floor</button>
                <button class="option" id="wallguide">Walk by the wall</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">The door is locked. It seems like you need a key to open it. What do you do?</p> 
            <audio controls autoplay class="music"><source src="./Assets/DoorLockedSE.mp3" type='audio/mp3'></audio>
        </div>
        <script>
        if (annyang) {
            var commands = {
                'Crawl (through the floor)': function() {
                    var button = document.getElementById("crawlfloor");
                    annyang.pause();
                    button.click();
                },
                'Walk (by the wall)': function() {
                    var button = document.getElementById("wallguide");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("crawlfloor");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("wallguide");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Use flashlight in the basement scene
const TDR = function () {
    play('BS5');
    play('BS5_2');
    return $(` 
        <div id="tableDrawerS">
            <div id="buttons">
                <button class="option" id="openleft">Open the left drawer</button>
                <button class="option" id="openright">Open the right drawer</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You grip your flashlight in your back pocket. You turn it on, and find a drawer. You walk towards the desk with two drawers. Which do you open?</p> 
        </div>
        <script>
        if (annyang) {
            var commands = {
                '(Open the) left drawer': function() {
                    var button = document.getElementById("openleft");
                    annyang.pause();
                    button.click();
                },
                '(Open the) right drawer': function() {
                    var button = document.getElementById("openright");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("crawlfloor");
                    annyang.pause();
                    button.click();
                },
                '2': function() {
                    var button = document.getElementById("wallguide");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

// Open left drawer scene
const OLS = function () {
    play('BS6');
    return $(` 
        <div id="openleftS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You find a key in the drawer. You quickly rush back to the door and exit using the key. You find yourself back in the lobby.</p> 
        </div>
    `);
}

// Open right drawer scene
const ORS = function () {
    return $(` 
        <div id="openrightS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <audio controls autoplay class="music"><source src="./Assets/JumpscareSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

// Walk by the wall scene - BAD ENDING
const WBW = function () {
    play('BS4');
    return $(` 
        <div id="walkbywallS">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You decided to use the walls as the guidance to walk around the room. However, a creature grabbed your shoulder from behind and trapped you in the basement forever.</p> 
            <audio controls autoplay class="music"><source src="./Assets/WallSE.mp3" type='audio/mp3'></audio>
        </div>
    `);
}

// Crawl on the floor scene
const COF = function () {
    play('BS3');
    play('BS5_3');
    return $(` 
        <div id="crawlfloorS">
            <div id="buttons">
                <button class="option" id="openright">Open the right drawer</button>
                <button class="option Replay" id="replay">Replay narration</button>
            </div>
            <p id="paragraphs">You crawl around the room until you find a desk with one drawer. What do you do?</p> 
        </div>
        <script>
        if (annyang) {
            var commands = {
                '(Open the) right drawer': function() {
                    var button = document.getElementById("openright");
                    annyang.pause();
                    button.click();
                },
                '1': function() {
                    var button = document.getElementById("openright");
                    annyang.pause();
                    button.click();
                },
                'Replay (Narration)': function() {
                    annyang.pause();
                    replay_narration();
                }
            };
            annyang.removeCommands();
            annyang.addCommands(commands);
        }
        </script>
    `);
}

///////////////////////////////////////////////////////Choose option functions///////////////////////////////////////////////////////
// Press spacebar to navigate from menu to the start scene
document.getElementById("menu").addEventListener("keypress", function () {
    if (event.keyCode == 32) {
        $("#menu").remove();
        $("#startS").hide();
        $('#root').append(WS);
        setTimeout(function () {
            $('#warningS').remove();
            $('#root').append(SS);
            $("#startS").show();
            $('audio')[0].play();
            $('audio').prop("volume", 0.1);
            Replay();
            getCTA();
            getVH();
            getHR();
        }, 7000);
    }
});

// Player chooses visit house using spacebar
function getVH() {
    obj = document.getElementById("visitHouse");
    obj.focus();
    $("#visitHouse").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            Replay();
            kit();
            bath();
            bed();
            trytoleavehouse();
        } else if (event.keyCode == 40) {
            var x = document.getElementById('callTripleA');
            var y = document.getElementById('HitchRide');
            var z = document.getElementById('wait');
            if (x == null && y == null) {
                z.focus();
            } else if (x == null) {
                y.focus();
            } else {
                x.focus();
            }
        }
    })
}
//call triple A
function getCTA() {
    obj = document.getElementById("callTripleA");
    $("#callTripleA").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CTA);
            Replay();
            getVH();
            getHR();
        } else if (event.keyCode == 40) {
            var x = document.getElementById('HitchRide');
            var y = document.getElementById('wait');
            if (x == null) {
                y.focus();
            } else {
                x.focus();
            }
        } else if (event.keyCode == 38) {
            document.getElementById('visitHouse').focus();
        }
    })
}


function getHR() {
    obj = document.getElementById("HitchRide");
    $("#HitchRide").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(HR);
            Replay();
            getVH();
            getCTA();
            keepwait();
        } else if (event.keyCode == 40) {
            document.getElementsByClassName('Replay')[0].focus();
        } else if (event.keyCode == 38) {
            var x = document.getElementById("callTripleA");
            if (x == null) {
                document.getElementById('visitHouse').focus();
            } else {
                x.focus();
            }
        }
    })
}

// Keep waiting
function keepwait() {
    obj = document.getElementById("wait");
    $("#wait").on('keydown click', function () {
        if (event.type == 'click') {

            if (hours == 6) {
                stop_speech();
                event.preventDefault();
                event.target.parentNode.parentNode.remove();
                $('#root').append(KWBE);
                setTimeout(function () {
                    $('#keepwaitingBES').remove();
                    $('#root').append(BE);
                    ReplayGame();
                }, 8000);
            } else if (hours == 5) {
                stop_speech();
                event.preventDefault();
                event.target.parentNode.parentNode.remove();
                manuscript.set('S5', "You waited for " + hours + " hours but no one passes by. You start to have a bad feeling of someone is staring at you in the dark.")
                $('#root').append(KW);
                Replay();
                document.getElementById('paragraphsHours').innerHTML = "You waited for " + hours + " hours but no one passes by. You start to have a bad feeling of someone is staring at you in the dark. What do you do?";
                hours++;
                keepwait();
                getVH();
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
                keepwait();
                getVH();
            }
        } else if (event.keyCode == 40) {
            document.getElementsByClassName('Replay')[0].focus();
        } else if (event.keyCode == 38) {
            x = document.getElementById('visitHouse');
            y = document.getElementById('callTripleA');
            if (y == null) {
                x.focus();
            } else {
                y.focus();
            }
        }
    })
}

// Kitchen
function kit() {
    obj = document.getElementById("kitchen");
    obj.focus();
    $("#kitchen").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(KT);
            Replay();
            hide();
            investigatekit();
        } else if (event.keyCode == 40) {
            document.getElementById('bedroom').focus();

        }
    })
}

// Player tries to leave the house in the lobby
function trytoleavehouse() {
    obj = document.getElementById("leave");
    $("#leave").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(TTLH);
            Replay();
            back();
        } else if (event.keyCode == 40) {
            document.getElementsByClassName('Replay')[0].focus();
        } else if (event.keyCode == 38) {
            document.getElementById('bathroom').focus();
        }
    })
}


// Hide in kitchen
function hide() {
    obj = document.getElementById("hide");
    // obj.focus();
    $("#hide").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(HIK);
            Replay();
            back();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.nextElementSibling.previousElementSibling.focus();
        }
    })
}

// Back to the lobby
function back() {
    obj = document.getElementById("back");
    obj.focus();
    $("#back").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            Replay();
            kit();
            bath();
            bed();
            trytoleavehouse();
        } else if (event.keyCode == 40) {
            document.getElementsByClassName('Replay')[0].focus();

        } else if (event.keyCode == 38) {
            obj.focus();
        }
    })

}

// Investigate the kitchen
function investigatekit() {
    obj = document.getElementById("investigate");
    obj.focus();
    $("#investigate").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(IIK);
            Replay();
            searchFri();
            searchOven();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Search fridge
function searchFri() {
    obj = document.getElementById("searchFridge");
    obj.focus();
    $("#searchFridge").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(SF);
            Replay();
            frired();
            frigreen();
        } else if (event.keyCode == 40) {
            obj.focus();

        }
    })
}
// Red apple
function frired() {
    obj = document.getElementById("red");
    obj.focus();
    $("#red").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(RA);
            setTimeout(function () {
                $('#redappleS').remove();
                $('#root').append(BM);
                if (flashlightW) {
                    Replay();
                    leavethroughdoor();
                    crawlfloor();
                    flashBase();
                } else {
                    Replay();
                    leavethroughdoor();
                    crawlfloor();
                    walkbythewall();
                }
            }, 3000);
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Green apple
function frigreen() {
    obj = document.getElementById("green");
    $("#green").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(GA);
            Replay();
            pickgreen();
            ignoregreenapple();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}

// Pick green apple
function pickgreen() {
    obj = document.getElementById("pickup");
    obj.focus();
    $("#pickup").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(PGA);
            Replay();
            pressbutton();
            putremote();
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Ignore green apple
function ignoregreenapple() {
    obj = document.getElementById("ignore");
    $("#ignore").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(IGA);
            setTimeout(function () {
                $('#ignoreGreenS').remove();
                $('#root').append(SO);
                Replay();
                clean();
                leaveobject();
            }, 4500);
            searchOven();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}

// Press button
function pressbutton() {
    obj = document.getElementById("press");
    obj.focus();
    $("#press").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(PR);
            Replay();
            back();
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Put remote
function putremote() {
    obj = document.getElementById("putback");
    $("#putback").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(PRB);
            Replay();
            frired();
            searchOven();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}

// Search oven
function searchOven() {
    obj = document.getElementById("searchOven");
    $("#searchOven").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(SO);
            Replay();
            clean();
            leaveobject();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();

        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }


    })
}

// Clean
function clean() {
    obj = document.getElementById("clean");
    $("#clean").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CO);
            Replay();
            offradio();
            change();
        } else if (event.keyCode == 38) {
            obj.focus();

        } else if (event.keyCode == 40) {
            obj.nextElementSibling.nextElementSibling.focus();
        }
    })
}

// Turn off the radio
function offradio() {
    obj = document.getElementById("turnOffRadio");
    obj.focus();
    $("#turnOffRadio").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(OR);
            setTimeout(function () {
                $('#offradioS').remove();
                $('#root').append(LO);
                Replay();
                keepsearch();
                badEndInKit();
            }, 1600);
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Change the radio frequency
function change() {
    obj = document.getElementById("changeFrequency");
    $("#changeFrequency").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CF);
            Replay();
            findkey();
            ignoreinstruction();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();

        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

function trytoleaveCupboard() {
    obj = document.getElementById("bangCupboard");
    obj.focus();
    $("#bangCupboard").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CB);
            Replay();
            bangCupboardAgain();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

function bangCupboardAgain() {
    obj = document.getElementById("bangEvenMore");
    obj.focus();
    $("#bangEvenMore").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(SC);
            setTimeout(function () {
                $('#stuckCupboardS').remove();
                $('#root').append(BE);
                ReplayGame();
            }, 16500);
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Find key
function findkey() {
    obj = document.getElementById("lookundermat");
    obj.focus();
    $("#lookundermat").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(FKIK);
            Replay();
            back();
            leavehouse();
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Ignore instruction
function ignoreinstruction() {
    obj = document.getElementById("ignoreinstruction");
    $("#ignoreinstruction").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LO);
            Replay();
            keepsearch();
            badEndInKit();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Leave the house
function leavehouse() {
    obj = document.getElementById("leavehouse");
    obj.focus();
    $("#leavehouse").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LH);
            setTimeout(function () {
                $('#goodending1S').remove();
                $('#root').append(GE);
                ReplayGame();
            }, 4000);
        } else if (event.keyCode == 38) {
            obj.nextElementSibling.nextElementSibling.focus();

        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Leave object
function leaveobject() {
    obj = document.getElementById("leave");
    obj.focus();
    $("#leave").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LO);
            Replay();
            keepsearch();
            badEndInKit();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();

        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Keep searching
function keepsearch() {
    obj = document.getElementById("keepsearch");
    $("#keepsearch").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(KS);
            Replay();
            back();
            badEndInKit();
        } else if (event.keyCode == 38) {
            obj.focus();

        } else if (event.keyCode == 40) {
            obj.nextElementSibling.nextElementSibling.focus();
        }
    })
}

// Bad ending in kitchen
function badEndInKit() {
    obj = document.getElementById("lookdoor");
    obj.focus();
    $("#lookdoor").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BEIK);
            setTimeout(function () {
                $('#kitchenbeS').remove();
                $('#root').append(BE);
                ReplayGame();
            }, 23500);
            Replay();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Bathroom
function bath() {
    obj = document.getElementById("bathroom");
    $("#bathroom").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BT);
            Replay();
            turnoffsink();
            exitbath();
        } else if (event.keyCode == 40) {
            document.getElementById("leave").focus();
        } else if (event.keyCode == 38) {
            document.getElementById("bedroom").focus();
        }
    })
}

// Turn off the sink
function turnoffsink() {
    obj = document.getElementById("turnOffSink");
    obj.focus();
    $("#turnOffSink").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(TOS);
            Replay();
            lockdoor();
            hideincupboard();
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Hide in cupboard
function hideincupboard() {
    obj = document.getElementById("Hideincupboard");
    $("#Hideincupboard").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(HIC);
            Replay();
            leavecup();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    });
}

// Lock the door
function lockdoor() {
    obj = document.getElementById("LockTheDoor");
    obj.focus();
    $("#LockTheDoor").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LD);
            Replay();
            hideincupboard();
            climbvent();
        } else if (event.keyCode == 40) {
            if (obj.nextElementSibling.id == "replay")
                obj.focus();
            else
                obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}

// Leave cupboard
function leavecup() {
    obj = document.getElementById("Leavecupboard");
    obj.focus();
    $("#Leavecupboard").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LC);
            Replay();
            trytoleaveCupboard();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}


// Climb the vent
function climbvent() {
    obj = document.getElementById("Hideinvent");
    obj.focus();
    $("#Hideinvent").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CV);
            Replay();
            setTimeout(function () {
                $('#climbventS').remove();
                $('#root').append(BM);
                flashBase();
                crawlfloor();
                walkbythewall();
                leavethroughdoor();
                Replay();
            }, 12000);
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}

// Exit bathroom
function exitbath() {
    obj = document.getElementById("exitbathroom");
    $("#exitbathroom").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(EB);
            Replay();
            searchcupboard();
            toiletseat();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}


// Search cupboard
function searchcupboard() {
    obj = document.getElementById("searchcup");
    obj.focus();
    $("#searchcup").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(SCB);
            Replay();
            breakdowndoor();
            hideincupboard();
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Break door
function breakdowndoor() {
    obj = document.getElementById("breakdoor");
    obj.focus();
    $("#breakdoor").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BD);
            setTimeout(function () {
                $('#breakdowndoorS').remove();
                $('#root').append(VH);
                Replay();
                kit();
                bath();
                bed();
                trytoleavehouse();
            }, 11000);
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Toilet seat
function toiletseat() {
    obj = document.getElementById("openseat");
    $("#openseat").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(TS);
            Replay();
            back();
            closetoiletseat();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}

// Close toilet seat
function closetoiletseat() {
    obj = document.getElementById("Closetoiletseat");
    obj.focus();
    $("#Closetoiletseat").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CTS);
            setTimeout(function () {
                $('#closeseatS').remove();
                $('#root').append(SCB);
                Replay();
                breakdowndoor();
                hideincupboard();
            }, 4500);
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}


//bedroom
function bed() {
    obj = document.getElementById("bathroom");
    $("#bedroom").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BDR);
            Replay();
            toff();
            watchtv();
        } else if (event.keyCode == 40) {
            document.getElementById('bathroom').focus();
        } else if (event.keyCode == 38) {
            document.getElementById('kitchen').focus();
        }
    })
}

// Turn off the TV
function toff() {
    obj = document.getElementById("off");
    obj.focus();
    $("#off").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(TTVO);
            if (!hammerW) {
                setTimeout(function () {
                    $('#trytoturnTVoffS').remove();
                    $('#root').append(BM);
                    Replay();
                    flashBase();
                    crawlfloor();
                    leavethroughdoor();
                    walkbythewall();
                }, 10000);
            } else {
                Replay();
                smashtv();
                doNothingtv();
            }
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Player agreed to break the TV with the hammer
function smashtv() {
    obj = document.getElementById("yes");
    obj.focus();
    $("#yes").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(SMTV);
            Replay();
            drawerinbedroom();
            lookunderbed();
        } else if (event.keyCode == 40) {
            document.getElementById('doNothing').focus();
        }
    })
}

// Player decided to do nothing with the hammer
function doNothingtv() {
    obj = document.getElementById("doNothing");
    $("#doNothing").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BM);
            Replay();
            flashBase();
            leavethroughdoor();
            crawlfloor();
            walkbythewall();
        } else if (event.keyCode == 40) {
            document.getElementById('replay').focus();
        } else if (event.keyCode == 38) {
            document.getElementById('yes').focus();
        }
    })
}

// Look in the drawers 
function drawerinbedroom() {
    obj = document.getElementById("searchdrawer");
    obj.focus();
    $("#searchdrawer").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BBDR);
            setTimeout(function () {
                $('#lookunderbedDrawerS').remove();
                $('#root').append(LUB);
                Replay();
                lookleftside();
                lookrightside();
            }, 5000);
            lookunderbed();
            Replay();
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Look under the bed
function lookunderbed() {
    obj = document.getElementById("underbed");
    $("#underbed").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LUB);
            Replay();
            lookleftside();
            lookrightside();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Look under the left side of the bed
function lookleftside() {
    obj = document.getElementById('leftside');
    obj.focus();
    $("#leftside").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LBS);
            setTimeout(function () {
                $('#leftbedS').remove();
                $('#root').append(BE);
                ReplayGame();
            }, 5000);
        } else if (event.keyCode == 40) {
            document.getElementById('rightside').focus();
        }
    })
}

// Look under the right side of the bed
function lookrightside() {
    obj = document.getElementById('rightside');
    $("#rightside").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LRS);
            setTimeout(function () {
                $('#lookrightsideS').remove();
                $('#root').append(GE);
                ReplayGame();
            }, 8000);
        } else if (event.keyCode == 38) {
            if (obj.previousElementSibling == null) {
                obj.focus();
            } else {
                obj.previousElementSibling.focus();
            }
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Watch the television
function watchtv() {
    obj = document.getElementById('watch');
    $("#watch").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(WTV);
            Replay();
            lookleftside();
            lookrightside();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            if (obj.previousElementSibling == null) {
                obj.focus();
            } else {
                obj.previousElementSibling.focus();
            }
        }
    })
}

// Open right drawer
function openright() {
    obj = document.getElementById('openright');
    if (document.getElementById('openleft') == null) {
        obj.focus();
    }
    $("#openright").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(ORS);
            setTimeout(function () {
                $('#openrightS').remove();
                $('#root').append(OLS);
            }, 1500);
            setTimeout(function () {
                $('#openleftS').remove();
                $('#root').append(VH);
                Replay();
                kit();
                bath();
                bed();
                trytoleavehouse();
            }, 10000);
        } else if (event.keyCode == 38) {
            if (document.getElementById('openleft') != null) {
                document.getElementById('openleft').focus();
            } else {
                document.getElementById('openright').focus();
            }
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Open left drawer
function openleft() {
    obj = document.getElementById('openleft');
    obj.focus();
    $("#openleft").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(OLS);
            setTimeout(function () {
                $('#openleftS').remove();
                $('#root').append(VH);
                Replay();
                kit();
                bath();
                bed();
                trytoleavehouse();
            }, 8500);
        } else if (event.keyCode == 40) {
            document.getElementById('openright').focus();
        }
    })
}

// Try to leave through the door
function leavethroughdoor() {
    obj = document.getElementById('leavedoor');
    obj.focus();
    $("#leavedoor").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LTD);
            Replay();
            crawlfloor();
            walkbythewall();
        } else if (event.keyCode == 40) {
            document.getElementById('crawlfloor').focus();
        }
    })
}

// Walk by the wall 
function walkbythewall() {
    obj = document.getElementById('wallguide');
    $("#wallguide").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(WBW);
            setTimeout(function () {
                $('#walkbywallS').remove();
                $('#root').append(BE);
                ReplayGame();
            }, 10000);
        } else if (event.keyCode == 40) {
            document.getElementsByClassName('Replay')[0].focus();
        } else if (event.keyCode == 38) {
            document.getElementById('crawlfloor').focus();
        }


    })
}

// Use flashlight in the basement
function flashBase() {
    obj = document.getElementById('useflash');
    $("#useflash").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(TDR);
            Replay();
            openleft();
            openright();
        } else if (event.keyCode == 38) {
            document.getElementById('crawlfloor').focus();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Crawl through the floor
function crawlfloor() {
    obj = document.getElementById('crawlfloor');
    if (document.getElementById('leavedoor') == null) {
        obj.focus();
    }
    $("#crawlfloor").on('keydown click', function () {
        if (event.type == 'click') {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(COF);
            Replay();
            openright();
        } else if (event.keyCode == 38) {
            if (document.getElementById('leavedoor') != null) {
                document.getElementById('leavedoor').focus();
            } else {
                obj.focus();
            }
        } else if (event.keyCode == 40) {
            if (document.getElementById('useflash') != null)
                document.getElementById('useflash').focus();
            else
                document.getElementById('wallguide').focus();
        }
    })
}

// Player chooses to replay the game
function ReplayGame() {
    obj = document.getElementById('replayGame');
    obj.focus();
    $('#replayGame').on('keydown click', function () {
        if (event.type == 'click') {
            location.reload();
        }
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
manuscript.set('S5_7', "But now you are no longer alone. You look behind yourself and sees a ghostly figure with a most terrifying face.")
manuscript.set('S5_8', "Replay game")
manuscript.set('SE_1', "What do you do? Visit the house. Hitch a ride. Replay narration.")
manuscript.set('L1', "It is darkly lit and dusty, and full of old paintings on the walls. You notice three different rooms. The bedroom, the bathroom and the kitchen.")
manuscript.set('L1_2', "What do you do? Enter the kitchen. Enter the bedroom. Enter the bathroom. Leave the house. Replay narration.")
manuscript.set('LV', "You try to leave the house. To your dismay, the door is shut and locked behind you!")
manuscript.set('LV_2', "The keyhole is embossed with a unique snake pattern. It seems like you need a key to leave. What do you do?")
manuscript.set('LV_3', "Back to the lobby. Replay narration.")
manuscript.set('LV2', "With the key in your hand you open the large wooden doors. You push hard and the doors creak to an open. Finally, you've escaped!")
manuscript.set('B1', "You enter the bedroom.")
manuscript.set('B1_2', "Suddenly, the television turns on.")
manuscript.set('B1_3', "What do you do? Turn the television off. Watch the television. Replay narration.")
manuscript.set('B2', "You turn the television off. To your surprise, it comes back on!")
manuscript.set('B2_2', "The television just continue playing over and over again.")
manuscript.set('B3', "You grip your hammer with your right hand.")
manuscript.set('B3_2', "What do you do? Smash the TV. Do nothing. Replay narration.")
manuscript.set('B4', "You smash the TV with all your strength. It shatters and everything becomes quiet.")
manuscript.set('B4_2', "What do you do? Search the drawers. Look under the bed. Replay narration.")
manuscript.set('B5', "You find a note. It tells you to look under the right side of the bed.")
manuscript.set('B6', "You choose to watch the television and you heard a voice to tell you to look under the bed.")
manuscript.set('B7', "Which side do you look at? Left side of the bed. Right side of the bed. Replay narration.")
manuscript.set('B8', "You check the left side of the bed.")
manuscript.set('B9', "You check the right side of the bed.")
manuscript.set('B9_2', "You find a golden key! Apparently it is spare key for the front door. You can leave now.")
manuscript.set('BS1', "You fainted.")
manuscript.set('BS1_2', "You wake up in a cold room. It is too dark to see. It seems to be the basement. There is a door behind you.")
manuscript.set('BS1_3', "What do you do? Leave through the door. Crawl through the floor. Walk by the wall. Replay narration.")
manuscript.set('BS1_4', "What do you do? Leave through the door. Crawl through the floor. Use the flashlight. Replay narration.")
manuscript.set('BS2', "The door is locked. It seems like you need a key to open it.")
manuscript.set('BS2_2', "What do you do? Crawl through the floor. Walk by the wall. Replay narration.")
manuscript.set('BS3', "You crawl around the room until you find a desk with one drawer.")
manuscript.set('BS4', "You decided to use the walls as the guidance to walk around the room. However, a creature grabbed your shoulder from behind and trapped you in the basement forever.")
manuscript.set('BS5', "You grip your flashlight in your back pocket. You turn it on, and find a drawer. You walk towards the desk with two drawers.")
manuscript.set('BS5_2', "Which do you open? Open the left drawer. Open the right drawer. Replay narration.")
manuscript.set('BS5_3', "What do you do? Open the right drawer. Replay narration.")
manuscript.set('BS6', "You find a key in the drawer. You quickly rush back to the door and exit using the key. You find yourself back in the lobby.")
manuscript.set('BS7', "You decide to check the right drawer.")
manuscript.set('K1', "You enter the kitchen. There's a large fridge to your left, and a kitchen counter next to it. You hear a peculiar sound coming from the counter.")
manuscript.set('K1_2', "What do you do? Investigate the noise. Hide. Replay narration.")
manuscript.set('K2', "You follow the source of the noise but you don't find anything. There's a fridge and an oven in the kitchen.")
manuscript.set('K2_2', "What do you do? Search the fridge. Search the oven. Replay narration.")
manuscript.set('K3', "You find two apples inside the fridge. A red apple and a green apple.")
manuscript.set('K3_2', "What do you do? Pick up the red apple. Pick up the green apple. Replay narration.")
manuscript.set('K4', "You pick up and eat the red apple and fainted.")
manuscript.set('K5', "You reach for the green apple. When you pull it out from the fridge, your hand slips and the apple falls to the kitchen floor.")
manuscript.set('K5_2', "What do you do? Pick up the apple. Ignore the apple. Replay narration.")
manuscript.set('K6', "You reach downwards to pick up the apple. In the gap between the fridge and the floor, you find a remote with a single red button.")
manuscript.set('K6_2', "What do you do? Press the button. Put the remote back. Replay narration.")
manuscript.set('K7', "The noise in the kitchen stops. Looks like it was from a remote-controlled speaker.")
manuscript.set('K7_2', "What do you do? Back to the lobby. Replay narration")
manuscript.set('K8', "You put the remote back where you found it.")
manuscript.set('K8_2', "What do you do next? Check the oven. Pick up the red apple. Replay narration.")
manuscript.set('K9', "You smell something burnt. You peer inside and find a charred object.")
manuscript.set('K9_2', "What do you do? Leave the object. Clean the object. Replay narration.")
manuscript.set('K10', "You clean the object. It's a radio. The noises you heard seem to have come from the radio.")
manuscript.set('K10_2', "What do you do? Turn off the radio. Change the frequency. Replay narration.")
manuscript.set('K11', "You turn off the radio.")
manuscript.set('K12', "You changed the radio frequency and you heard a voice that tells you to look under the mat.")
manuscript.set('K13', "What do you do? Look under the mat. Ignore the voice. Replay narration.")
manuscript.set('K14', "You look under the mat by the kitchen sink. You find a silver key with a snake pattern.")
manuscript.set('K15', "You decided to look around the kitchen. Suddenly, you feel a shadow flash behind you.")
manuscript.set('K15_2', "What do you do? Investigate the door. Keep searching. Replay narration.")
manuscript.set('K16', "After searching for a while, you notice a door hidden behind the fridge.")
manuscript.set('K16_2', "What do you do? Investigate the door. Leave the kitchen. Replay narration.")
manuscript.set('K17', "You pull on the fridge with all your strength. You turn the knob on the door and push. Behind the door you see a woman clad in white, back facing you. Her right hand is moving, chopping down on something in front of her. Suddenly, she stops.")
manuscript.set('K17_2', "She turns towards you with a smile, staring you in the eye.")
manuscript.set('K18', "You return to the lobby.")
manuscript.set('K19', "You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It's a flashlight.")
manuscript.set('K19_2', "What do you do? Back to the lobby. Replay narration.")
manuscript.set('K20', "You decided to ignore the green apple and check the oven instead")
manuscript.set('BR', "You enter the bathroom. The sink is on.")
manuscript.set('BR_2', "What do you do? Turn off the sink. Back to the lobby. Replay narration.")
manuscript.set('BR2', "You hear footsteps running towards you.")
manuscript.set('BR2_2', "What do you do? Lock the door. Hide in the cupboard. Replay narration.")
manuscript.set('BR3', "The footsteps come closer until it stops.")
manuscript.set('BR3_2', "Someone tries to open the door, but it is locked. Suddenly they start banging on the door.")
manuscript.set('BR3_3', "What do you do? Hide in a vent. Hide in the cupboard. Replay narration.")
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
manuscript.set('BR9', "What do you do? Break door with hammer. Hide in the cupboard. Replay narration.")
manuscript.set('BR10', "You hold your hammer with both hands, then swing down.")
manuscript.set('BR10_2', "After a couple of tries, the door breaks! You enter the lobby with your trusty new hammer.")
manuscript.set('BR11', "You open the toilet seat. To your surprise, it's full of bugs!")
manuscript.set('BR11_2', "What do you do? Close the toilet seat. Leave the bathroom. Replay narration.")
manuscript.set('BR12', "There is a cupboard below the sink. You decide to search it.")
manuscript.set('BR13', "You leave the bathroom into the lobby.")
manuscript.set('BR14', "You successfully escaped the old mansion! What do you do?")
manuscript.set('GE1', "You found the front door key and you quickly left the house.")
manuscript.set('BE1', "Unfortunately you chose the wrong side. There's someone waiting for you...")
manuscript.set('NF', "You don't have a flashlight.")
manuscript.set('WS', "This game contains sudden surprises and harsh images. The weak of heart and those poor with horror should not play.")
manuscript.set('noresult', "Sorry, I didn't catch that.")

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

function replay_narration() {
    var button = document.getElementById("replay");
    console.log(button.parentNode.parentNode.id)
    stop_speech();
    dict[button.parentNode.parentNode.id]();
}

// Narration dictionary
var dict = {
    "startS": SS,
    "houseS": VH,
    "tripleAS": CTA,
    "rideS": HR,
    "keepwaitingS": KW,
    "kitchenS": KT,
    "investigateS": IIK,
    "infridgeS": SF,
    "greenappleS": GA,
    "pickgreenS": PGA,
    "ignoreGreenS": IGA,
    "pressbtnS": PR,
    "ovenS": SO,
    "cleanOvenS": CO,
    "offradioS": OR,
    "trytoleavehouseS": TTLH,
    "hideS": HIK,
    "bathroomS": BT,
    "leaveobjectS": LO,
    "keepS": KS,
    "putbackS": PRB,
    "changefreqS": CF,
    "findkeyS": FKIK,
    "offsinkS": TOS,
    "lockdoorS": LD,
    "hidecupboardS": HIC,
    "leavecupS": LC,
    "basementS": BM,
    "climbventS": CV,
    "bangCupboardS": CB,
    "stuckCupboardS": SC,
    "exitbathS": EB,
    "trytoturnTVoffS": TTVO,
    "searchcupboardS": SCB,
    "breakdowndoorS": BD,
    "toiletseatS": TS,
    "bedroomS": BDR,
    "smashtvS": SMTV,
    "lookunderbedDrawerS": BBDR,
    "lookunderbedS": LUB,
    "lookrightsideS": LRS,
    "watchtvS": WTV,
    "leavethroughdoorS": LTD,
    "tableDrawerS": TDR,
    "openleftS": OLS,
    "openrightS": ORS,
    "walkbywallS": WBW,
    "crawlfloorS": COF
};

// Replay narration click function
const Replay = function () {
    obj = document.getElementsByClassName('Replay')[0];
    $(".Replay").on('keydown click', function () {
        if (event.type == 'click') {
            console.log("Clicked" + event.target.parentNode.parentNode.id)
            stop_speech();
            dict[event.target.parentNode.parentNode.id]();
        } else if (event.keyCode == 38) {
            if (obj.previousElementSibling == null && obj.nextElementSibling.id != "replay") {
                obj.nextElementSibling.focus();
            } else if (obj.nextElementSibling == null) {
                obj.previousElementSibling.focus();
            } else {
                obj.focus();
            }
        }
    });
}

Replay();
