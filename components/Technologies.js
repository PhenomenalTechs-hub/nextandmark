import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

export default function Technologies() {
  return (
    <div class="container px-4 py-5" id="icon-grid">
      <h2 class="pb-2 border-bottom">Technologies</h2>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          ></svg>

          <div>
            <DiReact size="5rem" />
            <h4 class="fw-bold mb-0">Front-End</h4>
            <p>
              Experience with <br />
              React.js
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          ></svg>
          <div>
            <DiFirebase size="5rem" />
            <h4 class="fw-bold mb-0">Back-End</h4>
            <p>
              Experience with <br />
              Node and Databases
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          ></svg>
          <div>
            <DiZend size="5rem" />
            <h4 class="fw-bold mb-0">UI/UX</h4>
            <p>
              Experience with <br />
              tools like Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
