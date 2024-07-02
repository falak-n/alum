function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


(function(){
    const buttons=document.querySelectorAll('.btn');
    const storeImages=document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            const filter=e.target.dataset.filter

            storeImages.forEach((item)=>{
                if(filter==="all" || item.classList.contains(filter) ){
                    item.style.display="block";
                }else{
                       item.style.display = "none";
                  }
               
                
            })
        })
    })
})();

   
   const images=document.querySelectorAll('.store-image');
   images.forEach(image => {
    image.addEventListener('click',function(){
        const url=this.getAttribute('data-url');
        window.location.href=url;
    });
   });