import { createGitgraph, templateExtend } from "@gitgraph/js";
import "./styles.css";

const graphContainer = document.getElementById("root");

const gitgraph = createGitgraph(graphContainer, {
  template: templateExtend("metro", {
    colors: [
      "#0496FF",
      "#FFBC42",
      "#7E6B8F",
      "#565554",
      "#565554",
      "#D81159",
      "#D81159"
    ],
    commit: {
      message: {
        display: false
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

const feature = develop.branch("feature 1").commit("feature");

develop.merge(feature);

const feature2 = develop.branch("feature 2").commit("feature");

develop.merge(feature2);

const release = develop.branch("uat-release").commit("initial");
develop.merge(release);
uat.merge(release).tag("v1.1.0-0");

const release2 = uat.branch("prod-release").commit("initial");
develop.merge(release2);
uat.merge(release2);
master.merge(release2).tag("v1.1.0");
