def on_button_pressed_a():
    global UserX
    UserX = UserX - 1
    if UserX < 0:
        UserX = 0
    basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global UserX
    UserX = UserX + 1
    if UserX > 3:
        UserX = 3
    basic.pause(200)
input.on_button_pressed(Button.B, on_button_pressed_b)

BallY = 0
UserX = 0
McuX = 0
BallX = 1
basic.show_string("Pong")
UserX = 2
BallDirX = 1
BallDirY = 1

def on_forever():
    global BallX, BallY, BallDirX, BallDirY,McuX
    basic.clear_screen()
    led.plot(UserX, 4)
    led.plot(UserX + 1, 4)
    led.plot(McuX, 0)
    led.plot(McuX + 1, 0)
    led.plot(BallX, BallY)
    basic.pause(200)
    BallX = BallX + BallDirX
    BallY = BallY + BallDirY
    if BallX > 3 or BallX < 1:
        BallDirX = BallDirX * -1
    if BallY > 3 or BallY < 1:
        BallDirY = BallDirY * -1
    if BallY == 4:
        if BallX == UserX:
            BallDirX = -1
        elif BallX == UserX + 1:
            BallDirX = 1
        else:
            basic.show_string("Ops")
            basic.pause(10000)
basic.forever(on_forever)
