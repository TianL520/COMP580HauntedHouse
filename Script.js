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
                <button class="option" id="kitchen">Enter the kitchen</button>
                <button class="option" id="bedroom">Enter the bedroom</button>
                <button class="option" id="bathroom">Enter the bathroom</button>
                <button class="option" id="leave">Leave the house</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You walk towards the house and knock. There is no response. You push the door open and to your surprise, it is unlocked. You enter the lobby of the house.
            It is darkly lit and dusty, and full of old paintings on the walls. You notice three different rooms. The bedroom, the bathroom and the kitchen.</p>
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
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">Looks like there is no service.</p>
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
                <button class="option Replay">Replay narration</button>
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
                <button class="option Replay">Replay narration</button>
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
            <p id="paragraphsHours">But now you are no longer alone. You look behind and see a ghostly figure with the most terrifying face.</p> 
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
                <button class="option Replay">Replay narration</button>
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
    return $(`
        <div id="hideS">
            <div id="buttons">
                <button class="option" id="back">Back to the lobby</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You find a cleaning closet to your right and dash inside. You feel something by your feet and pick it up. It’s a flashlight. After some time, the noises stop. You leave the kitchen and go Back to the lobby. </p>  
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
                <button class="option Replay">Replay narration</button>
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
                <button class="option Replay">Replay narration</button>
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
                <button class="option Replay">Replay narration</button>
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
                <button class="option Replay">Replay narration</button>
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
            <p id="paragraphs">You pick up and eat the red apple. You faint.</p>
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
                <button class="option Replay">Replay narration</button>
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
                <button class="option Replay">Replay narration</button>
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
    return $(`
        <div id="pressbtnS">
            <div id="buttons">
                <button class="option" id="back">Back to the lobby</button>
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">The noise in the kitchen stops. Looks like it was from a remote-controlled speaker. </p>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Back to the) lobby': function() {
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
                <button class="option Replay">Replay narration</button>
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
    play('K11_2');
    return $(`
        <div id="offradioS">
        <div id="buttons">

            </div>     
            <p id="paragraphs">You turn off the radio. What do you do?</p>
        </div>  
        <script>    
        if (annyang) {
            var commands = {
                '(Leave the) object': function() {
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
    play('K11');
    return $(`
        <div id="changefreqS">
            <div id="buttons">
                <button class="option" id="lookundermat">Look under the mat</button>
                <button class="option" id="ignoreinstruction">Ignore the instruction</button>    
                <button class="option Replay">Replay narration</button>
            </div>            
            <p id="paragraphs">You turn off the radio.</p>
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
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You look under the mat by the kitchen sink. You find a key.</p>
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
    return $(`
        <div id="goodending1S">
            <div id="buttons">
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You leave the house.</p>
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
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You close the oven door and look around the kitchen. Suddenly, you feel a shadow flash behind you. What do you do? </p>
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
                <button class="option Replay">Replay narration</button>
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
            <p id="paragraphs">You pull on the fridge with all your strength. You turn the knob on the door and push. Behind the door you see a woman clad in white, back facing you. Her right hand is moving, chopping down on something in front of her. Suddenly, she stops and turns to you. She smiles and stares you in the eye.</p>
            <audio controls autoplay loop class="music"><source src="./Assets/ChopSE.mp3" type='audio/mp3'></audio>
        </div>  
    `);
}

// Bathroom scene
const BT = function () {
    play('BR_2');
    return $(`
        <div id="bathroomS">
            <div id="buttons">
                <button class="option" id="turnOffSink">Turn off the sink</button>
                <button class="option" id="exitbathroom">Back to the lobby</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs">You enter the bathroom. The sink is on. What do you do?</p>  
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
                <button class="option Replay">Replay narration</button>
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
                <button class="option Replay">Replay narration</button>
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
                <button class="option Replay">Replay narration</button>
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
                <button class="hiddenOption">Placeholder</button>
            </div>
            <p id="paragraphs">You attempt to leave the cupboard. In your despair, you find out it is locked! What do you do? Bang on the cupboard. It’s useless! You can’t get out! What do you do? Bang even more. Didn’t I tell you it’s useless? You are now stuck in the cupboard of someone’s house. Nobody will find you here for a while.</p>  
        </div>    
    `);
}

// Climb into the vent scene
const CV = function () {
    play('BR6');
    return $(`
        <div id="climbvent">
            <p id="paragraphs"> Above the toilet, you find a loose vent shaft. You pop it open and crawl inside, putting back the cover behind you. You crawl through the vents and reach another room. </p>  
        </div>    
    `);
}

// Exit bathroom scene
const EB = function () {
    play('BR7');
    play('BR7_2');
    return $(`
        <div id="exitbath">
            <div id="buttons">
                <button class="option" id="searchcup">Search the cupboard</button>
                <button class="option" id="openseat">Open the toilet seat</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> You try to leave but the door is stuck. What do you do?</p>  
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

const SCB = function () {
    play('BR8');
    play('BR9');
    return $(`
        <div id="searchcupboard">
            <div id="buttons">
                <button class="option" id="breakdoor">Break down the door with the hammer</button>
                <button class="option" id="Hideincupboard">Hide in the cupboard</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> In the cupboard, you find a hammer. What do you do?</p>  
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

const BD = function () {
    play('BR10');
    play('BR10_2');
    return $(`
        <div id="breakdowndoor">
            <div id="buttons">
                <button class="option" id="back">Back to the lobby</button>
            </div>
            <p id="paragraphs"> You hold your hammer with both hands, then swing down. After a couple of tries, the door breaks! You enter the lobby with your trusty new hammer</p>  
        </div>    
        <script>    
        if (annyang) {
            var button = document.getElementById("back");
            annyang.pause();
            button.click();
        }
        </script>
    `);
}

// Toilet seat scene
const TS = function () {
    play('BR11');
    play('BR11_2');
    return $(`
        <div id="toiletseat">
            <div id="buttons">
                <button class="option" id="Closetoiletseat">Close the toilet seat</button>
                <button class="option" id="back">Leave the bathroom</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> You open the toilet seat. To your surprise, it’s full of bugs! What do you do? </p>  
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
        <div id="closeseat">
            <div id="buttons">
                <button class="option" id="searchcup">Search the cupboard</button>
                <button class="option Replay">Replay narration</button>
            </div>
            <p id="paragraphs"> There is a cupboard below the sink. You decide to search it</p>  
        </div>    
        <script>    
        if (annyang) {
            var commands = {
                '(Search the) cupboard': function() {
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

// good ending scene
const GE = function () {
    play('BR14');
    play('S5_8');
    return $(` 
        <div id="GoodEndingS">
            <div id="buttons">
                <button class="option" id="replayGame">Replay</button>
            </div>
            <p id="paragraphs">You successfully escaped the old mansion! What do you do?</p> 
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


//basement
const BASEMENT = function () {

    return $(` 
        <div id="basement">
            <div id="buttons">
                <button class="option" id="leavedoor">Leave through the door</button>
                <button class="option" id="crawlfloor">Crawl through the floor</button>

            </div>
            <p id="paragraphs">You faint.You wake up in a cold room. It is too dark to see. It seems to be the basement. There is a door behind you. What do you do? </p> 
        </div>
    `);
}


//bedroom
const BED = function () {
    return $(` 
        <div id="bedroomS">
            <div id="buttons">
                <button class="option" id="off">Turn the television off</button>
                <button class="option" id="watch">Watch the television</button>
            </div>
            <p id="paragraphs">You enter the bedroom. Suddenly, the television turns on. What do you do? </p> 
        </div>
    `);
}

//TV OFF
const TVO1 = function () {
    return $(` 
        <div id="tvo1">
            <div id="buttons">
                <button class="option" id="yes">Yes</button>
            </div>
            <p id="paragraphs">You grip your hammer in your right hand. Do you smash the TV?</p> 
        </div>
    `);
}

const smashtv = function () {
    return $(` 
        <div id="smashtv">
            <div id="buttons">
                <button class="option" id="searchdrawer">Search the drawers</button>
                <button class="option" id="underbed">Look under the bed</button>
            </div>
            <p id="paragraphs">You smash the TV with all your strength. It shatters. What do you do next</p> 
        </div>
    `);
}
const drawerinbedroom = function () {
    return $(` 
        <div id="drawer">
            <div id="buttons">
                <button class="option" id="underbed">Look under the bed</button>
            </div>
            <p id="paragraphs">You find a note. It tells you to look under the bed</p> 
        </div>
    `);
}
const lookunderbed = function () {
    return $(` 
        <div id="lookunderbed">
            <div id="buttons">
                <button class="option" id="leftside">Look under left side of bed</button>
                <button class="option" id="rightside">Look under right side of bed</button>
            </div>
            <p id="paragraphs">You find a note. It tells you to look under the bed</p> 
        </div>
    `);
}
const lookrightside = function () {
    return $(` 
        <div id="lookrightside">
            <div id="buttons">
            </div>
            <p id="paragraphs">You find a golden key! it must open a secret room somewhere</p> 
        </div>
    `);
}
const watchtv = function () {
    return $(` 
        <div id="watchtv">
            <div id="buttons">
            <button class="option" id="underbed">Look under the bed</button>

            </div>
            <p id="paragraphs">You choose to watch the television.</p> 
        </div>
    `);
}
const flashlight = function () {
    return $(` 
        <div id="light">
            <p id="weaponflashlight">flashlight </p> 
        </div>
    `);
}

const hammer = function () {
    return $(` 
        <div id="gethammer">
            <p id="weaponhammer">hammer </p> 
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
        getCTA();
        getHR();
        getVH();
    }
});

function getVH() {
    obj = document.getElementById("visitHouse");
    obj.focus();
    $("#visitHouse").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            Replay();
            trytoleavehouse();
            kit();
            bath();
            BED1();
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
    // obj.focus();
    $("#callTripleA").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CTA);
            Replay();
            getHR();
            getVH();
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
    // obj.focus();
    $("#HitchRide").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(HR);
            Replay();
            keepwait();
            getVH();
            getCTA();
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
// function getHR() {
//     obj = document.getElementById("HitchRide");
//     document.getElementById("HitchRide").addEventListener("keydown", function () {
//         if (event.keyCode == 32) {
//             stop_speech();
//             event.preventDefault();
//             event.target.parentNode.parentNode.remove();
//             $('#root').append(HR);
//             Replay();
//             keepwait();
//             getVH();

//         } else if (event.keyCode == 40) {
//             obj.nextElementSibling.focus();
//             // Replay();

//         } else if (event.keyCode == 38) {
//             obj.previousElementSibling.focus();
//         }
//     })
// }

// Keep waiting
function keepwait() {
    obj = document.getElementById("wait");
    obj.focus();
    $("#wait").keydown(function () {
        if (event.keyCode == 32) {

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
            } else {
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
    $("#kitchen").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#leave").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#hide").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(HIK);
            $('#root').append(flashlight);
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
    $("#back").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(VH);
            Replay();
            kit();
            bath();
            BED1();
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
    $("#investigate").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#searchFridge").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#red").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(RA);
            setTimeout(function () {
                $('#redappleS').remove();
                $('#root').append(BASEMENT);
                crawlfloor1();

                leavethroughdoor1();

            }, 3000);
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Green apple
function frigreen() {
    obj = document.getElementById("green");
    $("#green").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#pickup").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#ignore").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#press").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#putback").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#searchOven").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#clean").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#turnOffRadio").keydown(function () {
        if (event.keyCode == 32) {
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

            }, 2000);
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Change the radio frequency
function change() {
    obj = document.getElementById("changeFrequency");
    $("#changeFrequency").keydown(function () {
        if (event.keyCode == 32) {
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

// Find key
function findkey() {
    obj = document.getElementById("lookundermat");
    obj.focus();
    $("#lookundermat").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#ignoreinstruction").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#leavehouse").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#leave").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#keepsearch").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#lookdoor").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BEIK);
            Replay();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Bathroom
function bath() {
    obj = document.getElementById("bathroom");
    $("#bathroom").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#turnOffSink").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(TOS);
            Replay();
            hideincupboard();
            lockdoor();

        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Hide in cupboard
function hideincupboard() {
    obj = document.getElementById("Hideincupboard");
    obj.focus();
    $("#Hideincupboard").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(HIC);
            Replay();
            leavecup();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            if (obj.previousElementSibling == null) {
                obj.focus();
            }
        }
    });
}

// Lock the door
function lockdoor() {
    obj = document.getElementById("LockTheDoor");
    obj.focus();
    $("#LockTheDoor").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LD);
            Replay();
            hideincupboard();
            climbvent();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}



// Leave cupboard
//not working
function leavecup() {
    obj = document.getElementById("Leavecupboard");
    obj.focus();
    $("#Leavecupboard").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(LC);
            Replay();
        }
    })
}


// Climb the vent
function climbvent() {
    obj = document.getElementById("Hideinvent");
    obj.focus();
    $("#Hideinvent").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CV);
            Replay();
            setTimeout(function () {
                $('#climbvent').remove();
                $('#root').append(BASEMENT);
                crawlfloor1();

                leavethroughdoor1();
            }, 3000);
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
    $("#exitbathroom").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#searchcup").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(SCB);
            $('#root').append(hammer);
            Replay();
            hideincupboard();
            breakdowndoor();
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}

// Break door
function breakdowndoor() {
    obj = document.getElementById("breakdoor");
    obj.focus();
    $("#breakdoor").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BD);
            Replay();
            // hideincupboard();
            back();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

// Toilet seat
function toiletseat() {
    obj = document.getElementById("openseat");
    $("#openseat").keydown(function () {
        if (event.keyCode == 32) {
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
    $("#Closetoiletseat").keydown(function () {
        if (event.keyCode == 32) {
            stop_speech();
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(CTS);
            Replay();
            searchcupboard();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.previousElementSibling.focus();
        }
    })
}


//bedroom
function BED1() {
    obj = document.getElementById("bathroom");
    $("#bedroom").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BED);
            toff();
            watchtv1();
        } else if (event.keyCode == 40) {
            document.getElementById('bathroom').focus();
        } else if (event.keyCode == 38) {
            document.getElementById('kitchen').focus();
        }

    })
}


function toff() {
    obj = document.getElementById("off");
    obj.focus();
    $("#off").keydown(function () {
        if (event.keyCode == 32) {
            ham = document.getElementById('weaponhammer');
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            if (ham) {
                $('#root').append(TVO1);
                $('#weaponhammer').remove();
                smashtv1();
            } else {
                $('#root').append(BASEMENT);
                crawlfloor1();

                leavethroughdoor1();
            }
        } else if (event.keyCode == 40) {
            obj.focus();
        }
    })
}



function smashtv1() {
    obj = document.getElementById("yes");
    obj.focus();
    $("#yes").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(smashtv);
            lookunderbed1();
            drawerinbedroom1();
        }
    })
}



function drawerinbedroom1() {
    obj = document.getElementById("searchdrawer");
    obj.focus();
    $("#searchdrawer").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(drawerinbedroom);
            lookunderbed1();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}


function lookunderbed1() {
    obj = document.getElementById("underbed");
    obj.focus();
    $("#underbed").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(lookunderbed);
            lookrightside1();
            lookleftside1();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        } else if (event.keyCode == 38) {
            obj.focus();

        }
    })
}


function lookleftside1() {
    obj = document.getElementById('leftside');
    obj.focus();
    $("#leftside").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(BE);
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
        }
    })
}

function lookrightside1() {
    obj = document.getElementById('rightside');
    $("#rightside").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(lookrightside);
        } else if (event.keyCode == 38) {
            if (obj.previousElementSibling == null) {
                obj.focus();
            } else {
                obj.previousElementSibling.focus();
            }

        }
    })
}


function watchtv1() {
    obj = document.getElementById('watch');
    $("#watch").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(watchtv);
            lookunderbed1();
        } else if (event.keyCode == 40) {
            obj.nextElementSibling.focus();
            alert(obj.nextElementSibling.innerHTML);
        } else if (event.keyCode == 38) {
            if (obj.previousElementSibling == null) {
                obj.focus();
                alert(obj.innerHTML);
            } else {
                obj.previousElementSibling.focus();
                alert(obj.previousElementSibling.innerHTML);
            }

        }
    })
}

//basement 
// Leave through door
const leavethroughdoor = function () {
    return $(` 
        <div id="leavethroughdoor">
            <div id="buttons">
            <button class="option" id="crawlfloor">Crawl through the floor</button>
            </div>
            <p id="paragraphs">The door is locked. It seems like you need a key to open it.</p> 
        </div>
    `);
}
const crawlfloor = function () {
    return $(` 
        <div id="crawlfloor1">
            <div id="buttons">
            <button class="option" id="openleft">Open the left drawer</button>
            <button class="option" id="openright">Open the right drawer</button>
            </div>
            <p id="paragraphs">You grip your flashlight in your back pocket. You turn it on, and find a drawer. You walk towards the desk with 2 drawers. Which do you open? </p> 
        </div>
    `);
}

const openleft = function () {
    return $(` 
        <div id="openleft1">
            <div id="buttons">
            <button class="option" id="back">back to the lobby</button>
            </div>
            <p id="paragraphs">You find a key in the drawer. You quickly rush back to the door and exit using the key. You find yourself back in the lobby</p> 
        </div>
    `);
}

const openright = function () {
    return $(` 
        <div id="openleft1">
            <div id="buttons">
            <button class="option" id="openleft">Open the left drawer</button>
            </div>
            <p id="paragraphs">You find a key in the drawer. You quickly rush back to the door and exit using the key. You find yourself back in the lobby</p> 
        </div>
    `);
}

function openright1() {
    obj = document.getElementById('openright');
    $("#openright").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(openright);
            openleft1();
        } else if (event.keyCode == 38) {
            document.getElementById('openleft').focus();
        }
    })
}

function openleft1() {
    obj = document.getElementById('openleft');
    obj.focus();
    $("#openleft").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(openleft);
            back();
        } else if (event.keyCode == 40) {
            document.getElementById('openright').focus();
        }
    })
}

const walkbywall = function () {
    return $(` 
        <div id="walkbydoor">
            <div id="buttons">

            </div>
            <p id="paragraphs">You decided to use the walls as guidance to walk around the room. </p> 
        </div>
    `);
}

function leavethroughdoor1() {
    obj = document.getElementById('leavedoor');
    obj.focus();
    $("#leavedoor").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            $('#root').append(leavethroughdoor);
            crawlfloor1();
        } else if (event.keyCode == 40) {
            document.getElementById('crawlfloor').focus();
        }
    })
}

function crawlfloor1() {
    obj = document.getElementById('crawlfloor');
    obj.focus();
    $("#crawlfloor").keydown(function () {
        if (event.keyCode == 32) {
            event.preventDefault();
            event.target.parentNode.parentNode.remove();
            if (document.getElementById('weaponflashlight') == null) {
                $('#root').append(walkbywall);
            } else {
                $('#root').append(crawlfloor);
                $('#weaponflashlight').remove();
                openleft1();
                openright1();
            }
        } else if (event.keyCode == 38) {
            document.getElementById('leavedoor').focus();
        }
    })
}



// Player chooses to replay the game
function ReplayGame() {
    obj = document.getElementById('replayGame').focus();
    obj.focus();
    $('#replayGame').keydown(function () {
        if (event.keyCode == 32) {
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
manuscript.set('S5_7', "But now he is no longer alone. He looks behind him and sees a ghostly figure with a most terrifying face.")
manuscript.set('S5_8', "Replay")
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
manuscript.set('K8_2', "What do you do next? Check the oven. Pick up the red apple. Replay narration.")
manuscript.set('K9', "You smell something burnt. You peer inside and find a charred object.")
manuscript.set('K9_2', "What do you do? Leave the object. Clean the object. Replay narration.")
manuscript.set('K10', "You clean the object. It's a radio. The noises you heard seem to have come from the radio.")
manuscript.set('K10_2', "What do you do? Turn off the radio. Change the frequency. Replay narration.")
manuscript.set('K11', "You turn off the radio.")
manuscript.set('K11_2', "What do you do?")
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
manuscript.set('K19_2', "After some time, the noises stop, you leave the kitchen and go Back to the lobby.")
manuscript.set('K20', "You decided to ignore the green apple and check the oven instead")
manuscript.set('BR', "You enter the bathroom. The sink is on.")
manuscript.set('BR_2', "What do you do? Turn off the sink. Open toilet seat. Replay narration.")
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
manuscript.set('BR9', "What do you do? Break down the door with the hammer. Hide in the cupboard. Replay narration.")
manuscript.set('BR10', "You hold your hammer with both hands, then swing down.")
manuscript.set('BR10_2', "After a couple of tries, the door breaks! You enter the lobby with your trusty new hammer.")
manuscript.set('BR11', "You open the toilet seat. To your surprise, it's full of bugs!")
manuscript.set('BR11_2', "What do you do? Close the toilet seat. Leave the bathroom. Replay narration.")
manuscript.set('BR12', "There is a cupboard below the sink. You decide to search it.")
manuscript.set('BR13', "You leave the bathroom into the lobby.")
manuscript.set('BR14', "You successfully escaped the old mansion! What do you do?")
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
    "leavecupS": LC
};

// Replay narration click function
const Replay = function () {
    obj = document.getElementsByClassName('Replay');
    $(".Replay").on('keydown', function (event) {
        if (event.keyCode == 32) {
            console.log("Clicked" + event.target.parentNode.parentNode.id)
            stop_speech();
            dict[event.target.parentNode.parentNode.id]();
        } else if (event.keyCode == 38) {
            if (obj.previousElementSibling == null) {
                obj.nextElementSibling.focus();
                alert(obj.nextElementSibling.innerHTML);
            } else if (obj.nextElementSibling == null) {
                obj.previousElementSibling.focus();
                alert(obj.previousElementSibling.innerHTML)
            } else {
                obj.focus();
                alert(obj.innerHTML);
            }
        }

    });
}

Replay();