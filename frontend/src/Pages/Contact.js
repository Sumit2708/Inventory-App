import React, { useState } from "react";

const Contact = () => {
  const [inp, setInp] = useState({
    name:'',
    email:'',
    message:""
  });

  const handleChange = (e) => {
    const {name,value}= e.target
    console.log(e.target.value);
    setInp((preValue)=>{
      return {
        ...preValue,[name]:value
      }
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name,  email,  message } = inp;

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("Thank You! We Will Conatct You Shortly");
      console.log("data added");
    }
  };

  return (
    <div className="co_container">
      <div className="col-md-8 col-lg-6 form-wrapper" data-form-type="formoid">
        <div className="form-head">
          <h1 className="mbr-section-title form-title pb-3 display-5 my-4">
            CONTACT FORM
          </h1>
          <h3 className="mbr-section-title form-title  align-center display-5">
            Get In Touch
          </h3>
        </div>
        <div className="form1" data-form-type="formoid">
          <div>Please Make Sure To Fill The Details Otherwise We Will Unable To Connect !</div>
          <form className="mbr-form" onSubmit={handleSubmit}>
            <div className="input-wrap" data-for="firstname">
              <label
                className="form-label-outside mbr-lighter  mt-3"
                for="form-1-firstname"
              >
                Name
              </label>
              <input
                type="text"
                className=" form-control"
                name="name"
                data-form-field="First Name"
                required=""
                id="firstname-form4-1"
                value={inp.firstname}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrap" data-for="email">
              <label
                className="form-label-outside mbr-lighter  mt-3"
                for="form-1-email"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                data-form-field="Email"
                required=""
                id="email-form4-1"
                value={inp.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group" data-for="message">
              <label
                className="form-label-outside mbr-lighter my-3"
                for="form-1-message"
              >
                Message
              </label>
              <textarea
                type="text"
                className="form-control"
                name="message"
                rows="4"
                data-form-field="Message"
                id="message-form4-1"
                value={inp.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <span className="input-group-btn">
              <button
                type="submit"
                className="btn btn-lg btn-form btn-info display-4 my-4"
              >
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
