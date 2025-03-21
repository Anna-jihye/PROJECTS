import React, { useState } from "react";

const Appointments = () => {
    const [activeTab, setActiveTab] = useState("current");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
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
                <h1 style={{ fontSize: "30px", marginBottom: "50px", fontWeight: "bold" }}>Appointments</h1>

                {/* Tab Section */}
                <div className="tab-section" style={tabSectionStyles}>
                    <button
                        style={activeTab === "current" ? activeTabStyles : tabButtonStyles}
                        onClick={() => handleTabClick("current")}
                    >
                        Current
                    </button>
                    <button
                        style={activeTab === "history" ? activeTabStyles : tabButtonStyles}
                        onClick={() => handleTabClick("history")}
                    >
                        History
                    </button>
                </div>

                {/* Appointment Box */}
                <div className="appointment-box" style={appointmentBoxStyles}>
                    {activeTab === "current" ? (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Live Appointment Schedule</h3>
                            <p>
                                Check your upcoming appointments on Calendly.
                            </p>
                            <a href="https://calendly.com/app/scheduled_events/user/me" target="_blank" rel="noopener noreferrer">
                                <button style={bookButtonStyles}>View My Scheduled Events on Calendly</button>
                            </a>
                        </div>
                    ) : (
                        <div>
                            <img src="/vetoffice.svg" alt="Appointment" style={appointmentImageStyles} />
                            <p>You have no past appointments</p>
                            <a onClick={() => window.open('https://calendly.com/ojihye171/30min', '_blank')} target="_blank" rel="noopener noreferrer">
                                <button style={bookButtonStyles}>Book a new consult</button>
                            </a>
                        </div>
                    )}
                </div>

                {/* Help Section */}
                <div className="help-section" style={helpSectionStyles}>
                    <a href="https://help.calendly.com/hc/en-us">Can't see an appointment? Here's why</a>
                </div>
            </div>
        </div>
    );
};

// Inline styles for the component
const sidebarStyles = { width: "230px", backgroundColor: "#ffffff", padding: "20px", boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", height: "100vh" };
const backToHomeStyles = { fontSize: "16px", fontWeight: "bold", marginBottom: "40px" };
const backToHomeLinkStyles = { textDecoration: "none", color: "#007bff", fontSize: "14px" };
const accountSettingsHeaderStyles = { fontSize: "22px", color: "#333", fontWeight: "bold", marginBottom: "30px" };

const logoStyles = { width: "130px", height: "130px", marginBottom: "50px", marginLeft: "30px" };
const navListStyles = { listStyle: "none", padding: "0" };
const navLinkStyles = { textDecoration: "none", color: "#333", fontSize: "18px", display: "flex", alignItems: "center", marginBottom: "40px" };
const iconStyles = { width: "23px", height: "30px", marginRight: "5px" };
const myprofileiconStyles = { width: "25px", height: "30px", marginRight: "5px", marginLeft: "-5px" };
const mypetsiconStyles = { width: "40px", height: "27px", marginRight: "5px", marginLeft: "-5px" };
const helpcentericonStyles = { width: "35px", height: "35px", marginRight: "5px", marginLeft: "-7px" };

const mainContentStyles = { flex: 1, padding: "40px" };
const tabSectionStyles = { display: "flex", borderBottom: "2px solid #e0e0e0", marginBottom: "20px" };
const tabButtonStyles = { padding: "10px 20px", background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#555" };
const activeTabStyles = { ...tabButtonStyles, borderBottom: "2px solid rgb(159,209,119)", color: "rgb(159,209,119)" };

const appointmentBoxStyles = { textAlign: "center", padding: "40px", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", justifyContent: "center" };
const appointmentImageStyles = { width: "100px", marginBottom: "20px", margin: "0 auto" };
const bookButtonStyles = { padding: "10px 20px", backgroundColor: "rgb(159,209,119)", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" };

const iframeStyles = { width: "100%", height: "500px", border: "none", borderRadius: "8px" };

const helpSectionStyles = { marginTop: "20px", textAlign: "center", fontSize: "14px" };

export default Appointments;
