import React from "react";
import "./styles.css";
import { Gitgraph, Mode } from "@gitgraph/react";

export default function App() {
  return (
    <Gitgraph
      options={
        {
          // author: " "
        }
      }
    >
      {gitgraph => {
        var master = gitgraph.branch("master").commit("Initial commit");
        var develop = gitgraph.branch("develop");
        develop.commit("one");
        master.commit("two", {
          author: "padua"
        });
        develop.commit("three");
        develop.commit("four");
        master.merge(develop);
      }}
    </Gitgraph>
  );
}
