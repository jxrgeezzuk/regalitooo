// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "(Hold me close) look me dead in my eyes", time: 4.3 },
  { text: "(Dead in my) till the day that I die", time: 7.6 },
  { text: "(Dead inside) I just wanna feel alive", time: 11.2 },
  { text: "(With you, I'm alive) with you, I'm alive", time: 14.5 },
  { text: "Fell in love, but it left me lonely", time: 18.0 },
  { text: "Tried to trust, but it burned me slowly", time: 21.5 },
  { text: "I didn't know what I was looking for", time: 25.0 },
  { text: "Till I found herrrr", time: 28.5 },
  { text: "I found herrr", time: 33.0 },
  { text: "Without herr, I'm a mess (I'm a mess)", time: 37.0 },
  { text: "There was nothing 'bout that love that made sense, I was", time: 41.5 },
  { text: "stressed", time: 45.0 },
  { text: "Till I found her (oh, oh)", time: 47.5 },

  // --- SECCIÓN FEMENINA (AJUSTADA CON UN MARGEN INTERMEDIO) ---
  { text: "Found me lonely, lost and only", time: 55.5 },
  { text: "One step away from just giving up slowly", time: 58.5 },
  { text: "I was a mess, i was afraid", time: 62.0 },
  { text: "I´d be the girl who just put up her walls no one could break", time: 64.8 },
  { text: "´Til i found him running through the wild", time: 68.5 },
  { text: "with half of a heart", time: 72.0 },
  { text: "Made me a whole one out of the parts", time: 74.5 },
  { text: "Suddenly it´s like i´m healed", time: 77.2 },
  { text: "Didn´t know that love was real until i cloud", time: 80.0 },

  // --- CORO FINAL ---
  { text: "(Hold you close) look me dead in my eyes", time: 83.5 },
  { text: "(Dead in my) ´til the day that i die", time: 87.5 },
  { text: "(Dead inside) I just wanna feel alive", time: 91.5 },
  { text: "(With you, I'm alive) with you, I'm alive", time: 95.5 },
  { text: "Fell in love, but it left me lonely", time: 99.5 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);