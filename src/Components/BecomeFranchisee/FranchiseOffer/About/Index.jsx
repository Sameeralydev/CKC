import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className="application-container">
      {/* --- APPLICATION FORM HEADER --- */}
      <div className="application-header">
        <h1>APPLICATION FORM</h1>
        <p>Section 1</p>
      </div>

      {/* --- PERSONAL DATA SECTION 1 --- */}
      <div className="form-section personal-data-section">
        <div className="section-header yellow-bg">
          <h2>Personal Data</h2>
        </div>
        
        <table className="personal-data-table">
          <tbody>
            <tr>
              <td className="label-col">Name:</td>
              <td className="data-col"><input type="text" placeholder="Your Name Here!" /></td>
              <td className="label-col right-col"></td>
              <td className="data-col"></td>
            </tr>
            <tr>
              <td className="label-col">Gender:</td>
              <td className="data-col gender-col">
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
              </td>
              <td className="label-col right-col">Date of Birth:</td>
              <td className="data-col">
                <input type="text" placeholder="___ / ___ / ____" />
              </td>
            </tr>
            <tr>
              <td className="label-col">Mailing Address:</td>
              <td className="data-col"><input type="text" defaultValue="Iqbal Town Lahore Pakistan" /></td>
              <td className="label-col right-col">CNIC No:</td>
              <td className="data-col"><input type="text" /></td>
            </tr>
            <tr>
              <td className="label-col">Street:</td>
              <td className="data-col"><input type="text" /></td>
              <td className="label-col right-col"></td>
              <td className="data-col"></td>
            </tr>
            <tr>
              <td className="label-col">Area:</td>
              <td className="data-col"><input type="text" /></td>
              <td className="label-col right-col"></td>
              <td className="data-col"></td>
            </tr>
            <tr>
              <td className="label-col">City:</td>
              <td className="data-col"><input type="text" /></td>
              <td className="label-col right-col"></td>
              <td className="data-col"></td>
            </tr>
            <tr>
              <td className="label-col">Postal Code:</td>
              <td className="data-col"><input type="text" /></td>
              <td className="label-col right-col">Off. Tel No:</td>
              <td className="data-col"><input type="text" /></td>
            </tr>
            <tr>
              <td className="label-col">Tel No (Res):</td>
              <td className="data-col"><input type="text" /></td>
              <td className="label-col right-col">Fax:</td>
              <td className="data-col"><input type="text" /></td>
            </tr>
            <tr>
              <td className="label-col">Mobile No:</td>
              <td className="data-col"><input type="text" /></td>
              <td className="label-col right-col">e-mail Address:</td>
              <td className="data-col"><input type="email" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- EDUCATIONAL BACKGROUND SECTION 2 --- */}
      <div className="form-section educational-section">
        <p className="section-label">Section 2</p>
        <div className="section-header yellow-bg">
          <h2>Educational Background</h2>
        </div>
        
        <div className="educational-options">
          <div className="option numbered">1.</div>
          <div className="option">
            <input type="checkbox" id="bachelors" />
            <label htmlFor="bachelors">Bachelors</label>
          </div>
          <div className="option">
            <input type="checkbox" id="masters" />
            <label htmlFor="masters">Masters</label>
          </div>
          <div className="option">
            <input type="checkbox" id="doctorate" />
            <label htmlFor="doctorate">Doctorate</label>
          </div>
          <div className="option">
            <input type="checkbox" id="professional" />
            <label htmlFor="professional">Professional</label>
          </div>
          <div className="option other-option">
            <input type="checkbox" id="others" />
            <label htmlFor="others">Others:</label>
          </div>
        </div>
      </div>

      {/* --- EXPERIENCE WORK / BUSINESS SECTION 3 --- */}
      <div className="form-section experience-section">
        <p className="section-label">Section 3</p>
        <div className="section-header yellow-bg">
          <h2>*Experience Work / Business</h2>
        </div>

        <table className="experience-table">
          <tbody>
            <tr>
              <td className="label-col experience-label">Total Experience:</td>
              <td className="data-col half-width"><input type="text" /></td>
              <td className="label-col narrow-label">Years</td>
              <td className="data-col"><input type="text" /></td>
            </tr>
            <tr className="header-row">
              <td className="header-prefix"></td>
              <td className="header-col">Company Name</td>
              <td className="header-col">Designation</td>
              <td className="header-col checkbox-header">Business</td>
              <td className="header-col checkbox-header">Employed</td>
            </tr>
            {['a.', 'b.', 'c.'].map((prefix) => (
              <tr key={prefix}>
                <td className="data-col-prefix">{prefix}</td>
                <td className="data-col"><input type="text" /></td>
                <td className="data-col"><input type="text" /></td>
                <td className="checkbox-col"><input type="checkbox" /></td>
                <td className="checkbox-col"><input type="checkbox" /></td>
              </tr>
            ))}
            <tr>
              <td className="label-col experience-label">Experience in the field of Education:</td>
              <td className="data-col half-width"><input type="text" /></td>
              <td className="label-col narrow-label">Years</td>
              <td className="data-col"><input type="text" /></td>
            </tr>
            <tr>
              <td className="label-col" colSpan="2">Are you currently operating any school?</td>
              <td className="data-col radio-group" colSpan="3">
                <input type="radio" id="yesSchool" name="operatingSchool" value="yes" />
                <label htmlFor="yesSchool">Yes</label>
                <input type="radio" id="noSchool" name="operatingSchool" value="no" />
                <label htmlFor="noSchool">No</label>
              </td>
            </tr>
            <tr>
              <td className="label-col sub-question-header" colSpan="2">If Yes for Question 5:</td>
              <td className="data-col" colSpan="3"></td>
            </tr>
            <tr>
              <td className="data-col-prefix">a.</td>
              <td className="label-col">Name of School:</td>
              <td className="data-col" colSpan="3"><input type="text" /></td>
            </tr>
            <tr>
              <td className="data-col-prefix">b.</td>
              <td className="label-col">Location / City:</td>
              <td className="data-col" colSpan="3"><input type="text" /></td>
            </tr>
            <tr>
              <td className="data-col-prefix">c.</td>
              <td className="label-col">Level of School?</td>
              <td className="data-col checkbox-group" colSpan="3">
                <input type="checkbox" id="nursery" /><label htmlFor="nursery">Nursery</label>
                <input type="checkbox" id="primary" /><label htmlFor="primary">Primary</label>
                <input type="checkbox" id="middle" /><label htmlFor="middle">Middle</label>
                <input type="checkbox" id="high" /><label htmlFor="high">High</label>
                <input type="checkbox" id="otherLevel" /><label htmlFor="otherLevel">Other:</label>
              </td>
            </tr>
            <tr>
              <td className="data-col-prefix">d.</td>
              <td className="label-col">Medium?</td>
              <td className="data-col checkbox-group" colSpan="3">
                <input type="checkbox" id="englishMedium" /><label htmlFor="englishMedium">English</label>
                <input type="checkbox" id="urduMedium" /><label htmlFor="urduMedium">Urdu</label>
              </td>
            </tr>
            <tr>
              <td className="data-col-prefix">e.</td>
              <td className="label-col">Type of School?</td>
              <td className="data-col checkbox-group" colSpan="3">
                <input type="checkbox" id="coEducation" /><label htmlFor="coEducation">Co-Education</label>
                <input type="checkbox" id="boys" /><label htmlFor="boys">Boys</label>
                <input type="checkbox" id="girls" /><label htmlFor="girls">Girls</label>
                <input type="checkbox" id="partialCoEducation" /><label htmlFor="partialCoEducation">Partial Co-Education</label>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="extra-sheet-note">*Attach extra sheet if required</p>
      </div>
      
      {/* --- OPERATION SECTION 4 --- */}
      <div className="form-section operation-section">
        <p className="section-label">Section 4</p>
        <div className="section-header yellow-bg">
          <h2>Operation</h2>
        </div>

        <table className="operation-table">
          <tbody>
            <tr>
              <td className="question-no">7.</td>
              <td className="question-label">You intend to:</td>
              <td className="question-data">
                <input type="checkbox" id="establishNew" />
                <label htmlFor="establishNew">Establish New School</label>
              </td>
              <td className="question-data">
                <input type="checkbox" id="convertExisting" />
                <label htmlFor="convertExisting">Convert existing school</label>
              </td>
            </tr>
            <tr>
              <td className="question-no">8.</td>
              <td className="question-label">You intend to run</td>
              <td className="question-data">
                <input type="radio" id="singleUnit" name="runUnitType" />
                <label htmlFor="singleUnit">Single Unit</label>
              </td>
              <td className="question-data multiple-units">
                <input type="radio" id="multipleUnits" name="runUnitType" />
                <label htmlFor="multipleUnits">Multiple Units</label>
                <span className="multiple-input-label">If Multiple (How many):</span>
                <input type="text" className="small-input" />
              </td>
            </tr>
            <tr>
              <td className="question-no">9.</td>
              <td className="question-label">Would you run the New School?</td>
              <td className="data-colspan" colSpan="2"><input type="text" /></td>
            </tr>
            <tr>
              <td className="question-no">10.</td>
              <td className="question-label">Will any family member (s) work with you?</td>
              <td className="data-colspan radio-group" colSpan="2">
                <input type="radio" id="familyYes" name="familyWork" />
                <label htmlFor="familyYes">Yes</label>
                <input type="radio" id="familyNo" name="familyWork" />
                <label htmlFor="familyNo">No</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Text before Section 5 */}
      <div className="location-instruction">
        <p className="bold-text">Fill this section for one proposed New School location.</p>
        <p>Use additional copies of this section for more New School locations.</p>
      </div>

      {/* --- LOCATION OF YOUR SCHOOL SECTION 5 --- */}
      <div className="form-section location-section">
        <p className="section-label">Section 5</p>
        <div className="section-header yellow-bg">
          <h2>11. Location of your School</h2>
        </div>

        <table className="location-table">
          <thead>
            <tr>
              <th className="col-locality">Locality</th>
              <th className="col-city">City</th>
              <th className="col-reason">Brief reason for selecting this location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="data-cell"><textarea rows="3"></textarea></td>
              <td className="data-cell"><textarea rows="3"></textarea></td>
              <td className="data-cell large-cell" rowSpan="3"><textarea rows="9"></textarea></td>
            </tr>
            <tr>
              <td className="data-cell"><textarea rows="3"></textarea></td>
              <td className="data-cell"><textarea rows="3"></textarea></td>
            </tr>
            <tr>
              <td className="data-cell"><textarea rows="3"></textarea></td>
              <td className="data-cell"><textarea rows="3"></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- PROPERTY FOR THE SCHOOL SECTION 6 --- */}
      <div className="form-section property-section">
        <p className="section-label">Section 6</p>
        <div className="section-header yellow-bg">
          <h2>Property for the School</h2>
        </div>

        <table className="property-table">
          <tbody>
            <tr>
              <td className="question-no">12.</td>
              <td className="question-label">Status of Proposed Property:</td>
              <td className="question-data radio-group" colSpan="3">
                <input type="checkbox" id="owned" /><label htmlFor="owned">Owned</label>
                <input type="checkbox" id="rented" /><label htmlFor="rented">Rented</label>
                <input type="checkbox" id="toBeArranged" /><label htmlFor="toBeArranged">To be Arranged</label>
              </td>
            </tr>
            <tr>
              <td className="question-no">13.</td>
              <td className="question-label">Type of Property:</td>
              <td className="question-data radio-group" colSpan="3">
                <input type="checkbox" id="residential" /><label htmlFor="residential">Residential</label>
                <input type="checkbox" id="commercial" /><label htmlFor="commercial">Commercial</label>
                <input type="checkbox" id="amenity" /><label htmlFor="amenity">Amenity</label>
              </td>
            </tr>
            <tr>
              <td className="question-no">14.</td>
              <td className="question-label">Total Plot Area of Property (Sq. Ft/Sq.yds)</td>
              <td className="question-data" colSpan="1"><input type="text" /></td>
              <td className="question-label wide-label">Total Covered Area of Building:</td>
              <td className="question-data" colSpan="1"><input type="text" /></td>
            </tr>
            <tr>
              <td className="question-no">15.</td>
              <td className="question-label">Facilities / Utilities available?</td>
              <td className="question-data facility-cell" colSpan="4">
                <div className="facility-row">
                  <div className="facility-item">
                    <span className="facility-prefix">a.</span>
                    <input type="checkbox" id="electricity" /><label htmlFor="electricity">Electricity</label>
                  </div>
                  <div className="facility-item right-col">
                    <span className="facility-prefix">d.</span>
                    <input type="checkbox" id="parking" /><label htmlFor="parking">Parking</label>
                  </div>
                </div>
                <div className="facility-row">
                  <div className="facility-item">
                    <span className="facility-prefix">b.</span>
                    <input type="checkbox" id="telephone" /><label htmlFor="telephone">Telephone</label>
                  </div>
                  <div className="facility-item right-col">
                    <span className="facility-prefix">e.</span>
                    <input type="checkbox" id="sewerage" /><label htmlFor="sewerage">Sewerage System</label>
                  </div>
                </div>
                <div className="facility-row last-row">
                  <div className="facility-item">
                    <span className="facility-prefix">c.</span>
                    <input type="checkbox" id="internet" /><label htmlFor="internet">Internet</label>
                  </div>
                  <div className="facility-item right-col">
                    <span className="facility-prefix">f.</span>
                    <input type="checkbox" id="roadAccess" /><label htmlFor="roadAccess">Road access</label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- NEIGHBORHOOD SECTION 7 --- */}
      <div className="form-section neighborhood-section">
        <p className="section-label">Section 7</p>
        <div className="section-header yellow-bg">
          <h2>Neighborhood</h2>
        </div>

        <table className="neighborhood-table">
          <tbody>
            <tr>
              <td className="question-no">16.</td> 
              <td className="question-label-full" colSpan="3">
                Other Schools in this locality, with play group & Nursery Classes, with about 2km radius?
              </td>
            </tr>
            <tr className="header-row">
              <td className="header-prefix-col"></td>
              <td className="header-col school-name">Name of School</td>
              <td className="header-col fee-col">Fee (If know)</td>
            </tr>
            {['i.', 'ii.', 'iii.', 'iv.', 'v.'].map((prefix) => (
              <tr key={prefix}>
                <td className="prefix-col">{prefix}</td>
                <td className="data-col"><input type="text" /></td>
                <td className="data-col fee-col"><input type="text" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* --- YOUR FINANCIAL COMMITMENTS SECTION 8 --- */}
      <div className="form-section financial-section">
        <p className="section-label">Section 8</p>
        <div className="section-header yellow-bg">
          <h2>Your Financial Commitments</h2>
        </div>

        <table className="financial-table">
          <tbody>
            <tr>
              <td className="question-no">17.</td>
              <td className="question-label">Please indicate your planned investment (approx.)</td>
              <td className="data-col rs-label">Rs.</td>
              <td className="data-col investment-input" colSpan="4">
                  <input type="text" />
              </td>
            </tr>
            <tr>
              <td className="question-no">18.</td>
              <td className="question-label">How do you plan to finance?</td>
              <td className="data-col financing-options" colSpan="4">
                <input type="checkbox" id="self" /><label htmlFor="self">Self</label>
                <input type="checkbox" id="partnership" /><label htmlFor="partnership">Partnership</label>
                <input type="checkbox" id="bankLoan" /><label htmlFor="bankLoan">Bank Loan</label>
                <input type="checkbox" id="ifOthers" /><label htmlFor="ifOthers">If others</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- YOUR AVAILABILITY SECTION 9 --- */}
      <div className="form-section availability-section">
        <p className="section-label">Section 9</p>
        <div className="section-header yellow-bg">
          <h2>Your Availability</h2>
          <p className="header-instruction">Please advise your availability for discussion within the next 10 days in order of preference</p>
        </div>

        <table className="availability-table">
          <tbody>
            <tr>
              <td className="question-no">19.</td>
              <td className="header-col date-col">Date</td>
              <td className="header-col time-col">Time</td>
            </tr>
            {['i.', 'ii.', 'iii.', 'iv.', 'v.'].map((prefix) => (
              <tr key={prefix}>
                <td className="prefix-col">{prefix}</td>
                <td className="data-col date-col"><input type="date" /></td>
                <td className="data-col time-col"><input type="time" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- YOUR OPINION & REMARKS SECTION 10 --- */}
      <div className="form-section remarks-section">
        <p className="section-label">Section 10</p>
        <div className="section-header yellow-bg">
          <h2>Your Opinion & Remarks:</h2>
        </div>

        <table className="remarks-table">
          <tbody>
            {/* The remarks table is corrected here to match the visual layout with two distinct columns */}
            {['i.', 'ii.', 'iii.', 'iv.', 'v.'].map((prefix) => (
              <tr key={prefix}>
                <td className="prefix-col">{prefix}</td>
                <td className="data-col"><textarea rows="1"></textarea></td> {/* First blank column */}
                <td className="data-col"><textarea rows="1"></textarea></td> {/* Second blank column */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- CLOSING/SUBMISSION SECTION --- */}
      <div className="submission-section">
        <div className="signature-area">
          <div className="signature-line"></div>
          <p>Signature</p>
        </div>
        
        <p className="date-line">Date: <input type="text" /></p>

        <p className="send-to-label">Please send your Application to:</p>
        <div className="address-block">
          <p className="address-line bold-text">Head Office</p>
          <p className="address-line bold-text">Crescent Kids Campus</p>
          <p className="address-line">Baraf Khana Chowk Misrial Road Rwp</p>
        </div>
      </div>

    </div>
  );
};