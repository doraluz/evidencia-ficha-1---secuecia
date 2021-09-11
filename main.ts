input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    basic.pause(200)
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
        . . . . #
        . . . # #
        . . . . #
        . # . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.clearScreen()
})
