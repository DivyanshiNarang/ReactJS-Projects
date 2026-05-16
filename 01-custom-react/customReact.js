function customRender(reactElement, Container) {
  const DomEle = document.createElement(reactElement.type);
  DomEle.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    if (prop === "children") continue;
    DomEle.setAttribute(prop, reactElement.props[prop]);
  }
  //   DomEle.setAttribute("href", reactElement.props.href);
  //   DomEle.setAttribute("target", reactElement.props.target);
  Container.append(DomEle);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
