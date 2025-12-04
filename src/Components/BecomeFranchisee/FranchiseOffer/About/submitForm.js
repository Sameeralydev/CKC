

const RECIPIENT_EMAIL = "sameeraly2003@gmail.com";

/**
 * Collects data from the DOM, formats it into a structured email body,
 * and opens the user's mail client.
 */
export const handleSubmitForm = () => {
    // 1. Collect all form data dynamically
    const formFields = document.querySelectorAll('.application-container input, .application-container textarea');
    const collectedData = {};
    
    // We iterate through all fields and use their 'name' or 'id' for the key.
    formFields.forEach(field => {
        const name = field.name || field.id;
        if (name) {
            if (field.type === 'radio') {
                if (field.checked) {
                    collectedData[name] = field.value;
                }
            } else if (field.type === 'checkbox') {
                if (field.checked) {
                    if (collectedData[name]) {
                        if (Array.isArray(collectedData[name])) {
                            collectedData[name].push(field.value);
                        } else {
                            collectedData[name] = [collectedData[name], field.value];
                        }
                    } else {
                        collectedData[name] = [field.value];
                    }
                }
            } else if (field.value) {
                // For text inputs and textareas
                collectedData[name] = field.value;
            }
        }
    });

    // 2. Format the data into a professional email body
    const emailBody = formatData(collectedData);
    
    // Determine the applicant's name/CNIC for the subject line
    const applicantName = collectedData.Tahir || collectedData.name || 'Unknown Applicant';
    const emailSubject = encodeURIComponent(`Application Form Submission: ${applicantName}`);
    
    // 3. Create and trigger the mailto link
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
};

/**
 * Formats the collected data into a clean, readable text email body.
 * @param {object} data - The collected form data.
 * @returns {string} - The formatted, URL-encoded email body text.
 */
