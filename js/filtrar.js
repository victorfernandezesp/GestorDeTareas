document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clickDWEC").addEventListener("click", filtrarDWEC);
    document.getElementById("clickDWES").addEventListener("click", filtrarDWES);
    document.getElementById("clickDIW").addEventListener("click", filtrarDIW);
    document.getElementById("clickDAWEB").addEventListener("click", filtrarDAWEB);
    document.getElementById("clickHLC").addEventListener("click", filtrarHLC);
    document.getElementById("clickEMP").addEventListener("click", filtrarEMP);
    document.getElementById("mostrar_todo").addEventListener("click", mostrarTodo);
    
    function mostrarTodo() {
        document.getElementById("asignaturaDWES").style.display = "block";
        document.getElementById("asignaturaDWEC").style.display = "block";
        document.getElementById("asignaturaDIWEB").style.display = "block";
        document.getElementById("asignaturaDAWEB").style.display = "block";
        document.getElementById("asignaturaHLC").style.display = "block";
        document.getElementById("asignaturaEMP").style.display = "block";

        document.getElementById("tareasDWEC").style.display = "grid";
        document.getElementById("tareasDWES").style.display = "grid";
        document.getElementById("tareasDIWEB").style.display = "grid";
        document.getElementById("tareasDAWEB").style.display = "grid";
        document.getElementById("tareasHLC").style.display = "grid";
        document.getElementById("tareasEMP").style.display = "grid";
    }
    
    function filtrarDWEC() {
        mostrarTodo();
        document.getElementById("asignaturaDWES").style.display = "none";
        document.getElementById("asignaturaDIWEB").style.display = "none";
        document.getElementById("asignaturaDAWEB").style.display = "none";
        document.getElementById("asignaturaHLC").style.display = "none";
        document.getElementById("asignaturaEMP").style.display = "none";

        document.getElementById("tareasDWES").style.display = "none";
        document.getElementById("tareasDIWEB").style.display = "none";
        document.getElementById("tareasDAWEB").style.display = "none";
        document.getElementById("tareasHLC").style.display = "none";
        document.getElementById("tareasEMP").style.display = "none";
    }
    function filtrarDWES() {
        mostrarTodo();
        document.getElementById("asignaturaDWEC").style.display = "none";
        document.getElementById("asignaturaDIWEB").style.display = "none";
        document.getElementById("asignaturaDAWEB").style.display = "none";
        document.getElementById("asignaturaHLC").style.display = "none";
        document.getElementById("asignaturaEMP").style.display = "none";

        document.getElementById("tareasDWEC").style.display = "none";
        document.getElementById("tareasDIWEB").style.display = "none";
        document.getElementById("tareasDAWEB").style.display = "none";
        document.getElementById("tareasHLC").style.display = "none";
        document.getElementById("tareasEMP").style.display = "none";
    }
    function filtrarDIW() {
        mostrarTodo();
        document.getElementById("asignaturaDWES").style.display = "none";
        document.getElementById("asignaturaDWEC").style.display = "none";
        document.getElementById("asignaturaDAWEB").style.display = "none";
        document.getElementById("asignaturaHLC").style.display = "none";
        document.getElementById("asignaturaEMP").style.display = "none";

        document.getElementById("tareasDWEC").style.display = "none";
        document.getElementById("tareasDWES").style.display = "none";
        document.getElementById("tareasDAWEB").style.display = "none";
        document.getElementById("tareasHLC").style.display = "none";
        document.getElementById("tareasEMP").style.display = "none";
    }
    function filtrarDAWEB() {
        mostrarTodo();
        document.getElementById("asignaturaDWES").style.display = "none";
        document.getElementById("asignaturaDWEC").style.display = "none";
        document.getElementById("asignaturaDIWEB").style.display = "none";
        document.getElementById("asignaturaHLC").style.display = "none";
        document.getElementById("asignaturaEMP").style.display = "none";

        document.getElementById("tareasDWEC").style.display = "none";
        document.getElementById("tareasDWES").style.display = "none";
        document.getElementById("tareasDIWEB").style.display = "none";
        document.getElementById("tareasHLC").style.display = "none";
        document.getElementById("tareasEMP").style.display = "none";
    }
    function filtrarHLC() {
        mostrarTodo();
        document.getElementById("asignaturaDWES").style.display = "none";
        document.getElementById("asignaturaDWEC").style.display = "none";
        document.getElementById("asignaturaDIWEB").style.display = "none";
        document.getElementById("asignaturaDAWEB").style.display = "none";
        document.getElementById("asignaturaEMP").style.display = "none";

        document.getElementById("tareasDWEC").style.display = "none";
        document.getElementById("tareasDWES").style.display = "none";
        document.getElementById("tareasDIWEB").style.display = "none";
        document.getElementById("tareasDAWEB").style.display = "none";
        document.getElementById("tareasEMP").style.display = "none";
    }
    function filtrarEMP() {
        mostrarTodo();

        document.getElementById("asignaturaDWES").style.display = "none";
        document.getElementById("asignaturaDWEC").style.display = "none";
        document.getElementById("asignaturaDIWEB").style.display = "none";
        document.getElementById("asignaturaDAWEB").style.display = "none";
        document.getElementById("asignaturaHLC").style.display = "none";
        
        document.getElementById("tareasDWEC").style.display = "none";
        document.getElementById("tareasDWES").style.display = "none";
        document.getElementById("tareasDIWEB").style.display = "none";
        document.getElementById("tareasDAWEB").style.display = "none";
        document.getElementById("tareasHLC").style.display = "none";
    }

});