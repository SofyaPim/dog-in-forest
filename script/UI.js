export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Creepster";
    this.livesImage = document.getElementById("lives");
  }
  draw(context) {
    context.save();
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "#f1f1f1";
    context.shadowBlur = 0;

    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    // score
    context.fillText("Счёт: " + this.game.score, 20, 50);
    //  timer
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Таймер: " + (this.game.time * 0.001).toFixed(0), 20, 70);
    //    lives
    for (let i = 0; i < this.game.lives; i++) {    
      context.drawImage(this.livesImage, 20 * i + 20, 80, 25,25);           
    }
    // game over msg
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      if (this.game.score > 10) {
        context.fillText(
          "Неплохо",
          this.game.width * 0.5,
          this.game.height * 0.5 - 20
        );
        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillText(
          "Для первого дня в страшном лесу",
          this.game.width * 0.5,
          this.game.height * 0.5 + 20
        );
      } else if (this.game.score > this.game.winningScore) {
        context.fillText(
          "Вау!",
          this.game.width * 0.5,
          this.game.height * 0.5 - 20
        );
        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillText(
          "Вот кого стоит ту боятся!",
          this.game.width * 0.5,
          this.game.height * 0.5 + 20
        );
      } else {
        context.fillText(
          "Конец игры",
          this.game.width * 0.5,
          this.game.height * 0.5 - 20
        );
        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillText(
          "Повезет в другой раз",
          this.game.width * 0.5,
          this.game.height * 0.5 + 20
        );
      }
    }
    context.restore();
  }
}
