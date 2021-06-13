class BirdWhisperer {
  chirping: string;
  constructor(message: string) {
    this.chirping = message
  }
  chirp() {
    return `AH~ oh~${this.chirping}`;
  }
}

const birdWhisperer = new BirdWhisperer('coo-coo-coo...')
document.body.innerHTML = birdWhisperer.chirp()