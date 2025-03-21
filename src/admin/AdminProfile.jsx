// src/admin/AdminProfile.jsx
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const AdminProfile = () => {
    const { user } = useUser();
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [email, setEmail] = useState(user?.primaryEmailAddress?.emailAddress || "");
    const [verificationMessage, setVerificationMessage] = useState("");

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
        console.log("Admin profile changes saved:", { firstName, lastName, email });
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
            {/* Sidebar */}
            <div className="sidebar" style={sidebarStyles}>
                <ul>
                    <li><a href="/admin"><img src="/public/logo.png" alt="dashboard" style={logoStyles} /></a></li>
                </ul>
                <h2 style={accountSettingsHeaderStyles}>Admin Settings</h2>
                <ul style={navListStyles}>
                    <li><a href="/admin/appointments" style={navLinkStyles}>Appointments</a></li>
                    <li><a href="/admin/patient-profiles" style={navLinkStyles}>Patient Profiles</a></li>
                    <li><a href="/logout" style={navLinkStyles}>Logout</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content" style={mainContentStyles}>
                <h1 style={{ fontSize: "30px", marginBottom: "50px", fontWeight: "bold" }}>Admin Profile</h1>
                <div className="profile-form" style={profileFormStyles}>
                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyles} />
                    </div>

                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyles} />
                    </div>

                    <div className="form-group" style={formGroupStyles}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} readOnly style={{ ...inputStyles, backgroundColor: "#f7f7f7" }} />
                    </div>

                    <div className="verification-box" style={verificationBoxStyles}>
                        <button onClick={handleSendVerificationEmail} style={verificationButtonStyles}>Send Verification Email</button>
                        {verificationMessage && <p style={{ color: verificationMessage.includes("sent") ? "green" : "red", marginTop: "10px" }}>{verificationMessage}</p>}
                    </div>

                    <button onClick={handleSaveChanges} className="save-changes-btn" style={saveButtonStyles}>Save Changes</button>
                </div>
            </div>
        </div>
    );
};

// Use the same styles from UserProfile for consistency
export default AdminProfile;
