export function bind(...fns) {
  fns.forEach(fn => this[fn] = this[fn].bind(this));
}