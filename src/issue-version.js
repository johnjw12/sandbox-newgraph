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

const uat = master.branch("uat").commit("initial");

const develop = uat.branch("development").commit("initial");

uat.merge(develop).tag("v1.1.0-0");
develop.commit();
uat.merge(develop).tag("v1.2.0-0");
develop.commit();
uat.merge(develop).tag("v1.3.0-0");
master
  .merge({
    branch: uat,
    commitOptions: {
      subject: "Version jumped from 1.0.0",

      style: {
        message: {
          display: true
        }
      }
    }
  })
  .tag("v1.3.0");
