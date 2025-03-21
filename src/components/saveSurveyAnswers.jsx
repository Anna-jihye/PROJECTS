import { supabase } from "@/lib/supabaseClient.js";
import { eightteen_question_json } from "@/components/json/18_q";

// 问题ID到数据库字段的映射
const columnMap = {
  question1: "symptom_duration",
  question2: "water_intake_change",
  question3: "appetite_change",
  question4: "vomiting",
  question5: "diarrhea",
  question6: "panting",
  question7: "lethargy",
  question8: "abdominal_swelling",
  question9: "weight_change",
  question10: "behavior_change",
  question11: "previous_skin_issues",
  question12: "ear_infections",
  question13: "previous_vomiting",
  question14: "travel_history",
  question15: "current_medications",
  question16: "previous_medications",
  question17: "vaccination_history",
  question18: "parasite_prevention",
};

const getTextFromValue = (questionId, value, surveyData) => {
  for (const page of eightteen_question_json.pages) {
    const question = page.elements.find(element => element.name === questionId);
    if (question && question.choices) {
      // 检查选择项中的匹配
      const choice = question.choices.find(choice => choice.value === value);
      if (choice) return choice.text;
      
      // 检查是否为 "Other" 输入并且 surveyData 存在
      const commentField = `${questionId}-Comment`;  // 使用引号包含键名
      if (value === "other" && surveyData[commentField]) {
        return surveyData[commentField]; // 返回用户自定义的 "Other" 描述
      }
    }
  }
};

// 格式化数据以适应数据库
const formatSurveyDataForDatabase = (surveyData) => {
  const formattedData = {};
  for (const [questionId, value] of Object.entries(surveyData)) {
    const columnName = columnMap[questionId];
    if (columnName) {
      formattedData[columnName] = getTextFromValue(questionId, value, surveyData);
    }
  }
  return formattedData;
};

// 保存问卷答案到数据库
export const saveSurveyAnswers = async (surveyData, pet_id) => {
  console.log("Data before inserted:", surveyData);
  const formattedData = formatSurveyDataForDatabase(surveyData);
  formattedData.pet_id = pet_id; 

  console.log("Data to be inserted:", formattedData);
  const { data, error } = await supabase.from('surveyresponses').insert([formattedData]);

  if (error) throw new Error(error.message); 
  return data;
};