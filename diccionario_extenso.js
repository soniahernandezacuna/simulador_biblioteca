const dictionary = {
  "arte": {
    synonyms: ["expresión", "creatividad", "bellas artes", "expresión artística"],
    broader: ["humanidades", "estudios culturales", "expresión creativa", "cultura visual"],
    narrower: ["pintura", "escultura", "teatro", "música", "danza",  "cine", 
               "fotografía", "arte feminista", "arte digital", "arte ecológico y reciclado","instalaciones interactivas","arte urbano mexicano"]
  },

  "música": {
    synonyms: ["melodía", "canción", "sonido", "composición musical"],
    broader: ["arte", "industrias culturales"],
    narrower: [
      "música clásica",
      "música contemporánea",
      "música regional mexicana",
      "composición experimental",
      "etnomusicología mexicana",
      "fusión sonora urbana"
    ]
  },

  "composición": {
    synonyms: ["creación", "estructura"],
    broader: ["música", "arte"],
    narrower: ["composición musical", "composición experimental"]
  },

  "mexicana": {
    synonyms: ["nacional", "tradicional"],
    broader: ["México", "identidad cultural"],
    narrower: ["música mexicana", "danza mexicana", "arte mexicano"]
  },

  "mexicano": {
    synonyms: ["nacional", "azteca"],
    broader: ["México", "cultura mexicana"],
    narrower: ["arte mexicano", "cine mexicano", "músicos mexicanos"]
  },

  "México": {
    synonyms: ["nación mexicana", "territorio azteca"],
    broader: ["América Latina", "contexto nacional"],
    narrower: [
      "arte mexicano",
      "cultura mexicana",
      "México prehispánico",
      "identidad nacional"
    ]
  },

  "México prehispánico": {
    synonyms: ["México antiguo", "época precolombina"],
    broader: ["México", "historia del arte"],
    narrower: ["iconografía mesoamericana", "arte precolombino"]
  },

  "danza": {
    synonyms: ["baile", "coreografía"],
    broader: ["arte escénico"],
    narrower: [
      "ballet",
      "danza contemporánea",
      "danza mexicana",
      "improvisación escénica"
    ]
  },

  "danza contemporánea": {
    synonyms: ["baile moderno", "coreografía actual"],
    broader: ["danza", "arte contemporáneo"],
    narrower: ["danza interdisciplinaria", "improvisación escénica"]
  },

  "improvisación": {
    synonyms: ["espontaneidad", "creación libre"],
    broader: ["danza", "música", "arte escénico"],
    narrower: ["improvisación escénica", "improvisación musical"]
  },

  "herencia musical": {
    synonyms: ["legado sonoro", "tradición artística"],
    broader: ["patrimonio cultural", "música"],
    narrower: ["tradición sinfónica mexicana", "archivo histórico sonoro"]
  },

  "Directores": {
    synonyms: ["realizadores", "conductores"],
    broader: ["música", "cine", "teatro"],
    narrower: ["directores de orquesta", "directores de escena"]
  },

  "orquesta": {
    synonyms: ["ensamble", "agrupación musical"],
    broader: ["música", "arte sonoro"],
    narrower: ["orquesta sinfónica", "orquesta juvenil", "directores de orquesta"]
  },

  "teatro": {
    synonyms: ["drama", "actuación", "representación escénica"],
    broader: ["arte escénico"],
    narrower: [
      "teatro clásico",
      "teatro moderno",
      "teatro musical",
      "teatro mexicano"
    ]
  },

  "teatro clásico": {
    synonyms: ["drama tradicional", "representación antigua"],
    broader: ["teatro"],
    narrower: ["adaptaciones clásicas", "relecturas contemporáneas"]
  },

  "escenarios": {
    synonyms: ["espacios escénicos", "ambientes"],
    broader: ["teatro", "arte escénico"],
    narrower: ["escenografía teatral", "escenarios digitales", "espacios experimentales"]
  },

  "escenarios en teatro musical": {
    synonyms: ["ambientaciones escénicas", "espacios teatrales"],
    broader: ["teatro musical", "diseño escénico"],
    narrower: ["escenografía inmersiva", "montajes híbridos"]
  },

  "cine": {
    synonyms: ["filmografía", "películas", "industria cinematográfica"],
    broader: ["audiovisual", "medios de comunicación", "industrias creativas", "cultura visual"],
    narrower: ["cine clásico", "cine contemporáneo", "cine mexicano",   "cine independiente",
               "plataformas de streaming nacionales","producción audiovisual digital","narrativas postmodernas mexicanas","nuevos directores emergentes"]
  },

  "pintura": {
    synonyms: ["arte pictórico", "obra visual", "óleo", "acuarela"],
    broader: ["arte visual"],
    narrower: [
      "pintura moderna",
      "pintura clásica",
      "pintura muralista mexicana",
      "iconografía prehispánica"
    ]
  },

  "diseño": {
    synonyms: ["creación", "conceptualización", "proyecto", "planificación"],
    broader: ["arte aplicado", "innovación"],
    narrower: [
      "diseño escenográfico",
      "diseño gráfico",
      "diseño industrial",
      "diseño de producto"
    ]
  },

  "experimentación": {
    synonyms: ["ensayo", "prueba creativa"],
    broader: ["arte contemporáneo", "creación"],
    narrower: [
      "procesos creativos sostenibles",
      "laboratorios artísticos",
      "experimentación sonora"
    ]
  },

  "materiales reciclados": {
    synonyms: ["elementos reutilizados", "recursos sostenibles"],
    broader: ["sustentabilidad", "arte ecológico"],
    narrower: ["escultura ecológica", "instalaciones con desechos"]
  },

  "arte perspectiva de género": {
    synonyms: ["expresión con enfoque de género", "arte feminista"],
    broader: ["arte", "estudios de género"],
    narrower: ["arte con perspectiva feminista", "representaciones queer"]
  },

  "arte feminista": {
    synonyms: ["arte con enfoque de género", "expresión política artística"],
    broader: ["arte contemporáneo", "estudios de género"],
    narrower: ["instalaciones feministas", "performance corporal femenino"]
  },

  "Estados Unidos": {
    synonyms: ["EE. UU.", "nación estadounidense"],
    broader: ["América del Norte"],
    narrower: ["arte estadounidense", "influencia cultural americana"]
  },

  "México": {
    synonyms: ["nación mexicana", "territorio azteca"],
    broader: ["América Latina", "contexto nacional"],
    narrower: [
      "cultura mexicana",
      "identidad nacional",
      "México prehispánico",
      "escenas culturales contemporáneas"
    ]
  },

  "mexicana": {
    synonyms: ["nacional", "tradicional"],
    broader: ["México", "identidad cultural"],
    narrower: ["arte mexicano", "música mexicana", "danza mexicana"]
  },

  "mexicano": {
    synonyms: ["nacional", "azteca"],
    broader: ["México", "cultura mexicana"],
    narrower: [
      "cine mexicano",
      "músicos mexicanos",
      "directores mexicanos",
      "arte mexicano contemporáneo"
    ]
  },

  "cultura": {
    synonyms: ["civilización", "patrimonio colectivo", "identidad cultural"],
    broader: ["sociedad"],
    narrower: [
      "cultura mexicana",
      "cultura visual",
      "cultura digital",
      "patrimonio cultural"
    ]
  },

  "patrimonio": {
    synonyms: ["herencia", "legado", "bienes culturales"],
    broader: ["cultura"],
    narrower: [
      "patrimonio cultural mexicano",
      "patrimonio inmaterial",
      "patrimonio artístico"
    ]
  },

  "herencia musical": {
    synonyms: ["legado sonoro", "tradición artística"],
    broader: ["música", "patrimonio cultural"],
    narrower: ["tradición sinfónica mexicana", "archivo histórico sonoro"]
  },

  "género": {
    synonyms: ["identidad", "categoría"],
    broader: ["estudios sociales", "identidad humana"],
    narrower: [
      "arte con perspectiva de género",
      "representaciones queer",
      "visualidades no binarias"
    ]
  },

  "género": {
    synonyms: ["enfoque de género", "arte feminista"],
    broader: ["arte", "estudios de género"],
    narrower: [
      "arte feminista latinoamericano",
      "performance corporal femenino"
    ]
  },

  "identidad": {
    synonyms: ["personalidad", "carácter", "autoconcepto"],
    broader: ["psicología", "sociedad"],
    narrower: ["identidad de género", "identidad cultural", "identidad nacional"]
  },

  "enseñanza": {
    synonyms: ["educación", "formación"],
    broader: ["pedagogía", "cultura educativa"],
    narrower: [
      "educación artística",
      "formación de músicos",
      "didáctica del arte",
      "programas culturales educativos"
    ]
  },

  "educación": {
    synonyms: ["enseñanza", "formación", "aprendizaje"],
    broader: ["sociedad"],
    narrower: ["educación artística", "educación digital", "formación profesional"]
  },

  "redes sociales": {
    synonyms: ["plataformas sociales", "medios digitales"],
    broader: ["comunicación digital", "plataformas digitales"],
    narrower: [
      "difusión artística en plataformas",
      "microcomunidades creativas",
      "marketing cultural en línea"
    ]
  },

  "plataformas digitales": {
    synonyms: ["medios en línea", "servicios de streaming"],
    broader: ["ecosistemas digitales", "tecnología"],
    narrower: [
      "plataformas de streaming nacionales",
      "plataformas de redes sociales",
      "entornos multimedia"
    ]
  },

  "contenidos culturales": {
    synonyms: ["producción artística", "desarrollo cultural"],
    broader: ["cultura", "gestión cultural"],
    narrower: ["curaduría temática", "programación cultural"]
  },

  "tradición": {
    synonyms: ["costumbre", "herencia", "ritual"],
    broader: ["cultura"],
    narrower: ["tradición oral", "tradición artística"]
  },

  "diversidad": {
    synonyms: ["variedad", "heterogeneidad", "pluralidad"],
    broader: ["sociedad"],
    narrower: ["diversidad cultural", "diversidad lingüística"]
  },

  "comunidad": {
    synonyms: ["colectivo", "grupo", "sociedad"],
    broader: ["sociedad"],
    narrower: ["comunidad urbana", "comunidad rural", "comunidad artística"]
  },

  "sociedad": {
    synonyms: ["colectividad", "comunidad humana", "organización social"],
    broader: [],
    narrower: ["cultura", "educación", "política social", "economía cultural"]
  },

  "tecnología": {
    synonyms: ["innovación técnica", "herramientas", "aplicaciones"],
    broader: ["ciencias aplicadas", "innovación"],
    narrower: [
      "tecnología digital",
      "tecnología educativa",
      "tecnología de la información",
      "tecnología especializada",
      "arte y tecnología"
    ]
  },

  "tecnología especializada": {
    synonyms: ["herramientas técnicas", "equipamiento avanzado"],
    broader: ["tecnología"],
    narrower: ["instrumentación artística", "equipos de grabación", "hardware audiovisual"]
  },

  "tecnología digital": {
    synonyms: ["tecnología electrónica", "plataformas tecnológicas"],
    broader: ["tecnología", "sociedad digital"],
    narrower: ["arte digital", "producción audiovisual digital", "narrativas visuales en línea"]
  },

  "plataformas digitales": {
    synonyms: ["medios en línea", "servicios de streaming"],
    broader: ["ecosistemas digitales", "tecnología"],
    narrower: [
      "plataformas de streaming nacionales",
      "plataformas de redes sociales",
      "entornos multimedia"
    ]
  },

  "plataformas": {
    synonyms: ["bases tecnológicas", "ecosistemas digitales"],
    broader: ["tecnología", "difusión cultural"],
    narrower: [
      "plataformas OTT",
      "plataformas sociales",
      "plataformas culturales digitales"
    ]
  },

  "innovación": {
    synonyms: ["novedad", "mejora", "creación"],
    broader: ["desarrollo", "tecnología"],
    narrower: [
      "innovación tecnológica",
      "innovación social",
      "innovación educativa",
      "innovación artística"
    ]
  },

  "experimentación": {
    synonyms: ["ensayo", "prueba creativa"],
    broader: ["arte contemporáneo", "creación", "investigación"],
    narrower: [
      "procesos creativos sostenibles",
      "laboratorios artísticos",
      "experimentación sonora",
      "experimentación científica"
    ]
  },

  "investigación": {
    synonyms: ["estudio", "análisis", "exploración"],
    broader: ["ciencia"],
    narrower: [
      "investigación científica",
      "investigación aplicada",
      "investigación educativa",
      "investigación artística"
    ]
  },

  "big data": {
    synonyms: ["datos masivos", "análisis de datos", "información"],
    broader: ["informática"],
    narrower: ["análisis predictivo", "visualización de datos", "minería de datos"]
  },

  "informática": {
    synonyms: ["computación", "procesamiento de datos", "software"],
    broader: ["tecnología"],
    narrower: [
      "programación",
      "sistemas operativos",
      "redes informáticas",
      "aplicaciones artísticas digitales"
    ]
  },

  "software": {
    synonyms: ["programa", "aplicación", "sistema"],
    broader: ["informática"],
    narrower: ["software educativo", "software de diseño", "software empresarial"]
  },

  "hardware": {
    synonyms: ["equipo", "dispositivo", "componentes"],
    broader: ["informática"],
    narrower: [
      "hardware de computadora",
      "hardware audiovisual",
      "hardware de telecomunicaciones"
    ]
  },

  "inteligencia artificial": {
    synonyms: ["IA", "aprendizaje automático", "machine learning"],
    broader: ["tecnología"],
    narrower: [
      "IA creativa",
      "IA ética",
      "IA aplicada",
      "música generativa con IA"
    ]
  },

  "robótica": {
    synonyms: ["robots", "automatización", "máquinas inteligentes"],
    broader: ["tecnología"],
    narrower: [
      "robótica industrial",
      "robótica educativa",
      "robótica de servicios"
    ]
  },

  "innovación abierta": {
    synonyms: ["colaboración", "co-creación", "participación"],
    broader: ["innovación"],
    narrower: ["innovación tecnológica abierta", "innovación social abierta"]
  },

  "creación": {
    synonyms: ["innovación", "producción"],
    broader: ["arte", "tecnología", "investigación"],
    narrower: [
      "creación artística",
      "creación contenidos culturales",
      "creación digital"
    ]
  },

  "laboratorio": {
    synonyms: ["taller", "centro de investigación", "instituto"],
    broader: ["investigación"],
    narrower: ["laboratorio físico", "laboratorio virtual", "laboratorio de innovación"]
  },

  "metodología": {
    synonyms: ["procedimiento", "sistema", "técnica"],
    broader: ["investigación"],
    narrower: ["metodología científica", "metodología de diseño", "metodología de innovación"]
  },

  "análisis de datos": {
    synonyms: ["procesamiento de información", "estadística", "minería de datos"],
    broader: ["investigación"],
    narrower: ["análisis cuantitativo", "análisis cualitativo", "análisis predictivo"]
  },

  "innovación tecnológica": {
    synonyms: ["avance técnico", "progreso digital"],
    broader: ["tecnología", "innovación"],
    narrower: ["innovación abierta", "tecnología aplicada", "arte tecnológico"]
  },

  "tecnología educativa": {
    synonyms: ["edtech", "enseñanza digital"],
    broader: ["tecnología", "educación"],
    narrower: ["plataformas educativas", "software educativo"]
  },

  "realidad aumentada": {
    synonyms: ["AR", "realidad mixta", "entorno interactivo"],
    broader: ["tecnología digital"],
    narrower: ["realidad aumentada en arte", "aplicaciones interactivas"]
  },

  "arte digital": {
    synonyms: ["expresión digital", "creación interactiva"],
    broader: ["arte", "tecnología"],
    narrower: ["arte generativo", "arte posdigital", "arte con IA"]
  },

  "experimentación tecnológica": {
    synonyms: ["prueba técnica", "ensayo tecnológico"],
    broader: ["tecnología", "innovación"],
    narrower: ["prototipos experimentales", "arte tecnológico"]
  },

  "ética": {
    synonyms: ["moral", "principios", "valores"],
    broader: ["filosofía"],
    narrower: ["ética profesional", "ética social", "ética artística"]
  },

  "moral": {
    synonyms: ["principios", "valores", "conducta"],
    broader: ["ética"],
    narrower: ["moral personal", "moral colectiva"]
  },

  "filosofía": {
    synonyms: ["pensamiento", "sabiduría", "teoría"],
    broader: ["humanidades"],
    narrower: ["ética", "estética", "ontología"]
  },

  "estética": {
    synonyms: ["sensibilidad artística", "percepción", "armonía"],
    broader: ["filosofía", "arte"],
    narrower: ["estética del arte", "estética corporal"]
  },

  "existencia": {
    synonyms: ["vida", "ser", "realidad"],
    broader: ["filosofía"],
    narrower: ["existencia humana", "existencia social"]
  },

  "conocimiento": {
    synonyms: ["saber", "ciencia", "aprendizaje"],
    broader: ["filosofía"],
    narrower: ["conocimiento práctico", "conocimiento teórico"]
  },

  "verdad": {
    synonyms: ["realidad", "hecho", "certeza"],
    broader: ["filosofía"],
    narrower: ["verdad objetiva", "verdad subjetiva"]
  },

  "vida": {
    synonyms: ["existencia", "ser", "vivir"],
    broader: ["filosofía"],
    narrower: ["vida personal", "vida social"]
  },

  "belleza": {
    synonyms: ["estética", "hermosura", "atractivo"],
    broader: ["arte", "percepción"],
    narrower: ["belleza natural", "belleza artística"]
  },

  "diseño": {
    synonyms: ["creación", "conceptualización", "proyecto", "planificación"],
    broader: ["arte aplicado", "innovación"],
    narrower: [
      "diseño escenográfico",
      "diseño gráfico",
      "diseño industrial",
      "diseño de producto"
    ]
  },

  "escenarios en teatro musical": {
    synonyms: ["ambientaciones escénicas", "espacios teatrales"],
    broader: ["teatro musical", "diseño escénico"],
    narrower: ["escenografía inmersiva", "montajes híbridos"]
  },

  "materiales reciclados": {
    synonyms: ["elementos reutilizados", "recursos sostenibles"],
    broader: ["sustentabilidad", "arte ecológico"],
    narrower: ["escultura ecológica", "instalaciones con desechos"]
  },

  "contemporánea": {
    synonyms: ["moderna", "actual"],
    broader: ["arte", "cultura"],
    narrower: ["arte contemporáneo", "danza contemporánea"]
  },

  "siglo xx": {
    synonyms: ["siglo 20", "era moderna"],
    broader: ["historia contemporánea"],
    narrower: ["arte del siglo xx", "música moderna", "cine clásico"]
  },

  "siglo 20": {
    synonyms: ["siglo veinte", "época moderna"],
    broader: ["siglo xx"],
    narrower: ["arte del siglo 20", "música sinfónica moderna"]
  },

  "siglo xxi": {
    synonyms: ["siglo 21", "era actual"],
    broader: ["historia reciente", "sociedad digital"],
    narrower: ["arte digital", "innovación tecnológica", "plataformas culturales"]
  },

  "siglo 21": {
    synonyms: ["siglo xxi", "era digital"],
    broader: ["época contemporánea"],
    narrower: ["arte posdigital", "sociedad interconectada"]
  },

  "narrativa visual": {
    synonyms: ["relato gráfico", "historia visual"],
    broader: ["comunicación", "arte visual"],
    narrower: ["fotografía conceptual", "videoarte", "relato visual urbano"]
  },

  "experimentación": {
    synonyms: ["ensayo", "prueba creativa"],
    broader: ["arte contemporáneo", "creación", "investigación"],
    narrower: [
      "procesos creativos sostenibles",
      "laboratorios artísticos",
      "experimentación sonora",
      "experimentación científica"
    ]
  },

  "redes sociales": {
    synonyms: ["plataformas sociales", "medios digitales"],
    broader: ["comunicación digital", "plataformas digitales"],
    narrower: [
      "difusión artística en plataformas",
      "microcomunidades creativas",
      "marketing cultural en línea"
    ]
  },

  "creación": {
    synonyms: ["innovación", "producción"],
    broader: ["arte", "tecnología", "investigación"],
    narrower: [
      "creación artística",
      "creación contenidos culturales",
      "creación digital"
    ]
  },

  "contenidos culturales": {
    synonyms: ["producción artística", "desarrollo cultural"],
    broader: ["creación", "cultura digital"],
    narrower: ["curaduría de contenido", "difusión cultural"]
  },

  "Estados Unidos": {
    synonyms: ["EE. UU.", "nación estadounidense"],
    broader: ["América del Norte"],
    narrower: ["arte estadounidense", "influencia cultural americana"]
  },

  "directores": {
    synonyms: ["realizadores", "conductores"],
    broader: ["música", "cine", "teatro"],
    narrower: ["directores de orquesta", "directores escénicos"]
  },

  "orquesta": {
    synonyms: ["ensamble", "agrupación musical"],
    broader: ["música", "arte sonoro"],
    narrower: ["orquesta sinfónica", "orquesta juvenil", "directores de orquesta"]
  },

  "herencia musical": {
    synonyms: ["legado sonoro", "tradición artística"],
    broader: ["patrimonio cultural", "música"],
    narrower: ["tradición sinfónica mexicana", "archivo histórico sonoro"]
  },

  "arte feminista": {
    synonyms: ["arte con enfoque de género", "expresión política artística"],
    broader: ["arte contemporáneo", "estudios de género"],
    narrower: ["instalaciones feministas", "performance corporal femenino"]
  },

  "género": {
    synonyms: ["identidad", "categoría"],
    broader: ["estudios sociales", "identidad humana"],
    narrower: [
      "arte con perspectiva de género",
      "representaciones queer",
      "visualidades no binarias"
    ]
  },

  "enseñanza": {
    synonyms: ["educación", "formación"],
    broader: ["pedagogía", "cultura educativa"],
    narrower: [
      "educación artística",
      "formación de músicos",
      "didáctica del arte",
      "programas culturales educativos"
    ]
  },

  "experimentación tecnológica": {
    synonyms: ["prueba técnica", "ensayo tecnológico"],
    broader: ["tecnología", "innovación"],
    narrower: ["prototipos experimentales", "arte tecnológico"]
  },

  "materiales": {
    synonyms: ["recursos creativos", "materia prima artística"],
    broader: ["arte", "experimentación"],
    narrower: ["materiales reciclados", "soportes mixtos"]
  },

  "arte contemporáneo": {
    synonyms: ["arte moderno", "expresión actual"],
    broader: ["arte"],
    narrower: ["experimentación", "arte digital", "arte feminista"]
  },

  "innovación artística": {
    synonyms: ["creación avanzada", "vanguardia creativa"],
    broader: ["innovación", "arte contemporáneo"],
    narrower: ["arte tecnológico", "arte generativo", "arte experimental"]
  }

};


