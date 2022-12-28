import React from "react";

const Logout = () => {
  return (
    <div>
      <div className="auth-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="authentication-page-content shadow-lg">
                <div className="d-flex flex-column h-100 px-4 pt-4">
                  <div className="row justify-content-center my-auto">
                    <div className="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                      <div className="py-md-5 py-4 text-center">
                        <div className="avatar-xl mx-auto">
                          <div className="avatar-title bg-soft-primary text-primary h1 rounded-circle">
                            <i className="bx bxs-user" />
                          </div>
                        </div>
                        <div className="mt-4 pt-2">
                          <h5>You are Logged Out</h5>
                          <p className="text-muted fs-15">
                            Thank you for using{" "}
                            <span className="fw-semibold text-dark">Vhato</span>
                          </p>
                          <div className="mt-4">
                            <a
                              href="auth-login.html"
                              className="btn btn-primary w-100 waves-effect waves-light"
                            >
                              Sign In
                            </a>
                          </div>
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

export default Logout;
