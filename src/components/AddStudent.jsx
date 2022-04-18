import { useState } from "react";
export const AddStudent = () => {
  const[formData, setFormData]=useState({
    
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "",
    "age": "",
    "tenth_score": "",
    "twelth_score": "",
    "preferred_branch": ""
  });
  const handleChange=(e)=>{
    console.log(e)
    const[id, value]=e.target;
    setFormData({
      ...formData,
      [id]:value
    });
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:8080/students",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(formData)
    })
  }
  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        Firstname:{" "}
        <input
        onChange={handleChange}
          type="text"
          id="first_name"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
         onChange={handleChange}
          type="text"
          id="last_name"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input
         onChange={handleChange}
          type="email"
          id="email"
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
           onChange={handleChange}
            name="gender"
            id="male"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
           onChange={handleChange}
            name="gender"
            id="female"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
         onChange={handleChange}
          type="number"
          name="age"
          id="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
         onChange={handleChange}
          type="number"
          id="tenth_score"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
         onChange={handleChange}
          type="number"
          id="twelth_score"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          onChange={handleChange}
          className="preferred_branch"
        >
          <option id="law"  value="law">law</option>
          <option id="commerce"  value="commerce">commerce</option>
          <option  id="science" value="science">science</option>
          <option  id="sports" value="sports">sports</option>
          <option id="arts" value="arts">arts</option>
          <option id="acting" value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
