let cantidad = 0
/**
 * Miguel Lázaro Moguilnaia 2º ESO A
 */
basic.forever(function () {
    cantidad = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (cantidad < 10) {
        servos.P0.setAngle(90)
    } else {
        servos.P0.setAngle(0)
    }
})
