

var gameSettings = {
    playerSpeed: 200,
    maxPowerups: 2,
    powerUpVel: 50,
}

const config = {
    width: 256,
    height: 272,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);
