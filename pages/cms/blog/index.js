import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";

const importJodit = () => import("jodit-react");

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});
export default function example() {
  const router = useRouter();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [form, setForm] = useState({});

  const hiddenHeroDeskFileInput = useRef();
  const hiddenHeroMobFileInput = useRef();
  const hiddenHeroS3ZipInput = useRef();
  const hiddenLinkImgInput = useRef();

  const [homeImg, setHomeImg] = useState();
  const [heroDesktopImg, setHeroDesktopImg] = useState();
  const [heroMobileImg, setHeroMobileImg] = useState();
  const [linkImg, setLinkImg] = useState();
  const [enableSubmit, setEnableSubmit] = useState(true);

  const handleHeroDeskClick = (event) => {
    hiddenHeroDeskFileInput.current.click();
  };

  const handleHeroMobClick = (event) => {
    hiddenHeroMobFileInput.current.click();
  };

  const handleHeroS3Click = (event) => {
    hiddenHeroS3ZipInput.current.click();
  };

  const handleLinkImgClick = (event) => {
    hiddenLinkImgInput.current.click();
  };

  const handleFileChange = async (event, value, pageName) => {
    if (!form["pageName"]) {
      toast.warn("Please Enter Valid Page Name!!");
      return;
    }
    const fileUploaded = event.target.files[0];
    const fileName = fileUploaded.name.split(".")[0];
    let params, file;
    params = "fileName=" + fileUploaded.name + "&pageName=" + pageName;
    let response = await fetch(
      "https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/blog-presigned-url?" +
        params,
      {
        method: "GET",
      }
    );
    if (response.status <= 300) {
      //toast.success('File Uploaded Successfully!')
    } else {
      toast.warn("Please upload a valid file");
      return;
    }
    let body = await response.json();
    if (value) {
      form[value] = body.cloudfrontUrl;
      setForm(form);
    } else {
      setLinkImg(body.cloudfrontUrl);
    }
    body = JSON.parse(body.presignedUrl);
    let formdata = new FormData();
    if (value == "blogThumbnailImg")
      setHomeImg(fileName + "/" + fileUploaded.name);
    else if (value == "blogCoverDesktopImg")
      setHeroDesktopImg(fileName + "/" + fileUploaded.name);
    else if (value == "blogMobileDesktopImg")
      setHeroMobileImg(fileName + "/" + fileUploaded.name);
    formdata.append("Policy", body.fields.Policy);
    formdata.append("X-Amz-Algorithm", body.fields["X-Amz-Algorithm"]);
    formdata.append("X-Amz-Credential", body.fields["X-Amz-Credential"]);
    formdata.append("X-Amz-Date", body.fields["X-Amz-Date"]);
    formdata.append(
      "X-Amz-Security-Token",
      body.fields["X-Amz-Security-Token"]
    );
    formdata.append("X-Amz-Signature", body.fields["X-Amz-Signature"]);
    formdata.append("bucket", body.fields.bucket);
    formdata.append("key", body.fields.key);
    formdata.append("file", fileUploaded);
    try {
      let res = await fetch(body.url, {
        method: "POST",
        body: formdata,
      });
      if (res.status <= 300) {
        setEnableSubmit(true);
        toast.success("File Uploaded Successfully!");
      } else {
        toast.warn("Please upload it again");
      }
    } catch (err) {
      toast.warn("Please upload it again");
    }

    console.log(fileUploaded, body);
  };

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  const handleChange = (event, value) => {
    form[value] = event.target.value;
    setForm(form);
  };

  const onSubmit = async () => {
    try {
      if (
        !form["pageName"] &&
        !form["blogThumbnailImg"] &&
        !form["titleTag"] &&
        !form["blogEditor"] &&
        !form["blogCoverDesktopImg"]
      ) {
        toast.warn("Please Enter All Mandatory Fields!!");
        return;
      }
      /* if(typeof form.year == 'string'){
          form.year=+form.year
        } */
      let response = await axios({
        url: "https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/create-blog",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          ...form,
          blogEditor: content,
          createdOn: new Date().toISOString(),
        }),
      });
      if (response.status <= 300) {
        toast.success("Data updated successfully!");
        router.push("../cms");
      } else toast.warn("Something went wrong!");
    } catch (err) {
      toast.warn("Something went wrong!");
    }
  };
  return (
    <>
      <Head>
        <link href="../css/style.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="container-scroller">
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo mr-5" href="/">
              <img src="../../../../img/logo.png" className="mr-2" alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="/">
              <img src="../../../../img/logo.png" alt="logo" />
            </a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span className="ti-view-list"></span>
            </button>
            <ul className="navbar-nav mr-lg-2">
              <li className="nav-item nav-search d-none d-lg-block">
                <div className="input-group">
                  <div
                    className="input-group-prepend hover-cursor"
                    id="navbar-search-icon"
                  >
                    <span className="input-group-text" id="search">
                      <i className="ti-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="navbar-search-input"
                    aria-label="search"
                    aria-describedby="search"
                  />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown mr-1">
                <a
                  className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                  id="messageDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="ti-email mx-0"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="messageDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Messages
                  </p>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <img
                        src="images/faces/face4.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal">
                        David Grey
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        The meeting is cancelled
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <img
                        src="images/faces/face2.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        New product launch
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <img
                        src="images/faces/face3.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="item-content flex-grow">
                      <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        Upcoming board meeting
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="ti-bell mx-0"></i>
                  <span className="count"></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="notificationDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Notifications
                  </p>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <div className="item-icon bg-success">
                        <i className="ti-info-alt mx-0"></i>
                      </div>
                    </div>
                    <div className="item-content">
                      <h6 className="font-weight-normal">Application Error</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Just now
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <div className="item-icon bg-warning">
                        <i className="ti-settings mx-0"></i>
                      </div>
                    </div>
                    <div className="item-content">
                      <h6 className="font-weight-normal">Settings</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Private message
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item">
                    <div className="item-thumbnail">
                      <div className="item-icon bg-info">
                        <i className="ti-user mx-0"></i>
                      </div>
                    </div>
                    <div className="item-content">
                      <h6 className="font-weight-normal">
                        New user registration
                      </h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        2 days ago
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  id="profileDropdown"
                >
                  <img
                    src="https://www.bootstrapdash.com/demo/royalui-free/template/images/faces/face28.jpg"
                    alt="profile"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="profileDropdown"
                >
                  <a className="dropdown-item">
                    <i className="ti-settings text-primary"></i>
                    Settings
                  </a>
                  <a className="dropdown-item">
                    <i className="ti-power-off text-primary"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>

            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="ti-view-list"></span>
            </button>
          </div>
        </nav>
        <div className="container-fluid page-body-wrapper">
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/cms">
                  <i className="ti-shield menu-icon"></i>
                  <span className="menu-title">Clubs</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cms/blogs">
                  <i className="ti-layout-list-post menu-icon"></i>
                  <span className="menu-title">BLogs</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="main-panel">
            <div className="content-wrapper">
              {/* <div className="row">
                    <div className="col-md-12 grid-margin">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                         
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary btn-icon-text btn-rounded"
                          >
                            <i className="ti-clipboard btn-icon-prepend"></i><Link href="/cms/dashboard"><label style={{color: '#fff',cursor: 'pointer'}}>Add Club</label></Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}

              <div class="blog-page-form-wrap">
                <div className="row">
                  <div class="col-12 grid-margin">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">BLOG PAGE section</h4>
                        {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                        <form
                          class="forms-sample"
                          wtx-context="20F8721F-E105-42B9-8FFC-822F9B40444E"
                        >
                          <div class="form-group">
                            <label for="exampleInputEmail3">Page Name</label>
                            <input
                              onChange={(e) => handleChange(e, "pageName")}
                              type="text"
                              class="form-control"
                              id="exampleInputEmail3"
                              wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                            />
                          </div>

                          <div class="form-group">
                            <label for="exampleInputEmail3">
                              Blog Thumbnail input
                            </label>
                            <input
                              onChange={(e) =>
                                handleFileChange(
                                  e,
                                  "blogThumbnailImg",
                                  form["pageName"]
                                )
                              }
                              ref={hiddenHeroS3ZipInput}
                              type="file"
                              name="img[]"
                              class="file-upload-default"
                              wtx-context="94220BF3-63DD-4CB9-ADE6-75494926503F"
                            />
                            <div class="input-group col-xs-12">
                              <input
                                value={homeImg}
                                type="text"
                                class="form-control file-upload-info"
                                disabled
                                wtx-context="022A60E4-C625-4861-89B6-528DE36EFFCF"
                              />
                              <span class="input-group-append">
                                <button
                                  class="file-upload-browse btn btn-primary"
                                  type="button"
                                  onClick={handleHeroS3Click}
                                >
                                  Upload
                                </button>
                              </span>
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="exampleInputEmail3">Title</label>
                            <input
                              onChange={(e) => handleChange(e, "titleTag")}
                              type="text"
                              class="form-control"
                              id="exampleInputEmail3"
                              wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                            />
                          </div>

                          <div class="form-group">
                            <label for="exampleInputEmail3">
                              Meta Description
                            </label>
                            <input
                              onChange={(e) =>
                                handleChange(e, "metaDescription")
                              }
                              type="text"
                              class="form-control"
                              id="exampleInputEmail3"
                              wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                            />
                          </div>

                          <div class="form-group">
                            <label> Cover image for desktop</label>
                            <input
                              ref={hiddenHeroDeskFileInput}
                              onChange={(e) =>
                                handleFileChange(
                                  e,
                                  "blogCoverDesktopImg",
                                  form["pageName"]
                                )
                              }
                              type="file"
                              name="img[]"
                              class="file-upload-default"
                              wtx-context="94220BF3-63DD-4CB9-ADE6-75494926503F"
                            />
                            <div class="input-group col-xs-12">
                              <input
                                value={heroDesktopImg}
                                type="text"
                                class="form-control file-upload-info"
                                disabled
                                wtx-context="022A60E4-C625-4861-89B6-528DE36EFFCF"
                              />
                              <span class="input-group-append">
                                <button
                                  class="file-upload-browse btn btn-primary"
                                  type="button"
                                  onClick={handleHeroDeskClick}
                                >
                                  Upload
                                </button>
                              </span>
                            </div>
                          </div>

                          <div class="form-group">
                            <label> Cover image for mobile</label>
                            <input
                              onChange={(e) =>
                                handleFileChange(
                                  e,
                                  "blogMobileDesktopImg",
                                  form["pageName"]
                                )
                              }
                              ref={hiddenHeroMobFileInput}
                              type="file"
                              name="img[]"
                              class="file-upload-default"
                              wtx-context="94220BF3-63DD-4CB9-ADE6-75494926503F"
                            />
                            <div class="input-group col-xs-12">
                              <input
                                value={heroMobileImg}
                                type="text"
                                class="form-control file-upload-info"
                                disabled
                                wtx-context="022A60E4-C625-4861-89B6-528DE36EFFCF"
                              />
                              <span class="input-group-append">
                                <button
                                  class="file-upload-browse btn btn-primary"
                                  type="button"
                                  onClick={handleHeroMobClick}
                                >
                                  Upload
                                </button>
                              </span>
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="exampleInputEmail3">H1 Header</label>
                            <input
                              onChange={(e) => handleChange(e, "h1Header")}
                              type="text"
                              class="form-control"
                              id="exampleInputEmail3"
                              wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                            />
                          </div>

                          <div class="form-group">
                            <label for="exampleInputEmail3">Author</label>
                            <input
                              onChange={(e) => handleChange(e, "author")}
                              type="text"
                              class="form-control"
                              id="exampleInputEmail3"
                              wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                            />
                          </div>

                          <div class="form-group">
                            <label for="exampleInputEmail3">Year</label>
                            <input
                              onChange={(e) => handleChange(e, "year")}
                              type="number"
                              class="form-control"
                              id="exampleInputEmail3"
                              wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                            />
                          </div>

                          <div class="form-group">
                            <label> Images uploads for links</label>
                            <input
                              onChange={(e) =>
                                handleFileChange(e, "", form["pageName"])
                              }
                              ref={hiddenLinkImgInput}
                              type="file"
                              name="img[]"
                              class="file-upload-default"
                              wtx-context="94220BF3-63DD-4CB9-ADE6-75494926503F"
                            />
                            <div class="input-group col-xs-12">
                              <input
                                value={linkImg}
                                type="text"
                                class="form-control file-upload-info"
                                disabled
                                wtx-context="022A60E4-C625-4861-89B6-528DE36EFFCF"
                              />
                              <span class="input-group-append">
                                <button
                                  class="file-upload-browse btn btn-primary"
                                  type="button"
                                  onClick={handleLinkImgClick}
                                >
                                  Upload
                                </button>
                              </span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => {}}
                />

                <button
                  type="button"
                  class="btn btn-primary mr-2 mt-3"
                  onClick={onSubmit}
                  disabled={!enableSubmit}
                >
                  Submit
                </button>
              </div>

              <ToastContainer />
            </div>
            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                  Copyright © durgapujavr 2021
                </span>
                {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                      Free
                      <a href="https://www.bootstrapdash.com/" target="_blank">
                        Bootstrap dashboard templates
                      </a>
                      from Bootstrapdash.com
                    </span> */}
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* <div dangerouslySetInnerHTML={{__html: content}}></div> */}
      <ToastContainer />

      <script src="../js/vendor.bundle.base.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
      <script src="../js/Chart.min.js"></script>
      <script src="../js/off-canvas.js"></script>
      <script src="../js/hoverable-collapse.js"></script>
      <script src="../js/template.js"></script>
      <script src="../js/todolist.js"></script>
      <script src="../js/dashboard.js"></script>
    </>
  );
}
