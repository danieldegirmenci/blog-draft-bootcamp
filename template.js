function darkMode() {
    $('body').toggleClass('bg-dark bg-light');
    $('.navbar').toggleClass('navbar-dark navbar-light');
    $('.navbar').toggleClass('bg-dark bg-light');
    $('p').toggleClass('text-dark text-light');
    $('.darkToggle').toggleClass('btn-dark btn-light')
    $('.btn').toggleClass('btn-outline-dark btn-outline-light');
    $('h4').toggleClass('text-dark text-light');

    $('h2').toggleClass('myHeading myHeading-light');
    $('.card-title').toggleClass('myHeading myHeading-light')
    // $('.line-clamp4').toggleClass('text-dark text-light');
    // $('h4').toggleClass('text-dark text-light');
    $(".card").toggleClass('bg-dark bg-light')
    $("#footer_id").toggleClass('bg-light bg-dark');
    $("#footer_id").toggleClass('text-light text-dark');



    

  }
  
  let newDate=()=>{
    const date=new Date().getFullYear();
    $("#date_id").html(date);
}
newDate();

$(document).ready(function() {
  $('body').scrollspy({ target: '#navbar' });
});