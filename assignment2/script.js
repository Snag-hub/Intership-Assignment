 
fetch("https://script.google.com/macros/s/AKfycbwWWEd_wywnnTD_xbh2sqc1pmNoMsw636zHMVW3WJjcDiz8Ho_lc1gTPv4X8BIHKL3CZg/exec").then((data) =>{
    return data.json();
}).then((objectData) => {
    let tableData = '';
    objectData.data.map((values , i)=>{
      tableData += `
      <tr>
      <td>${values.machine_name}</td>
      <td>${values.machine_id}</td>
      <td>${values.current}</td>
      <td>${values.voltage}</td>
      <td>${values.power_factor}</td>
      <td>${values.active_power}</td>
      <td>${values.apparent_power}</td>
      <td>${values.reactive_power}</td>
      <td>${values.daily_energy}</td>
      <td>${values.monthly_energy}</td>
      <td>${values.yearly_energy}</td>
      <td>${values.idle_daily}</td>
      <td>${values.idle_monthly}</td>
    </tr>`
    
    });
    document.getElementById('table_body').innerHTML = tableData;
});


let table = document.getElementsByClassName('tabel0');
// table.style.color = 'red';
console.log(table , 'table')