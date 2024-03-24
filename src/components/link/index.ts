//@ts-nocheck

import Block from "../../tools/block";
import template from "./link.hbs?raw";

export * from "./link.scss";

export class Link extends Block {
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
