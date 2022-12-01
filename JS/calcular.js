function cambio()
  {
    var pic;
    tri = document.getElementById("triangulo").value;
    if (tri == "Isosceles"){
      pic = "img/isos.png";  
    } else {
      if(tri == "Equilatero") {
        pic = "img/equi.png";  
      } else {
        if(tri == "Escaleno") {
          pic = "img/esca.png";  
        } else{
          pic = "img/default.jpg";
        }  
      }
    }
    document.getElementById('Tr').src = pic;
  }
  function suma()
  {
   a = document.getElementById('a').value;
   b = document.getElementById('b').value;
   c = document.getElementById('c').value;
   d = Number(a) + Number(b) + Number(c);
   document.getElementById('ans').value = d;
   console.log(d);
  }
  function Random(){
    document.getElementById('a').value =Math.floor (Math.random() * 100);
    document.getElementById('b').value =Math.floor (Math.random() * 100);
    document.getElementById('c').value =Math.floor (Math.random() * 100);
  }