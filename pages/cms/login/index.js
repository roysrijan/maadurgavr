import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function login() {
    const router = useRouter();
    const [form, setForm] = useState({});

    const handleChange = (event, value) => {
        form[value] = event.target.value;
        setForm(form);
    };

    const onSubmit = async () => {
        try{
        let response = await axios({
          url: "https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify(form)
        });
        if(response.data.accessToken){
          sessionStorage.setItem('token', response.data.accessToken);
          toast.success("Signed in successfully!");
          router.push('../cms');
        }
        else
          toast.warn("Something went wrong!");
        }
        catch(err){
          toast.warn("Something went wrong!");
        }
    };
    return (
        <>
        <Head>
            <link href="../css/style.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet"/>
        </Head>
        <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
        <div class="row flex-grow">
          <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <div class="auth-form-transparent text-left p-3">
              <div class="brand-logo">
                <img src="../../../../img/logo.png" alt="logo" />
              </div>
              <h4>Welcome back!</h4>
              <h6 class="font-weight-light">Happy to see you again!</h6>
              <form class="pt-3">
                <div class="form-group">
                  <label for="exampleInputEmail">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-user text-primary"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control form-control-lg border-left-0" id="exampleInputEmail" placeholder="Username" onClick={e=>handleChange(e,'email')} onChange={e=>handleChange(e,'email')} />
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword">Password</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-lock text-primary"></i>
                      </span>
                    </div>
                    <input type="password" class="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" onChange={e=>handleChange(e,'password')} />                        
                  </div>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" />
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
                <div class="my-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="javascript:;" onClick={onSubmit}>LOGIN</a>
                </div>
                <div class="mb-2 d-flex">
                  <button type="button" class="btn btn-facebook auth-form-btn flex-grow mr-1">
                    <i class="ti-facebook mr-2"></i>Facebook
                  </button>
                  <button type="button" class="btn btn-google auth-form-btn flex-grow ml-1">
                    <i class="ti-google mr-2"></i>Google
                  </button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Don't have an account? <a href="register-2.html" class="text-primary">Create</a>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 login-half-bg d-flex flex-row">
            <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2020  All rights reserved.</p>
          </div>
        </div>
        </div>
        </div>
        </div>
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
    )
}