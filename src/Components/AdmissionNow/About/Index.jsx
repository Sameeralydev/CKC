// AdmissionForm.jsx
import React, { useState } from "react";
import "./About.css";

export const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    foundUs: "",
    grade: "",
    city: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic required-field validation
    if (!formData.fullName || !formData.mobile || !formData.email) {
      alert("Please fill all required fields.");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("admissionForms")) || [];
    existing.push(formData);
    localStorage.setItem("admissionForms", JSON.stringify(existing));

    alert("Form submitted & saved to Local Storage!");

    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      foundUs: "",
      grade: "",
      city: "",
      query: "",
    });
  };

  return (
    <div className="admission-form">
      <h2 className="form-title">
        Admission <span>Form</span>
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              placeholder="e.g Abdullah Malik"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number *</label>
            <input
              type="text"
              name="mobile"
              placeholder="e.g +1234567890"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="e.g abdullahmalik@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-group">
            <label>Where did you find us?</label>
            <select
              name="foundUs"
              value={formData.foundUs}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Website">Website</option>
              <option value="Friend/Family">Friend/Family</option>
            </select>
          </div>

          <div className="form-group">
            <label>Grade</label>
            <select name="grade" value={formData.grade} onChange={handleChange}>
              <option value="">Select a grade</option>
              <option value="Playgroup">Playgroup</option>
              <option value="Nursery">Nursery</option>
              <option value="KG">KG</option>
              <option value="1-10">1–10</option>
            </select>
          </div>

          <div className="form-group">
            <label>City</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select a city</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Query */}
        <div className="form-group">
          <label>Your Query</label>
          <textarea
            name="query"
            placeholder="Write your message here..."
            value={formData.query}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
