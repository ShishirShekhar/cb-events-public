import React from "react";
import "./form.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Form = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Whatsapp, setWhatsapp] = useState("");
  const [Domain, setDomain] = useState("");
  const [Branch, setBranch] = useState("");
  const [Reg, setReg] = useState("");
  const [Year, setYear] = useState("");
  const [review, setreview] = useState("");
  const [dob, setdob] = useState("");

  // CheckBox Input
  const [formData2, setFormData] = useState("");
  const [checked, setChecked] = useState([]); // categories
  const [categories, setCategories] = useState([
    {
      _id: "5d7c7653427efd4400201e0e",
      name: "Graphic designing & Video editing",
      slug: "Graphic-designing-&-Video-editing",
    },
    {
      _id: "5d7c7662427efd4400201e11",
      name: "Social media & Content writing",
      slug: "Social-media-&-Content-writing",
    },
    {
      _id: "5d7c79df427efd4400201e1e",
      name: "Technical team",
      slug: "Technical-team",
    },
    {
      _id: "5d7c7662427efd4400201e12",
      name: "Event management & Marketing",
      slug: "Event-management-&-Marketing",
    },
    {
      _id: "5d7c79df427efd4400201e14",
      name: "Public Speaking",
      slug: "Public-Speaking",
    },
  ]);

  useEffect(() => {
    setFormData(new FormData());
  }, []);

  const handleToggle = (c) => () => {
    // return the first index or -1
    const clickedCategory = checked.indexOf(c);
    const all = [...checked];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData2.set("categories", all);
  };

  const showCategories = () => {
    return categories.map((c, i) => (
      <p key={i} className="list-group form-item">
        <label className="form-check-label">{c.name}</label>
        <input
          onChange={handleToggle(c.name)}
          type="checkbox"
          className="list-group-item"
        />
      </p>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checked);

    const formData = {
      Name,
      Email,
      Mobile,
      Whatsapp,
      Domain,
      Branch,
      Year,
      checked,
      dob,
      Reg,
      review,
    };

    axios
      .post(`${process.env.REACT_APP_GLOBAL_API}/api/add`, formData)
      .then((response) => {
        console.log(response);
      });
    toast("Congratulation " + Name + " Registration Sucessfull");
    e.target.reset();
  };

  return (
    <div>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <p>CodingBlocksLPU Recruitment</p>

              <div className="form-item" id="create-course-form">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="form-item">
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-item">
                <input
                  type="number"
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile Number"
                  required
                />
              </div>

              <div className="form-item">
                <input
                  type="number"
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="WhatsApp Number"
                  required
                />
              </div>

              <div className="form-item">
                <input
                  type="text"
                  onChange={(e) => setBranch(e.target.value)}
                  placeholder="Branch"
                  required
                />
              </div>

              <div className="form-item">
                <input
                  type="number"
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="Year"
                  required
                />
              </div>

              <div className="form-item">
                <input
                  type="number"
                  onChange={(e) => setReg(e.target.value)}
                  placeholder="Registration Number"
                  required
                />
              </div>

              <div className="form-item">
                <input
                  type="text"
                  onChange={(e) => setreview(e.target.value)}
                  placeholder="Why do you what to join CodingBlocks LPU"
                  required
                />
              </div>

              <div className="domain">
                <h3>Domain:</h3>
                <br></br>
                {showCategories()}
              </div>

              <button className="submit-btn" type="submit">
                Register
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
