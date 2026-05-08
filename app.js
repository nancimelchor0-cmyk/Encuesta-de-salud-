document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('healthSurveyForm');
  const nivelDolorInput = document.getElementById('nivel-dolor');
  const nivelDolorLabel = document.querySelector('label[for="nivel-dolor"]');
  nivelDolorInput.addEventListener('input', function() {
    nivelDolorLabel.textContent = `Nivel de Dolor (${nivelDolorInput.value}/10):`;
  });

  form.addEventListener('submit', function(event) {
    const edad = parseInt(document.getElementById('edad').value);
    if (edad < 0 || edad > 120) {
      alert('Por favor, ingrese una edad válida.');
      event.preventDefault(); 
      return;
    } 
    event.preventDefault(); 

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log('Datos de la encuesta enviados:', data);
    alert('¡Encuesta enviada con éxito! (Ver consola para los datos)');
  });
});
