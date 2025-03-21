import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import Footer from "@/components/Footer.jsx";
import ActionButtonsHomepage from "@/components/ActionButtonsHomepage.jsx";
import ImageSection from "@/components/ImageSection.jsx";

export default function Home() {
    return (
        <div className="home-page">
            <Header />
            <main className="flex flex-col min-h-screen">
                <Hero backgroundImageUrl="/bg1.jpg">
                    <div className="text-white p-6">
                        {/*Introduction in the homepage*/}
                        <h1 className="text-6xl font-extrabold uppercase tracking-wide mb-20">
                            SMART VET HOSPITAL
                        </h1>
                        {/* Subtitle */}
                        <p className="text-3xl font-bold mb-4">
                            Hospital Standard Pet Care, Now At Home
                        </p>
                        {/* Doctor's name */}
                        <p className="italic text-lg mb-10">
                            - Dr. Avril Lim
                        </p>
                        {/* Button */}
                        <button     
                            onClick={() => window.open('https://calendly.com/ojihye171/30min', '_blank')}
                            style={{ backgroundColor: 'rgb(159, 209, 119)' }}
                            className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-600">
                            Book a Chat Now
                        </button>
                    </div>
                </Hero>
                <div className="p-1 left-0 bottom-0 bg-[#FFFBE6]">
                    <ActionButtonsHomepage />
                </div>

                <ImageSection />

                <Footer />
            </main>
        </div>
    );
}
