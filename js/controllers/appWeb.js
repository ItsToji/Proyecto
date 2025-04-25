const motos = [
  // Yamaha
  {
    marca: "Yamaha",
    modelo: "MT-03 FI",
    precio: "₡4,090,000",
    imagen: "img/MT-03_FI.jpg",
  },
  {
    marca: "Yamaha",
    modelo: "MT-07 FI",
    precio: "₡6,595,000",
    imagen: "img/MT-07_FI.jpg",
  },
  {
    marca: "Yamaha",
    modelo: "MT-09 FI",
    precio: "₡9,200,000",
    imagen: "img/MT-09_FI.jpg",
  },
  {
    marca: "Yamaha",
    modelo: "YZF-R3 FI",
    precio: "₡4,490,000",
    imagen: "img/YZF-R3_FI.jpg",
  },
  {
    marca: "Yamaha",
    modelo: "YZF-R1",
    precio: "₡13,590,000",
    imagen: "img/YZF-R1.jpg",
  },

  // Honda
  {
    marca: "Honda",
    modelo: "CBR1000RR",
    precio: "₡14,550,000",
    imagen: "img/CBR1000RR-R.jpg",
  },

  {
    marca: "Honda",
    modelo: "CBR600RR",
    precio: "₡7,460,000",
    imagen: "img/CBR600RR.jpg",
  },
  {
    marca: "Honda",
    modelo: "CB1000 Hornet",
    precio: "₡7,580,000",
    imagen: "img/CB1000.jpg",
  },
  {
    marca: "Honda",
    modelo: "CB650R",
    precio: "₡5,410,000",
    imagen: "img/CB650R.jpg",
  },

  // Kawasaki
  {
    marca: "Kawasaki",
    modelo: "NINJA H2 R",
    precio: "₡28,000,000",
    imagen: "img/H2R.png",
  },
  {
    marca: "Kawasaki",
    modelo: "NINJA ZX-4R",
    precio: "₡4,500,000",
    imagen: "img/ZX4R.png",
  },
  {
    marca: "Kawasaki",
    modelo: "Z H2",
    precio: "₡10,800,000",
    imagen: "img/ZH2.png",
  },
  {
    marca: "Kawasaki",
    modelo: "Z650",
    precio: "₡3,650,000",
    imagen: "img/Z650.png",
  },

  // Suzuki
  {
    marca: "Suzuki",
    modelo: "GSX-S1000GT",
    precio: "₡9,060,000",
    imagen: "img/GSX-S1000GT.png",
  },
  {
    marca: "Suzuki",
    modelo: "GSX-8R",
    precio: "₡5,400,000",
    imagen: "img/GSX-8R.png",
  },
  {
    marca: "Suzuki",
    modelo: "GSX-R125",
    precio: "₡3,200,000",
    imagen: "img/GSX-R125.png",
  },
  {
    marca: "Suzuki",
    modelo: "GSX-S1000",
    precio: "₡8,000,000",
    imagen: "img/GSX-S1000.png",
  },
  {
    marca: "Suzuki",
    modelo: "SV650",
    precio: "₡4,000,000",
    imagen: "img/SV650.png",
  },
  {
    marca: "Suzuki",
    modelo: "GSX-S125",
    precio: "₡2,680,000",
    imagen: "img/GSX-S125.png",
  },

  // KTM
  {
    marca: "KTM",
    modelo: "RC 390",
    precio: "₡3,790,000",
    imagen: "img/RC390.png",
  },
  {
    marca: "KTM",
    modelo: "DUKE 1390",
    precio: "₡15,060,000",
    imagen: "img/DUKE1390.png",
  },
  {
    marca: "KTM",
    modelo: "DUKE 390",
    precio: "₡4,090,000",
    imagen: "img/DUKE390.png",
  },
  {
    marca: "KTM",
    modelo: "DUKE 200",
    precio: "₡2,490,000",
    imagen: "img/DUKE200.png",
  },

  // Ducati
  {
    marca: "Ducati",
    modelo: "Panigale V4",
    precio: "₡18,020,000",
    imagen: "img/PanigaleV4.png",
  },
  {
    marca: "Ducati",
    modelo: "Diavel V4",
    precio: "₡20,140,000",
    imagen: "img/DiavelV4.png",
  },
  {
    marca: "Ducati",
    modelo: "Monster",
    precio: "₡13,700,000",
    imagen: "img/Monster.png",
  },
  {
    marca: "Ducati",
    modelo: "Streetfighter V4",
    precio: "₡19,020,000",
    imagen: "img/StreetfighterV4.png",
  },
];

const contenedor = document.getElementById("contenedorMotos");
const filtro = document.getElementById("filtroMarca");

function mostrarMotos(lista) {
  contenedor.innerHTML = "";
  lista.forEach((moto) => {
    const card = document.createElement("div");
    card.classList.add("moto-card");
    card.innerHTML = `
      <img src="${moto.imagen}" alt="${moto.modelo}" onerror="this.src='img/no-img.png'">
      <div class="moto-info">
        <h3>${moto.modelo}</h3>
        <p>${moto.precio}</p>
        <p>${moto.marca}</p>
      </div>
    `;
    card.onclick = () => {
      window.location.href = `appWebCotización.html?moto=${encodeURIComponent(
        moto.modelo
      )}`;
    };
    contenedor.appendChild(card);
  });
}

mostrarMotos(motos);

filtro.addEventListener("change", () => {
  const marcaSeleccionada = filtro.value;
  if (marcaSeleccionada === "todas") {
    mostrarMotos(motos);
  } else {
    const filtradas = motos.filter((m) => m.marca === marcaSeleccionada);
    mostrarMotos(filtradas);
  }
});
