import React from "react";

export default function AboutHero() {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">About Me</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          The purpose of Coder Ali is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Primary button
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}
