export class HelloUI {
  constructor() {
    this.container = null;
  }

  async render() {
    this.container = document.createElement('div');
    this.container.className = 'hello-world-container';
    this.container.innerHTML = `
      <h3>Hello World</h3>
      <button class="hello-btn">Click Me</button>
    `;
    
    document.body.appendChild(this.container);
  }
}
