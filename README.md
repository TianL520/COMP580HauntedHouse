# COMP580HauntedHouse

# Description
"Night of Terror" is a voice-recognition and keyboard based “choose your own adventure” style web game aimed for the visually impaired. Our audience is visually impaired kids of elementary school age to high school age. The game is fully controllable using voice commands or the keyboard. The narrator reads out the choices for the player, who then responds through the microphone. The story branches into several different endings (2 good endings and 4 bad endings), and each branch should take about 5 minutes to traverse from start to finish. The game is meant to be replayable, and players are expected to restart the game to try and discover the different endings. The story is based in a haunted house. This theme allows us to focus on crafting an auditory experience that the visually impaired will enjoy. There are also a few easter eggs in the game awaiting for you to find out!

# Browers
This game works best in Firefox. Please use Firefox to play our game. Firefox allows autoplay audio, but users may need to enable autoplay in the browser setting first.

# Enabling Speech Recognition (IMPORTANT!)
We use [annyang!](https://github.com/TalAter/annyang) for speech recognition which uses the WebSpeech API under the hood. 
Firefox requires users to enable WebSpeech usage before allowing websites to use the microphone.
Follow these instructions to enable WebSpeech in Firefox:
1. Open Firefox and type 'about:config' in the address bar
2. Press 'Accept the Risk and Continue' if prompted
3. Type 'webspeech' under 'Search preference name'
4. Set 'media.webspeech.recognition.enable' and 'media.webspeech.recognition.force_enable' to true using the toggle button to the right
5. When playing our game, make sure you press 'Allow' and 'Remember this decision' when prompted for microphone permission

# How to enable autoplay in Firefox?
https://support.mozilla.org/en-US/kb/block-autoplay

# How to play?
1. Press spacebar on the menu page to start playing. If this doesn't work, left click anywhere in the game and press spacebar again.
2. To speak, press enter. You will hear a beep, then you can speak to the microphone. Read back your choice as it is read to you by the narration. Speak slowly and clearly for best results. 
3. Use up and down arrow keys to navigate through your choices (your choice will be highlighted in yellow), and press spacebar to choose the choice.

# Things to be aware of
1. Night of Terror" contains sudden surprises and harsh images. The weak of heart and those poor with horror should not play. The authors take no responsibilities for any trouble that arises from playing this game.
2. Please avoid clicking anything other than the choices during gameplay or it may result in the focus reposition. However, try using the Tab key and see if it fixes your problem.
