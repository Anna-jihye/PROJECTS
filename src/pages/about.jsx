import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import React from 'react';

const divstyle = "flex flex-col items-center justify-center mx-auto w-3/4 h-auto text-center";
const mb4half = "mb-4 mx-12 w-1/2";
const mb8half = "mb-8 mx-12 w-1/2";
const mb12half = "mb-12 mx-12 w-1/2";

const About = () => {
    return (
        <div id="site-container">
            <Header />

            <main className="pages-container" style={{ fontFamily: 'Times New Roman, serif' }}>
                <section className="intro-section py-24 bg-[#B8E892]">
                    <div className={"content-wrapper py-12 bg-[#FFFBE6] " + divstyle} >
                        <h1 className={mb12half} style={{ fontSize: '48px' }}>Where Care Meets Technology</h1>
                        <p className={mb12half} style={{ fontSize: '18px' }}>
                            With the continuous digitisation of veterinary healthcare, a significant portion of the care that is currently provided
                            in veterinary hospitals will be transitioned to the home. Smart Vet Hospital aims to provide hospital-level care while
                            pets stay comfortably at home. Compelling evidence in human health has demonstrated that at-home treatment, when carefully
                            supervised, can be a safer, more affordable, and more successful alternative to traditional hospital care.
                        </p>
                        <a href="/explore" className="button px-4 py-2" style={{ color: '#003200', border: '1px solid #003200' }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#FFFBE6';
                                e.target.style.color = '#003200';
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#003200';
                                e.target.style.color = '#FFFFFF';
                            }}
                        >Explore</a>
                    </div>
                </section>

                {/* <section className="healing-section">
          <div className="content-wrapper dark-background">
            <h2>Healing with Heart and Innovation</h2>
            <p>Choose Smart Vet Hospital for your pet's medical needs and discover the perfect combination of warmth and wisdom.</p>
            <a href="https://www.smartvethospital.com.au/pet-health-profile-ns" className="button">Experience</a>
          </div>
        </section> */}

                <section className="meet-experts-section py-24 bg-[#FFFBE6]">
                    <div className={"content-wrapper py-12 bg-[#B8E892] " + divstyle}>
                        <h1 className={mb4half} style={{ fontSize: '48px' }}>Meet The Experts</h1>
                        <h2 className={mb12half} style={{ fontSize: '24px' }}>The Power of Compassionate Science</h2>
                        <img className="mb-4 mx-12 w-3/4" src="/bg3.jpg" alt="Dr Avril Lim" />
                        <h3 className={mb4half} style={{ fontSize: '36px' }}>Dr Avril Lim</h3>
                        <h4 className={mb8half} style={{ fontSize: '24px' }}>Founder of Smart Vet Hospital</h4>
                        <p className={mb8half} style={{ fontSize: '18px' }}>
                            What sets me apart from other veterinary professionals is my diverse medical knowledge and extensive experience in dogs and cats.
                            As a Veterinary Medicine Specialist, I am trained to provide high-quality care and treatment for pets with complex and challenging medical conditions.</p>
                        <p className={mb8half} style={{ fontSize: '18px' }}>
                            I have over 3 years of experience in this role, and I hold the prestigious Diplomate in Veterinary Internal Medicine: Small Animal (DACVIM) certification
                            from the American College of Veterinary Internal Medicine (ACVIM). While I enjoy all aspects of internal medicine, I have particular interest in
                            endocrinology, gastroenterology, and immunology. </p>
                        <p className={mb8half} style={{ fontSize: '18px' }}>
                            My greatest passion is to help my patients attain well-being through the art and science of veterinary medicine. I created Smart Vet Hospital to save
                            the soul of veterinary medicine. Having worked in various settings including privately-owned clinics, universities and corporate veterinary practices,
                            I have gained a full understanding of the level of care and attention that you and your furry friends can expect from these establishments.</p>
                        <p className={mb12half} style={{ fontSize: '18px' }}>
                            Additionally, I am dedicated to exploring the latest technological advancements to enhance patient care, alleviate clinician burnout,
                            and improve the overall mental health of veterinarians in remote and rural areas. After all, these hardworking individuals are the foundation
                            of the Australian animal and livestock industry.</p>
                        <a onClick={() => window.open('https://calendly.com/ojihye171/30min', '_blank')}>
                            <button className="button px-4 py-2 bg-[#B8E892]" style={{ color: '#006400', border: '1px solid #006400' }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '#B8E892';
                                    e.target.style.color = '#006400';
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#006400';
                                    e.target.style.color = '#FFFFFF';
                                }}>Book a Chat Now</button>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
