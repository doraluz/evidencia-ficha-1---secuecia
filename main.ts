input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    basic.pause(50)
    basic.showLeds(`
        . # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . # # #
        . # . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        . . # . #
        . # . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
})
