home()

function home(){
    scoreEl = document.getElementById('score')
    scoreEl.innerHTML = ''
    var main = document.getElementById('main')
    main.replaceChildren()
    document.getElementById('message').innerHTML= ''
    document.getElementById('time').innerHTML = ''
    var h1 = document.createElement('h1')
    h1.textContent = 'HTML Quiz Challenge'
    h1.classList = 'text-primary'
    main.appendChild(h1)

    var h5 = document.createElement('h5')
    h5.innerHTML = 'Try to answer the following questions'
    main.appendChild(h5)

    var btn = document.createElement('button')
    btn.classList = 'btn btn-primary mt-4'
    btn.innerHTML = 'start'
    main.appendChild(btn)

    btn.addEventListener('click',startquiz)
}

function message(){
    seconds = seconds - 10
    timeEl.innerHTML = 'time: ' + seconds
    document.getElementById('message').innerHTML= 'wrong'
}

function increaseScore(){
    score = score + 10
    scoreEl.innerHTML = 'Score: ' + score
}

function displayQuestions(number,question,op1,op2,op3,op4){
    main.replaceChildren()
   
    var heading1 = document.createElement('h4')
    heading1.textContent = question
    heading1.classList = 'text-info mb-4'
    var btn1 = document.createElement('button')
    btn1.textContent = op1
    btn1.classList = 'btn btn-outline-dark ml-4 mt-3'
    var btn2 = document.createElement('button')
    btn2.textContent = op2
    btn2.classList = 'btn btn-outline-dark ml-4 mt-3'
    var btn3 = document.createElement('button')
    btn3.textContent = op3
    btn3.classList = 'btn btn-outline-dark ml-4 mt-3'
    var btn4 = document.createElement('button')
    btn4.textContent = op4
    btn4.classList = 'btn btn-outline-dark ml-4 mt-3'

    main.append(heading1,btn1,btn2,btn3,btn4)
    document.getElementById('message').innerHTML = ""
    if(number == 1){
        btn2.addEventListener('click',message)
        btn1.addEventListener('click',function(){
            increaseScore()
            displayQuestions(2,'Which HTML element is used for creating a hyperlink?','<link>','<a>',' <hyper>','<url>')})
        btn3.addEventListener('click',message)
        btn4.addEventListener('click',message)
    }
    if(number == 2){
        btn1.addEventListener('click',message)
        btn2.addEventListener('click',function(){
            increaseScore()
            displayQuestions(3,'Which HTML tag is used to define an ordered list?','<ol>',' <ul>','<dl>',' <list>')})
        btn3.addEventListener('click',message)
        btn4.addEventListener('click',message)
    }
    if(number == 3){
        btn2.addEventListener('click',message)
        btn1.addEventListener('click',function(){
            increaseScore()
            displayQuestions(4,'Which tag is used to insert a line break in HTML?','<lb>','<break>','<newline>',' <br>')})
        btn3.addEventListener('click',message)
        btn4.addEventListener('click',message)
    }
    if(number == 4){
        btn1.addEventListener('click',message)
        btn4.addEventListener('click',function(){
            increaseScore()
            displayQuestions(5,'What is the purpose of the HTML <head> element?','To define the main content of the page.',' To display the header of the page.','To define the structure of the page','To contain meta-information about the document')})
        btn3.addEventListener('click',message)
        btn2.addEventListener('click',message)
    }
    if(number == 5){
        btn1.addEventListener('click',message)
        btn2.addEventListener('click',function(){
            increaseScore()
            displayQuestions(6,'Which attribute is used to provide alternative text for images in HTML?','image-alt','description','alt','title')})
        btn3.addEventListener('click',message)
        btn4.addEventListener('click',message)
    }
    if(number == 6){
        btn1.addEventListener('click',message)
        btn3.addEventListener('click',function(){
            increaseScore()
            displayQuestions(7,'Which HTML element is used to create a table?','<table>','<tab>',' <tbl>','<tr>')})
        btn2.addEventListener('click',message)
        btn4.addEventListener('click',message)
    }
    if(number == 7){
        btn2.addEventListener('click',message)
        btn1.addEventListener('click',function(){
            increaseScore()
            displayQuestions(8,'What does the HTML element <em> represent?',' Emphasized text','Important text','Heading text','Italicized text')})
        btn3.addEventListener('click',message)
        btn4.addEventListener('click',message)
    }
    if(number == 8){
        btn2.addEventListener('click',message)
        btn1.addEventListener('click',function(){
            increaseScore()
            displayQuestions(9,'Which HTML attribute is used to define inline styles?','<class>',' <css>','<inline>','<style>')})
        btn3.addEventListener('click',message)
        btn4.addEventListener('click',message)
    }
    if(number == 9){
        btn1.addEventListener('click',message)
        btn4.addEventListener('click',function(){
            increaseScore()
            displayQuestions(10,'Which HTML element is used to define the structure of an HTML document?','<content>','<html>','<structure>','<document>')})
        btn3.addEventListener('click',message)
        btn2.addEventListener('click',message)
    }
    if(number == 10){
        btn1.addEventListener('click',message)
        btn2.addEventListener('click',function(){
            increaseScore()
            clearInterval(timeInterval)
            seconds = 0
            timeEl.innerHTML = 'time: ' + seconds
            main.replaceChildren()
            document.getElementById('message').innerHTML = 'Quiz is over'
            btn5 = document.createElement('button')
            btn5.innerHTML = 'Try again'
            btn5.classList = 'btn btn-dark'
            main.appendChild(btn5)
            btn5.addEventListener('click',home)
           
        })
        btn3.addEventListener('click',message)
        btn4.addEventListener('click',message)
    }
}

function startquiz(){
    seconds = 60
    score = 0
    timeEl = document.getElementById('time')
    scoreEl = document.getElementById('score')
    scoreEl.innerHTML = 'Score: ' + score
    timeInterval = setInterval(function(){
        seconds--
        timeEl.innerHTML = 'Time: '+ seconds
        if(seconds == 0 || seconds < 0){
            clearInterval(timeInterval)
            main.replaceChildren()
            document.getElementById('message').innerHTML= 'Quiz is over'
            btn5 = document.createElement('button')
            btn5.innerHTML = 'Try again'
            btn5.classList = 'btn btn-dark'
            main.appendChild(btn5)
            btn5.addEventListener('click',home)
        }
    },1000)




    displayQuestions(1,'What does HTML stand for?','Hyper Text Markup Language','High Technology Modern Language','Hyperlink and Text Markup Language','Home Tool Markup Language')
}



