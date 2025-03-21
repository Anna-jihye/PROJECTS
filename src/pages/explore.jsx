import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import React from 'react';

const divstyle = "flex flex-col items-center justify-center mx-auto w-3/4 h-auto text-center";

const Explore = () => {
  return (
    <div id="site-container">
      <Header />

      <main className="pages-container" style={{ fontFamily: 'Times New Roman, serif' }}>
        <section className="intro-section py-12 bg-[#B8E892]">
          <div className={"content-wrapper py-12 bg-[#FFFBE6] " + divstyle} >
            <h1 className="mb-12 mx-12 w-1/2" style={{ fontSize: '48px' }}>Integrated Patient Care</h1>
            <p className="mb-12 mx-24 w-1/2" style={{ fontSize: '18px' }}>
              Our integrated care approach is designed to overcome care fragmentation, which can have a negative impact on both patient experiences and outcomes.
              This organised service is best suited for pets with medically complex or long-term care needs.
            </p>
          </div>
        </section>

        <section className="bg-[#B8E892]">
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
            <div className="py-4 bg-[#FFFBE6] flex flex-col items-center justify-center h-auto text-center">
              <h1 className="mb-8 mx-12 w-3/4" style={{ fontSize: '48px' }}>Wearable Technology</h1>
              <p className="mt-12 mx-24 w-1/2" style={{ fontSize: '18px' }}>
                Wearable technology is a fundamental tool in our services, enabling us to gather and track real-time biometric data. This information includes blood pressure,
                blood sugar, heart rate, respiratory rate, physical activity, sleep, and other essential health metrics. By collecting this data, we can detect any abnormalities
                early on. Rather than reacting when a crisis has already occurred, a proactive approach is far more effective in preventing a health crisis altogether.
              </p>
            </div>
            <div className="bg-[#E6FFE6]"><img className="w-full h-full" src="/bg2.jpg" alt="Dog" /></div>
            <div className="bg-[#E6FFE6]"><img className="w-full h-full" src="/bg4.jpg" alt="Dog" /></div>
            <div className="py-4 bg-[#FFFBE6] flex flex-col items-center justify-center h-auto text-center">
              <h1 className="mb-8 mx-12 w-3/4" style={{ fontSize: '48px' }}>Remote Patient Monitoring</h1>
              <p className="mt-12 mx-24 w-1/2" style={{ fontSize: '18px' }}>
                This innovative system allows us to monitor your pet's health remotely, with the aid of live video and audio features, mobile devices,
                and other smart digital tools. This method is especially beneficial for treating stable medical cases, eliminating the need for face-to-face consultations
                and ensuring a comfortable and stress-free experience for your furry companion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#B8E892]">
          <div className="py-4 flex flex-col items-center justify-center h-auto text-center">
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

export default Explore;
