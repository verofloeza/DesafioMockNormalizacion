const socket = io();

socket.on('from-server-saludo', data => {
  alert(data);
});

function habilitarButton(){

    var texto = document.getElementById("email").value;
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!regex.test(texto)) {
      document.getElementById('buttonMensaje').disabled = 'disabled'
    } else {
      document.getElementById('buttonMensaje').removeAttribute('disabled');
      document.getElementById("emailMensaje").value= texto;
    }
    
  }
  
  function guardar(inputName){
    document.getElementById(inputName+"Mensaje").value = document.querySelector('#'+inputName).value;
  }
  


  socket.on('from-server-mensajes', data => {
    alert(data.MENSAJES)
    //renderMensaje(data.MENSAJES);
    
  });
  
  function renderMensaje(mensajesNorm) {
    const cuerpoMensajesHTML = mensajesNorm.map( msj =>{
        return `<div class="col-12 cont">
                  <b class="colorBlue">${msj.author[0].email}</b>
                  <p class="colorBrown">[${msj.timestamp}]:</p> 
                  <span class="textMessage">${msj.text}</span>
                  <img src="${author[0].avatar}" width="30">
                </div>
                <br><br>`;
    }).join("");  
  
    document.querySelector('#historial').innerHTML = cuerpoMensajesHTML;
    document.querySelector('#message').value = "";
  }