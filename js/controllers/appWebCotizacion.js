const motos = [
  // Yamaha
  {
    marca: "Yamaha",
    modelo: "MT-03 FI",
    precio: "₡4,090,000",
    imagen: "img/MT-03_FI.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Bicilíndrico en línea, 4 tiempos, DOHC, refrigerado por líquido, inyección electrónica.</li>
    <li><strong>Cilindrada:</strong> 321 cc.</li>
    <li><strong>Potencia:</strong> 42 hp @ 10,750 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Disco delantero de 298 mm y trasero de 220 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 110/70 R17 y trasera 140/70 R17.</li>
    <li><strong>Peso total:</strong> 168 kg con líquidos.</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline twin-cylinder, 4-stroke, DOHC, liquid-cooled, electronic fuel injection.</li>
    <li><strong>Displacement:</strong> 321 cc.</li>
    <li><strong>Power:</strong> 42 hp @ 10,750 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Front disc 298 mm and rear disc 220 mm, both with ABS.</li>
    <li><strong>Tires:</strong> Front 110/70 R17 and rear 140/70 R17.</li>
    <li><strong>Total weight:</strong> 168 kg with fluids.</li>
  </ul>
`,
    },
  },
  {
    marca: "Yamaha",
    modelo: "MT-07 FI",
    precio: "₡6,595,000",
    imagen: "img/MT-07_FI.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> CP2 (bicilíndrico en línea), refrigerado por líquido, 4 válvulas por cilindro, DOHC.</li>
    <li><strong>Cilindrada:</strong> 689 cc.</li>
    <li><strong>Potencia:</strong> 73 hp a 8,750 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Delantero de doble disco hidráulico de 298 mm y trasero disco hidráulico de 245 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 180/55 ZR17.</li>
    <li><strong>Peso total:</strong> 183 kg.</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> CP2 (inline twin-cylinder), liquid-cooled, 4 valves per cylinder, DOHC.</li>
    <li><strong>Displacement:</strong> 689 cc.</li>
    <li><strong>Power:</strong> 73 hp at 8,750 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Front dual hydraulic disc 298 mm and rear hydraulic disc 245 mm, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 180/55 ZR17.</li>
    <li><strong>Total weight:</strong> 183 kg.</li>
  </ul>
  `,
    },
  },

  {
    marca: "Yamaha",
    modelo: "MT-09 FI",
    precio: "₡9,200,000",
    imagen: "img/MT-09_FI.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 3 cilindros, refrigerado por líquido, DOHC, 4 válvulas, inyección electrónica.</li>
    <li><strong>Cilindrada:</strong> 890 cc.</li>
    <li><strong>Potencia:</strong> 119 hp a 10,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Delantero doble disco de 298 mm y trasero disco de 245 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 R17 y trasera 180/55 R17.</li>
    <li><strong>Peso total:</strong> 193 kg.</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> 3-cylinder, liquid-cooled, DOHC, 4 valves, electronic fuel injection.</li>
    <li><strong>Displacement:</strong> 890 cc.</li>
    <li><strong>Power:</strong> 119 hp at 10,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Front dual disc 298 mm and rear disc 245 mm, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 R17 and rear 180/55 R17.</li>
    <li><strong>Total weight:</strong> 193 kg.</li>
  </ul>
  `,
    },
  },

  {
    marca: "Yamaha",
    modelo: "YZF-R3 FI",
    precio: "₡4,490,000",
    imagen: "img/YZF-R3_FI.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Inyección electrónica, bi-cilíndrico, 4 válvulas por cilindro, DOHC, enfriado por líquido.</li>
    <li><strong>Cilindrada:</strong> 321 cc.</li>
    <li><strong>Potencia:</strong> 42 hp a 10,750 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Delantero con disco hidráulico de 298 mm y trasero con disco hidráulico de 220 mm. Sistema ABS.</li>
    <li><strong>Llantas:</strong> Delantera 110/70-17M/C 54H y trasera 140/70-17M/C 66H (tubeless).</li>
    <li><strong>Peso total:</strong> 169 kg.</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Electronic fuel injection, twin-cylinder, 4 valves per cylinder, DOHC, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 321 cc.</li>
    <li><strong>Power:</strong> 42 hp at 10,750 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Front hydraulic disc 298 mm and rear hydraulic disc 220 mm. ABS system.</li>
    <li><strong>Tires:</strong> Front 110/70-17M/C 54H and rear 140/70-17M/C 66H (tubeless).</li>
    <li><strong>Total weight:</strong> 169 kg.</li>
  </ul>
  `,
    },
  },

  {
    marca: "Yamaha",
    modelo: "YZF-R1",
    precio: "₡13,590,000",
    imagen: "img/YZF-R1.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 tiempos, 4 cilindros en línea DOHC, 16 válvulas, inyectado con YCC-T y YCC-I.</li>
    <li><strong>Cilindrada:</strong> 998 cc.</li>
    <li><strong>Potencia:</strong> 200 hp a 13,500 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Delantero doble disco hidráulico de 320 mm con UBS y ABS de 4 pistones, y trasero disco hidráulico de 220 mm con UBS y ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70ZR17M/C (58W) sin tubo y trasera 190/55ZR17M/C (75W) sin tubo.</li>
    <li><strong>Peso total:</strong> 201 kg.</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> 4-stroke, 4-cylinder inline DOHC, 16 valves, fuel injected with YCC-T and YCC-I.</li>
    <li><strong>Displacement:</strong> 998 cc.</li>
    <li><strong>Power:</strong> 200 hp at 13,500 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Dual front 320 mm hydraulic discs with UBS and 4-piston ABS, rear 220 mm hydraulic disc with UBS and ABS.</li>
    <li><strong>Tires:</strong> Front 120/70ZR17M/C (58W) tubeless and rear 190/55ZR17M/C (75W) tubeless.</li>
    <li><strong>Total weight:</strong> 201 kg.</li>
  </ul>
  `,
    },
  },

  // Honda
  {
    marca: "Honda",
    modelo: "CBR1000RR",
    precio: "₡14,550,000",
    imagen: "img/CBR1000RR-R.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea, DOHC, refrigerado por líquido, con inyección electrónica PGM-DSFI.</li>
    <li><strong>Cilindrada:</strong> 999 cc.</li>
    <li><strong>Potencia:</strong> 189 hp a 13,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 330 mm con pinzas radiales y disco trasero de 220 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 190/50 ZR17.</li>
    <li><strong>Peso total:</strong> 196 kg.</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder, DOHC, liquid-cooled, with PGM-DSFI electronic fuel injection.</li>
    <li><strong>Displacement:</strong> 999 cc.</li>
    <li><strong>Power:</strong> 189 hp at 13,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Dual front 330 mm discs with radial calipers and rear 220 mm disc, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 190/50 ZR17.</li>
    <li><strong>Total weight:</strong> 196 kg.</li>
  </ul>
  `,
    },
  },

  {
    marca: "Honda",
    modelo: "CBR600RR",
    precio: "₡7,460,000",
    imagen: "img/CBR600RR.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea, DOHC, 16 válvulas, refrigerado por líquido, con inyección electrónica PGM-DSFI.</li>
    <li><strong>Cilindrada:</strong> 599 cc.</li>
    <li><strong>Potencia:</strong> 121 hp a 14,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 310 mm y disco trasero de 220 mm con ABS opcional.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 180/55 ZR17.</li>
    <li><strong>Peso total:</strong> 194 kg.</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder, DOHC, 16 valves, liquid-cooled, with PGM-DSFI electronic fuel injection.</li>
    <li><strong>Displacement:</strong> 599 cc.</li>
    <li><strong>Power:</strong> 121 hp at 14,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Dual front 310 mm discs and rear 220 mm disc with optional ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 180/55 ZR17.</li>
    <li><strong>Total weight:</strong> 194 kg.</li>
  </ul>
  `,
    },
  },

  {
    marca: "Honda",
    modelo: "CB1000 Hornet",
    precio: "₡7,580,000",
    imagen: "img/CB1000.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea, DOHC, 4 tiempos, refrigerado por líquido, inyección electrónica PGM-FI.</li>
    <li><strong>Cilindrada:</strong> 998 cc.</li>
    <li><strong>Potencia:</strong> 147 hp @ 10,500 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 310 mm con pinzas radiales y disco trasero de 256 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 190/55 ZR17.</li>
    <li><strong>Peso total:</strong> 212 kg.</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder, DOHC, 4-stroke, liquid-cooled, PGM-FI electronic injection.</li>
    <li><strong>Displacement:</strong> 998 cc.</li>
    <li><strong>Power:</strong> 147 hp @ 10,500 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Dual 310 mm front discs with radial calipers and 256 mm rear disc, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 190/55 ZR17.</li>
    <li><strong>Total weight:</strong> 212 kg.</li>
  </ul>
  `,
    },
  },

  {
    marca: "Honda",
    modelo: "CB650R",
    precio: "₡5,410,000",
    imagen: "img/CB650R.jpg",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea, DOHC, 4 tiempos, refrigerado por líquido, con inyección electrónica PGM-FI.</li>
    <li><strong>Cilindrada:</strong> 649 cc.</li>
    <li><strong>Potencia:</strong> 94 hp @ 12,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 310 mm con pinzas radiales Nissin, y disco trasero de 240 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 180/55 ZR17.</li>
    <li><strong>Peso total:</strong> 202 kg (en orden de marcha).</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder, DOHC, 4-stroke, liquid-cooled, with PGM-FI electronic injection.</li>
    <li><strong>Displacement:</strong> 649 cc.</li>
    <li><strong>Power:</strong> 94 hp @ 12,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Dual 310 mm front discs with Nissin radial calipers, and 240 mm rear disc, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 180/55 ZR17.</li>
    <li><strong>Total weight:</strong> 202 kg (ready to ride).</li>
  </ul>
  `,
    },
  },

  // Kawasaki
  {
    marca: "Kawasaki",
    modelo: "NINJA H2 R",
    precio: "₡28,000,000",
    imagen: "img/H2R.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea, 4 tiempos, DOHC, 16 válvulas, con sobrealimentador (supercargador), refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 998 cc.</li>
    <li><strong>Potencia:</strong> 310 hp @ 14,000 rpm (326 hp con RAM air).</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades, con cambio rápido (quickshifter).</li>
    <li><strong>Frenos:</strong> Doble disco frontal de 330 mm Brembo con pinzas radiales y disco trasero de 250 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/600 R17 y trasera 190/650 R17 (slicks para pista).</li>
    <li><strong>Peso total:</strong> 216 kg (peso en seco).</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder, 4-stroke, DOHC, 16 valves, supercharged, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 998 cc.</li>
    <li><strong>Power:</strong> 310 hp @ 14,000 rpm (326 hp with RAM air).</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed, with quickshifter.</li>
    <li><strong>Brakes:</strong> Dual 330 mm front discs with Brembo radial calipers and 250 mm rear disc, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/600 R17 and rear 190/650 R17 (track slicks).</li>
    <li><strong>Total weight:</strong> 216 kg (dry weight).</li>
  </ul>`,
    },
  },

  {
    marca: "Kawasaki",
    modelo: "NINJA ZX-4R",
    precio: "₡4,500,000",
    imagen: "img/ZX4R.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea, DOHC, 16 válvulas, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 399 cc.</li>
    <li><strong>Potencia:</strong> 77 hp (80 hp con RAM Air) @ 14,500 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con embrague asistido y antirrebote.</li>
    <li><strong>Frenos:</strong> Doble disco frontal de 290 mm y disco trasero de 220 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 160/60 ZR17.</li>
    <li><strong>Peso total:</strong> 188 kg.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder, DOHC, 16 valves, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 399 cc.</li>
    <li><strong>Power:</strong> 77 hp (80 hp with RAM Air) @ 14,500 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with assist and slipper clutch.</li>
    <li><strong>Brakes:</strong> Dual 290 mm front discs and 220 mm rear disc, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 160/60 ZR17.</li>
    <li><strong>Total weight:</strong> 188 kg.</li>
  </ul>`,
    },
  },

  {
    marca: "Kawasaki",
    modelo: "Z H2",
    precio: "₡10,800,000",
    imagen: "img/ZH2.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea con supercargador, DOHC, 16 válvulas, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 998 cc.</li>
    <li><strong>Potencia:</strong> 197 hp @ 11,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con quickshifter (KQS).</li>
    <li><strong>Frenos:</strong> Doble disco semiflotante de 320 mm adelante y disco simple de 260 mm atrás, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 190/55 ZR17.</li>
    <li><strong>Peso total:</strong> 239 kg.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder with supercharger, DOHC, 16 valves, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 998 cc.</li>
    <li><strong>Power:</strong> 197 hp @ 11,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with quickshifter (KQS).</li>
    <li><strong>Brakes:</strong> Dual semi-floating 320 mm front discs and single 260 mm rear disc, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 190/55 ZR17.</li>
    <li><strong>Total weight:</strong> 239 kg.</li>
  </ul>`,
    },
  },

  {
    marca: "Kawasaki",
    modelo: "Z650",
    precio: "₡3,650,000",
    imagen: "img/Z650.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Bicilíndrico en paralelo, DOHC, 8 válvulas, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 649 cc.</li>
    <li><strong>Potencia:</strong> 67 hp @ 8,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con embrague asistido y antirrebote.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 300 mm y disco trasero de 220 mm, con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 160/60 ZR17.</li>
    <li><strong>Peso total:</strong> 187 kg en orden de marcha.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Parallel-twin, DOHC, 8 valves, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 649 cc.</li>
    <li><strong>Power:</strong> 67 hp @ 8,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with assist and slipper clutch.</li>
    <li><strong>Brakes:</strong> Dual 300 mm front discs and 220 mm rear disc, with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 160/60 ZR17.</li>
    <li><strong>Total weight:</strong> 187 kg (ready to ride).</li>
  </ul>`,
    },
  },

  // Suzuki
  {
    marca: "Suzuki",
    modelo: "GSX-S1000GT",
    precio: "₡9,060,000",
    imagen: "img/GSX-S1000GT.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea, DOHC, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 999 cc.</li>
    <li><strong>Potencia:</strong> 150 hp a 11,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con quickshifter bidireccional.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 310 mm y disco trasero de 250 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70ZR17, trasera 190/50ZR17.</li>
    <li><strong>Peso total:</strong> 226 kg (en orden de marcha).</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder, DOHC, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 999 cc.</li>
    <li><strong>Power:</strong> 150 hp at 11,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with bidirectional quickshifter.</li>
    <li><strong>Brakes:</strong> Dual front disc 310 mm and rear disc 250 mm, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70ZR17, rear 190/50ZR17.</li>
    <li><strong>Total weight:</strong> 226 kg (ready to ride).</li>
  </ul>`,
    },
  },

  {
    marca: "Suzuki",
    modelo: "GSX-8R",
    precio: "₡5,400,000",
    imagen: "img/GSX-8R.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Bicilíndrico en paralelo, DOHC, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 776 cc.</li>
    <li><strong>Potencia:</strong> 83 hp a 8.500 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con Quick Shifter bidireccional.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 310 mm y disco trasero de 240 mm con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70ZR17 y trasera 180/55ZR17.</li>
    <li><strong>Peso total:</strong> 205 kg.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Parallel-twin, DOHC, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 776 cc.</li>
    <li><strong>Power:</strong> 83 hp at 8,500 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with bidirectional Quick Shifter.</li>
    <li><strong>Brakes:</strong> Dual front discs 310 mm and rear disc 240 mm with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70ZR17, rear 180/55ZR17.</li>
    <li><strong>Total weight:</strong> 205 kg.</li>
  </ul>`,
    },
  },
  {
    marca: "Suzuki",
    modelo: "GSX-R125",
    precio: "₡3,200,000",
    imagen: "img/GSX-R125.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Monocilíndrico, 4 tiempos, DOHC, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 124 cc.</li>
    <li><strong>Potencia:</strong> 15 hp a 10,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Disco delantero de 290 mm y trasero de 187 mm con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 90/80-17 y trasera 130/70-17.</li>
    <li><strong>Peso total:</strong> 134 kg.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Single-cylinder, 4-stroke, DOHC, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 124 cc.</li>
    <li><strong>Power:</strong> 15 hp at 10,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Front disc 290 mm and rear disc 187 mm with ABS.</li>
    <li><strong>Tires:</strong> Front 90/80-17, rear 130/70-17.</li>
    <li><strong>Total weight:</strong> 134 kg.</li>
  </ul>`,
    },
  },

  {
    marca: "Suzuki",
    modelo: "GSX-S1000",
    precio: "₡8,000,000",
    imagen: "img/GSX-S1000.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> 4 cilindros en línea, 4 tiempos, DOHC, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 999 cc.</li>
    <li><strong>Potencia:</strong> 150 hp a 11,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 310 mm con pinzas Brembo y disco trasero de 250 mm.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 190/50 ZR17.</li>
    <li><strong>Peso total:</strong> 214 kg.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Inline 4-cylinder, 4-stroke, DOHC, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 999 cc.</li>
    <li><strong>Power:</strong> 150 hp at 11,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Dual front disc 310 mm with Brembo calipers and rear disc 250 mm.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 190/50 ZR17.</li>
    <li><strong>Total weight:</strong> 214 kg.</li>
  </ul>`,
    },
  },

  {
    marca: "Suzuki",
    modelo: "SV650",
    precio: "₡4,000,000",
    imagen: "img/SV650.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> V-Twin 90°, 4 tiempos, 2 cilindros, DOHC, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 645 cc.</li>
    <li><strong>Potencia:</strong> 75 hp a 8,500 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 290 mm y disco trasero de 240 mm, ambos con ABS.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 160/60 ZR17.</li>
    <li><strong>Peso total:</strong> 197 kg en orden de marcha.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> 90° V-Twin, 4-stroke, 2-cylinder, DOHC, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 645 cc.</li>
    <li><strong>Power:</strong> 75 hp at 8,500 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Dual front disc 290 mm and rear disc 240 mm, both with ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 160/60 ZR17.</li>
    <li><strong>Total weight:</strong> 197 kg (ready to ride).</li>
  </ul>`,
    },
  },

  {
    marca: "Suzuki",
    modelo: "GSX-S125",
    precio: "₡2,680,000",
    imagen: "img/GSX-S125.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Monocilíndrico, 4 tiempos, DOHC, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 124 cc.</li>
    <li><strong>Potencia:</strong> 15 hp a 10,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Disco delantero de 290 mm y trasero de 187 mm.</li>
    <li><strong>Llantas:</strong> Delantera 90/80-17 y trasera 130/70-17.</li>
    <li><strong>Peso total:</strong> 133 kg.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Single-cylinder, 4-stroke, DOHC, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 124 cc.</li>
    <li><strong>Power:</strong> 15 hp at 10,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Front disc 290 mm and rear disc 187 mm.</li>
    <li><strong>Tires:</strong> Front 90/80-17 and rear 130/70-17.</li>
    <li><strong>Total weight:</strong> 133 kg.</li>
  </ul>`,
    },
  },

  // KTM
  {
    marca: "KTM",
    modelo: "RC 390",
    precio: "₡3,790,000",
    imagen: "img/RC390.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Monocilíndrico, 4 tiempos, DOHC, refrigerado por líquido, inyección electrónica.</li>
    <li><strong>Cilindrada:</strong> 373 cc.</li>
    <li><strong>Potencia:</strong> 44 hp a 9,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con embrague antirrebote.</li>
    <li><strong>Frenos:</strong> Disco delantero de 320 mm y trasero de 230 mm, ABS en curva.</li>
    <li><strong>Llantas:</strong> Delantera 110/70-17 y trasera 150/60-17.</li>
    <li><strong>Peso total:</strong> 172 kg.</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Single-cylinder, 4-stroke, DOHC, liquid-cooled, electronic injection.</li>
    <li><strong>Displacement:</strong> 373 cc.</li>
    <li><strong>Power:</strong> 44 hp at 9,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with slipper clutch.</li>
    <li><strong>Brakes:</strong> Front disc 320 mm and rear 230 mm, cornering ABS.</li>
    <li><strong>Tires:</strong> Front 110/70-17 and rear 150/60-17.</li>
    <li><strong>Total weight:</strong> 172 kg.</li>
  </ul>`,
    },
  },

  {
    marca: "KTM",
    modelo: "DUKE 1390",
    precio: "₡15,060,000",
    imagen: "img/DUKE1390.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> V-Twin a 75°, 4 tiempos, refrigerado por líquido, inyección electrónica Keihin.</li>
    <li><strong>Cilindrada:</strong> 1,350 cc.</li>
    <li><strong>Potencia:</strong> 190 hp a 10,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con Quickshifter+ (bidireccional).</li>
    <li><strong>Frenos:</strong> Delanteros dobles de 320 mm con pinzas Brembo Stylema, trasero de 240 mm, ABS en curva.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17 y trasera 200/55 ZR17.</li>
    <li><strong>Peso total:</strong> 200 kg (en orden de marcha).</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> 75° V-Twin, 4-stroke, liquid-cooled, Keihin electronic injection.</li>
    <li><strong>Displacement:</strong> 1,350 cc.</li>
    <li><strong>Power:</strong> 190 hp at 10,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with Quickshifter+ (bidirectional).</li>
    <li><strong>Brakes:</strong> Dual front 320 mm with Brembo Stylema calipers, rear 240 mm, cornering ABS.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17 and rear 200/55 ZR17.</li>
    <li><strong>Total weight:</strong> 200 kg (ready to ride).</li>
  </ul>`,
    },
  },

  {
    marca: "KTM",
    modelo: "DUKE 390",
    precio: "₡4,090,000",
    imagen: "img/DUKE390.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Monocilíndrico, 4 tiempos, DOHC, refrigerado por líquido, inyección electrónica.</li>
    <li><strong>Cilindrada:</strong> 398.7 cc.</li>
    <li><strong>Potencia:</strong> 44 hp a 9,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con embrague anti-rebote (Slipper Clutch).</li>
    <li><strong>Frenos:</strong> Disco delantero de 320 mm y trasero de 240 mm, ABS en curva (Bosch 9.3MP).</li>
    <li><strong>Llantas:</strong> Delantera 110/70 R17, trasera 150/60 R17.</li>
    <li><strong>Peso total:</strong> 171 kg (en orden de marcha).</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Single-cylinder, 4-stroke, DOHC, liquid-cooled, electronic injection.</li>
    <li><strong>Displacement:</strong> 398.7 cc.</li>
    <li><strong>Power:</strong> 44 hp at 9,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with slipper clutch.</li>
    <li><strong>Brakes:</strong> Front disc 320 mm and rear 240 mm, cornering ABS (Bosch 9.3MP).</li>
    <li><strong>Tires:</strong> Front 110/70 R17, rear 150/60 R17.</li>
    <li><strong>Total weight:</strong> 171 kg (ready to ride).</li>
  </ul>`,
    },
  },

  {
    marca: "KTM",
    modelo: "DUKE 200",
    precio: "₡2,490,000",
    imagen: "img/DUKE200.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Monocilíndrico, 4 tiempos, DOHC, refrigerado por líquido, inyección electrónica.</li>
    <li><strong>Cilindrada:</strong> 199.5 cc.</li>
    <li><strong>Potencia:</strong> 25 hp a 10,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades.</li>
    <li><strong>Frenos:</strong> Disco delantero de 300 mm y trasero de 230 mm, ABS de doble canal.</li>
    <li><strong>Llantas:</strong> Delantera 110/70 R17, trasera 150/60 R17.</li>
    <li><strong>Peso total:</strong> 159 kg (en orden de marcha).</li>
  </ul>`,
      en: `
  <ul>
    <li><strong>Engine:</strong> Single-cylinder, 4-stroke, DOHC, liquid-cooled, electronic injection.</li>
    <li><strong>Displacement:</strong> 199.5 cc.</li>
    <li><strong>Power:</strong> 25 hp at 10,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed.</li>
    <li><strong>Brakes:</strong> Front disc 300 mm and rear 230 mm, dual-channel ABS.</li>
    <li><strong>Tires:</strong> Front 110/70 R17, rear 150/60 R17.</li>
    <li><strong>Total weight:</strong> 159 kg (ready to ride).</li>
  </ul>`,
    },
  },

  {
    marca: "Ducati",
    modelo: "Panigale V4",
    precio: "₡18,020,000",
    imagen: "img/PanigaleV4.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Desmosedici Stradale V4 a 90°, refrigerado por líquido, con inyección electrónica.</li>
    <li><strong>Cilindrada:</strong> 1,103 cc.</li>
    <li><strong>Potencia:</strong> 215 hp @ 13,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con Ducati Quick Shift (DQS).</li>
    <li><strong>Frenos:</strong> Delantero doble disco de 330 mm Brembo Stylema, trasero de 245 mm con ABS Cornering EVO.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17, trasera 200/60 ZR17 Pirelli Diablo Supercorsa SP.</li>
    <li><strong>Peso total:</strong> 198.5 kg (peso en orden de marcha).</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Desmosedici Stradale V4 at 90°, liquid-cooled, electronic injection.</li>
    <li><strong>Displacement:</strong> 1,103 cc.</li>
    <li><strong>Power:</strong> 215 hp @ 13,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with Ducati Quick Shift (DQS).</li>
    <li><strong>Brakes:</strong> Front dual 330 mm Brembo Stylema discs, rear 245 mm with ABS Cornering EVO.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17, rear 200/60 ZR17 Pirelli Diablo Supercorsa SP.</li>
    <li><strong>Total weight:</strong> 198.5 kg (ready to ride).</li>
  </ul>
  `,
    },
  },
  {
    marca: "Ducati",
    modelo: "Diavel V4",
    precio: "₡20,140,000",
    imagen: "img/DiavelV4.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> V4 Granturismo a 90°, distribución Desmodrónica, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 1,158 cc.</li>
    <li><strong>Potencia:</strong> 168 hp @ 10,750 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con Ducati Quick Shift (DQS) Up & Down.</li>
    <li><strong>Frenos:</strong> Delantero doble disco de 330 mm con pinzas Brembo Stylema, trasero de 265 mm, ABS Cornering EVO.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17, trasera 240/45 ZR17 Pirelli Diablo Rosso III.</li>
    <li><strong>Peso total:</strong> 236 kg (en orden de marcha).</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> V4 Granturismo at 90°, Desmodromic distribution, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 1,158 cc.</li>
    <li><strong>Power:</strong> 168 hp @ 10,750 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with Ducati Quick Shift (DQS) Up & Down.</li>
    <li><strong>Brakes:</strong> Front dual 330 mm discs with Brembo Stylema calipers, rear 265 mm, ABS Cornering EVO.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17, rear 240/45 ZR17 Pirelli Diablo Rosso III.</li>
    <li><strong>Total weight:</strong> 236 kg (ready to ride).</li>
  </ul>
  `,
    },
  },
  {
    marca: "Ducati",
    modelo: "Monster",
    precio: "₡13,700,000",
    imagen: "img/Monster.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Testastretta 11° L-Twin, 4 válvulas por cilindro, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 937 cc.</li>
    <li><strong>Potencia:</strong> 111 hp @ 9,250 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con Ducati Quick Shift (DQS) Up & Down.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 320 mm con pinzas Brembo M4.32, disco trasero de 245 mm, ABS Cornering.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17, trasera 180/55 ZR17 Pirelli Diablo Rosso III.</li>
    <li><strong>Peso total:</strong> 188 kg (en orden de marcha).</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Testastretta 11° L-Twin, 4 valves per cylinder, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 937 cc.</li>
    <li><strong>Power:</strong> 111 hp @ 9,250 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with Ducati Quick Shift (DQS) Up & Down.</li>
    <li><strong>Brakes:</strong> Front dual 320 mm discs with Brembo M4.32 calipers, rear 245 mm disc, ABS Cornering.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17, rear 180/55 ZR17 Pirelli Diablo Rosso III.</li>
    <li><strong>Total weight:</strong> 188 kg (ready to ride).</li>
  </ul>
  `,
    },
  },

  {
    marca: "Ducati",
    modelo: "Streetfighter V4",
    precio: "₡19,020,000",
    imagen: "img/StreetfighterV4.png",
    especificaciones: {
      es: `
  <ul>
    <li><strong>Motor:</strong> Desmosedici Stradale V4 de 90°, 4 tiempos, DOHC, 4 válvulas por cilindro, refrigerado por líquido.</li>
    <li><strong>Cilindrada:</strong> 1,103 cc.</li>
    <li><strong>Potencia:</strong> 208 hp @ 13,000 rpm.</li>
    <li><strong>Arranque:</strong> Eléctrico.</li>
    <li><strong>Transmisión:</strong> 6 velocidades con Ducati Quick Shift (DQS) Up & Down EVO 2.</li>
    <li><strong>Frenos:</strong> Doble disco delantero de 330 mm con pinzas Brembo Stylema, disco trasero de 245 mm, ABS Cornering EVO.</li>
    <li><strong>Llantas:</strong> Delantera 120/70 ZR17, trasera 200/60 ZR17 Pirelli Diablo Rosso Corsa II.</li>
    <li><strong>Peso total:</strong> 201 kg (en orden de marcha).</li>
  </ul>
  `,
      en: `
  <ul>
    <li><strong>Engine:</strong> Desmosedici Stradale V4 at 90°, 4-stroke, DOHC, 4 valves per cylinder, liquid-cooled.</li>
    <li><strong>Displacement:</strong> 1,103 cc.</li>
    <li><strong>Power:</strong> 208 hp @ 13,000 rpm.</li>
    <li><strong>Start:</strong> Electric.</li>
    <li><strong>Transmission:</strong> 6-speed with Ducati Quick Shift (DQS) Up & Down EVO 2.</li>
    <li><strong>Brakes:</strong> Front dual 330 mm discs with Brembo Stylema calipers, rear 245 mm disc, ABS Cornering EVO.</li>
    <li><strong>Tires:</strong> Front 120/70 ZR17, rear 200/60 ZR17 Pirelli Diablo Rosso Corsa II.</li>
    <li><strong>Total weight:</strong> 201 kg (ready to ride).</li>
  </ul>
  `,
    },
  },
];

