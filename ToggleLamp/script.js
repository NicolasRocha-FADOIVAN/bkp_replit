const btntrocar = document.getElementById('btn-trocar')
const lampada = document.getElementById('lampada')
 let baseURL = "https://b3b90c8a-06d3-4c18-a161-b76d047c6e6f-00-2h52ozez6afgf.kirk.replit.dev/"

btntrocar.addEventListener('click', 
function() {
  if (lampada.src == baseURL + "lampada1.png") {
    lampada.src = "lampada3.png"
  } else {
    lampada.src = "lampada1.png"
  }
} )