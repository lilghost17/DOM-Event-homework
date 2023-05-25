
// 1 დავალება 

function TestsFunction() {
    let T = document.getElementById("TestsDiv"),
    displayValue = "";
    if (T.style.display == "")
    displayValue = "none";
    T.style.display = displayValue;
}

// 2 დავალება

const divel1 = document.createElement("div");
divel1.id = "card";
document.body.appendChild(divel1);
const h2el = document.createElement("h2");
h2el.textContent = 'Gendalf';
card.appendChild(h2el);
const link = document.createElement('a');
link.setAttribute("href", "https://www.wikipedia.org/");
card.appendChild(link);

// 3 დავალება 

let ul = document.getElementById('ul')
let nextButton = document.getElementById('btnNext');
let quizbox = document.getElementById('questionBox')
let opt1 = document.getElementById('opt1')
let opt2 = document.getElementById('opt2')
let opt3 = document.getElementById('opt3')
let opt4 = document.getElementById('opt4')


let app ={ 
    questions:[
        {
            q:'Who is geno shavdia?',
            options: ['Boxer', 'Policeman', 'Dancer', 'Footballer'],
            answer:2
        },
        {
            q:'Who has iron fists?',
            options: ['Qatamadze', 'Tabagari', 'Zeragia', 'Shavdia'],
            answer:1
        }            
    ],
    index:0,
    load:function(){
        if(this.index <= this.questions.length - 1) {
            quizbox.innerHTML=this.index + 1 + ". " + this.questions[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        }
        else {
            quizbox.innerHTML="Quiz Completed!";
            ul.style.display="none";
            nextButton.style.display="none";
        }
    },
    next: function(){
        this.index++;
        this.load();
    },
    check: function(ele){
        let id=ele.id.split('');
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="correct";
            this.scoreCard();
        }
        else{
            ele.className="wrong";
        }
    },
    preventClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length + "/" + this.score;
    }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}
