function PreguntarEdad() {
    let edad;
    do {
      edad = prompt("Por favor, ingresa su edad:");
      if (edad>18) {
        alert ("Compi, tu edad es " + edad + "! Podes pasar, vieja");
      } else {
        alert ("Compi, tu edad es " + edad + "! anda a dormir, peque");
      }
    } while (!edad);
  
    return edad;
  }
  
PreguntarEdad()
