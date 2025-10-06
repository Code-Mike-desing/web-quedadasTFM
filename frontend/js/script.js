document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("formularioModal");
  const btnAbrir = document.getElementById("btnSuscribirse");
  const btnCerrar = document.getElementById("cerrarModal");
  const formulario = document.getElementById("formularioRegistro");

  btnAbrir.onclick = () => modal.classList.remove("oculto");
  btnCerrar.onclick = () => modal.classList.add("oculto");
  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    try {
      const res = await fetch("http://localhost:3000/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, contrasena }),
      });

      const data = await res.json();
      alert(data.mensaje || "Registro exitoso");
      formulario.reset();
      modal.classList.add("oculto");
    } catch (err) {
      alert("Error en el registro");
    }
  });
});