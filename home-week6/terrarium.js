document.querySelectorAll('.plant').forEach(plant => {
    plant.draggable = true; // 식물이 드래그 가능하도록 설정
    plant.addEventListener('dragstart', dragStart); // 드래그 시작 이벤트 추가
    plant.addEventListener('click', bringToFront); // 클릭 이벤트 추가
});


let zIndexCounter = 1; // z-index 조정용 카운터

// 드래그 시작 시 호출되는 함수
function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
}

// 병 영역에 드롭을 허용하도록 설정
const terrarium = document.getElementById('terrarium');
terrarium.addEventListener('dragover', allowDrop);
terrarium.addEventListener('drop', drop);

function allowDrop(e) {
    e.preventDefault(); // 드롭을 허용하기 위해 기본 동작을 막습니다.
}

// 드롭 이벤트 설정
function drop(e) {
    e.preventDefault();
    const plantId = e.dataTransfer.getData("text/plain");
    const plant = document.getElementById(plantId);
    plant.style.left = e.clientX - terrarium.offsetLeft - (plant.offsetWidth / 2) + 'px';
    plant.style.top = e.clientY - terrarium.offsetTop - (plant.offsetHeight / 2) + 'px';
    terrarium.appendChild(plant); // 병 영역 내로 식물을 이동시킵니다.
    plant.style.transform = "scale(1.2)"; //크기 1.2배 증가
}

// 클릭 시 z-index를 최상위로 변경하는 함수
function bringToFront(e) {
    e.target.style.zIndex = zIndexCounter;
    zIndexCounter++; // zIndex 값을 증가시켜 다른 요소보다 위에 표시되도록 설정합니다.
}