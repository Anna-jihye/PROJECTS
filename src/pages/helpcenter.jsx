import React, { useState } from "react";

const HelpCenter = () => {
    const [message, setMessage] = useState("");

    // Function to set the message based on help option selection
    const showContactMessage = (type) => {
        let messageText = "";

        if (type === "technical") {
            messageText = (
                <span>
                    For technical booking issues, please visit the{" "}
                    <a
                        href="https://help.calendly.com/hc/en-us"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#007bff" }}
                    >
                        Calendly Help Center
                    </a>.
                </span>
            );
        } else if (type === "other") {
            messageText = "For other issues, please contact us at smartvet@gmail.com.";
        }

        setMessage(messageText);
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
            {/* Sidebar */}
            <div className="sidebar" style={sidebarStyles}>
                <ul>
                    <li>
                        <a href="/">
                            <img src="/logo.png" alt="dashboard" style={logoStyles} />
                        </a>
                    </li>
                </ul>
                <div style={backToHomeStyles}>
                    <a href="/" style={backToHomeLinkStyles}>
                        &larr; Back to home
                    </a>
                </div>
                <h2 style={accountSettingsHeaderStyles}>Account settings</h2>
                <ul style={navListStyles}>
                    <li><a href="/mypets" style={navLinkStyles}><img src="/mypets.png" alt="my pets" style={mypetsiconStyles} />My Pets</a></li>
                    <li><a href="/appointments" style={navLinkStyles}><img src="/calendar.svg" alt="calendar" style={iconStyles} />Appointments</a></li>
                    {/* <li><a href="/profile" style={navLinkStyles}><img src="/myprofile.svg" alt="profile" style={myprofileiconStyles} />My Profile</a></li> */}
                    <li><a href="/helpcenter" style={navLinkStyles}><img src="/helpcenter.svg" alt="help" style={helpcentericonStyles} />Help Center</a></li>
                    {/* <li><a href="/logout" style={navLinkStyles}><img src="/logout.svg" alt="logout" style={iconStyles} />Logout</a></li> */}
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content" style={mainContentStyles}>
                <h1 style={{ fontSize: "30px", marginBottom: "50px", fontWeight: "bold" }}>Help Center</h1>

                <div className="help-center" style={helpCenterStyles}>
                    <h2 style={helpCenterHeaderStyles}>Hello, how can we help?</h2>
                    <div className="help-options" style={helpOptionsStyles}>
                        <ul style={helpOptionsListStyles}>
                            <li onClick={() => showContactMessage("technical")} style={helpOptionItemStyles}>
                                I have a technical booking issue
                            </li>
                            <li onClick={() => showContactMessage("other")} style={helpOptionItemStyles}>
                                Other issues
                            </li>
                        </ul>
                    </div>

                    {/* Contact Message */}
                    {message && (
                        <div className="contact-message" style={contactMessageStyles}>
                            <p>{message}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const sidebarStyles = { width: "230px", backgroundColor: "#ffffff", padding: "20px", boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", height: "100vh" };
const backToHomeStyles = { fontSize: "16px", fontWeight: "bold", marginBottom: "40px" };
const backToHomeLinkStyles = { textDecoration: "none", color: "#007bff", fontSize: "14px", };
const accountSettingsHeaderStyles = { fontSize: "22px", color: "#333", fontWeight: "bold", marginBottom: "30px" };

const logoStyles = { width: "130px", height: "130px", marginBottom: "50px", marginLeft: "30px" }; const navListStyles = { listStyle: "none", padding: "0" };
const navLinkStyles = { textDecoration: "none", color: "#333", fontSize: "18px", fontweight: "bold", display: "flex", alignItems: "center", marginBottom: "40px" };
const iconStyles = { width: "23px", height: "30px", marginRight: "5px" };
const myprofileiconStyles = { width: "25px", height: "30px", marginRight: "5px", marginLeft: "-5px" };
const mypetsiconStyles = { width: "40px", height: "27px", marginRight: "5px", marginLeft: "-5px" };
const helpcentericonStyles = { width: "35px", height: "35px", marginRight: "5px", marginLeft: "-7px" };

const mainContentStyles = { flex: 1, padding: "40px" };

const helpCenterStyles = {
    width: "1000px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
};
const helpCenterHeaderStyles = {
    backgroundColor: "rgb(159,209,119)",
    color: "white",
    padding: "15px",
    borderRadius: "5px 5px 0 0",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "20px",
    width: "40%",
};
const helpOptionsStyles = { width: "60%" };
const helpOptionsListStyles = { listStyle: "none", padding: "0" };
const helpOptionItemStyles = {
    padding: "15px",
    border: "1px solid #ddd",
    borderTop: "none",
    cursor: "pointer",
    fontSize: "16px",
};
const contactMessageStyles = {
    width: "35%",
    padding: "15px",
    backgroundColor: "rgb(159,209,119)",
    border: "1px solid rgb(159,209,119)",
    borderRadius: "5px",
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
};

export default HelpCenter;

