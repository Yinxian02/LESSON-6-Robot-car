input.onButtonPressed(Button.A, function () {
    radio.sendString("front")
    basic.pause(1000)
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
    basic.pause(1000)
    radio.sendString("stop")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
    if (receivedString == "left") {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
    if (receivedString == "right") {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (receivedString == "front") {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
    if (receivedString == "back") {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (receivedString == "stop") {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("back")
    basic.pause(1000)
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.pause(1000)
    radio.sendString("stop")
})
basic.showIcon(IconNames.Square)
radio.setGroup(1)
