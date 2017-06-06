/* jshint esversion:6 */

const Counter = {
  rootElement: '#app',
  count: 0,
  start: function() {
    this.cacheDOM();
    this.bindAdd();
    this.bindSub();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector('#app');
    this.adder = document.querySelector('#inc');
    this.subber = document.querySelector('#dec');
    this.output = document.querySelector('#output');
  },
  bindAdd: function() {
    this.adder.addEventListener('click', () => {
      this.count += 1;
      this.render();
    });
  },
  bindSub: function() {
    this.subber.addEventListener('click', () => {
      this.count -= 1;
      this.render();
    });
  },
  render: function() {
    this.output.textContent = this.count;
  }
};

Counter.start();
