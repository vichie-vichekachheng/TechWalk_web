import { useState } from "react";

export default function AuthModal() {
  const [signup, setsignup] = useState(true);

  return (
    <div className="modal fade" id="signupmodal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header border-0 pb-0">
            <h2 className="text-center w-100 fw-bold">
              {signup ? "Create an account" : "Welcome back!"}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()}>
              {signup && (
                <div>
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    required
                  />
                </div>
              )}

              <div className={signup ? "mt-3" : ""}>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                  required
                />
              </div>

              <div className="mt-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="●●●●●●●●●"
                  required
                />
              </div>

              {signup && (
                <div className="mt-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="●●●●●●●●●"
                    required
                  />
                </div>
              )}

              <button className="mt-4 w-100 btn btn-primary py-2 fw-semibold">
                {signup ? "Create an account" : "Login"}
              </button>

              <p className="text-center mt-4 mb-0">
                {signup ? (
                  <>
                    Already have an account?{" "}
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => setsignup(false)}
                    >
                      Login
                    </span>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => setsignup(true)}
                    >
                      Sign Up
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}