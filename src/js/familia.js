export const familia = {
  "abuelos": {
    "paternos": [
      {
        "nombre": "Julio Cesar",
        "sexo": "masculino",
        "lugar_nacimiento": "Tui",
        "pais": "ESPAÑA",
        "fecha_nacimiento": "1909-08-11",
        "estado_civil": "casado/a",
        "foto": "./assets/img/abuelo_paterno.jpg",
        "miniatura": "./assets/img/abuelo_paterno.jpg",
        "parentesco": "abuelo/a paterno",
        "id": "abu1",
        "conyuge_id": "abu2"
      },
      {
        "nombre": "Concha",
        "sexo": "femenino",
        "lugar_nacimiento": "Tui",
        "pais": "ESPAÑA",
        "fecha_nacimiento": "1909-08-11",
        "estado_civil": "casado/a",
        "foto": "./assets/img/abuela_paterna.jpg",
        "miniatura": "./assets/img/abuela_paterna.jpg",
        "parentesco": "abuelo/a paterno",
        "id": "abu2",
        "conyuge_id": "abu1"
      }
    ],
    "maternos": [
      {
        "nombre": "Pepe",
        "sexo": "masculino",
        "lugar_nacimiento": "Tui",
        "pais": "ESPAÑA",
        "fecha_nacimiento": "1909-08-11",
        "estado_civil": "casado/a",
        "foto": "./assets/img/abuelo_materno.jpg",
        "miniatura": "./assets/img/abuelo_materno.jpg",
        "parentesco": "abuelo/a materno",
        "id": "abu3",
        "conyuge_id": "abu4"
      },
      {
        "nombre": "Viruca",
        "sexo": "femenino",
        "lugar_nacimiento": "Tui",
        "pais": "ESPAÑA",
        "fecha_nacimiento": "1909-08-11",
        "estado_civil": "casado/a",
        "foto": "./assets/img/abuela_materna.jpg",
        "miniatura": "./assets/img/abuela_materna.jpg",
        "parentesco": "abuelo/a materno",
        "id": "abu4",
        "conyuge_id": "abu3"
      }
    ]
  },
  "padres": [
    {
      "nombre": "Francisco Javier",
      "sexo": "masculino",
      "lugar_nacimiento": "Tui",
      "pais": "ESPAÑA",
      "fecha_nacimiento": "1974-09-09",
      "estado_civil": "casado/a",
      "foto": "./assets/img/padre.jpg",
      "miniatura": "./assets/img/padre.jpg",
      "parentesco": "padre",
      "id": "pad1",
      "conyuge_id": "pad2"
    },
    {
      "nombre": "Nombre de la madre",
      "sexo": "femenino",
      "lugar_nacimiento": "Tui",
      "pais": "ESPAÑA",
      "fecha_nacimiento": "1971-11-09",
      "estado_civil": "casado/a",
      "foto": "./assets/img/madre.jpg",
      "miniatura": "./assets/img/madre.jpg",
      "parentesco": "madre",
      "id": "pad2",
      "conyuge_id": "pad1"
    }
  ],
  "hermanos": [
    {
      "nombre": "Ernesto",
      "sexo": "masculino",
      "lugar_nacimiento": "Tui",
      "pais": "ESPAÑA",
      "fecha_nacimiento": "1995-08-11",
      "estado_civil": "casado/a",
      "foto": "./assets/img/hermano1.jpg",
      "miniatura": "./assets/img/hermano1.jpg",
      "esposa": {
        "nombre": "Iris",
        "sexo": "femenino",
        "lugar_nacimiento": "Tui",
        "pais": "ESPAÑA",
        "fecha_nacimiento": "1995-08-25",
        "estado_civil": "casado/a",
        "parentesco": "cuñada",
        "foto": "./assets/img/cunada.jpg",
        "miniatura": "./assets/img/cunada.jpg",
        "id": "esp1",
        "conyuge_id": "her1"
      },
      "hijos": [
        {
          "nombre": "Jose Maria",
          "sexo": "masculino",
          "lugar_nacimiento": "Tui",
          "pais": "ESPAÑA",
          "fecha_nacimiento": "1995-08-11",
          "estado_civil": "soltero",
          "foto": "./assets/img/sobrino1.jpg",
          "miniatura": "./assets/img/sobrino1.jpg",
          "parentesco": "sobrino",
          "id": "hij1",
          "padre_id": "her1",
          "madre_id": "esp1"
        },
        {
          "nombre": "Pepa Loba",
          "sexo": "femenino",
          "lugar_nacimiento": "Tui",
          "pais": "ESPAÑA",
          "fecha_nacimiento": "1995-08-11",
          "estado_civil": "soltera",
          "foto": "./assets/img/sobrina1.jpg",
          "miniatura": "./assets/img/sobrina1.jpg",
          "parentesco": "sobrina",
          "id": "hij2",
          "padre_id": "her1",
          "madre_id": "esp1"
        },
        {
          "nombre": "El niño es adoptado",
          "sexo": "masculino",
          "lugar_nacimiento": "Tui",
          "pais": "ESPAÑA",
          "fecha_nacimiento": "1995-08-11",
          "estado_civil": "soltero",
          "foto": "./assets/img/sobrino2.jpg",
          "miniatura": "./assets/img/sobrino2.jpg",
          "parentesco": "sobrino",
          "id": "hij3",
          "padre_id": "her1",
          "madre_id": "esp1"
        }
      ],
      "parentesco": "hermano",
      "id": "her1",
      "conyuge_id": "esp1"
    },
    {
      "nombre": "Alma",
      "sexo": "femenino",
      "lugar_nacimiento": "Tui",
      "pais": "ESPAÑA",
      "fecha_nacimiento": "1995-08-11",
      "estado_civil": "soltera",
      "foto": "./assets/img/hermana1.jpg",
      "miniatura": "./assets/img/hermana1.jpg",
      "parentesco": "hermana",
      "id": "her2"
    },
    {
      "nombre": "Lucasa",
      "sexo": "femenino",
      "lugar_nacimiento": "Tui",
      "pais": "ESPAÑA",
      "fecha_nacimiento": "1995-08-11",
      "estado_civil": "soltera",
      "foto": "./assets/img/hermana2.jpg",
      "miniatura": "./assets/img/hermana2.jpg",
      "parentesco": "hermana",
      "id": "her3"
    },
    {
      "nombre": "Piña",
      "sexo": "masculino",
      "lugar_nacimiento": "Vigo",
      "pais": "ESPAÑA",
      "fecha_nacimiento": "1995-08-11",
      "estado_civil": "soltero",
      "foto": "./assets/img/yo.jpg",
      "miniatura": "./assets/img/yo.jpg",
      "parentesco": "yo",
      "id": "her4"
    }
  ]
};
