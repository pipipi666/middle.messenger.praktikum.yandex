//@ts-nocheck
import Block from "../../../tools/block";
import template from "./chat-message.hbs?raw";

export * from "./chat-message.scss";

export class ChatMessage extends Block {
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
