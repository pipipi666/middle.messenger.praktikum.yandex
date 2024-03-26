//@ts-nocheck
import Block from "../../../tools/block";
import template from "./chat-item.hbs?raw";

export * from "./chat-item.scss";

export class ChatItem extends Block {
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
