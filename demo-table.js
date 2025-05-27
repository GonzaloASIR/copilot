// demo-table.js

// Simula la obtención de datos desde una API o base de datos
function fetchMockData() {
  // Puedes modificar estos datos para probar diferentes escenarios
  return [
    { id: 1, nombre: "Ana", edad: 28, ciudad: "Madrid" },
    { id: 2, nombre: "Luis", edad: 34, ciudad: "Barcelona" },
    { id: 3, nombre: "Sofía", edad: 22, ciudad: "Valencia" },
    { id: 4, nombre: "Carlos", edad: 41, ciudad: "Sevilla" }
  ];
}

// Genera y muestra la tabla en el div con id 'output'
function renderTable(data) {
  const output = document.getElementById('output');
  output.innerHTML = '';

  if (!data || data.length === 0) {
    const noData = document.createElement('div');
    noData.className = 'no-data';
    noData.textContent = 'No hay datos disponibles';
    output.appendChild(noData);
    return;
  }

  // Crear tabla
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Encabezados dinámicos
  const headers = Object.keys(data[0]);
  const trHead = document.createElement('tr');
  headers.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  // Filas de datos
  data.forEach((row, idx) => {
    const tr = document.createElement('tr');
    headers.forEach(key => {
      const td = document.createElement('td');
      td.textContent = row[key];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  output.appendChild(table);
}

// Inicialización automática al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const data = fetchMockData();
  renderTable(data);
});

// Para probar el caso vacío, puedes llamar a renderTable([]) en la consola.
