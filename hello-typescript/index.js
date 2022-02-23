var BirdWhisperer = /** @class */ (function () {
    function BirdWhisperer(message) {
        this.chirping = message;
    }
    BirdWhisperer.prototype.chirp = function () {
        return "AH~ oh~" + this.chirping;
    };
    return BirdWhisperer;
}());
var birdWhisperer = new BirdWhisperer('coo-coo-coo...');
document.body.innerHTML = birdWhisperer.chirp();
//# sourceMappingURL=index.js.map