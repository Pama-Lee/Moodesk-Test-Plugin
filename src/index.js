class HelloWorldPlugin {
  constructor() {
    this.id = 'moodesk-hello-world';
    this.name = 'Hello World Plugin';
    this.version = '1.0.0';
    this.description = 'A simple hello world plugin for Moodesk';
    this.author = 'Your Name';

    // 定义钩子
    this.hooks = {
      'onInit': [this.sayHello.bind(this)]
    };

    // 定义权限
    this.permissions = [];
  }

  async onInstall() {
    console.log('Hello World Plugin installed');
  }

  async onEnable() {
    console.log('Hello World Plugin enabled');
  }

  async onDisable() {
    console.log('Hello World Plugin disabled');
  }

  async onUninstall() {
    console.log('Hello World Plugin uninstalled');
  }

  async sayHello() {
    alert('Hello World from Moodesk Plugin!');
  }
}

// 自动注册插件
if (typeof window !== 'undefined' && window.moodesk) {
  const helloWorldPlugin = new HelloWorldPlugin();
  window.moodesk.pluginManager.registerPlugin(helloWorldPlugin);
}

export default HelloWorldPlugin;
