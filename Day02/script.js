let circles = document.querySelectorAll('.circle');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let progress = document.querySelector('.progress');

let stepIdx = 0;

prev.addEventListener('click', () => {
    --stepIdx;
    update(stepIdx);
});

next.addEventListener('click', () => {
    ++stepIdx;
    update(stepIdx);
});

function update(stepIdx)
{
    changeStepButtonEnableByStepIdx(stepIdx);
    //removeAllActiveCircles();
    setActiveCirclesByStepIdx(stepIdx);    
    setProgressBarByStepIdx(stepIdx);
}

function changeStepButtonEnableByStepIdx(stepIdx) {
    switch (stepIdx) {
        case 0:
            prev.disabled = true;
            next.disabled = false;
            break;
        case 3:
            prev.disabled = false;
            next.disabled = true;
            break;
        default:
            prev.disabled = false;
            next.disabled = false;
    }
}

function removeAllActiveCircles() {
    circles.forEach(circle => {
        circle.classList.remove('active');
    })
}

function setActiveCirclesByStepIdx(stepIdx) {
    circles.forEach(function (circle, circleIdx) {
        if (circleIdx <= stepIdx) {
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });
}

function setProgressBarByStepIdx(stepIdx) {
    let width_percent = stepIdx * 33;
    progress.style = `width:${width_percent}%`;
}