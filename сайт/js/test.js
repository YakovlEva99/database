<p><span style='font-size:12.0pt'><a href="#общий файл с содержанием#">Оглавление</a></span>
<span style='font-size:12.0pt;margin-left: 65%'>
<a href="#Имя предыдущего файла#">На предыдущую</a></span></p>
<script type="text/javascript">
// Заголовок страницы (h1)
var title = 'Срез по первому блоку';
// Подзаголовок (h2)
var subtitle = "Этот тест позволяет оценить Ваши знания";
// Это ваши вопросы
var questions=[
{
	text: "Эстетический идеал выступает как:",
	answers: ["тенденция  развития искусства",
		  "тенденция общественного развития",
		  "тенденция правящих групп"],
	correctAnswer: 0 // нумерация ответов с нуля!
},
{
	text: "Эстетические чувства:",
	answers: ["даются человеку от  рождения",
		  "формируются в первые 3-4 года жизни",
		  "наличествуют не  у всех людей, а развиваются индивидуально"],
	correctAnswer: 1
},
{
	text: "Символ есть:",
	answers: ["образ, видоизмененный переживанием",
		  "отражение личных представлений художника",
		  "образ - точная копия окружающей действительности"],
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
</script>

<style>
span.quest {font-weight: bold;}
</style>

<h1><script>document.write(title)</script></h1>
<h2><script>document.write(subtitle)</script></h2>

<form name="quiz">
<ol>
<script>
for(var q=0; q<questions.length; ++q) {
   var question = questions[q];
   var idx = 1 + q;

   document.writeln('<li><span class="quest">' + question.text + '</span><br/>');
   for(var i in question.answers) {
	document.writeln('<input type=radio name="q' + idx + '" value="' + i +
	'" onClick="Engine(' + q + ', this.value)">' + question.answers[i] + '<br/>');
}
}
</script>
</ol>
<input type="button" onClick="Score()" value="Проверить результаты" />

</form>
<p><span style='font-size:12.0pt'><a href="#Имя предыдущего файла#">На следующую</a></span></p>