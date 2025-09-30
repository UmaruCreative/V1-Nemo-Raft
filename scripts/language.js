// Bilingual language switching functionality

class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = this.getTranslations();
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.loadLanguagePreference();
    }

    getTranslations() {
        return {
            fi: {
                // Navigation
                'Menu': 'Menu',
                'Our Waffles': 'Vohvelit',
                'Ambience': 'Tunnelma',
                'Visit Us': 'Vieraile',
                'Contact': 'Yhteystiedot',

                // Hero
                'Welcome to Nemo\'s Raft — Floating restaurant & bar in Jyväskylä harbor': 'Tervetuloa Nemo\'s Raftiin — Kelluva ravintola & baari Jyväskylän satamassa',
                'Waffles — savory & sweet, wine, beer & more': 'Vohvelit — suolaiset & makeat, viini, olut & muuta',
                'View Menu': 'Katso Menu',
                'Visit Nemo\'s Raft': 'Vieraile Nemo\'s Raftissa',

                // Waffle Types
                'Two ways to enjoy our waffles': 'Kaksi tapaa nauttia vohveleitamme',
                'Light, fruity & indulgent': 'Kevyt, hedelmäinen & herkullinen',
                'Fresh, herby & satisfying': 'Tuore, yrttinen & tyydyttävä',
                'Gluten-free options available': 'Gluteenittomia vaihtoehtoja saatavilla',

                // Drinks
                'Raise a glass by Lake Jyväsjärvi': 'Nosta malja Jyväsjärven rannalla',
                'Coffee, local beers, wine & refreshing cocktails — always better with a lakeside view': 'Kahvi, paikallisia oluita, viini & virkistäviä cocktaileja — aina parempia järvinäkymän kanssa',

                // Menu
                'Our Menu': 'Menu',
                '10 signature waffles, refreshing drinks & kids\' options': '10 erikoisvohvelia, virkistäviä juomia & lastenvaihtoehtoja',
                'Sweet Waffles': 'Makeat Vohvelit',
                'Savory Waffles': 'Suolaiset Vohvelit',
                'Drinks': 'Juomat',
                'For Kids': 'Lapsille',

                // Menu Items
                'Bilberry Cream': 'Mustikkakerma',
                'Sweet Finnish berries with smooth cream': 'Makeita suomalaisia marjoja sileän kerman kanssa',
                'Chocolate Hazelnut Indulgence': 'Suklaapähkinäherkku',
                'Rich, nutty, and perfect for cozy evenings': 'Rikas, pähkinäinen, täydellinen viihtyisiin iltoihin',
                'Savory Dill Veggie': 'Suolainen Tillivihreä',
                'Fresh herbs & cream, Nordic-inspired': 'Tuoreita yrttejä & kermaa, pohjoismaisesti inspiroitunut',
                'Local Beer': 'Paikallinen Olut',
                'Draft from Jyväskylä microbrewery': 'Hanasta Jyväskylän pienpanimosta',
                'Favorite': 'Suosikki',
                'New': 'Uusi',

                // Specials
                'Our must-try waffles': 'Pakko maistaa -vohvelit',
                'Sweet Finnish berries & cream indulgence': 'Makeita suomalaisia marjoja & kermaherkku',
                'Nemo\'s signature. Nordic herbs with creamy balance': 'Nemon erikoisuus. Pohjoismaisia yrttejä kermaisen tasapainon kanssa',

                // Ambience
                'Relax on the raft': 'Rentoudu lautalla',
                'Bar seating, sunny terrace, cozy lakeside views — the perfect summer spot': 'Baarituolit, aurinkoinen terassi, viihtyisä järvinäkymä — täydellinen kesäpaikka',
                'Terrace seating': 'Terassipaikat',
                'Sunset views': 'Auringonlaskun näkymät',
                'Lakeside dining': 'Järvenrantaruokailu',
                'Bar area': 'Baarialue',
                'Cozy atmosphere': 'Viihtyisä tunnelma',

                // Visit
                'Visit Nemo\'s Raft': 'Vieraile Nemo\'s Raftissa',
                'Opening Hours': 'Aukioloajat',
                'Open Wednesday – Sunday, 12:00 – 18:00': 'Avoinna keskiviikko – sunnuntai, 12:00 – 18:00',
                'We operate weather permitting. If weather forces a closure, we post updates on our Instagram & Facebook so you can check before you come.': 'Toimimme säiden salliessa. Jos sää pakottaa sulkemaan, päivitämme tilannetta Instagramissa ja Facebookissa.',
                'Location': 'Sijainti',
                'Satamakatu 8, pier i3, Jyväskylä harbor': 'Satamakatu 8, laituri i3, Jyväskylän satama',
                'About 10–15 minutes\' walk from Jyväskylä train station. Parking available near the harbor.': 'Noin 10–15 minuutin kävelymatka Jyväskylän rautatieasemalta. Pysäköinti saatavilla sataman läheisyydessä.',
                'Open Google Maps': 'Avaa Google Maps',
                'Call Us': 'Soita meille',
                'Takeaway and on-site dining available — enjoy Nemo\'s waffles your way': 'Mukaan otettavaa ja paikan päällä ruokailua saatavilla — nauti Nemon vohveleita omalla tavallasi',

                // Events
                'Groups & events': 'Ryhmät & tapahtumat',
                'Pre-order for Groups': 'Ennakkotilaus ryhmille',
                'Planning a gathering? Order waffles for your group — please confirm orders 48 hours in advance so we can serve them at their freshest.': 'Suunniteletko kokoontumista? Tilaa vohveleit ryhmällesi — vahvista tilaukset 48 tuntia etukäteen, jotta voimme tarjota ne tuoreimmillaan.',
                'Pre-order for event': 'Ennakkotilaus tapahtumaan',
                'Private Bookings': 'Yksityistilaisuudet',
                'Want the whole raft for a party or corporate event? Private bookings are possible — we\'ll help you plan the best lakeside moment.': 'Haluatko koko lautan juhliin tai yritystilaisuuteen? Yksityisvuokraus on mahdollista — autamme suunnittelemaan parhaan järvenrantahetken.',
                'Enquire about private booking': 'Tiedustele yksityisvuokrausta',

                // FAQ
                'Practical info': 'Käytännön tietoa',
                'Can I bring my children?': 'Voinko tuoda lapseni?',
                'Yes — we offer kid-friendly waffles and a relaxed terrace for families.': 'Kyllä — tarjoamme lapsystävällisiä vohveleit ja rennon terassin perheille.',
                'Can I bring my dog?': 'Voinko tuoda koirani?',
                'Yes — dogs are welcome on the terrace.': 'Kyllä — koirat ovat tervetulleita terassille.',
                'Is there parking nearby?': 'Onko lähettyvillä pysäköintiä?',
                'Public parking at the harbor; short walk to the raft.': 'Julkinen pysäköinti satamassa; lyhyt kävelymatka lautalle.',
                'How do I get here from the train station?': 'Miten pääsen tänne rautatieasemalta?',
                'About 10–15 minutes on foot along the harbor path.': 'Noin 10–15 minuuttia kävellen sataman reittiä pitkin.',

                // Social
                'See our moments': 'Katso hetkiämme',
                'Follow us on Instagram & Facebook @nemosraft for our latest updates.': 'Seuraa meitä Instagramissa ja Facebookissa @nemosraft viimeisimmät päivitykset.',

                // Footer
                'Enjoy a peaceful moment on Lake Jyväsjärvi — with a waffle, sweet or savory, in hand.': 'Nauti rauhallisesta hetkestä Jyväsjärvellä — vohveli, makea tai suolainen, kädessä.',
                'Quick Links': 'Pikalinkit',
                'Specials': 'Erikoisuudet',
                'Groups': 'Ryhmät',
                'Contact': 'Yhteystiedot',
                'Wed–Sun: 12:00–18:00': 'Ke–Su: 12:00–18:00',
                '(Weather permitting)': '(Sään salliessa)',
                'Help us improve — share your thoughts': 'Auta meitä parantumaan — jaa ajatuksesi',
                'Privacy & Cookies': 'Tietosuoja & Evästeet'
            }
        };
    }

    setupLanguageToggle() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = button.dataset.lang;
                this.switchLanguage(targetLang);
            });
        });
    }

    switchLanguage(lang) {
        if (lang === this.currentLanguage) return;

        // Update current language
        this.currentLanguage = lang;

        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update text content
        this.updateContent(lang);

        // Save preference
        localStorage.setItem('nemosraft-language', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    updateContent(lang) {
        const elements = document.querySelectorAll('[data-en]');
        
        elements.forEach(element => {
            const englishText = element.dataset.en;
            const finnishText = element.dataset.fi;
            
            if (lang === 'fi' && finnishText) {
                element.textContent = finnishText;
            } else {
                element.textContent = englishText;
            }
        });

        // Update document title
        if (lang === 'fi') {
            document.title = 'Nemo\'s Raft — Kelluva ravintola & vohvelit | Jyväskylä (Jyväsjärvi)';
        } else {
            document.title = 'Nemo\'s Raft — Floating restaurant & waffles | Jyväskylä (Lake Jyväsjärvi)';
        }

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            if (lang === 'fi') {
                metaDescription.setAttribute('content', 'Nemo\'s Raft — Nauti makeista & suolaisista vohveleista, kahvista, oluesta & viinistä kelluvalla lautalla Jyväskylän satamassa (Jyväsjärvi). Avoinna ke–su 12–18 (sään salliessa).');
            } else {
                metaDescription.setAttribute('content', 'Nemo\'s Raft — Enjoy sweet & savory waffles, coffee, beer & wine on a floating raft at Jyväskylä harbor (Lake Jyväsjärvi). Open Wed–Sun 12–18 (weather permitting).');
            }
        }
    }

    loadLanguagePreference() {
        const savedLang = localStorage.getItem('nemosraft-language');
        const browserLang = navigator.language.substring(0, 2);
        
        // Determine initial language
        let initialLang = 'en';
        if (savedLang && (savedLang === 'en' || savedLang === 'fi')) {
            initialLang = savedLang;
        } else if (browserLang === 'fi') {
            initialLang = 'fi';
        }

        // Switch to determined language
        if (initialLang !== 'en') {
            this.switchLanguage(initialLang);
        }
    }
}

// Initialize language manager
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});

// Export for use in other scripts if needed
window.LanguageManager = LanguageManager;