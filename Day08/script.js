
const create = ()=>{
    const conatainer = document.querySelector(".grid");
    for(let i = 0 ; i < 400 ;i++){
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.id =`${i}`;
        cell.addEventListener('click',()=>{changeState(cell)});
        conatainer.append(cell);
    }
};

create();
const changeState = (cell)=>{
    cell.classList.toggle("active");
};
const markActiveCell = ()=>{
    const actives = [
        130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190,
        191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250,
        251, 253, 267, 269, 272, 274,
  ];
  for(let id of actives){
      const active = document.getElementById(`${id - 1}`);
      active.classList.add("active");

  }
};
markActiveCell();
