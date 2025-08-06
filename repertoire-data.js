// Données du répertoire musical Jean-David Waeber
// 406 œuvres organisées par genre, compositeur, période et formation
// Généré automatiquement depuis le CSV source

const repertoireData = {
    // Données principales - 406 œuvres
    oeuvres: [
        {
            "genre": "Motet",
            "compositeur": "Bruckner A.",
            "titre": "Tantum ergo",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Caldara A.",
            "titre": "Missa brevis en sol majeur",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Cellier A.",
            "titre": "Thème et variations sur le Psaume 149",
            "periode": "Moderne",
            "formation": "Trompette et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Corelli A.",
            "titre": "La Follia",
            "periode": "Baroque",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Gabrieli A.",
            "titre": "Canzon francese detta \"Frais et Gaillard\"",
            "periode": "Renaissance",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Gabrieli A.",
            "titre": "Benedictus Dominus",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Hovhaness A.",
            "titre": "Haroutiun",
            "periode": "Moderne",
            "formation": "Trompette et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Lotti A.",
            "titre": "Ave Regina coelorum",
            "periode": "Baroque",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Pärt A.",
            "titre": "Da pacem Domine",
            "periode": "Contemporain",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Pärt A.",
            "titre": "Fratres",
            "periode": "Contemporain",
            "formation": "Ensemble instrumental",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Raison A.",
            "titre": "Messe du 1er ton",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Scarlatti A.",
            "titre": "Sonate no1 en ré mineur",
            "periode": "Baroque",
            "formation": "Violoncelle et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Scarlatti A.",
            "titre": "Exultate Deo",
            "periode": "Baroque",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Vivaldi A.",
            "titre": "Aure, voi più non sieste",
            "periode": "Baroque",
            "formation": "Chant et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Vivaldi A.",
            "titre": "Sonate no9 en sol mineur RV 42",
            "periode": "Baroque",
            "formation": "Violoncelle et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Vivaldi A.",
            "titre": "Quatre saisons op.8",
            "periode": "Baroque",
            "formation": "Ensemble instrumental",
            "remarque": ""
        },
        {
            "genre": "Chant grégorien",
            "compositeur": "Anonyme",
            "titre": "Pater Noster",
            "periode": "Médiéval",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Anonyme",
            "titre": "Livre Vermeil",
            "periode": "Médiéval",
            "formation": "Chœur et instruments",
            "remarque": "Extraits"
        },
        {
            "genre": "Clavier",
            "compositeur": "Bettinelli B.",
            "titre": "Toccata Fantasia",
            "periode": "Contemporain",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Britten B.",
            "titre": "Hymn to the Virgin",
            "periode": "Moderne",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Britten B.",
            "titre": "Prélude et Fugue sur un thème de Victoria",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Héritier B.",
            "titre": "O croix plus noble que les cèdres",
            "periode": "Contemporain",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Pasquini B.",
            "titre": "Toccata con lo scherzo del cucco",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Britten B.",
            "titre": "Saint Nicolas op. 42",
            "periode": "Moderne",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Byrd W.",
            "titre": "Alleluia, Ascendit Deus",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Byrd W.",
            "titre": "The Quenn's alman",
            "periode": "Renaissance",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Balbastre C.",
            "titre": "Quand Jésus naquit à Noël",
            "periode": "Classique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Balbastre C.",
            "titre": "Marche des Marseillois et l'air ça ira",
            "periode": "Classique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Dubuis C.",
            "titre": "Cantate de la Parole",
            "periode": "Moderne",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Frank C.",
            "titre": "Les sept dernières paroles du Christ en croix",
            "periode": "Romantique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Frank C.",
            "titre": "Panis angelicus",
            "periode": "Romantique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frank C.",
            "titre": "Cantabile",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frank C.",
            "titre": "Pastorale op. 19",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frank C.",
            "titre": "Prélude, Fugue et Variation op.18",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frank C.",
            "titre": "Choral no1 en mi majeur",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Gounod C.",
            "titre": "Ave Maria",
            "periode": "Romantique",
            "formation": "Chant et orgue",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Gounod C.",
            "titre": "Messe aux chapelles",
            "periode": "Romantique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Gounod C.",
            "titre": "Messe aux cathédrales",
            "periode": "Romantique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Gounod C.",
            "titre": "Salve Regina",
            "periode": "Romantique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Haenni C.",
            "titre": "Tantum ergo",
            "periode": "Contemporain",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Merulo C.",
            "titre": "Toccata nona",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Monteverdi C.",
            "titre": "Laudate Dominum",
            "periode": "Baroque",
            "formation": "Chant et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Saint-Saëns C.",
            "titre": "Introduction Rondo Capriccioso",
            "periode": "Romantique",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Saint-Saëns C.",
            "titre": "Prière op.158",
            "periode": "Romantique",
            "formation": "Violoncelle et orgue",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Schönherr C.",
            "titre": "Missa in tempore incerto",
            "periode": "Contemporain",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Thiel C.",
            "titre": "Der Morgenstern ist aufgedrungen",
            "periode": "",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Widor C.-M.",
            "titre": "Toccata de la 5ème Symphonie",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Widor C.-M.",
            "titre": "Allegro de la 6ème Symphonie",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Cozzolani C.M.",
            "titre": "Vêpres",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach C.P.E",
            "titre": "Sonate en ré majeur Wq.70",
            "periode": "Classique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach C.P.E",
            "titre": "Aus der Tiefe rufe ich BWV 745",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach C.P.E",
            "titre": "Ich will den Namen des Herrn preisen",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach C.P.E",
            "titre": "Magnificat",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": "Extrait"
        },
        {
            "genre": "Motet",
            "compositeur": "Charpentier M.-A.",
            "titre": "In nativitate Domini nostri",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Clérembault L.-N.",
            "titre": "Hodie Christus natus est",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Clérembault L.-N.",
            "titre": "Domine, ante te omne desiderium meum",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Clérembault L.-N.",
            "titre": "Ecce Deus Salvator meus",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Clérembault L.-N.",
            "titre": "Domine, refugium factus es nobis",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Clérembault L.-N.",
            "titre": "Domine, salvum fac regem",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Bortnianski D.",
            "titre": "Tibie Paiom",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Bortnianski D.",
            "titre": "Ige Herouvimy",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Nun komm der Heiden Heiland BuxWV 211",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Nun bitten wir den heiligen Geist BuxWV 208",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Ciacona en do mineur BuxWV 159",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Wie schön leuchtet der Morgenstern BuxWV 223",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Passacaglia en ré mineur BuxWV 161",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Prélude et Chaconne en do majeur BuxWV 137",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Prélude et Fugue en ré majeur BuxWV 139",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Prélude en do majeur BuxWV 136",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buxtehude D.",
            "titre": "Toccata en sol majeur BuxWV 164",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Buxtehude D.",
            "titre": "Der Herr ist mit mir",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Buxtehude D.",
            "titre": "Befiehl dem Engel",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Couillart D.",
            "titre": "Viri Galilaei",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Granato D.",
            "titre": "Toccata brève",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Sampson D.",
            "titre": "The Mysteries Remain",
            "periode": "Contemporain",
            "formation": "Chant et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Scarlatti D.",
            "titre": "Sonate en sol majeur K. 328",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Scarlatti D.",
            "titre": "Sonate en ré majeur K. 287",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Scarlatti D.",
            "titre": "Sonate en ré majeur K. 288",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Scarlatti D.",
            "titre": "Iste confessor",
            "periode": "Baroque",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Zipoli D.",
            "titre": "Diverses pièces",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Di Lasso O.",
            "titre": "Adoramus te, Christe",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Di Lasso O.",
            "titre": "Agimus tibi gratias",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Di Lasso O.",
            "titre": "Alleluia, laus et gloria",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Di Lasso O.",
            "titre": "Ad te perenne gaudium",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Di Lasso O.",
            "titre": "Anima mea liquefacta est",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Di Lasso O.",
            "titre": "Animam meam dilectam",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Batiste E.",
            "titre": "Diverses pièces",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bossi E.",
            "titre": "Scherzo en sol mineur op.49/2",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Elgar E.",
            "titre": "Ave verum",
            "periode": "Romantique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Elgar E.",
            "titre": "Vesper Voluntaries op.14/3",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Gillioz E.",
            "titre": "Gloria",
            "periode": "Contemporain",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Anerio F.",
            "titre": "Beatus vir",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Couperin F.",
            "titre": "Jubilemus, exultemus",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Couperin F.",
            "titre": "Messe solennelle à l'usage des paroisses",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Couperin F.",
            "titre": "Messe à l'usage des couvents",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Geminiani F.",
            "titre": "Sonate no2 en ré mineur op.5",
            "periode": "Baroque",
            "formation": "Violoncelle et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Guerrero F.",
            "titre": "Rorate caeli",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Kreisler F.",
            "titre": "Prélude et Allegro",
            "periode": "Moderne",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Liszt F.",
            "titre": "Pio IX (Papsthymnus)",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Liszt F.",
            "titre": "Ein feste Burg ist unser Gott",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Mendelssohn F.",
            "titre": "Verleih uns Frieden",
            "periode": "Romantique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Mendelssohn F.",
            "titre": "Sonate pour orgue en la majeur op.65/3",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Mendelssohn F.",
            "titre": "Sonate pour orgue en si bémol majeur op.65/4",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Mendelssohn F.",
            "titre": "Sonate pour orgue en ré mineur op.65/6",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Mendelssohn F.",
            "titre": "Prélude et Fugue en do mineur op. 37/1",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Mendelssohn F.",
            "titre": "Prélude et Fugue en sol majeur op. 37/2",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Mendelssohn F.",
            "titre": "Zum Abendsegen",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Schubert F.",
            "titre": "Ave Maria",
            "periode": "Romantique",
            "formation": "Chant et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Schubert F.",
            "titre": "Chor der Engel",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Soriano F.",
            "titre": "Alma Redemptoris Mater",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Soriano F.",
            "titre": "Ave Regina coelorum",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Tunder F.",
            "titre": "Dominus Illuminatio mea",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Tunder F.",
            "titre": "Jesus Christus, unser Heiland",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "De Arauxo F.C.",
            "titre": "Tres glosas",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Aichinger G.",
            "titre": "Regina caeli",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Battistini G.",
            "titre": "Gaudeamus omnes",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Böhm G.",
            "titre": "Prélude et Fugue en do majeur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Böhm G.",
            "titre": "Vater unser im Himmelreich",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Böhm G.",
            "titre": "Partita sur Jesu du bist allzu schöne",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Böhm G.",
            "titre": "Suite en fa mineur",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Cavazzoni G.",
            "titre": "Canzon sopra Falt d'argens",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Cavazzoni G.",
            "titre": "Canzon sopra i le bel e bon",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Croce G.",
            "titre": "O vos omnes",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Croce G.",
            "titre": "Cantate Domino",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "De Macques G.",
            "titre": "Cappricio sopra re fa mi sol",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Delerue G.",
            "titre": "Concerto de l'Adieu",
            "periode": "Moderne",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Diruta G.",
            "titre": "Toccata di grado del primo tono",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Fauré F.",
            "titre": "Requiem op. 48",
            "periode": "Romantique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Fauré F.",
            "titre": "Cantique de Jean Racine op.11",
            "periode": "Romantique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Fauré F.",
            "titre": "Berceuse op.16",
            "periode": "Romantique",
            "formation": "Violoncelle et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frescobaldi G.",
            "titre": "Fiori musicali",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frescobaldi G.",
            "titre": "Aria detta Frescobalda",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frescobaldi G.",
            "titre": "Canzona quarta (2ème livre de toccatas)",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frescobaldi G.",
            "titre": "Toccata prima (du 2ème livre)",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Frescobaldi G.",
            "titre": "Messa sopra l'aria della Monica",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frescobaldi G.",
            "titre": "Toccata secunda (2ème Livre)",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Frescobaldi G.",
            "titre": "Toccata quinta (2ème Livre)",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Gabrieli G.",
            "titre": "O magnum mysterium",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Morandi G.",
            "titre": "Rondo con imitazione de campanelli",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Muffat G.",
            "titre": "Toccata secunda",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Anerio G.F.",
            "titre": "Rorate caeli",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Anerio G F.",
            "titre": "Magi ab oriente venerunt",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Haendel G.F.",
            "titre": "Messie HWV 56",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Haendel G.F.",
            "titre": "Concerto pour orgue op. 4/6 HWV 290",
            "periode": "Baroque",
            "formation": "Ensemble instrumental",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Haendel G.F.",
            "titre": "Suite no2 en fa majeur HWV 427",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Haendel G.F.",
            "titre": "Concerto pour orgue en si bémol majeur op.4/2 HWV 290",
            "periode": "",
            "formation": "Ensemble instrumental",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Nanino G.M.",
            "titre": "Hodie Christus natus est",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Nanino G.M.",
            "titre": "Hodie nobis caelorum rex",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Nanino G.M.",
            "titre": "Magnificat a 8",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Nanino G.M.",
            "titre": "Sancta et immaculata",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Nanino G.M.",
            "titre": "Verbum caro factum est",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Palestrina G.P.",
            "titre": "Sicut cervus",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Palestrina G.P.",
            "titre": "O Crux ave",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Palestrina G.P.",
            "titre": "Regina caeli",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Palestrina G.P.",
            "titre": "Missa brevis",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Telemann G.P.",
            "titre": "Schmecket und sehet",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Telemann G.P.",
            "titre": "Es segne uns Gott, unser Herr",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Telemann G.P.",
            "titre": "Gott der Hoffnung erfülle euch BWV 218",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": "Cantate de Telemann attribuée autrefois à Bach"
        },
        {
            "genre": "Clavier",
            "compositeur": "Buchner H.",
            "titre": "Quem terra pontus",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Buchner H.",
            "titre": "Gloria Cunctipotens Genitor Deus",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Du Mont H.",
            "titre": "Magnificat",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Isaac H.",
            "titre": "Alleluia, Assumpta est Maria",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Purcell H.",
            "titre": "Three short Anthems",
            "periode": "Baroque",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Purcell H.",
            "titre": "Musique pour les funérailles de la Reine Mary",
            "periode": "Baroque",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Purcell H.",
            "titre": "Nunc dimittis",
            "periode": "Baroque",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Purcell H.",
            "titre": "Prélude en sol majeur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Purcell H.",
            "titre": "Voluntary sur le Psaume 100",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Scheidemann H.",
            "titre": "Galliarda en ré mineur",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Schütz H.",
            "titre": "Singet dem Herrn ein neues Lied",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Wieniawski H.",
            "titre": "Carnaval russe op.11",
            "periode": "Romantique",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Hassler H.L.",
            "titre": "Cantate Domino",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Hassler H.L.",
            "titre": "Dixit Maria",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Hassler H.L.",
            "titre": "Qui laudat Dominum",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Hassler H.L.",
            "titre": "Beata es Virgo Maria",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Schilling H.L.",
            "titre": "Canzona über Christ ist erstanden",
            "periode": "Contemporain",
            "formation": "Trompette et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Albeniz I.",
            "titre": "Asturias",
            "periode": "Romantique",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Alain J.",
            "titre": "Litanies",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Alain J.",
            "titre": "Le Jardin suspendu",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Alain J.",
            "titre": "Variations sur le Lucis Creator",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Alain J.",
            "titre": "Choral cistercien",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Alain J.",
            "titre": "Choral dorien",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Arcadelt J.",
            "titre": "Ave Maria",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Chanson",
            "compositeur": "Bovet J.",
            "titre": "La fanfare du printemps",
            "periode": "Moderne",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Brahms J.",
            "titre": "11 Chorals pour orgue op. 122",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Brahms J.",
            "titre": "Prélude et Fugue en la mineur WoO 9",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bull J.",
            "titre": "Christe Redemptor omnium",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bull J.",
            "titre": "Gloria tibi trinitatis",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Daetwyler J.",
            "titre": "Concerto pour trompette et orgue",
            "periode": "Moderne",
            "formation": "Trompette et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Daetwyler J.",
            "titre": "Poème et Fugue",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Demessieux J.",
            "titre": "Rorate caeli",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Desprez J.",
            "titre": "In te Domine speravi",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Eccard J.",
            "titre": "Übers Gebirf Maria",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Haydn J.",
            "titre": "Missa brevis en fa majeur Hob. XXII:1",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Haydn J.",
            "titre": "Missa brevis en si bémol majeur Hob. XXII:7",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Kerll J.K.",
            "titre": "Passacaglia",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Kerll J.K.",
            "titre": "Battaglia",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Hanff J.N.",
            "titre": "Chorals",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Pachelbel J.",
            "titre": "Was Gott tut, das ist wohlgetan",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Pachelbel J.",
            "titre": "Jauchzet dem Herrn, alle Welt",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Pachelbel J.",
            "titre": "Magnificat en ré majeur",
            "periode": "Baroque",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Pachelbel J.",
            "titre": "Chaconne en fa mineur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Rheinberger J.",
            "titre": "Regina caeli",
            "periode": "Romantique",
            "formation": "Chant et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Rheinberger J.",
            "titre": "Diverses pièces",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Rosenmüller J.",
            "titre": "Wahrlich, ich sage euch",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Stanley J.",
            "titre": "Voluntary en ré mineur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Stanley J.",
            "titre": "Voluntary en ré majeur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Titelouze J.",
            "titre": "Magnificat octavi toni",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Titelouze J.",
            "titre": "Veni Creator",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Williams J.",
            "titre": "Liste de Schindler",
            "periode": "Contemporain",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Composition",
            "compositeur": "Waeber J.-D.",
            "titre": "Messe du Christ-Roi",
            "periode": "Contemporain",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Composition",
            "compositeur": "Waeber J.-D.",
            "titre": "Messe Cum Jubilo",
            "periode": "Contemporain",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Composition",
            "compositeur": "Waeber J.-D.",
            "titre": "Messe de la Sainte-Croix",
            "periode": "Contemporain",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Composition",
            "compositeur": "Waeber J.-D.",
            "titre": "Messe Lumière du ciel",
            "periode": "Contemporain",
            "formation": "Chœur et orgue",
            "remarque": "Disponible aux Éditions musicales Henry Labatiaz"
        },
        {
            "genre": "Composition",
            "compositeur": "Waeber J.-D.",
            "titre": "Messe St-Léonard de Noblat",
            "periode": "Contemporain",
            "formation": "Chœur et orgue",
            "remarque": "Disponible aux Éditions musicales Henry Labatiaz"
        },
        {
            "genre": "Composition",
            "compositeur": "Waeber J.-D.",
            "titre": "Hymne au Christ-Roi",
            "periode": "Contemporain",
            "formation": "Chœur et orgue",
            "remarque": "Disponible aux Éditions musicales Henry Labatiaz"
        },
        {
            "genre": "Composition",
            "compositeur": "Waeber J.-D.",
            "titre": "Un peu de dispute",
            "periode": "Contemporain",
            "formation": "Chœur a capella",
            "remarque": "Disponible aux Éditions musicales Henry Labatiaz"
        },
        {
            "genre": "Clavier",
            "compositeur": "Dandrieu J.-F.",
            "titre": "Offertoire pour le jour de Pâques",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Beauvarlet-Chaprentier J.-J.",
            "titre": "Offertoire",
            "periode": "Classique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Hasse J.A.",
            "titre": "Miserere en do mineur",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Bach J.C.",
            "titre": "Lieber Herr Gott",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Fischer J.C.",
            "titre": "Dixit Dominus",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Fischer J.C. F.",
            "titre": "Ciaconna in F",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Walther J.G.",
            "titre": "Concerto en si mineur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Froberger J.J",
            "titre": "Cappricio in G",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Froberger J.J",
            "titre": "Toccata da sonarsi alla Levatione",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Aiblinger J.K",
            "titre": "Ad te levavi",
            "periode": "Romantique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Krebs J.L.",
            "titre": "Wachet auf, ruft uns die Stimme",
            "periode": "Baroque",
            "formation": "Trompette et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Krebs J.L.",
            "titre": "Fantaisie sur Freu dich sehr, o meine Seele",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Bach J.M.",
            "titre": "Fürchet euch nicht",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Sweelinck J.P.",
            "titre": "Pavana lacrimae",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Sweelinck J.P.",
            "titre": "Mein junges Leben hat ein end",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Sweelinck J.P.",
            "titre": "Dies sind die heil'gen zehn Gebot'",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Sweelinck J.P.",
            "titre": "Est-ce mars",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Sweelinck J.P.",
            "titre": "Toccata en sol majeur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Sweelinck J.P.",
            "titre": "Unter der Linden grüne",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Sweelinck J.P.",
            "titre": "Ballo del granduca",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Nun komm der Heiden Heiland BWV 599",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Komm, Gott Schöpfer, Heiliger Geist BWV 667",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Partita no 1",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Prélude et Fugue en sol majeur BWV 541",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Aria variata alla maniera italiana BWV 989",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Concerto en ré mineur BWV 596",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Pastorale BWV 590",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Toccata, Adagio et Fugue en do majeur BWV 564",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Orgelbüchlein",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Clavierübung 3ème partie",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Sonate en trio en mib majeur BWV 525",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Sonate en trio en do mineur BWV 526",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Sonate en trio en ré mineur BWV 527",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Sonate en trio en mi mineur BWV 528",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Sonate en trio en do majeur BWV 529",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Concerto en ré mineurBWV 974",
            "periode": "Baroque",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Meine Seele erhebet den Herrn BWV 733",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Bach J.S.",
            "titre": "Concerto en mi majeur BWV 1042",
            "periode": "Baroque",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Prélude et Fugue en mi mineur BWV 548",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Pièce d'orgue BWV 572",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Prélude et Fugue en la mineur BWV 543",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Schmücke dich, o liebe Seele BWV 564",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "An Wasserflüssen Babylon BWV 653",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Prélude et Fugue en ré mineur BWV 539",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "6 Chorals Schübler BWV 645-650",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Fantaisie et Fugue en sol mineur BWV 542",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Bach J.S.",
            "titre": "Sonate en sol majeur BWV 1027",
            "periode": "Baroque",
            "formation": "Violoncelle et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Herzlich tut mich verlangen BWV 727",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Erbarm dich mein, o Herre Gott BWV 721",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Toccata et Fugue en ré mineur BWV 565",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Partita sur Gott, du frommer Gott BWV 767",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Bach J.S.",
            "titre": "Concerto pour violon en la mineur BWV 1041",
            "periode": "Baroque",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Bach J.S.",
            "titre": "Oratorio de Noël BWV 248",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": "Herrscher des Himmels, erhören das Lallen"
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Nach dir, Herr, verlanget mich, BWV 150",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Passacaille et Fugue en do mineur BWV 582",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Mein Herze Schwimmt im Blut BWV 199",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Sie werden aus Saba alle kommen BWV 65",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Ich habe genug BWV 82",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Was willst du dich betrüben BWV 107",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Wer sich selbst erhöhet, der soll erniedriget warden BWV 47",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Nun ist das Heil und die Kraft BWV 50",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Widerestehe doch der Sünde BWV 54",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Gelobet sei der Herre, mein Gott BWV 129",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Siehe zu, dass deine Gottesfurcht nicht Heuchelei sei BWV 179",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Herr Gott, dich loben alle wir BWV 130",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Erfreute Zeit im neuen Bunde BWV 83",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Nun komm, der Heiden Heiland BWV 62",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Ihr Menschen, rühmet Gottes Liebe BWV 167",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Bringet dem Herrn Ehre seines Namens BWV 148",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Geist und Seele wird verwirret BWV 35",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Ihr Tore zu Zion BWV 193",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Wer da gläubet und getauft wird BWV 37",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Gott, wie dein Name, so ist auch dein Ruhm BWV 171",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Es ist ein trotzig und verzagt Ding BWV 176",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Es wartet alles auf dich BWV 187",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Lobe den Herren, den mächtigen König der Ehren BWV 137",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Herz und Mund und Tat und Leben BWV 147",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Ich glaube, lieber Herr, hilf meinem Unglauben! BWV 109",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "O Ewigkeit, du Donnerwort BWV 20",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Ich bin ein guter Hirt BWV 85",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Der Himmel lacht! Die Erde jubilieret BWV 31",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Was Gott tut, das ist wohlgetan BWV 98",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Was Gott tut, das ist wohlgetan BWV 100",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Erforsche mich, Gott, und erfahre mein Herz BWV 136",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Das ist je gewißlich wahr BWV 141",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": "Cantate de Telemann attribuée autrefois à Bach"
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Gott ist unsre Zuversicht BWV 197",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Bach J.S.",
            "titre": "O Jesu Christ, meins Lebens Licht BWV 118",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Herr Jesu Christ, du höchstes Gut BWV 113",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Du sollst Gott, deinen Herren, lieben BWV 77",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Wohl dem, der sich auf seinen Gott BWV 139",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Allein zu dir, Herr Jesu Christ BWV 33",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Schwingt freudig euch empor BWV 36",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Christ unser Herr zum Jordan kam BWV 7",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Alles nur nach Gottes Willen BWV 72",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Bach J.S.",
            "titre": "Jesu, meine Freude BWV 227",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Erfreut euch, ihr Herzen BWV 66",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Auf Christi Himmelfahrt allein BWV 128",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Cantate",
            "compositeur": "Bach J.S.",
            "titre": "Man singet mit Freuden vom Sieg BWV 149",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Toccata et Fugue en ré mineur BWV 538",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Concerto en sol majeur BWV 592",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bach J.S.",
            "titre": "Prélude et Fugue en do majeur BWV 547",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Arnsesen K.A.",
            "titre": "Pie Jesu",
            "periode": "Contemporain",
            "formation": "Chant et orgue",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Arnsesen K.A.",
            "titre": "Magnificat",
            "periode": "Contemporain",
            "formation": "Chœur et instruments",
            "remarque": "Extraits"
        },
        {
            "genre": "Clavier",
            "compositeur": "Boëllmann L.",
            "titre": "Suite gothique op.25",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Lefébure-Wély L.J.A.",
            "titre": "Boléro de concert op.166",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Lefébure-Wély L.J.A.",
            "titre": "Sortie en mi bémol",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Janacek L.",
            "titre": "Veni Sancte spiritus",
            "periode": "Moderne",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Luzzaschi L.",
            "titre": "Toccata del quarto tono",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Luzzaschi L.",
            "titre": "Ricercare del primo tono",
            "periode": "Renaissance",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Marenzio L.",
            "titre": "O Rex gloriae",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Marenzio L.",
            "titre": "Hodie Christus natus est",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Van Beethoven L.",
            "titre": "Romance op.50",
            "periode": "Romantique",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Vierne L.",
            "titre": "1ère Symphonies",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": "Extraits"
        },
        {
            "genre": "Clavier",
            "compositeur": "Vierne L.",
            "titre": "Carillon de Westminster",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Daquin L.-C.",
            "titre": "Noël suisse",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Daquin L.-C.",
            "titre": "Noël étranger",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Clérembault L.-N.",
            "titre": "2ème Suite pour orgue",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Lully J.-B.",
            "titre": "Dixit Dominus",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Lully J.-B.",
            "titre": "Laudate Pueri Dominum",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Lully J.-B.",
            "titre": "O Dulcissime Domino",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Lully J.-B.",
            "titre": "Salve Regina",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Duruflé M.",
            "titre": "Prélude à l'Introït de l'Epiphanie",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Duruflé M.",
            "titre": "Prélude et Fugue sur le nom d'Alain op. 7",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Duruflé M.",
            "titre": "Notre Père",
            "periode": "Moderne",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Duruflé M.",
            "titre": "Quatre motets op.10",
            "periode": "Moderne",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Haller M.",
            "titre": "Justus ut palma",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Haydn M.",
            "titre": "Jesu Redemptor omnium",
            "periode": "Classique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Haydn M.",
            "titre": "Heiligste Nacht",
            "periode": "Classique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Hermesdorff M.",
            "titre": "Joseph, fili David",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Lauridsen M.",
            "titre": "O nata lux",
            "periode": "Contemporain",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Reger M.",
            "titre": "Unser lieben Frauen Traum",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Reger M.",
            "titre": "Introduction et Passacaille en ré mineur",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Strokine M.",
            "titre": "Slava v vychnih bogou",
            "periode": "Romantique",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Weckmann M.",
            "titre": "Fantaisie en ré mineur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Weckmann M.",
            "titre": "Toccata en ré mineur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Bruhns N.",
            "titre": "Prélude en mi mineur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": "Le grand !"
        },
        {
            "genre": "Messe",
            "compositeur": "Cajeux N.",
            "titre": "Missa brevis Misericordiæ Dei",
            "periode": "Contemporain",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "De Grigny N.",
            "titre": "A solis ortus cardine",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "De Grigny N.",
            "titre": "Veni Creator",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "De Grigny N.",
            "titre": "Ave Maris Stella",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Gade N.",
            "titre": "Trois pièces pour orgue op. 22",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Jommelli N.",
            "titre": "Missa pro defunctis",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Jommelli N.",
            "titre": "Te Deum",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Non Papa C.",
            "titre": "Ascendit Deus",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Di Lasso O.",
            "titre": "Missa jäger",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Gjeilo O.",
            "titre": "Northern Lights",
            "periode": "Contemporain",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Lagger O.",
            "titre": "Louez le Seigneur",
            "periode": "Contemporain",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Messiaen O.",
            "titre": "Apparition de l'Eglise éternelle",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Messiaen O.",
            "titre": "L'Ascension",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Messiaen O.",
            "titre": "La Nativité du Seigneur",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": "Extraits"
        },
        {
            "genre": "Clavier",
            "compositeur": "Davide P.",
            "titre": "Sinfonia col tanto applaudito Inno populare",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "De Sarasate P.",
            "titre": "Fantaisie de Carmen op.25",
            "periode": "Romantique",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Eben P.",
            "titre": "Fenêtres",
            "periode": "Contemporain",
            "formation": "Trompette et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Hindemith P.",
            "titre": "Sonate no2 pour orgue",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Palestrina G.P.",
            "titre": "Missa in Festis Apostolor",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": "Extrait"
        },
        {
            "genre": "Motet",
            "compositeur": "Palestrina G.P.",
            "titre": "Ardens est cor meum",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Palestrina G.P.",
            "titre": "Apparuit caro suo Johanni",
            "periode": "Renaissance",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Praetorius J.",
            "titre": "Magnificat Quarti Toni",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Ropartz G.",
            "titre": "Le miracle de Saint Nicolas",
            "periode": "Moderne",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Fredman s.",
            "titre": "She walks in Beauty",
            "periode": "Contemporain",
            "formation": "Chant et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Karg-Elert S.",
            "titre": "Nun danket alle Gott",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Prokoviev S.",
            "titre": "Pierre et le loup op.67",
            "periode": "Moderne",
            "formation": "Orgue",
            "remarque": "Transcription"
        },
        {
            "genre": "Clavier",
            "compositeur": "Dubois T.",
            "titre": "Toccata",
            "periode": "Romantique",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Dubois T.",
            "titre": "Adoramus te, Christe",
            "periode": "Romantique",
            "formation": "Chœur et orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Merula T.",
            "titre": "Toccata e genus cromaticum",
            "periode": "Renaissance",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Vitali T.A.",
            "titre": "Chaconne",
            "periode": "Baroque",
            "formation": "Violon et orgue",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "De Victoria T.L.",
            "titre": "Répons de la -Semaine sainte",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": "Extraits"
        },
        {
            "genre": "Motet",
            "compositeur": "De Victoria T.L.",
            "titre": "Ave Maria",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Aubertin V.",
            "titre": "Te lucis ante terminum",
            "periode": "Contemporain",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Lübeck V.",
            "titre": "Prélude et Fugue en do mineur",
            "periode": "Baroque",
            "formation": "Orgue",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Rathgeber V.",
            "titre": "Missa suavis est Dominus",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Rathgeber V.",
            "titre": "Missa beati omnes",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Villard V.",
            "titre": "Eli, Eli, une passion",
            "periode": "Contemporain",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Vivaldi A.",
            "titre": "Gloria RV 589",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Vivaldi A.",
            "titre": "Concerto pour orgue et cordes RV 541",
            "periode": "Baroque",
            "formation": "Ensemble instrumental",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Vivaldi A.",
            "titre": "Magnificat RV 611",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Vivaldi A.",
            "titre": "Magnificat RV 610",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Vivaldi A.",
            "titre": "Laetatus sum RV 607",
            "periode": "Baroque",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Byrd W.",
            "titre": "The Bells",
            "periode": "Renaissance",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Byrd W.",
            "titre": "Hodie beata Virgo Maria",
            "periode": "Renaissance",
            "formation": "Chœur a capella",
            "remarque": ""
        },
        {
            "genre": "Clavier",
            "compositeur": "Byrd W.",
            "titre": "Galliardia",
            "periode": "Renaissance",
            "formation": "Clavecin",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Mozart W.A",
            "titre": "Veni Sancte spiritus KV 47",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Musique d'ensemble",
            "compositeur": "Mozart W.A",
            "titre": "Laudate Dominum KV 339",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Mozart W.A",
            "titre": "Sancta Maria KV 273",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Mozart W.A",
            "titre": "Ave verum",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Mozart W.A",
            "titre": "Grande messe en do mineur KV 427",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Messe",
            "compositeur": "Mozart W.A",
            "titre": "Missa brevis en si bémol majeur KV 275",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Mozart W.A",
            "titre": "Te Deum",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Oratorio",
            "compositeur": "Mozart W.A",
            "titre": "Alma Dei Creatoris",
            "periode": "Classique",
            "formation": "Chœur et instruments",
            "remarque": ""
        },
        {
            "genre": "Motet",
            "compositeur": "Kodaly Z.",
            "titre": "Pange lingua",
            "periode": "Moderne",
            "formation": "Chœur et orgue",
            "remarque": ""
        }
    ],

    // Statistiques par genre
    statistiques: {
        parGenre: {
            "Clavier": 122,
            "Motet": 99,
            "Cantate": 62,
            "Musique d'ensemble": 30,
            "Messe": 18,
            "Oratorio": 16,
            "Composition": 7,
            "Chanson": 1,
            "Chant grégorien": 1
        },
        
        parPeriode: {
            "Baroque": 223,
            "Renaissance": 73,
            "Romantique": 66,
            "Moderne": 21,
            "Contemporain": 18,
            "Classique": 14,
            "Médiéval": 1
        },
        
        parFormation: {
            "Chœur et instruments": 165,
            "Orgue": 115,
            "Chœur a capella": 68,
            "Clavecin": 24,
            "Chœur et orgue": 15,
            "Violon et orgue": 9,
            "Violoncelle et orgue": 5,
            "Trompette et orgue": 4,
            "Ensemble instrumental": 4,
            "Chant et orgue": 3
        },
        
        total: 406,
        
        // Compositeurs les plus représentés
        principauxCompositeurs: {
            "Bach J.S.": 79,
            "Buxtehude D.": 11,
            "Di Lasso O.": 8,
            "Waeber J.-D.": 7,
            "Clérembault L.-N.": 7,
            "Sweelinck J.P.": 7,
            "Frescobaldi G.": 6,
            "Mendelssohn F.": 6,
            "Nanino G.M.": 5,
            "Hassler H.L.": 4
        }
    },

    // Fonctions utilitaires
    filtrerParGenre: function(genre) {
        return this.oeuvres.filter(oeuvre => oeuvre.genre === genre);
    },

    filtrerParPeriode: function(periode) {
        return this.oeuvres.filter(oeuvre => oeuvre.periode === periode);
    },

    filtrerParFormation: function(formation) {
        return this.oeuvres.filter(oeuvre => oeuvre.formation === formation);
    },

    rechercherParCompositeur: function(compositeur) {
        return this.oeuvres.filter(oeuvre => 
            oeuvre.compositeur.toLowerCase().includes(compositeur.toLowerCase())
        );
    },

    rechercherParTitre: function(titre) {
        return this.oeuvres.filter(oeuvre => 
            oeuvre.titre.toLowerCase().includes(titre.toLowerCase())
        );
    },

    // Obtenir toutes les valeurs uniques pour les filtres
    obtenirGenres: function() {
        return [...new Set(this.oeuvres.map(oeuvre => oeuvre.genre))].sort();
    },

    obtenirPeriodes: function() {
        return [...new Set(this.oeuvres.map(oeuvre => oeuvre.periode))].filter(p => p).sort();
    },

    obtenirFormations: function() {
        return [...new Set(this.oeuvres.map(oeuvre => oeuvre.formation))].sort();
    }
};

// Export pour usage en module (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = repertoireData;
}