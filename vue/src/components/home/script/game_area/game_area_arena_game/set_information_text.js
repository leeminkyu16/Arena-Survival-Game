export function setInformationText(informationText) {
  this.vueComponent.$store.commit("setInformationText", informationText);
}
