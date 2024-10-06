let Feuchtigkeit = 0
input.onButtonPressed(Button.A, function () {
    Feuchtigkeit = pins.analogReadPin(AnalogPin.P1)
    if (Feuchtigkeit <= 8) {
        // Blau
        basic.setLedColor(0x0000FF)
    } else if (Feuchtigkeit > 400) {
        // Rot
        basic.setLedColor(0xFF0000)
    } else {
        // Grün
        basic.setLedColor(0x00FF00)
    }
    basic.showNumber(Feuchtigkeit)
    // Halte die Farbe für 500 Millisekunden
    basic.pause(500)
    // Lösche das LED-Display nach der Pause
    basic.clearScreen()
})
