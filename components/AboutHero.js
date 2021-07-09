import React from "react";

export default function AboutHero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">About Me</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The purpose of Coder Ali is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Primary button
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}
