import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SurveyComp from "@/components/SurveyComp";
import { eightteen_question_json } from "@/components/json/18_q";
import { SurveyPDF } from "survey-pdf";
import { imageToBase64 } from "@/lib/utils.js";
import { InlineWidget } from "react-calendly";
import logo from '@/assets/logo.png';

const pdfDocOptions = {
    mode: "display"
};

const savePdf = function (surveyData) {
    imageToBase64(logo).then((base64String) => {
        const withLogo = Object.assign({}, eightteen_question_json, {
            logo: base64String,
            logoPosition: 'right',
            logoHeight: '78px',
            logoWidth: '80px',
            logoFit: 'cover'
        });
        const surveyPdf = new SurveyPDF(withLogo, pdfDocOptions);
        surveyPdf.data = surveyData;
        surveyPdf.save();
    }).catch(() => {
        console.error('Error converting image to Base64');
    });
};

export default function Survey() {
    const [isSurveyComplete, setIsSurveyComplete] = useState(false);
    const [surveyData, setSurveyData] = useState(null);

    const handleSurveyComplete = useCallback((message, data) => {
        console.log("Survey completed:", message);
        console.log("Survey data:", data);
        setSurveyData(data);
        setIsSurveyComplete(true);
    }, []);

    const handleDownloadPdf = useCallback(() => {
        if (surveyData) {
            savePdf(surveyData);
        } else {
            console.error("No survey data available to generate PDF");
        }
    }, [surveyData]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex justify-center items-center p-4">
                <div className="w-full max-w-4xl">
                    {!isSurveyComplete ? (
                        <SurveyComp
                            onSurveyComplete={handleSurveyComplete}
                            surveyJson={eightteen_question_json}
                        />
                    ) : (
                        <div className="text-center space-y-10">
                            <h2 className="text-2xl font-bold mb-8">Choose Your Next Step</h2>

                            {/* Option 1: Book a Vet Appointment */}
                            <div className="option-container mb-8 w-full max-w-2xl p-6 bg-white shadow-md rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Option 1: Book a Vet Appointment</h3>
                                <p className="mb-4">
                                    I will now send this over to your vet's office. A vet should be in contact with you
                                    shortly. Please keep your pet comfortable and warm. Remember, you're doing a great
                                    job. Don't hesitate to contact us if you have any further questions or concerns before
                                    the vet contacts you. We're here to help.
                                </p>
                                <InlineWidget url="https://calendly.com/ojihye171/30min" styles={{ height: "500px" }} />
                            </div>

                            {/* Option 2: Book a Tele-Vet Appointment */}
                            <div className="option-container mb-8 w-full max-w-2xl p-6 bg-white shadow-md rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Option 2: Book a Tele-Vet Appointment</h3>
                                <p className="mb-4">
                                    Book a tele-vet appointment to speak with a vet remotely. This option is available only
                                    from 5 PM to 8 PM.
                                </p>
                                <InlineWidget url="https://calendly.com/ojihye171/tele-booking-only-available-from-5-8pm" styles={{ height: "500px" }} />
                            </div>

                            {/* Option 3: Monitor Closely */}
                            <div className="option-container w-full max-w-2xl p-6 bg-white shadow-md rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Option 3: Monitor Closely</h3>
                                <p className="mb-4">
                                    Monitor your pet closely. You can view further instructions on how to monitor your
                                    pet's condition.
                                </p>
                                <a href="/monitor-closely" className="text-blue-600 hover:underline">
                                    Go to Monitor Closely Instructions Page
                                </a>
                            </div>

                            {/* PDF Download Button */}
                            <div className="mt-10">
                                <Button onClick={handleDownloadPdf}>Download Survey Results PDF</Button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

