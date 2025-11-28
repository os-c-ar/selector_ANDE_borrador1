
//Craación del objeto sistema
function SistemaANDE(item, serieBomba, numBombas, caudalMin, caudalMax, presionMax, clasificacion, incluyePIT, sensorFlujo, codANDE){

    this.item=item;
    this.serieBomba=serieBomba;
    this.numBombas=numBombas;
    this.caudalMin=caudalMin;
    this.caudalMax=caudalMax;
    this.presionMax=presionMax;
    this.clasificacion=clasificacion;
    this.incluyePIT=incluyePIT;
    this.sensorFlujo=sensorFlujo;
    this.codANDE=codANDE;
    
    
    this.comentarios=""
    this.tipoDeMotor= "Eléctrico. 480 V/60 Hz/ 3 fases";
    this.potenciaNominal="0.5 hp/ 1800 rpm";
    this.nivelDeRuido="85dBa";
    this.viscosidadMax="100 cP";

    
    this.descripcionSistema = function(){
        return `
        <div style="font-family: Arial, sans-serif; color: #333; font-size: 12px;">
            <div style="background-color: #f0f8ff; padding: 8px 10px; border-radius: 6px; margin-bottom: 8px; border-left: 3px solid #5DADE2;">
                <h4 style="margin: 0 0 5px 0; color: #2980B9; font-size: 11.5px; white-space: nowrap;">Información General</h4>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 2px 8px; font-weight: 600; width: 45%; white-space: nowrap;">ITEM:</td>
                        <td style="padding: 2px 8px;">${this.item}</td>
                    </tr>
                    <tr style="background-color: rgba(93, 173, 226, 0.1);">
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Código ANDE:</td>
                        <td style="padding: 2px 8px; color: #2980B9; font-weight: 600;">${this.codANDE == 71500197623 ? `<a href="https://drive.google.com/drive/folders/1Xjil7krfeD6oMiA5NCOU9SYqJilclHhb?usp=drive_link" target="_blank" style="color: #2980B9; text-decoration: underline;">${this.codANDE}</a>` : this.codANDE}</td>
                    </tr>
                    <tr>
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Serie de Bomba:</td>
                        <td style="padding: 2px 8px;">${this.serieBomba}</td>
                    </tr>
                    <tr style="background-color: rgba(93, 173, 226, 0.1);">
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Número de Bombas:</td>
                        <td style="padding: 2px 8px;">${this.numBombas}</td>
                    </tr>
                </table>
            </div>
            
            <div style="background-color: #fff5e6; padding: 8px 10px; border-radius: 6px; margin-bottom: 8px; border-left: 3px solid #f39c12;">
                <h4 style="margin: 0 0 5px 0; color: #d68910; font-size: 11.5px; white-space: nowrap;">Especificaciones Técnicas</h4>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 2px 8px; font-weight: 600; width: 45%; white-space: nowrap;">Caudal mínimo (GPD):</td>
                        <td style="padding: 2px 8px;">${this.caudalMin}</td>
                    </tr>
                    <tr style="background-color: rgba(243, 156, 18, 0.1);">
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Caudal máximo (GPD):</td>
                        <td style="padding: 2px 8px;">${this.caudalMax}</td>
                    </tr>
                    <tr>
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Presión máxima (psi):</td>
                        <td style="padding: 2px 8px;">${this.presionMax}</td>
                    </tr>
                    <tr style="background-color: rgba(243, 156, 18, 0.1);">
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Área clasificada:</td>
                        <td style="padding: 2px 8px;">${this.clasificacion}</td>
                    </tr>
                    <tr>
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Incluye PIT:</td>
                        <td style="padding: 2px 8px;">${this.incluyePIT}</td>
                    </tr>
                    <tr style="background-color: rgba(243, 156, 18, 0.1);">
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Sensor de flujo:</td>
                        <td style="padding: 2px 8px;">${this.sensorFlujo}</td>
                    </tr>
                    <tr>
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Viscosidad Máxima:</td>
                        <td style="padding: 2px 8px; white-space: nowrap;">${this.viscosidadMax}</td>
                    </tr>
                </table>
            </div>
            
            <div style="background-color: #f0fdf4; padding: 8px 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                <h4 style="margin: 0 0 5px 0; color: #15803d; font-size: 11.5px; white-space: nowrap;">Características del Motor</h4>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 2px 8px; font-weight: 600; width: 40%; white-space: nowrap;">Tipo de Motor:</td>
                        <td style="padding: 2px 8px; font-size: 10px; white-space: nowrap;">${this.tipoDeMotor}</td>
                    </tr>
                    <tr style="background-color: rgba(22, 163, 74, 0.1);">
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Potencia:</td>
                        <td style="padding: 2px 8px; white-space: nowrap;">${this.potenciaNominal}</td>
                    </tr>
                    <tr>
                        <td style="padding: 2px 8px; font-weight: 600; white-space: nowrap;">Nivel de Ruido:</td>
                        <td style="padding: 2px 8px; white-space: nowrap;">${this.nivelDeRuido}</td>
                    </tr>
                </table>
            </div>
        </div>
        `;
    }
    }
    
    var sistema_ANDE=[];
    
    // Datos del CSV ANDE - Tabla datos.csv
    sistema_ANDE[1] = new SistemaANDE(1,"mRoy A",1,10.2,102,285,"NO","NO","NO",71500197625);
    sistema_ANDE[2] = new SistemaANDE(2,"mRoy A",1,10.2,102,285,"NO","SI","NO",71500197624);
    sistema_ANDE[3] = new SistemaANDE(3,"mRoy A",1,10.2,102,285,"SI","NO","NO",71500197623);
    sistema_ANDE[4] = new SistemaANDE(4,"mRoy A",1,10.2,102,285,"SI","SI","NO",71500197622);
    sistema_ANDE[5] = new SistemaANDE(5,"mRoy A",1,9.3,93,740,"NO","NO","NO",71500197621);
    sistema_ANDE[6] = new SistemaANDE(6,"mRoy A",1,9.3,93,740,"NO","SI","NO",71500197620);
    sistema_ANDE[7] = new SistemaANDE(7,"mRoy A",1,9.3,93,740,"SI","NO","NO",71500197619);
    sistema_ANDE[8] = new SistemaANDE(8,"mRoy A",1,9.3,93,740,"SI","SI","NO",71500197618);
    sistema_ANDE[9] = new SistemaANDE(9,"mRoy A",1,7.8,78,1600,"NO","NO","NO",71500197617);
    sistema_ANDE[10] = new SistemaANDE(10,"mRoy A",1,7.8,78,1600,"NO","SI","NO",71500197616);
    sistema_ANDE[11] = new SistemaANDE(11,"mRoy A",1,7.8,78,1600,"SI","NO","NO",71500197615);
    sistema_ANDE[12] = new SistemaANDE(12,"mRoy A",1,7.8,78,1600,"SI","SI","NO",71500197614);
    sistema_ANDE[13] = new SistemaANDE(13,"mRoy A",2,10.2,102,285,"NO","SI","NO",71500197607);
    sistema_ANDE[14] = new SistemaANDE(14,"mRoy A",2,10.2,102,285,"NO","SI","SI",71500197606);
    sistema_ANDE[15] = new SistemaANDE(15,"mRoy A",2,10.2,102,285,"SI","SI","NO",71500197605);
    sistema_ANDE[16] = new SistemaANDE(16,"mRoy A",2,10.2,102,285,"SI","SI","SI",71500197604);
    sistema_ANDE[17] = new SistemaANDE(17,"mRoy A",2,9.3,93,740,"NO","SI","NO",71500197603);
    sistema_ANDE[18] = new SistemaANDE(18,"mRoy A",2,9.3,93,740,"NO","SI","SI",71500197602);
    sistema_ANDE[19] = new SistemaANDE(19,"mRoy A",2,9.3,93,740,"SI","SI","NO",71500197601);
    sistema_ANDE[20] = new SistemaANDE(20,"mRoy A",2,9.3,93,740,"SI","SI","SI",71500197600);
    sistema_ANDE[21] = new SistemaANDE(21,"mRoy A",2,7.8,78,1600,"NO","SI","NO",71500197599);
    sistema_ANDE[22] = new SistemaANDE(22,"mRoy A",2,7.8,78,1600,"NO","SI","SI",71500197598);
    sistema_ANDE[23] = new SistemaANDE(23,"mRoy A",2,7.8,78,1600,"SI","SI","NO",71500197597);
    sistema_ANDE[24] = new SistemaANDE(24,"mRoy A",2,7.8,78,1600,"SI","SI","SI",71500197596);
    sistema_ANDE[25] = new SistemaANDE(25,"mRoy A",1,3.2,32,285,"NO","NO","NO",71500197591);
    sistema_ANDE[26] = new SistemaANDE(26,"mRoy A",1,3.2,32,285,"NO","SI","NO",71500197590);
    sistema_ANDE[27] = new SistemaANDE(27,"mRoy A",1,3.2,32,285,"SI","NO","NO",71500197589);
    sistema_ANDE[28] = new SistemaANDE(28,"mRoy A",1,3.2,32,285,"SI","SI","NO",71500197588);
    sistema_ANDE[29] = new SistemaANDE(29,"mRoy A",1,2.8,28,740,"NO","NO","NO",71500197587);
    sistema_ANDE[30] = new SistemaANDE(30,"mRoy A",1,2.8,28,740,"NO","SI","NO",71500197586);
    sistema_ANDE[31] = new SistemaANDE(31,"mRoy A",1,2.8,28,740,"SI","NO","NO",71500197585);
    sistema_ANDE[32] = new SistemaANDE(32,"mRoy A",1,2.8,28,740,"SI","SI","NO",71500197584);
    sistema_ANDE[33] = new SistemaANDE(33,"mRoy A",1,2.9,29,1600,"NO","NO","NO",71500197583);
    sistema_ANDE[34] = new SistemaANDE(34,"mRoy A",1,2.9,29,1600,"NO","SI","NO",71500197582);
    sistema_ANDE[35] = new SistemaANDE(35,"mRoy A",1,2.9,29,1600,"SI","NO","NO",71500197581);
    sistema_ANDE[36] = new SistemaANDE(36,"mRoy A",1,2.9,29,1600,"SI","SI","NO",71500197580);
    sistema_ANDE[37] = new SistemaANDE(37,"mRoy A",2,3.2,32,285,"NO","SI","NO",71500197575);
    sistema_ANDE[38] = new SistemaANDE(38,"mRoy A",2,3.2,32,285,"NO","SI","SI",71500197574);
    sistema_ANDE[39] = new SistemaANDE(39,"mRoy A",2,3.2,32,285,"SI","SI","NO",71500197573);
    sistema_ANDE[40] = new SistemaANDE(40,"mRoy A",2,3.2,32,285,"SI","SI","SI",71500197572);
    sistema_ANDE[41] = new SistemaANDE(41,"mRoy A",2,2.8,28,740,"NO","SI","NO",71500197571);
    sistema_ANDE[42] = new SistemaANDE(42,"mRoy A",2,2.8,28,740,"NO","SI","SI",71500197570);
    sistema_ANDE[43] = new SistemaANDE(43,"mRoy A",2,2.8,28,740,"SI","SI","NO",71500197569);
    sistema_ANDE[44] = new SistemaANDE(44,"mRoy A",2,2.8,28,740,"SI","SI","SI",71500197568);
    sistema_ANDE[45] = new SistemaANDE(45,"mRoy A",2,2.9,29,1600,"NO","SI","NO",71500197567);
    sistema_ANDE[46] = new SistemaANDE(46,"mRoy A",2,2.9,29,1600,"NO","SI","SI",71500197566);
    sistema_ANDE[47] = new SistemaANDE(47,"mRoy A",2,2.9,29,1600,"SI","SI","NO",71500197565);
    sistema_ANDE[48] = new SistemaANDE(48,"mRoy A",2,2.9,29,1600,"SI","SI","SI",71500197564);
    sistema_ANDE[49] = new SistemaANDE(49,"mRoy XW",1,14,139,2900,"SI","NO","NO",71500246575);
    sistema_ANDE[50] = new SistemaANDE(50,"mRoy B",1,190,1896,350,"SI","NO","NO",71500256129);
    sistema_ANDE[51] = new SistemaANDE(51,"MCH",1,55,552,2400,"SI","NO","NO",71500246574);
    sistema_ANDE[52] = new SistemaANDE(52,"mRoy XT",1,3,28,2900,"SI","NO","NO",71500246007);
    
    
    // Función para actualizar opciones de Presión según Serie de Bomba
    function actualizarOpcionesPresion(){
        let serieSelect = document.getElementById('Serie_bomba');
        let presionSelect = document.getElementById('P_max');
        
        if(!serieSelect || !presionSelect) return;
        
        let serieSeleccionada = serieSelect.options[serieSelect.selectedIndex].text;
        let valorActualPresion = presionSelect.value; // Guardar selección actual
        
        if(serieSeleccionada == "Seleccionar"){
            // Mostrar todas las opciones de presión
            presionSelect.innerHTML = `
                <option value="0">Seleccionar</option>
                <option value="285">285</option>
                <option value="350">350</option>
                <option value="740">740</option>
                <option value="1600">1600</option>
                <option value="2400">2400</option>
                <option value="2900">2900</option>
            `;
            // Restaurar selección si sigue siendo válida
            if(valorActualPresion != "0") presionSelect.value = valorActualPresion;
            return;
        }
        
        // Filtrar sistemas por serie de bomba
        let sistemasFiltrados = sistema_ANDE.filter(sistema => sistema && sistema.serieBomba == serieSeleccionada);
        
        // Obtener valores únicos de presión
        let presionesUnicas = [...new Set(sistemasFiltrados.map(s => s.presionMax))].sort((a,b) => a-b);
        
        // Reconstruir el select
        presionSelect.innerHTML = '<option value="0">Seleccionar</option>';
        presionesUnicas.forEach(presion => {
            presionSelect.innerHTML += `<option value="${presion}">${presion}</option>`;
        });
        
        // Restaurar selección si el valor todavía existe en las nuevas opciones
        if(valorActualPresion != "0" && presionesUnicas.includes(parseFloat(valorActualPresion))){
            presionSelect.value = valorActualPresion;
        }
    }
    
    // Función para actualizar opciones de Caudal según Serie de Bomba y Presión
    function actualizarOpcionesCaudal(){
        let serieSelect = document.getElementById('Serie_bomba');
        let presionSelect = document.getElementById('P_max');
        let caudalSelect = document.getElementById('Caudal_max');
        
        if(!serieSelect || !presionSelect || !caudalSelect) return;
        
        let serieSeleccionada = serieSelect.options[serieSelect.selectedIndex].text;
        let presionSeleccionada = presionSelect.options[presionSelect.selectedIndex].value;
        let valorActualCaudal = caudalSelect.value; // Guardar selección actual
        
        // Si no hay serie seleccionada, mostrar todos los caudales
        if(serieSeleccionada == "Seleccionar"){
            caudalSelect.innerHTML = `
                <option value="0">Seleccionar</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="32">32</option>
                <option value="78">78</option>
                <option value="93">93</option>
                <option value="102">102</option>
                <option value="139">139</option>
                <option value="350">350</option>
                <option value="552">552</option>
                <option value="1896">1896</option>
                <option value="2900">2900</option>
            `;
            // Restaurar selección si sigue siendo válida
            if(valorActualCaudal != "0") caudalSelect.value = valorActualCaudal;
            return;
        }
        
        // Filtrar por serie
        let sistemasFiltrados = sistema_ANDE.filter(sistema => sistema && sistema.serieBomba == serieSeleccionada);
        
        // Si hay presión seleccionada, filtrar también por presión
        if(presionSeleccionada != "0" && presionSeleccionada != ""){
            let presionNum = parseFloat(presionSeleccionada);
            sistemasFiltrados = sistemasFiltrados.filter(sistema => sistema.presionMax == presionNum);
        }
        
        // Obtener valores únicos de caudal
        let caudalesUnicos = [...new Set(sistemasFiltrados.map(s => s.caudalMax))].sort((a,b) => a-b);
        
        // Reconstruir el select
        caudalSelect.innerHTML = '<option value="0">Seleccionar</option>';
        caudalesUnicos.forEach(caudal => {
            caudalSelect.innerHTML += `<option value="${caudal}">${caudal}</option>`;
        });
        
        // Restaurar selección si el valor todavía existe en las nuevas opciones
        if(valorActualCaudal != "0" && caudalesUnicos.includes(parseFloat(valorActualCaudal))){
            caudalSelect.value = valorActualCaudal;
        }
    }
    
    
    function mostrarSistemas(){
    
        // Actualizar opciones de Presión según Serie de Bomba
        actualizarOpcionesPresion();
        
        // Actualizar opciones de Caudal según Serie de Bomba y Presión
        actualizarOpcionesCaudal();
   
        // Controlar visibilidad de selectores condicionales
        x = document.getElementById('N_bombas');
        y = x.options[x.selectedIndex].text;
        
        const seleccionTIP = document.getElementById("seleccionTransmisorPresion");
        const seleccionFIT = document.getElementById("seleccionTransmisorCaudal");

        if(y == "Seleccionar"){
            seleccionTIP.style.display = "none"; 
            seleccionFIT.style.display = "none"; 
        }
        else if(y == "1") {
            seleccionTIP.style.display = "flex"; 
            seleccionFIT.style.display = "none"; 
        } 
        else if(y == "2") {
            // Para 2 bombas, verificar si hay opciones con sensor de flujo disponibles
            // en los sistemas filtrados actuales
            let sistemasConSensorFlujo = verificarDisponibilidadSensorFlujo();
            
            seleccionTIP.style.display = "none";
            
            if(sistemasConSensorFlujo){
                seleccionFIT.style.display = "flex"; 
            } else {
                seleccionFIT.style.display = "none";
            }
        } 

        // Actualizar tabla filtrada
        populateTableFiltered();
    }
    
    // Función para verificar si hay sistemas con sensor de flujo disponibles
    function verificarDisponibilidadSensorFlujo(){
        let serieSelect = document.getElementById('Serie_bomba');
        let presionSelect = document.getElementById('P_max');
        let caudalSelect = document.getElementById('Caudal_max');
        let numBombasSelect = document.getElementById('N_bombas');
        let clasificacionSelect = document.getElementById('Class_Area');
        
        // Obtener valores seleccionados
        let serie = serieSelect.options[serieSelect.selectedIndex].text;
        let presion = presionSelect.options[presionSelect.selectedIndex].value;
        let caudal = caudalSelect.options[caudalSelect.selectedIndex].value;
        let numBombas = numBombasSelect.options[numBombasSelect.selectedIndex].text;
        let clasificacion = clasificacionSelect.options[clasificacionSelect.selectedIndex].text;
        
        // Filtrar sistemas
        let sistemasFiltrados = sistema_ANDE.filter(sistema => {
            if(!sistema) return false;
            
            if(serie != "Seleccionar" && sistema.serieBomba != serie) return false;
            if(presion != "0" && presion != "" && sistema.presionMax != parseFloat(presion)) return false;
            if(caudal != "0" && caudal != "" && sistema.caudalMax != parseFloat(caudal)) return false;
            if(numBombas != "Seleccionar" && sistema.numBombas.toString() != numBombas) return false;
            if(clasificacion != "Seleccionar" && sistema.clasificacion != clasificacion) return false;
            
            return true;
        });
        
        // Verificar si hay al menos un sistema con sensor de flujo = "SI"
        return sistemasFiltrados.some(sistema => sistema.sensorFlujo == "SI");
    }
    
    function populateTable() {
        const tableBody = document.getElementById('sistemaANDETable').getElementsByTagName('tbody')[0];
    
        sistema_ANDE.forEach((sistema, index) => {
            if (sistema) {
                let row = tableBody.insertRow();
                row.insertCell(0).textContent = sistema.codANDE;
                row.insertCell(1).textContent = sistema.caudal;
                row.insertCell(2).textContent = sistema.numBombas;
                row.insertCell(3).textContent = sistema.Pmax;
                row.insertCell(4).textContent = sistema.Clasificacion;
                row.insertCell(5).textContent = sistema.PIT ? 'Sí' : 'No';
                row.insertCell(6).textContent = sistema.FIT ? 'Sí' : 'No';
                row.insertCell(7).textContent = sistema.precio;
            }
        });
    }
    
    
    function populateTableFiltered() {

        /*
        console.log("hola");
        console.log(document.getElementById('Caudal_max').value);
        console.log(sistema_ANDE.length)
        */
        
        let sistema_ANDE_Filtered=[];
        sistema_ANDE_Filtered= sistema_ANDE;
                
        // Filtro por Serie de Bomba
        x = document.getElementById('Serie_bomba');
        if(x){
            y=x.options[x.selectedIndex].text;
            if(y!="Seleccionar"){
                sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.serieBomba==y)
            }
        }
    
        // Filtro por Caudal máximo
        x = document.getElementById('Caudal_max');
        if(x){
            y=x.options[x.selectedIndex].value;
            if(y!="0" && y!=""){
                let caudalNum = parseFloat(y);
                sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.caudalMax==caudalNum)
            }
        }
    
        x = document.getElementById('N_bombas');
        y=x.options[x.selectedIndex].text;
        if(y!="Seleccionar"){
        console.log(y);
        console.log(typeof y);
        sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.numBombas.toString()==y)
        console.log("largo del filtrado" + sistema_ANDE_Filtered.length);
        }
    
        // Filtro por Presión máxima
        x = document.getElementById('P_max');
        if(x){
            y=x.options[x.selectedIndex].value;
            if(y!="0" && y!=""){
                let presionNum = parseFloat(y);
                sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.presionMax==presionNum)
            }
        }
    
        // Filtro por Clasificación de área
        x = document.getElementById('Class_Area');
        if(x){
            y=x.options[x.selectedIndex].text;
            if(y!="Seleccionar"){
                sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.clasificacion==y)
            }
        }
    
        // Filtro por Incluye PIT
        x = document.getElementById('Trans_Presion');
        if(x){
            y=x.options[x.selectedIndex].text;
            if(y!="Seleccionar"){
                sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.incluyePIT==y)
            }
        }

        
        // Filtro por Sensor de flujo
        x = document.getElementById('Trans_Flujo');
        if(x){
            y=x.options[x.selectedIndex].text;
            if(y!="Seleccionar"){
                sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.sensorFlujo==y)
            }
        }
        

        
        
        document.getElementById("sistemaANDETable").querySelector("tbody").innerHTML="";    
        const tableBody = document.getElementById('sistemaANDETable').getElementsByTagName('tbody')[0];
        sistema_ANDE_Filtered.forEach((sistema, index) => {
            if (sistema) {
                let row = tableBody.insertRow();
                row.insertCell(0).textContent = sistema.item;
                row.insertCell(1).textContent = sistema.serieBomba;
                row.insertCell(2).textContent = sistema.numBombas;
                row.insertCell(3).textContent = sistema.caudalMin;
                row.insertCell(4).textContent = sistema.caudalMax;
                row.insertCell(5).textContent = sistema.presionMax;
                row.insertCell(6).textContent = sistema.clasificacion;
                row.insertCell(7).textContent = sistema.incluyePIT;
                row.insertCell(8).textContent = sistema.sensorFlujo;
                row.insertCell(9).innerHTML = `<a href="#" onclick="mostrarDetalles(${sistema.codANDE})">${sistema.codANDE}</a>`;
                
            }

           

        });
    }
    
    /*
    function mostrarDetalles(codigoAnde)){



        let desc = document.getElementById("resultadosDimensionamiento");
        desc.innerHTML=sistema.descripcionSistema();
        console.log(sistema.descripcionSistema());

    }
    */
   

    // Función que se ejecutará cuando se haga clic en un enlace
