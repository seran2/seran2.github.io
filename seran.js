window.onload = () => {

  let year = 0;
  let month_num = 0;
  let date = 0;
  let day = 0;
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let d = new Date();
  year = d.getFullYear();
  month_num = d.getMonth();
  date = d.getDate();
  day = d.getDay();
  const p = document.getElementById("mydata");
  p.innerHTML = days[day] + ", " + months[month_num] + " " + date + ", " + year;
  }

  
    



