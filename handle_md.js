window.onload = function() {
  fetch('content.md')
    .then(response => response.text())
    .then(text => {
      var bd_date = new Date("07/04/2007")

      // days left calc
      var date1 = new Date();
      var date2 = new Date("06/25/2026");
      var Difference_In_Time = date2.getTime() - date1.getTime();
      var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

      // age calc
      var ageDifMs = Date.now() - bd_date;
      var ageDate = new Date(ageDifMs);
      age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
      const markdown = marked(text.replace('{age}', age).replace('{days}', Difference_In_Days));
      document.getElementById('content').innerHTML = markdown;
    });
}