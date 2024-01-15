// 向上移動
input.onPinPressed(TouchPin.P0, function () {
    printer.change(LedSpriteProperty.Y, -1)
})
// 向左移動
input.onButtonPressed(Button.A, function () {
    printer.change(LedSpriteProperty.X, -1)
})
// 畫筆
input.onPinPressed(TouchPin.P2, function () {
    if (list.length == 0) {
        list.push(game.createSprite(printer.get(LedSpriteProperty.X), printer.get(LedSpriteProperty.Y)))
    } else {
        for (let index = 0; index <= list.length - 1; index++) {
            if (printer.get(LedSpriteProperty.X) != list[index].get(LedSpriteProperty.X) || printer.get(LedSpriteProperty.Y) != list[index].get(LedSpriteProperty.Y)) {
                list.push(game.createSprite(printer.get(LedSpriteProperty.X), printer.get(LedSpriteProperty.Y)))
            }
        }
    }
})
// 橡皮擦
input.onButtonPressed(Button.AB, function () {
    for (let index2 = 0; index2 <= list.length - 1; index2++) {
        if (printer.get(LedSpriteProperty.X) == list[index2].get(LedSpriteProperty.X) && printer.get(LedSpriteProperty.Y) == list[index2].get(LedSpriteProperty.Y)) {
            list[index2].delete()
        }
    }
})
// 向右移動
input.onButtonPressed(Button.B, function () {
    printer.change(LedSpriteProperty.X, 1)
})
// 向下移動
input.onPinPressed(TouchPin.P1, function () {
    printer.change(LedSpriteProperty.Y, 1)
})
/**
 * 按鈕A：向左移動
 * 
 * 按鈕B：向右移動
 * 
 * 引腳P0：向上移動
 * 
 * 引腳P1：向下移動
 * 
 * 引腳P2：畫筆
 * 
 * 按鈕A+B：橡皮擦
 */
let list: game.LedSprite[] = []
let printer: game.LedSprite = null
printer = game.createSprite(2, 2)
