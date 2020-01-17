enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Item = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.splash("Game Over")
})
let mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . f e e e e 2 2 2 f . . . . . 
. c e f e e f e 2 2 f f . . . . 
. c e f e e f e 2 2 e e f . . . 
c e 2 2 e e e e 2 2 b e c . . . 
c e e e e f e e 2 2 b e c . f f 
c c f f f e e e 2 2 f c . f 2 f 
. f e e e e e 2 2 f f . . f 2 f 
. . f f f f f 2 2 2 2 f . f 2 f 
. . . . f 2 2 2 2 2 2 2 f f 2 f 
. . . f 2 f f 2 f 2 2 2 2 f f . 
. . . f 2 f f 2 f 2 2 2 2 f . . 
. . . f e b f e b f f 2 f . . . 
. . . f e e c e e b b e f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
let anim_walk_right = animation.createAnimation(ActionKind.Walking, 0)
animation.attachAnimation(mySprite, anim_walk_right)
anim_walk_right.addAnimationFrame(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 2 2 2 2 2 f . . . 
. . . . f f 2 2 2 e e e e f . . 
. . . f e e 2 2 e e e e e e c . 
. . . c e b 2 2 e f e e f e c . 
f f . c e b 2 2 e f e e f e e c 
f 2 f . c f 2 2 e e e e 2 2 e c 
f 2 f . . f 2 2 2 e f e e e e c 
f 2 f . . f f 2 2 2 e f f f e f 
f 2 f . f 2 2 2 2 f e e e e f . 
. f f f 2 2 2 2 2 2 2 f f f . . 
. . f 2 2 2 2 f 2 2 f 2 f f . . 
. . f 2 2 2 f f f 2 2 f f 2 f . 
. f b f f f f f f c e e b e e f 
. f e e c f . . f e e e c e e f 
. . f f f . . . f f f f f f f . 
`)
anim_walk_right.addAnimationFrame(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 2 2 2 2 2 f . . . 
. . . . . f 2 2 2 e e e e f . . 
. . . . . f 2 2 e f e e f e c . 
. . . . f f 2 2 e f e e f e c . 
. . . f e e 2 2 e e e e 2 2 e c 
. . . c e b 2 2 e e f e e e e c 
f f . c e b 2 2 2 e e f f f c c 
f 2 f . c f f 2 2 2 e e e e f . 
f 2 f . f 2 2 2 2 f f f f f f . 
f 2 f f 2 2 2 2 2 2 2 f f f f . 
. f f 2 2 2 2 f 2 f e e f e e f 
. . f 2 2 2 2 f 2 f b e f b e f 
. . f 2 f f f f f f f f f f f f 
. . f e e c f . . . . . . . . . 
. . f f f f . . . . . . . . . . 
`)
anim_walk_right.addAnimationFrame(img`
. . . . . . . f f f f f . . . . 
. . . . f f f 2 2 2 2 2 f . . . 
. . . f e e 2 2 2 2 e e e f . . 
. . . c e b 2 2 2 e e e e e c . 
. . . c e b 2 2 e e e e e e c . 
. f f . c f 2 2 e f e e f e e c 
f 2 f . . f 2 2 e f e e f e e c 
f 2 f . . f 2 2 e e e e 2 2 e c 
f 2 f . . f f 2 2 e f e e e f . 
f 2 f . f 2 2 2 2 2 e f f f . . 
. f f f 2 2 2 2 2 2 2 f . . . . 
. . f f b 2 2 2 2 2 f f . . . . 
. . f f e e c 2 2 f f 2 f . . . 
. . . . f f f c e e b e e f . . 
. . . . . f f e e e c e e f . . 
. . . . . . f f f f f f f . . . 
`)
animation.setAction(mySprite, ActionKind.Walking)
forever(function () {
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 8 8 8 8 8 f . . . . . . 
. . f e e e e 8 8 8 f . . . . . 
. c e f e e f e 8 8 f f . . . . 
. c e f e e f e 8 8 e e f . . . 
c e 8 8 e e e e 8 8 b e c . . . 
c e e e e f e e 8 8 b e c . f f 
c c f f f e e e 8 8 f c . f 8 f 
. f e e e e e 8 8 f f . . f 8 f 
. . f f f f f 8 8 8 8 f . f 8 f 
. . . . f 8 8 8 8 8 8 8 f f 8 f 
. . . f 8 f f 8 f 8 8 8 8 f f . 
. . . f 8 f f 8 f 8 8 8 8 f . . 
. . . f e b f e b f f 8 f . . . 
. . . f e e c e e b b e f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 8 8 8 8 8 f . . . . . . 
. . f e e e e 8 8 8 f f . . . . 
. c e e e e e e 8 8 e e f . . . 
. c e f e e f e 8 8 b e c . . . 
c e e f e e f e 8 8 b e c . f f 
c e 8 8 e e e e 8 8 f c . f 8 f 
c e e e e f e 8 8 8 f . . f 8 f 
f e f f f e 8 8 8 f f . . f 8 f 
. f e e e e f 8 8 8 8 f . f 8 f 
. . f f f 8 8 8 8 8 8 8 f f f . 
. . f f 8 f 8 8 f 8 8 8 8 f . . 
. f 8 f f 8 8 f f f 8 8 8 f . . 
f e e b e e c f f f f f f b f . 
f e e c e e e f . . f c e e f . 
. f f f f f f f . . . f f f . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 8 8 8 8 8 f . . . 
. . . . . f 8 8 8 e e e e f . . 
. . . . . f 8 8 e f e e f e c . 
. . . . f f 8 8 e f e e f e c . 
. . . f e e 8 8 e e e e 8 8 e c 
. . . c e b 8 8 e e f e e e e c 
f f . c e b 8 8 8 e e f f f c c 
f 8 f . c f f 8 8 8 e e e e f . 
f 8 f . f 8 8 8 8 f f f f f f . 
f 8 f f 8 8 8 8 8 8 8 f f f f . 
. f f 8 8 8 8 f 8 f e e f e e f 
. . f 8 8 8 8 f 8 f b e f b e f 
. . f 8 f f f f f f f f f f f f 
. . f e e c f . . . . . . . . . 
. . f f f f . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 8 8 8 8 8 f f f . . . . 
. . f e e e 8 8 8 8 e e f . . . 
. c e e e e e 8 8 8 b e c . . . 
. c e e e e e e 8 8 b e c . . . 
c e e f e e f e 8 8 f c . f f . 
c e e f e e f e 8 8 f . . f 8 f 
c e 8 8 e e e e 8 8 f . . f 8 f 
. f e e e f e 8 8 f f . . f 8 f 
. . f f f e 8 8 8 8 8 f . f 8 f 
. . . . f 8 8 8 8 8 8 8 f f f . 
. . . . f f 8 8 8 8 8 b f f . . 
. . . f 8 f f 8 8 c e e f f . . 
. . f e e b e e c f f f . . . . 
. . f e e c e e e f f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 8 8 8 8 8 f . . . 
. . . . . f 8 8 8 e e e e f . . 
. . . . f f 8 8 e f e e f e c . 
. . . f e e 8 8 e f e e f e c . 
. . . c e b 8 8 e e e e 8 8 e c 
f f . c e b 8 8 e e f e e e e c 
f 8 f . c f 8 8 e e e f f f c c 
f 8 f . . f f 8 8 e e e e e f . 
f 8 f . f 8 8 8 8 f f f f f . . 
f 8 f f 8 8 8 8 8 8 8 f . . . . 
. f f 8 8 8 8 f 8 f f 8 f . . . 
. . f 8 8 8 8 f 8 f f 8 f . . . 
. . . f 8 f f b e f b e f . . . 
. . . f e b b e e c e e f . . . 
. . . f f f f f f f f f . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 8 8 8 8 8 f . . . 
. . . . f f 8 8 8 e e e e f . . 
. . . f e e 8 8 e e e e e e c . 
. . . c e b 8 8 e f e e f e c . 
f f . c e b 8 8 e f e e f e e c 
f 8 f . c f 8 8 e e e e 8 8 e c 
f 8 f . . f 8 8 8 e f e e e e c 
f 8 f . . f f 8 8 8 e f f f e f 
f 8 f . f 8 8 8 8 f e e e e f . 
. f f f 8 8 8 8 8 8 8 f f f . . 
. . f 8 8 8 8 f 8 8 f 8 f f . . 
. . f 8 8 8 f f f 8 8 f f 8 f . 
. f b f f f f f f c e e b e e f 
. f e e c f . . f e e e c e e f 
. . f f f . . . f f f f f f f . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 8 8 8 8 8 f . . . 
. . . . . f 8 8 8 e e e e f . . 
. . . . . f 8 8 e f e e f e c . 
. . . . f f 8 8 e f e e f e c . 
. . . f e e 8 8 e e e e 8 8 e c 
. . . c e b 8 8 e e f e e e e c 
f f . c e b 8 8 8 e e f f f c c 
f 8 f . c f f 8 8 8 e e e e f . 
f 8 f . f 8 8 8 8 f f f f f f . 
f 8 f f 8 8 8 8 8 8 8 f f f f . 
. f f 8 8 8 8 f 8 f e e f e e f 
. . f 8 8 8 8 f 8 f b e f b e f 
. . f 8 f f f f f f f f f f f f 
. . f e e c f . . . . . . . . . 
. . f f f f . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . f f f 8 8 8 8 8 f . . . 
. . . f e e 8 8 8 8 e e e f . . 
. . . c e b 8 8 8 e e e e e c . 
. . . c e b 8 8 e e e e e e c . 
. f f . c f 8 8 e f e e f e e c 
f 8 f . . f 8 8 e f e e f e e c 
f 8 f . . f 8 8 e e e e 8 8 e c 
f 8 f . . f f 8 8 e f e e e f . 
f 8 f . f 8 8 8 8 8 e f f f . . 
. f f f 8 8 8 8 8 8 8 f . . . . 
. . f f b 8 8 8 8 8 f f . . . . 
. . f f e e c 8 8 f f 8 f . . . 
. . . . f f f c e e b e e f . . 
. . . . . f f e e e c e e f . . 
. . . . . . f f f f f f f . . . 
`, SpriteKind.Player)
})
forever(function () {
    mySprite = sprites.create(img`
. . . . . f f f f f . . . . . . 
. . . . f 6 6 6 6 6 f . . . . . 
. . . f 9 9 9 9 9 6 6 f . . . . 
. . f f f 9 9 f f 9 6 f f . . . 
. c 9 b 6 6 9 9 b 9 6 9 9 f . . 
. c 9 9 9 9 9 9 b 9 6 9 f f f . 
. c 9 f f f f 9 9 9 6 9 f b 9 f 
. . f 9 9 9 9 f 9 6 6 f f 9 9 f 
. . . c 9 9 9 9 6 6 f f 6 f f f 
. . . . f f f 6 6 f 6 6 6 f . . 
. . . . f 6 6 6 6 6 6 6 f f f . 
. . . f 6 6 6 6 6 6 f f f 6 f . 
. . f f 6 6 6 6 f f f f f 6 f . 
. f b 9 f 6 6 f b b f f f 6 f . 
. f 9 9 f 6 6 f 9 9 b f f f f . 
. f f f f f f f f f f f f f . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . f f f f f . . . . . . 
. . . . f 6 6 6 6 6 f . . . . . 
. . . f 9 9 9 9 9 9 6 f . . . . 
. . f 9 f f 9 9 f f 9 f f . . . 
. c 9 9 b e e 9 9 b 9 6 9 f . . 
. c 9 9 9 9 9 9 9 b 9 6 f f . . 
. c 9 9 f f f f 9 9 9 6 f f f f 
. . c f 9 9 9 9 f 9 6 f f b 9 f 
. . . c 9 9 9 9 6 6 f f f 9 9 f 
. . . . f f f 6 6 f 6 6 6 f f f 
. . . . f 6 6 6 6 6 6 6 f f f . 
. . . f 6 6 6 6 6 6 f f f 6 f . 
. . f f 6 6 6 6 f f f f f 6 f . 
. f b 9 f 6 6 f b b f f f 6 f . 
. f 9 9 f f f f 9 9 b f f f f . 
. f f f f f f f f f f f f f . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . f f f f f . . . . . 
. . . . . f 6 6 6 6 6 f . . . . 
. . . . f 6 9 9 9 9 9 9 f . . . 
. . . f f 9 f f 9 9 f f 9 f . . 
. . f 9 6 9 b 9 9 6 6 b 9 9 c . 
. . f f 6 9 b 9 9 9 9 9 9 9 c . 
f f f f 6 9 9 9 f f f f 9 9 c . 
f 9 b f f 6 9 f 9 9 9 9 f c . . 
f 9 9 f f f 6 6 9 9 9 9 c . . . 
f f f 6 6 6 f 6 6 f f f . . . . 
. f f f 6 6 6 6 6 6 6 f . . . . 
. f 6 f f f 6 6 6 6 6 6 f . . . 
. f 6 f f f f f 6 6 6 6 f f . . 
. f 6 f f f b b f 6 6 f 9 b f . 
. f f f f b 9 9 f f f f 9 9 f . 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . f f f f f . . . . . 
. . . . . f 6 6 6 6 6 f . . . . 
. . . . f 6 6 9 9 9 9 9 f . . . 
. . . f f 6 9 f f 9 9 f f f . . 
. . f 6 6 6 9 b 9 9 6 6 b 9 c . 
. f f f 6 6 9 b 9 9 9 9 9 9 c . 
f 9 b f 6 6 9 9 9 f f f f 9 c . 
f 9 9 f f 6 6 9 f 9 9 9 9 f . . 
f f f 6 f f 6 6 9 9 9 9 c . . . 
. . f 6 6 6 f 6 6 f f f . . . . 
. f f f 6 6 6 6 6 6 6 f . . . . 
. f 6 f f f 6 6 6 6 6 6 f . . . 
. f 6 f f f f 6 6 6 6 6 f f . . 
. f 6 f f b b f 6 6 6 f 9 b f . 
. f f f b 9 9 f 6 6 6 f 9 9 f . 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
})
forever(function () {
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . f e e e e 2 2 2 f . . . . . 
. c e f e e f e 2 2 f f . . . . 
. c e f e e f e 2 2 e e f . . . 
c e 2 2 e e e e 2 2 b e c . . . 
c e e e e f e e 2 2 b e c . f f 
c c f f f e e e 2 2 f c . f 2 f 
. f e e e e e 2 2 f f . . f 2 f 
. . f f f f f 2 2 2 2 f . f 2 f 
. . . . f 2 2 2 2 2 2 2 f f 2 f 
. . . f 2 f f 2 f 2 2 2 2 f f . 
. . . f 2 f f 2 f 2 2 2 2 f . . 
. . . f e b f e b f f 2 f . . . 
. . . f e e c e e b b e f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . f e e e e 2 2 2 f f . . . . 
. c e e e e e e 2 2 e e f . . . 
. c e f e e f e 2 2 b e c . . . 
c e e f e e f e 2 2 b e c . f f 
c e 2 2 e e e e 2 2 f c . f 2 f 
c e e e e f e 2 2 2 f . . f 2 f 
f e f f f e 2 2 2 f f . . f 2 f 
. f e e e e f 2 2 2 2 f . f 2 f 
. . f f f 2 2 2 2 2 2 2 f f f . 
. . f f 2 f 2 2 f 2 2 2 2 f . . 
. f 2 f f 2 2 f f f 2 2 2 f . . 
f e e b e e c f f f f f f b f . 
f e e c e e e f . . f c e e f . 
. f f f f f f f . . . f f f . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . f e e e e 2 2 2 f . . . . . 
. c e f e e f e 2 2 f . . . . . 
. c e f e e f e 2 2 f f . . . . 
c e 2 2 e e e e 2 2 e e f . . . 
c e e e e c e e 2 2 b e c . . . 
c c c c c e e 2 2 2 b e c . f f 
. f e e e e 2 2 2 f f c . f 2 f 
. f f f f f f 2 2 2 2 f . f 2 f 
. f f f f 2 2 2 2 2 2 2 f f 2 f 
f e e f e e f 2 f 2 2 2 2 f f . 
f e b f e b f 2 f 2 2 2 2 f . . 
f f f f f f f f f f f f 2 f . . 
. . . . . . . . . f c e e f . . 
. . . . . . . . . . f f f f . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f f f . . . . 
. . f e e e 2 2 2 2 e e f . . . 
. c e e e e e 2 2 2 b e c . . . 
. c e e e e e e 2 2 b e c . . . 
c e e f e e f e 2 2 f c . f f . 
c e e f e e f e 2 2 f . . f 2 f 
c e 2 2 e e e e 2 2 f . . f 2 f 
. f e e e f e 2 2 f f . . f 2 f 
. . f f f e 2 2 2 2 2 f . f 2 f 
. . . . f 2 2 2 2 2 2 2 f f f . 
. . . . f f 2 2 2 2 2 b f f . . 
. . . f 2 f f 2 2 c e e f f . . 
. . f e e b e e c f f f . . . . 
. . f e e c e e e f f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 2 2 2 2 2 f . . . 
. . . . . f 2 2 2 e e e e f . . 
. . . . f f 2 2 e f e e f e c . 
. . . f e e 2 2 e f e e f e c . 
. . . c e b 2 2 e e e e 2 2 e c 
f f . c e b 2 2 e e f e e e e c 
f 2 f . c f 2 2 e e e f f f c c 
f 2 f . . f f 2 2 e e e e e f . 
f 2 f . f 2 2 2 2 f f f f f . . 
f 2 f f 2 2 2 2 2 2 2 f . . . . 
. f f 2 2 2 2 f 2 f f 2 f . . . 
. . f 2 2 2 2 f 2 f f 2 f . . . 
. . . f 2 f f b e f b e f . . . 
. . . f e b b e e c e e f . . . 
. . . f f f f f f f f f . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 2 2 2 2 2 f . . . 
. . . . f f 2 2 2 e e e e f . . 
. . . f e e 2 2 e e e e e e c . 
. . . c e b 2 2 e f e e f e c . 
f f . c e b 2 2 e f e e f e e c 
f 2 f . c f 2 2 e e e e 2 2 e c 
f 2 f . . f 2 2 2 e f e e e e c 
f 2 f . . f f 2 2 2 e f f f e f 
f 2 f . f 2 2 2 2 f e e e e f . 
. f f f 2 2 2 2 2 2 2 f f f . . 
. . f 2 2 2 2 f 2 2 f 2 f f . . 
. . f 2 2 2 f f f 2 2 f f 2 f . 
. f b f f f f f f c e e b e e f 
. f e e c f . . f e e e c e e f 
. . f f f . . . f f f f f f f . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 2 2 2 2 2 f . . . 
. . . . . f 2 2 2 e e e e f . . 
. . . . . f 2 2 e f e e f e c . 
. . . . f f 2 2 e f e e f e c . 
. . . f e e 2 2 e e e e 2 2 e c 
. . . c e b 2 2 e e f e e e e c 
f f . c e b 2 2 2 e e f f f c c 
f 2 f . c f f 2 2 2 e e e e f . 
f 2 f . f 2 2 2 2 f f f f f f . 
f 2 f f 2 2 2 2 2 2 2 f f f f . 
. f f 2 2 2 2 f 2 f e e f e e f 
. . f 2 2 2 2 f 2 f b e f b e f 
. . f 2 f f f f f f f f f f f f 
. . f e e c f . . . . . . . . . 
. . f f f f . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . f f f 2 2 2 2 2 f . . . 
. . . f e e 2 2 2 2 e e e f . . 
. . . c e b 2 2 2 e e e e e c . 
. . . c e b 2 2 e e e e e e c . 
. f f . c f 2 2 e f e e f e e c 
f 2 f . . f 2 2 e f e e f e e c 
f 2 f . . f 2 2 e e e e 2 2 e c 
f 2 f . . f f 2 2 e f e e e f . 
f 2 f . f 2 2 2 2 2 e f f f . . 
. f f f 2 2 2 2 2 2 2 f . . . . 
. . f f b 2 2 2 2 2 f f . . . . 
. . f f e e c 2 2 f f 2 f . . . 
. . . . f f f c e e b e e f . . 
. . . . . f f e e e c e e f . . 
. . . . . . f f f f f f f . . . 
`, SpriteKind.Player)
})
forever(function () {
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 7 7 7 7 7 f . . . . . . 
. . f e e e e 7 7 7 f . . . . . 
. c e f e e f e 7 7 f f . . . . 
. c e f e e f e 7 7 e e f . . . 
c e 7 7 e e e e 7 7 b e c . . . 
c e e e e f e e 7 7 b e c . f f 
c c f f f e e e 7 7 f c . f 7 f 
. f e e e e e 7 7 f f . . f 7 f 
. . f f f f f 7 7 7 7 f . f 7 f 
. . . . f 7 7 7 7 7 7 7 f f 7 f 
. . . f 7 f f 7 f 7 7 7 7 f f . 
. . . f 7 f f 7 f 7 7 7 7 f . . 
. . . f e b f e b f f 7 f . . . 
. . . f e e c e e b b e f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 7 7 7 7 7 f . . . . . . 
. . f e e e e 7 7 7 f f . . . . 
. c e e e e e e 7 7 e e f . . . 
. c e f e e f e 7 7 b e c . . . 
c e e f e e f e 7 7 b e c . f f 
c e 7 7 e e e e 7 7 f c . f 7 f 
c e e e e f e 7 7 7 f . . f 7 f 
f e f f f e 7 7 7 f f . . f 7 f 
. f e e e e f 7 7 7 7 f . f 7 f 
. . f f f 7 7 7 7 7 7 7 f f f . 
. . f f 7 f 7 7 f 7 7 7 7 f . . 
. f 7 f f 7 7 f f f 7 7 7 f . . 
f e e b e e c f f f f f f b f . 
f e e c e e e f . . f c e e f . 
. f f f f f f f . . . f f f . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 7 7 7 7 7 f . . . 
. . . . . f 7 7 7 e e e e f . . 
. . . . . f 7 7 e f e e f e c . 
. . . . f f 7 7 e f e e f e c . 
. . . f e e 7 7 e e e e 7 7 e c 
. . . c e b 7 7 e e f e e e e c 
f f . c e b 7 7 7 e e f f f c c 
f 7 f . c f f 7 7 7 e e e e f . 
f 7 f . f 7 7 7 7 f f f f f f . 
f 7 f f 7 7 7 7 7 7 7 f f f f . 
. f f 7 7 7 7 f 7 f e e f e e f 
. . f 7 7 7 7 f 7 f b e f b e f 
. . f 7 f f f f f f f f f f f f 
. . f e e c f . . . . . . . . . 
. . f f f f . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 7 7 7 7 7 f f f . . . . 
. . f e e e 7 7 7 7 e e f . . . 
. c e e e e e 7 7 7 b e c . . . 
. c e e e e e e 7 7 b e c . . . 
c e e f e e f e 7 7 f c . f f . 
c e e f e e f e 7 7 f . . f 7 f 
c e 7 7 e e e e 7 7 f . . f 7 f 
. f e e e f e 7 7 f f . . f 7 f 
. . f f f e 7 7 7 7 7 f . f 7 f 
. . . . f 7 7 7 7 7 7 7 f f f . 
. . . . f f 7 7 7 7 7 b f f . . 
. . . f 7 f f 7 7 c e e f f . . 
. . f e e b e e c f f f . . . . 
. . f e e c e e e f f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 7 7 7 7 7 f . . . 
. . . . . f 7 7 7 e e e e f . . 
. . . . f f 7 7 e f e e f e c . 
. . . f e e 7 7 e f e e f e c . 
. . . c e b 7 7 e e e e 7 7 e c 
f f . c e b 7 7 e e f e e e e c 
f 7 f . c f 7 7 e e e f f f c c 
f 7 f . . f f 7 7 e e e e e f . 
f 7 f . f 7 7 7 7 f f f f f . . 
f 7 f f 7 7 7 7 7 7 7 f . . . . 
. f f 7 7 7 7 f 7 f f 7 f . . . 
. . f 7 7 7 7 f 7 f f 7 f . . . 
. . . f 7 f f b e f b e f . . . 
. . . f e b b e e c e e f . . . 
. . . f f f f f f f f f . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 7 7 7 7 7 f . . . 
. . . . f f 7 7 7 e e e e f . . 
. . . f e e 7 7 e e e e e e c . 
. . . c e b 7 7 e f e e f e c . 
f f . c e b 7 7 e f e e f e e c 
f 7 f . c f 7 7 e e e e 7 7 e c 
f 7 f . . f 7 7 7 e f e e e e c 
f 7 f . . f f 7 7 7 e f f f e f 
f 7 f . f 7 7 7 7 f e e e e f . 
. f f f 7 7 7 7 7 7 7 f f f . . 
. . f 7 7 7 7 f 7 7 f 7 f f . . 
. . f 7 7 7 f f f 7 7 f f 7 f . 
. f b f f f f f f c e e b e e f 
. f e e c f . . f e e e c e e f 
. . f f f . . . f f f f f f f . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f 7 7 7 7 7 f . . . 
. . . . . f 7 7 7 e e e e f . . 
. . . . . f 7 7 e f e e f e c . 
. . . . f f 7 7 e f e e f e c . 
. . . f e e 7 7 e e e e 7 7 e c 
. . . c e b 7 7 e e f e e e e c 
f f . c e b 7 7 7 e e f f f c c 
f 7 f . c f f 7 7 7 e e e e f . 
f 7 f . f 7 7 7 7 f f f f f f . 
f 7 f f 7 7 7 7 7 7 7 f f f f . 
. f f 7 7 7 7 f 7 f e e f e e f 
. . f 7 7 7 7 f 7 f b e f b e f 
. . f 7 f f f f f f f f f f f f 
. . f e e c f . . . . . . . . . 
. . f f f f . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . f f f 7 7 7 7 7 f . . . 
. . . f e e 7 7 7 7 e e e f . . 
. . . c e b 7 7 7 e e e e e c . 
. . . c e b 7 7 e e e e e e c . 
. f f . c f 7 7 e f e e f e e c 
f 7 f . . f 7 7 e f e e f e e c 
f 7 f . . f 7 7 e e e e 7 7 e c 
f 7 f . . f f 7 7 e f e e e f . 
f 7 f . f 7 7 7 7 7 e f f f . . 
. f f f 7 7 7 7 7 7 7 f . . . . 
. . f f b 7 7 7 7 7 f f . . . . 
. . f f e e c 7 7 f f 7 f . . . 
. . . . f f f c e e b e e f . . 
. . . . . f f e e e c e e f . . 
. . . . . . f f f f f f f . . . 
`, SpriteKind.Player)
})
