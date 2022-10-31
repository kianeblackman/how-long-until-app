document.getElementById("date").addEventListener("change", function () {
  console.log(this.value);
});

let countDown = () => {
  let userMonth = 1;
  let userDay = 7;
  let userYear = 2024;
  //the set date that you want to count towards
  const countDate = new Date(
    `${userMonth}, ${userDay}, ${userYear} 00:00:00`
  ).getTime();

  //the current date
  const now = new Date().getTime();

  //the set date subtracted by the current date
  const gap = countDate - now;

  //putting the time into veriables
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculate the times, Math.floor pushes the date down to a wholenumber
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  //selects the html elements and replaces the innerText with the times
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

//sets the function to run every second on load
countDown(setInterval(countDown, 1000));
