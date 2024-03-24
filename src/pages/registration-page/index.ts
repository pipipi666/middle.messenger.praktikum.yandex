//@ts-nocheck
import { LoginForm } from "./../../modules/forms/login-form/index";
import { Button, Input } from "../../components";
import Block from "../../tools/block";

export class RegistrationPage extends Block {
  constructor(props) {
    super({
      ...props,
      loginForm: new LoginForm({
        title: "Регистрация",
        btnText: "Зарегистрироваться",
        linkUrl: "login",
        linkText: "Войти",
        inputs: [
          new Input({
            label: "Почта",
            type: "email",
            onChange: (value) => {
              console.log(value);
            },
          }),
          new Input({
            label: "Логин",
            type: "text",
            onChange: (value) => {
              console.log(value);
            },
          }),
          new Input({
            label: "Имя",
            type: "text",
            onChange: (value) => {
              console.log(value);
            },
          }),
          new Input({
            label: "Фамилия",
            type: "text",
            onChange: (value) => {
              console.log(value);
            },
          }),
          new Input({
            label: "Телефон",
            type: "tel",
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
          new Input({
            label: "Пароль (ещё раз)",
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
