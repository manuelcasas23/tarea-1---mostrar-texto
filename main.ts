input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("IES NUEVO SCALA")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("nombre")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("curso")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("apellidos")
})
basic.showIcon(IconNames.Yes)