const formatData = (data) => {
    let body = "Dear RILLS Alaska Team,\n\n";
    body += "Please find below the details submitted via the Application Form. All information is organized by section.\n\n";
    body += "================================================\n";
    body += "A. APPLICATION FORM SUBMISSION DATA\n";
    body += "================================================\n\n";

    const getValue = (key) => {
        const value = data[key];
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        return value || 'N/A';
    };

    const appendSection = (title, fields) => {
        body += `--- ${title} ---\n`;
        fields.forEach(([label, key]) => {
            body += `${label}: ${getValue(key)}\n`;
        });
        body += "\n";
    };

    // --- SECTION 1: PERSONAL DATA ---
    appendSection("Section 1: Personal Data", [
        ["Name", "Tahir"],
        ["Gender", "gender"],
        ["Date of Birth", "dob"],
        ["CNIC No", "cnicNo"],
        ["Mailing Address", "mailingAddress"],
        ["Street", "Street"],
        ["Area", "Area"],
        ["City", "City"],
        ["Postal Code", "PostalCode"],
        ["Off. Tel No", "OffTelNo"],
        ["Tel No (Res)", "TelNoRes"],
        ["Fax", "Fax"],
        ["Mobile No", "MobileNo"],
        ["Email Address", "email"],
    ]);

    // --- SECTION 2: EDUCATIONAL BACKGROUND ---
    body += "--- Section 2: Educational Background ---\n";
    body += `Educational Level(s): ${getValue("education")}\n\n`;

    // --- SECTION 3: EXPERIENCE WORK / BUSINESS ---
    body += "--- Section 3: Experience Work / Business ---\n";
    body += `Total Experience: ${getValue("totalExperienceYears") || '0'} Years, ${getValue("totalExperienceMonths") || '0'} Months\n`;
    body += `Experience in Education: ${getValue("eduExperienceYears") || '0'} Years, ${getValue("eduExperienceMonths") || '0'} Months\n`;
    
    for (let i = 0; i < 3; i++) {
        if (data[`companyName${i}`]) {
             body += `\n[Job ${i+1}]\n`;
             body += `  Company: ${getValue(`companyName${i}`)}\n`;
             body += `  Designation: ${getValue(`designation${i}`)}\n`;
             body += `  Type: ${getValue(`type${i}`)}\n`;
        }
    }
    
    body += `\nCurrently Operating School?: ${getValue("operatingSchool")}\n`;
    if (data.existingSchoolName) {
        body += `  - School Name: ${getValue("existingSchoolName")}\n`;
        body += `  - Location/City: ${getValue("existingSchoolCity")}\n`;
        body += `  - Level: ${getValue("existingSchoolLevel")}\n`;
        body += `  - Medium: ${getValue("existingSchoolMedium")}\n`;
        body += `  - Type: ${getValue("existingSchoolType")}\n`;
    }
    body += "\n";

    // --- SECTION 4: OPERATION ---
    appendSection("Section 4: Operation", [
        ["Intended Action (7)", "intendedAction"],
        ["Unit Type (8)", `Multiple Units (${getValue("multipleUnitsCount")})` || "runUnitType"],
        ["Run New School (9)", "newSchoolOperation"],
        ["Family Member(s) Involvement (10)", "familyWork"],
    ]);

    // --- SECTION 5: LOCATION OF YOUR SCHOOL ---
    body += "--- Section 5: Location of your School ---\n";
    body += `Locality 1: ${getValue("locality1")}\nCity 1: ${getValue("city1")}\nReason 1: ${getValue("reason1")}\n`;
    if(data.locality2) body += `Locality 2: ${getValue("locality2")}\nCity 2: ${getValue("city2")}\n`;
    if(data.locality3) body += `Locality 3: ${getValue("locality3")}\nCity 3: ${getValue("city3")}\n`;
    body += "\n";
    
    // --- SECTION 6: PROPERTY FOR THE SCHOOL ---
    appendSection("Section 6: Property for the School", [
        ["Status of Property (12)", "propertyStatus"],
        ["Type of Property (13)", "propertyType"],
        ["Total Plot Area (14)", `${getValue("plotArea")} Sq. Ft/Sq.yds`],
        ["Total Covered Area (14)", getValue("coveredArea")],
        ["Facilities / Utilities (15)", getValue("facilities")],
    ]);
    
    // --- SECTION 7: NEIGHBORHOOD ---
    body += "--- Section 7: Neighborhood (16) ---\n";
    for (let i = 0; i < 5; i++) {
        if (data[`neighborSchoolName${i}`]) {
            body += `  - School ${i+1}: ${getValue(`neighborSchoolName${i}`)} (Fee: ${getValue(`neighborSchoolFee${i}`)})\n`;
        }
    }
    body += "\n";

    // --- SECTION 8: YOUR FINANCIAL COMMITMENTS ---
    appendSection("Section 8: Your Financial Commitments", [
        ["Planned Investment (17)", `Rs. ${getValue("plannedInvestment")}`],
        ["Financing Plan (18)", "financing"],
    ]);

    // --- SECTION 9: YOUR AVAILABILITY ---
    body += "--- Section 9: Your Availability (19) ---\n";
    for (let i = 0; i < 5; i++) {
        if (data[`availableDate${i}`] || data[`availableTime${i}`]) {
            body += `  - Preference ${i+1}: Date: ${getValue(`availableDate${i}`)} at Time: ${getValue(`availableTime${i}`)}\n`;
        }
    }
    body += "\n";

    // --- SECTION 10: YOUR OPINION & REMARKS ---
    body += "--- Section 10: Your Opinion & Remarks ---\n";
    for (let i = 0; i < 5; i++) {
        if (data[`remark1_${i}`] || data[`remark2_${i}`]) {
            body += `  - ${i+1}: ${getValue(`remark1_${i}`)} | ${getValue(`remark2_${i}`)}\n`;
        }
    }
    body += "\n";
    
    // --- CLOSING ---
    body += "------------------------------------------------\n";
    body += `Submission Date: ${getValue("submissionDate") || new Date().toLocaleDateString()}\n`;
    body += `Form submitted on: ${new Date().toLocaleString()}\n`;
    body += "------------------------------------------------\n\n";
    
    // Final step: URL encode the body content
    return encodeURIComponent(body);
};