import Controls from "./controls.js"
import Timer from "./timer.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay,
 } from "./elements.js"
 import Sound from "./sounds.js"

 const sound = Sound()

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})


buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
})


buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(minutes, 0)
})