export default class Logger {
  constructor(element) {
    this.element = element;
    this.element.innerHTML = '';
  }

  add(text, color = 'black') {
    this.element.innerHTML = `${this.element.innerHTML}<br> <span style="color: ${color}">${text}</span>`;
  }

  clear() {
    this.element.innerHTML = '';
  }
}
