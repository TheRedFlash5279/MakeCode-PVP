controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 f 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 f 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . 2 1 1 1 1 1 1 1 2 1 2 . . . . . . . . . . . . 
. . . . . . . . . 1 1 2 1 2 1 1 2 1 1 2 . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 1 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . f f d d d d f . . . . . . . . . . . . . . 
. . . . . . . . . f f 1 1 f f f f 1 f f . . . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . f 1 1 1 f 1 2 1 1 2 f 1 1 f . . . . . . . . . . . 
. . . . . . . f 1 1 f f 1 1 2 2 1 f f 1 f . . . . . . . . . . . 
. . . . . . . f f f f f 1 1 2 2 1 f f f f . . . . . . . . . . . 
. . . . . . . f d d f f 1 2 1 1 2 e e e e e e e e f . . . . . . 
. . . . . . . f d d d f f f f f f e e e e e . . . . . . . . . . 
. . . . . . . . f d d d d d d d d e f d f . . . . . . . . . . . 
. . . . . . . . . f f f f f f f f e f d f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 f f d f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 f f f f . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e e f e f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 f 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 f 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . 2 1 1 1 1 1 1 1 2 1 2 . . . . . . . . . . . . 
. . . . . . . . . 1 1 2 1 2 1 1 2 1 1 2 . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 1 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . f f d d d d f . . . . . . . . . . . . . . 
. . . . . . . . . f f 1 1 f f f f 1 f f . . . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . 
. . . . . . . f 1 1 1 f 1 2 1 1 2 f 1 1 f . . . . . . . . . . . 
. . . . . . . f 1 1 f f 1 1 2 2 1 f f 1 f . . e e f . . . . . . 
. . . . . . . f f f f f 1 1 2 2 1 f f f e e e e . . . . . . . . 
. . . . . . . f d d f f 1 2 f f f f f e e e e . . . . . . . . . 
. . . . . . . f d d d f f f d d d d d e f . . . . . . . . . . . 
. . . . . . . . f d d d d d f f f f f e f . . . . . . . . . . . 
. . . . . . . . . f f f f f 1 1 1 f f d f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 f f d f . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 f f f f . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e e f e f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 f 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 f 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 2 1 1 1 1 1 . . 2 . . . . . . . . . 
. . . . . . . . . 2 1 1 1 1 1 1 1 2 1 2 5 . . . . 2 . . . . . . 
. . . . . . . . . 1 1 2 1 2 1 1 2 1 1 2 . . . 5 . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 1 2 2 . . 2 . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 . e 2 . . . . 5 . . . . . . 
. . . . . . . . . . . f f d d d d f e e e . . . . . . . . . . . 
. . . . . . . . . f f 1 1 f f f f e e e . . 5 . 2 . . . . . . . 
. . . . . . . . f 1 1 1 1 1 1 1 e e e f . . . . . . . . . . . . 
. . . . . . . f 1 1 1 f 1 2 1 f d e e e . . . . . . . . . . . . 
. . . . . . . f 1 1 f f f f f d d f e f . . . . . . . . . . . . 
. . . . . . . f f f f f d d d d f f d f . . . . . . . . . . . . 
. . . . . . . f d d d d d d f f 1 f d f . . . . . . . . . . . . 
. . . . . . . f d d d d f f 1 1 2 f d f . . . . . . . . . . . . 
. . . . . . . . f f f f 1 1 1 1 1 f d f . . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 f d f . . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 f d f . . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 1 f f f . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 f 6 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f e e e f e f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    150,
    false
    )
})
let Player_1: Sprite = null
Player_1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 f 1 1 . . . . . . . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 f 1 1 . . . . . . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . 1 2 1 2 1 1 2 1 2 1 2 . . . . . . . . . . . . . 
. . . . . . . . . 1 2 2 1 2 1 1 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 f . . . . . . . . . . . . . . . . 
. . . . . . . . . f f 1 1 1 1 1 f f . . . . . . . . . . . . . . 
. . . . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . f 1 1 1 1 2 1 1 2 1 1 f . . . . . . . . . . . . . 
. . . . . . . f 1 1 f 1 1 2 2 1 f 1 f . . . . . . . . . . . . . 
. . . . . . . f f f f 1 1 2 2 1 f f f . . . . . . . . . . . . . 
. . . . . . . f d d f f 2 1 1 2 f d f . . . . . . . . . . . . . 
. . . . . . . f d d d f f f f e e e e e e f . . . . . . . . . . 
. . . . . . . . f d d d d d d e e e f . . . . . . . . . . . . . 
. . . . . . . . . f f f f f f e f d f . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 6 6 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 f 6 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 f 6 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 f 6 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 f 6 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . e e e f e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let Player_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setTileMap(img`
7 7 7 7 7 7 7 5 7 7 3 . . . . . . . . . . . . . . . . . . . . . 
7 5 7 7 7 7 7 7 7 7 3 . . . . . . . . . . . . . . . . . . . . . 
7 7 7 7 7 7 7 7 7 7 3 . . . . . . . . . . . . . . . . . . . . . 
7 7 7 7 7 7 7 5 7 7 3 . . . . . . . . . . . . . . . . . . . . . 
7 7 7 7 7 7 7 7 7 7 3 . . . . . . . . . . . . . . . . . . . . . 
7 7 5 7 7 7 7 7 7 7 3 . . . . . . . . . . . . . . . . . . . . . 
7 7 7 7 7 7 7 7 5 7 3 . . . . . . . . . . . . . . . . . . . . . 
7 7 7 7 7 7 7 7 7 7 3 . . . . . . . . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, TileScale.Sixteen)
scene.setTile(7, img`
7 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 7 6 7 7 6 6 6 6 6 7 6 6 6 
6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 
6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 
6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 6 
6 6 6 6 6 6 6 6 6 6 7 7 8 6 6 6 
6 6 6 6 6 6 6 6 7 7 6 8 6 6 6 6 
6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 7 
`, false)
scene.setTile(5, img`
f f f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f b b b b b b f 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 
f e f b b b b b b f 6 6 6 6 6 6 6 6 6 8 8 7 7 7 6 6 6 6 6 6 6 6 
f e e f b b b b b b f 6 6 6 6 6 6 6 6 8 7 7 6 6 6 6 6 6 6 6 6 6 
f e e e f b b b b b b f 6 6 6 6 6 6 6 8 7 6 6 6 6 6 6 6 6 6 6 6 
f e e e e f b b b b b b f 6 6 6 6 6 6 8 7 6 6 6 6 6 6 6 6 6 6 6 
f e e e e e f b b b b b b f 6 6 6 6 6 8 7 6 6 6 6 6 6 6 6 6 6 6 
6 f e e e e e f b b b b b b f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f e e e e e f b b b b b b f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 f e e e e e f b b b b b f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 f e e e e e f f f f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 f e e e e f c c c c f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 f e e e f c c c c f 6 6 6 6 6 6 6 8 8 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 f e e f c c c c f 6 6 6 6 6 6 6 7 8 8 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 f e f c c c c f 6 6 6 6 6 6 6 6 7 8 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 f f f f f f f 6 6 6 6 6 6 6 6 7 8 6 6 6 6 6 6 
6 6 8 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
8 8 8 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
8 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
8 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
8 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 8 8 6 6 6 6 6 6 6 6 6 6 8 7 7 7 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 7 8 8 8 6 6 6 6 6 6 6 8 8 7 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 7 7 8 6 6 6 6 6 6 6 8 7 7 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 7 8 6 6 6 6 6 6 6 8 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 7 8 6 6 6 6 6 6 6 8 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, false)
