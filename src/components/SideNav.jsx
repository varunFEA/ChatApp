import React from "react";

const SideNav = () => {
  return (
    <div>
      <div className="flex-lg-column my-0 sidemenu-navigation">
        <ul className="nav nav-pills side-menu-nav" role="tablist">
          <li className="nav-item d-none d-lg-block">
            <a
              className="nav-link"
              id="pills-user-tab"
              data-bs-toggle="pill"
              href="#pills-user"
              role="tab"
            >
              <i className="ri-user-3-line" /> 
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-chat-tab"
              data-bs-toggle="pill"
              href="#pills-chat"
              role="tab"
            >
              <i className="ri-discuss-line" />
              <span className="badge bg-danger fs-11 rounded-pill sidenav-item-badge">
                9
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contacts-tab"
              data-bs-toggle="pill"
              href="#pills-contacts"
              role="tab"
            >
              <i className="ri-contacts-book-line" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-bookmark-tab"
              data-bs-toggle="pill"
              href="#pills-bookmark"
              role="tab"
            >
              <i className="ri-bookmark-3-line" />
            </a>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a
              className="nav-link"
              id="pills-setting-tab"
              data-bs-toggle="pill"
              href="#pills-setting"
              role="tab"
            >
              <i className="ri-settings-4-line" />
            </a>
          </li>
          <li className="nav-item mt-lg-auto">
            <a className="nav-link light-dark-mode" href="/">
              <i className="ri-moon-line" />
            </a>
          </li>
          <li className="nav-item dropdown profile-user-dropdown">
            <a
              className="nav-link dropdown-toggle bg-light"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="assets/images/users/avatar-1.jpg"
                alt=""
                className="profile-user rounded-circle"
              />
            </a>
            <div className="dropdown-menu">
              <a
                className="dropdown-item d-flex align-items-center justify-content-between"
                id="pills-user-tab"
                data-bs-toggle="pill"
                href="#pills-user"
                role="tab"
              >
                Profile <i className="bx bx-user-circle text-muted ms-1" />
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between"
                id="pills-setting-tab"
                data-bs-toggle="pill"
                href="#pills-setting"
                role="tab"
              >
                Setting <i className="bx bx-cog text-muted ms-1" />
              </a>
              <a
                className="dropdown-item d-flex align-items-center justify-content-between"
                href="auth-changepassword.html"
              >
                Change Password
                <i className="bx bx-lock-open text-muted ms-1" />
              </a>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item d-flex align-items-center justify-content-between"
                href="auth-logout.html"
              >
                Log out <i className="bx bx-log-out-circle text-muted ms-1" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
