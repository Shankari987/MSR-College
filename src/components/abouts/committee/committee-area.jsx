import React from "react";
import { committee_data } from "../../../data";
import CommitteeCard from "./committee-card";

const CommitteeArea = () => {
  return (
    <div className="container">
      {committee_data &&
        committee_data.map((dat, i) => {
          return <CommitteeCard key={i} data={dat} />;
        })}
    </div>
  );
};

export default CommitteeArea;