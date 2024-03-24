//@ts-nocheck
import Block from "../../tools/block";
import template from "./dialog.hbs?raw";

export * from "./dialog.scss";

export class Dialog extends Block {
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
