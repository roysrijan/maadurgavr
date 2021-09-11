import { withRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "react-multi-carousel/lib/styles.css";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";


export const getStaticPaths = async () => {
    let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data");
    let data = await res.json();
    const paths = data.items.map((e, i) => {
        return {
            params: { id: e.clubPageName.toString() }
        }
    });
    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data");
    let data = await res.json();
    let item = data.items.filter(o=>o.clubPageName == id)[0];
    return {
        props: {item: JSON.stringify(item), items: JSON.stringify(data.items)}
    }
}


function tour({item, items}) {
    let profile = JSON.parse(item);
    let youTubeLink = profile.youtubeLink? /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.exec(profile.youtubeLink)[0]: '';
    const router = useRouter();
    const [form, setForm] = useState(profile);
    const [home, setHome] = useState(true);
    const [club, setClub] = useState(false);
    const [hero, setHero] = useState(false);
    const [theme, setTheme] = useState(false);
    const [youtube, setYoutube] = useState(false);
    const [homeImg, setHomeImg] = useState(profile.homeImg);
    const [heroDesktopImg, setHeroDesktopImg] = useState(profile.heroDesktopImg);
    const [heroMobileImg, setHeroMobileImg] = useState(profile.heroMobileImg);
    const [heroS3, setHeroS3] = useState(profile.heroS3);
    const [enableSubmit, setEnableSubmit] = useState(true);
  
    const hiddenFileInput = useRef();
    const hiddenHeroDeskFileInput = useRef();
    const hiddenHeroMobFileInput = useRef();
    const hiddenHeroS3ZipInput = useRef();
  
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    
    const handleHeroDeskClick = event => {
      hiddenHeroDeskFileInput.current.click();
    };
  
    const handleHeroMobClick = event => {
      hiddenHeroMobFileInput.current.click();
    };
  
    const handleHeroS3Click = event => {
      hiddenHeroS3ZipInput.current.click();
    };
  
    const handleFileChange = async (event, value, type) => {
      const fileUploaded = event.target.files[0];
      const fileName = fileUploaded.name.split('.')[0];
      let params, file;
      if(type=='zip-edit'){
        setEnableSubmit(false);
        params = form.clubId+"&zipFileName="+fileUploaded.name+"&type="+type;
        file = fileUploaded.name;
      }
      else {
        params = form.clubId+"&fileName="+fileUploaded.name+"&type="+type+"&imageType="+value;
        file = fileName+"/"+fileUploaded.name;
      }
      let response = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/update-club?id="+params, {
        method: "PUT"
      });
      if(response.status<=300) {
        //toast.success('File Uploaded Successfully!')
      }
      else{
        toast.warn('Please upload a valid file');
        return
      }
      /* form[value] = file;
      setForm(form); */
      const body = await response.json();
      let formdata = new FormData();
      if(value=='homeImg')
        setHomeImg(fileName+"/"+fileUploaded.name);
      else if(value=='heroDesktopImg')
        setHeroDesktopImg(fileName+"/"+fileUploaded.name);
      else if(value=='heroMobileImg')
        setHeroMobileImg(fileName+"/"+fileUploaded.name);
      else if(value=='heroS3')
        setHeroS3(fileUploaded.name);
      formdata.append('Policy', body.fields.Policy);
      formdata.append('X-Amz-Algorithm', body.fields['X-Amz-Algorithm']);
      formdata.append('X-Amz-Credential', body.fields['X-Amz-Credential']);
      formdata.append('X-Amz-Date', body.fields['X-Amz-Date']);
      formdata.append('X-Amz-Security-Token', body.fields['X-Amz-Security-Token']);
      formdata.append('X-Amz-Signature', body.fields['X-Amz-Signature']);
      formdata.append('bucket', body.fields.bucket);
      formdata.append('key', body.fields.key);
      formdata.append('file', fileUploaded);
      try{
        let res = await fetch(body.url, {
          method: "POST",
          body: formdata
        });
        if(res.status<=300) {
          setEnableSubmit(true);
          toast.success('File Uploaded Successfully!')
        }
        else{
          toast.warn('Please upload it again');
        }
      }
      catch(err){
        toast.warn('Please upload it again');
      }
      
      console.log(fileUploaded, body);
    };
      
    const continueHome = () => {
      setHome(false);
      setClub(true);
    };
  
    const continueClub = () => {
      setClub(false);
      setHero(true);
    };
  
    const continueHero = () => {
      setHero(false);
      setTheme(true);
    };
  
    const continueTheme = () => {
      setTheme(false);
      setYoutube(true);
    };
  
    const onSubmit = async () => {
      try{
      if(typeof form.year == 'string'){
        form.year=+form.year
      }
      if(typeof form.sequence == 'string'){
        form.sequence=+form.sequence
      }
      let response = await axios({
        url: "https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/update-club?id="+form.clubId+"&type=club-details",
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(form)
      });
      if(response.status <= 300){
        toast.success("Data updated successfully!");
        router.push('../cms');
      }
      else
        toast.warn("Something went wrong!");
      }
      catch(err){
        toast.warn("Something went wrong!");
      }
    };
  
    const backClub = () => {
      setClub(false);
      setHome(true);
    };
  
    const backHero = () => {
      setHero(false);
      setClub(true);
    };
  
    const backTheme = () => {
      setTheme(false);
      setHero(true);
    };
  
    const backYoutube = () => {
      setYoutube(false);
      setTheme(true);
    };
  
    const handleChange = (event, value) => {
      form[value] = event.target.value;
      setForm(form);
    };
    return (
    <>
      <Head>
        <link href="../css/style.css" rel="stylesheet" />
      </Head>
      <div class="container-scroller">
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a class="navbar-brand brand-logo mr-5" href="/">
              <img
                src="../../../../img/logo.png"
                class="mr-2"
                alt="logo"
              />
            </a>
            <a class="navbar-brand brand-logo-mini" href="/">
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
                  <img src="https://www.bootstrapdash.com/demo/royalui-free/template/images/faces/face28.jpg" alt="profile" />
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
                <a className="nav-link" href="pages/forms/basic_elements.html">
                  <i className="ti-layout-list-post menu-icon"></i>
                  <span className="menu-title">BLogs</span>
                </a>
              </li>
             </ul>
          </nav>
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 className="font-weight-bold mb-0">Add Club</h4>
                    </div>
                    <div>
                      {/* <button
                        type="button"
                        className="btn btn-primary btn-icon-text btn-rounded"
                      >
                        <i className="ti-clipboard btn-icon-prepend"></i>Report
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            
              <ul id="progressbar" className="step-wrap">
                    <li className={home?"active":""} id="account"><span>Step 1</span><strong>Home</strong> <i class="ti-angle-right"></i></li>
                    <li className={club?"active":""} id="personal"><span>Step 2</span><strong>Club</strong><i class="ti-angle-right"></i></li>
                    <li className={hero?"active":""} id="payment"><span>Step 3</span><strong>Hero</strong><i class="ti-angle-right"></i></li>
                    <li className={theme?"active":""} id="confirm"><span>Step 4</span><strong>Theme</strong><i class="ti-angle-right"></i></li>
                    <li className={youtube?"active":""} id="confirm"><span>Step 5</span><strong>Youtube</strong></li>
              </ul>        
              { home && (
                <div className="row">
                    <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">HOME PAGE Thumbnails</h4>
                        {/* <p class="card-description">
                        Basic form elements
                    </p> */}
                        <form
                            class="forms-sample"
                            wtx-context="20F8721F-E105-42B9-8FFC-822F9B40444E"
                        >
                            <div class="form-group">
                            <label for="exampleInputName1">Thumbnail title</label>
                            <input
                                defaultValue={profile.homeTitle}
                                onChange={e => handleChange(e, 'homeTitle')}
                                type="text"
                                class="form-control"
                                id="exampleInputName1"
                                                    wtx-context="040DB181-4B25-43E8-A8FF-46A59047C3C3"
                            />
                            </div>

                            <div class="form-group">
                            <label for="exampleInputName1">Thumbnail sequence</label>
                            <input
                                defaultValue={profile.sequence}
                                onChange={e => handleChange(e, 'sequence')}
                                type="number"
                                class="form-control"
                                id="exampleInputName1"
                                                    wtx-context="040DB181-4B25-43E8-A8FF-46A59047C3C3"
                            />
                            </div>

                            <div class="form-group">
                            <label for="exampleInputName1">Thumbnail year</label>
                            <input
                                defaultValue={profile.year}
                                onChange={e => handleChange(e, 'year')}
                                type="number"
                                class="form-control"
                                id="exampleInputName1"
                                                    wtx-context="040DB181-4B25-43E8-A8FF-46A59047C3C3"
                            />
                            </div>

                            <div class="form-group">
                            <label>Image upload</label>
                            <input
                                ref={hiddenFileInput}
                                type="file"
                                name="img[]"
                                class="file-upload-default"
                                wtx-context="94220BF3-63DD-4CB9-ADE6-75494926503F"
                                onChange={e => handleFileChange(e, 'homeImg', 'image-edit')}
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
                                    onClick={handleClick}
                                >
                                    Upload
                                </button>
                                </span>
                            </div>
                            </div>

                            <div class="form-group">
                            <label for="exampleInputEmail3">
                                Image name (Alt Text tag)
                            </label>
                            <input
                                defaultValue={profile.homeImgName}
                                onChange={e => handleChange(e, 'homeImgName')}
                                type="email"
                                class="form-control"
                                id="exampleInputEmail3"
                                                    wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                            />
                            </div>
                            <button type="button" class="btn btn-primary mr-2" onClick={continueHome}>
                            Next
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
              )}
              { club && (
                <div className="row">
                <div class="col-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">CLUB PAGE Tags</h4>
                      {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                      <form
                        class="forms-sample"
                        wtx-context="20F8721F-E105-42B9-8FFC-822F9B40444E"
                      >
                        <div class="form-group">
                          <label for="exampleInputName1">Page name</label>
                          <input
                            defaultValue={profile.clubPageName}
                            onChange={e => handleChange(e, 'clubPageName')}
                            type="text"
                            class="form-control"
                            id="exampleInputName1"
                                                wtx-context="040DB181-4B25-43E8-A8FF-46A59047C3C3"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail3">Title tag</label>
                          <input
                            defaultValue={profile.clubTitle}
                            onChange={e => handleChange(e, 'clubTitle')}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail3"
                                                 wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputName1">
                            Meta description
                          </label>
                          <input
                            defaultValue={profile.clubMetaDesc}
                            onChange={e => handleChange(e, 'clubMetaDesc')}
                            type="text"
                            class="form-control"
                            id="exampleInputName1"
                                                wtx-context="040DB181-4B25-43E8-A8FF-46A59047C3C3"
                          />
                        </div>
                        <button type="button" class="btn btn-primary mr-2" onClick={continueClub}>
                        Next
                        </button>
                        <button class="btn btn-light" onClick={backClub}>Back</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              )}
              { hero && (
                <div className="row">
                <div class="col-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">CLUB PAGE Hero section</h4>
                      {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                      <form
                        class="forms-sample"
                        wtx-context="20F8721F-E105-42B9-8FFC-822F9B40444E"
                      >
                        <div class="form-group">
                          <label> Cover image for desktop</label>
                          <input
                            ref={hiddenHeroDeskFileInput}
                            onChange={e => handleFileChange(e, 'heroDesktopImg', 'image-edit')}                          
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
                            onChange={e => handleFileChange(e, 'heroMobileImg', 'image-edit')}
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
                          <label for="exampleInputEmail3">
                            Image name (Alt Text tag)
                          </label>
                          <input
                            defaultValue={profile.heroImgName}
                            onChange={e => handleChange(e, 'heroImgName')}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail3"
                                                 wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail3">H1 Header</label>
                          <input
                            defaultValue={profile.heroHeader}
                            onChange={e => handleChange(e, 'heroHeader')}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail3"
                                                 wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail3">Tour s3 input</label>
                          <input
                            onChange={e => handleFileChange(e, 'heroS3', 'zip-edit')}
                            ref={hiddenHeroS3ZipInput}
                            type="file"
                            name="img[]"
                            class="file-upload-default"
                            wtx-context="94220BF3-63DD-4CB9-ADE6-75494926503F"
                          />
                          <div class="input-group col-xs-12">
                            <input
                              value={heroS3}
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
                        <button type="button" class="btn btn-primary mr-2" onClick={continueHero}>
                        Next
                        </button>
                        <button class="btn btn-light" onClick={backHero}>Back</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              )}
              { theme && (
                <div className="row">
                <div class="col-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">CLUB PAGE Theme description</h4>
                      {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                      <form
                        class="forms-sample"
                        wtx-context="20F8721F-E105-42B9-8FFC-822F9B40444E"
                      >
                        <div class="form-group">
                          <label for="exampleInputName1">H2 Header</label>
                          <input
                            defaultValue={profile.themeHeader}
                            onChange={e => handleChange(e, 'themeHeader')}
                            type="text"
                            class="form-control"
                            id="exampleInputName1"
                                                wtx-context="040DB181-4B25-43E8-A8FF-46A59047C3C3"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail3">
                            Theme description
                          </label>
                          <textarea
                            defaultValue={profile.themeDesc}
                            onChange={e => handleChange(e, 'themeDesc')}
                            class="form-control"
                            id="exampleTextarea1"
                            rows="4"
                            spellcheck="false"
                          ></textarea>
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail3">
                            Theme description Second Paragraph
                          </label>
                          <textarea
                            defaultValue={profile.themeDesc2}
                            onChange={e => handleChange(e, 'themeDesc2')}
                            class="form-control"
                            id="exampleTextarea1"
                            rows="4"
                            spellcheck="false"
                          ></textarea>
                        </div>

                        <button type="button" class="btn btn-primary mr-2" onClick={continueTheme}>
                        Next
                        </button>
                        <button class="btn btn-light" onClick={backTheme}>Back</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              )}
              { youtube && (
                <div className="row">
                <div class="col-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">CLUB PAGE youtube</h4>
                      {/* <p class="card-description">
                    Basic form elements
                  </p> */}
                      <form
                        class="forms-sample"
                        wtx-context="20F8721F-E105-42B9-8FFC-822F9B40444E"
                      >
                        <div class="form-group">
                          <label for="exampleInputName1">Youtube link</label>
                          <input
                            defaultValue={profile.youtubeLink}
                            onChange={e => handleChange(e, 'youtubeLink')}
                            type="text"
                            class="form-control"
                            id="exampleInputName1"
                            //                     wtx-context="040DB181-4B25-43E8-A8FF-46A59047C3C3"
                          />
                        </div>

                       
                        <button type="button" class="btn btn-primary mr-2" onClick={onSubmit} disabled={!enableSubmit}>
                          Submit
                        </button>
                        <button class="btn btn-light" onClick={backYoutube}>Back</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              )}
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

      <script src="../js/vendor.bundle.base.js"></script>
      <script src="../js/Chart.min.js"></script>
      <script src="../js/off-canvas.js"></script>
      <script src="../js/hoverable-collapse.js"></script>
      <script src="../js/template.js"></script>
      <script src="../js/todolist.js"></script>
      <script src="../js/dashboard.js"></script>
    </>
  );
}

export default withRouter(tour)