emailjs.init("rWHIXGE7CvFYcM0in");

const params = new URLSearchParams(window.location.search);
const modeloBuscado = params.get("moto");
const img = document.getElementById("motoImagen");
const modelo = document.getElementById("modeloMoto");
const marca = document.getElementById("marcaMoto");
const precio = document.getElementById("precioMoto");
const specs = document.getElementById("motoSpecs");

const textoCuota = document.getElementById("cuotaTexto");

const moto = motos.find((m) => m.modelo === modeloBuscado);

if (moto) {
  img.src = moto.imagen;
  img.alt = moto.modelo;
  modelo.textContent = moto.modelo;
  marca.textContent = `${moto.marca}`;
  precio.textContent = `${moto.precio}`;
  specs.innerHTML =
    moto.especificaciones || "<p>No hay especificaciones disponibles.</p>";
} else {
  modelo.textContent = "Moto no encontrada.";
}

// Calcular cuota
document.getElementById("plazo").addEventListener("change", function () {
  const precioNum = parseInt(moto.precio.replace(/[₡,]/g, ""));
  const plazo = parseInt(this.value);
  const interes = 0.08;
  const cuota = ((precioNum * (1 + interes)) / plazo).toFixed(0);
  const totalPagar = (precioNum * (1 + interes)).toFixed(0);

  // Mostrar el detalle
  document.getElementById(
    "detallePrecio"
  ).textContent = `₡${precioNum.toLocaleString("es-CR")}`;
  document.getElementById("detallePlazo").textContent = plazo;
  document.getElementById("detalleInteres").textContent = (
    interes * 100
  ).toFixed(0);
  document.getElementById("detalleCuota").textContent = `₡${parseInt(
    cuota
  ).toLocaleString("es-CR")}`;
  document.getElementById("detalleTotal").textContent = `₡${parseInt(
    totalPagar
  ).toLocaleString("es-CR")}`;
  document.getElementById("detalleCotizacion").classList.add("visible");
});

