document.addEventListener('DOMContentLoaded', function(){
    let offset = 0
    const sliderLine = document.querySelector('.slider-wrapper')
    
    document.getElementById('slider-button-next').addEventListener('click', () => {
        offset += 251
        sliderLine.style.left = -offset + 'px'
        if(offset > 753) {
            sliderLine.style.left = 0;
            offset=0
        }
    })
})
