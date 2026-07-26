document.getElementById('pcForm').addEventListener('submit', function(e){
  e.preventDefault();

  const gabinete = document.getElementById('gabinete');
  const procesador = document.getElementById('procesador');
  const disco = document.getElementById('disco');
  const ram = document.getElementById('ram');
  const monitor = document.getElementById('monitor');

  let total = 0;
  total += parseFloat(gabinete.value);
  total += parseFloat(procesador.value);
  total += parseFloat(disco.value);
  total += parseFloat(ram.value);

  let lines = [];
  lines.push('Gabinete: ' + gabinete.options[gabinete.selectedIndex].text);
  lines.push('Procesador: ' + procesador.options[procesador.selectedIndex].text);
  lines.push('Disco Duro: ' + disco.options[disco.selectedIndex].text);
  lines.push('Memoria RAM: ' + ram.options[ram.selectedIndex].text);
  lines.push('Monitor: ' + monitor.options[monitor.selectedIndex].text);

  const checks = document.querySelectorAll('#accesorios input[type="checkbox"]:checked');
  if(checks.length > 0){
    let accList = [];
    checks.forEach(function(c){
      const [name, price] = c.value.split('|');
      total += parseFloat(price);
      accList.push(name + ' ($' + price + ')');
    });
    lines.push('Accesorios: ' + accList.join(', '));
  } else {
    lines.push('Accesorios: ninguno');
  }

  const resultado = document.getElementById('resultado');
  resultado.textContent = lines.join('\n');
  resultado.classList.add('show');

  document.getElementById('totalAmount').textContent = '$' + total.toLocaleString('es-MX', {minimumFractionDigits:2, maximumFractionDigits:2});
});
