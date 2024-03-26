//@ts-nocheck
import Block from "../../tools/block";
import template from "./search-input.hbs?raw";

export * from "./search-input.scss";

export class SearchInput extends Block {
  constructor(props) {
    super({
      ...props,
      events: {
        change: (e) => props.onChange(e.target.value),
        blur: (e) => this.validate(),
      },
    });
  }

  render() {
    return template;
  }

  validate() {
    console.log("blur");
  }
}