emailjs.init("rWHIXGE7CvFYcM0in");

// Selecciona el formulario
const subscriptionForm = document.getElementById("formCotizacion");

// Agrega el evento de envío al formulario
subscriptionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.querySelector('input[name="nombre"]').value;
  const cedula = document.querySelector('input[name="cedula"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const plazo = document.getElementById("plazo").value;

  const precioNum = parseInt(moto.precio.replace(/[₡,]/g, ""));
  const interes = 0.08;
  const precioFinal = ((precioNum * (1 + interes)) / plazo).toFixed(0);
  const precioTotal = (precioNum * (1 + interes)).toFixed(0);

  const templateParams = {
    user_name: nombre,
    user_id: cedula,
    user_phone: telefono,
    user_email: correo,
    moto_marca: moto.marca,
    moto_modelo: moto.modelo,
    moto_precio: moto.precio,
    plazo: plazo,
    precio_final: `₡${parseInt(precioFinal).toLocaleString("es-CR")}`,
    precio_total: `₡${parseInt(precioTotal).toLocaleString("es-CR")}`,
  };

  emailjs.send("service_djghvh7", "template_wghlvj1", templateParams).then(
    function (response) {
      console.log("Correo enviado con éxito!", response.status, response.text);
      Swal.fire({
        icon: "success",
        title: "¡Cotización enviada!",
        text: "Hemos enviado los detalles de tu cotización a tu correo.",
      });
    },
    function (error) {
      console.error("Error al enviar el correo:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar la cotización. Inténtalo de nuevo más tarde.",
      });
    }
  );

  subscriptionForm.reset();
});
