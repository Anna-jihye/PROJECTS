export const eightteen_question_json = {
    "logoPosition": "right",
    firstPageIsStarted: true,
    "pages": [
        {
            elements: [{
                type: "html",
                html: "<h2>In this survey, we will ask you several questions about your pet.</br> Please complete as much as possible to make a diagnosis.</h2>"
            }]
        },
        {
            "name": "page1",
            "title": "Duration of Symptoms",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question1",
                    "title": "How long have you noticed these symptoms? Even a rough estimate ",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "a few days"
                        },
                        {
                            "value": "Item 2",
                            "text": "a couple of weeks"
                        },
                        {
                            "value": "Item 3",
                            "text": "about a month"
                        },
                        {
                            "value": "Item 4",
                            "text": "Not applicable"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page2",
            "title": "Water Intake Change",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question2",
                    "title": "Have you noticed any change in your pet's water intake? It's okay if you can't give an exact amount – just tell me if it seems more or less than usual.\"",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "More"
                        },
                        {
                            "value": "Item 2",
                            "text": "Less"
                        },
                        {
                            "value": "Item 3",
                            "text": "Usual"
                        },
                        {
                            "value": "Item 4",
                            "text": "Not applicable"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page3",
            "title": "Appetite Changes",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question3",
                    "title": "Has your pet's appetite changed? Is it eating more, less, or different foods than usual",
                    "choices": [
                        {
                            "value": "Item 1different foods than usual",
                            "text": "More"
                        },
                        {
                            "value": "Item 2",
                            "text": "Less"
                        },
                        {
                            "value": "Item 3",
                            "text": "Usual"
                        },
                        {
                            "value": "Item 4",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Different foods than usual (Describe)"
                }
            ]
        },
        {
            "name": "page4",
            "title": "Vomiting",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question4",
                    "title": "Has your pet been vomiting? If so, how often? How long has it been going on? Can you describe the vomit (e.g., watery, foamy, contains food)? ",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 3",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page5",
            "title": "Diarrhea",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question5",
                    "title": "Has your pet had diarrhea? How often? What's the consistency (e.g., watery, loose, bloody)? Any information you can provide here will be beneficial.\"",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page6",
            "title": "Lethargy",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question7",
                    "title": "Does your pet seem more tired or lethargic than usual? If so, for how long has this been noticeable? Is there a difference in how they interact with you?\"",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page7",
            "title": "Panting",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question6",
                    "title": "Has your pet been panting more than usual? If so, how frequently, how long at a time, and under what circumstances",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page8",
            "title": "Abdominal Swelling",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question8",
                    "title": "Do you notice any swelling or distension in your pet's abdomen? Is it noticeable, or subtle? Please let me know.",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Noticeable"
                        },
                        {
                            "value": "Item 3",
                            "text": "Subtle"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page9",
            "title": "Weight Change",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question9",
                    "title": "Have you noticed any recent weight gain or loss? Again, an estimate is fine.",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Gain"
                        },
                        {
                            "value": "Item 3",
                            "text": "Loss"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page10",
            "title": "Behavioural Changes",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question10",
                    "title": "Have you noticed any changes in your pet's behaviour (e.g., more clingy, withdrawn, hiding more, less playful)? Any details you can remember could be helpful.\"",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        },
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page11",
            "title": "Previous Skin Issues",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question11",
                    "title": "Has your pet ever had skin problems before (e.g., allergies, infections)? If so, what was the treatment?\"",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page12",
            "title": "Ear Infections",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question12",
                    "title": "Has your pet had ear infections in the past? How often and how were they treated?\"",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page13",
            "title": "Previous Vomiting/In-appetence Episodes",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question13",
                    "title": "Has your pet experienced vomiting or loss of appetite before? If so, when did it occur and what was the outcome?",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page14",
            "title": "Travel History",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question14",
                    "title": "Has your pet travelled recently, to other areas or states?\"",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page15",
            "title": "Current Medications",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question15",
                    "title": "Is your pet currently taking any medications? Please provide names and dosages",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page16",
            "title": "Previous Medications",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question16",
                    "title": "Has your pet taken any medications in the past? Please list any medications, dosages, and why they were prescribed",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "No"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page17",
            "title": "Vaccination History",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question17",
                    "title": "When were your pet's vaccinations last updated?",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "I don't know"
                        },
                        {
                            "value": "Item 3",
                            "text": "None"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        },
        {
            "name": "page18",
            "title": "Parasite Prevention",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question18",
                    "title": "What type of parasite preventative is your pet on? When was their last dose administered?\"",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "None"
                        },
                        {
                            "value": "Item 2",
                            "text": "Not applicable"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "Yes (describe)"
                }
            ]
        }
    ],
    "sendResultOnPageNext": true,
    "navigateToUrlOnCondition": [
        {}
    ],
    "showProgressBar": "aboveheader",
    "progressBarInheritWidthFrom": "survey",
    "questionsOnPageMode": "questionPerPage",
    "widthMode": "responsive",
    "gridLayoutEnabled": true
}