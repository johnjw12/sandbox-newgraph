import { createGitgraph, templateExtend } from "@gitgraph/js";
import "./styles.css";

const graphContainer = document.getElementById("root");

const gitgraph = createGitgraph(graphContainer, {
  template: templateExtend("metro", {
    colors: ["#0496FF", "#FFBC42", "#7E6B8F", "#D81159", "#D81159"],
    commit: {
      message: {
        display: false,
        displayAuthor: false,
        displayHash: false
      }
    }
  })
});

const master = gitgraph
  .branch("master")
  .commit("Initial commit")
  .tag("v1.0.0");

const uat = master
  .branch("uat")
  .commit("initial")
  .tag("v1.1.0-0");

const develop = uat.branch("development").commit("initial");

uat.merge(develop).tag("v1.1.0-1");
develop.commit("initial");
uat.merge(develop).tag("v1.1.0-2");
develop.commit("initial");
uat.merge(develop).tag("v1.1.0-3");

master
  .merge({
    branch: uat,
    commitOptions: {
      subject: "Correct version upgrade",

      style: {
        message: {
          display: true
        }
      }
    }
  })
  .tag("v1.1.0");
