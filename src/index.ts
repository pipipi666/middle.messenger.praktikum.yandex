//@ts-nocheck
import Handlebars from "handlebars";
import * as Pages from "./pages";
import * as Components from "./components";
import * as Modules from "./modules";
import avatarIcon from "./assets/icons/avatar.svg";

type TPages = {
  [name: string]: String[];
};

const pages: TPages = {
  chat: Pages.ChatPage,
  login: Pages.LoginPage,
  registration: Pages.RegistrationPage,
  profile: Pages.ProfilePage,
  "not-found": Pages.NotFoundPage,
  "server-error": Pages.ServerErrorPage,
};

function navigate(page: string) {
  const block = new pages[page]({ buttonText: "Button" });
  const container = document.getElementById("app")!;
  container.append(block.getContent()!);

  const backButton = document.getElementById("back_button");

  if (backButton) {
    backButton.addEventListener("click", () => {
      history.back();
    });
  }

  const avatar = document.getElementById("avatar");

  if (avatar instanceof HTMLImageElement) {
    avatar.src = avatarIcon;
  }
}

// Object.entries(Components).forEach(([name, component]) => {
//   Handlebars.registerPartial(name, component);
// });

// Object.entries(Modules).forEach(([name, component]) => {
//   Handlebars.registerPartial(name, component);
// });

document.addEventListener("DOMContentLoaded", (e) => {
  navigate(document.location.pathname.replace("/", "") || "login");
});

document.addEventListener("click", (e) => {
  const target = e.target;
  const page =
    target instanceof HTMLElement ? target.getAttribute("page") : null;

  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
