window.addEventListener('scroll', function(e) {
    document.getElementsByTagName('meta')["theme-color"].content = "#003140";0
  })  
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed:50,
    typeSpeed:60,
    loop:true,
  });
  var myWave = $('#landingsvg').wavify({
    height: 50,
    bones: 3,
    amplitude: 40,
    color: '#003140',
    speed: .30,
  });
  var myWave = $('#projectsvg').wavify({
    height: 50,
    bones: 4,
    amplitude: 40,
    color: '#0',
    speed: .30,
  });