   const myobserver = new IntersectionObserver( (entries) =>{
    entries.forEach( (entry)=>{
       if(entry.isIntersecting){
        entry.target.classList.add('show')
       } else{
        entry.target.classList.remove('show')
       }
    })
   })

   // Modificação do Sobre

   const elements = document.querySelectorAll('.conteudo')

   elements.forEach((element)=> myobserver.observe(element)) 


   // Modificação do Serviços


   const element = document.querySelectorAll('.content-service')

   element.forEach((Element) => myobserver.observe(Element))