const agentNombre = document.querySelector('[data-agente-nombre]');


const BuscarAgente = event =>{
    event.preventDefault();
        const {value} = event.target.agente;
        fetch(`https://valorant-api.com/v1/agents/${value.toLowerCase()}`)
        .then(data=>data.json())
        .then(response =>obtenerAgentes(response))
    }


    function obtenerAgentes (agente){
    agentNombre.textContent = agente.displayName;
    }