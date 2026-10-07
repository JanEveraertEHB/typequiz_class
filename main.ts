
import Question from './Question'


const questionList: Question[] = [
  new Question("const index = 0", "const index:number = 0"),
  new Question("const str = \"hello world\"", "const str:string = \"hello world\""),
  new Question("const yesOrNo = true", "const yesOrNo:bool = true")
];
 
let currentQuestion: Question;


function init() {
  
  const ctaButton = document.getElementById("submitAnswer") as HTMLButtonElement;
  ctaButton.addEventListener("click", (event) => {
    console.log("clicked")
    event.preventDefault();
    checkAnswer();
  })
  selectAndDisplayNewQuestion();
}
function selectAndDisplayNewQuestion() {

  const randomIndex = Math.floor( Math.random() * questionList.length );  
  currentQuestion = questionList[randomIndex];
  currentQuestion.displayQuestion();
}

function checkAnswer() {
  const textArea = document.getElementById("questionContainer") as HTMLTextAreaElement;
  const currentValue = textArea.value;

  const correct = currentQuestion.checkAnswer(currentValue);
  if(correct){
    alert("yes")
    selectAndDisplayNewQuestion();
  }

}


init();

