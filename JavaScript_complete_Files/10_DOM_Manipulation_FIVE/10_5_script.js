// Get the HTML Elements
let carSelectBox = document.querySelector('#car-select');
let modelSelectBox = document.querySelector('#model-select');
let cars=[{id:1,name:'Maruthi Suzuki'},
          {id:2,name:'Suzuki NEXA'},
          {id:3,name:'Hyundai Motors'}];
let models=[{id: 1,car_id:1,name:'Swift'},{id:2,car_id:1,name:'DZire'},
            {id: 3,car_id:1,name:'Brezza'},{id:4,car_id:1,name:'Waganor'},
            {id: 5,car_id:2,name:'Baleno'},{id:6,car_id:2,name:'Ignis'},
            {id: 7,car_id:2,name:'Ciaz'},{id:8,car_id:2,name:'SCross'},
            {id: 9,car_id:3,name:'Grand i10'},{id:10,car_id:3,name:'i20 Sports'},
            {id: 11,car_id:3,name:'Creta'},{id:12,car_id:3,name:'Verna'}];

// Populate Options
let populateOptions = (selectBox,array,options) => {
    for(let elem of array){
        options += `<option value="${elem.id}">${elem.name}</option>`
    }
    selectBox.innerHTML = options;
};

// Populate Car Select with Options
let carOptions = `<option>Select a Car</option>`;
populateOptions(carSelectBox,cars,carOptions);

// When a Car is Selected
carSelectBox.addEventListener('change',function() {
    let selectedId = Number(carSelectBox.value);
    let selectedModels = models.filter((model) => {
        return model.car_id === selectedId;
    });
    // populate Model Select with Options
    let modelOptions = `<option>Select a Model</option>`;
    populateOptions(modelSelectBox,selectedModels,modelOptions);
});

