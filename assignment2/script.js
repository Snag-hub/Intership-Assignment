 
fetch("https://script.google.com/macros/s/AKfycbxTtDkxw8SfWC64kWTvBg-lbDB3mXnuwG5Q61Mfxn33tau4ITl56le_E77scuYKEmv-Gw/exec").then((data) =>{
    return data.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData = '';
    // objectData.map((values)=>{
    //   tableData += `<tr>
    //   <td>${values.machine_name}</td>
    //   <td>${values.machine_id}</td>
    //   <td>${values.current}</td>
    //   <td>${values.voltage}</td>
    //   <td>${values.power_factor}</td>
    //   <td>${values.active_power}</td>
    //   <td>${values.apparent_power}</td>
    //   <td>${values.reactive_power}</td>
    //   <td>${values.daily_energy}</td>
    //   <td>${values.monthly_energy}</td>
    //   <td>${values.yearly_energy}</td>
    //   <td>${values.idle_daily}</td>
    //   <td>${values.idle_monthly}</td>
    //   <td>${values.idle_yearly}</td>
    // </tr>`
    // });
    objectData.map((values)=>{
      tableData += `<tr>
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
      <td>${values.idle_yearly}</td>
    </tr>`
    });
    document.getElementById('table_body').innerHTML = tableData;
});
