//@ts-nocheck
import Block from "../../tools/block";
import template from "./button.hbs?raw";

export * from "./button.scss";

export class Button extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        click: () => console.log("event"),
      },
    });
  }

  render() {
    return template;
  }
}
