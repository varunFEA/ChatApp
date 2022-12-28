import React from "react";

const StartConvoSection = () => {
  return (
    <div>
      <div className="overflow-hidden position-relative" style={{width: "225%"}}>
        {/* conversation user */}
        <div id="users-chat" className="position-relative">
          <div className="py-3 user-chat-topbar">
            <div className="row align-items-center">
              <div className="col-sm-4 col-8">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 d-block d-lg-none me-3">
                    {/* <a
                      href="javascript: void(0);"
                      className="btn-primary user-chat-remove fs-18 p-1"
                    >
                      <i className="bx bx-chevron-left align-middle" />
                    </a> */}
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                        <img
                          src="assets/images/users/avatar-2.jpg"
                          className="rounded-circle avatar-sm"
                          alt=""
                        />
                        <span className="user-status" />
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <h6 className="text-truncate mb-0 fs-18">
                          <a href=" " className="user-profile-show text-reset">
                            Victoria Lane
                          </a>
                        </h6>
                        <p className="text-truncate text-muted mb-0">
                          <small>Online</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-4">
                <ul className="list-inline user-chat-nav text-end mb-0">
                  <li className="list-inline-item">
                    <div className="dropdown">
                      <button
                        className="btn nav-btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bi bi-search" ></i>
                      </button>
                      <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                        <div className="search-box p-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search.."
                            id="searchChatMessage"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                    <button
                      type="button"
                      className="btn nav-btn"
                      data-bs-toggle="modal"
                      data-bs-target=".audiocallModal"
                    >
                      <i className="bi bi-telephone" />
                    </button>
                  </li>
                  <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                    <button
                      type="button"
                      className="btn nav-btn"
                      data-bs-toggle="modal"
                      data-bs-target=".videocallModal"
                    >
                      <i className="bi bi-camera-video" />
                    </button>
                  </li>
                  <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                    <button
                      type="button"
                      className="btn nav-btn"
                      data-bs-toggle="modal"
                      data-bs-target=".pinnedtabModal"
                    >
                      <i className="bx bx-bookmark" />
                    </button>
                  </li>
                  <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                    <button
                      type="button"
                      className="btn nav-btn user-profile-show"
                    >
                      <i className="bx bxs-info-circle" />
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <div className="dropdown">
                      <button
                        className="btn nav-btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center d-lg-none user-profile-show"
                          href=" "
                        >
                          View Profile <i className="bx bx-user text-muted" />
                        </a>
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                          href=" "
                          data-bs-toggle="modal"
                          data-bs-target=".audiocallModal"
                        >
                          Audio <i className="bx bxs-phone-call text-muted" />
                        </a>
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                          href=" "
                          data-bs-toggle="modal"
                          data-bs-target=".videocallModal"
                        >
                          Video <i className="bx bx-video text-muted" />
                        </a>
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href=" "
                        >
                          Archive <i className="bx bx-archive text-muted" />
                        </a>
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href=" "
                        >
                          Muted
                          <i className="bx bx-microphone-off text-muted" />
                        </a>
                        <a
                          className="dropdown-item d-flex justify-content-between align-items-center"
                          href=" "
                        >
                          Delete <i className="bx bx-trash text-muted" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end chat user head */}
          {/* start chat conversation */}
          <div
            className="chat-conversation p-3 p-lg-4"
            id="chat-conversation"
            data-simplebar
          >
            <ul
              className="list-unstyled chat-conversation-list"
              id="users-conversation"
            />
           <div class="chat-list left" id="10">
                      <div class="conversation-list">
          {/*                <div class="chat-avatar">
                              <img src="assets/images/users/avatar-2.jpg" alt="">
                          </div>
                          <div class="user-chat-content">
                              <div class="ctext-wrap">
                                  <div class="message-img mb-0">
                                      <div class="message-img-list">
                                          <div>
                                              <iframe src="https://www.youtube.com/embed/PHcgN1GTjdU" title="YouTube video"
                                                  class="w-100 rounded" autoplay allowfullscreen></iframe>
                                          </div>

                                          <div class="message-img-link">
                                              <ul class="list-inline mb-0">
                                                  <li class="list-inline-item dropdown">
                                                      <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                          aria-haspopup="true" aria-expanded="false">
                                                          <i class="bx bx-dots-horizontal-rounded"></i>
                                                      </a>
                                                      <div class="dropdown-menu">
                                                          <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                              href="assets/images/small/img-1.jpg" download="">
                                                              Download <i class="bx bx-download ms-2 text-muted"></i>
                                                          </a>
                                                          <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                              href="#" data-bs-toggle="collapse" data-bs-target=".replyCollapse">
                                                              Reply <i class="bx bx-share ms-2 text-muted"></i>
                                                          </a>
                                                          <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                              href="#" data-bs-toggle="modal" data-bs-target=".forwardModal">
                                                              Forward <i class="bx bx-share-alt ms-2 text-muted"></i>
                                                          </a>
                                                          <a class="dropdown-item d-flex align-items-center justify-content-between"
                                                              href="#">
                                                              Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i>
                                                          </a>
                                                          <a class="dropdown-item d-flex align-items-center justify-content-between delete-image"
                                                              href="#">
                                                              Delete <i class="bx bx-trash ms-2 text-muted"></i>
                                                          </a>
                                                      </div>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="conversation-name">
                                  <small class="text-muted time">11:45 am</small>
                                  <span class="text-success check-message-icon"><i class="bx bx-check-double"></i></span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="chat-list left" id="11">
                      <div class="conversation-list">
                          <div class="chat-avatar">
                              <img src="assets/images/users/avatar-2.jpg" alt="">
                          </div>
                          <div class="user-chat-content">
                              <div class="ctext-wrap">
                                  <div class="message-img mb-0">
                                      <div class="message-img-list">
                                          <audio controls>
                                              <source src="http://w3codegenerator.com/audio/audio.mp3" type="audio/mpeg">
                                          </audio>
                                      </div>
                                  </div>
                              </div>
                              <div class="conversation-name">
                                  <small class="text-muted time">11:45 am</small>
                                  <span class="text-success check-message-icon"><i class="bx bx-check-double"></i></span>
                              </div>
                          </div>*/}
                      </div>  
                  </div>
          </div>
          {/* <div
            className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show"
            id="copyClipBoard"
            role="alert"
          >
            Message copied
          </div> */}
          {/* end chat conversation end */}
        </div>
        {/* conversation group */}
       
        {/* start chat input section */}
        <div className="position-relative">
          <div className="chat-input-section p-4 border-top">
            <form id="chatinput-form" encType="multipart/form-data">
              <div className="row g-0 align-items-center">
                <div className="file_Upload" />
                <div className="col-auto">
                  <div className="chat-input-links me-md-2">
                    <div
                      className="links-list-item"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      title="More"
                    >
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none btn-lg waves-effect"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatinputmorecollapse"
                        aria-expanded="false"
                        aria-controls="chatinputmorecollapse"
                      >
                        <i className="bx bx-dots-horizontal-rounded align-middle" />
                      </button>
                    </div>
                    <div
                      className="links-list-item"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      title="Emoji"
                    >
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn"
                        id="emoji-btn"
                      >
                        <i className="bx bx-smile align-middle" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="position-relative">
                    <div className="chat-input-feedback">
                      Please Enter a Message
                    </div>
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control form-control-lg bg-light border-0 chat-input"
                      autofocus
                      id="chat-input"
                      placeholder="Type your message..."
                    />
                    <div className="chat-input-typing">
                      <span className="typing-user d-flex">
                        Victoria Lane is typing
                        <span className="typing ms-2">
                          <span className="dot" />
                          <span className="dot" />
                          <span className="dot" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="chat-input-links ms-2 gap-md-1">
                    <div
                      className="links-list-item d-none d-sm-block"
                      data-bs-container=".chat-input-links"
                      data-bs-toggle="popover"
                      data-bs-trigger="focus"
                      data-bs-html="true"
                      data-bs-placement="top"
                      data-bs-content="<div class='loader-line'><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div></div>"
                    >
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none btn-lg waves-effect"
                        onclick="audioPermission()"
                      >
                        <i className="bx bx-microphone align-middle" />
                      </button>
                    </div>
                    <div className="links-list-item">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg chat-send waves-effect waves-light"
                        data-bs-toggle="collapse"
                        data-bs-target=".chat-input-collapse1.show"
                      >
                        <i
                          className="bx bxs-send align-middle"
                          id="submit-btn"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div
              className="chat-input-collapse chat-input-collapse1 collapse"
              id="chatinputmorecollapse"
            >
              <div className="card mb-0">
                <div className="card-body py-3">
                  {/* Swiper */}
                  <div className="swiper chatinput-links">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="text-center px-2 position-relative">
                          <div>
                            <input
                              id="attachedfile-input"
                              type="file"
                              className="d-none"
                              accept=".zip,.rar,.7zip,.pdf"
                              multiple
                            />
                            <label
                              htmlFor="attachedfile-input"
                              className="avatar-sm mx-auto stretched-link"
                            >
                              <span className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                <i className="bx bx-paperclip" />
                              </span>
                            </label>
                          </div>
                          <h5 className="fs-11 text-uppercase mt-3 mb-0 text-body text-truncate">
                            Attached
                          </h5>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="text-center px-2">
                          <div className="avatar-sm mx-auto">
                            <div className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                              <i className="bx bxs-camera" />
                            </div>
                          </div>
                          <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                            <a
                              href=" "
                              className="text-body stretched-link"
                              onclick="cameraPermission()"
                            >
                              Camera
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="text-center px-2 position-relative">
                          <div>
                            <input
                              id="galleryfile-input"
                              type="file"
                              className="d-none"
                              accept="image/png, image/gif, image/jpeg"
                              multiple
                            />
                            <label
                              htmlFor="galleryfile-input"
                              className="avatar-sm mx-auto stretched-link"
                            >
                              <span className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                <i className="bx bx-images" />
                              </span>
                            </label>
                          </div>
                          <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                            Gallery
                          </h5>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="text-center px-2">
                          <div>
                            <input
                              id="audiofile-input"
                              type="file"
                              className="d-none"
                              accept="audio/*"
                              multiple
                            />
                            <label
                              htmlFor="audiofile-input"
                              className="avatar-sm mx-auto stretched-link"
                            >
                              <span className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                                <i className="bx bx-headphone" />
                              </span>
                            </label>
                          </div>
                          <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                            Audio
                          </h5>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="text-center px-2">
                          <div className="avatar-sm mx-auto">
                            <div className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                              <i className="bx bx-current-location" />
                            </div>
                          </div>
                          <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                            <a
                              href=" "
                              className="text-body stretched-link"
                              onclick="getLocation()"
                            >
                              Location
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="text-center px-2">
                          <div className="avatar-sm mx-auto">
                            <div className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                              <i className="bx bxs-user-circle" />
                            </div>
                          </div>
                          <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                            <a
                              href="  "
                              className="text-body stretched-link"
                              data-bs-toggle="modal"
                              data-bs-target=".contactModal"
                            >
                              Contacts
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="swiper-slide d-block d-sm-none">
                        <div className="text-center px-2">
                          <div className="avatar-sm mx-auto">
                            <div className="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                              <i className="bx bx-microphone" />
                            </div>
                          </div>
                          <h5 className="fs-11 text-uppercase text-truncate mt-3 mb-0">
                            <a href=" " className="text-body stretched-link">
                              Audio
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="replyCard">
            <div className="card mb-0">
              <div className="card-body py-3">
                <div className="replymessage-block mb-0 d-flex align-items-start">
                  <div className="flex-grow-1">
                    {/* <h5 className="conversation-name" /> */}
                    <p className="mb-0" />
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      id="close_toggle"
                      className="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                    >
                      <i className="bx bx-x align-middle" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end chat input section */}
      </div>
    </div>
  );
};

export default StartConvoSection;
