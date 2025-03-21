import { useCallback, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SurveyComp from "@/components/SurveyComp";
import { eightteen_question_json } from "@/components/json/18_q";
import { saveSurveyAnswers } from "@/components/saveSurveyAnswers";
import { SurveyPDF } from "survey-pdf";
import { imageToBase64 } from "@/lib/utils.js";
import logo from '@/assets/logo.png';
import { supabase } from "@/lib/supabaseClient.js";
import { InlineWidget } from "react-calendly"; // For embedding Calendly widget (npm install react-calendly)
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";

const pdfDocOptions = {
    mode: "display"
};

const savePdf = function (surveyData) {
    imageToBase64(logo).then((base64String) => {
        console.log('Base64 String:', base64String);

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
}

const sendPdfToVet = async (surveyData) => {
    try {
        const pdfBlob = await savePdf(surveyData);

        if (!pdfBlob) {
            throw new Error("Failed to create PDF");
        }

        const formData = new FormData();
        formData.append("file", pdfBlob, "survey_results.pdf");

        // Send email with EmailJS
        await emailjs.send(
            "your_service_id", // replace with your EmailJS service ID
            "your_template_id", // replace with your EmailJS template ID
            {
                to_email: "ojihye171@gmail.com", //replace with smartvet@gmail.com.
                message: "Attached are the survey results.",
            },
            "your_user_id" // replace with your EmailJS user ID
        );
        alert("PDF sent to the vet's email!");
    } catch (error) {
        console.error("Error sending PDF:", error);
        alert("Failed to send PDF to vet's email.");
    }
};

export default function Survey() {
    const { user, isSignedIn } = useUser();
    const [isSurveyComplete, setIsSurveyComplete] = useState(false);
    const [surveyData, setSurveyData] = useState(null);
    const [petList, setPetList] = useState([]);
    const [selectedPetId, setSelectedPetId] = useState(null);
    const navigate = useNavigate();
    let hasPets = true;

    useEffect(() => {
        const fetchPetList = async () => {
            if (isSignedIn && user) {
                const { data, error } = await supabase
                    .from('pets')
                    .select('pet_id, name')
                    .eq('owner_id', user.id);

                if (error) {
                    console.error("Error fetching pet list:", error);
                } else {
                    setPetList(data);
                    // if (data.length === 0) {
                    //     hasPets = false;
                    //     // navigate('/create_pet');
                    // } else {
                    //     setPetList(data);
                    // }
                }
            }
        };
        fetchPetList();
    }, [isSignedIn, user]);

    const handleSurveyComplete = useCallback(async (message, data) => {
        console.log("Survey completed:", message);
        console.log("Survey data:", data);
        setSurveyData(data);
        setIsSurveyComplete(true);

        const pet_id = selectedPetId || "0c6436f9-bba4-441c-85da-712af02dcdc2";

        // 保存问卷答案到数据库
        await saveSurveyAnswers(data, pet_id);
    }, [selectedPetId]);

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
                    {isSignedIn && petList.length === 0 ? (
                        // 没有宠物时的提示
                        <div className="text-center">
                            <h2 className="text-2xl font-bold my-8">Select a Pet</h2>
                            <Select placeholder="No pet available. Please register a pet.">
                            </Select>
                            <a href="/mypets"><Button className="my-24">Register your pet</Button></a>
                        </div>
                    ) : isSignedIn && petList.length > 0 && !selectedPetId ? (
                        // 宠物选择部分
                        <div className="text-center">
                            <h2 className="text-2xl font-bold my-8">Select a Pet</h2>
                            <Select onValueChange={(value) => setSelectedPetId(value)} placeholder="Choose a pet">
                                {petList.map(pet => (
                                    <SelectItem key={pet.pet_id} value={pet.pet_id}>
                                        {pet.name}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Button onClick={() => setSelectedPetId(selectedPetId)} className="mt-4">Start Survey</Button>
                        </div>
                    ) : !isSurveyComplete ? (
                        // 问卷组件
                        <SurveyComp
                            onSurveyComplete={handleSurveyComplete}
                            surveyJson={eightteen_question_json}
                        />
                    ) : (
                        <div className="text-center space-y-10">
                            <h2 className="text-3xl font-bold mb-15">Choose Your Next Step</h2>

                            {/* Option 1: Book a Vet Appointment */}
                            <div className="option-container ml-20 mb-8 w-full max-w-2xl p-6 bg-white shadow-md rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Option 1: Book a Vet Appointment</h3>
                                <p className="mb-3">
                                    I will now send this over to your vet's office. A vet should be in contact with you
                                    shortly. Please keep your pet comfortable and warm. Remember, you're doing a great
                                    job. Don't hesitate to contact us if you have any further questions or concerns before
                                    the vet contacts you. We're here to help.
                                </p>
                                <InlineWidget url="https://calendly.com/ojihye171/30min" styles={{ height: "500px" }} />
                            </div>

                            {/* Option 2: Book a Tele-Vet Appointment */}
                            <div className="option-container ml-20 mb-8 w-full max-w-2xl p-6 bg-white shadow-md rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Option 2: Book a Tele-Vet Appointment</h3>
                                <p className="mb-4">
                                    Book a tele-vet appointment to speak with a vet remotely. This option is available only
                                    from 5 PM to 8 PM.
                                </p>
                                <InlineWidget url="https://calendly.com/ojihye171/tele-booking-only-available-from-5-8pm" styles={{ height: "500px" }} />
                            </div>

                            {/* Option 3: Monitor Closely */}
                            <div className="option-container w-full ml-20 max-w-2xl p-6 bg-white shadow-md rounded-lg">
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
                            <div className="mt-10 mb-10">
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
