//Cette fonction inscrite le onmouseover de l'image change l'image au survol
function changeImage() {
  document.getElementById('image1').src='assets/img/image1_2.jpg';
  document.getElementById('image2').src='assets/img/image2_2.jpg';
  document.getElementById('image3').src='assets/img/image3_2.jpg';
  document.getElementById('image4').src='assets/img/image4_2.jpg';
  document.getElementById('image5').src='assets/img/image5_2.jpg';
}

//Cette fonction inscrite le onmouseover de l'image remet l'image d'origine lorsque le curseur n'est plus dessus
function remetImage() {
  document.getElementById('image1').src='assets/img/image1.jpg';
  document.getElementById('image2').src='assets/img/image2.jpg';
  document.getElementById('image3').src='assets/img/image3.jpg';
  document.getElementById('image4').src='assets/img/image4.jpg';
  document.getElementById('image5').src='assets/img/image5.jpg';
}
