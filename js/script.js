// Это ваши вопросы
var questions=[
{
    text: "Эстетический идеал выступает как:",
    answers: ["тенденция  развития искусства",
          "тенденция общественного развития",
          "тенденция правящих групп", "тенденция правящих групп"],
    correctAnswer: 0 // нумерация ответов с нуля!
},
{
    text: "Эстетические чувства:",
    answers: ["даются человеку от  рождения",
          "формируются в первые 3-4 года жизни",
          "наличествуют не  у всех людей, а развиваются индивидуально", "наличествуют не  у всех людей, а развиваются индивидуально"],
    correctAnswer: 1
},
{
    text: "Символ есть:",
    answers: ["образ, видоизмененный переживанием",
          "отражение личных представлений художника",
          "образ - точная копия окружающей действительности", "образ - точная копия окружающей действительности"],
    correctAnswer: 0
},
{
    text: "Эстетический идеал выступает как:",
    answers: ["тенденция  развития искусства",
          "тенденция общественного развития",
          "тенденция правящих групп", "тенденция правящих групп"],
    correctAnswer: 0 // нумерация ответов с нуля!
},
{
    text: "Эстетические чувства:",
    answers: ["даются человеку от  рождения",
          "формируются в первые 3-4 года жизни",
          "наличествуют не  у всех людей, а развиваются индивидуально", "наличествуют не  у всех людей, а развиваются индивидуально"],
    correctAnswer: 1
},
{
    text: "Символ есть:",
    answers: ["образ, видоизмененный переживанием",
          "отражение личных представлений художника",
          "образ - точная копия окружающей действительности", "образ - точная копия окружающей действительности"],
    correctAnswer: 0
}
];

var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
    var num = i+1;
    answerText=answerText+"\n    Вопрос №"+ num +"";
    if(yourAns[i]!=questions[i].correctAnswer){
        answerText=answerText+"\n    Правильный ответ: " +
        questions[i].answers[questions[i].correctAnswer] + "\n";
      }
        else{
        answerText=answerText+": Верно! \n";
        ++score;
        }
       }

   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

   alert(answerText);
   yourAns = [];
   score = 0;
   clearForm("quiz");
}
function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
}
}



for(var q=0; q<questions.length; ++q) {
    var question = questions[q];
    var idx = 1 + q;
 
    document.writeln('<li><span class="quest">' + question.text + '</span><br>');
    for(var i in question.answers) {
     document.writeln('<label><input type=radio name="q' + idx + '" value="' + i +
     '" onClick="Engine(' + q + ', this.value)"> ' + question.answers[i] + '</label><br>');
 }
     document.writeln('</li>');
 }

