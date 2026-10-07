import Question from "./Question.js";



class OpenQuestion extends Question{
  constructor(given: string, answer: string) {
    super(given, answer);
  }


  checkAnswer(userAnswer: string) : boolean {
    if( userAnswer.indexOf(this.answer) != -1) {
      return true;
    }
    return false;
  }
}

export default OpenQuestion;