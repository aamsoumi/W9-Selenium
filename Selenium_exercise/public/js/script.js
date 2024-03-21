document.addEventListener('DOMContentLoaded', function(){

  const makeSelect = document.getElementById('make');
  const modelSelect = document.getElementById('model');
  const yearInput = document.getElementById('year');

   fetch("/fetchAllData")
    .then(response=>response.json())
    .then(data=>{
      if(data){
        const carMakes = Object.keys(data)
          makeSelect.innerHTML='<option value="">Select Make</option>'
        carMakes.forEach(make=>{
          makeSelect.innerHTML+=`<option value="${make}">${make}</option>`
        })

        makeSelect.addEventListener('change',function (event){
          const selectedMake= this.value;
          if(selectedMake===""){
            modelSelect.innerHTML='<option value="">Select Model</option>'
            modelSelect.disabled = true;
            yearInput.innerHTML = '<option value="">Select Year</option>';
            yearInput.disabled = true;
            return
          }
    
          modelSelect.disabled = false;
          const models = data[selectedMake]
          modelSelect.innerHTML='<option value="">Select Model</option>'
          models.forEach(model=>{
            modelSelect.innerHTML+=`<option value="${model}">${model}</option>`
          })
        })
        modelSelect.addEventListener('change', function(event){
          yearInput.disabled = false;
          const startYear = 2000, endYear=2024;
          const years = Array.from({ length: endYear-startYear }, (_, i) => startYear+i);
          yearInput.innerHTML = '<option value="">Select Year</option>';
          years.forEach(d=>{
            yearInput.innerHTML += `<option value="${d.toString()}">${d.toString()}</option>` 
          })


        } )
      }
    })
    .catch(err=>{
      console.log(err)
    })



})

