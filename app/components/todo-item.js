import Component from "@ember/component";

export default Component.extend({
  // todo: '',
  showDescription: false,
  buttonText: "show",

  actions: {
    toggleState() {
      this.set("showDescription", !this.get("showDescription"));
      let buttonText = this.get("buttonText");
      // toggle
      buttonText = buttonText === "show" ? "hide" : "show";
      this.set("buttonText", buttonText);
    }
  }
});
