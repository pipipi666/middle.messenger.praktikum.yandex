//@ts-nocheck
import { Button, Dialog, Link } from "../../../components";
import Block from "../../../tools/block";
import template from "./login-form.hbs?raw";

export * from "./login-form.scss";

class Form extends Block {
  constructor(props) {
    super({
      ...props,
      button: new Button({
        text: props.btnText,
      }),
      link: new Link({
        text: props.linkText,
        url: props.linkUrl,
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

export class LoginForm extends Block {
  constructor(props) {
    super({
      dialog: new Dialog({
        child: new Form({
          ...props,
        }),
      }),
      events: {
        click: () => console.log("event"),
      },
    });
  }

  render() {
    return `{{{ dialog }}}`;
  }
}
