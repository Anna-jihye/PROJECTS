// src/admin/Appointments.jsx
import React from "react";

const AdminsAppointments = () => {
    return (
        <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
            <div className="sidebar" style={sidebarStyles}>
                <ul>
                    <li><a href="/admin"><img src="/public/logo.png" alt="dashboard" style={logoStyles} /></a></li>
                </ul>
                <h2 style={accountSettingsHeaderStyles}>Admin Settings</h2>
                <ul style={navListStyles}>
                    <li><a href="/admin/profile" style={navLinkStyles}>Admin Profile</a></li>
                    <li><a href="/admin/patient-profiles" style={navLinkStyles}>Patient Profiles</a></li>
                    <li><a href="/logout" style={navLinkStyles}>Logout</a></li>
                </ul>
            </div>

            <div className="main-content" style={mainContentStyles}>
                <h1 style={{ fontSize: "30px", marginBottom: "50px", fontWeight: "bold" }}>Appointments</h1>
                <p>Here you can manage all user appointments.</p>
                {/* Appointment management features will be added here */}
            </div>
        </div>
    );
};

export default AdminsAppointments;
