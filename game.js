window.onload = () => {

  const correct = "Good Job! Your answer was correct!"
  const wrong = "Nice Try! But your answer was incorrect!"
  const correct1 = document.getElementById("correct1")
  const correct2 = document.getElementById("correct2")
  const correct3 = document.getElementById("correct3")
  const correct4 = document.getElementById("correct4")
  const correct5 = document.getElementById("correct5")
  const correct6 = document.getElementById("correct6")
  const q1o1 = document.getElementById("q1o1")
  const q1o2 = document.getElementById("q1o2")
  const q1o3 = document.getElementById("q1o3")
  const q2o1 = document.getElementById("q2o1")
  const q2o2 = document.getElementById("q2o2")
  const q2o3 = document.getElementById("q2o3")
  const q3o1 = document.getElementById("q3o1")
  const q3o2 = document.getElementById("q3o2")
  const q3o3 = document.getElementById("q3o3")
  const q4o1 = document.getElementById("q4o1")
  const q4o2 = document.getElementById("q4o2")
  const q4o3 = document.getElementById("q4o3")
  const q5o1 = document.getElementById("q5o1")
  const q5o2 = document.getElementById("q5o2")
  const q5o3 = document.getElementById("q5o3")
  const q6o1 = document.getElementById("q6o1")
  const q6o2 = document.getElementById("q6o2")
  const q6o3 = document.getElementById("q6o3")
  const check = document.getElementById("check")

  


  q1o1.addEventListener('click', function ques1ans1() {
    correct1.innerHTML = "The Correct Answer : شكرا"
    document.getElementById('q1o1').style.background='red'
    document.getElementById("q1o1").disabled = true
    document.getElementById("q1o2").disabled = true
    document.getElementById("q1o3").disabled = true
     alert(wrong)   
  })

  q1o2.addEventListener('click', function ques1ans2() {
    correct1.innerHTML = "The Correct Answer : شكرا"
    document.getElementById('q1o2').style.background='green'
    document.getElementById("q1o1").disabled = true
    document.getElementById("q1o2").disabled = true
    document.getElementById("q1o3").disabled = true
    alert(correct)
  })

  q1o3.addEventListener('click', function ques1ans3() {
    correct1.innerHTML = "The Correct Answer : شكرا"
    document.getElementById('q1o3').style.background='red'
    document.getElementById("q1o1").disabled = true
    document.getElementById("q1o2").disabled = true
    document.getElementById("q1o3").disabled = true
    alert(wrong)
  })
//////////////////////////////////////////////////////////
  q2o1.addEventListener('click', function ques1ans1() {
      correct2.innerHTML = "The Correct Answer : العفو"
      document.getElementById('q2o1').style.background='red'
      document.getElementById("q2o1").disabled = true
      document.getElementById("q2o2").disabled = true
      document.getElementById("q2o3").disabled = true
      alert(wrong)
  })

  q2o2.addEventListener('click', function ques1ans2() {
    correct2.innerHTML = "The Correct Answer : العفو"
    document.getElementById('q2o2').style.background='red'
    document.getElementById("q2o1").disabled = true
    document.getElementById("q2o2").disabled = true
    document.getElementById("q2o3").disabled = true
    alert(wrong)
  })

  q2o3.addEventListener('click', function ques1ans3() {
    correct2.innerHTML = "The Correct Answer : العفو"
    document.getElementById('q2o3').style.background='green'
    document.getElementById("q2o1").disabled = true
    document.getElementById("q2o2").disabled = true
    document.getElementById("q2o3").disabled = true
    alert(correct)
  })

//////////////////////////////////////////////////////////
  q3o1.addEventListener('click', function ques3ans1() {
    correct3.innerHTML = "The Correct Answer : زين"
    document.getElementById('q3o1').style.background='red'
    document.getElementById("q3o1").disabled = true
    document.getElementById("q3o2").disabled = true
    document.getElementById("q3o3").disabled = true
    alert(wrong)
  })

  q3o2.addEventListener('click', function ques3ans2() {
    correct3.innerHTML = "The Correct Answer : زين"
    document.getElementById('q3o2').style.background='red'
    document.getElementById("q3o1").disabled = true
    document.getElementById("q3o2").disabled = true
    document.getElementById("q3o3").disabled = true
    alert(wrong)
  })

  q3o3.addEventListener('click', function ques3ans3() {
    correct3.innerHTML = "The Correct Answer : زين"
    document.getElementById('q3o3').style.background='green'
    document.getElementById("q3o1").disabled = true
    document.getElementById("q3o2").disabled = true
    document.getElementById("q3o3").disabled = true
    alert(correct)
  })
///////////////////////////////////////////
  q4o1.addEventListener('click', function ques4ans1() {
    correct4.innerHTML = "The Correct Answer : نعم"
    document.getElementById('q4o1').style.background='green'
    document.getElementById("q4o1").disabled = true
    document.getElementById("q4o2").disabled = true
    document.getElementById("q4o3").disabled = true
    alert(correct)
  })

  q4o2.addEventListener('click', function ques4ans2() {
    correct4.innerHTML = "The Correct Answer : نعم"
    document.getElementById('q4o2').style.background='red'
    document.getElementById("q4o1").disabled = true
    document.getElementById("q4o2").disabled = true
    document.getElementById("q4o3").disabled = true
    alert(wrong)
  })

  q4o3.addEventListener('click', function ques4ans3() {
    correct4.innerHTML = "The Correct Answer : نعم"
    document.getElementById('q4o3').style.background='red'
    document.getElementById("q4o1").disabled = true
    document.getElementById("q4o2").disabled = true
    document.getElementById("q4o3").disabled = true
    alert(wrong)
  })

///////////////////////////////////////////
  q5o1.addEventListener('click', function ques5ans1() {
    correct5.innerHTML = "The Correct Answer : مرحبا"
    document.getElementById('q5o1').style.background='red'
    document.getElementById("q5o1").disabled = true
    document.getElementById("q5o2").disabled = true
    document.getElementById("q5o3").disabled = true
    alert(wrong)
  })

  q5o2.addEventListener('click', function ques5ans2() {
    correct5.innerHTML = "The Correct Answer : مرحبا"
    document.getElementById('q5o2').style.background='red'
    document.getElementById("q5o1").disabled = true
    document.getElementById("q5o2").disabled = true
    document.getElementById("q5o3").disabled = true
    alert(wrong)
  })

  q5o3.addEventListener('click', function ques5ans3() {
    correct5.innerHTML = "The Correct Answer : مرحبا"
    document.getElementById('q5o3').style.background='green'
    document.getElementById("q5o1").disabled = true
    document.getElementById("q5o2").disabled = true
    document.getElementById("q5o3").disabled = true
    alert(correct)
  })
/////////////////////////////////
  q6o1.addEventListener('click', function ques6ans1() {
    correct6.innerHTML = "The Correct Answer : شو"
    document.getElementById('q6o1').style.background='red'
    document.getElementById("q6o1").disabled = true
    document.getElementById("q6o2").disabled = true
    document.getElementById("q6o3").disabled = true
    alert(wrong)
  })

  q6o2.addEventListener('click', function ques6ans2() {
    correct6.innerHTML = "The Correct Answer : شو"
    document.getElementById('q6o2').style.background='green'
    document.getElementById("q6o1").disabled = true
    document.getElementById("q6o2").disabled = true
    document.getElementById("q6o3").disabled = true
    alert(correct)
  })

  q6o3.addEventListener('click', function ques6ans3() {
    correct6.innerHTML = "The Correct Answer : شو"
    document.getElementById('q6o3').style.background='red'
    document.getElementById("q6o1").disabled = true
    document.getElementById("q6o2").disabled = true
    document.getElementById("q6o3").disabled = true
    alert(wrong)
  })

}