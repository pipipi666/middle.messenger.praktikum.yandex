//@ts-nocheck
import { ErrorBlock } from "../../modules";
import Block from "../../tools/block";

export class NotFoundPage extends Block {
  constructor(props) {
    super({
      ...props,
      error: new ErrorBlock({ code: "404", text: "Не туда попали" }),
      events: {
        click: () => console.log("event"),
      },
    });
  }

  render() {
    return `{{{ error }}}`;
  }
}
