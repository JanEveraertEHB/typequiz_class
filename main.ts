
type Question = {
  given: string;
  answer: string
} 
const questionList: Question[] = [
  {
    given: "const index = 0",
    answer: "const index:number = 0"
  },{
    given: "const str = \"hello world\"",
    answer: "const str:string = \"hello world\""
  },{
    given: "const yesOrNo = true",
    answer: "const yesOrNo:bool = true"
  }
]

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

  const textArea = document.getElementById("questionContainer") as HTMLTextAreaElement;

  const randomIndex = Math.floor( Math.random() * questionList.length );  
  currentQuestion = questionList[randomIndex];

  console.log(currentQuestion, randomIndex)
  textArea.value = currentQuestion.given;
}

function checkAnswer() {
  const textArea = document.getElementById("questionContainer") as HTMLTextAreaElement;
  const currentValue = textArea.value;

  const compareValue = cleanString(currentValue)
  const compareTo = cleanString(currentQuestion.answer);
  if(compareValue == compareTo) {
    alert("YES")

    selectAndDisplayNewQuestion();
  } else {
    alert("NO")
  }
}

function cleanString(inputString: string): string {
  return inputString.toLowerCase().replace(/ /g, "")
}

init();

