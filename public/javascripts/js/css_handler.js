//------------------------HEADER STYLE DRIVER

//Show and hide header menu

var screen_width = $('html').width();

$(window).resize(function(){
  screen_width = $('html').width();
  if(screen_width > 576){
    $('header ul').show()
  }else{
    $('header ul').hide()
  }
});

var show_menu = false;

// Hide menu when default view in responsive mode
if(screen_width <= 576) $('header ul').hide();

var display_menu = function(){
  if(!show_menu){
    $('header ul').show();
    show_menu = true;
  }else{
    $('header ul').hide();
    show_menu = false;
  }
}

$('#responsive-menu').on('click',function(){
  if(screen_width <= 576) display_menu();
});

$('header ul li a').on('click',function(){
  if(screen_width <= 576 && this.id !== 'products-launcher') display_menu();
});

$('header .main_link').on('click',function(){
  if(screen_width <= 576){
    display_menu();
    $('header ul').hide();
  }
});

var sub_menu_movil = {
  variables:{
    hidden:true
  },
  css:{
    show_hide_sub_menu:function(){
      if(sub_menu_movil.variables.hidden){
        $('.sub-menu').removeClass('hidden');
        $('.selected').removeClass('selected');
        $('#productos-menu').addClass('selected');
        sub_menu_movil.variables.hidden = false;
      }else{
        $('.sub-menu').addClass('hidden');
        $('.selected').removeClass('selected');
        sub_menu_movil.variables.hidden = true;
      }
    },
  }
}

$('#productos-menu').on('click',function(){
  sub_menu_movil.css.show_hide_sub_menu();
});

// NEW DEVELOPMENT FLOW FROM HERE

function appConstructor() {};

appConstructor();
