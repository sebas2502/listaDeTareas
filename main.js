window.addEventListener('load',()=>{
    
    const form = document.getElementById('formulario');
    const contenedorTareas = document.querySelector('.lista-tareas-contenido');
    
   
    form.addEventListener('submit',(e)=>{

        e.preventDefault();

        let tarea = document.querySelector('.tarea').value;

        if(tarea.length > 0){ 
            contenedorTareas.innerHTML += `<li><p>${tarea}</p><a class="btnEliminar">Eliminar</a></li>`;
        }else{
             alert('Por favor ingrese una tarea');   
        }
       
        
        form.reset();
    
    });

        contenedorTareas.addEventListener('click',(e)=>{
           
           if (((e.target.parentElement)).tagName == 'LI' && (e.target).previousSibling.tagName == 'P') {

            (e.target.parentElement).remove();
            
           }

            
          
           
               

                
        });
    

   
    

   
    

});

