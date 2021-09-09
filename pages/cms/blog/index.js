
import React, {useState, useRef} from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/router';

const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});
export default function example() {
    const router = useRouter();
	const editor = useRef(null);
	const [content, setContent] = useState('');
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


    const handleHeroDeskClick = event => {
        hiddenHeroDeskFileInput.current.click();
      };
    
      const handleHeroMobClick = event => {
        hiddenHeroMobFileInput.current.click();
      };
    
      const handleHeroS3Click = event => {
        hiddenHeroS3ZipInput.current.click();
      };

      const handleLinkImgClick = event => {
        hiddenLinkImgInput.current.click();
      };

      const handleFileChange = async (event, value, pageName) => {
        if(!form['pageName'])
        {
            toast.warn('Please Enter Valid Page Name!!');
            return
        }
        const fileUploaded = event.target.files[0];
        const fileName = fileUploaded.name.split('.')[0];
        let params, file;
        params = "fileName="+fileUploaded.name+"&pageName="+pageName;
        let response = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/blog-presigned-url?"+params, {
          method: "GET"
        });
        if(response.status<=300) {
          //toast.success('File Uploaded Successfully!')
        }
        else{
          toast.warn('Please upload a valid file');
          return
        }
        let body = await response.json();
        if(value)
        {
            form[value] = body.cloudfrontUrl;
            setForm(form);
        } else {
            setLinkImg(body.cloudfrontUrl);
        }
        body = JSON.parse(body.presignedUrl);
        let formdata = new FormData();
        if(value=='blogThumbnailImg')
          setHomeImg(fileName+"/"+fileUploaded.name);
        else if(value=='blogCoverDesktopImg')
          setHeroDesktopImg(fileName+"/"+fileUploaded.name);
        else if(value=='blogMobileDesktopImg')
          setHeroMobileImg(fileName+"/"+fileUploaded.name);
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
      
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
	const handleChange = (event, value) => {
        form[value] = event.target.value;
        setForm(form);
    };

    const onSubmit = async () => {
        try{
        if(!form['pageName']&&!form['blogThumbnailImg']&&!form['titleTag']&&!form['blogEditor']&&!form['blogCoverDesktopImg'])
        {
            toast.warn('Please Enter All Mandatory Fields!!');
            return
        }    
        /* if(typeof form.year == 'string'){
          form.year=+form.year
        } */
        let response = await axios({
          url: "https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/create-blog",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify({...form,blogEditor:content,createdOn: new Date().toISOString()})
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
	return (
            <>
            <Head>
            <link href="../css/style.css" rel="stylesheet" />
            </Head>
            <div>
            <div className="row">
                <div class="col-12 grid-margin stretch-card">
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
                          <label for="exampleInputEmail3">
                            Page Name
                          </label>
                          <input
                            onChange={e => handleChange(e, 'pageName')}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail3"
                                                 wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail3">Blog Thumbnail input</label>
                          <input
                            onChange={e => handleFileChange(e, 'blogThumbnailImg', form['pageName'])}
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
                            onChange={e => handleChange(e, 'titleTag')}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail3"
                                                 wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail3">Meta Description</label>
                          <input
                            onChange={e => handleChange(e, 'metaDescription')}
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
                            onChange={e => handleFileChange(e, 'blogCoverDesktopImg', form['pageName'])}                          
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
                            onChange={e => handleFileChange(e, 'blogMobileDesktopImg', form['pageName'])}
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
                            onChange={e => handleChange(e, 'h1Header')}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail3"
                                                 wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                          />
                        </div>


                        <div class="form-group">
                          <label for="exampleInputEmail3">Author</label>
                          <input
                            onChange={e => handleChange(e, 'author')}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail3"
                                                 wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                          />
                        </div>

                        

                        

                        <div class="form-group">
                          <label for="exampleInputEmail3">Year</label>
                          <input
                            onChange={e => handleChange(e, 'year')}
                            type="number"
                            class="form-control"
                            id="exampleInputEmail3"
                                                 wtx-context="AA920E2B-7FBB-4321-BF70-18CB5AEAC2AB"
                          />
                        </div>

                        <div class="form-group">
                          <label> Images uploads for links</label>
                          <input
                            onChange={e => handleFileChange(e, '', form['pageName'])}
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
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => {}}
                />
            </div>
            <button type="button" class="btn btn-primary mr-2" onClick={onSubmit} disabled={!enableSubmit}>
                          Submit
                        </button>
            {/* <div dangerouslySetInnerHTML={{__html: content}}></div> */}
            <ToastContainer />
            </>
        );
}