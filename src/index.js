import Handlebars from "handlebars";
import * as Pages from "./pages";
import * as Components from "./components";
import * as Modules from "./modules";

const pages = {
  chat: [Pages.ChatPage],
  login: [Pages.LoginPage],
  registration: [Pages.RegistrationPage],
  "not-found": [Pages.NotFoundPage],
  "server-error": [Pages.ServerErrorPage],
};

function navigate(page) {
  const [source, args] = pages[page];
  const handlebarsFunc = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunc(args);
}

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

Object.entries(Modules).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

document.addEventListener("DOMContentLoaded", (e) => {
  navigate(document.location.pathname.replace("/", "") || "login");
});

document.addEventListener("click", (e) => {
  const page = e.target.getAttribute("page");

  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
