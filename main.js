window.addEventListener('load',()=>{
    
    const form = document.getElementById('formulario');
    const contenedorTareas = document.querySelector('.lista-tareas-contenido');
    
   
    form.addEventListener('submit',(e)=>{

        e.preventDefault();

        let tarea = document.querySelector('.tarea').value;

        if(tarea.length > 0){ 
            contenedorTareas.innerHTML += `<li><p>${tarea}</p><div class="btns"><a class="btnsEliminar">Eliminar</a><a class="btnsEditar">Editar</a></div></li>`;
        }else{
             alert('Por favor ingrese una tarea');   
        }
       
        
        form.reset();
    
    });

    let test = document.querySelector(".test");

  
    

 


          contenedorTareas.addEventListener('click',(e)=>{
            
            // ((e.target.parentElement)).tagName == 'LI' && (e.target).previousSibling.tagName == 'P'

             if (e.target.textContent == "Eliminar"){

              let confirmacion = confirm("¿Seguro que desea eliminar esta tarea?")
              
              if(confirmacion){
                (e.target.parentElement).parentElement.remove();
              }else{
                  return;
              }


             }else if(e.target.textContent == "Editar"){
                    let tareaEditada = prompt("Edite su tarea");
                    
                     if(tareaEditada.length > 0 ){
                        (e.target.parentElement).parentElement.firstChild.textContent = tareaEditada; 
                     }else{
                         alert("Entrada vacía");
                     }                       
                        
                            
                      
                            
                    
                       
             }  
                
          });

 
    

     

});

