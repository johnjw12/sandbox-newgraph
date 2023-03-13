import "./styles.css";
import {
  createGitgraph,
  templateExtend,
  TemplateName,
  Orientation
} from "@gitgraph/js";
const graphContainer = document.getElementById("root");

const template = templateExtend(TemplateName.Metro, {
  colors: ["#3E46D9", "#4AD386", "red", "orange", "yellow"],
  branch: {
    label: {
      display: false
    }
  },
  commit: {
    message: {
      displayAuthor: false,
      displayHash: false
    },
    font: "bold 18pt Arial"
  }
});
const gitgraph = createGitgraph(graphContainer, {
  orientation: Orientation.VerticalReverse,
  author: "John",
  mode: "extended",
  template: template
});

//  create a branch
const IDC23 = gitgraph.branch("IDC23");
IDC23.commit({
  subject: "IDC23"
});
const IDC23_C = gitgraph.branch("IDC23_C");
IDC23_C.commit({
  subject: "IDC23_C"
});
const IDC23_CD = IDC23_C.branch("development").commit("SF release");
IDC23.commit("IDC23").commit({
  subject: " IDC23",
  body: "CNipa, sxm, Buildenv 0 ",
  style: {
    message: {
      display: true
    }
  }
});

// added with tag
IDC23.commit({
  subject: "IDC23",
  body: "CNipa, sxm, Buildenv756"
});
IDC23.tag("NodeX er");
const warn = gitgraph.branch("warn");
warn.commit({
  subject: "No releases notes "
});
IDC23_C.commit({
  subject: "IDC23_C",
  body: " china apps"
});

IDC23_C.commit({
  subject: "IDC23_C",
  body: " Andriod apps "
});
IDC23.commit({
  subject: "IDC23",
  body: "node0 changes"
});

IDC23_C.commit({
  subject: "IDC23_C",
  body: "NodeX changes"
});
// warning message
warn.commit({
  subject: "No release notes"
});

IDC23_C.tag("new nodex");

IDC23_C.commit({
  subject: "IDC23_C",
  body: "NodeX chan"
});

// SF release

IDC23.commit({
  subject: "IDC23",
  body: "node0 ch"
});
IDC23_C.commit({
  subject: "IDC23_C",
  body: "NodeX chan"
});

IDC23_CD.commit({
  subject: "SF release"
});
