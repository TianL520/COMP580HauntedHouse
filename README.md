# COMP580HauntedHouse

# Project Link
https://mcay23.github.io/COMP580HauntedHouse/

# Description
"Night of Terror" is a voice-recognition and keyboard based “choose your own adventure” style web game aimed for the visually impaired. Our audience is visually impaired kids of elementary school age to high school age. The game is fully controllable using voice commands or the keyboard. The narrator reads out the choices for the player, who then responds through the microphone. The story branches into several different endings (2 good endings and 4 bad endings), and each branch should take about 5 minutes to traverse from start to finish. The game is meant to be replayable, and players are expected to restart the game to try and discover the different endings. The story is based in a haunted house. This theme allows us to focus on crafting an auditory experience that the visually impaired will enjoy. There are also a few easter eggs in the game awaiting for you to find out!

# Browers
This was built to play with Firefox. Please use Firefox to play our game. You may find issues trying to get past the menu in other browsers, such as Chrome. Firefox allows autoplay audio, but users may need to enable autoplay in the browser setting first.

# Enabling Speech Recognition (IMPORTANT!)
We use [annyang!](https://github.com/TalAter/annyang) for speech recognition which uses the WebSpeech API under the hood. 
Firefox requires users to enable WebSpeech usage before allowing websites to use the microphone.
Follow these instructions to enable WebSpeech in Firefox:
1. Open Firefox and type 'about:config' in the address bar
2. Press 'Accept the Risk and Continue' if prompted
3. Type 'webspeech' under 'Search preference name'
4. Set 'media.webspeech.recognition.enable' and 'media.webspeech.recognition.force_enable' to true using the toggle button to the right
5. When playing our game, make sure you press 'Allow' and 'Remember this decision' when prompted for microphone permission

# Speech Recognition Tips
- Press 'b' to speak your choice
- Wait for the beep before speaking
- Read each choice option word for word to select it
- A microphone icon will appear in the top-middle section of your window when you press 'b'. Sometimes, this icon will appear even though the speech recognition system has not started listening. If you are experiencing issues with this, try waiting around half a second after the icon appears before speaking.
- At times, you may find that the engine may not recognize what you are saying very accurately. If this is the case for you, you can say "one", "two", or "three" to select the first, second, and third option respectively.

# Enabling Autoplay in Firefox
https://support.mozilla.org/en-US/kb/block-autoplay

# Headphones
The use of headphones is highly recommended in this game. Our game is meant for the visually impaired, and the visual effects are meant to only be supplementary for the auditory experience. 

You may also need headphones/earphones so ambient noise from the game does not interfere with the speech recognition.

# Playing the game
1. Press spacebar on the menu page to start playing. If this doesn't work, left click anywhere in the game and press spacebar again. If you didn't turn on autoplay, right click the main menu and press 'play' to start the animation (not required).
2. To speak, press the 'b' key. You will hear a beep, then you can speak to the microphone. Read back your choice as it is read to you by the narration. Speak slowly and clearly for best results. 
3. Alternatively, use the mouse to click, or the up and down arrow keys to navigate through your choices. Then, press enter to select the highlighted choice.

# Things to be aware of
1. Night of Terror" contains sudden surprises and harsh images. The weak of heart and those poor with horror should not play. The authors take no responsibilities for any trouble that arises from playing this game.
2. Please avoid clicking anything other than the choices during gameplay or it may result in the focus reposition. However, try using the Tab key and see if it fixes your problem.
