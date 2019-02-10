import React from "react";

import LineIndicator from "./LineIndicator";

const SiteAudience = () => {

  return (
    <div className="pt-xl-2">
      <h6 className="text-uppercase mb-2 mb-sm-4">Statistics</h6>
      <ul className="jr-line-indicator jr-fs-sm">
        <li>
          <LineIndicator width="78%" title="Subject Revisions" title2="8.74" color="primary" value="563"/>
        </li>
        <li>
          <LineIndicator width="18%" title="Pomodoros Completed" title2="1.23" color="pink" value="42"/>
        </li>
        <li>
          <LineIndicator width="12%" title="Projects" title2="0.71" color="orange" value="2"/>
        </li>
      </ul>
    </div>
  )
};
export default SiteAudience;
