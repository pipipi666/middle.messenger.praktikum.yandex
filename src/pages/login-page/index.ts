//@ts-nocheck

import { LoginForm } from "./../../modules/forms/login-form/index";
import { Button, Input } from "../../components";
import Block from "../../tools/block";

export class LoginPage extends Block {
  constructor(props) {
    super({
      ...props,
      loginForm: new LoginForm({
        title: "Вход",
        btnText: "Авторизоваться",
        linkUrl: "registration",
        linkText: "Нет аккаунта?",
        inputs: [
          new Input({
            label: "Логин",
            type: "text",
            onChange: (value) => {
              console.log(value);
            },
          }),
          new Input({
            label: "Пароль",
            type: "password",
            onChange: (value) => {
              console.log(value);
            },
          }),
        ],
      }),
    });
  }

  componentDidUpdate(oldProps, newProps) {
    if (oldProps.buttonText !== newProps.buttonText) {
      this.children.button.setProps({ text: newProps.buttonText });
    }
    return true;
  }

  override render() {
    return `{{{ loginForm }}}`;
  }
}
