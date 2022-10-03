document.querySelector("#agregar-tarea").addEventListener("click",(function(){const e=document.createElement("DIV");e.classList.add("modal"),e.innerHTML='\n            \x3c!-- Formulario --\x3e\n            <form class="formulario nueva-tarea">\n                <legend>Añade una nueva tarea</legend>\n                \x3c!-- Tarea --\x3e\n                <div class="campo">\n                    <input\n                        type="text"\n                        name="tarea"\n                        placeholder="Añadir Tarea al Proyecto Actual"\n                        id="tarea"\n                    />\n                </div>\n                \x3c!-- Opciones --\x3e\n                <div class="opciones">\n                    <input \n                        type="submit" \n                        class="submit-nueva-tarea" \n                        value="Añadir Tarea"\n                    />\n                    <button type="button" class="cerrar-modal">Cancelar</button>\n                </div>\n            </form>\n        ',setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),e.addEventListener("click",(function(t){t.preventDefault(),t.target.classList.contains("cerrar-modal")&&(document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{e.remove()},500)),t.target.classList.contains("submit-nueva-tarea")&&function(){const e=document.querySelector("#tarea").value.trim();""!==e?async function(e){const t=new FormData;t.append("nombre",e),t.append("proyectoId",function(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}());try{const e="http://localhost:3000/api/tarea",a=await fetch(e,{method:"POST",body:t}),n=await a.json();console.log(n)}catch(e){console.log(e)}}(e):function(e,t,a){const n=document.querySelector(".alerta");n&&n.remove();const r=document.createElement("DIV");r.classList.add("alerta",e),r.textContent=t,a.parentElement.insertBefore(r,a.nextElementSibling),setTimeout(()=>{r.remove()},5e3)}("error","El nombre de la tarea es Obligatorio",document.querySelector(".formulario legend"))}()})),document.querySelector(".dashboard").appendChild(e)}));