input.onButtonPressed(Button.A, function () {
    UserX = UserX - 1
    if (UserX < 0) {
        UserX = 0
    }
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    UserX = UserX + 1
    if (UserX > 3) {
        UserX = 3
    }
    basic.pause(200)
})
let McuX = 0
let UserX = 0
let BallY = 3
let BallX = 1
basic.showString("Pong")
UserX = 2
let BallDirX = 1
let BallDirY = 1
basic.forever(function () {
    basic.clearScreen()
    led.plot(UserX, 4)
    led.plot(UserX + 1, 4)
    led.plot(McuX, 0)
    led.plot(McuX + 1, 0)
    led.plot(BallX, BallY)
    basic.pause(200)
    BallX = BallX + BallDirX
    BallY = BallY + BallDirY
    if (BallX > 3 || BallX < 1) {
        BallDirX = BallDirX * -1
    }
    if (BallY > 3 || BallY < 1) {
        BallDirY = BallDirY * -1
        if (BallY == 4) {
            if (BallX == UserX) {
                BallDirX = -1
                music.playTone(330, music.beat(BeatFraction.Whole))
            } else if (BallX == UserX + 1) {
                BallDirX = 1
                music.playTone(330, music.beat(BeatFraction.Whole))
            } else {
                basic.showIcon(IconNames.Sad)
                basic.pause(10000)
            }
        }
        if (BallY == 0) {
            if (BallX == McuX) {
                music.playTone(247, music.beat(BeatFraction.Whole))
                BallDirX = -1
            } else if (BallX == McuX + 1) {
                BallDirX = 1
                music.playTone(247, music.beat(BeatFraction.Whole))
            } else {
                basic.showIcon(IconNames.Happy)
                basic.pause(10000)
            }
        }
    }
})
basic.forever(function () {
    if (BallDirY < 0) {
        McuX = McuX + BallDirX
        if (McuX < 0) {
            McuX = 0
        }
        if (McuX > 3) {
            McuX = 3
        }
    }
    basic.pause(550)
})
