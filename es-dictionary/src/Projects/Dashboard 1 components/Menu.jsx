import React from "react";

export default function Menu() {
    return (
            <div className="Menu">
                  <div className="flexbox">
                   <div className="circular-progress1">
                    <span className="progress-value" id="progress1">45%</span>
                   </div>
                   <span className="text">Search Words</span>
                  </div>
                  <div className="flexbox">
                   <div className="circular-progress2">
                    <span className="progress-value" id="progress2">10%</span>
                   </div>
                   <span className="text">Deleted Words</span>
                  </div>
                  <div className="flexbox">
                   <div className="circular-progress3">
                    <span className="progress-value" id="progress3">50%</span>
                   </div>
                   <span className="text">Saved Words</span>
                  </div>
            </div>
    )
}