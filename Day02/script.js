let panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeAllActivePanels();
        panel.classList.add('active')
    });
});


function removeAllActivePanels(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}