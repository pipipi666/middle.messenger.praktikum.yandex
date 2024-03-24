//@ts-nocheck
import Block from "../../tools/block";
import template from "./input.hbs?raw";

export * from "./input.scss";

export class Input extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        change: (e) => props.onChange(e.target.value),
        blur: (e) => this.validate(),
      },
    });
  }

  render() {
    return template;
  }

  validate() {
    console.log("blur");
  }
}
