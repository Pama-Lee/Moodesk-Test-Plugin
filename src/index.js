import { HelloHelper } from './utils/helper.js';
import { HelloUI } from './components/ui.js';

class HelloWorldPlugin {
  constructor() {
    this.id = 'moodesk-hello-world';
    this.name = 'Hello World Plugin';
    this.version = '1.0.0';
    this.helper = new HelloHelper();
    this.ui = new HelloUI();
    
    this.hooks = {
      'onInit': [this.initialize.bind(this)]
    };
  }

  async initialize() {
    await this.helper.setup();
    await this.ui.render();
  }
}

export default HelloWorldPlugin;
