//@ts-nocheck
import { Input } from "../../components";
import Block from "../../tools/block";
import template from "./chat-page.hbs?raw";

export class ChatPage extends Block {
  constructor(props) {
    super({
      ...props,
      input: new Input({
        label: "Сообщение",
        type: "text",
        name: "message",
        onChange: (value) => {
          console.log(value);
        },
      }),
    });
  }

  override render() {
    return template;
  }
}
