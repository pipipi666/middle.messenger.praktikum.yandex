//@ts-nocheck
import template from "./profile-page.hbs?raw";
import { LoginForm } from "./../../modules/forms/login-form/index";
import { Button, Input } from "../../components";
import Block from "../../tools/block";

export * from "./profile-page.scss";

export class ProfilePage extends Block {
  constructor(props) {
    super({
      ...props,
      title: "Вход",
      btnText: "Авторизоваться",
      linkUrl: "registration",
      linkText: "Нет аккаунта?",
      inputs: [
        new Input({
          label: "Почта",
          type: "email",
          name: "email",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
        new Input({
          label: "Логин",
          type: "text",
          name: "login",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
        new Input({
          label: "Имя",
          type: "text",
          name: "first_name",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
        new Input({
          label: "Фамилия",
          type: "text",
          name: "second_name",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
        new Input({
          label: "Имя в чате",
          type: "text",
          name: "display_name",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
        new Input({
          label: "Телефон",
          type: "tel",
          name: "phone",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
        new Input({
          label: "Старый пароль",
          type: "password",
          name: "oldPassword",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
        new Input({
          label: "Новый пароль",
          type: "password",
          name: "newPassword",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
        new Input({
          label: "Повторите новый пароль",
          type: "password",
          row: true,
          onChange: (value) => {
            console.log(value);
          },
        }),
      ],
      buttons: [
        new Button({
          text: "Изменить данные",
          simple: true,
        }),
        new Button({
          text: "Изменить пароль",
          simple: true,
        }),
        new Button({
          text: "Выйти",
          simple: true,
          error: true,
        }),
      ],
    });
  }

  componentDidUpdate(oldProps, newProps) {
    if (oldProps.buttonText !== newProps.buttonText) {
      this.children.button.setProps({ text: newProps.buttonText });
    }
    return true;
  }

  override render() {
    return template;
  }
}
