import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="auth-bg">
        <div className="container p-0">
          <div className="row justify-content-center g-0">
            <div className="col-xl-9 col-lg-8">
              <div className="authentication-page-content shadow-lg">
                <div className="d-flex flex-column h-100 px-4 pt-4">
                  <div className="row justify-content-center my-auto">
                    <div className="col-sm-8 col-lg-6 col-xl-6">
                      <div className="py-md-5 py-4">
                        <div className="text-center mb-5">
                          <h3>Register Account</h3>
                          <p className="text-muted">
                            Get your free Vhato account now.
                          </p>
                        </div>
                        <form
                          className="needs-validation"
                          noValidate
                          action="https://themesdesign.in/vhato/layouts/index.html"
                        >
                          <div className="mb-3">
                            <label htmlFor="useremail" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="useremail"
                              placeholder="Enter email"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Email
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="Enter username"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Username
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="userpassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="userpassword"
                              placeholder="Enter password"
                              required
                            />
                            <div className="invalid-feedback">
                              Please Enter Password
                            </div>
                          </div>
                          <div className="mb-4">
                            <p className="mb-0">
                              By registering you agree to the Vhato{" "}
                              <a href=" " className="text-primary">
                                Terms of Use
                              </a>
                            </p>
                          </div>
                          <div className="mb-3">
                            <button
                              className="btn btn-primary w-100 waves-effect waves-light"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                          <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-14 mb-4 title">
                                Sign up using
                              </h5>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-soft-info w-100"
                                  >
                                    <i className="mdi mdi-facebook" /> Facebook
                                  </button>
                                </div>
                              </div>
                              <div className="col-6">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-soft-danger w-100"
                                  >
                                    <i className="mdi mdi-google" /> Google
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* end form */}
                        <div className="mt-5 text-center text-muted">
                          <p>
                            Already have an account ?{" "}
                            <a
                              href="auth-login.html"
                              className="fw-medium text-decoration-underline"
                            >
                            <Link to='login'>Login</Link>
                              
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="text-center text-muted p-4">
                        <p className="mb-0">
                          © Vhato. Crafted with{" "}
                          <i className="mdi mdi-heart text-danger" /> by{" "}
                          {/* <a
                            href="https://1.envato.market/themesdesign"
                            target="_blank"
                          >
                            Themesdesign
                          </a> */}
                        </p>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container-fluid */}
      </div>
    </div>
  );
};

export default Registration;
