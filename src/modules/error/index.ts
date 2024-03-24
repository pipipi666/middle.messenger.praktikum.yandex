//@ts-nocheck

export * from "./error.scss";
import { Link } from "../../components";
import Block from "../../tools/block";
import template from "./error.hbs?raw";

export class ErrorBlock extends Block {
  constructor(props) {
    super({
      ...props,
      link: new Link({
        text: "Назад к чатам",
        url: "chat",
      }),
      events: {
        click: () => console.log("event"),
      },
    });
  }

  render() {
    return template;
  }
}