function mostrarDetalles(id) {

    console.log("Estamos en la función mostrar detalles");
    console.log("ID:  "+ id);
    console.log("Sistemas");
    console.log(sistema_ANDE);

    // Buscar el objeto en la lista por su id, filtrando elementos undefined
    let sistemaSeleccionado = sistema_ANDE.find(sistema => sistema && sistema.codANDE === id);
    
    if (sistemaSeleccionado) {
        let desc = document.getElementById("descripcionSistema");
        if(desc) {
            desc.innerHTML = sistemaSeleccionado.descripcionSistema();
        }
    } else {
        alert("Sistema no encontrado.");
    }
}

// Función para resetear todos los filtros
function resetearFiltros() {
    // Resetear todos los selectores a "Seleccionar"
    document.getElementById('Serie_bomba').value = "0";
    document.getElementById('N_bombas').value = "0";
    document.getElementById('P_max').value = "0";
    document.getElementById('Caudal_max').value = "0";
    document.getElementById('Class_Area').value = "0";
    document.getElementById('Trans_Presion').value = "0";
    document.getElementById('Trans_Flujo').value = "0";
    
    // Ocultar selectores condicionales
    document.getElementById('seleccionTransmisorPresion').style.display = "none";
    document.getElementById('seleccionTransmisorCaudal').style.display = "none";
    
    // Restaurar todas las opciones de Presión
    document.getElementById('P_max').innerHTML = `
        <option value="0">Seleccionar</option>
        <option value="285">285</option>
        <option value="350">350</option>
        <option value="740">740</option>
        <option value="1600">1600</option>
        <option value="2400">2400</option>
        <option value="2900">2900</option>
    `;
    
    // Restaurar todas las opciones de Caudal
    document.getElementById('Caudal_max').innerHTML = `
        <option value="0">Seleccionar</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="32">32</option>
        <option value="78">78</option>
        <option value="93">93</option>
        <option value="102">102</option>
        <option value="139">139</option>
        <option value="350">350</option>
        <option value="552">552</option>
        <option value="1896">1896</option>
        <option value="2900">2900</option>
    `;
    
    // Limpiar la tabla
    document.getElementById("sistemaANDETable").querySelector("tbody").innerHTML = "";
    
    // Limpiar el panel de descripción del sistema
    let desc = document.getElementById("descripcionSistema");
    if(desc) {
        desc.innerHTML = "";
    }
}
    
   