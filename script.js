// JavaScript to add interactivity to the button
// document.getElementById('alertBtn').addEventListener('click', function() {
//     alert('Hello! You have clicked the button. Congratulations on learning JavaScript interactivity!');
// });

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('alertBtn');
    if(btn){
      btn.addEventListener('click', function() {
        alert('Hello! You have clicked the button. Congratulations on learning JavaScript interactivity!');
      });
    } else{
      console.error('Button with ID alertBtn not found.');
    }
});