import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeQuestion() {
        if (questionType == "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={changeQuestion}>Change Type</Button>
            <span>
                {questionType === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </span>
        </div>
    );
}
