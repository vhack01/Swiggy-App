/*
    <div id=parent>
        <div id="child">
            <h1>Hello React </h1>
            <h2>I'm React</h2>
        </div>
    </div>
*/

const heading1 = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello React"
);

const heading2 = React.createElement("h2", {}, "I'm react!");

const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root:", root);
root.render(parent);
