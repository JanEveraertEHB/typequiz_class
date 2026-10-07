
interface QuestionInterface {
  given: string;
  answer: string;
  checkAnswer(userAnswer: string) : boolean;
  displayQuestion(): void;
}

class Question implements QuestionInterface {
  given: string;
  answer: string;

  constructor(given: string, answer: string) {
    this.given = given;
    this.answer = answer;
  }
  checkAnswer(userAnswer: string) : boolean {

    const compareValue = this.cleanString(userAnswer)
    const compareTo = this.cleanString(this.answer);
    if(compareValue == compareTo) {
      return true
    }
    return false;
  }


  cleanString(inputString: string): string {
    return inputString.toLowerCase().replace(/ /g, "")
  }

  displayQuestion() {

    const textArea = document.getElementById("questionContainer") as HTMLTextAreaElement;
    textArea.value = this.given;
  }
}



export default Question;