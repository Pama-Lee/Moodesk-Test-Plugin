export class HelloHelper {
  constructor() {
    this.data = null;
  }

  async setup() {
    console.log('Helper initialized');
  }

  sayHello() {
    return 'Hello from helper!';
  }
}
