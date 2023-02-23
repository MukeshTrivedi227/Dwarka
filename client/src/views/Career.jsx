import React from 'react'

export default function Career() {
  return (
    <main id="main">
 
    <section id="breadcrumbs" class="breadcrumbs">
      {/* <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>About</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>About</li>
          </ol>
        </div>

      </div> */}
    </section>

   
    {/* <section id="about" class="about"> */}
    <section id="services" class="services">
      <div class="container">
      <div class="row content">
      <div class="col-lg-12">
            <h2>CURRENT OPENINGS</h2>
           </div>
           </div>
      <div class="row">
          <div class="col-md-4">
          <div class="icon-box">
            
            {/* <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/></div> */}
              {/* <i class="bi bi-briefcase"></i> */}
              <h4>REACT JS</h4>
              <p>Min. Experience: <br></br> 
               Freshers/Exprienced
                  Key Skill: <br></br>  In-depth knowledge of JavaScript, CSS, HTML, functional programming, and front-end languages.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="icon-box">
            {/* <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/></div> */}
              {/* <i class="bi bi-briefcase"></i> */}
              <h4> REACT NATIVE</h4>
              <p> Min. Experience:   Freshers/Exprienced
                  Key Skill:   In-depth knowledge of JavaScript, OOPS Concepts, Database Connectivity and CSS. </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="icon-box">
            {/* <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/></div> */}
              {/* <i class="bi bi-briefcase"></i> */}
              <h4>PYTHON DEVELOPER</h4>
              <p>Min. Experience:   1 year

Key Skill:   Knowledge of Python web frameworks and event-driven programming in Python.</p>
            </div>
          </div>
        </div>  

        <div class="row content">
        <form className='row g-3'>
                <div className='col-12 row'>
                  <div className='col-6'>
                    <label for='inputNanme4' className='form-label'>
                      First Name:
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder="Enter Frist Name"
                    //   onChange={(e) => setName(e.target.value)}
                    />
                    {/* <p style={{ color: "red" }}>{formErrors.name}</p> */}
                  </div>
                  <div className='col-6'>
                    <label for='inputEmail4' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder="Enter Email"
                    //   onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <p style={{ color: "red" }}>{formErrors.email}</p> */}
                  </div>
                  <div className='col-6'>
                    <label for='inputNanme4' className='form-label'>
                      Contact:
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='contact'
                      placeholder="Enter Contact Number"
                    //   onChange={(e) => setContact(e.target.value)}
                    />
                    {/* <p style={{ color: "red" }}>{formErrors.contact}</p> */}
                  </div>
                  <div className='col-6'>
                    <label for='inputPassword4' className='form-label'>
                      Education
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='education'
                      placeholder="Enter Education"
                    //   onChange={(e) => setEducation(e.target.value)}
                    />
                    {/* <p style={{ color: "red" }}>{formErrors.education}</p> */}
                  </div>
                  <div className='col-6'>
                    <label for='inputPassword4' className='form-label'>
                      Resume
                    </label>
                    <input
                      type='file'
                      className='form-control'
                      id='resume'
                    //   onChange={(e) => setResume(e.target.files[0])}
                    />
                    {/* <p style={{ color: "red" }}>{formErrors.resume}</p> */}
                  </div>
                  <div className='col-6'>
                    <label for='inputPassword4' className='form-label'>
                      status
                    </label>
                    <select
                      class='form-select'
                      id='example-select'
                      name='status'
                      // value={status}
                      select
                    // onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value={0}>Select Status</option>
                      <option value={1}>Fresher</option>
                      <option value={2}>Experience</option>
                    </select>
                    {/* <p style={{ color: "red" }}>{formErrors.status}</p> */}
                  </div>
                  <div className='col-6'>
                    <label for='inputPassword4' className='form-label'>
                      job_status
                    </label>
                    <select
                      class='form-select'
                      id='example-select1'
                      name='job_status'
                      // value={job_status}
                      select
                    //   onChange={(e) => setJob_status(e.target.value)}
                      >
                      <option value={0}>Select Status</option>
                      <option value={1}>Internship</option>
                      <option value={2}>job</option>
                    </select>
                    {/* <p style={{ color: "red" }}>{formErrors.job_status}</p> */}
                  </div>
                  
                  <div className='text-center'>
                    <br></br>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      // onClick={submitHandle}
                      >
                      Submit
                    </button>
                    <span>
                      
                      {/* <button
                        type='reset'
                        className='btn btn-secondary'
                        onClick={(e) => navigate("/DisplayAboutsus")}>
                        Back
                      </button> */}
                    </span>
                  </div>
                </div>
              </form>
          {/* <div class="col-lg-12">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            </div> */}
        </div>

      </div>
    </section>
    </main>
  )
}
