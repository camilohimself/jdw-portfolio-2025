// Données agenda authentiques Jean-David Waeber
// 24 événements de Août 2025 à Juin 2026
// Mis à jour depuis le CSV source - Session 9 Août 2025

const eventsData = {
    // Événements authentiques - 24 prestations
    evenements: [
        {
            "date": "Vendredi 29 août 2025",
            "heure": "19h00",
            "titre": "Souffle sacré",
            "qui": "Duo avec Laure Barras",
            "lieu": "Eglise d'Arbaz",
            "description": "Voyage dans la musique sacrée de Bach aux auteurs contemporains",
            "lien": ""
        },
        {
            "date": "2025-09-06",
            "heure": "13h00",
            "titre": "Lumières du Sacré : Musique spirituelle de la Renaissance",
            "qui": "Ensemble Ad Astra",
            "lieu": "Cathédrale de Sion",
            "description": "Polyphonies sacrées de la Renaissance (Palestrina, Byrd, di Lasso, etc.) en voix de femmes avec sacqueboutes et orgue dans le cadre de la Schubertiade d'Espace 2",
            "lien": "https://avecvous.rts.ch/dossiers/schubertiade-rts-espace-2",
            "category": "concerts"
        },
        {
            "date": "2025-09-06",
            "heure": "16h30",
            "titre": "Lumières du Sacré : Musique spirituelle de la Renaissance",
            "qui": "Ensemble Ad Astra",
            "lieu": "Eglise St-Théodule de Sion",
            "description": "Polyphonies sacrées de la Renaissance (Palestrina, Byrd, di Lasso, etc.) en voix de femmes avec sacqueboutes et orgue dans le cadre de la Schubertiade d'Espace 2",
            "lien": "https://avecvous.rts.ch/dossiers/schubertiade-rts-espace-2",
            "category": "concerts"
        },
        {
            "date": "2025-09-07",
            "heure": "10h00",
            "titre": "Bach, Herz und Mund und Tat und Leben BWV 147",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2025-09-07",
            "heure": "13h30",
            "titre": "Gounod en lumière",
            "qui": "Chœur Pro Arte Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Œuvres chorales Charles Gounod",
            "lien": "https://proarte-sion.ch",
            "category": "concerts"
        },
        {
            "date": "2025-09-28",
            "heure": "17h00",
            "titre": "Gounod en lumière",
            "qui": "Chœur Pro Arte Sion",
            "lieu": "Eglise de Bramois",
            "description": "Œuvres chorales Charles Gounod",
            "lien": "https://proarte-sion.ch",
            "category": "concerts"
        },
        {
            "date": "2025-10-12",
            "heure": "17h00",
            "titre": "Gounod en lumière",
            "qui": "Chœur Pro Arte Sion",
            "lieu": "Eglise de Finhaut",
            "description": "Œuvres chorales Charles Gounod",
            "lien": "https://proarte-sion.ch",
            "category": "concerts"
        },
        {
            "date": "2025-10-19",
            "heure": "10h00",
            "titre": "Wohl dem, der sich auf seinen Gott BWV 139",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2025-11-16",
            "heure": "10h00",
            "titre": "Bach, Allein zu dir, Herr Jesu Christ BWV 33",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2025-11-30",
            "heure": "17h00",
            "titre": "Le baroque au féminin : Chiara Marguerita Cozzolani",
            "qui": "Ensemble vocal de la Maîtrise de la Cathédrale de Sion en Ensemble Barberine de Lausanne",
            "lieu": "Cathédrale de Sion",
            "description": "Œuvres méconnues de la compositrice milanaise Chiara Marguerita Cozzolani",
            "lien": "",
            "category": "concerts"
        },
        {
            "date": "2025-12-07",
            "heure": "17h00",
            "titre": "750e de la Cathédrale de Lausanne: Britten et Ropartz",
            "qui": "Chœur Ardito et Chœur Pro Arte Lausanne",
            "lieu": "Cathédrale de Lausanne",
            "description": "La grande cantate Saint Nicolas de Benjamin Britten et celle moins connue Le miracle de Saint Nicolas de Guy Ropartz dans le cadre des 750 ans de la Cathédrale de Lausanne",
            "lien": "https://www.vd.ch/fileadmin/user_upload/accueil/fichiers_pdf/2025_janvier_actus/Programme_750e_Cathédrale.pdf",
            "category": "concerts"
        },
        {
            "date": "2025-12-11",
            "heure": "19h30",
            "titre": "Vespérale d'orgue",
            "qui": "Musique d'orgue",
            "lieu": "Cathédrale de Sion",
            "description": "40 minutes de musique d'orgue",
            "lien": "",
            "category": "recitals"
        },
        {
            "date": "2025-12-21",
            "heure": "10h00",
            "titre": "Bach, Schwingt freudig euch empor BWV 36",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2025-12-21",
            "heure": "17h00",
            "titre": "Au ciel et sur la terre",
            "qui": "Chœur des Collèges de Sion et Ecole maîtrisienne de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Plus de cent jeunes jouent et chantent un répertoire varié autour de Noël",
            "lien": "",
            "category": "concerts"
        },
        {
            "date": "2025-12-26",
            "heure": "19h30",
            "titre": "Noël à Venise",
            "qui": "Ensemble Ad Astra et Collectif 7 Sed Unum",
            "lieu": "Cathédrale de Sion",
            "description": "Les célèbres Gloria et Magnificat d'Antonio Vivaldi dans leur version originale en voix féminines",
            "lien": "",
            "category": "concerts"
        },
        {
            "date": "2026-01-18",
            "heure": "10h00",
            "titre": "Bach, Christ unser Herr zum Jordan kam BWV 7",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2026-02-15",
            "heure": "10h00",
            "titre": "Bach, Alles nur nach Gottes Willen BWV 72",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2026-02-17",
            "heure": "20h00",
            "titre": "La théorie des modes antiques dans la musique baroque",
            "qui": "Conférence avec démonstrations au clavecin",
            "lieu": "Salle Noda BCVS",
            "description": "Conférence de Marie Favre et Philippe Vuadens illustrée d'exemples musicaux",
            "lien": "",
            "category": "conferences"
        },
        {
            "date": "2026-02-21",
            "heure": "20h15",
            "titre": "Au ciel et sur la terre",
            "qui": "Ecole maîtrisienne de la Cathédrale de Sion",
            "lieu": "Eglise de Susten",
            "description": "Environ 25 jeunes en formation à la Cathédrale de Sion présentent un programme varié de musique sacrée",
            "lien": "",
            "category": "concerts"
        },
        {
            "date": "2026-03-15",
            "heure": "10h00",
            "titre": "Bach, Jesu, meine Freude BWV 227",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2026-04-19",
            "heure": "10h00",
            "titre": "Bach, Erfreut euch, ihr Herzen BWV 66",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2026-05-10",
            "heure": "10h00",
            "titre": "Bach, Du sollt Gott, deinen Herren, lieben BWV 77",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        },
        {
            "date": "2026-05-17",
            "heure": "17h00",
            "titre": "Bach, Auf Christi Himmelfahrt allein BWV 128",
            "qui": "Chœur Ardito de Lausanne",
            "lieu": "Eglise St-Laurent de Lausanne",
            "description": "Cantate de Bach dans le cadre de Cantate et Parole",
            "lien": "https://www.cantateetparole.org/#:~:text=«%20Cantate%20et%20Parole%20»%20est%20une,entendre%20une%20cantate%20de%20J.S.",
            "category": "concerts"
        },
        {
            "date": "2026-06-21",
            "heure": "10h00",
            "titre": "Bach, Man singet mit Freuden vom Sieg BWV 149",
            "qui": "Ensemble vocal et instrumental de la Maîtrise de la Cathédrale de Sion",
            "lieu": "Cathédrale de Sion",
            "description": "Cycle de cantates de Bach dans le cadre de la messe",
            "lien": "",
            "category": "liturgie"
        }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = eventsData;
}