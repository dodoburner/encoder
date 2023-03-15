export default class Result {
  constructor(input, output) {
    this.input = input;
    this.output = output;
    this.id = crypto.randomUUID();
  }
}
