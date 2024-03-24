//@ts-nocheck
import { ErrorBlock } from "../../modules";
import Block from "../../tools/block";

export class ServerErrorPage extends Block {
  constructor(props) {
    super({
      ...props,
      error: new ErrorBlock({ code: "500", text: "Мы уже фиксим" }),
      events: {
        click: () => console.log("event"),
      },
    });
  }

  render() {
    return `{{{ error }}}`;
  }
}
