import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const UserProfile = () => {
    const { user } = useUser();
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState({ day: "", month: "", year: "" });
    const [gender, setGender] = useState("female");
    const [phone, setPhone] = useState("0400 000 000");
    const [verificationMessage, setVerificationMessage] = useState("");


    // Function to send the verification email
    const handleSendVerificationEmail = async () => {
        if (user && user.primaryEmailAddress) {
            try {
                await user.primaryEmailAddress.resendVerification();
                setVerificationMessage("Verification email sent!");
            } catch (error) {
                setVerificationMessage("Failed to send verification email.");
                console.error("Verification email error:", error);
            }
        }
    };

    const handleSaveChanges = () => {
        // Handle save logic here
        console.log("Profile changes saved:", {
            firstName,
            lastName,
            password,
            dob,
            gender,
            phone,
        });
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
            {/* Sidebar */}
            <div className="sidebar" style={sidebarStyles}>
                <ul>
                    <li>
                        <a href="/">
                            <img src="/public/logo.png" alt="dashboard" style={logoStyles} />
                        </a>
                    </li>
                </ul>
                {/* Back to Home */}
                <div style={backToHomeStyles}>
                    <a href = "/" style={backToHomeLinkStyles}>
                        &larr; Back to home 
                    </a>
                </div>
                {/* Account Settings Section */}
                <h2 style={accountSettingsHeaderStyles}>Account settings</h2>
                <ul style={navListStyles}>
                    <li><a href="/appointments" style={navLinkStyles}><img src="/public/calendar.svg" alt="calendar" style={iconStyles} />Appointments</a></li>
                    <li><a href="/profile" style={navLinkStyles}><img src="/public/myprofile.svg" alt="profile" style={myprofileiconStyles} />My Profile</a></li>
                    <li><a href="/mypets" style={navLinkStyles}><img src="/public/mypets.png" alt="my pets" style={mypetsiconStyles} />My Pets</a></li>
                    <li><a href="/helpcenter" style={navLinkStyles}><img src="/public/helpcenter.svg" alt="help" style={helpcentericonStyles} />Help Center</a></li>
                    <li><a href="/logout" style={navLinkStyles}><img src="/public/logout.svg" alt="logout" style={iconStyles} />Logout</a></li>
                </ul>
            </div>


            {/* Main Content */}
            <div className="main-content" style={mainContentStyles}>
                <h1 style={{ fontSize: "30px", marginBottom: "50px", fontWeight: "bold" }}>Profile</h1>
                <div className="profile-form" style={profileFormStyles}>
                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={user?.primaryEmailAddress?.emailAddress || ""}
                            readOnly
                            style={{ ...inputStyles, backgroundColor: "#f7f7f7" }}
                        />
                    </div>

                    <div className="verification-box" style={verificationBoxStyles}>
                        <h2 style={{ fontSize: "15px", marginBottom: "20px" }}>Verify your email address</h2>
                        <div style={{ marginBottom: "15px" }}>We need to verify your email address before you can continue.</div>
                        <div style={{ marginBottom: "15px" }}>To verify your email address, click the button below.</div>
                        <button onClick={handleSendVerificationEmail} style={verificationButtonStyles}>
                            Send verification email
                        </button>
                        {verificationMessage && (
                            <p style={{ color: verificationMessage.includes("sent") ? "green" : "red", marginTop: "10px" }}>
                                {verificationMessage}
                            </p>
                        )}
                    </div>

                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyles}
                        />
                    </div>

                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            style={inputStyles}
                        />
                    </div>

                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            style={inputStyles}
                        />
                    </div>

                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="dob">Date of Birth</label>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input
                                type="text"
                                id="day"
                                placeholder="DD"
                                value={dob.day}
                                onChange={(e) => setDob({ ...dob, day: e.target.value })}
                                style={{ ...inputStyles, width: "50px" }}
                            />
                            <input
                                type="text"
                                id="month"
                                placeholder="MM"
                                value={dob.month}
                                onChange={(e) => setDob({ ...dob, month: e.target.value })}
                                style={{ ...inputStyles, width: "50px" }}
                            />
                            <input
                                type="text"
                                id="year"
                                placeholder="YYYY"
                                value={dob.year}
                                onChange={(e) => setDob({ ...dob, year: e.target.value })}
                                style={{ ...inputStyles, width: "80px" }}
                            />
                        </div>
                    </div>

                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="gender">Gender (optional)</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            style={inputStyles}
                        >
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="phone">Mobile Number</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={inputStyles}
                        />
                    </div>

                    <button onClick={handleSaveChanges} className="save-changes-btn" style={saveButtonStyles}>
                        Save Changes
                    </button>

                    <div className="delete-account" style={{ marginTop: "20px", textAlign: "center" }}>
                        <a href="#" style={{ color: "#dc3545", textDecoration: "none" }}>Delete account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const sidebarStyles = { width: "230px", backgroundColor: "#ffffff", padding: "20px", boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", height: "100vh" };
const backToHomeStyles = {fontSize: "16px",fontWeight: "bold",marginBottom: "40px"};
const backToHomeLinkStyles = {textDecoration: "none",color: "#007bff",fontSize: "14px",};
const accountSettingsHeaderStyles = {fontSize: "22px",color: "#333",fontWeight: "bold",marginBottom: "30px"};

const logoStyles = { width: "130px", height: "130px", marginBottom: "50px", marginLeft: "30px" };const navListStyles = { listStyle: "none", padding: "0" };
const navLinkStyles = { textDecoration: "none", color: "#333", fontSize: "18px", fontweight: "bold", display: "flex", alignItems: "center", marginBottom: "40px"};
const iconStyles = { width: "23px", height: "30px", marginRight: "5px" };
const myprofileiconStyles = {width: "25px", height: "30px", marginRight: "5px" ,marginLeft: "-5px"};
const mypetsiconStyles = {width: "40px", height: "27px", marginRight: "5px" ,marginLeft: "-5px"};
const helpcentericonStyles = {width: "35px", height: "35px", marginRight: "5px",marginLeft: "-7px"};

const mainContentStyles = { flex: 1, padding: "40px" };

const profileFormStyles = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
};

const formGroupStyles = { marginBottom: "20px" };

const inputStyles = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
};

const verificationBoxStyles = {
    backgroundColor: "#f7f7f7",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "20px",
};

const verificationButtonStyles = {
    backgroundColor: "rgb(159,209,119)",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

const saveButtonStyles = {
    backgroundColor: "rgb(159,209,119)",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
};

export default UserProfile;