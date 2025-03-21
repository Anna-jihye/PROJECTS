import {useCallback} from "react";
import {Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";

function SurveyComponent({onSurveyComplete, surveyJson}) {
    const survey = new Model(surveyJson);  // 使用父组件传递的表单问题数据
    survey.applyTheme(SurveyTheme.FlatLight);

    // 处理表单完成时的回调
    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        console.log(results);
    }, []);

    survey.onComplete.add((sender, options) => {
        options.showSaveInProgress("Saving results...");
        alertResults(sender);
        setTimeout(() => {
            options.showSaveSuccess("The results have been saved successfully!");

            // 调用父组件传递的 onSurveyComplete 回调，传递表单完成的消息和数据
            if (onSurveyComplete) {
                onSurveyComplete("Survey completed successfully", sender.data);
            }
        }, 1e3);
        // options.showSaveError();
    });

    return (<Survey model={survey}/>);
}

export default SurveyComponent;