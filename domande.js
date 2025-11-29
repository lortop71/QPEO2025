// Database delle domande
        const questionDatabase = [
            
			// A02 - Lavoro 
			{
				question: "Quale legge nazionale disciplina il lavoro agile nel settore pubblico?",
				options: ["Legge n. 104/1992", "Legge n. 165/2001", "Legge n. 81/2017", "Legge n. 191/1998"],
				correct: 2,
				motivation: "La legge n. 81/2017 è la norma nazionale che disciplina il lavoro agile, con particolare riferimento alla conciliazione dei tempi di vita e di lavoro.",
				category: "Normativa lavoro agile"
			},
			{
				question: "Quale circolare segretariale ha introdotto le prime linee guida sul lavoro agile in Corte dei conti dopo il periodo emergenziale?",
				options: ["Circolare n. 244/2023", "Circolare n. 270/2022", "Circolare n. 165/2021", "Circolare n. 180/2022"],
				correct: 1,
				motivation: "La circolare segretariale n. 270/2022 ha definito le linee guida per lo svolgimento del lavoro agile, disciplinando le attività espletabili in modalità agile e introducendo il lavoro per obiettivi.",
				category: "Normativa lavoro agile"
			},
			{
				question: "Qual è il tetto massimo di giorni di lavoro agile per anno solare per il personale ordinario?",
				options: ["110 giorni", "92 giorni", "80 giorni", "120 giorni"],
				correct: 1,
				motivation: "Il tetto massimo di lavoro agile è fissato a 92 giorni per anno solare per il personale ordinario, mentre per i lavoratori fragili è previsto un limite più ampio di 110 giorni.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale profilo orario giornaliero deve essere rispettato nel lavoro agile?",
				options: ["6,00 ore", "8,00 ore", "7,12 ore", "7,42 ore"],
				correct: 2,
				motivation: "Il profilo orario nel lavoro agile è di 7,12 ore giornaliere, che diventano 7,42 ore se si include la pausa pranzo e il buono pasto.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Entro quale data deve essere pubblicata annualmente la circolare segretariale che regola il lavoro agile per l'anno successivo?",
				options: ["31 dicembre", "30 novembre", "31 ottobre", "15 dicembre"],
				correct: 1,
				motivation: "Entro il 30 novembre di ogni anno viene pubblicata la circolare segretariale che disciplina il lavoro agile per l'anno solare successivo.",
				category: "Scadenze lavoro agile"
			},
			{
				question: "Quale decreto presidenziale ha introdotto il Piano Integrato Triennale (PIT Cdc)?",
				options: ["Decreto n. 160 del 3 luglio 2023", "Decreto n. 180 del 5 giugno 2023", "Decreto n. 150 del 3 luglio 2022", "Decreto n. 170 del 10 luglio 2023"],
				correct: 0,
				motivation: "Il decreto presidenziale n. 160 del 3 luglio 2023 ha introdotto il Piano Integrato Triennale, documento unitario di programmazione triennale degli interventi dell'Istituto.",
				category: "PIT e programmazione"
			},
			{
				question: "Quale principio deve essere rispettato nella fruizione del lavoro agile?",
				options: ["Principio della parità", "Principio della rotazione", "Principio della prevalenza", "Principio della flessibilità"],
				correct: 2,
				motivation: "Deve essere rispettato il criterio della prevalenza (settimanale, mensile e trimestrale) della presenza in servizio rispetto al lavoro agile.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Con quale periodicità deve essere compilata la Scheda di rendicontazione unificata?",
				options: ["Mensile", "Semestrale", "Trimestrale", "Annuale"],
				correct: 2,
				motivation: "La Scheda trimestrale di rendicontazione unificata deve essere compilata con periodicità trimestrale dal dipendente in lavoro agile.",
				category: "Monitoraggio lavoro agile"
			},
			{
				question: "Quale articolo del CCNL 2019-2021 disciplina il lavoro agile?",
				options: ["Articolo 3, lettera f", "Articolo 5, lettera g", "Articolo 7, lettera h", "Articolo 4, lettera e"],
				correct: 1,
				motivation: "L'articolo 5, lettera g del CCNL 2019-2021 è oggetto di confronto con le parti sindacali in materia di lavoro agile.",
				category: "Normativa lavoro agile"
			},
			{
				question: "Quale percentuale del personale della Corte dei conti può aderire al lavoro agile per l'anno 2024?",
				options: ["50%", "75%", "90%", "100%"],
				correct: 3,
				motivation: "La circolare segretariale n. 244 del 30 novembre 2023 conferma la possibilità per il 100% del personale della Corte dei conti di aderire volontariamente al lavoro agile.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Cosa comporta il mancato rispetto dei presupposti del lavoro agile?",
				options: ["Solo una segnalazione scritta", "Sospensione temporanea, revoca o mancato rinnovo", "Riduzione dello stipendio", "Cambio di sede"],
				correct: 1,
				motivation: "Il mancato rispetto dei presupposti del lavoro agile può comportare la sospensione temporanea, la revoca dell'accordo in corso o il mancato rinnovo per l'anno successivo, anche in caso di sanzioni disciplinari.",
				category: "Conseguenze lavoro agile"
			},
			{
				question: "Quale strumento contrattuale regola individualmente il lavoro agile?",
				options: ["Contratto di lavoro", "Accordo individuale", "Lettera di incarico", "Delibera amministrativa"],
				correct: 1,
				motivation: "L'accordo individuale di lavoro agile è lo strumento che regola la prestazione lavorativa in modalità agile, contenente il progetto, il calendario e il cronoprogramma delle attività.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Qual è il limite massimo di giorni di lavoro agile per i lavoratori fragili?",
				options: ["92 giorni", "100 giorni", "110 giorni", "120 giorni"],
				correct: 2,
				motivation: "Per i lavoratori fragili il tetto massimo di lavoro agile è di 110 giorni per anno solare, superiore rispetto ai 92 giorni previsti per il personale ordinario.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale Direzione generale coordina il monitoraggio trimestrale sul lavoro agile?",
				options: ["Direzione generale affari generali", "Direzione generale gestione risorse umane", "Direzione generale bilancio", "Direzione generale informatica"],
				correct: 1,
				motivation: "La Direzione generale gestione risorse umane coordina il monitoraggio trimestrale sul lavoro agile tramite riunioni di coordinamento con i dirigenti centrali e territoriali.",
				category: "Organizzazione lavoro agile"
			},
			{
				question: "Quale obiettivo strategico del PIT Cdc riguarda il lavoro agile?",
				options: ["Obiettivo A.1.2", "Obiettivo A.2.3", "Obiettivo B.3.1", "Obiettivo C.2.4"],
				correct: 1,
				motivation: "L'obiettivo operativo A.2.3 del PIT Cdc riguarda l'implementazione del lavoro a distanza e di un nuovo sistema di indicatori per la prevenzione dell'assenteismo.",
				category: "PIT e programmazione"
			},
			{
				question: "Quale legge disciplina la gestione delle assenze per l'utilizzo dei permessi?",
				options: ["Legge n. 81/2017", "Legge n. 104/1992", "Legge n. 165/2001", "Legge n. 191/1998"],
				correct: 1,
				motivation: "La legge n. 104/1992 disciplina le autorizzazioni e revoche per l'utilizzo dei permessi, rilevanti anche per la corretta fruizione del lavoro agile.",
				category: "Normativa lavoro agile"
			},
			{
				question: "Quale modalità di lavoro da remoto è attualmente in fase di studio di fattibilità?",
				options: ["Smart working", "Lavoro agile", "Telelavoro", "Lavoro ibrido"],
				correct: 2,
				motivation: "Il telelavoro (lavoro da remoto), disciplinato dalla legge n. 191/1998, è attualmente oggetto di uno studio di fattibilità in corso di svolgimento presso la Corte dei conti.",
				category: "Evoluzione lavoro agile"
			},
			{
				question: "Cosa deve contenere la Scheda trimestrale di rendicontazione unificata?",
				options: ["Solo le ore lavorate", "Solo gli obiettivi raggiunti", "Linee di attività, risultati raggiunti e indicatori specifici", "Solo il numero di giorni in agile"],
				correct: 2,
				motivation: "La Scheda trimestrale di rendicontazione unificata deve contenere l'indicazione analitica delle linee di attività previste nell'accordo individuale, i risultati raggiunti e la loro quantificazione con specifici indicatori.",
				category: "Monitoraggio lavoro agile"
			},
			{
				question: "Quale principio organizzativo caratterizza il lavoro agile secondo la circolare n. 270/2022?",
				options: ["Lavoro per turni", "Lavoro per obiettivi", "Lavoro per mansioni", "Lavoro per progetti"],
				correct: 1,
				motivation: "La circolare segretariale n. 270/2022 introduce il lavoro per obiettivi come caratteristica fondamentale del lavoro agile, prevedendo un progetto individuale di lavoro in autonomia.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale struttura della Direzione generale gestione risorse umane gestisce specificamente il lavoro agile?",
				options: ["Servizio concorsi", "Servizio mobilità", "Servizio per il trattamento giuridico del personale amministrativo", "Servizio relazioni sindacali"],
				correct: 2,
				motivation: "Il Servizio per il trattamento giuridico del personale amministrativo ha uno specifico settore dedicato alla gestione del lavoro agile, ai monitoraggi e alla verifica delle Schede di rendicontazione unificata.",
				category: "Organizzazione lavoro agile"
			},
			{
				question: "Quando è stato avviato il processo di semplificazione e monitoraggio trimestrale del lavoro agile?",
				options: ["Dal 2022", "Dal 2023", "Dal 2024", "Dal 2025"],
				correct: 2,
				motivation: "A partire dal 2024 è stato avviato un processo di semplificazione e un attento monitoraggio trimestrale sulle modalità di fruizione del lavoro agile con l'implementazione di un sistema di indicatori.",
				category: "Evoluzione lavoro agile"
			},
			{
				question: "Quale documento del PIT Cdc descrive piani e linee guida per il personale?",
				options: ["Piano operativo annuale", "Linee di indirizzo del Presidente", "Piano dei fabbisogni assunzionali", "Regolamento interno"],
				correct: 2,
				motivation: "Il PIT Cdc descrive piani e linee guida quali il piano dei fabbisogni assunzionali per il personale di magistratura, dirigenziale e amministrativo, le linee guida per il lavoro agile e la strategia della formazione.",
				category: "PIT e programmazione"
			},
			{
				question: "Quale aspetto NON è un vantaggio dell'approccio agile secondo i materiali formativi?",
				options: ["Conciliazione tempi vita-lavoro", "Incremento comunicazione e collaborazione", "Riduzione della retribuzione", "Maggiore adattabilità ai cambiamenti"],
				correct: 2,
				motivation: "La riduzione della retribuzione non è un elemento del lavoro agile. I vantaggi includono la conciliazione dei tempi, l'incremento della comunicazione, la maggiore adattabilità e l'uso di strumenti digitali.",
				category: "Vantaggi lavoro agile"
			},
			{
				question: "Quale rischio è associato all'approccio agile secondo i materiali formativi?",
				options: ["Aumento dello stipendio", "Isolamento e mancanza di supporto sociale", "Riduzione delle competenze", "Perdita del posto di lavoro"],
				correct: 1,
				motivation: "Tra i rischi principali dell'approccio agile vi sono l'isolamento e la mancanza di supporto sociale, oltre alle difficoltà nel separare i tempi di lavoro da quelli della vita privata.",
				category: "Rischi lavoro agile"
			},
			{
				question: "Cosa prevede il criterio della prevalenza nel lavoro agile?",
				options: ["Più giorni in agile che in presenza", "Più giorni in presenza che in agile", "Uguale numero di giorni", "Libera scelta del dipendente"],
				correct: 1,
				motivation: "Il criterio della prevalenza (settimanale, mensile e trimestrale) richiede che i giorni di presenza in servizio siano sempre superiori ai giorni di lavoro agile.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale periodicità hanno gli incontri con i dirigenti per il monitoraggio del lavoro agile?",
				options: ["Settimanale", "Mensile", "Trimestrale", "Semestrale"],
				correct: 2,
				motivation: "Il monitoraggio trimestrale mediante riunioni di coordinamento con i dirigenti centrali e territoriali è previsto per il supporto alla valutazione della performance.",
				category: "Monitoraggio lavoro agile"
			},
			{
				question: "Quale circolare ha confermato la possibilità del 100% di adesione al lavoro agile per il 2024?",
				options: ["Circolare n. 244 del 30 novembre 2023", "Circolare n. 270 del 22 novembre 2022", "Circolare n. 180 del 15 ottobre 2023", "Circolare n. 300 del 31 dicembre 2023"],
				correct: 0,
				motivation: "La circolare segretariale n. 244 del 30 novembre 2023 ha confermato la possibilità per il 100% del personale della Corte dei conti di aderire volontariamente al lavoro agile nell'anno 2024.",
				category: "Normativa lavoro agile"
			},
			{
				question: "Come viene definito il lavoro agile orientato agli obiettivi?",
				options: ["Lavoro subordinato", "Lavoro in autonomia", "Lavoro a chiamata", "Lavoro straordinario"],
				correct: 1,
				motivation: "Il lavoro agile è caratterizzato da un progetto individuale di lavoro in autonomia, con la definizione di obiettivi e indicatori misurabili.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale sistema informativo deve essere utilizzato per la gestione del personale?",
				options: ["SIAP/Spring Cdc", "SAP HR", "Zucchetti", "Oracle HCM"],
				correct: 0,
				motivation: "Il sistema informativo SIAP/Spring Cdc è utilizzato per la gestione del personale, inclusa l'inserimento delle relazioni trimestrali ai fini della liquidazione.",
				category: "Sistemi informativi"
			},
			{
				question: "Quale elemento NON deve essere contenuto nell'accordo individuale di lavoro agile?",
				options: ["Calendario delle attività", "Cronoprogramma", "Linee di attività/obiettivi", "Stipendio mensile"],
				correct: 3,
				motivation: "L'accordo individuale di lavoro agile deve contenere il progetto, il calendario e il cronoprogramma delle attività, non lo stipendio che resta invariato.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale attività NON può essere svolta in modalità agile?",
				options: ["Attività di studio e ricerca", "Attività di front office con pubblico", "Attività di back office", "Redazione documenti"],
				correct: 1,
				motivation: "Le circolari segretariali prevedono l'esclusione di specifiche attività non lavorabili da remoto, come quelle che richiedono necessariamente la presenza fisica per il contatto con il pubblico.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Cosa caratterizza il PIT Cdc rispetto alla programmazione tradizionale?",
				options: ["Separazione dei processi", "Integrazione e semplificazione", "Aumento della burocrazia", "Maggiore complessità"],
				correct: 1,
				motivation: "Il PIT Cdc si caratterizza per una logica di integrazione e semplificazione, finalizzata a una reductio ad unitatem dei diversi processi di programmazione.",
				category: "PIT e programmazione"
			},
			{
				question: "Quale sanzione NON è prevista per il mancato rispetto del lavoro agile?",
				options: ["Sospensione temporanea", "Revoca dell'accordo", "Licenziamento immediato", "Mancato rinnovo"],
				correct: 2,
				motivation: "Per il mancato rispetto dei presupposti del lavoro agile sono previste la sospensione temporanea, la revoca dell'accordo o il mancato rinnovo, non il licenziamento immediato.",
				category: "Conseguenze lavoro agile"
			},
			{
				question: "Quale organo traccia le linee generali per l'indirizzo dell'azione amministrativa?",
				options: ["Il Segretario generale", "Il Direttore generale", "L'Organo di vertice (Presidente)", "Il Collegio dei revisori"],
				correct: 2,
				motivation: "Il Piano Integrato Triennale è redatto in armonia con le linee generali per l'indirizzo dell'azione amministrativa tracciate dall'Organo di vertice della Corte dei conti.",
				category: "PIT e programmazione"
			},
			{
				question: "Quale vantaggio offre l'approccio agile in termini di strumenti?",
				options: ["Riduzione degli strumenti digitali", "Incremento dell'uso degli strumenti digitali", "Eliminazione della tecnologia", "Uso esclusivo della carta"],
				correct: 1,
				motivation: "Tra i vantaggi dell'approccio agile vi è l'incremento dell'uso degli strumenti digitali, favorendo l'innovazione organizzativa e la modernizzazione dei processi.",
				category: "Vantaggi lavoro agile"
			},
			{
				question: "Come viene monitorata la capacità di raggiungimento degli obiettivi nel lavoro agile?",
				options: ["Solo a fine anno", "Attraverso indicatori di risultato", "Con colloqui informali", "Non viene monitorata"],
				correct: 1,
				motivation: "L'aumento della capacità di monitoraggio dei progetti e degli obiettivi avviene attraverso indicatori di risultato definiti nell'accordo individuale e rendicontati trimestralmente.",
				category: "Monitoraggio lavoro agile"
			},
			{
				question: "Quale aspetto è essenziale nell'organizzazione di un team agile?",
				options: ["La competizione interna", "La collaborazione e comunicazione continua", "La separazione dei ruoli", "L'individualismo"],
				correct: 1,
				motivation: "La collaborazione e la comunicazione continua con il team agile sono aspetti principali e essenziali per il corretto funzionamento del lavoro agile.",
				category: "Organizzazione lavoro agile"
			},
			{
				question: "Quale rischio del lavoro agile riguarda la sicurezza?",
				options: ["Maggiori costi", "Accesso non autorizzato a informazioni riservate", "Riduzione dello stipendio", "Perdita di anzianità"],
				correct: 1,
				motivation: "Tra i rischi principali del lavoro agile vi è l'accesso non autorizzato a informazioni riservate, che richiede particolare attenzione alle misure di sicurezza informatica.",
				category: "Rischi lavoro agile"
			},
			{
				question: "Quale obiettivo persegue la programmazione integrata secondo il PIT Cdc?",
				options: ["Complicare le procedure", "Razionalizzare aspetti organizzativi e gestionali", "Aumentare il personale", "Ridurre i servizi"],
				correct: 1,
				motivation: "Il PIT Cdc è finalizzato alla razionalizzazione degli aspetti organizzativi e gestionali e delle risorse umane, finanziarie, strumentali e informatiche.",
				category: "PIT e programmazione"
			},
			{
				question: "Quale rischio comportamentale è associato al lavoro agile?",
				options: ["Maggiore socializzazione", "Difficoltà a separare tempi di lavoro da vita privata", "Aumento della retribuzione", "Minore autonomia"],
				correct: 1,
				motivation: "Uno dei principali rischi del lavoro agile è la difficoltà a separare i tempi dedicati al lavoro da quelli dedicati alla vita privata, richiedendo disciplina personale.",
				category: "Rischi lavoro agile"
			},
			{
				question: "Quale azione è prevista nel 2024 per il lavoro da remoto?",
				options: ["Abolizione completa", "Sperimentazione di progetti di telelavoro", "Riduzione delle giornate", "Eliminazione del part-time"],
				correct: 1,
				motivation: "Nel 2024 è prevista una prima sperimentazione per la definizione di progetti di 'lavoro da remoto (telelavoro)' da assegnare prioritariamente a lavoratori fragili.",
				category: "Evoluzione lavoro agile"
			},
			{
				question: "Quale differenza esiste tra obiettivi generali e specifici?",
				options: ["Non c'è differenza", "I generali sono definiti dal Vertice, gli specifici nel Piano della performance", "Gli specifici sono più importanti", "I generali sono annuali, gli specifici mensili"],
				correct: 1,
				motivation: "Gli obiettivi generali sono determinati con atti di indirizzo strategico dal Vertice dell'Istituto; quelli specifici sono definiti nel Piano integrato triennale-Piano della performance.",
				category: "PIT e programmazione"
			},
			{
				question: "Quale finalità ha l'aggiornamento annuale delle linee guida sul lavoro agile?",
				options: ["Complicare le procedure", "Regolamentare l'anno solare successivo", "Ridurre i diritti dei dipendenti", "Aumentare le ore di lavoro"],
				correct: 1,
				motivation: "Le circolari segretariali annuali, pubblicate entro il 30 novembre, hanno la finalità di regolamentare lo svolgimento del lavoro agile per l'anno solare successivo.",
				category: "Normativa lavoro agile"
			},
			{
				question: "Quale tipo di controllo è previsto sulle Schede di rendicontazione?",
				options: ["Nessun controllo", "Solo controllo annuale", "Verifica trimestrale da parte del Servizio competente", "Controllo casuale"],
				correct: 2,
				motivation: "Il Servizio per il trattamento giuridico del personale amministrativo effettua la verifica trimestrale delle Schede di rendicontazione unificata.",
				category: "Monitoraggio lavoro agile"
			},
			{
				question: "Quale aspetto NON caratterizza il lavoro per obiettivi?",
				options: ["Definizione di indicatori di risultato", "Rendicontazione dei risultati", "Controllo orario rigido", "Programma di attività per obiettivi"],
				correct: 2,
				motivation: "Il lavoro per obiettivi si caratterizza per la definizione di programmi di attività, indicatori di risultato e rendicontazione, non per un controllo orario rigido.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale innovazione organizzativa favorisce il lavoro agile?",
				options: ["Aumento della burocrazia", "Sviluppo di una cultura gestionale orientata al lavoro per obiettivi", "Riduzione dell'autonomia", "Centralizzazione delle decisioni"],
				correct: 1,
				motivation: "Il lavoro agile favorisce lo sviluppo di una cultura gestionale orientata al lavoro per obiettivi e risultati, introducendo nuove soluzioni organizzative.",
				category: "Organizzazione lavoro agile"
			},
			{
				question: "Quale documento deve essere sottoscritto per avviare il lavoro agile?",
				options: ["Contratto a tempo determinato", "Accordo individuale di lavoro agile", "Lettera di dimissioni", "Patto di non concorrenza"],
				correct: 1,
				motivation: "Per avviare il lavoro agile è necessario sottoscrivere un accordo individuale che contenga il progetto, il calendario, il cronoprogramma e gli obiettivi.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale rischio organizzativo può derivare dal lavoro agile?",
				options: ["Aumento dell'efficienza", "Decremento dell'efficienza dei servizi", "Maggiore collaborazione", "Riduzione dei costi"],
				correct: 1,
				motivation: "Tra i rischi del lavoro agile vi è il possibile decremento dell'efficienza dei servizi se non adeguatamente gestito e monitorato.",
				category: "Rischi lavoro agile"
			},
			{
				question: "Quale principio deve guidare la definizione degli accordi individuali?",
				options: ["Massima flessibilità senza limiti", "Equilibrio tra esigenze organizzative e conciliazione vita-lavoro", "Solo interessi del dipendente", "Solo esigenze dell'ufficio"],
				correct: 1,
				motivation: "Gli accordi individuali devono bilanciare le esigenze organizzative dell'ufficio con le finalità di conciliazione dei tempi di vita e di lavoro del dipendente.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale modalità di lavoro è compatibile con il lavoro agile?",
				options: ["Solo lavoro a tempo pieno", "Part-time con riparametrazione del calendario", "Solo lavoro straordinario", "Solo lavoro notturno"],
				correct: 1,
				motivation: "Il lavoro agile è compatibile con il part-time mediante riparametrazione del calendario per garantire sempre la prevalenza della presenza rispetto al lavoro agile.",
				category: "Disciplina lavoro agile"
			},
			{
				question: "Quale finalità NON è propria del Piano Integrato Triennale?",
				options: ["Semplificare l'azione amministrativa", "Programmare gli interventi del triennio", "Aumentare la complessità procedurale", "Illustrare la correlazione tra attività"],
				correct: 2,
				motivation: "Il PIT Cdc è finalizzato a semplificare l'azione amministrativa, programmare gli interventi e illustrare le correlazioni, non ad aumentare la complessità.",
				category: "PIT e programmazione"
			},

			
			
			
			
			// A03 - ROF e RAC
            {
                question: "Quale articolo della Costituzione attribuisce alla Corte dei conti la funzione di controllo preventivo di legittimità sugli atti del Governo?",
                options: ["Articolo 99", "Articolo 100", "Articolo 103", "Articolo 55"],
                correct: 1,
                motivation: "L'articolo 100 della Costituzione attribuisce alla Corte dei conti la funzione di controllo preventivo di legittimità sugli atti del Governo.",
                category: "ROF e RAC"
            },
            {
                question: "Qual è la funzione principale attribuita alla Corte dei conti dall'articolo 103 della Costituzione?",
                options: ["Controllo sugli enti locali", "Giurisdizione nelle materie di contabilità pubblica", "Gestione del bilancio dello Stato", "Vigilanza sulle regioni"],
                correct: 1,
                motivation: "L'articolo 103 della Costituzione attribuisce alla Corte dei conti la giurisdizione nelle materie di contabilità pubblica.",
                category: "ROF e RAC"
            },
            {
                question: "Quale legge riconosce l'autonomia finanziaria della Corte dei conti?",
                options: ["Legge 20/1994", "D.lgs. 165/2001", "D.P.R. 62/2013", "Legge 81/2017"],
                correct: 0,
                motivation: "La Legge 20/1994 riconosce l'autonomia finanziaria della Corte dei conti.",
                category: "ROF e RAC"
            },
            {
                question: "Quale regolamento disciplina l'organizzazione degli uffici amministrativi della Corte dei conti?",
                options: ["Regolamento delle funzioni di controllo", "ROF - Regolamento di Organizzazione e Funzionamento", "RAC - Regolamento di Autonomia e Contabilità", "PIT - Piano Integrato Triennale"],
                correct: 1,
                motivation: "Il ROF (Regolamento di Organizzazione e Funzionamento) disciplina l'organizzazione degli uffici amministrativi della Corte dei conti.",
                category: "ROF e RAC"
            },
            {
                question: "Quale documento strategico ha sostituito i precedenti piani settoriali nella Corte dei conti?",
                options: ["PIAO", "PIT - Piano Integrato Triennale", "Codice di comportamento", "Circolare Segretariale"],
                correct: 1,
                motivation: "Il PIT (Piano Integrato Triennale) ha sostituito i precedenti piani settoriali nella Corte dei conti.",
                category: "ROF e RAC"
            },
            {
                question: "Qual è il principio fondamentale del lavoro agile nella Corte dei conti?",
                options: ["Lavoro esclusivamente da remoto", "Lavoro per obiettivi", "Orario flessibile senza limiti", "Nessun monitoraggio"],
                correct: 1,
                motivation: "Il principio fondamentale del lavoro agile nella Corte dei conti è il lavoro per obiettivi.",
                category: "ROF e RAC"
            },
            {
                question: "Qual è il termine massimo per la conclusione del procedimento disciplinare?",
                options: ["30 giorni", "60 giorni", "90 giorni", "120 giorni"],
                correct: 3,
                motivation: "Il termine massimo per la conclusione del procedimento disciplinare è di 120 giorni.",
                category: "ROF e RAC"
            },
            {
                question: "Quale sanzione NON è prevista dall'art. 43 CCNL 2019-2021 per il personale non dirigenziale?",
                options: ["Rimprovero verbale", "Multa fino a 4 ore di retribuzione", "Sospensione fino a 1 anno", "Licenziamento senza preavviso"],
                correct: 2,
                motivation: "La sospensione fino a 1 anno non è prevista dall'art. 43 CCNL 2019-2021 per il personale non dirigenziale.",
                category: "ROF e RAC"
            },
            {
                question: "Quale principio NON è tra quelli generali del codice di comportamento dei dipendenti pubblici?",
                options: ["Imparzialità", "Integrità", "Segretezza assoluta", "Trasparenza"],
                correct: 2,
                motivation: "La segretezza assoluta non è tra i principi generali del codice di comportamento dei dipendenti pubblici.",
                category: "ROF e RAC"
            },
            {
                question: "Quale novità ha introdotto il D.P.R. 81/2023 nel codice di comportamento?",
                options: ["Divieto di utilizzo di strumenti informatici", "Obbligo di formazione etica", "Abolizione dei social media", "Nessuna modifica"],
                correct: 1,
                motivation: "Il D.P.R. 81/2023 ha introdotto l'obbligo di formazione etica nel codice di comportamento.",
                category: "ROF e RAC"
            },
            {
                question: "Qual è la nuova Direzione Generale istituita dalla riforma del ROF del luglio 2024?",
                options: ["Direzione Generale Affari Generali", "Direzione Generale Controllo e Vigilanza", "Direzione Generale Sistemi Informativi", "Direzione Generale Bilancio"],
                correct: 1,
                motivation: "La riforma del ROF del luglio 2024 ha istituito la Direzione Generale Controllo e Vigilanza.",
                category: "ROF e RAC"
            },
            {
                question: "Quale parte dell'avanzo di amministrazione è soggetta a restituzione al bilancio dello Stato?",
                options: ["Avanzo vincolato", "Avanzo accantonato", "Avanzo libero", "Avanzo destinato"],
                correct: 2,
                motivation: "L'avanzo libero è soggetto a restituzione al bilancio dello Stato.",
                category: "ROF e RAC"
            },
            {
                question: "Quanti sono i giorni massimi di lavoro agile previsti per il personale ordinario?",
                options: ["60", "92", "110", "120"],
                correct: 1,
                motivation: "I giorni massimi di lavoro agile previsti per il personale ordinario sono 92.",
                category: "ROF e RAC"
            },
            {
                question: "Qual è il termine minimo di preavviso per la convocazione all'audizione disciplinare?",
                options: ["5 giorni", "10 giorni", "15 giorni", "20 giorni"],
                correct: 3,
                motivation: "Il termine minimo di preavviso per la convocazione all'audizione disciplinare è di 20 giorni.",
                category: "ROF e RAC"
            },
            {
                question: "Quale organo coordina l'attività requirente della Corte dei conti?",
                options: ["Segretariato Generale", "Procura Generale", "Direzione Generale Risorse Umane", "Consiglio di Presidenza"],
                correct: 1,
                motivation: "La Procura Generale coordina l'attività requirente della Corte dei conti.",
                category: "ROF e RAC"
            },
            {
                question: "Quale documento mantiene separato il Piano di Prevenzione della Corruzione e Trasparenza (PPCT)?",
                options: ["PIAO", "PIT", "RAC", "ROF"],
                correct: 1,
                motivation: "Il PIT mantiene separato il Piano di Prevenzione della Corruzione e Trasparenza (PPCT).",
                category: "ROF e RAC"
            },
            {
                question: "Quale tra questi NON è un rischio del lavoro agile?",
                options: ["Isolamento", "Maggiore adattabilità", "Accesso non autorizzato a informazioni riservate", "Difficoltà a separare lavoro e vita privata"],
                correct: 1,
                motivation: "La maggiore adattabilità non è un rischio del lavoro agile, ma un beneficio.",
                category: "ROF e RAC"
            },
            {
                question: "Qual è la fonte principale del codice di comportamento dei dipendenti pubblici?",
                options: ["D.lgs. 165/2001", "D.P.R. 62/2013", "Legge 20/1994", "D.lgs. 33/2013"],
                correct: 1,
                motivation: "Il D.P.R. 62/2013 è la fonte principale del codice di comportamento dei dipendenti pubblici.",
                category: "ROF e RAC"
            },
            {
                question: "Quale termine è considerato 'perentorio' nel procedimento disciplinare?",
                options: ["10 giorni per la segnalazione", "30 giorni per la contestazione dell'addebito", "20 giorni di preavviso", "15 giorni per la sospensione"],
                correct: 1,
                motivation: "I 30 giorni per la contestazione dell'addebito sono considerati termine perentorio nel procedimento disciplinare.",
                category: "ROF e RAC"
            },
            {
                question: "Quale caratteristica distingue la Corte dei conti dalle altre pubbliche amministrazioni?",
                options: ["Applicazione integrale del D.lgs. 165/2001", "Autonomia normativa, organizzativa, funzionale e contabile", "Dipendenza dal Ministero dell'Economia", "Assenza di funzioni giurisdizionali"],
                correct: 1,
                motivation: "La Corte dei conti si distingue per la sua autonomia normativa, organizzativa, funzionale e contabile.",
                category: "ROF e RAC"
            },
			{
				question: "Quale articolo della Costituzione disciplina le funzioni di controllo della Corte dei conti?",
				options: ["Art. 103, comma 2", "Art. 100, comma 2", "Art. 97, comma 1", "Art. 101, comma 3"],
				correct: 1,
				motivation: "L'art. 100, comma 2 della Costituzione stabilisce che la Corte dei conti esercita il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del Bilancio dello Stato, inoltre essa partecipa al controllo sulla gestione finanziaria degli enti.",
				category: "ROF e RAC"
			},
			{
				question: "In quale parte della Costituzione è collocata la Corte dei conti?",
				options: ["Parte I - Diritti e doveri dei cittadini", "Parte II - Ordinamento della Repubblica, Titolo IV - La Magistratura", "Parte II - Ordinamento della Repubblica, Titolo III - Il Governo", "Principi fondamentali"],
				correct: 1,
				motivation: "La Corte dei conti è collocata nella Parte II della Costituzione (Ordinamento della Repubblica), all'interno del Titolo IV dedicato alla Magistratura, Sezione I sull'ordinamento giurisdizionale, sottolineando così la sua natura di organo di garanzia costituzionale.",
				category: "ROF e RAC"
			},
			{
				question: "Quale legge ha riconosciuto l'autonomia finanziaria alla Corte dei conti?",
				options: ["Legge 241/1990", "Legge 20/1994", "Legge 190/2012", "Legge 150/2009"],
				correct: 1,
				motivation: "La Legge 14 gennaio 1994, n. 20 recante 'Disposizioni in materia di giurisdizione e controllo della Corte dei conti' ha riconosciuto e disciplinato l'autonomia finanziaria e organizzativa della Corte dei conti all'art. 4.",
				category: "ROF e RAC"
			},
			{
				question: "A partire da quale anno la Corte dei conti gestisce autonomamente le proprie spese?",
				options: ["1990", "1992", "1995", "2000"],
				correct: 2,
				motivation: "Secondo l'art. 4, comma 2 della Legge 20/1994, a decorrere dall'anno 1995 la Corte dei conti provvede all'autonoma gestione delle spese nei limiti di un fondo iscritto in un unico capitolo dello stato di previsione della spesa della Presidenza del Consiglio dei Ministri.",
				category: "ROF e RAC"
			},
			{
				question: "Cosa significa l'acronimo ROF?",
				options: ["Regolamento Operativo Funzionale", "Regolamento di Organizzazione delle Funzioni", "Regolamento di Ordinamento Finanziario", "Regolamento degli Organi e delle Funzioni"],
				correct: 1,
				motivation: "ROF è l'acronimo di Regolamento di Organizzazione delle Funzioni, adottato con Deliberazione 16 giugno 2000, n. 14/DEL/2000 e successive modifiche, che disciplina l'organizzazione delle funzioni di controllo della Corte dei conti.",
				category: "ROF e RAC"
			},
			{
				question: "Con quale deliberazione è stato adottato il RAC?",
				options: ["Deliberazione n. 1/DEL/2010", "Deliberazione n. 14/DEL/2000", "Deliberazione n. 33/DEL/2013", "Deliberazione n. 20/DEL/1994"],
				correct: 0,
				motivation: "Il RAC (Regolamento di Amministrazione e Contabilità) è stato adottato con Deliberazione 26 gennaio 2010, n. 1/DEL/2010 e successive modifiche e integrazioni, per disciplinare l'organizzazione ed il funzionamento degli uffici amministrativi.",
				category: "ROF e RAC"
			},
			{
				question: "Quale tipo di controllo la Corte dei conti esercita sugli atti del Governo secondo l'art. 100 Cost.?",
				options: ["Controllo successivo", "Controllo concomitante", "Controllo preventivo di legittimità", "Controllo di merito"],
				correct: 2,
				motivation: "L'art. 100, comma 2 della Costituzione stabilisce espressamente che la Corte dei conti esercita il controllo preventivo di legittimità sugli atti del Governo, verificandone la conformità alla legge prima che producano i loro effetti.",
				category: "ROF e RAC"
			},
			{
				question: "In quale materia la Corte dei conti ha giurisdizione secondo l'art. 103 della Costituzione?",
				options: ["Materia tributaria", "Materia penale", "Materia di contabilità pubblica", "Materia civile"],
				correct: 2,
				motivation: "L'art. 103, comma 2 della Costituzione stabilisce che la Corte dei conti ha giurisdizione nelle materie di contabilità pubblica e nelle altre specificate dalla legge, esercitando principalmente i giudizi di responsabilità per danno erariale.",
				category: "ROF e RAC"
			},
			{
				question: "Dove hanno sede gli uffici centrali della Corte dei conti?",
				options: ["Milano", "Firenze", "Roma", "Napoli"],
				correct: 2,
				motivation: "Gli uffici delle sezioni centrali della Corte dei conti hanno sede a Roma, come stabilito dall'organizzazione istituzionale dell'ente, mentre le sezioni regionali sono dislocate nei capoluoghi di Regione.",
				category: "ROF e RAC"
			},
			{
				question: "Quante sono le sedi regionali della Corte dei conti in Italia?",
				options: ["20", "21", "22", "19"],
				correct: 1,
				motivation: "Le sedi regionali della Corte dei conti sono 21, presenti in tutti i capoluoghi di Regione e nelle Province autonome di Trento e Bolzano, garantendo così una copertura capillare del territorio nazionale.",
				category: "ROF e RAC"
			},
			{
				question: "A chi deve essere trasmesso il bilancio preventivo della Corte dei conti?",
				options: ["Al Presidente del Consiglio dei Ministri", "Al Ministro dell'Economia e delle Finanze", "Ai Presidenti della Camera dei deputati e del Senato della Repubblica", "Alla Corte Costituzionale"],
				correct: 2,
				motivation: "Secondo l'art. 4, comma 2 della Legge 20/1994, il bilancio preventivo e il rendiconto della gestione finanziaria devono essere trasmessi ai Presidenti della Camera dei deputati e del Senato della Repubblica, oltre ad essere pubblicati in Gazzetta Ufficiale.",
				category: "ROF e RAC"
			},
			{
				question: "Quale struttura coordina l'attività amministrativa della Corte dei conti?",
				options: ["La Procura Generale", "Il Consiglio di Presidenza", "Il Segretariato Generale", "La Direzione Affari Generali"],
				correct: 2,
				motivation: "Il Segretariato Generale è l'articolazione amministrativa della Corte dei conti che fornisce il supporto amministrativo, organizzativo e logistico necessario per il funzionamento delle sezioni di controllo, giurisdizionali e della Procura.",
				category: "ROF e RAC"
			},
			{
				question: "Quante sono le principali Direzioni Generali del Segretariato Generale?",
				options: ["2", "3", "4", "5"],
				correct: 2,
				motivation: "Il Segretariato Generale si articola in 4 principali Direzioni Generali: gestione affari generali, gestione risorse umane, programmazione e bilancio, e sistemi informativi automatizzati.",
				category: "ROF e RAC"
			},
			{
				question: "Cosa significa l'acronimo PIT nel contesto della Corte dei conti?",
				options: ["Piano di Intervento Territoriale", "Piano Integrato Triennale", "Programma Istituzionale Trimestrale", "Piano di Informatizzazione Totale"],
				correct: 1,
				motivation: "PIT è l'acronimo di Piano Integrato Triennale, il documento di programmazione strategica e operativa che integra il Piano della Performance, il Piano Anticorruzione, il POLA e altri piani settoriali della Corte dei conti.",
				category: "ROF e RAC"
			},
			{
				question: "Con quale decreto è stato adottato l'ultimo Piano Integrato Triennale della Corte dei conti?",
				options: ["Decreto n. 150/2023", "Decreto n. 229/2023", "Decreto n. 190/2023", "Decreto n. 241/2023"],
				correct: 1,
				motivation: "Il Piano Integrato Triennale 2023-2025 della Corte dei conti è stato adottato con Decreto del Segretario generale n. 229/2023, come strumento di programmazione per il triennio di riferimento.",
				category: "ROF e RAC"
			},
			{
				question: "Quale principio fondamentale garantisce la Costituzione alla Corte dei conti rispetto al Governo?",
				options: ["Il principio di collaborazione", "Il principio di subordinazione", "Il principio di indipendenza", "Il principio di coordinamento"],
				correct: 2,
				motivation: "La Costituzione garantisce il principio di indipendenza della Corte e dei suoi componenti rispetto al Governo, essenziale per assicurare l'imparzialità del controllo sugli atti dello stesso Governo.",
				category: "ROF e RAC"
			},
			{
				question: "Qual è il termine ordinario per la registrazione degli atti del Governo nel controllo preventivo?",
				options: ["15 giorni dalla ricezione", "20 giorni dalla ricezione", "30 giorni dalla ricezione", "45 giorni dalla ricezione"],
				correct: 2,
				motivation: "Il termine ordinario per la registrazione degli atti del Governo sottoposti a controllo preventivo di legittimità è di 30 giorni dalla ricezione, come stabilito dall'art. 3 della Legge 20/1994.",
				category: "ROF e RAC"
			},
			{
				question: "Entro quando deve essere approvato e trasmesso il rendiconto della gestione finanziaria della Corte dei conti?",
				options: ["Entro febbraio dell'anno successivo", "Entro marzo dell'anno successivo", "Entro aprile dell'anno successivo", "Entro maggio dell'anno successivo"],
				correct: 2,
				motivation: "Il rendiconto della gestione finanziaria deve essere approvato e trasmesso ai Presidenti delle Camere entro aprile dell'anno successivo, come previsto dall'art. 4, comma 2 della Legge 20/1994.",
				category: "ROF e RAC"
			},
			{
				question: "Quale decreto legislativo disciplina gli obblighi di trasparenza delle pubbliche amministrazioni?",
				options: ["D.Lgs. 150/2009", "D.Lgs. 241/1990", "D.Lgs. 33/2013", "D.Lgs. 165/2001"],
				correct: 2,
				motivation: "Il D.Lgs. 14 marzo 2013, n. 33 disciplina il riordino della disciplina riguardante il diritto di accesso civico e gli obblighi di pubblicità, trasparenza e diffusione di informazioni da parte delle pubbliche amministrazioni.",
				category: "ROF e RAC"
			},
			{
				question: "Quale delle seguenti NON è una funzione principale della Corte dei conti?",
				options: ["Controllo", "Giurisdizione", "Legislazione", "Procura"],
				correct: 2,
				motivation: "Le tre funzioni principali della Corte dei conti sono: Controllo (preventivo e successivo), Giurisdizione (in materie di contabilità pubblica) e Procura (azione requirente). La funzione legislativa non appartiene alla Corte dei conti.",
				category: "ROF e RAC"
			},
			{
				question: "Quando deve essere adottato il Piano Integrato Triennale aggiornato?",
				options: ["Entro dicembre dell'anno precedente", "Entro gennaio di ogni anno", "Entro febbraio di ogni anno", "Entro marzo di ogni anno"],
				correct: 1,
				motivation: "Il Piano Integrato Triennale deve essere adottato entro gennaio di ogni anno, come parte del ciclo di programmazione annuale previsto dalla normativa di riferimento (D.Lgs. 33/2013, D.Lgs. 150/2009, L. 190/2012).",
				category: "ROF e RAC"
			},
			{
				question: "Quale organo guida il Segretariato Generale della Corte dei conti?",
				options: ["Il Presidente della Corte", "Il Procuratore Generale", "Il Segretario Generale", "Il Capo di Gabinetto"],
				correct: 2,
				motivation: "Il Segretariato Generale è guidato dal Segretario Generale, coadiuvato da Vice Segretari generali, che coordina tutte le attività amministrative e di supporto della Corte dei conti.",
				category: "ROF e RAC"
			},
			{
				question: "Entro quale termine deve essere effettuata la parifica dei rendiconti regionali?",
				options: ["Entro il 31 marzo dell'anno successivo", "Entro il 30 aprile dell'anno successivo", "Entro il 31 maggio dell'anno successivo", "Entro il 30 giugno dell'anno successivo"],
				correct: 3,
				motivation: "La parifica dei rendiconti regionali deve essere effettuata entro il 30 giugno dell'anno successivo, come previsto dal D.Lgs. 123/2011 che disciplina il controllo sulle autonomie territoriali.",
				category: "ROF e RAC"
			},
			{
				question: "Quale regolamento disciplina l'autonomia finanziaria della Corte dei conti?",
				options: ["Deliberazione n. 14/DEL/2000", "Deliberazione n. 1/DEL/2010", "Provvedimento 31 ottobre 2012", "Decreto n. 229/2023"],
				correct: 2,
				motivation: "Il Provvedimento del 31 ottobre 2012 e successive modifiche e integrazioni disciplina specificatamente l'autonomia finanziaria della Corte dei conti, definendo principi di programmazione, struttura del bilancio e gestione delle spese.",
				category: "ROF e RAC"
			},
			{
				question: "Quale Direzione Generale si occupa della gestione del personale della Corte dei conti?",
				options: ["Direzione generale gestione affari generali", "Direzione generale programmazione e bilancio", "Direzione generale gestione risorse umane", "Direzione generale sistemi informativi"],
				correct: 2,
				motivation: "La Direzione generale gestione risorse umane è la struttura che gestisce tutto il personale della Corte dei conti, occupandosi di reclutamento, carriere, trattamento economico, formazione e relazioni sindacali.",
				category: "ROF e RAC"
			},
			{
				question: "Qual è il termine per la registrazione degli atti urgenti nel controllo preventivo?",
				options: ["5 giorni dalla ricezione", "10 giorni dalla ricezione", "15 giorni dalla ricezione", "20 giorni dalla ricezione"],
				correct: 1,
				motivation: "Per gli atti urgenti sottoposti a controllo preventivo di legittimità, il termine di registrazione è ridotto a 10 giorni dalla ricezione, come stabilito dall'art. 3 della Legge 20/1994.",
				category: "ROF e RAC"
			},
			{
				question: "In quale mese deve essere approvato il bilancio preventivo della Corte dei conti?",
				options: ["Ottobre", "Novembre", "Dicembre", "Gennaio"],
				correct: 2,
				motivation: "Il bilancio preventivo della Corte dei conti deve essere approvato entro dicembre dell'anno precedente, per poi essere trasmesso ai Presidenti delle Camere e pubblicato in Gazzetta Ufficiale.",
				category: "ROF e RAC"
			},
			{
				question: "Quale delle seguenti sezioni NON fa parte dell'area del controllo della Corte dei conti?",
				options: ["Sezione delle autonomie", "Sezione centrale di controllo sulla gestione delle Amministrazioni dello Stato", "Sezione II giurisdizionale centrale di appello", "Sezione di controllo per gli affari europei e internazionali"],
				correct: 2,
				motivation: "La Sezione II giurisdizionale centrale di appello fa parte dell'area della Giurisdizione, non dell'area del Controllo. Le altre sezioni elencate sono tutte articolazioni dell'area del controllo della Corte dei conti.",
				category: "ROF e RAC"
			},
			{
				question: "Qual è il termine ordinario per la conclusione dei procedimenti amministrativi se non diversamente previsto?",
				options: ["15 giorni", "30 giorni", "45 giorni", "60 giorni"],
				correct: 1,
				motivation: "Ai sensi della Legge 241/1990, il termine ordinario per la conclusione dei procedimenti amministrativi è di 30 giorni, salvo che non sia diversamente previsto da specifiche disposizioni normative o regolamentari.",
				category: "ROF e RAC"
			},
			{
				question: "Quale tra questi NON è un documento integrato nel Piano Integrato Triennale?",
				options: ["Piano della Performance", "Piano Triennale di Prevenzione della Corruzione", "Piano Organizzativo del Lavoro Agile", "Regolamento di Amministrazione e Contabilità"],
				correct: 3,
				motivation: "Il Piano Integrato Triennale integra il Piano della Performance, il Piano Triennale di Prevenzione della Corruzione, il POLA e altri piani settoriali. Il RAC (Regolamento di Amministrazione e Contabilità) è invece un regolamento autonomo della Corte dei conti.",
				category: "ROF e RAC"
			},

            // A04 - Codice di Comportamento
            {
                question: "Qual è la norma principale che disciplina il procedimento disciplinare nel pubblico impiego?",
                options: ["D.Lgs. 165/2001, art. 55-bis", "D.P.R. 62/2013", "Legge 241/1990", "D.Lgs. 33/2013"],
                correct: 0,
                motivation: "Il D.Lgs. 165/2001, art. 55-bis, è la norma principale che disciplina il procedimento disciplinare nel pubblico impiego.",
                category: "Codice di Comportamento"
            },
            {
                question: "Qual è il termine massimo per la conclusione del procedimento disciplinare dalla contestazione degli addebiti?",
                options: ["30 giorni", "60 giorni", "90 giorni", "120 giorni"],
                correct: 3,
                motivation: "Il termine massimo per la conclusione del procedimento disciplinare è di 120 giorni dalla contestazione degli addebiti.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale sanzione può essere irrogata solo dagli uffici di assegnazione per infrazioni minori?",
                options: ["Multa", "Sospensione", "Rimprovero verbale", "Licenziamento"],
                correct: 2,
                motivation: "Il rimprovero verbale può essere irrogato solo dagli uffici di assegnazione per infrazioni minori.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale principio impone che le sanzioni disciplinari siano predeterminate dalla legge o dal contratto?",
                options: ["Proporzionalità", "Tipicità", "Contraddittorio", "Immediatezza"],
                correct: 1,
                motivation: "Il principio di tipicità impone che le sanzioni disciplinari siano predeterminate dalla legge o dal contratto.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale documento deve essere consegnato al dipendente all'atto dell'assunzione?",
                options: ["Solo il contratto di lavoro", "Codice di comportamento nazionale e interno", "Solo il CCNL", "Solo il regolamento interno"],
                correct: 1,
                motivation: "All'atto dell'assunzione deve essere consegnato il Codice di comportamento nazionale e interno.",
                category: "Codice di Comportamento"
            },
            {
                question: "Qual è il termine ordinatorio per la segnalazione dei fatti disciplinarmente rilevanti al SPD?",
                options: ["5 giorni", "10 giorni", "20 giorni", "30 giorni"],
                correct: 1,
                motivation: "Il termine ordinatorio per la segnalazione dei fatti disciplinarmente rilevanti al SPD è di 10 giorni.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale principio garantisce il diritto di difesa del dipendente nel procedimento disciplinare?",
                options: ["Tipicità", "Contraddittorio", "Immediatezza", "Proporzionalità"],
                correct: 1,
                motivation: "Il principio del contraddittorio garantisce il diritto di difesa del dipendente nel procedimento disciplinare.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale sanzione è la più grave prevista per il personale non dirigenziale?",
                options: ["Multa", "Sospensione", "Licenziamento senza preavviso", "Rimprovero scritto"],
                correct: 2,
                motivation: "Il licenziamento senza preavviso è la sanzione più grave prevista per il personale non dirigenziale.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra questi NON è un criterio per la determinazione della sanzione disciplinare?",
                options: ["Intenzionalità", "Danno causato", "Anzianità di servizio", "Precedenti disciplinari"],
                correct: 2,
                motivation: "L'anzianità di servizio non è un criterio per la determinazione della sanzione disciplinare.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra questi è un obbligo specifico previsto dal Codice di comportamento?",
                options: ["Accettare regali", "Astenersi da conflitti di interesse", "Utilizzare strumenti informatici per fini personali", "Ritardare le comunicazioni"],
                correct: 1,
                motivation: "Astenersi da conflitti di interesse è un obbligo specifico previsto dal Codice di comportamento.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra queste è una fattispecie che comporta il licenziamento senza preavviso?",
                options: ["Ritardo nel lavoro", "Falsa attestazione della presenza in servizio", "Mancato aggiornamento professionale", "Discussione con un collega"],
                correct: 1,
                motivation: "La falsa attestazione della presenza in servizio comporta il licenziamento senza preavviso.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale documento disciplina l'utilizzo dei social media da parte dei dipendenti pubblici?",
                options: ["D.Lgs. 165/2001", "D.P.R. 62/2013", "D.P.R. 81/2023", "CCNL 2019-2021"],
                correct: 2,
                motivation: "Il D.P.R. 81/2023 disciplina l'utilizzo dei social media da parte dei dipendenti pubblici.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale principio impone che le sanzioni siano proporzionate alla gravità dell'infrazione?",
                options: ["Immediatezza", "Tipicità", "Proporzionalità", "Contraddittorio"],
                correct: 2,
                motivation: "Il principio di proporzionalità impone che le sanzioni siano proporzionate alla gravità dell'infrazione.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra questi è un obbligo dei dirigenti secondo il Codice di comportamento?",
                options: ["Favorire la crescita professionale dei collaboratori", "Ignorare le esigenze dei collaboratori", "Limitare la formazione", "Delegare sempre le responsabilità"],
                correct: 0,
                motivation: "Favorire la crescita professionale dei collaboratori è un obbligo dei dirigenti secondo il Codice di comportamento.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra questi comportamenti è vietato nell'uso degli strumenti informatici?",
                options: ["Invio di messaggi oltraggiosi o discriminatori", "Uso limitato per incombenze personali", "Firma digitale sui documenti", "Risposta tempestiva alle email"],
                correct: 0,
                motivation: "L'invio di messaggi oltraggiosi o discriminatori è vietato nell'uso degli strumenti informatici.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra questi è un termine perentorio nel procedimento disciplinare?",
                options: ["5 giorni per la segnalazione", "10 giorni per la contestazione", "30 giorni per la contestazione degli addebiti", "60 giorni per la conclusione"],
                correct: 2,
                motivation: "I 30 giorni per la contestazione degli addebiti sono un termine perentorio nel procedimento disciplinare.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra questi NON è un principio generale del Codice di comportamento?",
                options: ["Imparzialità", "Segretezza assoluta", "Trasparenza", "Proporzionalità"],
                correct: 1,
                motivation: "La segretezza assoluta non è un principio generale del Codice di comportamento.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra questi è un obbligo nei rapporti con il pubblico?",
                options: ["Orientare il comportamento alla soddisfazione dell'utente", "Favorire solo i colleghi", "Rifiutare il dialogo", "Limitare la trasparenza"],
                correct: 0,
                motivation: "Orientare il comportamento alla soddisfazione dell'utente è un obbligo nei rapporti con il pubblico.",
                category: "Codice di Comportamento"
            },
            {
                question: "Quale tra questi comportamenti può comportare responsabilità disciplinare per il dirigente?",
                options: ["Ostacolare la formazione dei collaboratori", "Promuovere la crescita professionale", "Favorire il benessere organizzativo", "Valorizzare le differenze"],
                correct: 0,
                motivation: "Ostacolare la formazione dei collaboratori può comportare responsabilità disciplinare per il dirigente.",
                category: "Codice di Comportamento"
            },
			{
				question: "Qual è il termine massimo per la conclusione del procedimento disciplinare dalla data di contestazione degli addebiti?",
				options: ["60 giorni", "90 giorni", "120 giorni", "150 giorni"],
				correct: 2,
				motivation: "Il termine massimo per la conclusione del procedimento disciplinare è di 120 giorni dalla notifica della contestazione degli addebiti al dipendente, come stabilito dall'art. 55-bis, comma 4, del D.Lgs. 165/2001. Si tratta di un termine perentorio a pena di decadenza.",
                category: "Codice di Comportamento"
			},
			{
				question: "Quale articolo del D.Lgs. 165/2001 disciplina le forme e i termini del procedimento disciplinare?",
				options: ["Art. 54", "Art. 55", "Art. 55-bis", "Art. 55-quater"],
				correct: 2,
				motivation: "L'art. 55-bis del D.Lgs. 165/2001 disciplina specificamente le forme e i termini del procedimento disciplinare, stabilendo la distinzione tra sanzioni minori (rimprovero verbale) di competenza del responsabile della struttura e sanzioni gravi di competenza dell'ufficio procedimenti disciplinari.",
                category: "Codice di Comportamento"
			},
			{
				question: "Entro quanti giorni dalla conoscenza dei fatti il responsabile deve segnalare al SPD le infrazioni potenzialmente gravi?",
				options: ["5 giorni", "10 giorni", "15 giorni", "20 giorni"],
				correct: 1,
				motivation: "Il responsabile della struttura deve segnalare al Servizio per i Procedimenti Disciplinari i fatti ritenuti di rilevanza disciplinare entro 10 giorni dalla conoscenza degli stessi. Si tratta di un termine ordinatorio, il cui mancato rispetto non comporta nullità ma può avere conseguenze sulla responsabilità del dirigente.",
                category: "Codice di Comportamento"
			},
			{
				question: "Chi è competente per i procedimenti disciplinari che possono concludersi con il rimprovero verbale?",
				options: ["Il Servizio per i Procedimenti Disciplinari", "Il responsabile della struttura presso cui presta servizio il dipendente", "La Direzione Generale Gestione Risorse Umane", "Il Presidente della Corte dei Conti"],
				correct: 1,
				motivation: "Come stabilito dall'art. 55-bis, comma 1, del D.Lgs. 165/2001, i procedimenti disciplinari per infrazioni di minore gravità, punibili con il rimprovero verbale, sono di competenza del responsabile della struttura presso cui presta servizio il dipendente.",
                category: "Codice di Comportamento"
			},
			{
				question: "Qual è il preavviso minimo con cui deve essere convocato il dipendente per l'audizione dopo la contestazione degli addebiti?",
				options: ["10 giorni", "15 giorni", "20 giorni", "30 giorni"],
				correct: 2,
				motivation: "Il dipendente deve essere convocato per l'audizione con un preavviso minimo di 20 giorni dalla notifica della contestazione. Questo termine dilatorio è necessario per garantire al dipendente un tempo congruo per preparare la propria difesa, accedere agli atti e consultare eventualmente un legale o un rappresentante sindacale.",
                category: "Codice di Comportamento"
			},
			{
				question: "Entro quanti giorni dalla segnalazione il SPD deve procedere alla contestazione scritta dell'addebito?",
				options: ["15 giorni", "20 giorni", "30 giorni", "60 giorni"],
				correct: 2,
				motivation: "Il Servizio per i Procedimenti Disciplinari deve procedere alla contestazione scritta dell'addebito entro 30 giorni dal ricevimento della segnalazione o dalla diretta conoscenza dei fatti. Questo è un termine perentorio: se non viene rispettato, il potere disciplinare decade.",
                category: "Codice di Comportamento"
			},
			{
				question: "Quale DPR ha modificato recentemente il codice di comportamento dei dipendenti pubblici introducendo norme sull'uso dei social media?",
				options: ["DPR 62/2013", "DPR 81/2023", "DPR 96/2010", "DPR 165/2001"],
				correct: 1,
				motivation: "Il DPR 13 giugno 2023, n. 81 ha introdotto importanti modifiche al codice di comportamento, in particolare relativamente all'utilizzo delle tecnologie informatiche (art. 11-bis) e dei social media (art. 11-ter), oltre a rafforzare gli obblighi dei dirigenti.",
                category: "Codice di Comportamento"
			},
			{
				question: "Quale sanzione è prevista per la falsa attestazione della presenza in servizio?",
				options: ["Sospensione fino a 6 mesi", "Licenziamento con preavviso", "Licenziamento senza preavviso", "Multa fino a 4 ore di retribuzione"],
				correct: 2,
				motivation: "La falsa attestazione della presenza in servizio, che comprende qualunque modalità fraudolenta per far risultare il dipendente in servizio, è sanzionata con il licenziamento senza preavviso, come previsto dall'art. 55-quater, comma 4, lett. a) del D.Lgs. 165/2001.",
                category: "Codice di Comportamento"
			},
			{
				question: "Con quale deliberazione la Corte dei Conti ha approvato il proprio Codice di comportamento per il personale amministrativo?",
				options: ["Deliberazione n. 1/2010", "Deliberazione n. 8/2013", "Deliberazione n. 96/2010", "Deliberazione n. 62/2013"],
				correct: 1,
				motivation: "La Corte dei Conti ha approvato il proprio Codice di comportamento per il personale amministrativo con la Deliberazione n. 8 del 5 novembre 2013, in attuazione di quanto stabilito dall'art. 54, comma 5 del D.Lgs. 165/2001.",
                category: "Codice di Comportamento"
			},
			{
				question: "Qual è la sanzione massima pecuniaria prevista per il personale non dirigenziale?",
				options: ["Multa fino a 2 ore di retribuzione", "Multa fino a 4 ore di retribuzione", "Multa da 200 a 500 euro", "Multa fino a 8 ore di retribuzione"],
				correct: 1,
				motivation: "Per il personale non dirigenziale, la sanzione pecuniaria prevista dall'art. 43 del CCNL 2019-2021 Comparto Funzioni Centrali è la multa fino a un massimo di 4 ore di retribuzione. Per i dirigenti invece è prevista una multa da 200 a 500 euro.",
				category: "Sanzioni disciplinari"
			},
			{
				question: "Quale principio caratterizza il procedimento disciplinare pubblico rispetto al settore privato?",
				options: ["Discrezionalità dell'azione disciplinare", "Obbligatorietà dell'azione disciplinare", "Facoltatività della contestazione", "Possibilità di sanzioni atipiche"],
				correct: 1,
				motivation: "Nel pubblico impiego l'azione disciplinare è obbligatoria (principio sancito dall'art. 97 della Costituzione), diversamente dal settore privato dove il datore di lavoro ha discrezionalità. Il datore di lavoro pubblico deve avviare il procedimento ogni volta che viene a conoscenza di condotte potenzialmente rilevanti.",
                category: "Codice di Comportamento"
			},
			{
				question: "Dopo quanti giorni di assenza ingiustificata nell'arco di un biennio scatta il licenziamento?",
				options: ["2 giorni", "3 giorni", "5 giorni", "7 giorni"],
				correct: 1,
				motivation: "L'art. 55-quater, comma 4, lett. b) del D.Lgs. 165/2001 prevede il licenziamento in caso di assenza ingiustificata per 3 giorni, anche non continuativi, nell'arco di un biennio. È previsto il licenziamento anche per 7 giorni nell'arco di 10 anni.",
				category: "Sanzioni disciplinari"
			},
			{
				question: "Quale articolo del CCNL 2019-2021 elenca le sanzioni disciplinari per il personale non dirigenziale?",
				options: ["Art. 33", "Art. 36", "Art. 42", "Art. 43"],
				correct: 3,
				motivation: "L'art. 43 del CCNL 2019-2021 Comparto Funzioni Centrali elenca le sanzioni disciplinari applicabili al personale non dirigenziale. Per il personale dirigenziale, invece, le sanzioni sono previste dall'art. 36 del CCNL Area Funzioni Centrali Dirigenti.",
                category: "Codice di Comportamento"
			},
			{
				question: "Cosa deve contenere obbligatoriamente l'atto di contestazione disciplinare?",
				options: ["La sanzione che si intende irrogare", "Solo le norme violate", "La descrizione dettagliata dei fatti e le norme violate", "Esclusivamente la convocazione per l'audizione"],
				correct: 2,
				motivation: "L'atto di contestazione deve contenere la descrizione dettagliata dei fatti (tempo, luogo, modalità) e l'indicazione delle norme violate. Non deve invece indicare la sanzione da irrogare, perché questo vincolerebbero l'autorità a non adottare sanzioni più gravi anche se l'istruttoria dovesse far emergere elementi di maggiore gravità.",
				category: "Procedimento disciplinare"
			},
			{
				question: "Quale modalità NON è prevista per la notifica dell'atto di contestazione?",
				options: ["Posta elettronica certificata (PEC)", "Consegna a mano con ricevuta", "Pubblicazione all'albo pretorio", "Raccomandata postale A.R."],
				correct: 2,
				motivation: "L'art. 55-bis del D.Lgs. 165/2001 prevede tre modalità di notifica: PEC (se il dipendente ha un indirizzo PEC), consegna a mano con ricevuta, e raccomandata postale A.R. La pubblicazione all'albo pretorio non è prevista come modalità di notifica per gli atti disciplinari.",
				category: "Procedimento disciplinare"
			},
			{
				question: "Quante volte il dipendente può chiedere il differimento dell'audizione per grave impedimento?",
				options: ["Una sola volta", "Due volte", "Tre volte", "Senza limiti se motivato"],
				correct: 0,
				motivation: "Il dipendente può richiedere il differimento dell'audizione una sola volta nel corso del procedimento, in caso di grave ed oggettivo impedimento, per un periodo non superiore a 5 giorni. Il termine per la conclusione del procedimento è prorogato in misura corrispondente.",
				category: "Diritti del dipendente"
			},
			{
				question: "Quale organo ha istituito il Servizio per i Procedimenti Disciplinari nella Corte dei Conti?",
				options: ["Deliberazione del Consiglio di Presidenza n. 1/2010", "Decreto del Dirigente Generale DGRU n. 96/2010", "DPR 62/2013", "Legge 165/2001"],
				correct: 1,
				motivation: "Il Servizio per i Procedimenti Disciplinari è stato istituito con Decreto del Dirigente Generale della Direzione Generale Gestione Risorse Umane n. 96/2010, art. 7, come ufficio di livello non dirigenziale.",
                category: "Codice di Comportamento"
			},
			{
				question: "Qual è la natura del termine di 120 giorni per la conclusione del procedimento?",
				options: ["Ordinatorio", "Perentorio a pena di decadenza", "Prorogabile su richiesta del dipendente", "Indicativo"],
				correct: 1,
				motivation: "Il termine di 120 giorni ha natura perentoria a pena di decadenza. Se non viene rispettato, l'amministrazione decade dal potere di irrogare la sanzione per quei fatti. Può essere prorogato solo in caso di differimento dell'audizione per grave impedimento del dipendente.",
				category: "Procedimento disciplinare"
			},
			{
				question: "Quale principio sottende la determinazione della sanzione disciplinare?",
				options: ["Principio di automaticità", "Principio di proporzionalità e gradualità", "Principio di uniformità", "Principio di discrezionalità assoluta"],
				correct: 1,
				motivation: "Le sanzioni disciplinari devono essere irrogate nel rispetto dei principi di gradualità e proporzionalità in relazione alla gravità dell'illecito. La sanzione deve essere commisurata alla condotta concreta, valutando intenzionalità, danno causato, precedenti disciplinari e altre circostanze.",
				category: "Sanzioni disciplinari"
			},
			{
				question: "Cosa si intende per 'principio di immutabilità della contestazione'?",
				options: ["La contestazione può essere modificata in qualsiasi momento", "La contestazione non può essere ritirata", "La contestazione non può essere modificata dopo la notifica", "La contestazione deve essere uguale per tutti i dipendenti"],
				correct: 2,
				motivation: "Una volta notificata, la contestazione è soggetta al principio di immutabilità: non può essere modificata o integrata senza pregiudicare il diritto di difesa. Se emergono fatti nuovi, occorre avviare un nuovo procedimento. La sanzione può riguardare solo i fatti contestati nell'atto iniziale.",
				category: "Procedimento disciplinare"
			},
			{
				question: "L'utilizzo di account istituzionali per finalità personali è:",
				options: ["Sempre consentito", "Consentito solo previa autorizzazione del dirigente", "Vietato secondo il DPR 81/2023", "Consentito nei fine settimana"],
				correct: 2,
				motivation: "L'art. 11-bis introdotto dal DPR 81/2023 stabilisce che l'utilizzo di account istituzionali è consentito solo per fini connessi all'attività lavorativa. È invece consentito l'uso degli strumenti informatici per brevi incombenze personali, se contenuto in tempi ristretti e senza pregiudizio per i compiti istituzionali.",
				category: "Codice di comportamento"
			},
			{
				question: "Quale sanzione può essere irrogata per gravi e reiterate violazioni dei codici di comportamento?",
				options: ["Sospensione fino a 3 mesi", "Multa fino a 500 euro", "Licenziamento con o senza preavviso", "Rimprovero scritto"],
				correct: 2,
				motivation: "L'art. 55-quater, comma 4, lett. g) del D.Lgs. 165/2001 prevede il licenziamento (con o senza preavviso) per gravi e reiterate violazioni dei codici di comportamento. È richiesta la reiterazione: non basta una singola violazione, anche se grave.",
				category: "Sanzioni disciplinari"
			},
			{
				question: "Il dipendente durante l'audizione può farsi assistere da:",
				options: ["Solo da un avvocato", "Solo da un rappresentante sindacale", "Da un procuratore o da un rappresentante sindacale", "Non può farsi assistere da nessuno"],
				correct: 2,
				motivation: "L'art. 55-bis, comma 4, del D.Lgs. 165/2001 stabilisce che il dipendente può farsi assistere da un procuratore (avvocato) ovvero da un rappresentante dell'associazione sindacale cui aderisce o conferisce mandato. La presenza di un difensore è un diritto fondamentale del dipendente.",
				category: "Diritti del dipendente"
			},
			{
				question: "Quale delle seguenti affermazioni è corretta riguardo all'uso dei social media da parte dei dipendenti pubblici?",
				options: ["È completamente vietato l'uso dei social media", "Il dipendente deve astenersi da commenti che danneggino l'immagine dell'amministrazione", "I dipendenti possono esprimere qualsiasi opinione senza limitazioni", "Solo i dirigenti hanno limitazioni nell'uso dei social media"],
				correct: 1,
				motivation: "L'art. 11-ter introdotto dal DPR 81/2023 stabilisce che il dipendente deve usare cautela affinché le proprie opinioni non siano attribuite all'amministrazione e deve astenersi da qualsiasi commento che possa danneggiare prestigio, decoro o immagine dell'amministrazione. Non è vietato l'uso dei social, ma è richiesto un comportamento responsabile.",
				category: "Codice di comportamento"
			},
			{
				question: "Quando si configura la recidiva disciplinare?",
				options: ["Quando si commette qualsiasi infrazione dopo l'assunzione", "Quando si commette nuovamente un'infrazione dopo aver già ricevuto una sanzione per comportamento simile", "Quando si commettono più infrazioni contemporaneamente", "Quando si viene sanzionati più di tre volte"],
				correct: 1,
				motivation: "La recidiva si verifica quando un dipendente commette nuovamente un'infrazione dopo aver già ricevuto una sanzione disciplinare per un comportamento simile. La recidiva è una circostanza aggravante che può influire sulla determinazione della sanzione e deve essere espressamente indicata nell'atto di contestazione.",
				category: "Sanzioni disciplinari"
			},
			{
				question: "I due procedimenti, disciplinare e penale, sono:",
				options: ["Collegati: il penale deve concludersi prima del disciplinare", "Autonomi: possono procedere indipendentemente", "Identici: hanno lo stesso oggetto", "Subordinati: il disciplinare dipende sempre dal penale"],
				correct: 1,
				motivation: "Con le modifiche introdotte dalla Legge n. 150/2009, la pregiudizialità del procedimento penale rispetto a quello disciplinare è venuta meno. I due procedimenti sono ora autonomi: una condanna penale non implica automaticamente sanzioni disciplinari e viceversa, anche se un comportamento può dar luogo a entrambi i procedimenti.",
				category: "Procedimento disciplinare"
			},
			{
				question: "Quale nuovo obbligo formativo è stato introdotto dal DPR 81/2023?",
				options: ["Formazione informatica obbligatoria annuale", "Cicli formativi obbligatori sui temi dell'etica pubblica", "Corsi di aggiornamento professionale mensili", "Formazione linguistica obbligatoria"],
				correct: 1,
				motivation: "Il DPR 81/2023 ha modificato l'art. 15 introducendo l'obbligo di cicli formativi sui temi dell'etica pubblica e sul comportamento etico, da svolgere obbligatoriamente a seguito di assunzione, passaggio a ruoli superiori o trasferimento. La durata è proporzionata al grado di responsabilità.",
				category: "Codice di comportamento"
			},
			{
				question: "Quale articolo del Regolamento per l'Organizzazione e Funzionamento attribuisce alla DGRU la gestione dei procedimenti disciplinari?",
				options: ["Art. 7, comma 1", "Art. 22, comma 1, lett. e)", "Art. 54, comma 2", "Art. 55-bis, comma 1"],
				correct: 1,
				motivation: "L'art. 22, comma 1, lett. e) del Regolamento per l'Organizzazione e Funzionamento (R.O.F.), approvato con deliberazione n. 1/2010, assegna alla Direzione Generale Gestione Risorse Umane la competenza per la gestione dei procedimenti disciplinari.",
                category: "Codice di Comportamento"
			},
			{
				question: "Il SPD deve archiviare il procedimento quando:",
				options: ["Il dipendente presenta le proprie giustificazioni", "All'esito dell'istruttoria non emerge la rilevanza disciplinare della condotta", "Sono trascorsi 120 giorni dalla segnalazione", "Il dipendente si dimette"],
				correct: 1,
				motivation: "Il provvedimento di archiviazione deve essere adottato quando, all'esito dell'istruttoria, non è emersa la rilevanza disciplinare della condotta. Anche l'atto di archiviazione deve essere motivato, perché valutazioni irragionevoli di insussistenza dell'illecito possono comportare sanzioni per chi ha gestito il procedimento.",
				category: "Procedimento disciplinare"
			},
			{
				question: "Quale responsabilità hanno i dirigenti secondo le modifiche introdotte dal DPR 81/2023?",
				options: ["Solo responsabilità amministrativa", "Devono curare la crescita professionale dei collaboratori e il benessere organizzativo", "Sono esentati da obblighi formativi", "Devono solo controllare la presenza in servizio"],
				correct: 1,
				motivation: "Il DPR 81/2023 ha modificato l'art. 13 del codice di comportamento rafforzando gli obblighi dei dirigenti: devono curare la crescita professionale dei collaboratori, favorire la formazione, promuovere il benessere organizzativo, favorire relazioni basate su leale collaborazione e reciproca fiducia, e valutare anche il comportamento organizzativo.",
				category: "Codice di comportamento"
			},

            // A06 - Prevenzione della Corruzione
            {
                question: "Quale legge rappresenta la fonte principale per la prevenzione della corruzione nella pubblica amministrazione?",
                options: ["Legge 190/2012", "Decreto legislativo 33/2013", "Legge 241/1990", "D.P.R. 62/2013"],
                correct: 0,
                motivation: "La Legge 190/2012 è la fonte principale per la prevenzione e repressione della corruzione nella PA.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Cosa si intende per 'maladministration' secondo il Piano Nazionale Anticorruzione?",
                options: ["Solo reati penali", "Atti e comportamenti che pregiudicano l'interesse pubblico anche se non sono reati", "Solo violazioni amministrative", "Solo illeciti disciplinari"],
                correct: 1,
                motivation: "Il concetto di corruzione si è ampliato includendo anche atti che minano la fiducia dei cittadini, non solo reati.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Chi nomina il Responsabile della Prevenzione della Corruzione e della Trasparenza (RPCT) nella Corte dei conti?",
                options: ["Il Segretario Generale", "Il Presidente della Corte dei conti", "Il Consiglio di Presidenza", "Il Ministro della Giustizia"],
                correct: 1,
                motivation: "Il Presidente della Corte dei conti nomina il RPCT.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Qual è uno degli strumenti fondamentali per la prevenzione della corruzione?",
                options: ["Il regolamento interno", "Il Piano Triennale di Prevenzione della Corruzione e della Trasparenza (PTPCT)", "Il bilancio annuale", "Il codice civile"],
                correct: 1,
                motivation: "Il PTPCT è uno degli strumenti fondamentali per la prevenzione della corruzione.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Quale tra questi NON è un soggetto della prevenzione della corruzione?",
                options: ["Organi di indirizzo", "Referenti", "Revisori dei conti", "RPCT"],
                correct: 2,
                motivation: "I revisori dei conti non sono tra i soggetti della prevenzione della corruzione.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Qual è una misura generale di prevenzione della corruzione?",
                options: ["Trasparenza", "Incentivi economici", "Premi di produzione", "Aumenti salariali"],
                correct: 0,
                motivation: "La trasparenza è una misura generale di prevenzione della corruzione.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Cosa comporta l'inosservanza delle misure di prevenzione?",
                options: ["Nessuna conseguenza", "Illecito disciplinare", "Solo una segnalazione", "Bonus negato"],
                correct: 1,
                motivation: "L'inosservanza delle misure di prevenzione comporta illecito disciplinare.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Quale tra questi è un obbligo previsto dalla misura della trasparenza?",
                options: ["Pubblicazione dei dati sul portale Internet", "Pubblicazione solo su Intranet", "Nessuna pubblicazione", "Pubblicazione facoltativa"],
                correct: 0,
                motivation: "La pubblicazione dei dati sul portale Internet è un obbligo previsto dalla misura della trasparenza.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Chi può presentare una richiesta di accesso civico semplice?",
                options: ["Solo i dipendenti pubblici", "Chiunque", "Solo i cittadini italiani", "Solo i residenti"],
                correct: 1,
                motivation: "Chiunque può presentare una richiesta di accesso civico semplice.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Quale tra questi è un esempio di area di rischio comune a tutte le amministrazioni?",
                options: ["Attività contrattuale", "Attività sportiva", "Attività ricreativa", "Attività culturale"],
                correct: 0,
                motivation: "L'attività contrattuale è un esempio di area di rischio comune a tutte le amministrazioni.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Qual è la funzione principale dei referenti nella prevenzione della corruzione?",
                options: ["Redigere il bilancio", "Collaborare al monitoraggio e fornire informazioni al RPCT", "Gestire le risorse umane", "Nominare i dirigenti"],
                correct: 1,
                motivation: "I referenti collaborano al monitoraggio e forniscono informazioni al RPCT.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Cosa prevede la rotazione del personale come misura generale?",
                options: ["Nessun limite di permanenza", "Durata massima decennale per dirigenti e funzionari preposti", "Rotazione solo per il personale amministrativo", "Rotazione mensile"],
                correct: 1,
                motivation: "La rotazione prevede una durata massima decennale per dirigenti e funzionari preposti.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Quale tra questi NON è uno strumento della prevenzione della corruzione?",
                options: ["Monitoraggio", "Segnalazione degli illeciti", "Piano ferie", "Formazione"],
                correct: 2,
                motivation: "Il piano ferie non è uno strumento della prevenzione della corruzione.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Cosa garantisce la normativa al dipendente che segnala un illecito (whistleblower)?",
                options: ["Un premio economico", "Riservatezza e protezione da sanzioni", "Trasferimento obbligatorio", "Promozione automatica"],
                correct: 1,
                motivation: "La normativa garantisce riservatezza e protezione da sanzioni al whistleblower.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Quale tra questi è un compito del RPCT?",
                options: ["Gestire le ferie del personale", "Predisporre il PTPCT", "Nominare i revisori dei conti", "Approvare il bilancio"],
                correct: 1,
                motivation: "Predisporre il PTPCT è un compito del RPCT.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Qual è la periodicità del monitoraggio annuale sulle misure di prevenzione?",
                options: ["Mensile", "Annuale", "Triennale", "Semestrale"],
                correct: 1,
                motivation: "Il monitoraggio sulle misure di prevenzione è annuale.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Dove si trovano i moduli per l'accesso civico nella Corte dei conti?",
                options: ["In segreteria", "Sul portale Internet, sezione 'Amministrazione trasparente'", "Solo su richiesta scritta", "In biblioteca"],
                correct: 1,
                motivation: "I moduli si trovano sul portale Internet, sezione 'Amministrazione trasparente'.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Quale tra questi è un allegato tipico al PTPCT?",
                options: ["Mappatura delle attività a rischio", "Statuto dell'ente", "Elenco dei fornitori", "Calendario delle ferie"],
                correct: 0,
                motivation: "La mappatura delle attività a rischio è un allegato tipico al PTPCT.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Qual è la funzione della formazione nella prevenzione della corruzione?",
                options: ["Solo per i nuovi assunti", "Sensibilizzare e aggiornare tutto il personale sulle misure di prevenzione", "Non è prevista", "Solo per i dirigenti"],
                correct: 1,
                motivation: "La formazione serve a sensibilizzare e aggiornare tutto il personale sulle misure di prevenzione.",
                category: "Prevenzione della Corruzione"
            },
            {
                question: "Quale tra questi è un limite all'accesso civico generalizzato?",
                options: ["Non può riguardare atti giudiziari", "Può essere richiesto solo dai dirigenti", "Non esistono limiti", "Solo per atti pubblici"],
                correct: 0,
                motivation: "L'accesso civico generalizzato non può riguardare atti giudiziari.",
                category: "Prevenzione della Corruzione"
            },
			{		
				question: "Qual è la norma fondamentale che ha introdotto il sistema di prevenzione della corruzione nella pubblica amministrazione?",
				options: ["Decreto Legislativo 33/2013", "Legge 190/2012", "Decreto Legislativo 39/2013", "Legge 179/2017"],
				correct: 1,
				motivation: "La Legge 6 novembre 2012, n. 190 rappresenta la norma cardine in materia di prevenzione e repressione della corruzione e dell'illegalità nella pubblica amministrazione.",
				category: "Normativa anticorruzione"
			},
			{
				question: "Secondo il Piano Nazionale Anticorruzione del 2013, cosa si intende per 'maladministration'?",
				options: ["Solo i reati contro la pubblica amministrazione", "Atti che, pur non essendo reati, contrastano con l'interesse pubblico e pregiudicano l'affidamento dei cittadini", "Esclusivamente la corruzione propria e impropria", "Solo le violazioni del codice di comportamento"],
				correct: 1,
				motivation: "La maladministration comprende atti e comportamenti che, anche se non costituiscono specifici reati, contrastano con la cura dell'interesse pubblico e pregiudicano l'affidamento dei cittadini nell'imparzialità delle amministrazioni.",
				category: "Concetto di corruzione"
			},
			{
				question: "Chi nomina il Responsabile della Prevenzione della Corruzione e della Trasparenza (RPCT) nella Corte dei conti?",
				options: ["Il Consiglio di Presidenza", "Il Presidente della Corte dei conti", "L'ANAC", "Il Segretario Generale"],
				correct: 1,
				motivation: "Il Presidente della Corte dei conti nomina il RPCT mediante decreto presidenziale, in qualità di organo di indirizzo politico-amministrativo.",
				category: "Soggetti della prevenzione"
			},
			{
				question: "Entro quale data deve essere adottato annualmente il Piano Triennale di Prevenzione della Corruzione e della Trasparenza?",
				options: ["31 marzo", "31 dicembre", "31 gennaio", "30 giugno"],
				correct: 2,
				motivation: "Il Piano Triennale di Prevenzione della Corruzione e della Trasparenza deve essere adottato entro il 31 gennaio di ogni anno dall'organo di indirizzo politico-amministrativo.",
				category: "Prevenzione della Corruzione"
			},
			{
				question: "Chi sono i destinatari del Piano Triennale di Prevenzione della Corruzione nella Corte dei conti?",
				options: ["Tutti i dipendenti, compresi i magistrati", "Solo i dirigenti di prima fascia", "I dirigenti di prima e seconda fascia e il personale amministrativo, nonché i collaboratori", "Solo il personale delle Direzioni Generali"],
				correct: 2,
				motivation: "Il Piano si rivolge ai dirigenti di prima e seconda fascia e al personale amministrativo in servizio presso la Corte dei conti, nonché ai collaboratori. Il personale di magistratura NON è destinatario del Piano, in quanto per tale categoria valgono le iniziative degli organi di autogoverno.",
				category: "Piano Triennale"
			},
			{
				question: "Qual è la durata massima dell'incarico presso la stessa struttura per dirigenti e funzionari preposti secondo il principio della rotazione del personale?",
				options: ["5 anni", "7 anni", "15 anni", "10 anni"],
				correct: 3,
				motivation: "La durata massima è di 10 anni presso la stessa struttura per dirigenti e funzionari preposti, al termine della quale deve essere disposto il trasferimento ad un'altra struttura.",
				category: "Misure di prevenzione"
			},
			{
				question: "Quale conseguenza comporta l'inosservanza delle misure di prevenzione previste nel Piano?",
				options: ["Nessuna conseguenza se non ci sono danni economici", "Esclusivamente responsabilità amministrativa", "Illecito disciplinare, ferme restando eventuali responsabilità penale, civile, amministrativa o contabile", "Solo un richiamo verbale"],
				correct: 2,
				motivation: "L'inosservanza delle misure di prevenzione costituisce illecito disciplinare ai sensi dell'art. 1, comma 14, della L. 190/2012, ferme restando le ipotesi di responsabilità penale, civile, amministrativa o contabile del pubblico dipendente.",
				category: "Misure di prevenzione"
			},
			{
				question: "Quante sono le sezioni in cui è articolato il Piano Triennale di Prevenzione della Corruzione della Corte dei conti?",
				options: ["7 sezioni", "9 sezioni", "5 sezioni", "12 sezioni"],
				correct: 1,
				motivation: "Il Piano della Corte dei conti è articolato in 9 sezioni: Premessa, Soggetti, Trasparenza e integrità, Aree di rischio, Formazione, Altre misure generali, Monitoraggio e riesame, Aggiornamento del PTPCT, Disposizioni finali.",
				category: "Piano Triennale"
			},
			{
				question: "Quale decreto legislativo disciplina gli obblighi di trasparenza e l'accesso civico?",
				options: ["D.Lgs. 165/2001", "D.Lgs. 39/2013", "D.Lgs. 33/2013", "D.Lgs. 24/2023"],
				correct: 2,
				motivation: "Il Decreto Legislativo 14 marzo 2013, n. 33 riordina la disciplina riguardante il diritto di accesso civico e gli obblighi di pubblicità, trasparenza e diffusione di informazioni da parte delle pubbliche amministrazioni.",
				category: "Normativa anticorruzione"
			},
			{
				question: "Entro quale termine deve essere trasmessa ad ANAC la relazione annuale del RPCT?",
				options: ["31 gennaio", "31 marzo", "30 giugno", "31 dicembre"],
				correct: 1,
				motivation: "Il RPCT deve trasmettere all'ANAC la relazione annuale sull'attività svolta entro il 31 marzo di ogni anno, utilizzando l'apposito format standardizzato predisposto dall'Autorità.",
				category: "Prevenzione della Corruzione"
			},
			{
				question: "Quale misura specifica di prevenzione è prevista per le sezioni giurisdizionali nella predisposizione dei fascicoli processuali?",
				options: ["Rotazione del personale", "Codice di comportamento", "Processo telematico (GIUDICO)", "Registro cartaceo"],
				correct: 2,
				motivation: "Per le sezioni giurisdizionali, la misura specifica per la predisposizione dei fascicoli processuali è il processo telematico (GIUDICO), che informatizza tutte le fasi dell'attività garantendo tracciabilità e trasparenza.",
				category: "Misure di prevenzione"
			},
			{
				question: "Chi sono i referenti per la prevenzione della corruzione nelle strutture delle Direzioni Generali della Corte dei conti?",
				options: ["I funzionari amministrativi senior", "Il Segretario Generale", "I dirigenti di prima fascia", "Tutti i dirigenti indistintamente"],
				correct: 2,
				motivation: "Nelle strutture delle Direzioni Generali, i referenti per la prevenzione della corruzione sono i dirigenti di prima fascia, che fungono da interfaccia operativa con il RPCT.",
				category: "Soggetti della prevenzione"
			},
			{
				question: "Quale norma disciplina l'inconferibilità e incompatibilità di incarichi presso le pubbliche amministrazioni?",
				options: ["D.Lgs. 39/2013", "L. 190/2012", "D.Lgs. 33/2013", "D.P.R. 62/2013"],
				correct: 0,
				motivation: "Il Decreto Legislativo 8 aprile 2013, n. 39 contiene le disposizioni specifiche in materia di inconferibilità e incompatibilità di incarichi presso le pubbliche amministrazioni e gli enti privati in controllo pubblico.",
				category: "Normativa anticorruzione"
			},
			{
				question: "Qual è il termine per la conclusione del procedimento di accesso civico semplice?",
				options: ["15 giorni", "60 giorni", "30 giorni", "90 giorni"],
				correct: 2,
				motivation: "L'amministrazione deve concludere il procedimento di accesso civico semplice entro 30 giorni dalla ricezione dell'istanza, pubblicando il dato omesso e dandone comunicazione al richiedente.",
				category: "Trasparenza e accesso civico"
			},
			{
				question: "In caso di accesso civico generalizzato con presenza di controinteressati, qual è il termine massimo per la conclusione del procedimento?",
				options: ["30 giorni", "40-50 giorni", "60 giorni", "90 giorni"],
				correct: 1,
				motivation: "In caso di controinteressati, deve essere effettuata la comunicazione preventiva che hanno 10 giorni per presentare opposizione. Il termine complessivo diventa quindi di 40-50 giorni.",
				category: "Trasparenza e accesso civico"
			},
			{
				question: "Quale articolo del D.Lgs. 165/2001 introduce la tutela del whistleblower?",
				options: ["Art. 54-bis", "Art. 21", "Art. 55-bis", "Art. 30"],
				correct: 0,
				motivation: "L'art. 54-bis del D.Lgs. 165/2001 introduce la tutela del dipendente pubblico che segnala condotte illecite (whistleblower), garantendo la riservatezza dell'identità e protezione da ritorsioni.",
				category: "Whistleblowing"
			},
			{
				question: "Entro quale termine il RPCT deve dare riscontro al segnalante di una segnalazione di whistleblowing?",
				options: ["30 giorni", "60 giorni", "120 giorni", "90 giorni"],
				correct: 3,
				motivation: "Il RPCT deve dare riscontro al segnalante sullo stato della segnalazione entro 90 giorni dalla ricezione. Questo termine può essere prorogato in caso di particolare complessità dell'istruttoria.",
				category: "Whistleblowing"
			},
			{
				question: "Quale decreto legislativo del 2023 ha recepito la Direttiva UE sul whistleblowing?",
				options: ["D.Lgs. 24/2023", "D.Lgs. 33/2023", "D.Lgs. 50/2023", "D.Lgs. 81/2023"],
				correct: 0,
				motivation: "Il Decreto Legislativo 10 marzo 2023, n. 24 ha recepito in Italia la Direttiva (UE) 2019/1937 riguardante la protezione delle persone che segnalano violazioni, introducendo un sistema organico di tutele.",
				category: "Normativa anticorruzione"
			},
			{
				question: "Con quale frequenza viene effettuato il monitoraggio sull'attuazione delle misure di prevenzione nella Corte dei conti?",
				options: ["Trimestrale", "Semestrale", "Annuale", "Biennale"],
				correct: 2,
				motivation: "Il monitoraggio sull'attuazione delle misure di prevenzione viene effettuato una volta l'anno, all'inizio dell'anno successivo, attraverso questionari informatici somministrati ai referenti.",
				category: "Prevenzione della Corruzione"
			},
			{
				question: "Con quale frequenza viene effettuato il monitoraggio sulla misura della trasparenza nella Corte dei conti?",
				options: ["Mensile", "Trimestrale", "Semestrale", "Annuale"],
				correct: 2,
				motivation: "Il monitoraggio sulla misura della trasparenza viene effettuato con frequenza semestrale (indicativamente a giugno e dicembre) attraverso circolari del RPCT indirizzate ai dirigenti e funzionari preposti.",
				category: "Prevenzione della Corruzione"
			},
			{
				question: "Quale codice disciplina l'accesso agli atti delle attività giudiziarie della Corte dei conti?",
				options: ["Codice della Privacy", "Codice di Giustizia Contabile", "Codice dell'Amministrazione Digitale", "Codice Civile"],
				correct: 1,
				motivation: "Il Codice di Giustizia Contabile (D.Lgs. 174/2016) disciplina specificamente l'accesso agli atti processuali e prevede forme di segretezza nelle fasi procedimentali, come il segreto d'ufficio.",
				category: "Trasparenza e accesso civico"
			},
			{
				question: "Quale tra le seguenti è considerata un'area di rischio obbligatoria secondo l'art. 1, comma 16 della L. 190/2012?",
				options: ["Gestione del sito web istituzionale", "Attività contrattuale", "Comunicazione esterna", "Archivio documentale"],
				correct: 1,
				motivation: "L'attività contrattuale è una delle aree di rischio obbligatorie comuni a tutte le amministrazioni, considerata tra quelle a massimo rischio insieme alla gestione del personale e alla gestione delle entrate e delle spese.",
				category: "Aree di rischio"
			},
			{
				question: "Quale misura alternativa può essere adottata quando la rotazione del personale non è possibile?",
				options: ["Riduzione dell'orario di lavoro", "Formazione specifica intensiva", "Affiancamento di un altro funzionario e articolazione dei compiti", "Sospensione temporanea dall'incarico"],
				correct: 2,
				motivation: "Tra le misure alternative alla rotazione vi sono: l'affiancamento di un altro funzionario, l'articolazione dei compiti per evitare il controllo esclusivo da parte di una singola persona, e lo svolgimento di riunioni informative periodiche.",
				category: "Misure di prevenzione"
			},
			{
				question: "Cosa si intende per 'mappatura delle attività' nel contesto della prevenzione della corruzione?",
				options: ["La localizzazione geografica degli uffici", "L'individuazione dettagliata di processi, responsabili, azioni, livelli di rischio e misure per ciascuna area", "L'elenco del personale per ogni ufficio", "La distribuzione delle competenze tra i vari uffici"],
				correct: 1,
				motivation: "La mappatura delle attività è il processo attraverso cui si individuano per ogni area di rischio: i processi da monitorare, i responsabili, le azioni (fasi del processo), il livello di rischio e le misure di prevenzione specifiche.",
				category: "Aree di rischio"
			},
			{
				question: "Quale principio fondamentale tutela il whistleblower nella Corte dei conti?",
				options: ["Diritto all'indennità economica", "Riservatezza dell'identità e tutela da ritorsioni", "Priorità nelle progressioni di carriera", "Esonero da responsabilità disciplinare per qualsiasi condotta"],
				correct: 1,
				motivation: "Il whistleblower è tutelato attraverso la riservatezza della sua identità (che non può essere rivelata) e la protezione da qualsiasi forma di ritorsione (sanzioni, licenziamento, trasferimento, demansionamento).",
				category: "Whistleblowing"
			},
			{
				question: "Dove si trova la sezione 'Amministrazione trasparente' sul portale della Corte dei conti?",
				options: ["Solo su Intranet", "Nella home page del portale Internet", "Solo nell'area riservata ai dirigenti", "Nel portale del personale"],
				correct: 1,
				motivation: "La sezione 'Amministrazione trasparente' si trova nella home page del portale Internet della Corte dei conti, nella parte azzurra in basso, ed è accessibile a tutti i cittadini.",
				category: "Trasparenza e accesso civico"
			},
			{
				question: "Quale organo adotta il Piano Nazionale Anticorruzione che fornisce indicazioni alle amministrazioni?",
				options: ["Il Ministero della Giustizia", "La Presidenza del Consiglio dei Ministri", "L'ANAC (Autorità Nazionale Anticorruzione)", "La Corte dei Conti"],
				correct: 2,
				motivation: "L'ANAC (Autorità Nazionale Anticorruzione) adotta il Piano Nazionale Anticorruzione, che contiene indicazioni metodologiche e operative vincolanti per tutte le amministrazioni, oltre a specifiche delibere su vari ambiti della prevenzione.",
				category: "Normativa anticorruzione"
			},
			{
				question: "Quale tra le seguenti NON è una misura generale di prevenzione?",
				options: ["Trasparenza", "Informatizzazione dei processi specifici", "Formazione", "Codici di comportamento"],
				correct: 1,
				motivation: "L'informatizzazione dei processi specifici (es. GIUDICO per le sezioni giurisdizionali) è una misura specifica, calibrata su singoli uffici. Le misure generali sono trasparenza, formazione, codici di comportamento e rotazione del personale.",
				category: "Misure di prevenzione"
			},
			{
				question: "Quale sistema informatico è utilizzato nella Corte dei conti per la gestione delle segnalazioni di whistleblowing?",
				options: ["Sistema SIGMA", "Applicativo dedicato accessibile da Intranet alla voce 'Segnalazione condotte illecite'", "Posta elettronica certificata", "Registro cartaceo presso l'Ufficio del Personale"],
				correct: 1,
				motivation: "La Corte dei conti utilizza un applicativo informatico dedicato, accessibile dal portale Intranet alla voce 'Anticorruzione e trasparenza' > 'Segnalazione condotte illecite', che garantisce l'anonimato del segnalante e la tracciabilità della segnalazione.",
				category: "Whistleblowing"
			},
			{
				question: "Perché la Corte dei conti applica la normativa anticorruzione 'nei limiti di applicabilità'?",
				options: ["Perché ha ottenuto una deroga ministeriale", "Perché essendo organo costituzionale non è direttamente riconducibile alla nozione di PA soggetta integralmente alla L. 190/2012", "Perché non ha sufficiente personale amministrativo", "Perché svolge solo attività giurisdizionale"],
				correct: 1,
				motivation: "Come indicato nel PNA 2019, gli organi costituzionali e a rilevanza costituzionale, tra cui la Corte dei conti, non sono direttamente riconducibili alla nozione di pubbliche amministrazioni soggette integralmente alla L. 190/2012, pur essendo chiamati ad adeguarsi progressivamente alla normativa nel rispetto della propria autonomia.",
				category: "Piano Triennale"
			},
			
            // A07 - Trasparenza
            {
                question: "In quale legge è stato introdotto esplicitamente il principio di trasparenza tra i principi fondamentali dell'azione amministrativa italiana?",
                options: ["Legge 190/2012", "Legge 241/1990, modificata dalla legge 15/2005", "Decreto legislativo 33/2013", "Legge 69/2009"],
                correct: 1,
                motivation: "Il principio di trasparenza è stato inserito tra i principi fondamentali dell'azione amministrativa con la modifica della legge 241/1990 ad opera della legge 15/2005.",
                category: "Trasparenza"
            },
            {
                question: "Quale tra questi è un principio collegato alla trasparenza secondo la legge 241/1990?",
                options: ["Principio di rotazione", "Principio di motivazione", "Principio di economicità", "Principio di pubblicità legale"],
                correct: 1,
                motivation: "Il principio di motivazione degli atti amministrativi è strettamente collegato alla trasparenza.",
                category: "Trasparenza"
            },
            {
                question: "L'accesso agli atti amministrativi è riconosciuto:",
                options: ["Solo ai cittadini italiani", "A chiunque, senza limiti", "Solo ai soggetti con interesse diretto, concreto e attuale", "Solo ai dipendenti pubblici"],
                correct: 2,
                motivation: "L'accesso agli atti è garantito solo a chi dimostra un interesse diretto, concreto e attuale.",
                category: "Trasparenza"
            },
            {
                question: "Quale tra questi NON è un esempio di pubblico registro?",
                options: ["Registro automobilistico", "Catasto", "Conservatoria dei registri immobiliari", "Protocollo interno di un ufficio"],
                correct: 3,
                motivation: "Il protocollo interno di un ufficio non è un pubblico registro.",
                category: "Trasparenza"
            },
            {
                question: "L'accesso agli atti può essere escluso per:",
                options: ["Documenti coperti da segreto di Stato", "Atti pubblicati sul sito istituzionale", "Atti di nomina dei dirigenti", "Bilanci preventivi"],
                correct: 0,
                motivation: "L'accesso è escluso per documenti coperti da segreto di Stato o che riguardano la sicurezza nazionale.",
                category: "Trasparenza"
            },
            {
                question: "Chi sono i controinteressati nell'accesso agli atti?",
                options: ["I soggetti che hanno presentato domanda di accesso", "I soggetti che potrebbero vedere compromesso il proprio diritto alla riservatezza", "I dipendenti dell'ufficio protocollo", "I membri della commissione giudicatrice"],
                correct: 1,
                motivation: "I controinteressati sono coloro che potrebbero subire un pregiudizio alla propria riservatezza dall'accesso agli atti.",
                category: "Trasparenza"
            },
            {
                question: "Quale tra questi è un esempio di dato 'supersensibile'?",
                options: ["Numero di telefono", "Stato di salute", "Indirizzo di residenza", "Titolo di studio"],
                correct: 1,
                motivation: "I dati relativi allo stato di salute sono considerati supersensibili.",
                category: "Trasparenza"
            },
            {
                question: "L'accesso ai dati sensibili è consentito:",
                options: ["Sempre, senza limiti", "Solo se indispensabile per la tutela di interessi giuridici", "Solo ai giornalisti", "Mai"],
                correct: 1,
                motivation: "L'accesso ai dati sensibili è consentito solo se strettamente indispensabile per la tutela di interessi giuridici rilevanti.",
                category: "Trasparenza"
            },
            {
                question: "Quale tra questi è un obbligo di pubblicazione previsto dalla normativa sulla trasparenza?",
                options: ["Elenco dei fornitori", "Curriculum dei dirigenti", "Dati personali dei cittadini", "Password di accesso ai sistemi"],
                correct: 1,
                motivation: "La normativa sulla trasparenza prevede la pubblicazione dei curricula dei dirigenti.",
                category: "Trasparenza"
            },
            {
                question: "L'accesso civico generalizzato consente:",
                options: ["Solo ai dipendenti pubblici di accedere agli atti", "A chiunque di accedere a dati e documenti ulteriori rispetto a quelli oggetto di pubblicazione", "Solo ai residenti nel Comune", "Solo ai titolari di un interesse qualificato"],
                correct: 1,
                motivation: "L'accesso civico generalizzato è aperto a chiunque, senza necessità di motivare un interesse specifico.",
                category: "Trasparenza"
            },
            {
                question: "Qual è il termine massimo per la conclusione del procedimento di accesso civico?",
                options: ["10 giorni", "15 giorni", "30 giorni", "60 giorni"],
                correct: 2,
                motivation: "Il procedimento di accesso civico deve concludersi entro 30 giorni dalla presentazione della richiesta.",
                category: "Trasparenza"
            },
            {
                question: "In caso di diniego dell'accesso civico, il richiedente può:",
                options: ["Presentare richiesta di riesame al responsabile della prevenzione della corruzione", "Fare ricorso al Presidente della Repubblica", "Chiedere l'intervento del Prefetto", "Non ha alcun rimedio"],
                correct: 0,
                motivation: "In caso di diniego, il richiedente può chiedere il riesame al responsabile della prevenzione della corruzione e della trasparenza.",
                category: "Trasparenza"
            },
            {
                question: "Quale tra questi è un limite all'accesso civico generalizzato?",
                options: ["La presenza di dati personali non pertinenti", "L'assenza di motivazione nella richiesta", "La richiesta presentata via email", "La richiesta presentata da un avvocato"],
                correct: 0,
                motivation: "L'accesso civico generalizzato è limitato quando la richiesta riguarda dati personali non pertinenti.",
                category: "Trasparenza"
            },
            {
                question: "Chi decide sulle richieste di accesso civico semplice?",
                options: ["Il Sindaco", "Il responsabile del procedimento", "Il Segretario comunale", "Il Prefetto"],
                correct: 1,
                motivation: "È il responsabile del procedimento che valuta e decide sulle richieste di accesso civico semplice.",
                category: "Trasparenza"
            },
            {
                question: "Quale tra questi è un obbligo per le pubbliche amministrazioni in materia di trasparenza?",
                options: ["Creare una sezione 'Amministrazione trasparente' sul sito istituzionale", "Pubblicare solo i dati richiesti dai cittadini", "Pubblicare solo i dati relativi ai contratti pubblici", "Pubblicare solo i dati degli ultimi 12 mesi"],
                correct: 0,
                motivation: "Tutte le PA devono avere una sezione 'Amministrazione trasparente' dove pubblicare i dati previsti dalla normativa.",
                category: "Trasparenza"
            },
            {
                question: "L'accesso agli atti può essere differito:",
                options: ["Solo per motivi di privacy", "Per salvaguardare esigenze dell'amministrazione o interessi dei controinteressati", "Mai", "Solo su richiesta del dirigente"],
                correct: 1,
                motivation: "Il differimento può essere disposto per tutelare esigenze amministrative o i diritti dei controinteressati.",
                category: "Trasparenza"
            },
            {
                question: "Quale tra questi è un rimedio contro il rifiuto di accesso agli atti?",
                options: ["Ricorso giurisdizionale al TAR", "Richiesta di mediazione al Prefetto", "Segnalazione ai Carabinieri", "Nessun rimedio previsto"],
                correct: 0,
                motivation: "Il ricorso al TAR è il rimedio previsto contro il diniego di accesso agli atti amministrativi.",
                category: "Trasparenza"
            },
            {
                question: "L'obbligo di pubblicazione dei dati relativi agli incarichi dirigenziali riguarda:",
                options: ["Tutti i dipendenti pubblici", "Solo i dirigenti di vertice", "Solo i dipendenti a tempo determinato", "Solo i collaboratori esterni"],
                correct: 1,
                motivation: "La Corte Costituzionale ha stabilito che l'obbligo di pubblicazione dei dati reddituali riguarda solo i dirigenti di vertice.",
                category: "Trasparenza"
            },
            {
                question: "Il responsabile della trasparenza:",
                options: ["È sempre il responsabile della prevenzione della corruzione", "È nominato dal Prefetto", "È scelto tra i cittadini", "Non esiste"],
                correct: 0,
                motivation: "Di norma, il responsabile della prevenzione della corruzione svolge anche le funzioni di responsabile della trasparenza.",
                category: "Trasparenza"
            },
            {
                question: "La mancata pubblicazione dei dati obbligatori può comportare:",
                options: ["Nessuna conseguenza", "Sanzioni disciplinari e decurtazione dell'indennità di risultato", "Solo una segnalazione interna", "L'annullamento di tutti gli atti amministrativi"],
                correct: 1,
                motivation: "La mancata pubblicazione può comportare responsabilità disciplinare e la decurtazione dell'indennità di risultato per i responsabili.",
                category: "Trasparenza"
            },
			{
				question: "Quale decreto legislativo ha introdotto l'accesso civico generalizzato nel nostro ordinamento?",
				options: ["D.Lgs. 33/2013", "D.Lgs. 150/2009", "D.Lgs. 97/2016", "D.Lgs. 50/2016"],
				correct: 2,
				motivation: "L'accesso civico generalizzato è stato introdotto dal D.Lgs. 97/2016 (Riforma Madia), che ha profondamente modificato il D.Lgs. 33/2013, estendendo il diritto di accesso a tutti i dati e documenti detenuti dalle PA, non solo a quelli oggetto di pubblicazione obbligatoria.",
				category: "Trasparenza"
			  },
			  {
				question: "In quale anno il principio di trasparenza è stato espressamente inserito tra i principi fondamentali della Legge 241/90?",
				options: ["1990", "2005", "2009", "2016"],
				correct: 1,
				motivation: "Il principio di trasparenza è stato inserito espressamente nell'art. 1, comma 1, della Legge 241/90 solo nel 2005 con la Legge 15/05, sebbene fosse già implicitamente ricavabile dalla formulazione originaria della legge.",
				category: "Trasparenza"
			  },
			  {
				question: "Qual è il termine ordinario per la risposta a una richiesta di accesso documentale ai sensi della Legge 241/90?",
				options: ["15 giorni", "20 giorni", "30 giorni", "60 giorni"],
				correct: 2,
				motivation: "Il procedimento di accesso documentale deve concludersi nel termine di 30 giorni dalla richiesta. Decorso tale termine senza risposta, si verifica il silenzio-rigetto.",
				category: "Trasparenza"
			  },
			  {
				question: "Chi è competente a decidere sull'istanza di riesame in caso di diniego di accesso civico generalizzato?",
				options: ["Il Difensore Civico", "La Commissione per l'Accesso", "Il dirigente dell'ufficio", "Il Responsabile della Prevenzione della Corruzione e della Trasparenza"],
				correct: 3,
				motivation: "L'istanza di riesame per l'accesso civico (sia semplice che generalizzato) deve essere presentata al Responsabile della Prevenzione della Corruzione e della Trasparenza (RPCT), che decide entro 20 giorni.",
				category: "Trasparenza"
			  },
			  {
				question: "L'accesso documentale ex Legge 241/90 richiede che il richiedente dimostri un interesse:",
				options: ["Diretto, concreto, attuale, qualificato e differenziato", "Generico e non motivato", "Solo attuale", "Esclusivamente economico"],
				correct: 0,
				motivation: "Per l'accesso documentale è necessario che il richiedente sia titolare di un interesse diretto, concreto, attuale, qualificato, differenziato e specificato nella richiesta. La mera curiosità è esclusa.",
				category: "Trasparenza"
			  },
			  {
				question: "Quale tra i seguenti NON è un limite all'accesso civico generalizzato?",
				options: ["Protezione dei dati personali", "Segreti commerciali", "Interesse personale del richiedente", "Sicurezza nazionale"],
				correct: 2,
				motivation: "L'accesso civico generalizzato non richiede che il richiedente dimostri alcun interesse personale qualificato, essendo aperto a 'chiunque'. I limiti riguardano invece la tutela di interessi pubblici (sicurezza nazionale) e privati (dati personali, segreti commerciali).",
				category: "Trasparenza"
			  },
			  {
				question: "Per quanto tempo devono rimanere pubblicati i dati nella sezione 'Amministrazione trasparente'?",
				options: ["3 anni", "5 anni o fino alla cessazione degli effetti", "10 anni", "Indefinitamente"],
				correct: 1,
				motivation: "I dati devono essere pubblicati per un periodo di 5 anni e comunque fino a che gli atti pubblicati producono i loro effetti, se questo periodo è superiore ai 5 anni.",
				category: "Trasparenza"
			  },
			  {
				question: "La Sentenza della Corte Costituzionale n. 20/2019 ha dichiarato incostituzionale l'obbligo di pubblicazione dei dati reddituali:",
				options: ["Per tutti i dipendenti pubblici", "Solo per i dirigenti di vertice", "Indiscriminatamente per tutti i dirigenti", "Per gli incarichi politici"],
				correct: 2,
				motivation: "La Corte Costituzionale ha dichiarato incostituzionale l'obbligo di pubblicazione dei dati reddituali indiscriminatamente per tutti i dirigenti, ritenendone la legittimità solo con riferimento ai dirigenti di vertice (art. 19, commi 3 e 4, D.Lgs. 165/2001).",
				category: "Trasparenza"
			  },
			  {
				question: "Qual è la sanzione per il responsabile della mancata pubblicazione dei dati sugli incarichi politici e dirigenziali secondo la Legge 160/2019?",
				options: ["Multa da 1.000 a 5.000 euro", "Sospensione dal servizio", "Decurtazione dal 30% al 60% dell'indennità di risultato", "Licenziamento"],
				correct: 2,
				motivation: "Il comma 163 della Legge 160/2019 (legge di bilancio 2020) prevede una sanzione consistente nella decurtazione dal 30% al 60% dell'indennità di risultato o accessoria a carico del responsabile della mancata pubblicazione e del RPCT.",
				category: "Trasparenza"
			  },
			  {
				question: "L'accesso civico semplice riguarda:",
				options: ["Tutti i documenti detenuti dalla PA", "Solo i dati oggetto di pubblicazione obbligatoria non pubblicati", "Gli atti di un procedimento amministrativo", "Esclusivamente i bilanci"],
				correct: 1,
				motivation: "L'accesso civico semplice è il diritto di chiunque di richiedere i dati, le informazioni o i documenti che le PA abbiano omesso di pubblicare pur essendovi obbligate. È quindi limitato ai dati oggetto di pubblicazione obbligatoria.",
				category: "Trasparenza"
			  },
			  {
				question: "In caso di accesso civico generalizzato con controinteressati, entro quanti giorni questi possono presentare opposizione?",
				options: ["5 giorni", "10 giorni", "15 giorni", "30 giorni"],
				correct: 1,
				motivation: "I controinteressati possono presentare una motivata opposizione entro 10 giorni dalla ricezione della comunicazione dell'istanza di accesso. Durante questo periodo il termine di 30 giorni per la decisione è sospeso.",
				category: "Trasparenza"
			  },
			  {
				question: "Quale tra questi dati è escluso dall'accesso civico generalizzato?",
				options: ["Curriculum dei dirigenti", "Dati idonei a rivelare lo stato di salute", "Bilanci dell'ente", "Organigramma"],
				correct: 1,
				motivation: "I dati supersensibili, ovvero quelli idonei a rivelare lo stato di salute e l'orientamento sessuale, sono esclusi dall'accesso civico generalizzato per tutelare la sfera più intima della persona.",
				category: "Trasparenza"
			  },
			  {
				question: "Il TAR Lazio con sentenza n. 11413/2021 ha stabilito che un genitore può accedere agli esami universitari del figlio maggiorenne:",
				options: ["Mai, per tutela della privacy", "Solo se il figlio è economicamente dipendente", "Sì, in base al diritto-dovere costituzionale di istruire ed educare i figli", "Solo fino ai 21 anni del figlio"],
				correct: 2,
				motivation: "Il TAR Lazio ha riconosciuto il diritto del genitore di accedere agli esami del figlio anche maggiorenne, in quanto sussiste un 'diritto-dovere' costituzionale di istruire ed educare i figli, comprensivo dell'obbligo di contribuire alle spese universitarie.",
				category: "Trasparenza"
			  },
			  {
				question: "Entro quanto tempo il Responsabile della Prevenzione della Corruzione deve decidere sull'istanza di riesame per l'accesso civico?",
				options: ["10 giorni", "15 giorni", "20 giorni", "30 giorni"],
				correct: 2,
				motivation: "Il RPCT deve decidere sull'istanza di riesame entro 20 giorni dalla richiesta. Se l'accesso è stato negato per tutela dei dati personali, deve sentire il Garante Privacy che si pronuncia entro 10 giorni.",
				category: "Trasparenza"
			  },
			  {
				question: "La pubblicazione degli estremi dell'atto di conferimento di incarichi di consulenza è:",
				options: ["Facoltativa", "Condizione di efficacia dell'atto e per la liquidazione dei compensi", "Richiesta solo per importi superiori a 10.000 euro", "Necessaria solo per incarichi a privati"],
				correct: 1,
				motivation: "La pubblicazione degli estremi dell'atto di conferimento è condizione per l'acquisizione dell'efficacia dell'atto e per la liquidazione dei compensi. In caso di omessa pubblicazione, il pagamento determina responsabilità del dirigente.",
				category: "Trasparenza"
			  },
			  {
				question: "Quale principio si applica all'accesso a documenti contenenti dati sensibili secondo la Legge 241/90?",
				options: ["Accesso sempre negato", "Principio del pari grado", "Principio di indispensabilità", "Accesso libero"],
				correct: 2,
				motivation: "Per i dati sensibili e giudiziari si applica il principio di indispensabilità: l'accesso è consentito ai soli dati indispensabili alla cura degli interessi. Per i dati supersensibili si aggiunge anche il principio del 'pari grado'.",
				category: "Trasparenza"
			  },
			  {
				question: "In caso di accoglimento di accesso civico generalizzato nonostante l'opposizione del controinteressato, quando può avvenire il rilascio dei documenti?",
				options: ["Immediatamente", "Entro 5 giorni", "Non prima di 15 giorni dalla comunicazione al controinteressato", "Dopo 30 giorni"],
				correct: 2,
				motivation: "Se la richiesta di accesso è accolta nonostante l'opposizione del controinteressato, l'amministrazione trasmette i documenti al richiedente non prima di 15 giorni dalla comunicazione al controinteressato, per consentirgli di presentare eventuale ricorso.",
				category: "Trasparenza"
			  },
			  {
				question: "La trasparenza amministrativa costituisce livello essenziale delle prestazioni ai sensi:",
				options: ["Dell'art. 97 della Costituzione", "Dell'art. 117, comma 2, lett. m, della Costituzione", "Dell'art. 3 della Costituzione", "Dell'art. 24 della Costituzione"],
				correct: 1,
				motivation: "La Legge 190/2012 ha elevato la trasparenza a livello essenziale delle prestazioni concernenti i diritti sociali e civili ai sensi dell'art. 117, comma 2, lett. m, della Costituzione, rendendola applicabile uniformemente su tutto il territorio nazionale.",
				category: "Trasparenza"
			  },
			  {
				question: "Quale organo decide sull'istanza di riesame per l'accesso documentale relativo ad atti delle amministrazioni statali?",
				options: ["Il Difensore Civico", "La Commissione per l'Accesso ai Documenti Amministrativi", "Il TAR", "Il Responsabile della Prevenzione della Corruzione"],
				correct: 1,
				motivation: "Per gli atti delle amministrazioni statali, l'istanza di riesame va presentata alla Commissione per l'Accesso ai Documenti Amministrativi (e all'amministrazione resistente), che decide entro 30 giorni. Per gli enti territoriali si ricorre al Difensore Civico.",
				category: "Trasparenza"
			  },
			  {
				question: "L'accesso agli atti di gara in via informale, senza necessità di istanza scritta, è consentito:",
				options: ["Mai, serve sempre istanza formale", "Entro 10 giorni dall'invio della comunicazione di aggiudicazione o esclusione", "Solo per l'aggiudicatario", "Entro 30 giorni dalla pubblicazione del bando"],
				correct: 1,
				motivation: "L'art. 53 del D.Lgs. 50/2016 prevede l'accesso informale entro 10 giorni dall'invio della comunicazione per i provvedimenti di aggiudicazione definitiva, esclusione, decisione di non aggiudicare e data di stipula del contratto.",
				category: "Trasparenza"
			  },
			  {
				question: "Quale tra queste affermazioni sull'accesso civico generalizzato è FALSA?",
				options: ["Non richiede motivazione", "È aperto a chiunque", "Deve essere sempre gratuito, anche per la riproduzione materiale", "Può riguardare dati e documenti ulteriori rispetto a quelli da pubblicare"],
				correct: 2,
				motivation: "L'accesso civico generalizzato è gratuito, salvo il rimborso del costo effettivamente sostenuto e documentato dall'amministrazione per la riproduzione su supporti materiali. Non è quindi completamente gratuito in caso di riproduzione fisica.",
				category: "Trasparenza"
			  },
			  {
				question: "I verbali delle commissioni giudicatrici dei concorsi pubblici sono accessibili?",
				options: ["No, mai", "Sì, rientrano nella casistica positiva dell'accesso documentale", "Solo dopo 5 anni", "Solo dall'interessato che ha partecipato"],
				correct: 1,
				motivation: "I verbali della commissione giudicatrice, così come le prove d'esame e le graduatorie, rientrano nella casistica positiva dell'accesso documentale e sono quindi accessibili ai soggetti legittimati.",
				category: "Trasparenza"
			  },
			  {
				question: "Il periodo minimo che deve essere concesso per prendere visione dei documenti in caso di accoglimento dell'accesso documentale è di:",
				options: ["7 giorni", "10 giorni", "15 giorni", "30 giorni"],
				correct: 2,
				motivation: "L'atto di accoglimento della richiesta di accesso documentale deve indicare un congruo periodo di tempo per prendere visione dei documenti, comunque non inferiore a 15 giorni.",
				category: "Trasparenza"
			  },
			  {
				question: "La Commissione per l'Accesso ai Documenti Amministrativi è presieduta da:",
				options: ["Il Presidente del Consiglio", "Il Sottosegretario alla Presidenza del Consiglio", "Il Ministro della Funzione Pubblica", "Il Presidente del TAR Lazio"],
				correct: 1,
				motivation: "La Commissione per l'Accesso è presieduta dal Sottosegretario alla Presidenza del Consiglio ed è composta da 12 membri (2 deputati, 2 senatori, 4 magistrati, 2 professori universitari, 1 dirigente statale, 1 dirigente della Presidenza).",
				category: "Trasparenza"
			  },
			  {
				question: "Quale riforma ha introdotto il concetto di trasparenza come 'accessibilità totale' delle informazioni?",
				options: ["Legge 241/90", "Riforma Brunetta (D.Lgs. 150/2009)", "Legge Anticorruzione (L. 190/2012)", "Riforma Madia (D.Lgs. 97/2016)"],
				correct: 1,
				motivation: "Il D.Lgs. 150/2009 (Riforma Brunetta) ha introdotto per la prima volta il concetto di trasparenza come 'accessibilità totale' delle informazioni concernenti l'organizzazione e l'attività delle PA, allo scopo di favorire forme diffuse di controllo.",
				category: "Trasparenza"
			  },
			  {
				question: "Non sono ammissibili istanze di accesso documentale:",
				options: ["Da parte di associazioni", "Preordinate ad un controllo generalizzato delle PA", "Motivate con interesse alla tutela di diritti", "Relative a procedimenti conclusi"],
				correct: 1,
				motivation: "L'art. 24, comma 3, della Legge 241/90 stabilisce espressamente che 'non sono ammissibili istanze di accesso preordinate ad un controllo generalizzato delle pubbliche amministrazioni'. È necessario un interesse specifico e qualificato.",
				category: "Trasparenza"
			  },
			  {
				question: "Il termine per presentare ricorso al TAR avverso il diniego di accesso è di:",
				options: ["15 giorni", "30 giorni", "60 giorni", "90 giorni"],
				correct: 1,
				motivation: "Il ricorso al TAR avverso il diniego (espresso o tacito) di accesso deve essere presentato entro 30 giorni. Il TAR decide in Camera di Consiglio entro 30 giorni dalla scadenza del termine per ricorrere.",
				category: "Trasparenza"
			  },
			  {
				question: "Quale affermazione sui controinteressati nell'accesso documentale è corretta?",
				options: ["Non vanno mai coinvolti nel procedimento", "Sono solo le autorità pubbliche interessate", "Sono soggetti che vedrebbero compromesso il loro diritto alla riservatezza", "Possono bloccare definitivamente l'accesso"],
				correct: 2,
				motivation: "I controinteressati sono tutti i soggetti, individuati o facilmente individuabili, che vedrebbero compromesso dall'esercizio dell'accesso il loro diritto alla riservatezza. L'amministrazione deve valutarne l'esistenza e bilanciarla con il diritto di accesso.",
				category: "Trasparenza"
			  },
			  {
				question: "Per i documenti contenenti dati supersensibili (salute e orientamento sessuale), l'accesso è consentito solo se:",
				options: ["Mai consentito", "Sempre consentito", "La situazione da tutelare è di rango costituzionale pari ai diritti di riservatezza", "Decorsi 10 anni"],
				correct: 2,
				motivation: "Per i dati supersensibili, l'accesso è consentito solo se la situazione giuridica da tutelare è di rango costituzionale almeno pari ai diritti di riservatezza, oppure consiste nella tutela di un diritto della personalità o altro diritto/libertà fondamentale.",
				category: "Trasparenza"
			  },
			  {
				question: "Secondo l'art. 29 del Codice dei Contratti Pubblici, chi è responsabile della pubblicazione degli atti di gara?",
				options: ["Il dirigente dell'ente", "Il Responsabile Unico del Procedimento (RUP)", "Il Responsabile della Trasparenza", "La commissione giudicatrice"],
				correct: 1,
				motivation: "L'art. 29 del D.Lgs. 50/2016 stabilisce che tutti gli atti relativi alle procedure di gara devono essere pubblicati e aggiornati sul profilo del committente a cura del Responsabile Unico del Procedimento (RUP).",
				category: "Trasparenza"
			  },

            // A08 - Sicurezza sul Lavoro
            {
                question: "Qual è la normativa di riferimento attualmente in vigore per la sicurezza sul lavoro in Italia?",
                options: ["DPR 303/1956", "D.Lgs. 81/2008", "Statuto dei Lavoratori 1970", "D.Lgs. 626/1994"],
                correct: 1,
                motivation: "Il D.Lgs. 81/2008, noto come Testo Unico sulla Sicurezza, ha riordinato e aggiornato tutta la normativa precedente.",
                category: "Sicurezza sul Lavoro"
            },
            {
                question: "Secondo la Costituzione Italiana, quale articolo tutela la salute come diritto fondamentale?",
                options: ["Art. 41", "Art. 32", "Art. 2087", "Art. 2050"],
                correct: 1,
                motivation: "L'articolo 32 della Costituzione tutela la salute come diritto fondamentale dell'individuo e interesse della collettività.",
                category: "Sicurezza sul Lavoro"
            },
            {
                question: "Chi è il principale responsabile della sicurezza dei lavoratori secondo il D.Lgs. 81/2008?",
                options: ["Il preposto", "Il medico competente", "Il datore di lavoro", "Il lavoratore"],
                correct: 2,
                motivation: "Il datore di lavoro è il principale responsabile della sicurezza e della salute dei lavoratori.",
                category: "Sicurezza sul Lavoro"
            },
            {
                question: "Quale tra questi è un obbligo non delegabile del datore di lavoro?",
                options: ["La formazione dei lavoratori", "La nomina del RSPP", "La sorveglianza sanitaria", "La gestione delle emergenze"],
                correct: 1,
                motivation: "La nomina del Responsabile del Servizio di Prevenzione e Protezione (RSPP) è un obbligo non delegabile del datore di lavoro.",
                category: "Sicurezza sul Lavoro"
            },
            {
                question: "Che cos'è il DVR?",
                options: ["Documento di Valutazione dei Rischi", "Documento di Verifica dei Requisiti", "Documento di Validazione dei Rischi", "Documento di Valutazione delle Risorse"],
                correct: 0,
                motivation: "Il DVR è il Documento di Valutazione dei Rischi, obbligatorio per ogni azienda.",
                category: "Sicurezza sul Lavoro"
            },
			{
				question: "Qual è l'articolo della Costituzione che tutela la salute come diritto fondamentale dell'individuo?",
				options: ["Articolo 32", "Articolo 41", "Articolo 1", "Articolo 21"],
				correct: 0,
				motivation: "L'articolo 32 della Costituzione stabilisce che 'La Repubblica tutela la salute come fondamentale diritto dell'individuo e interesse della collettività', ponendo le basi costituzionali della tutela della salute dei lavoratori.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Quale Decreto Legislativo rappresenta il Testo Unico sulla Sicurezza attualmente in vigore?",
				options: ["D.Lgs. 626/1994", "D.Lgs. 81/2008", "DPR 547/1955", "D.Lgs. 38/2000"],
				correct: 1,
				motivation: "Il D.Lgs. 81/2008, noto come Testo Unico sulla Sicurezza, è la normativa attualmente in vigore che riordina e coordina l'intera disciplina della salute e sicurezza sul lavoro.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Quali sono i due obblighi NON delegabili del datore di lavoro?",
				options: ["Nominare il Medico Competente e fornire i DPI", "Valutare i rischi ed elaborare il DVR e designare il RSPP", "Formare i lavoratori e designare gli addetti alle emergenze", "Consultare il RLS e tenere il registro infortuni"],
				correct: 1,
				motivation: "L'articolo 17 del D.Lgs. 81/2008 stabilisce che i due obblighi non delegabili del datore di lavoro sono: 1) la valutazione di tutti i rischi con elaborazione del DVR e 2) la designazione del RSPP.",
				category: "Obblighi del datore di lavoro"
			},
			{
				question: "Entro quanti giorni deve essere aggiornato il DVR in caso di modifiche significative del processo produttivo?",
				options: ["15 giorni", "60 giorni", "30 giorni", "90 giorni"],
				correct: 2,
				motivation: "Il DVR deve essere aggiornato entro 30 giorni dalle circostanze che ne richiedono la revisione, come modifiche significative del processo produttivo, infortuni significativi o risultati della sorveglianza sanitaria.",
				category: "Valutazione dei rischi"
			},
			{
				question: "Come si calcola il rischio secondo la formula utilizzata nella valutazione dei rischi?",
				options: ["R = P + D", "R = P × D", "R = P / D", "R = P - D"],
				correct: 1,
				motivation: "Il rischio si calcola con la formula R = P × D, dove P è la Probabilità di accadimento dell'evento dannoso (scala 1-4) e D è la gravità del Danno atteso (scala 1-4).",
				category: "Valutazione dei rischi"
			},
			{
				question: "Qual è il valore massimo del rischio nella matrice di valutazione?",
				options: ["12", "8", "16", "10"],
				correct: 2,
				motivation: "Il valore massimo del rischio è 16, dato dalla moltiplicazione di Probabilità 4 (molto probabile) per Danno 4 (gravissimo). Questo livello richiede azioni immediate e indilazionabili.",
				category: "Valutazione dei rischi"
			},
			{
				question: "Cosa si intende per 'infortunio in itinere'?",
				options: ["Infortunio avvenuto durante la pausa pranzo in mensa aziendale", "Infortunio nel percorso casa-lavoro o tra luoghi di lavoro diversi", "Infortunio durante un viaggio di lavoro all'estero", "Infortunio causato da stress lavorativo"],
				correct: 1,
				motivation: "L'infortunio in itinere è l'infortunio che si verifica durante il normale percorso di andata e ritorno tra l'abitazione e il luogo di lavoro, tra due luoghi di lavoro, o tra il luogo di lavoro e il luogo di consumazione abituale dei pasti.",
				category: "Infortuni sul lavoro"
			},
			{
				question: "Quando l'uso del mezzo privato per il tragitto casa-lavoro è considerato giustificato dall'INAIL?",
				options: ["Solo se il mezzo è fornito dal datore di lavoro", "Solo se la distanza è superiore a 50 km", "Quando il risparmio di tempo è pari o superiore a un'ora per tragitto o non esistono mezzi pubblici", "Solo in caso di emergenze familiari"],
				correct: 2,
				motivation: "L'INAIL considera giustificato l'uso del mezzo privato quando: il mezzo è fornito/prescritto dal datore, non esistono mezzi pubblici, non c'è coincidenza oraria, il risparmio di tempo è ≥1 ora, o vi sono oggettive difficoltà nell'uso dei mezzi pubblici.",
				category: "Infortuni sul lavoro"
			},
			{
				question: "Chi è il Datore di Lavoro per la Sicurezza nella Corte dei Conti?",
				options: ["Il Presidente della Corte dei Conti", "Il Segretario Generale", "Il Dirigente Generale della Direzione Gestione Affari Generali (DGAG)", "Il Direttore delle Risorse Umane"],
				correct: 2,
				motivation: "Nella Corte dei Conti, il ruolo di Datore di Lavoro per la Sicurezza è attribuito al Dirigente Generale della Direzione Gestione Affari Generali (DGAG), come stabilito dal regolamento di organizzazione.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Qual è la differenza principale tra Dirigente e Preposto in materia di sicurezza?",
				options: ["Il Dirigente ha più anzianità di servizio", "Il Dirigente ha potere di iniziativa, il Preposto ha dovere di vigilanza", "Non c'è differenza sostanziale", "Il Preposto ha responsabilità penali maggiori"],
				correct: 1,
				motivation: "La differenza fondamentale è che il Dirigente ha un potere-dovere di attivazione e iniziativa (organizza, decide, pianifica), mentre il Preposto ha essenzialmente un dovere di vigilanza e controllo (verifica l'attuazione delle direttive).",
				category: "Figure della sicurezza"
			},
			{
				question: "Quale articolo del D.Lgs. 81/2008 introduce il 'principio dell'effettività'?",
				options: ["Articolo 17", "Articolo 299", "Articolo 28", "Articolo 20"],
				correct: 1,
				motivation: "L'articolo 299 introduce il principio di effettività, stabilendo che gli obblighi di datori di lavoro, dirigenti e preposti gravano anche su chi, pur senza formale investitura, esercita in concreto i relativi poteri.",
				category: "Figure della sicurezza"
			},
			{
				question: "Per quante ore settimanali di utilizzo del videoterminale è obbligatoria la sorveglianza sanitaria?",
				options: ["15 ore", "20 ore", "25 ore", "30 ore"],
				correct: 1,
				motivation: "Secondo l'articolo 173 del D.Lgs. 81/2008, il videoterminalista soggetto a sorveglianza sanitaria è il lavoratore che utilizza un'attrezzatura munita di videoterminale per almeno 20 ore settimanali.",
				category: "Sorveglianza sanitaria"
			},
			{
				question: "Dopo quanti giorni continuativi di assenza per malattia è obbligatoria la visita medica alla ripresa del lavoro?",
				options: ["30 giorni", "45 giorni", "60 giorni", "90 giorni"],
				correct: 2,
				motivation: "È prevista la visita medica alla ripresa del lavoro dopo un'assenza per motivi di salute superiore a 60 giorni continuativi, per verificare l'idoneità alla mansione specifica.",
				category: "Sorveglianza sanitaria"
			},
			{
				question: "Quali sono i possibili giudizi di idoneità che può esprimere il Medico Competente?",
				options: ["Solo idoneità o inidoneità", "Idoneità, idoneità con limitazioni, inidoneità", "Idoneità, idoneità parziale, inidoneità temporanea, inidoneità permanente", "Idoneo, non idoneo, da rivalutare"],
				correct: 2,
				motivation: "Il Medico Competente può esprimere quattro tipi di giudizio: 1) Idoneità, 2) Idoneità parziale (temporanea o permanente con limitazioni), 3) Inidoneità temporanea, 4) Inidoneità permanente.",
				category: "Sorveglianza sanitaria"
			},
			{
				question: "Cosa NON è il Rappresentante dei Lavoratori per la Sicurezza (RLS)?",
				options: ["Un portavoce dei lavoratori in materia di sicurezza", "Un formatore o tecnico della prevenzione", "Un soggetto consultato dal datore di lavoro", "Un partecipante alla riunione periodica"],
				correct: 1,
				motivation: "L'RLS NON è un formatore, né un tecnico della formazione, né il responsabile della sicurezza. Il suo ruolo è di consultazione, proposta e controllo, non di gestione operativa della sicurezza.",
				category: "Figure della sicurezza"
			},
			{
				question: "Secondo il nuovo Accordo Stato-Regioni (bozza 2024), qual è la durata del corso base per Preposti?",
				options: ["8 ore", "12 ore", "16 ore", "20 ore"],
				correct: 1,
				motivation: "Il nuovo Accordo Stato-Regioni prevede per i Preposti un corso base di 12 ore (in aumento rispetto alle precedenti 8 ore), con aggiornamento biennale di 6 ore e divieto di modalità e-learning.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Con quale frequenza deve essere aggiornata la formazione dei Preposti secondo il nuovo Accordo?",
				options: ["Annuale", "Biennale", "Triennale", "Quinquennale"],
				correct: 1,
				motivation: "I Preposti devono aggiornare la loro formazione ogni 2 anni (cadenza biennale) con un corso di almeno 6 ore, una frequenza maggiore rispetto ad altre figure per sottolineare il loro ruolo cruciale nella vigilanza quotidiana.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Entro quanto tempo dalla pubblicazione in Gazzetta Ufficiale i Datori di Lavoro devono completare il corso base di 16 ore?",
				options: ["6 mesi", "1 anno", "2 anni", "3 anni"],
				correct: 2,
				motivation: "Secondo il nuovo Accordo Stato-Regioni (bozza 2024), i Datori di Lavoro devono completare il corso base di 16 ore entro 2 anni dalla pubblicazione in Gazzetta Ufficiale del nuovo Accordo.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Qual è la cadenza dell'aggiornamento formativo per i Dirigenti?",
				options: ["Biennale", "Triennale", "Quinquennale", "Annuale"],
				correct: 2,
				motivation: "I Dirigenti devono aggiornare la loro formazione ogni 5 anni (cadenza quinquennale) con un corso di almeno 6 ore, alla pari dei Datori di Lavoro.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Cosa significa l'acronimo DUVRI?",
				options: ["Documento Unico Valutazione Rischi Interferenze", "Documento Univoco Verifica Rischi Infortuni", "Dispositivo Unificato Vigilanza Rischi Imprese", "Delibera Urgente Valutazione Rischi Interni"],
				correct: 0,
				motivation: "DUVRI significa Documento Unico di Valutazione dei Rischi da Interferenze, ed è lo strumento previsto dall'art. 26 del D.Lgs. 81/2008 per gestire i rischi quando più imprese operano nello stesso ambiente.",
				category: "DUVRI e appalti"
			},
			{
				question: "Quando NON è obbligatorio redigere il DUVRI?",
				options: ["Per servizi di natura intellettuale o mere forniture", "Per lavori di manutenzione ordinaria", "Per contratti con lavoratori autonomi", "Per appalti di servizi di pulizia"],
				correct: 0,
				motivation: "Il DUVRI non è obbligatorio per: servizi di natura intellettuale, mere forniture di materiali/attrezzature, e lavori/servizi ≤ 5 uomini-giorno (salvo rischi particolari). I servizi di pulizia invece richiedono normalmente il DUVRI.",
				category: "DUVRI e appalti"
			},
			{
				question: "Qual è il limite di durata dei lavori sotto il quale non è obbligatorio il DUVRI (salvo rischi particolari)?",
				options: ["3 uomini-giorno", "5 uomini-giorno", "7 uomini-giorno", "10 uomini-giorno"],
				correct: 1,
				motivation: "Non è obbligatorio redigere il DUVRI per lavori o servizi di durata non superiore a 5 uomini-giorno, a condizione che non comportino rischi particolari (incendio elevato, ambienti confinati, agenti cancerogeni, ecc.).",
				category: "DUVRI e appalti"
			},
			{
				question: "Cosa si intende per 'interferenza spaziale ma non temporale'?",
				options: ["Attività contemporanee in luoghi diversi", "Attività in tempi diversi nello stesso luogo con rischi persistenti", "Attività in luoghi e tempi diversi", "Attività contemporanee nello stesso luogo"],
				correct: 1,
				motivation: "L'interferenza spaziale ma non temporale si verifica quando le attività avvengono in momenti diversi ma nello stesso luogo, con possibili interferenze differite (es. detergenti chimici persistenti usati di notte che espongono i lavoratori dell'ufficio al mattino).",
				category: "DUVRI e appalti"
			},
			{
				question: "Chi è responsabile della redazione del DUVRI?",
				options: ["L'impresa appaltatrice", "Il Committente", "Il RSPP dell'appaltatore", "Il Coordinatore per la Sicurezza"],
				correct: 1,
				motivation: "Il DUVRI è redatto dal Committente (il datore di lavoro che affida l'appalto), non dalle imprese appaltatrici, che comunque devono cooperare fornendo informazioni sui rischi e la documentazione di idoneità tecnico-professionale.",
				category: "DUVRI e appalti"
			},
			{
				question: "Quale articolo del Codice Civile impone all'imprenditore di adottare misure per tutelare l'integrità fisica dei lavoratori?",
				options: ["Articolo 2043", "Articolo 2050", "Articolo 2087", "Articolo 2094"],
				correct: 2,
				motivation: "L'articolo 2087 del Codice Civile stabilisce che l'imprenditore è tenuto ad adottare le misure che, secondo la particolarità del lavoro, l'esperienza e la tecnica, sono necessarie a tutelare l'integrità fisica dei prestatori di lavoro.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Quale sanzione prevede l'art. 437 del Codice Penale per l'omissione dolosa di cautele contro infortuni?",
				options: ["Sanzione amministrativa da 5.000 a 30.000 euro", "Reclusione da 6 mesi a 5 anni", "Sospensione dell'attività", "Multa fino a 50.000 euro"],
				correct: 1,
				motivation: "L'art. 437 c.p. prevede la reclusione da 6 mesi a 5 anni per chi omette di collocare o rimuove cautele contro infortuni. Se dal fatto deriva un disastro o un infortunio, la pena sale da 3 a 10 anni.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Entro quanti giorni dall'inizio dell'attività una nuova impresa deve elaborare il DVR?",
				options: ["30 giorni", "60 giorni", "90 giorni", "120 giorni"],
				correct: 2,
				motivation: "In caso di costituzione di nuova impresa, il datore di lavoro deve effettuare immediatamente la valutazione dei rischi, elaborando il relativo DVR entro 90 giorni dall'inizio dell'attività.",
				category: "Valutazione dei rischi"
			},
			{
				question: "Come può essere attestata la 'data certa' del DVR?",
				options: ["Solo tramite notaio", "Tramite notaio, PEC o registrazione all'Agenzia delle Entrate", "Solo con firma digitale", "Tramite deposito presso l'ASL"],
				correct: 1,
				motivation: "La data certa del DVR può essere attestata tramite: notaio o pubblico ufficiale, invio tramite PEC (Posta Elettronica Certificata), o registrazione presso l'Agenzia delle Entrate. Senza data certa il DVR è giuridicamente inesistente.",
				category: "Valutazione dei rischi"
			},
			{
				question: "Cosa si intende per 'rischio residuo'?",
				options: ["Il rischio di eventi naturali imprevedibili", "Il rischio minimo non eliminabile dopo l'adozione di tutte le misure preventive", "Il rischio presente solo in situazioni di emergenza", "Il rischio calcolato prima della valutazione"],
				correct: 1,
				motivation: "Il rischio residuo è il livello di rischio minimo ma non completamente eliminabile che rimane anche dopo l'implementazione di tutte le misure di prevenzione e protezione possibili. È il rischio con cui si deve convivere, informando e formando i lavoratori.",
				category: "Valutazione dei rischi"
			},
			{
				question: "Quali sono gli elementi costitutivi dell'infortunio sul lavoro?",
				options: ["Lesione e causa violenta", "Danno e negligenza", "Incidente e testimone", "Malattia e esposizione"],
				correct: 0,
				motivation: "Gli elementi integranti l'infortunio sul lavoro sono: 1) la lesione (danno all'integrità fisica o psichica), 2) la causa violenta (fattore esterno concentrato nel tempo), e 3) l'occasione di lavoro (evento durante l'attività lavorativa).",
				category: "Infortuni sul lavoro"
			},
			{
				question: "Quanti infortuni totali (in sede + in itinere) si sono verificati nelle sedi centrali della Corte dei Conti nel 2023?",
				options: ["3", "5", "7", "10"],
				correct: 1,
				motivation: "Nel 2023 nelle sedi centrali della Corte dei Conti si sono verificati 5 infortuni totali: 2 infortuni in sede e 3 infortuni in itinere, secondo i dati statistici presentati nella lezione.",
				category: "Infortuni sul lavoro"
			},
			{
				question: "Chi deve partecipare obbligatoriamente alla riunione periodica di prevenzione e protezione?",
				options: ["Solo il Datore di Lavoro e il RSPP", "Datore di Lavoro, RSPP, Medico Competente e RLS", "Tutti i lavoratori dell'azienda", "Solo i dirigenti e i preposti"],
				correct: 1,
				motivation: "Secondo l'art. 35 del D.Lgs. 81/2008, devono partecipare alla riunione periodica (almeno annuale nelle aziende con più di 15 lavoratori): il Datore di Lavoro o suo delegato, il RSPP, il Medico Competente e il RLS.",
				category: "Figure della sicurezza"
			},
			{
				question: "Qual è il compito principale del RSPP?",
				options: ["Decidere le misure di sicurezza da adottare", "Fornire consulenza e supporto tecnico al datore di lavoro", "Vigilare sui comportamenti dei lavoratori", "Sanzionare le violazioni delle norme di sicurezza"],
				correct: 1,
				motivation: "Il RSPP (Responsabile del Servizio di Prevenzione e Protezione) ha un ruolo propositivo e consultivo, non decisionale. Fornisce consulenza tecnica al datore di lavoro, individua i rischi, propone misure preventive, ma le decisioni finali spettano sempre al datore.",
				category: "Figure della sicurezza"
			},
			{
				question: "Quale obbligo NON rientra tra quelli del lavoratore secondo l'art. 20 del D.Lgs. 81/2008?",
				options: ["Prendersi cura della propria salute e sicurezza", "Nominare il Medico Competente", "Utilizzare correttamente i DPI forniti", "Segnalare immediatamente le deficienze dei mezzi"],
				correct: 1,
				motivation: "La nomina del Medico Competente è un obbligo del datore di lavoro, non del lavoratore. I lavoratori devono invece prendersi cura della propria sicurezza, utilizzare correttamente attrezzature e DPI, segnalare deficienze e partecipare alla formazione.",
				category: "Figure della sicurezza"
			},
			{
				question: "Gli Addetti alle Emergenze possono rifiutare la designazione?",
				options: ["Sì, sempre liberamente", "No, mai", "Solo per giustificato motivo", "Solo se non hanno la formazione adeguata"],
				correct: 2,
				motivation: "Gli Addetti alle Emergenze (antincendio e primo soccorso) non possono rifiutare la designazione se non per giustificato motivo. Devono essere in numero sufficiente, disporre di attrezzature adeguate e ricevere formazione specifica.",
				category: "Figure della sicurezza"
			},
			{
				question: "Secondo il DPR 81/2023, per cosa NON possono essere utilizzati gli account di posta istituzionali?",
				options: ["Comunicazioni di servizio urgenti", "Fini personali in modo prolungato che pregiudichi il lavoro", "Comunicazioni con altri enti pubblici", "Scambio di documenti ufficiali"],
				correct: 1,
				motivation: "Il DPR 81/2023 (art. 11bis) stabilisce che gli account istituzionali devono essere usati per fini lavorativi. È consentito un uso personale contenuto per incombenze personali in tempi ristretti e senza pregiudizio per i compiti istituzionali.",
				category: "Codice di comportamento"
			},
			{
				question: "Secondo il nuovo Codice di Comportamento, quando un dipendente si esprime sui social media deve:",
				options: ["Sempre identificarsi come dipendente pubblico", "Porre cautele affinché le opinioni non siano attribuite all'amministrazione", "Evitare completamente l'uso dei social", "Richiedere autorizzazione preventiva"],
				correct: 1,
				motivation: "L'art. 11ter del DPR 81/2023 stabilisce che il dipendente che si esprime sui social a titolo personale deve porre cautele necessarie affinché le opinioni non siano attribuite all'amministrazione e astenersi da commenti nocivi al prestigio dell'ente.",
				category: "Codice di comportamento"
			},
			{
				question: "Quali nuovi obblighi il DPR 81/2023 ha introdotto specificatamente per i Dirigenti?",
				options: ["Obbligo di presenza fisica in ufficio", "Curare il benessere organizzativo e la crescita professionale dei collaboratori", "Svolgere personalmente tutti i controlli di sicurezza", "Sostituire il RSPP nelle sue funzioni"],
				correct: 1,
				motivation: "Il DPR 81/2023 ha introdotto per i Dirigenti l'obbligo di: comportamento esemplare, curare la crescita professionale dei collaboratori, favorire un ambiente di lavoro collaborativo, misurare risultati e comportamento organizzativo.",
				category: "Codice di comportamento"
			},
			{
				question: "Quando devono essere effettuati i cicli formativi obbligatori in materia di etica pubblica?",
				options: ["Solo all'assunzione", "All'assunzione, al passaggio a ruoli superiori e in caso di trasferimento", "Solo ogni 5 anni", "Solo su richiesta del dipendente"],
				correct: 1,
				motivation: "L'art. 15 modificato del DPR 62/2013 prevede cicli formativi obbligatori su etica pubblica: a seguito di assunzione, in occasione del passaggio a ruoli/funzioni superiori, e in caso di trasferimento del personale.",
				category: "Codice di comportamento"
			},
			{
				question: "Quale dei seguenti NON è considerato un rischio da interferenza?",
				options: ["Rischi immessi dall'appaltatore nel luogo del committente", "Rischi personali del singolo lavoratore non legati all'appalto", "Rischi da sovrapposizione di attività di imprese diverse", "Rischi esistenti nel luogo del committente ulteriori a quelli dell'appaltatore"],
				correct: 1,
				motivation: "I rischi da interferenza riguardano solo i rischi correlati all'affidamento di appalti e alla compresenza di più imprese. I rischi personali del singolo lavoratore non dipendenti dall'interferenza tra attività diverse non rientrano nel DUVRI.",
				category: "DUVRI e appalti"
			},
			{
				question: "In quale caso il DUVRI non va predisposto anche se ci sono lavori in appalto?",
				options: ["Quando l'appalto è di importo inferiore a 40.000 euro", "Quando esiste già un PSC (Piano Sicurezza Coordinamento) nei cantieri edili", "Quando l'appaltatore ha meno di 10 dipendenti", "Quando i lavori durano meno di un mese"],
				correct: 1,
				motivation: "Il DUVRI non va predisposto nei cantieri edili ove sia già presente un PSC (Piano di Sicurezza e Coordinamento) redatto dal Coordinatore per la Sicurezza in fase di Progettazione, poiché il PSC già gestisce i rischi da interferenza.",
				category: "DUVRI e appalti"
			},
			{
				question: "I costi della sicurezza relativi alle interferenze indicati nel DUVRI:",
				options: ["Possono essere ridotti del 20% in gara", "Non sono soggetti a ribasso d'asta", "Sono facoltativi", "Sono a carico dell'appaltatore"],
				correct: 1,
				motivation: "I costi della sicurezza per le interferenze devono essere quantificati analiticamente nel DUVRI, indicati specificamente nel contratto e non sono soggetti a ribasso d'asta nelle gare pubbliche, per garantire l'effettiva realizzazione delle misure di sicurezza.",
				category: "DUVRI e appalti"
			},
			{
				question: "Chi sono i Delegati del Datore di Lavoro per la Sicurezza nelle sedi regionali della Corte dei Conti?",
				options: ["I Presidenti di Sezione Regionale", "I Dirigenti SAUR (Servizi Amministrativi Uffici Regionali)", "I Magistrati più anziani", "Gli RSPP regionali"],
				correct: 1,
				motivation: "Nelle sedi regionali della Corte dei Conti, i Dirigenti dei Servizi Amministrativi Uffici Regionali (SAUR) sono i delegati del Datore di Lavoro per l'attuazione delle misure di sicurezza nella loro struttura organizzativa di competenza.",
				category: "Sicurezza sul Lavoro"
			},
			{
				question: "Quale livello di rischio richiede 'misure urgenti e indilazionabili'?",
				options: ["Rischio 3-4", "Rischio 6-8", "Rischio 9-12", "Rischio 16"],
				correct: 2,
				motivation: "Nella matrice del rischio, i valori 9-12 corrispondono a rischio ALTO che richiede misure urgenti e indilazionabili. Il valore 16 (rischio altissimo) richiede azioni immediate con eventuale sospensione dell'attività.",
				category: "Valutazione dei rischi"
			},
			{
				question: "Quale tra queste NON è una tipologia di rischio contemplata nella valutazione?",
				options: ["Rischi per la sicurezza (infortunistici)", "Rischi per la salute (igienico-ambientali)", "Rischi trasversali/organizzativi", "Rischi finanziari dell'impresa"],
				correct: 3,
				motivation: "La valutazione dei rischi contempla: rischi per la sicurezza (infortunistici), rischi per la salute (igienico-ambientali) e rischi trasversali/organizzativi. I rischi finanziari dell'impresa non rientrano nella valutazione ai fini della sicurezza dei lavoratori.",
				category: "Valutazione dei rischi"
			},
			{
				question: "Cosa si intende per 'Near Miss'?",
				options: ["Un infortunio grave evitato per fortuna", "Un mancato incidente utile per introdurre correttivi", "Un infortunio lieve senza conseguenze", "Un infortunio non denunciato"],
				correct: 1,
				motivation: "Il Near Miss (quasi infortunio o mancato incidente) è un evento che non causa lesioni o malattie ma possiede il potenziale per generarle. È utile per il datore di lavoro per introdurre correttivi ed evitare il ripetersi dell'evento in futuro.",
				category: "Infortuni sul lavoro"
			},
			{
				question: "Secondo l'art. 28 del D.Lgs. 81/2008, quali rischi devono essere obbligatoriamente inclusi nella valutazione?",
				options: ["Solo i rischi di infortunio", "Solo i rischi chimici e fisici", "Tutti i rischi inclusi stress lavoro-correlato, gravidanza, differenze di genere ed età", "Solo i rischi maggiori individuati dal RSPP"],
				correct: 2,
				motivation: "L'art. 28 stabilisce che la valutazione deve riguardare TUTTI i rischi, compresi quelli collegati allo stress lavoro-correlato, lavoratrici in gravidanza, differenze di genere, età, provenienza da altri Paesi e tipologia contrattuale.",
				category: "Valutazione dei rischi"
			},
			{
				question: "Con quale frequenza il Medico Competente deve visitare gli ambienti di lavoro?",
				options: ["Una volta al mese", "Una volta ogni sei mesi", "Almeno una volta all'anno", "Solo quando richiesto dal datore di lavoro"],
				correct: 2,
				motivation: "Il Medico Competente ha l'obbligo di visitare gli ambienti di lavoro almeno una volta all'anno per conoscere direttamente i rischi presenti e valutare l'adeguatezza delle misure di prevenzione adottate.",
				category: "Sorveglianza sanitaria"
			},
			{
				question: "Quale DPR ha recentemente modificato il Codice di Comportamento dei dipendenti pubblici?",
				options: ["DPR 62/2013", "DPR 81/2023", "DPR 547/1955", "DPR 151/2011"],
				correct: 1,
				motivation: "Il DPR 81/2023 ha modificato il DPR 62/2013 (Codice di comportamento dei dipendenti pubblici), introducendo nuove disposizioni su utilizzo tecnologie informatiche (art. 11bis), social media (art. 11ter) e obblighi specifici per i dirigenti.",
				category: "Codice di comportamento"
			},

            // A10 - Trasformazione Digitale
            {
                question: "Qual è la definizione più corretta di trasformazione digitale nella Corte dei conti?",
                options: ["Sostituire i computer ogni 5 anni", "Un insieme di azioni che sfruttano strumenti digitali per migliorare l'efficienza organizzativa", "Usare solo la posta elettronica", "Automatizzare solo la protocollazione"],
                correct: 1,
                motivation: "La trasformazione digitale è un processo di cambiamento che sfrutta strumenti digitali e tecnologie innovative per migliorare l'efficienza complessiva dell'organizzazione.",
                category: "Trasformazione Digitale"
            },
            {
                question: "Qual è l'obiettivo generale della trasformazione digitale secondo la Corte dei conti?",
                options: ["Ridurre il personale", "Rivedere i processi in ottica end-to-end per rispondere in tempo reale alle richieste dell'utenza", "Digitalizzare solo i documenti", "Automatizzare le firme"],
                correct: 1,
                motivation: "L'obiettivo è rivedere i processi operativi end-to-end per migliorare efficienza, efficacia, economicità, trasparenza ed equità.",
                category: "Trasformazione Digitale"
            },
            {
                question: "Quale tra questi è un principio essenziale per il successo della trasformazione digitale?",
                options: ["Solo innovazione tecnologica", "Managerialità, trasparenza, etica, impegno e rispetto", "Solo formazione informatica", "Solo riduzione dei costi"],
                correct: 1,
                motivation: "Oltre alla tecnologia, sono fondamentali managerialità, trasparenza, etica, impegno e rispetto.",
                category: "Trasformazione Digitale"
            },
            {
                question: "Qual è uno degli ostacoli più frequenti alla trasformazione digitale nella PA?",
                options: ["Eccesso di hardware", "Eccesso di parole e resistenza al cambiamento", "Troppa innovazione", "Mancanza di carta"],
                correct: 1,
                motivation: "L'eccesso di parole e la resistenza al cambiamento sono ostacoli riconosciuti anche in ambienti digitalmente avanzati come la Corte dei conti.",
                category: "Trasformazione Digitale"
            },
            {
                question: "Cosa si intende per digitalizzare un processo 'end-to-end'?",
                options: ["Digitalizzare solo la parte iniziale", "Digitalizzare solo la parte finale", "Digitalizzare l'intero processo, dalla richiesta dell'utente alla conclusione", "Digitalizzare solo i documenti"],
                correct: 2,
                motivation: "Un processo end-to-end è digitalizzato completamente, senza passaggi cartacei intermedi.",
                category: "Trasformazione Digitale"
            },
			{
				question: "Qual è la definizione corretta di trasformazione digitale secondo il materiale del corso?",
				options: ["L'acquisto di nuove tecnologie digitali", "Un insieme di azioni di cambiamento che sfruttano strumenti digitali per migliorare l'efficienza organizzativa", "La sostituzione del personale con sistemi automatizzati", "L'eliminazione dei processi cartacei"],
				correct: 1,
				motivation: "La trasformazione digitale è definita come un insieme di azioni di cambiamento che sfruttano gli strumenti digitali e le tecnologie innovative per migliorare l'efficienza complessiva di tutta l'organizzazione.",
				category: "Trasformazione digitale"
			},
			{
				question: "Quale principio fondamentale deve guidare la trasformazione digitale?",
				options: ["Prima la tecnologia, poi i processi", "Prima i processi, poi la tecnologia", "Solo la tecnologia conta", "I processi non sono rilevanti"],
				correct: 1,
				motivation: "Il materiale enfatizza il principio 'PRIMA I PROCESSI, POI LA TECNOLOGIA!' come fondamentale per una corretta trasformazione digitale.",
				category: "Trasformazione digitale"
			},
			{
				question: "Quali sono i tre pilastri della sicurezza informatica?",
				options: ["Velocità, efficienza, economicità", "Confidenzialità, integrità, disponibilità", "Tecnologia, personale, budget", "Hardware, software, reti"],
				correct: 1,
				motivation: "L'obiettivo principale della sicurezza cibernetica è garantire la confidenzialità, integrità e disponibilità delle informazioni.",
				category: "Cybersecurity"
			},
			{
				question: "La trasformazione digitale è principalmente:",
				options: ["Un prodotto tecnologico", "Un processo continuo e ciclico", "Un evento una tantum", "Una soluzione software"],
				correct: 1,
				motivation: "La trasformazione digitale è un PROCESSO, non un prodotto, ed è ciclica e finalizzata al miglioramento continuo.",
				category: "Trasformazione digitale"
			},
			{
				question: "Quale ente ha il ruolo primario nella cybersicurezza per la Pubblica Amministrazione italiana?",
				options: ["AGID", "ACN (Agenzia per la Cybersicurezza Nazionale)", "Garante della Privacy", "Ministero dell'Innovazione"],
				correct: 1,
				motivation: "Il ruolo primario è di ACN (Agenzia per la Cybersicurezza Nazionale), istituita con il D.L. 14 giugno 2021, n. 82, a tutela degli interessi nazionali nel cyberspazio.",
				category: "Cybersecurity"
			},
			{
				question: "In Corte dei Conti, chi ha la responsabilità sulla cybersecurity?",
				options: ["Il Presidente", "Ogni singolo dipendente", "DGSIA, in particolare il Servizio per la Gestione del CUS", "Sogei"],
				correct: 2,
				motivation: "La responsabilità sulla cybersecurity in Corte dei conti, anche ai sensi della recente L. 90/2024, è della DGSIA, e, in particolare, del Servizio per la Gestione del Centro Unico Servizi (CUS).",
				category: "Cybersecurity"
			},
			{
				question: "Cosa significa MFA?",
				options: ["Multi File Access", "Multi Factor Authentication", "Maximum Failure Allowed", "Manual File Authorization"],
				correct: 1,
				motivation: "MFA significa Multi Factor Authentication ed è il sistema di gestione delle credenziali che aggiunge un ulteriore fattore di autenticazione alla coppia username/password.",
				category: "Cybersecurity"
			},
			{
				question: "Quale delle seguenti NON è una caratteristica della trasformazione digitale?",
				options: ["È orizzontale e trasversale", "È pervasiva", "Riguarda solo il settore IT", "È sia bottom-up che top-down"],
				correct: 2,
				motivation: "La trasformazione digitale è pervasiva perché interessa tutti i settori di un'organizzazione, non solo l'IT.",
				category: "Trasformazione digitale"
			},
			{
				question: "Qual è la lunghezza minima richiesta per le password di dominio in Corte dei Conti?",
				options: ["8 caratteri", "10 caratteri", "12 caratteri", "16 caratteri"],
				correct: 2,
				motivation: "Le password di dominio devono essere complesse: almeno 12 caratteri di lunghezza, maiuscole, minuscole, caratteri speciali, numeri.",
				category: "Cybersecurity"
			},
			{
				question: "Le password degli account di Corte dei Conti scadono periodicamente?",
				options: ["Sì, ogni 30 giorni", "Sì, ogni 90 giorni", "No, non scadono", "Sì, ogni 6 mesi"],
				correct: 2,
				motivation: "Le password di Corte non scadono! Ed è meglio così! Se necessario, DGSIA chiederà agli utenti di cambiarle.",
				category: "Cybersecurity"
			},
			{
				question: "Quale di questi è un ostacolo alla trasformazione digitale?",
				options: ["Eccesso di competenze digitali", "Cultura dell'adempimento", "Troppa strategia ICT", "Mancanza di normative"],
				correct: 1,
				motivation: "Tra gli ostacoli alla trasformazione digitale elencati c'è la cultura dell'adempimento.",
				category: "Trasformazione digitale"
			},
			{
				question: "Cos'è il 'credential stuffing'?",
				options: ["Un metodo di backup delle password", "L'uso di credenziali rubate da altre violazioni per tentare accessi", "Un sistema di crittografia", "Una tecnica di autenticazione"],
				correct: 1,
				motivation: "Il credential stuffing è un attacco in cui gli hacker utilizzano combinazioni di username e password rubate da altre violazioni di dati per tentare di accedere ai sistemi.",
				category: "Cybersecurity"
			},
			{
				question: "Qual è l'obiettivo generale della trasformazione digitale?",
				options: ["Ridurre il personale", "Rivedere i processi end to end per rispondere in tempo reale e recuperare efficienza", "Eliminare la carta", "Aumentare i costi"],
				correct: 1,
				motivation: "L'obiettivo è rivedere in ottica end to end i processi operativi per rispondere, sempre più in tempo reale, alle richieste dell'utenza e recuperare efficienza, efficacia, economicità, trasparenza ed equità.",
				category: "Trasformazione digitale"
			},
			{
				question: "Cosa si intende per 'phishing'?",
				options: ["Un sistema di protezione email", "Una tecnica di backup", "Tecnica di ingegneria sociale per indurre a fornire informazioni personali", "Un protocollo di sicurezza"],
				correct: 2,
				motivation: "Il phishing è una tecnica di ingegneria sociale in cui gli aggressori inviano email, messaggi o link a siti web falsi per ingannare le vittime e indurle a fornire informazioni personali.",
				category: "Cybersecurity"
			},
			{
				question: "Nel contesto della sicurezza IT, cosa garantisce la 'confidenzialità'?",
				options: ["Che i dati siano sempre disponibili", "Che i dati siano accessibili solo a chi ha il permesso", "Che i dati siano accurati", "Che i dati siano crittografati"],
				correct: 1,
				motivation: "La confidenzialità garantisce che i dati siano accessibili solo a coloro che hanno il permesso di visualizzarli, impedendo che informazioni sensibili vengano divulgate a individui non autorizzati.",
				category: "Cybersecurity"
			},
			{
				question: "Dove vanno conservati i dati in Corte dei Conti?",
				options: ["Su hard disk locali", "Su chiavette USB", "Su OneDrive e/o Sharepoint online", "Su CD/DVD"],
				correct: 2,
				motivation: "I dati vanno tenuti su OneDrive e/o su Sharepoint online per garantirne la sicurezza e l'accessibilità.",
				category: "Cybersecurity"
			},
			{
				question: "Chi è l'owner di un processo di digitalizzazione?",
				options: ["Sempre DGSIA", "Il responsabile del processo originale", "Il fornitore tecnologico", "L'amministratore di sistema"],
				correct: 1,
				motivation: "L'owner di un processo rimane tale anche quando questo viene digitalizzato. L'owner di un processo di digitalizzazione non è (quasi) mai DGSIA.",
				category: "Trasformazione digitale"
			},
			{
				question: "Cosa significa 'social engineering' nel contesto della sicurezza informatica?",
				options: ["L'uso dei social media per lavoro", "Manipolazione psicologica per indurre a compiere azioni o divulgare informazioni", "Sviluppo di social network", "Gestione delle relazioni pubbliche online"],
				correct: 1,
				motivation: "Il social engineering è una tecnica di manipolazione psicologica utilizzata dai criminali informatici per indurre le persone a compiere azioni o a divulgare informazioni riservate, sfruttando debolezze umane come la fiducia o l'urgenza.",
				category: "Cybersecurity"
			},
			{
				question: "Gli hard disk dei PC portatili di Corte sono:",
				options: ["Non protetti", "Protetti solo da password", "Crittografati", "Accessibili a tutti"],
				correct: 2,
				motivation: "Gli hard disk dei PC portatili sono crittografati: in caso di smarrimento o furto non è possibile per nessuno accedere al contenuto.",
				category: "Cybersecurity"
			},
			{
				question: "Quale principio afferma che 'non digitalizzare il caos'?",
				options: ["Prima digitalizzare, poi bonificare", "Prima bonificare i processi, poi digitalizzarli", "Digitalizzare tutto contemporaneamente", "Non è necessario bonificare"],
				correct: 1,
				motivation: "Il principio afferma: Prima, bonifica i processi già in essere; Poi, digitalizzali. Non bisogna digitalizzare il caos.",
				category: "Trasformazione digitale"
			},
			{
				question: "Nel contesto della sicurezza IT, l''integrità' garantisce che:",
				options: ["I dati siano sempre disponibili", "I dati siano accurati e non alterati in modo non autorizzato", "I dati siano confidenziali", "I dati siano crittografati"],
				correct: 1,
				motivation: "L'integrità garantisce che i dati e le informazioni siano accurati e non siano stati alterati o modificati in modo non autorizzato.",
				category: "Cybersecurity"
			},
			{
				question: "Quale comportamento è assolutamente da evitare con le password?",
				options: ["Usare password complesse", "Comunicarle a colleghi o superiori", "Cambiarle quando richiesto", "Usare MFA"],
				correct: 1,
				motivation: "Le password sono assolutamente personali e non vanno comunicate a nessuno. Non bisogna mai accettare di conoscere la password di un collega, a qualunque livello.",
				category: "Cybersecurity"
			},
			{
				question: "Cosa rappresenta il 'rischio' nella sicurezza informatica?",
				options: ["Solo la probabilità di un evento dannoso", "Solo l'impatto di un evento dannoso", "La combinazione fra probabilità e impatto di un evento dannoso", "Il costo di un attacco"],
				correct: 2,
				motivation: "Il rischio è inteso come combinazione fra la PROBABILITA' di un evento dannoso e l'IMPATTO di questo evento.",
				category: "Cybersecurity"
			},
			{
				question: "Nel modello 'security as a service' adottato da Corte dei Conti:",
				options: ["Sogei gestisce tutto autonomamente", "Corte mantiene il governo delle policy, Sogei implementa e gestisce gli incidenti", "Corte gestisce tutto internamente", "Non ci sono responsabilità definite"],
				correct: 1,
				motivation: "Nel modello 'security as a service', Corte mantiene il governo delle policy di sicurezza, ma delega la loro implementazione e la gestione degli incidenti di sicurezza a Sogei.",
				category: "Cybersecurity"
			},
			{
				question: "La trasformazione digitale coinvolge cambiamenti:",
				options: ["Solo tecnologici", "Solo organizzativi", "Tecnologici, manageriali, organizzativi, sociali e culturali", "Solo culturali"],
				correct: 2,
				motivation: "Si tratta di una serie di cambiamenti tecnologici, manageriali, organizzativi, sociali e culturali.",
				category: "Trasformazione digitale"
			},
			{
				question: "Qual è la corretta gestione delle chiavette USB in Corte dei Conti?",
				options: ["Usarle liberamente per scambiare dati", "Non utilizzarle mai per scambiare dati con colleghi", "Usarle solo per backup", "Condividerle tra colleghi"],
				correct: 1,
				motivation: "Non utilizzate MAI le chiavette USB per scambiare dati ed informazioni con i colleghi di Corte. Per lo scambio e la condivisione di dati e documenti c'è OneDrive.",
				category: "Cybersecurity"
			},
			{
				question: "Cosa garantisce la PEC (Posta Elettronica Certificata)?",
				options: ["L'identità certa del mittente", "Solo l'integrità del contenuto e il corretto recapito", "La sicurezza totale contro phishing", "L'assenza di virus"],
				correct: 1,
				motivation: "La PEC garantisce che il contenuto è integro e che il messaggio è stato correttamente recapitato, ma NON garantisce nulla sull'identità del mittente.",
				category: "Cybersecurity"
			},
			{
				question: "Quale affermazione sulla sicurezza informatica è corretta?",
				options: ["La sicurezza assoluta è raggiungibile", "La sicurezza assoluta non esiste", "Basta un buon antivirus per essere sicuri", "Solo le grandi aziende sono a rischio"],
				correct: 1,
				motivation: "È fondamentale comprendere che la sicurezza assoluta non esiste e che il rischio residuale va accettato.",
				category: "Cybersecurity"
			},
			{
				question: "Perché è importante non usare l'email di Corte per registrarsi a siti non lavorativi?",
				options: ["È vietato dalle policy IT", "Per evitare spam", "Per non esporre le credenziali a rischi esterni e evitare data breach", "Per risparmiare spazio"],
				correct: 2,
				motivation: "Non bisogna utilizzare l'indirizzo nome.cognome@corteconti.it per registrarsi a siti di natura non lavorativa, e in ogni caso non utilizzare la stessa password dell'account Corte.",
				category: "Cybersecurity"
			},
			{
				question: "Nella trasformazione digitale, un processo digitalizzato end-to-end significa:",
				options: ["Che include alcuni passaggi cartacei", "Che è completamente digitale senza interruzioni analogiche", "Che usa solo email", "Che è accessibile 24/7"],
				correct: 1,
				motivation: "Si deve cercare di digitalizzare un processo end-to-end. Non c'è niente di peggio che un processo digitale che preveda passaggi in cartaceo o che soffra dei limiti intrinseci dell'analogico.",
				category: "Trasformazione digitale"
			},
			{
				question: "Quale tipo di attacco sfrutta principalmente le debolezze umane?",
				options: ["DDoS", "Brute force", "Social engineering", "SQL injection"],
				correct: 2,
				motivation: "Il social engineering sfrutta le debolezze umane, come la fiducia, la paura, l'urgenza o la curiosità, a differenza degli attacchi che sfruttano vulnerabilità tecniche.",
				category: "Cybersecurity"
			},
			{
				question: "Cosa bisogna fare se si riceve un messaggio sospetto di phishing via email di Corte?",
				options: ["Rispondere chiedendo chiarimenti", "Cliccare sul link per verificare", "Aprire un incident su Mappa Servizi", "Inoltrarlo ai colleghi"],
				correct: 2,
				motivation: "Se il messaggio ostile arriva tramite l'email di Corte e ci si rende conto che non è di natura banale, bisogna aprire un incident su Mappa Servizi per essere guidati nelle verifiche.",
				category: "Cybersecurity"
			},
			{
				question: "Qual è il costo annuale approssimativo degli investimenti in sicurezza di Corte dei Conti?",
				options: ["500.000 euro", "1 milione di euro", "Circa 3 milioni di euro", "10 milioni di euro"],
				correct: 2,
				motivation: "Il materiale indica che Corte investe cifre importanti, circa 3 milioni di euro/anno, per la protezione delle infrastrutture.",
				category: "Cybersecurity"
			},
			{
				question: "Quale comportamento è raccomandato per lo smartphone di servizio?",
				options: ["Non impostare alcuna protezione per comodità", "Impostare una password/PIN/sequenza di sblocco complessa", "Condividere il PIN con i colleghi", "Lasciarlo sempre in macchina"],
				correct: 1,
				motivation: "Bisogna impostare una password, un PIN, una sequenza di sblocco complessa sul proprio smartphone, a maggior ragione se si tratta di quello di servizio.",
				category: "Cybersecurity"
			},
			{
				question: "Quale principio di gestione progetti è importante nella trasformazione digitale?",
				options: ["Non servono vincoli temporali", "Esistono vincoli temporali, economici e qualitativi", "Solo la qualità conta", "Il tempo non è importante"],
				correct: 1,
				motivation: "Non esistono progetti di digitalizzazione senza vincoli temporali, economici e qualitativi. Spesso è necessario scegliere 2 dei 3 parametri.",
				category: "Trasformazione digitale"
			},
			{
				question: "Come vengono identificate le credenziali di accesso ai sistemi di Corte?",
				options: ["Sono anonime", "Identificano l'utente in modo certo anche di fronte alla legge", "Sono condivisibili", "Hanno valore solo interno"],
				correct: 1,
				motivation: "Bisogna ricordare che le proprie credenziali identificano l'utente in modo certo anche di fronte alla legge.",
				category: "Cybersecurity"
			},
			{
				question: "Quali sono le varianti del phishing menzionate nel materiale?",
				options: ["Solo email phishing", "Smishing, vishing, spearfishing, whaling", "Solo SMS phishing", "Solo phishing telefonico"],
				correct: 1,
				motivation: "Il materiale menziona diverse varianti del phishing: smishing (SMS), vishing (voce/telefono), spearfishing (mirato) e whaling (verso dirigenti).",
				category: "Cybersecurity"
			},
			{
				question: "Nel contesto della trasformazione digitale, è preferibile:",
				options: ["Aspettare la soluzione perfetta anche se arriva tardi", "Una soluzione presto e corretta al 90% piuttosto che perfetta ma tardiva", "Non avere vincoli temporali", "Ignorare le scadenze"],
				correct: 1,
				motivation: "È preferibile 'presto e corretto al 90%', che 'corretto al 100%', ma ad esigenza sfumata. La soluzione giusta che giunge troppo tardi è comunque sbagliata.",
				category: "Trasformazione digitale"
			},
			{
				question: "Cosa si intende per 'disponibilità' nella sicurezza IT?",
				options: ["Che i dati sono confidenziali", "Che i sistemi sono accessibili e utilizzabili quando necessario", "Che i dati sono crittografati", "Che i backup sono disponibili"],
				correct: 1,
				motivation: "La disponibilità garantisce che i sistemi, le applicazioni e i dati siano accessibili e utilizzabili dagli utenti autorizzati quando necessario, minimizzando i tempi di inattività.",
				category: "Cybersecurity"
			},
			{
				question: "Quale affermazione è corretta riguardo alle competenze di project management?",
				options: ["Servono solo per grandi progetti", "Sono fondamentali anche per progetti piccoli", "Servono solo lato fornitore", "Non sono necessarie"],
				correct: 1,
				motivation: "Le competenze di project management sono fondamentali, anche per progetti piccoli, e servono anche lato committente.",
				category: "Trasformazione digitale"
			},
			{
				question: "Cosa bisogna fare se DGSIA chiede di sostituire uno smartphone obsoleto?",
				options: ["Ignorare la richiesta", "Aspettare che si rompa", "Sostituirlo quanto prima", "Chiedere un rimborso"],
				correct: 2,
				motivation: "Se DGSIA chiede di sostituire lo smartphone di servizio perché è obsoleto, bisogna farlo quanto prima per motivi di sicurezza.",
				category: "Cybersecurity"
			},
			{
				question: "Quale dei seguenti NON è un principio menzionato per la protezione delle infrastrutture cloud?",
				options: ["Privilegi minimi necessari", "Zero trust", "Difesa in profondità", "Fiducia totale nei fornitori"],
				correct: 3,
				motivation: "I principi menzionati includono privilegi minimi necessari, zero trust, difesa in profondità e modellazione delle minacce, non la fiducia totale nei fornitori.",
				category: "Cybersecurity"
			},
			{
				question: "Quale comportamento è corretto sui social media per un dipendente pubblico?",
				options: ["Pubblicare dettagli del proprio lavoro", "Mantenere la massima riservatezza sui dettagli del lavoro", "Condividere documenti riservati", "Usare l'email di Corte per registrarsi"],
				correct: 1,
				motivation: "Bisogna mantenere la massima riservatezza pubblica sui dettagli del proprio lavoro, rispettando il codice di condotta dei dipendenti pubblici.",
				category: "Cybersecurity"
			},
			{
				question: "Cosa rappresenta un attacco 'brute force'?",
				options: ["Un virus che danneggia i file", "Numerosi tentativi di accesso per indovinare le credenziali", "Un attacco che blocca i servizi", "Un furto di identità"],
				correct: 1,
				motivation: "Negli attacchi a forza bruta, gli attaccanti effettuano numerosissimi tentativi di accesso, provando ad indovinare le credenziali reali dell'utente.",
				category: "Cybersecurity"
			},
			{
				question: "Secondo il materiale, quale affermazione sulla trasformazione digitale è corretta?",
				options: ["È un evento una tantum", "Deve inseguire ogni nuova tecnologia", "È ineluttabile e tutti saranno coinvolti", "Riguarda solo i tecnici IT"],
				correct: 2,
				motivation: "Il materiale afferma esplicitamente che 'La trasformazione digitale è ineluttabile: tutti voi sarete coinvolti!'",
				category: "Trasformazione digitale"
			},
			{
				question: "Quale precauzione bisogna prendere con i dispositivi in auto?",
				options: ["Lasciarli sempre visibili", "Non lasciarli mai incustoditi, nemmeno per pochi minuti", "Nasconderli sotto il sedile", "Lasciare l'auto aperta"],
				correct: 1,
				motivation: "Non bisogna lasciare i dispositivi incustoditi in macchina, nemmeno per pochi minuti. I furti di questo tipo sono frequentissimi (5 solo nell'ultimo anno in Corte).",
				category: "Cybersecurity"
			},
			{
				question: "Quale tipo di attacco phishing è specificamente mirato a dirigenti e figure apicali?",
				options: ["Smishing", "Vishing", "Whaling", "Spamming"],
				correct: 2,
				motivation: "Il 'whaling' è una forma di phishing specificamente mirata a dirigenti e figure apicali delle organizzazioni.",
				category: "Cybersecurity"
			},
			{
				question: "Nella trasformazione digitale, il focus principale NON deve essere:",
				options: ["Sui processi", "Sulla tecnologia", "Sugli utenti", "Sull'efficienza"],
				correct: 1,
				motivation: "Il materiale enfatizza che 'Il focus della trasformazione digitale NON è sulla tecnologia' ma sui processi e sui principi essenziali.",
				category: "Trasformazione digitale"
			},
			{
				question: "Quale affermazione sui controlli di sicurezza della PEC è corretta?",
				options: ["Sono più efficaci di quelli sull'email normale", "Sono meno efficaci di quelli sull'email convenzionale", "Sono identici", "Non esistono controlli sulla PEC"],
				correct: 1,
				motivation: "Il materiale avverte che i controlli antivirus/antispam sulla PEC sono meno efficaci che sull'email convenzionale.",
				category: "Cybersecurity"
			},
			{
				question: "Quale comportamento è raccomandato per i PC condivisi?",
				options: ["Usarli liberamente per accedere ai sistemi di Corte", "Non utilizzarli o usare i Virtual Desktop", "Salvare le password", "Condividere le credenziali"],
				correct: 1,
				motivation: "Non bisogna utilizzare PC condivisi con altri per accedere ai sistemi di Corte. Nel caso non si possa evitare, utilizzare i Virtual Desktop invece di connettersi direttamente.",
				category: "Cybersecurity"
			},

            // A11 - Contrattazione Collettiva
            {
                question: "Quale fu una delle principali ragioni della riforma del pubblico impiego nel 1993?",
                options: ["Ridurre il numero di dipendenti pubblici", "Applicare strumenti del diritto civile al rapporto di lavoro pubblico", "Eliminare i sindacati", "Aumentare la spesa pubblica"],
                correct: 1,
                motivation: "La riforma introdusse la contrattualizzazione, assimilando il rapporto di lavoro pubblico a quello privato, applicando strumenti del diritto civile.",
                category: "Contrattazione Collettiva"
            },
            {
                question: "Cosa si intende per 'contrattualizzazione' del rapporto di lavoro pubblico?",
                options: ["Applicazione esclusiva del diritto amministrativo", "Applicazione del diritto civile e della contrattazione collettiva", "Eliminazione dei contratti", "Solo aumenti automatici di stipendio"],
                correct: 1,
                motivation: "La contrattualizzazione ha portato all'applicazione del diritto civile e della contrattazione collettiva anche nel pubblico impiego.",
                category: "Contrattazione Collettiva"
            },
            {
                question: "Quale fu uno degli effetti dell'Accordo interconfederale del 23 luglio 1993?",
                options: ["Introduzione della scala mobile", "Eliminazione degli automatismi stipendiali", "Abolizione dei sindacati", "Riduzione delle ferie"],
                correct: 1,
                motivation: "L'accordo eliminò la scala mobile e gli automatismi stipendiali, ancorando la crescita delle retribuzioni all'inflazione programmata.",
                category: "Contrattazione Collettiva"
            },
            {
                question: "Qual è la funzione principale dell'ARAN?",
                options: ["Gestire i concorsi pubblici", "Rappresentare le amministrazioni pubbliche nella contrattazione collettiva", "Erogare stipendi", "Sostituire i sindacati"],
                correct: 1,
                motivation: "L'ARAN è l'agenzia che rappresenta le amministrazioni pubbliche nella negoziazione dei contratti collettivi.",
                category: "Contrattazione Collettiva"
            },
            {
                question: "Come si misura la rappresentatività sindacale per partecipare alla contrattazione collettiva nazionale?",
                options: ["Solo tramite il numero di iscritti", "Solo tramite votazioni interne", "Media tra dato associativo e dato elettorale, con soglia minima del 5%", "Decisione del governo"],
                correct: 2,
                motivation: "La rappresentatività si misura con la media tra percentuale di iscritti e voti ottenuti nelle RSU, con soglia minima del 5%.",
                category: "Contrattazione Collettiva"
            },
			{
				question: "Quale accordo interconfederale del 1993 ha segnato l'avvio della contrattualizzazione del pubblico impiego?",
				options: ["Accordo del 15 giugno 1993", "Accordo del 23 luglio 1993", "Accordo del 31 dicembre 1993", "Accordo del 3 settembre 1993"],
				correct: 1,
				motivation: "L'Accordo interconfederale del 23 luglio 1993 ha eliminato gli automatismi stipendiali, introdotto la contrattazione a doppio livello e collegato la retribuzione al merito e alla produttività.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale percentuale minima di rappresentatività sindacale è richiesta per partecipare alla contrattazione?",
				options: ["3%", "7%", "5%", "10%"],
				correct: 2,
				motivation: "La soglia minima di rappresentatività è il 5%, calcolato come media semplice tra dato associativo (deleghe) e dato elettorale (voti RSU).",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quante sono le aree del nuovo sistema di classificazione professionale?",
				options: ["3 aree", "5 aree", "4 aree", "6 aree"],
				correct: 2,
				motivation: "Il nuovo sistema prevede 4 aree: Operatori, Assistenti, Funzionari ed Elevate Professionalità, come stabilito dall'art. 52, c. 1-bis del d.lgs. 165/2001.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è il requisito minimo di accesso dall'esterno per l'Area Funzionari?",
				options: ["Diploma di scuola superiore", "Laurea triennale o magistrale", "Obbligo scolastico", "Master universitario"],
				correct: 1,
				motivation: "Per accedere dall'esterno all'Area Funzionari è richiesta la laurea, triennale o magistrale, come previsto dal CCNL Funzioni Centrali.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Entro quanti giorni dalla stipulazione del CCNL deve essere costituita la delegazione trattante per la contrattazione integrativa?",
				options: ["15 giorni", "45 giorni", "60 giorni", "30 giorni"],
				correct: 3,
				motivation: "L'art. 7, c. 3 del CCNL prevede che l'amministrazione costituisca la delegazione trattante entro 30 giorni dalla stipulazione del contratto collettivo nazionale.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale organo certifica la compatibilità economica dei contratti collettivi nazionali?",
				options: ["Ministero dell'Economia", "ARAN", "Corte dei Conti", "Ragioneria Generale dello Stato"],
				correct: 2,
				motivation: "La Corte dei Conti, a Sezioni Riunite, certifica entro 15 giorni la compatibilità finanziaria ed economica dei CCNL, come previsto dall'art. 47, c. 4 del d.lgs. 165/2001.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è lo stipendio tabellare base annuo per l'Area Elevate Professionalità?",
				options: ["€30.000", "€32.246", "€35.000", "€40.000"],
				correct: 2,
				motivation: "Lo stipendio tabellare base per l'Area EP è di €35.000 annui, a cui si aggiunge l'indennità di posizione (€11.000-€29.000) e la retribuzione di risultato.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale percentuale minima delle risorse disponibili per la performance deve essere destinata alla performance individuale?",
				options: ["20%", "40%", "30%", "50%"],
				correct: 2,
				motivation: "Il CCNL prevede che almeno il 30% delle risorse disponibili destinate alla contrattazione integrativa sia utilizzato per finanziare i trattamenti economici correlati alla performance individuale.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale norma introduce il divieto di distribuzione indifferenziata di premi?",
				options: ["Art. 18 del d.lgs. 150/2009", "Art. 40 del d.lgs. 165/2001", "Art. 52 del d.lgs. 165/2001", "Art. 23 del d.lgs. 75/2017"],
				correct: 0,
				motivation: "L'art. 18 del d.lgs. 150/2009 vieta esplicitamente la distribuzione di incentivi e premi in maniera indifferenziata o sulla base di automatismi, in assenza di verifiche sui sistemi di misurazione e valutazione.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quanti differenziali stipendiali massimi può conseguire un dipendente dell'Area Funzionari durante la carriera?",
				options: ["3", "7", "5", "10"],
				correct: 2,
				motivation: "I Funzionari possono conseguire massimo 5 progressioni economiche (differenziali stipendiali) durante la carriera, ciascuna del valore di €2.250 annui.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale delle seguenti materie è esclusa dalla contrattazione collettiva?",
				options: ["Sanzioni disciplinari", "Organizzazione degli uffici", "Mobilità del personale", "Progressioni economiche"],
				correct: 1,
				motivation: "L'art. 40 del d.lgs. 165/2001 esclude espressamente dalla contrattazione l'organizzazione degli uffici, che rientra nelle prerogative dirigenziali.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Entro quale termine i sindacati possono richiedere l'incontro di confronto dopo aver ricevuto l'informazione?",
				options: ["3 giorni", "5 giorni", "10 giorni", "15 giorni"],
				correct: 1,
				motivation: "L'art. 5, c. 3 del CCNL prevede che i sindacati possano richiedere l'incontro di confronto entro 5 giorni dalla trasmissione delle informazioni da parte dell'amministrazione.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è la durata massima del periodo di confronto sindacale?",
				options: ["15 giorni", "45 giorni", "30 giorni", "60 giorni"],
				correct: 2,
				motivation: "Il periodo durante il quale si svolgono gli incontri di confronto non può essere superiore a 30 giorni, come stabilito dall'art. 5, c. 4 del CCNL.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale percentuale massima può avere il criterio 'esperienza' nella ponderazione delle progressioni economiche?",
				options: ["30%", "50%", "40%", "60%"],
				correct: 2,
				motivation: "Il CCNL stabilisce che nella ponderazione dei criteri per le progressioni economiche, l'esperienza non può avere un peso superiore al 40%, mentre la valutazione deve avere almeno il 40%.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è l'importo annuo del differenziale stipendiale per l'Area Assistenti?",
				options: ["€800", "€2.250", "€1.250", "€1.500"],
				correct: 2,
				motivation: "Ogni progressione economica (differenziale stipendiale) per l'Area Assistenti vale €1.250 annui lordi, e può essere conseguita fino a un massimo di 5 volte.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale percentuale minima di posti deve essere riservata all'accesso dall'esterno nelle progressioni tra aree?",
				options: ["30%", "60%", "50%", "40%"],
				correct: 2,
				motivation: "L'art. 52, c. 1-bis del d.lgs. 165/2001 prevede che almeno il 50% delle posizioni disponibili per le progressioni tra aree sia riservato all'accesso dall'esterno tramite concorso pubblico.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Entro quale termine deve essere trasmesso ad ARAN e CNEL il contratto collettivo integrativo definitivamente sottoscritto?",
				options: ["10 giorni", "15 giorni", "5 giorni", "30 giorni"],
				correct: 2,
				motivation: "L'art. 7, c. 9 del CCNL prevede che il contratto integrativo definitivo sia trasmesso per via telematica ad ARAN e CNEL entro 5 giorni dalla sottoscrizione.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è il range di indennità di posizione per le Elevate Professionalità?",
				options: ["€5.000-€15.000", "€8.000-€20.000", "€11.000-€29.000", "€15.000-€35.000"],
				correct: 2,
				motivation: "L'indennità di posizione per le Elevate Professionalità varia da un minimo di €11.000 a un massimo di €29.000 annui, oltre allo stipendio base di €35.000.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quante volte all'anno deve riunirsi almeno l'Organismo Paritetico per l'Innovazione?",
				options: ["1 volta", "3 volte", "4 volte", "2 volte"],
				correct: 3,
				motivation: "L'art. 6, c. 3 del CCNL stabilisce che l'Organismo Paritetico per l'Innovazione si riunisce almeno 2 volte l'anno, oltre che quando l'amministrazione manifesta intenzioni di progettualità innovativa.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Entro quale data deve essere effettuata la pianificazione delle ferie annuali?",
				options: ["Entro febbraio", "Entro marzo", "Entro aprile", "Entro maggio"],
				correct: 2,
				motivation: "L'art. 35, c. 4 del CCNL 2022-2024 prevede che l'amministrazione pianifichi le ferie dei dipendenti entro il mese di aprile di ciascun anno.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale decreto legislativo ha introdotto la riforma 'Brunetta' sulla performance nel pubblico impiego?",
				options: ["d.lgs. 165/2001", "d.lgs. 150/2009", "d.lgs. 75/2017", "d.lgs. 151/2001"],
				correct: 1,
				motivation: "Il d.lgs. 150/2009, noto come 'Decreto Brunetta', ha introdotto la riforma della misurazione e valutazione della performance nel pubblico impiego, con particolare attenzione ai principi di selettività e merito.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quante ore annuali di permesso retribuito sono previste per visite mediche e terapie?",
				options: ["12 ore", "15 ore", "18 ore", "24 ore"],
				correct: 2,
				motivation: "Il CCNL 2022-2024 prevede 18 ore annuali di permesso retribuito per visite mediche, esami diagnostici e terapie, che diventano 20 ore dal compimento dei 60 anni di età.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è la maggiorazione retributiva per il turno festivo infrasettimanale?",
				options: ["50% della R.B.M.", "30% della R.B.M.", "100% della R.B.M.", "150% della R.B.M."],
				correct: 2,
				motivation: "Il turno festivo infrasettimanale (es. 25 aprile, 1° maggio) prevede una maggiorazione del 100% della Retribuzione Base Mensile, la più alta tra tutte le tipologie di turno.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quanti giorni di congedo parentale retribuito al 100% prevede il CCNL per ciascun figlio?",
				options: ["15 giorni", "20 giorni", "30 giorni", "45 giorni"],
				correct: 2,
				motivation: "Il CCNL prevede 30 giorni di congedo parentale retribuito al 100% per ciascun figlio, in aggiunta e miglioramento rispetto a quanto previsto dalla legge (che prevede il 30% di retribuzione).",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è il termine massimo per la certificazione dell'organo di controllo sul contratto integrativo?",
				options: ["10 giorni", "20 giorni", "15 giorni", "30 giorni"],
				correct: 2,
				motivation: "L'art. 40-bis del d.lgs. 165/2001 prevede che l'organo di controllo certifichi la compatibilità economica del contratto integrativo entro 15 giorni dalla trasmissione, decorsi i quali opera il silenzio-assenso.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Nel lavoro agile, qual è la durata massima della fascia di contattabilità?",
				options: ["6 ore", "5 ore", "Pari all'orario medio giornaliero", "8 ore"],
				correct: 2,
				motivation: "Nel lavoro agile la fascia di contattabilità non può essere superiore all'orario medio giornaliero di lavoro (es. 7h 12min per 36 ore settimanali), come previsto dall'art. 24 del CCNL 2022-2024.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale legge ha stanziato risorse per le progressioni tra aree in prima applicazione?",
				options: ["L. 449/1997", "L. 234/2021", "L. 104/1992", "L. 300/1970"],
				correct: 1,
				motivation: "La Legge di Bilancio 2022 (L. 234/2021), all'art. 1, c. 612, ha stanziato risorse pari allo 0,55% del monte salari 2018 per finanziare le progressioni tra aree in prima applicazione.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è il range di indennità previsto per le posizioni organizzative dei Funzionari?",
				options: ["€500-€2.000", "€1.000-€3.000", "€1.200-€3.500", "€2.000-€5.000"],
				correct: 2,
				motivation: "Le posizioni organizzative e professionali attribuibili ai Funzionari prevedono un'indennità da €1.200 a €3.500 annui, elevabile tramite contrattazione integrativa.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quanti anni di esperienza sono richiesti, in alternativa alla laurea, per le progressioni da Assistenti a Funzionari nel regime transitorio?",
				options: ["5 anni con diploma", "15 anni con diploma", "10 anni con diploma", "8 anni con diploma"],
				correct: 2,
				motivation: "Nel regime transitorio (fino al 30 giugno 2026), è possibile passare da Assistenti a Funzionari con diploma di scuola superiore e almeno 10 anni di esperienza nell'Area degli Assistenti.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Entro quale termine devono essere ripianificate le ferie non fruite nell'anno precedente?",
				options: ["Entro gennaio", "Entro marzo", "Entro febbraio", "Entro aprile"],
				correct: 2,
				motivation: "L'art. 35, c. 4 del CCNL prevede che l'amministrazione ripianifichi entro il mese di febbraio dell'anno successivo le ferie non fruite nell'anno precedente per esigenze personali o di servizio.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale articolo del d.lgs. 165/2001 disciplina le competenze e i limiti della contrattazione collettiva?",
				options: ["Art. 52", "Art. 48", "Art. 40", "Art. 41"],
				correct: 2,
				motivation: "L'art. 40 del d.lgs. 165/2001 definisce le materie di competenza della contrattazione collettiva, quelle contrattabili nei limiti della legge e quelle escluse dalla contrattazione.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quanti Comitati di Settore sono previsti per definire gli indirizzi della contrattazione?",
				options: ["2", "5", "4", "3"],
				correct: 3,
				motivation: "L'art. 41 del d.lgs. 165/2001 prevede 3 Comitati di Settore: Presidenza del Consiglio dei Ministri, Conferenza delle Regioni, e ANCI-UPI-UNIONCAMERE.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è la durata massima delle trattative per il contratto integrativo sulle materie sensibili?",
				options: ["30 giorni + proroga 30 giorni", "60 giorni + proroga 30 giorni", "45 giorni + proroga 45 giorni", "90 giorni senza proroga"],
				correct: 2,
				motivation: "Per le materie sensibili (lettere a, b, c, c1, d, e, f, g, h, j, v, x, aa, ab, ac, ag), l'art. 7, c. 6 del CCNL prevede un termine minimo di 45 giorni, prorogabile di ulteriori 45 giorni.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è l'importo massimo dell'indennità per specifiche responsabilità attribuibile agli Assistenti?",
				options: ["€800", "€1.500", "€1.000", "€1.200"],
				correct: 2,
				motivation: "Gli Assistenti che svolgono compiti comportanti l'assunzione di specifiche responsabilità possono ricevere un'indennità massima di €1.000 annui, come previsto dall'art. 54 del CCNL.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Da quando è possibile effettuare assunzioni e passaggi all'Area Elevate Professionalità?",
				options: ["1° gennaio 2022", "1° dicembre 2022", "1° novembre 2022", "1° gennaio 2023"],
				correct: 1,
				motivation: "Il CCNL 2019-2021 prevede che le assunzioni e i passaggi alla nuova Area delle Elevate Professionalità possano avvenire a partire dal 1° dicembre 2022.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale percentuale minima deve avere il criterio 'valutazione' nella ponderazione delle progressioni economiche?",
				options: ["30%", "50%", "40%", "35%"],
				correct: 2,
				motivation: "Il CCNL stabilisce che nella ponderazione dei criteri per le progressioni economiche, la valutazione deve avere un peso di almeno il 40%, garantendo così la centralità del merito.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quante ore costituiscono convenzionalmente un giorno di congedo parentale per un lavoratore a tempo pieno?",
				options: ["8 ore", "7 ore e 12 minuti", "6 ore", "5 ore"],
				correct: 2,
				motivation: "Il CCNL prevede che 6 ore di congedo parentale siano convenzionalmente equiparate a un giorno di congedo per il personale a tempo pieno (36 ore settimanali su 5 giorni).",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Entro quale termine scadono le validità delle progressioni facilitate nel regime transitorio?",
				options: ["31 dicembre 2025", "30 giugno 2026", "31 dicembre 2026", "30 giugno 2025"],
				correct: 1,
				motivation: "L'art. 18, c. 6 del CCNL stabilisce che il regime transitorio per le progressioni facilitate tra aree (senza titolo di studio pieno ma con esperienza) è valido fino al 30 giugno 2026.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è la maggiorazione retributiva per il turno notturno o festivo?",
				options: ["10% della R.B.M.", "20% della R.B.M.", "30% della R.B.M.", "50% della R.B.M."],
				correct: 2,
				motivation: "Il turno notturno (tra le 22:00 e le 6:00) o festivo prevede una maggiorazione del 30% della Retribuzione Base Mensile, come stabilito dall'art. 53 del CCNL 2022-2024.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale organo negozia i contratti collettivi nazionali per conto delle amministrazioni pubbliche?",
				options: ["Ministero della Funzione Pubblica", "ARAN", "Dipartimento della Funzione Pubblica", "Presidenza del Consiglio"],
				correct: 1,
				motivation: "L'ARAN (Agenzia per la Rappresentanza Negoziale delle Pubbliche Amministrazioni) è l'organo che negozia i CCNL sulla base degli indirizzi definiti dai Comitati di Settore.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quanti sono i differenziali stipendiali massimi conseguibili dagli Operatori?",
				options: ["2", "3", "5", "1"],
				correct: 0,
				motivation: "I dipendenti dell'Area Operatori possono conseguire massimo 2 progressioni economiche durante la carriera, ciascuna del valore di €800 annui lordi.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Qual è il numero minimo di ore fruibili per i permessi per visite mediche?",
				options: ["30 minuti", "2 ore", "1 ora", "45 minuti"],
				correct: 2,
				motivation: "I permessi per visite mediche, esami diagnostici e terapie non possono essere fruiti per meno di 1 ora, come previsto dal CCNL 2022-2024.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Nel lavoro da remoto, con quale frequenza minima deve essere verificata l'idoneità del luogo di lavoro dopo la fase di avvio?",
				options: ["Mensile", "Trimestrale", "Semestrale", "Annuale"],
				correct: 2,
				motivation: "L'art. 25, c. 4 del CCNL prevede che l'amministrazione verifichi l'idoneità del luogo di lavoro da remoto con frequenza almeno semestrale dopo la verifica iniziale.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale elemento è essenziale per l'appartenenza all'Area Elevate Professionalità?",
				options: ["Il possesso di un dottorato", "L'iscrizione a un albo professionale", "L'incarico di responsabilità", "L'anzianità di servizio di 15 anni"],
				correct: 2,
				motivation: "L'incarico di responsabilità è elemento essenziale dell'appartenenza all'Area EP: non possono esistere Elevate Professionalità senza un incarico attivo di durata 1-3 anni.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale articolo del d.lgs. 165/2001 disciplina la predeterminazione delle risorse per i contratti collettivi?",
				options: ["Art. 40", "Art. 41", "Art. 48", "Art. 52"],
				correct: 2,
				motivation: "L'art. 48 del d.lgs. 165/2001 stabilisce le modalità con cui il Ministero dell'Economia quantifica l'onere derivante dalla contrattazione collettiva e lo inserisce nella legge di bilancio.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Entro quale termine le ferie devono essere fruite per esigenze personali o di servizio?",
				options: ["31 dicembre anno di maturazione", "31 marzo anno successivo", "30 giugno anno successivo", "31 dicembre anno successivo"],
				correct: 2,
				motivation: "L'art. 35, c. 2 del CCNL prevede che le ferie non godute nell'anno di maturazione per motivate esigenze personali o indifferibili esigenze di servizio devano essere fruite entro il 30 giugno dell'anno successivo.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quanti giorni di malattia del figlio fino a 3 anni sono retribuiti al 100% all'anno?",
				options: ["15 giorni", "20 giorni", "30 giorni", "45 giorni"],
				correct: 2,
				motivation: "Il CCNL prevede 30 giorni all'anno di assenza per malattia del figlio fino al compimento del terzo anno di vita retribuiti al 100%, in miglioramento rispetto alla normativa di legge.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Con quanti giorni di preavviso minimo deve essere comunicato il richiamo in sede dal lavoro agile o da remoto?",
				options: ["Almeno 2 giorni prima", "Almeno 3 giorni prima", "Almeno 1 giorno prima", "Almeno 5 giorni prima"],
				correct: 2,
				motivation: "L'art. 26, c. 5 del CCNL stabilisce che la comunicazione di richiamo in sede per sopravvenute esigenze di servizio deve pervenire in tempo utile e, comunque, almeno il giorno prima.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale percentuale del monte salari 2018 può essere utilizzata per incrementare il Fondo Risorse Decentrate?",
				options: ["Fino allo 0,15%", "Fino allo 0,30%", "Fino allo 0,22%", "Fino allo 0,50%"],
				correct: 2,
				motivation: "L'art. 1, c. 604 della L. 234/2021 prevede che ciascuna amministrazione possa incrementare il FRD di un importo non superiore allo 0,22% del monte salari 2018 per esigenze organizzative o gestionali.",
				category: "Contrattazione Collettiva"
			},
			{
				question: "Quale decreto legislativo ha introdotto la riforma Madia del pubblico impiego?",
				options: ["d.lgs. 150/2009", "d.lgs. 165/2001", "d.lgs. 75/2017", "d.lgs. 151/2001"],
				correct: 2,
				motivation: "Il d.lgs. 75/2017 (Riforma Madia) ha modificato l'art. 40 del d.lgs. 165/2001 ampliando le materie contrattabili e introducendo maggiore flessibilità nel rapporto di lavoro pubblico.",
				category: "Contrattazione Collettiva"
			},
			
            // A13 - Codice dei Contratti Pubblici
            {
                question: "Qual è la finalità principale del principio di risultato nel nuovo Codice dei contratti pubblici?",
                options: ["Garantire solo la legalità", "Perseguire il miglior rapporto tra qualità e prezzo con tempestività", "Favorire solo la concorrenza", "Ridurre il numero di gare"],
                correct: 1,
                motivation: "Il principio di risultato impone di perseguire il miglior rapporto tra qualità e prezzo, con la massima tempestività, nel rispetto di legalità, trasparenza e concorrenza.",
                category: "Codice dei Contratti Pubblici"
            },
            {
                question: "Cosa si intende per principio di fiducia?",
                options: ["Fidarsi solo degli operatori economici", "Presunzione di correttezza nell'azione della stazione appaltante e degli operatori", "Escludere i controlli", "Fidarsi solo dei dirigenti"],
                correct: 1,
                motivation: "Il principio di fiducia promuove la fiducia reciproca tra amministrazione e operatori economici, presupponendo la correttezza dell'azione di entrambe le parti.",
                category: "Codice dei Contratti Pubblici"
            },
            {
                question: "Quale tra questi NON è un principio generale del nuovo Codice?",
                options: ["Risultato", "Massima partecipazione", "Arbitrio amministrativo", "Buona fede"],
                correct: 2,
                motivation: "L'arbitrio amministrativo è escluso: il Codice si fonda su principi come risultato, massima partecipazione e buona fede.",
                category: "Codice dei Contratti Pubblici"
            },
            {
                question: "A cosa serve la Cabina di Regia presso la Presidenza del Consiglio dei Ministri?",
                options: ["Solo a controllare i bandi", "Coordinare l'attuazione del Codice e rapportarsi con la Commissione europea", "Sostituire l'ANAC", "Gestire i pagamenti"],
                correct: 1,
                motivation: "La Cabina di Regia coordina l'attuazione del Codice, analizza proposte di modifica e rappresenta l'Italia presso la Commissione europea.",
                category: "Codice dei Contratti Pubblici"
            },
            {
                question: "Qual è il ruolo principale dell'ANAC nel nuovo Codice?",
                options: ["Solo sanzionare", "Vigilare, promuovere efficienza e supportare le stazioni appaltanti", "Gestire i pagamenti", "Redigere i bandi"],
                correct: 1,
                motivation: "L'ANAC vigila sui contratti pubblici, promuove efficienza, supporta le stazioni appaltanti e può irrogare sanzioni.",
                category: "Codice dei Contratti Pubblici"
            },
			{
				question: "Qual è la principale fonte normativa del nuovo Codice dei Contratti Pubblici?",
				options: ["D.Lgs. 50/2016", "Legge 78/2022", "D.Lgs. 36/2023", "DPR 207/2010"],
				correct: 2,
				motivation: "Il nuovo Codice dei Contratti Pubblici è contenuto nel D.Lgs. 36 del 31 marzo 2023, che sostituisce il precedente D.Lgs. 50/2016. Il Codice è composto da 229 articoli e 36 allegati ed è stato emanato in attuazione della Legge 78/2022 collegata al PNRR.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Quanti articoli e allegati compongono il nuovo Codice dei Contratti Pubblici?",
				options: ["180 articoli e 25 allegati", "229 articoli e 36 allegati", "250 articoli e 30 allegati", "200 articoli e 40 allegati"],
				correct: 1,
				motivation: "Il D.Lgs. 36/2023 è composto da 229 articoli e 36 allegati, rappresentando una codificazione organica e completa della materia dei contratti pubblici.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Quale principio fondamentale del Codice si contrappone al formalismo burocratico?",
				options: ["Principio di economicità", "Principio del risultato", "Principio di trasparenza", "Principio di rotazione"],
				correct: 1,
				motivation: "Il principio del risultato è uno dei tre principi cardine del nuovo Codice e si contrappone al formalismo, orientando l'azione amministrativa al conseguimento effettivo dell'opera pubblica con la massima tempestività e il migliore rapporto qualità-prezzo.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Quale principio mira a superare la burocrazia difensiva?",
				options: ["Principio di affidamento", "Principio di fiducia", "Principio di solidarietà", "Principio di trasparenza"],
				correct: 1,
				motivation: "Il principio di fiducia mira a superare la burocrazia difensiva, promuovendo la responsabilizzazione dei funzionari pubblici e creando un rapporto di reciproca fiducia tra stazione appaltante e operatori economici.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Il principio di buona fede nel nuovo Codice rileva anche in fase di contenzioso?",
				options: ["No, vale solo in fase amministrativa", "Sì, rileva anche in fase giurisdizionale", "Solo nelle procedure sopra soglia", "Solo per i contratti di concessione"],
				correct: 1,
				motivation: "Il principio di buona fede rappresenta un obbligo reciproco tra stazione appaltante e operatori economici e rileva anche nella fase di contenzioso giurisdizionale, vincolando il comportamento di entrambe le parti.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Dove è istituita la Cabina di Regia prevista dal Codice?",
				options: ["Presso il Ministero dell'Economia", "Presso l'ANAC", "Presso la Presidenza del Consiglio dei Ministri", "Presso il MIT"],
				correct: 2,
				motivation: "La Cabina di Regia è istituita presso la Presidenza del Consiglio dei Ministri ai sensi dell'allegato V.3 ed è la sede istituzionale per il coordinamento nell'attuazione del Codice e per la cooperazione con la Commissione europea.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Quale autorità esercita la vigilanza sui contratti pubblici?",
				options: ["La Corte dei Conti", "Il Ministero delle Infrastrutture", "L'ANAC", "La Cabina di Regia"],
				correct: 2,
				motivation: "L'Autorità Nazionale Anticorruzione (ANAC) esercita la vigilanza e il controllo sui contratti pubblici, anche al fine di prevenire e contrastare illegalità e corruzione, con poteri sanzionatori e di indirizzo.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Qual è l'importo minimo delle sanzioni amministrative pecuniarie che l'ANAC può irrogare?",
				options: ["€ 500", "€ 1.000", "€ 2.000", "€ 5.000"],
				correct: 0,
				motivation: "L'ANAC può irrogare sanzioni amministrative pecuniarie con un minimo di € 500 e un massimo di € 5.000 per le violazioni accertate. Le sanzioni e l'eventuale recidiva sono valutate ai fini della qualificazione delle stazioni appaltanti.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Qual è l'importo massimo delle sanzioni che l'ANAC può irrogare per informazioni non veritiere?",
				options: ["€ 5.000", "€ 10.000", "€ 15.000", "€ 20.000"],
				correct: 1,
				motivation: "L'ANAC può irrogare sanzioni pecuniarie da un minimo di € 500 a un massimo di € 10.000 verso soggetti che forniscono informazioni o documenti non veritieri, fatta salva l'eventuale sanzione penale.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "A partire da quale importo scatta l'obbligo di utilizzo dei mercati elettronici per le amministrazioni statali?",
				options: ["€ 1.000", "€ 3.000", "€ 5.000", "€ 10.000"],
				correct: 2,
				motivation: "L'obbligo di ricorrere al MEPA (Mercato Elettronico della Pubblica Amministrazione) per le amministrazioni statali centrali e periferiche scatta per acquisti di beni e servizi pari o superiori a € 5.000 e sotto la soglia comunitaria, come previsto dalla L. 296/2006 art. 1 comma 450.",
				category: "Affidamenti sottosoglia"
			},
			{
				question: "Per gli acquisti di beni e servizi informatici e di connettività, le PA devono approvvigionarsi esclusivamente tramite:",
				options: ["Qualsiasi mercato elettronico", "MEPA o mercati regionali", "Consip o soggetti aggregatori", "Procedure negoziate"],
				correct: 2,
				motivation: "La L. 208/2015 art. 1 comma 512 prevede l'obbligo per le PA di approvvigionarsi esclusivamente tramite Consip o soggetti aggregatori per beni e servizi informatici e di connettività, garantendo standardizzazione e economicità.",
				category: "Affidamenti sottosoglia"
			},
			{
				question: "Quale allegato del Codice individua i termini massimi per la conclusione delle procedure di affidamento?",
				options: ["Allegato I.1", "Allegato I.3", "Allegato I.12", "Allegato V.3"],
				correct: 1,
				motivation: "L'allegato I.3 del Codice individua i termini massimi per la conclusione delle procedure di affidamento. Il superamento di tali termini costituisce silenzio inadempimento e rileva ai fini della qualificazione delle stazioni appaltanti.",
				category: "Procedure di gara"
			},
			{
				question: "Qual è il termine massimo per la conclusione di una procedura aperta con OEPV?",
				options: ["5 mesi", "7 mesi", "9 mesi", "10 mesi"],
				correct: 2,
				motivation: "Il termine massimo per la conclusione di una procedura aperta con criterio dell'offerta economicamente più vantaggiosa (OEPV) è di 9 mesi, come previsto dall'allegato I.3. Per il criterio del minor prezzo il termine è ridotto a 5 mesi.",
				category: "Procedure di gara"
			},
			{
				question: "Per quanto tempo è possibile prorogare una procedura in caso di circostanze eccezionali?",
				options: ["1 mese", "2 mesi", "3 mesi", "6 mesi"],
				correct: 2,
				motivation: "In caso di circostanze eccezionali è possibile prorogare la procedura per un massimo di 3 mesi con atto motivato del RUP. Sono ammessi ulteriori 3 mesi per situazioni imprevedibili o complesse, per un massimo complessivo di 6 mesi (più 1 mese automatico per verifica anomalia).",
				category: "Procedure di gara"
			},
			{
				question: "Il termine massimo di 1 mese automatico di proroga è previsto per:",
				options: ["Verifica dei requisiti", "Verifica anomalia dell'offerta", "Contenzioso amministrativo", "Approvazione del progetto"],
				correct: 1,
				motivation: "La proroga automatica di massimo 1 mese è specificamente prevista per la verifica dell'anomalia dell'offerta, consentendo alla stazione appaltante il tempo necessario per le verifiche sull'anomalia senza impattare sulla qualificazione.",
				category: "Procedure di gara"
			},
			{
				question: "I termini procedurali possono essere sospesi in pendenza di contenzioso?",
				options: ["Sì, sempre", "No, mai, salvo provvedimento cautelare del giudice", "Sì, solo per procedure sopra soglia", "Sì, su decisione del RUP"],
				correct: 1,
				motivation: "I termini procedurali non possono essere sospesi in pendenza di contenzioso, salvo provvedimento cautelare del giudice. Questa è una novità significativa che impedisce l'uso strumentale del contenzioso per bloccare le procedure.",
				category: "Procedure di gara"
			},
			{
				question: "Per quanti giorni rimane vincolante l'offerta presentata in gara se non diversamente indicato?",
				options: ["90 giorni", "120 giorni", "180 giorni", "240 giorni"],
				correct: 2,
				motivation: "L'offerta rimane vincolante per il periodo indicato nel bando o, se non specificato, per 180 giorni. Questo termine garantisce alla stazione appaltante il tempo necessario per completare la procedura mantenendo valide le offerte.",
				category: "Procedure di gara"
			},
			{
				question: "L'aggiudicazione equivale ad accettazione dell'offerta?",
				options: ["Sì, sempre", "No, non equivale ad accettazione", "Solo nelle procedure sopra soglia", "Solo con il criterio OEPV"],
				correct: 1,
				motivation: "L'aggiudicazione non equivale ad accettazione dell'offerta. L'aggiudicazione è immediatamente efficace dopo la verifica dei requisiti, ma il contratto viene stipulato successivamente. Questa distinzione è fondamentale per la gestione del rapporto contrattuale.",
				category: "Aggiudicazione"
			},
			{
				question: "Quando è possibile l'esecuzione anticipata del contratto?",
				options: ["Mai prima della stipula", "Solo dopo 30 giorni dall'aggiudicazione", "Per motivate ragioni dopo verifica requisiti", "Solo con autorizzazione ANAC"],
				correct: 2,
				motivation: "L'esecuzione anticipata del contratto è possibile per motivate ragioni dopo la verifica dei requisiti, anche prima della stipula formale. In caso di mancata stipulazione, è previsto il rimborso delle spese sostenute dall'aggiudicatario.",
				category: "Aggiudicazione"
			},
			{
				question: "Quando l'esecuzione prima della stipula è obbligatoria?",
				options: ["Solo su richiesta dell'aggiudicatario", "Mai, è sempre facoltativa", "In caso di urgenza per pericolo, salute pubblica o perdita fondi UE", "Solo per importi sopra soglia"],
				correct: 2,
				motivation: "L'esecuzione è sempre iniziata prima della stipula se sussistono ragioni d'urgenza quali eventi imprevedibili che determinano pericolo per persone o cose, ragioni di salute pubblica o perdita di finanziamenti dell'Unione europea, come previsto dall'art. 140.",
				category: "Esecuzione"
			},
			{
				question: "Quale strumento digitale raccoglie i documenti dell'operatore economico secondo il principio 'once only'?",
				options: ["Il fascicolo di gara", "La Banca Dati Nazionale", "Il FVOE", "Il casellario informatico"],
				correct: 2,
				motivation: "Il FVOE (Fascicolo Virtuale dell'Operatore Economico) è l'archivio digitale che raccoglie i documenti dell'operatore economico applicando il principio 'once only', evitando duplicazioni documentali e semplificando la partecipazione alle gare.",
				category: "Digitalizzazione"
			},
			{
				question: "Quale articolo del Codice disciplina il ciclo di vita del contratto?",
				options: ["Art. 10", "Art. 17", "Art. 23", "Art. 50"],
				correct: 1,
				motivation: "L'art. 17 del Codice disciplina il ciclo di vita del contratto, che comprende le fasi di programmazione, progettazione, affidamento, pubblicazione ed esecuzione, tutte gestite digitalmente.",
				category: "Digitalizzazione"
			},
			{
				question: "Presso quale ente è istituito il casellario informatico dei contratti pubblici?",
				options: ["Presso l'ANAC", "Presso la Banca dati nazionale dei contratti pubblici", "Presso il MIT", "Presso la Presidenza del Consiglio"],
				correct: 1,
				motivation: "Il casellario informatico dei contratti pubblici di lavori, servizi e forniture è istituito presso la Banca dati nazionale dei contratti pubblici e contiene notizie, informazioni e dati relativi agli operatori economici, incluse le iscrizioni e i provvedimenti interdittivi.",
				category: "Digitalizzazione"
			},
			{
				question: "Il versamento del contributo ANAC è:",
				options: ["Facoltativo per gli operatori privati", "Obbligatorio solo per le stazioni appaltanti", "Condizione di ammissibilità dell'offerta", "Richiesto solo sopra soglia comunitaria"],
				correct: 2,
				motivation: "Il versamento del contributo ANAC da parte degli operatori economici è condizione di ammissibilità dell'offerta. Il totale dei contributi versati non deve superare lo 0,25% del valore complessivo del mercato di competenza.",
				category: "Governance"
			},
			{
				question: "Quale organo esercita le funzioni relative alla qualificazione delle stazioni appaltanti?",
				options: ["La Cabina di Regia", "Il MIT", "L'ANAC", "La Corte dei Conti"],
				correct: 2,
				motivation: "L'ANAC esercita le funzioni relative alla qualificazione delle stazioni appaltanti come previsto dall'art. 63 del Codice, gestendo il sistema di qualificazione delle stazioni appaltanti e delle centrali di committenza.",
				category: "Governance"
			},
			{
				question: "Il Codice si applica ai contratti attivi?",
				options: ["Sì, sempre", "No, sono esclusi", "Solo sopra soglia comunitaria", "Solo se di importo superiore a € 100.000"],
				correct: 1,
				motivation: "Le disposizioni del Codice non si applicano ai contratti esclusi, ai contratti attivi e ai contratti a titolo gratuito, anche qualora essi offrano opportunità di guadagno economico indiretto.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Il Codice si applica alle opere di urbanizzazione a scomputo?",
				options: ["No, sono sempre escluse", "Sì, secondo le modalità dell'allegato I.12", "Solo per importi superiori a € 500.000", "Solo se realizzate da imprese qualificate"],
				correct: 1,
				motivation: "Il Codice si applica anche all'aggiudicazione dei lavori pubblici da realizzarsi da parte di soggetti privati per opere di urbanizzazione a scomputo totale o parziale del contributo di costruzione. L'allegato I.12 individua le specifiche modalità di affidamento.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Per le procedure di affidamento svolte all'estero, chi emana il regolamento?",
				options: ["Il Ministro dell'Economia", "Il Ministro degli Affari Esteri sentita l'ANAC", "L'ANAC autonomamente", "La Cabina di Regia"],
				correct: 1,
				motivation: "Con regolamento del Ministro degli Affari Esteri e della Cooperazione Internazionale, sentita l'ANAC, sono disciplinate le procedure di scelta del contraente da svolgersi all'estero, tenuto conto dei principi fondamentali del Codice e delle procedure UE.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Il Codice si applica alle operazioni straordinarie societarie che non comportino nuovi affidamenti?",
				options: ["Sì, sempre", "No, restano ferme le norme del D.Lgs 175/2016", "Solo per società a totale partecipazione pubblica", "Solo sopra soglia comunitaria"],
				correct: 1,
				motivation: "Le disposizioni del Codice non si applicano ai contratti di società e alle operazioni straordinarie che non comportino nuovi affidamenti di lavori, servizi e forniture. Restano ferme le disposizioni del D.Lgs 175/2016 in materia di scelta del socio privato.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "L'ANAC può svolgere attività di vigilanza collaborativa?",
				options: ["No, solo vigilanza ispettiva", "Sì, tramite protocolli di intesa con le stazioni appaltanti", "Solo per affidamenti sopra € 5 milioni", "Solo su richiesta della Cabina di Regia"],
				correct: 1,
				motivation: "Per affidamenti di particolare interesse, l'ANAC svolge attività di vigilanza collaborativa tramite protocolli di intesa con le stazioni appaltanti. Il mancato rispetto delle indicazioni ANAC, se non motivato, è valutato ai fini della qualificazione della stazione appaltante.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "L'ANAC elabora costi standard e prezzi di riferimento avvalendosi del supporto di quale ente?",
				options: ["Del Ministero dell'Economia", "Dell'ISTAT e degli enti del Sistema statistico nazionale", "Della Banca d'Italia", "Del CNEL"],
				correct: 1,
				motivation: "L'ANAC elabora costi standard dei lavori e prezzi di riferimento di beni e servizi avvalendosi del supporto dell'ISTAT e degli altri enti del Sistema statistico nazionale, per favorire l'economicità e la trasparenza degli affidamenti.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Quale strumento ANAC promuove l'efficienza delle stazioni appaltanti?",
				options: ["Solo le sanzioni pecuniarie", "Bandi-tipo, capitolati-tipo e contratti-tipo", "Esclusivamente ispezioni", "Solo la formazione obbligatoria"],
				correct: 1,
				motivation: "L'ANAC emana bandi-tipo, capitolati-tipo, contratti-tipo e altri atti amministrativi generali per promuovere l'efficienza e la qualità dell'attività delle stazioni appaltanti, facilitando lo scambio di informazioni e l'omogeneità dei procedimenti.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Il principio del risultato costituisce attuazione di quale altro principio costituzionale?",
				options: ["Principio di legalità", "Principio del buon andamento", "Principio di imparzialità", "Principio di sussidiarietà"],
				correct: 1,
				motivation: "Il principio del risultato costituisce attuazione del principio del buon andamento e dei correlati principi di efficienza, efficacia ed economicità, ed è perseguito nell'interesse della comunità e per il raggiungimento degli obiettivi dell'Unione europea.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Secondo il Codice, la concorrenza è funzionale a:",
				options: ["Aumentare il numero di partecipanti", "Conseguire il miglior risultato possibile", "Garantire la rotazione degli operatori", "Ridurre i costi amministrativi"],
				correct: 1,
				motivation: "Il Codice stabilisce che la concorrenza è funzionale a conseguire il miglior risultato possibile, superando una visione formale della concorrenza per orientarla al raggiungimento dell'obiettivo sostanziale dell'affidamento.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "La trasparenza secondo il nuovo Codice è funzionale a:",
				options: ["Aumentare i controlli", "Massima semplicità e celerità nella corretta applicazione delle regole", "Pubblicare tutti gli atti amministrativi", "Garantire l'accesso agli atti"],
				correct: 1,
				motivation: "La trasparenza è funzionale alla massima semplicità e celerità nella corretta applicazione delle regole, rappresentando uno strumento per raggiungere il risultato e non un fine a sé stante.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "Qual è il termine massimo per una procedura di dialogo competitivo?",
				options: ["5 mesi", "7 mesi", "9 mesi", "10 mesi"],
				correct: 1,
				motivation: "Il termine massimo per la conclusione di una procedura di dialogo competitivo è di 7 mesi, come previsto dall'allegato I.3 del Codice.",
				category: "Procedure di gara"
			},
			{
				question: "Qual è il termine massimo per una procedura di partenariato per l'innovazione?",
				options: ["7 mesi", "9 mesi", "10 mesi", "12 mesi"],
				correct: 1,
				motivation: "Il termine massimo per la conclusione di una procedura di partenariato per l'innovazione è di 9 mesi, trattandosi di una procedura complessa che richiede fasi di sviluppo e test di soluzioni innovative.",
				category: "Procedure di gara"
			},
			{
				question: "Qual è il termine massimo per una procedura ristretta con criterio del minor prezzo?",
				options: ["4 mesi", "5 mesi", "6 mesi", "7 mesi"],
				correct: 2,
				motivation: "Il termine massimo per una procedura ristretta con criterio del minor prezzo è di 6 mesi, inferiore rispetto ai 10 mesi previsti per la stessa procedura con OEPV.",
				category: "Procedure di gara"
			},
			{
				question: "Il termine massimo per una procedura negoziata senza bando con OEPV è:",
				options: ["3 mesi", "4 mesi", "5 mesi", "7 mesi"],
				correct: 1,
				motivation: "Il termine massimo per una procedura negoziata senza bando con OEPV è di 4 mesi, ridotto a 3 mesi se si applica il criterio del minor prezzo.",
				category: "Procedure di gara"
			},
			{
				question: "Nei sistemi dinamici di acquisizione, il termine minimo per la ricezione delle domande di partecipazione è:",
				options: ["15 giorni", "20 giorni", "30 giorni", "45 giorni"],
				correct: 2,
				motivation: "Nei sistemi dinamici di acquisizione il termine minimo per la ricezione delle domande di partecipazione è di 30 giorni. Una volta inviato l'invito per il primo appalto specifico, non è previsto alcun ulteriore termine per le nuove domande.",
				category: "Procedure di gara"
			},
			{
				question: "Le domande di partecipazione a un sistema dinamico devono essere valutate entro:",
				options: ["5 giorni lavorativi", "10 giorni lavorativi, prorogabili a 15", "15 giorni lavorativi, prorogabili a 20", "20 giorni lavorativi"],
				correct: 1,
				motivation: "Le domande di partecipazione a un sistema dinamico di acquisizione devono essere valutate entro 10 giorni lavorativi dalla ricezione, termine prorogabile fino a 15 giorni lavorativi.",
				category: "Procedure di gara"
			},
			{
				question: "Nei sistemi dinamici di acquisizione, il termine minimo per la ricezione delle offerte è:",
				options: ["5 giorni", "10 giorni", "15 giorni", "20 giorni"],
				correct: 1,
				motivation: "Nei sistemi dinamici di acquisizione il termine minimo per la ricezione delle offerte è di 10 giorni, garantendo tempi rapidi per procedure semplificate di acquisti di uso corrente.",
				category: "Procedure di gara"
			},
			{
				question: "I sistemi dinamici di acquisizione osservano le norme di quale procedura?",
				options: ["Procedura aperta", "Procedura ristretta", "Procedura negoziata", "Dialogo competitivo"],
				correct: 1,
				motivation: "I sistemi dinamici di acquisizione osservano le norme della procedura ristretta, con la particolarità che tutti i candidati idonei sono ammessi senza limitazione di numero.",
				category: "Procedure di gara"
			},
			{
				question: "Le amministrazioni statali centrali e periferiche, per acquisti di beni e servizi ICT, devono utilizzare:",
				options: ["Qualsiasi mercato elettronico", "Esclusivamente Consip o soggetti aggregatori", "MEPA o mercati regionali", "Solo procedure negoziate"],
				correct: 1,
				motivation: "La L. 208/2015 art. 1 comma 512 stabilisce che le amministrazioni pubbliche devono approvvigionarsi esclusivamente tramite Consip o soggetti aggregatori per beni e servizi informatici e di connettività.",
				category: "Affidamenti sottosoglia"
			},
			{
				question: "Le centrali di committenza possono istituire e gestire:",
				options: ["Solo accordi quadro", "Solo mercati elettronici", "Sistemi dinamici di acquisizione e mercati elettronici", "Solo procedure aperte"],
				correct: 2,
				motivation: "Le centrali di committenza istituiscono e gestiscono sia sistemi dinamici di acquisizione che mercati elettronici di negoziazione, svolgendo un ruolo di aggregazione della domanda pubblica.",
				category: "Centrali di committenza"
			},
			{
				question: "Il superamento dei termini procedurali costituisce:",
				options: ["Una semplice irregolarità", "Silenzio inadempimento valutato per la qualificazione", "Motivo di annullamento automatico", "Un fatto irrilevante"],
				correct: 1,
				motivation: "Il superamento dei termini previsti dall'allegato I.3 costituisce silenzio inadempimento e rileva ai fini della qualificazione delle stazioni appaltanti, rappresentando un elemento negativo nella valutazione della loro capacità operativa.",
				category: "Qualificazione stazioni appaltanti"
			},
			{
				question: "Cosa rileva negativamente ai fini della qualificazione delle stazioni appaltanti?",
				options: ["Solo le sanzioni ANAC", "Sanzioni ANAC, recidiva, mancato rispetto termini e indicazioni ANAC", "Solo il mancato rispetto dei termini", "Solo le ispezioni negative"],
				correct: 1,
				motivation: "Ai fini della qualificazione delle stazioni appaltanti rilevano negativamente: le sanzioni ANAC, l'eventuale recidiva, il mancato rispetto dei termini procedurali e il mancato rispetto delle indicazioni ANAC in vigilanza collaborativa se non motivato.",
				category: "Qualificazione stazioni appaltanti"
			},
			{
				question: "L'ANAC può disporre ispezioni avvalendosi della collaborazione di:",
				options: ["Solo della Polizia di Stato", "Solo della Corte dei Conti", "Altri organi dello Stato e della Guardia di Finanza", "Solo dei consulenti esterni"],
				correct: 2,
				motivation: "L'ANAC può disporre ispezioni, anche su richiesta motivata, avvalendosi della collaborazione di altri organi dello Stato e della Guardia di Finanza, garantendo efficacia all'azione di vigilanza.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "L'inadempimento dell'obbligo di trasmissione dati all'ANAC è:",
				options: ["Non sanzionato", "Sanzionato con sanzioni amministrative", "Solo oggetto di segnalazione", "Rilevante solo sopra soglia"],
				correct: 1,
				motivation: "L'inadempimento dell'obbligo di trasmissione dei dati necessari all'ANAC da parte della stazione appaltante è sanzionato e rileva ai fini della qualificazione.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "L'ANAC disciplina con propri atti:",
				options: ["Solo le sanzioni pecuniarie", "Solo i procedimenti di qualificazione", "I procedimenti sanzionatori", "Solo la vigilanza collaborativa"],
				correct: 2,
				motivation: "L'ANAC disciplina i procedimenti sanzionatori con propri atti, garantendo certezza e trasparenza nell'esercizio del potere sanzionatorio.",
                category: "Codice dei Contratti Pubblici"
			},
			{
				question: "L'allegato N del Codice è:",
				options: ["Immediatamente applicabile", "Abrogato dalla data di entrata in vigore del corrispondente regolamento MIT", "Applicabile solo alle procedure sopra soglia", "Facoltativo"],
				correct: 1,
				motivation: "In sede di prima applicazione del Codice, l'allegato N è abrogato a decorrere dalla data di entrata in vigore di un corrispondente regolamento MIT che lo sostituisce integralmente anche in qualità di allegato al Codice.",
                category: "Codice dei Contratti Pubblici"
			},	
			// A13 - Digitalizzazione del ciclo di vita dei contratti pubblici
			{
				question: "Quale decreto legislativo disciplina il nuovo Codice degli Appalti con focus sulla digitalizzazione?",
				options: ["D.Lgs. n. 50/2016", "D.Lgs. n. 36/2023", "D.Lgs. n. 33/2013", "D.Lgs. n. 159/2011"],
				correct: 1,
				motivation: "Il nuovo Codice degli Appalti è disciplinato dal D.Lgs. n. 36/2023, che prevede una completa digitalizzazione del ciclo di vita dei contratti pubblici.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Quale delle seguenti NON è una fase del ciclo di vita digitale dei contratti pubblici secondo l'art. 21?",
				options: ["Programmazione", "Liquidazione", "Progettazione", "Esecuzione"],
				correct: 1,
				motivation: "Le fasi del ciclo di vita digitale sono: programmazione, progettazione, pubblicazione, affidamento ed esecuzione. La liquidazione è un'attività che avviene nella fase di esecuzione.",
				category: "Ciclo di vita del contratto"
			},
			{
				question: "Quale ente gestisce il registro delle piattaforme certificate per gli appalti digitali?",
				options: ["AGID", "MIT", "ANAC", "Corte dei Conti"],
				correct: 2,
				motivation: "L'ANAC (Autorità Nazionale Anticorruzione) gestisce il registro delle piattaforme certificate, mentre l'AGID rilascia la certificazione delle piattaforme.",
				category: "Piattaforme digitali"
			},
			{
				question: "Qual è l'acronimo che identifica il codice univoco di ogni procedura di gara?",
				options: ["CUP", "CIG", "BDNCP", "FVOE"],
				correct: 1,
				motivation: "Il CIG (Codice Identificativo Gara) è il codice univoco che identifica e 'targa' ogni procedura di gara, acquisito attraverso le piattaforme di approvvigionamento.",
				category: "Piattaforme digitali"
			},
			{
				question: "Quale articolo del Codice degli Appalti disciplina il Fascicolo virtuale dell'operatore economico?",
				options: ["Art. 21", "Art. 22", "Art. 24", "Art. 30"],
				correct: 2,
				motivation: "L'art. 24 del D.Lgs. 36/2023 disciplina il Fascicolo virtuale dell'operatore economico (FVOE), che contiene tutte le informazioni, certificazioni e documentazione dell'operatore.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "In quale forma deve essere stipulato il contratto di appalto a pena di nullità?",
				options: ["In forma orale con testimoni", "In forma scritta cartacea", "In forma scritta in modalità elettronica", "In forma verbale registrata"],
				correct: 2,
				motivation: "Il contratto deve essere stipulato, a pena di nullità, in forma scritta in modalità elettronica, confermando il principio della digitalizzazione.",
				category: "Contratto di appalto"
			},
			{
				question: "Quale tipo di contratto prevede un importo fisso e invariabile riferito globalmente all'opera nel suo complesso?",
				options: ["Appalto a misura", "Appalto misto", "Appalto variabile", "Appalto a corpo"],
				correct: 3,
				motivation: "L'appalto a corpo è caratterizzato da un importo fisso e invariabile riferito all'opera complessiva, consegnata 'chiavi in mano' e completamente finita.",
				category: "Tipologie di contratto"
			},
			{
				question: "Nell'appalto a misura, come viene determinato l'importo finale?",
				options: ["Applicando un prezzo forfettario", "Moltiplicando il prezzo unitario per le quantità effettivamente eseguite", "Aggiungendo un margine fisso al costo iniziale", "Stabilendo un tetto massimo invalicabile"],
				correct: 1,
				motivation: "Nell'appalto a misura l'importo finale è variabile e si determina moltiplicando il prezzo per unità di misura per le quantità effettivamente eseguite.",
				category: "Tipologie di contratto"
			},
			{
				question: "Oltre al 5% di quale percentuale viene riconosciuta la revisione prezzi?",
				options: ["100% della variazione", "50% della variazione", "80% della variazione", "90% della variazione"],
				correct: 2,
				motivation: "La revisione prezzi opera quando le variazioni eccedono il 5% dell'importo complessivo e viene riconosciuta per l'80% della variazione stessa.",
				category: "Equilibrio contrattuale"
			},
			{
				question: "Quale principio costituzionale è richiamato nella proroga tecnica dei contratti?",
				options: ["Principio di uguaglianza (art. 3 Cost.)", "Principio di sussidiarietà (art. 118 Cost.)", "Buon andamento della pubblica amministrazione (art. 97 Cost.)", "Diritto alla difesa (art. 24 Cost.)"],
				correct: 2,
				motivation: "La proroga tecnica si fonda sul principio del buon andamento della pubblica amministrazione sancito dall'art. 97 della Costituzione, garantendo la continuità dell'azione amministrativa.",
				category: "Modifiche contrattuali"
			},
			{
				question: "Quale organo rilascia la certificazione delle piattaforme di approvvigionamento digitale?",
				options: ["ANAC", "MIT", "AGID", "Corte dei Conti"],
				correct: 2,
				motivation: "L'AGID (Agenzia per l'Italia Digitale) rilascia la certificazione delle piattaforme, che consente l'integrazione con la Banca dati nazionale dei contratti pubblici.",
				category: "Piattaforme digitali"
			},
			{
				question: "Cosa significa l'acronimo BDNCP?",
				options: ["Banca Dati Nazionale Contratti Privati", "Base Dati Nazionale Concorsi Pubblici", "Banca Dati Nazionale dei Contratti Pubblici", "Bollettino Digitale Nazionale Contratti Pubblicati"],
				correct: 2,
				motivation: "BDNCP significa Banca Dati Nazionale dei Contratti Pubblici, disciplinata dall'art. 23 del D.Lgs. 36/2023.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Chi dispone la sospensione dei lavori in linea generale?",
				options: ["Il RUP", "Il Collegio Consultivo Tecnico", "L'operatore economico", "Il Direttore dei Lavori"],
				correct: 3,
				motivation: "Il Direttore dei Lavori dispone la sospensione in linea generale, redigendo apposito verbale da inoltrare al RUP entro 5 giorni.",
				category: "Sospensione dei lavori"
			},
			{
				question: "Entro quanti giorni il Direttore dei Lavori deve inoltrare il verbale di sospensione al RUP?",
				options: ["3 giorni", "5 giorni", "10 giorni", "15 giorni"],
				correct: 1,
				motivation: "Il Direttore dei Lavori deve inoltrare il verbale di sospensione al RUP entro 5 giorni dalla sua redazione.",
				category: "Sospensione dei lavori"
			},
			{
				question: "Qual è il termine minimo che il Direttore dei Lavori deve assegnare all'appaltatore in caso di ritardo per adeguarsi?",
				options: ["5 giorni", "10 giorni", "15 giorni", "20 giorni"],
				correct: 1,
				motivation: "In caso di ritardo che compromette la buona riuscita dell'appalto, il Direttore dei Lavori assegna un termine minimo di 10 giorni per adeguarsi.",
				category: "Risoluzione del contratto"
			},
			{
				question: "Quale delibera ANAC disciplina le comunicazioni nella fase di esecuzione del contratto?",
				options: ["Delibera n. 150/2023", "Delibera n. 261/2023", "Delibera n. 312/2023", "Delibera n. 400/2023"],
				correct: 1,
				motivation: "La delibera ANAC n. 261/2023 disciplina le comunicazioni che le stazioni appaltanti devono trasmettere tempestivamente alla BDNCP nella fase di esecuzione.",
				category: "Esecuzione del contratto"
			},
			{
				question: "Quale delle seguenti NON può essere modificata dalle piattaforme di approvvigionamento?",
				options: ["La parità di accesso degli operatori", "La presentazione delle offerte", "L'oggetto dell'appalto", "La gestione del fascicolo di gara"],
				correct: 2,
				motivation: "Le piattaforme non possono modificare l'oggetto dell'appalto, né alterare la parità di accesso, impedire la partecipazione o distorcere la concorrenza.",
				category: "Piattaforme digitali"
			},
			{
				question: "Cosa consente l'interoperabilità del DGUE con il fascicolo virtuale dell'operatore economico?",
				options: ["Di eliminare la necessità di documentazione", "Di ridurre i tempi di pagamento", "Di evitare di allegare documentazione già presente nel fascicolo", "Di aumentare il punteggio tecnico"],
				correct: 2,
				motivation: "L'interoperabilità consente agli operatori economici di dichiarare il possesso dei requisiti senza dover allegare documentazione già contenuta nel fascicolo virtuale.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Per quale percentuale di variazione del contratto iniziale è necessaria una nuova procedura invece di una variante?",
				options: ["Oltre il 30%", "Oltre il 40%", "Oltre il 50%", "Oltre il 60%"],
				correct: 2,
				motivation: "Se le modifiche comportano un aumento superiore al 50% del valore del contratto iniziale, è necessario risolvere il contratto e indire una nuova procedura.",
				category: "Risoluzione del contratto"
			},
			{
				question: "Quale strumento viene utilizzato per rappresentare il cronoprogramma dei lavori?",
				options: ["Diagramma di Gantt", "Diagramma di Pareto", "Diagramma di flusso", "Diagramma PERT"],
				correct: 0,
				motivation: "Il diagramma di Gantt è lo strumento utilizzato per rappresentare il cronoprogramma, scandagliando le singole fasi con i tempi necessari per ciascuna.",
				category: "Programmazione dei lavori"
			},
			{
				question: "Quale dei seguenti documenti NON costituisce fonte del diritto per i contratti pubblici?",
				options: ["Codice dei contratti D.Lgs. 36/2023", "Delibere ANAC", "Regolamento condominiale", "Norme tecniche UNI"],
				correct: 2,
				motivation: "Il regolamento condominiale non è rilevante per i contratti pubblici. Le fonti includono il Codice degli appalti, delibere ANAC, norme tecniche e regolamenti pubblici.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Fino a quale percentuale può essere estesa l'anticipazione di pagamento con il nuovo codice?",
				options: ["10%", "20%", "30%", "40%"],
				correct: 2,
				motivation: "Con il nuovo codice degli appalti si può estendere l'anticipazione di pagamento fino a un 30% dell'importo contrattuale.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Cosa si intende con l'espressione 'nativo digitale' riferita ai documenti?",
				options: ["Documenti scannerizzati in alta qualità", "Documenti creati direttamente in formato digitale", "Documenti cartacei convertiti", "Documenti firmati digitalmente"],
				correct: 1,
				motivation: "Per 'nativo digitale' si intende un documento redatto e creato direttamente in formato digitale, senza passaggio cartaceo intermedio.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Quale delle seguenti certificazioni NON è menzionata come esempio nel fascicolo dell'operatore economico?",
				options: ["ISO 9001 (Qualità)", "ISO 14001 (Ambiente)", "ISO 27001 (Sicurezza informatica)", "ISO 45001 (Salute e sicurezza)"],
				correct: 2,
				motivation: "Vengono menzionate ISO 9001 (qualità), ISO 14001 (ambiente) e ISO 8000 (rapporti con dipendenti e pari opportunità), ma non ISO 27001.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Cosa significa l'acronimo SAL nel contesto degli appalti?",
				options: ["Servizio Amministrativo Lavori", "Sistema di Analisi Logistica", "Stato di Avanzamento Lavori", "Stima Analitica dei Lavori"],
				correct: 2,
				motivation: "SAL significa Stato di Avanzamento Lavori, uno strumento fondamentale per verificare l'esecuzione del contratto e procedere ai pagamenti progressivi.",
				category: "Esecuzione del contratto"
			},
			{
				question: "Quale ruolo ha la funzione di vigilanza sull'esecuzione del contratto?",
				options: ["Il Direttore Generale", "Il Responsabile Unico del Procedimento (RUP)", "Il Segretario Comunale", "Il Collegio Consultivo Tecnico"],
				correct: 1,
				motivation: "Il RUP (Responsabile Unico del Procedimento) ha la responsabilità della vigilanza sull'esecuzione del contratto, ricevendo i verbali e disponendo le azioni necessarie.",
				category: "Esecuzione del contratto"
			},
			{
				question: "In caso di risoluzione del contratto, quale delle seguenti NON viene trattenuta dalla stazione appaltante?",
				options: ["Oneri aggiuntivi per scioglimento del contratto", "Maggiore spesa per nuovo affidamento", "Penali applicate", "Margine di utile dell'appaltatore"],
				correct: 3,
				motivation: "La stazione appaltante trattiene oneri aggiuntivi, maggiori spese per nuovo affidamento e penali, ma non il margine di utile che è di pertinenza dell'appaltatore per i lavori eseguiti.",
				category: "Risoluzione del contratto"
			},
			{
				question: "Quale organo deve essere consultato per la sospensione dei lavori sopra soglia comunitaria?",
				options: ["Il Prefetto", "Il Collegio Consultivo Tecnico", "L'ANAC", "Il Consiglio di Stato"],
				correct: 1,
				motivation: "Per lavori sopra soglia comunitaria e per gravi ragioni tecniche, deve essere consultato il Collegio Consultivo Tecnico che accerta le cause e indica le modalità per proseguire.",
				category: "Sospensione dei lavori"
			},
			{
				question: "Quale decreto legislativo disciplina la trasparenza richiamata nell'art. 28 del Codice degli Appalti?",
				options: ["D.Lgs. 33/2013", "D.Lgs. 50/2016", "D.Lgs. 159/2011", "D.Lgs. 231/2001"],
				correct: 0,
				motivation: "L'art. 28 del Codice degli Appalti richiama espressamente il D.Lgs. 33/2013 in materia di trasparenza e pubblicità degli atti.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Quale principio NON è menzionato tra i principi fondamentali del nuovo Codice degli Appalti?",
				options: ["Affidamento e buona fede", "Digitalizzazione", "Risultato", "Massimo ribasso"],
				correct: 3,
				motivation: "I principi fondamentali includono affidamento e buona fede, risultato, digitalizzazione e collaborazione. Il massimo ribasso è un criterio di aggiudicazione, non un principio fondamentale.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Cosa si intende per 'split payment' nei pagamenti delle pubbliche amministrazioni?",
				options: ["Pagamento rateizzato in più tranche", "Versamento dell'IVA direttamente all'erario da parte della PA", "Divisione del pagamento tra più fornitori", "Anticipo parziale prima dell'esecuzione"],
				correct: 1,
				motivation: "Lo split payment è il meccanismo per cui l'IVA non viene assoggettata all'operatore economico ma viene versata direttamente all'erario dalla stazione appaltante.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Quale articolo del Codice degli Appalti disciplina la risoluzione del contratto?",
				options: ["Art. 94", "Art. 98", "Art. 121", "Art. 122"],
				correct: 3,
				motivation: "L'art. 122 del D.Lgs. 36/2023 disciplina la risoluzione del contratto, indicando le cause di facoltà e obbligo di risoluzione per la stazione appaltante.",
				category: "Risoluzione del contratto"
			},
			{
				question: "Entro quale termine il Direttore dei Lavori deve concedere per le controdeduzioni in caso di contestazione di addebiti?",
				options: ["7 giorni", "10 giorni", "Non inferiore a 15 giorni", "20 giorni"],
				correct: 2,
				motivation: "Il Direttore dei Lavori deve formulare una contestazione di addebiti assegnando un termine non inferiore a 15 giorni per eventuali controdeduzioni.",
				category: "Risoluzione del contratto"
			},
			{
				question: "Quale delle seguenti NON è una causa di sospensione dei lavori secondo l'art. 121?",
				options: ["Circostanze che impediscono l'esecuzione a regola d'arte", "Mancato pagamento del SAL", "Circostanze speciali non prevedibili", "Ragioni di necessità o pubblico interesse"],
				correct: 1,
				motivation: "Le cause di sospensione includono impedimenti all'esecuzione a regola d'arte, circostanze imprevedibili e ragioni di pubblico interesse, ma non il mancato pagamento dei SAL.",
				category: "Sospensione dei lavori"
			},
			{
				question: "Cosa garantisce il principio di interoperabilità delle piattaforme?",
				options: ["La riduzione dei costi di gestione", "Lo scambio automatico di dati tra sistemi diversi", "L'aumento della concorrenza", "La semplificazione delle procedure"],
				correct: 1,
				motivation: "Il principio di interoperabilità garantisce che i diversi sistemi e piattaforme possano scambiarsi automaticamente dati e informazioni, come tra DGUE e fascicolo virtuale.",
				category: "Piattaforme digitali"
			},
			{
				question: "Quale delle seguenti NON è un'attività della fase di programmazione?",
				options: ["Ricognizione delle esigenze", "Valutazione delle offerte", "Redazione del masterplan", "Individuazione delle iniziative di gara"],
				correct: 1,
				motivation: "La valutazione delle offerte appartiene alla fase di affidamento, mentre la programmazione comprende ricognizione esigenze, masterplan e individuazione iniziative.",
				category: "Ciclo di vita del contratto"
			},
			{
				question: "Quale percentuale minima di variazione dei prezzi è necessaria per attivare la revisione prezzi?",
				options: ["3%", "5%", "8%", "10%"],
				correct: 1,
				motivation: "La revisione prezzi opera quando si verificano variazioni superiori al 5% dell'importo complessivo del contratto.",
				category: "Equilibrio contrattuale"
			},
			{
				question: "Chi redige generalmente il contratto di appalto con modalità elettronica?",
				options: ["Il Direttore dei Lavori", "L'Ufficiale rogante della stazione appaltante", "Il RUP", "L'operatore economico aggiudicatario"],
				correct: 1,
				motivation: "Il contratto viene generalmente redatto dall'Ufficiale rogante della stazione appaltante (es. segretario comunale) in forma pubblica amministrativa.",
				category: "Contratto di appalto"
			},
			{
				question: "Quale decreto legislativo disciplina le misure antimafia richiamate nelle cause di risoluzione obbligatoria?",
				options: ["D.Lgs. 50/2016", "D.Lgs. 159/2011", "D.Lgs. 231/2001", "D.Lgs. 81/2008"],
				correct: 1,
				motivation: "Il D.Lgs. 159/2011 (Codice Antimafia) disciplina le misure di prevenzione e le cause di risoluzione obbligatoria legate a condanne per reati di tipo mafioso.",
				category: "Risoluzione del contratto"
			},
			{
				question: "Cosa prevede la 'proroga tecnica' di un contratto?",
				options: ["L'estensione automatica prevista in fase di stipula", "Il prolungamento per garantire continuità del servizio in attesa di nuovo affidamento", "La possibilità di modifiche tecniche al progetto", "Il differimento dei pagamenti per difficoltà dell'ente"],
				correct: 1,
				motivation: "La proroga tecnica è il prolungamento del contratto scaduto per garantire la continuità del servizio (es. trasporto disabili) in attesa del perfezionamento della nuova gara.",
				category: "Modifiche contrattuali"
			},
			{
				question: "Quale delle seguenti situazioni costituisce causa di esclusione obbligatoria ex art. 94?",
				options: ["Mancanza di certificazione ISO 9001", "Sentenza di condanna passata in giudicato per reati gravi", "Assenza di esperienza pregressa", "Mancato possesso di attestazione SOA"],
				correct: 1,
				motivation: "L'art. 94 prevede cause di esclusione obbligatoria tra cui sentenze definitive per reati specifici gravi, che comportano anche la risoluzione del contratto se sopravvenute.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "In cosa consiste il 'diritto di opzione' di un contratto di appalto?",
				options: ["La possibilità di scegliere tra diversi fornitori", "Il diritto dell'amministrazione di prolungare automaticamente il contratto", "La facoltà di modificare l'oggetto dell'appalto", "Il diritto di recesso anticipato"],
				correct: 1,
				motivation: "Il diritto di opzione è previsto contrattualmente (es. 2+2 anni) e dà la possibilità all'amministrazione di prolungare automaticamente la durata del contratto alle condizioni stabilite.",
				category: "Modifiche contrattuali"
			},
			{
				question: "Quale indice viene utilizzato per calcolare la revisione prezzi nei lavori?",
				options: ["Indice FTSE MIB", "Indice sintetico di costo di costruzione ISTAT", "Indice dei prezzi al consumo generale", "Indice di rivalutazione monetaria"],
				correct: 1,
				motivation: "Per i lavori si utilizzano gli indici sintetici di costo di costruzione elaborati dall'ISTAT, mentre per servizi e forniture si usano indici dei prezzi al consumo o retribuzioni contrattuali.",
				category: "Equilibrio contrattuale"
			},
			{
				question: "Quale delle seguenti non costituisce riserva secondo la normativa sugli appalti?",
				options: ["Variazioni delle modalità costruttive previste dal capitolato", "Interessi moratori per ritardo nei pagamenti", "Modifiche tecniche non previste nel progetto esecutivo", "Maggiori oneri per circostanze impreviste"],
				correct: 1,
				motivation: "Gli interessi moratori non costituiscono riserva, così come le contestazioni sulla validità del contratto. Le riserve riguardano aspetti tecnici ed esecutivi dell'opera.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Quale organo ha la funzione di indirizzo attraverso delibere e pareri nel settore degli appalti?",
				options: ["Il MIT (Ministero Infrastrutture e Trasporti)", "L'ANAC", "L'AGID", "La Corte dei Conti"],
				correct: 1,
				motivation: "L'ANAC svolge una funzione fondamentale di indirizzo attraverso delibere, pareri e determine che vanno a colmare criticità nell'applicazione dei contratti.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Quale tutela offre un contratto ben definito e articolato?",
				options: ["Maggiori possibilità di modifica in corso d'opera", "Riduzione del contenzioso e maggiore celerità esecutiva", "Aumento automatico del compenso", "Esonero dalla responsabilità contrattuale"],
				correct: 1,
				motivation: "Un contratto ben articolato e chiaro riduce le interpretazioni soggettive, diminuisce il contenzioso e velocizza l'esecuzione delle prestazioni.",
				category: "Contratto di appalto"
			},
			{
				question: "In caso di malfunzionamento delle piattaforme digitali, cosa deve fare la stazione appaltante?",
				options: ["Annullare la procedura di gara", "Sospendere il termine e prorogarlo proporzionalmente", "Richiedere offerte cartacee", "Ridurre i requisiti di partecipazione"],
				correct: 1,
				motivation: "In caso di malfunzionamento, la stazione appaltante deve sospendere il termine per la ricezione delle offerte e prorogarlo per una durata proporzionale alla gravità del problema.",
				category: "Piattaforme digitali"
			},
			{
				question: "Quale vantaggio principale offre lo Stato di Avanzamento Lavori (SAL) all'operatore economico?",
				options: ["Riduzione delle penali applicabili", "Possibilità di incassare progressivamente senza attendere la fine dei lavori", "Esonero dalle garanzie fideiussorie", "Diritto automatico alla proroga"],
				correct: 1,
				motivation: "Il SAL consente all'operatore economico di valorizzare economicamente le fasi completate e incassare progressivamente, evitando di dover attendere la conclusione dell'intera opera.",
				category: "Esecuzione del contratto"
			},
			{
				question: "Quale dei seguenti NON è un vantaggio della digitalizzazione secondo la lezione?",
				options: ["Riduzione della marginalità di errore", "Semplificazione delle procedure", "Eliminazione completa del contenzioso", "Maggiore trasparenza"],
				correct: 2,
				motivation: "La digitalizzazione riduce significativamente ma non elimina completamente il contenzioso. I vantaggi includono riduzione errori, semplificazione, trasparenza e controlli più efficaci.",
				category: "Digitalizzazione degli appalti"
			},
			{
				question: "Cosa deve fare l'appaltatore in caso di risoluzione del contratto riguardo al cantiere?",
				options: ["Continuare i lavori fino a nuova comunicazione", "Ripiegare i cantieri e sgombrare le aree", "Trasferire il cantiere al nuovo appaltatore", "Attendere l'intervento giudiziario"],
				correct: 1,
				motivation: "In caso di risoluzione, l'appaltatore deve immediatamente ripiegare i cantieri già allestiti e sgombrare le aree di lavoro. Il mancato rispetto comporta addebito delle spese.",
				category: "Risoluzione del contratto"
			},

            // B01 - Responsabilità Contabile
            {
                question: "Chi è considerato agente contabile secondo la normativa italiana?",
                options: ["Solo il dipendente pubblico con contratto a tempo indeterminato", "Chiunque abbia il maneggio di denaro o beni pubblici, anche senza formale nomina", "Solo il tesoriere dell'ente", "Solo chi ha un rapporto di impiego con la PA"],
                correct: 1,
                motivation: "L'agente contabile è chiunque maneggi denaro o beni pubblici, anche senza formale nomina, purché vi sia la natura pubblica dell'ente e del bene gestito.",
                category: "Responsabilità Contabile"
            },
            {
                question: "Quando insorge la responsabilità contabile?",
                options: ["Quando l'agente contabile non restituisce la stessa quantità di denaro o beni ricevuti in carico", "Solo in caso di dolo", "Solo se c'è un danno erariale accertato dal PM", "Quando il PM avvia un'indagine"],
                correct: 0,
                motivation: "La responsabilità contabile nasce quando l'agente contabile non restituisce quanto ricevuto in carico, indipendentemente dalla presenza di dolo.",
                category: "Responsabilità Contabile"
            },
            {
                question: "Quale tra questi NON è un esempio di agente contabile?",
                options: ["Cassiere", "Economo", "Revisore dei conti", "Consegnatario di beni"],
                correct: 2,
                motivation: "Il revisore dei conti non ha maneggio diretto di denaro o beni pubblici, a differenza degli altri ruoli.",
                category: "Responsabilità Contabile"
            },
            {
                question: "Qual è la differenza principale tra responsabilità amministrativa e responsabilità contabile?",
                options: ["La responsabilità contabile richiede sempre dolo", "La responsabilità amministrativa può riguardare chiunque abbia un rapporto con la PA, la contabile solo gli agenti contabili", "La responsabilità amministrativa riguarda solo i dirigenti", "Non esistono differenze"],
                correct: 1,
                motivation: "La responsabilità amministrativa può coinvolgere chiunque abbia un rapporto con la PA, mentre la contabile solo chi ha maneggio di denaro o beni pubblici.",
                category: "Responsabilità Contabile"
            },
            {
                question: "In caso di ammanco di cassa, chi deve provare la propria estraneità al danno?",
                options: ["Il Pubblico Ministero", "Il dirigente dell'ente", "L'agente contabile", "Il revisore dei conti"],
                correct: 2,
                motivation: "In caso di ammanco, spetta all'agente contabile dimostrare la propria estraneità al danno.",
                category: "Responsabilità Contabile"
            },
			{
				question: "Chi può essere qualificato come agente contabile?",
				options: ["Solo i dipendenti pubblici con qualifica dirigenziale", "Qualsiasi soggetto, anche persona giuridica, che maneggia denaro o beni pubblici", "Esclusivamente le persone fisiche con rapporto di impiego pubblico", "Solo i funzionari nominati con decreto ministeriale"],
				correct: 1,
				motivation: "L'agente contabile è il soggetto che ha il maneggio di denaro, beni o valori di una amministrazione pubblica e può essere sia una persona fisica che giuridica. Il titolo giuridico del rapporto è irrilevante (art. 74 R.D. 2440/1923).",
				category: "Responsabilità Contabile"
			},
			{
				question: "Qual è il termine per la presentazione del conto giudiziale da parte dell'agente contabile?",
				options: ["90 giorni dalla chiusura dell'esercizio", "30 giorni dalla cessazione della gestione", "60 giorni dalla chiusura dell'esercizio o dalla cessazione della gestione", "120 giorni dalla chiusura dell'esercizio"],
				correct: 2,
				motivation: "L'art. 139 del Codice di giustizia contabile stabilisce che gli agenti contabili devono presentare il conto giudiziale all'amministrazione di appartenenza entro 60 giorni dalla chiusura dell'esercizio finanziario o dalla cessazione della gestione.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Quale norma costituzionale rappresenta il fondamento della responsabilità sanzionatoria?",
				options: ["Art. 97 Cost. (principio di buon andamento)", "Art. 28 Cost. (responsabilità dei dipendenti pubblici)", "Art. 25 Cost. (principio di legalità in materia sanzionatoria)", "Art. 81 Cost. (equilibrio di bilancio)"],
				correct: 2,
				motivation: "Il fondamento costituzionale della responsabilità sanzionatoria è rappresentato dall'art. 25 della Costituzione, che sancisce il principio di legalità in materia sanzionatoria: nessuno può essere punito se non in forza di una legge entrata in vigore prima del fatto commesso.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "In caso di ammanco di cassa, su chi grava l'onere della prova?",
				options: ["Sul Pubblico Ministero, che deve dimostrare il danno", "Sull'agente contabile, che deve provare la sua estraneità alla produzione del danno", "Sull'amministrazione di appartenenza", "Sul giudice relatore"],
				correct: 1,
				motivation: "A differenza della responsabilità amministrativa, nella responsabilità contabile accertato l'ammanco di cassa, spetta all'agente contabile provare la sua estraneità alla produzione del danno, dimostrando il caso fortuito o la forza maggiore.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Qual è la principale differenza tra responsabilità amministrativa e responsabilità sanzionatoria?",
				options: ["La responsabilità sanzionatoria richiede sempre un danno patrimoniale", "La responsabilità amministrativa ha scopo deterrente, quella sanzionatoria risarcitorio", "La responsabilità sanzionatoria si concentra sulla violazione normativa, non necessariamente sul danno", "Non ci sono differenze sostanziali tra le due forme"],
				correct: 2,
				motivation: "Nella responsabilità sanzionatoria il danno patrimoniale, anche se presente, non ha rilevanza. Ciò che rileva è la condotta con violazione di una determinata norma. La finalità è preventiva/deterrente, non risarcitoria.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Chi deve effettuare la parificazione del conto giudiziale?",
				options: ["Lo stesso agente contabile che ha redatto il conto", "Il Pubblico Ministero della Corte dei conti", "Un soggetto diverso dall'agente contabile che ha redatto il conto", "Il presidente della sezione giurisdizionale"],
				correct: 2,
				motivation: "La parificazione del conto giudiziale deve essere effettuata da un soggetto diverso dall'agente contabile che ha redatto il conto, per garantire un controllo indipendente. Il conto può essere depositato solo previa parifica (art. 139 c.g.c.).",
				category: "Responsabilità Contabile"
			},
			{
				question: "Entro quale termine l'amministrazione deve depositare il conto presso la Corte dei conti dopo l'approvazione?",
				options: ["15 giorni", "30 giorni", "60 giorni", "90 giorni"],
				correct: 1,
				motivation: "L'art. 139 del Codice di giustizia contabile prevede che entro 30 giorni dall'approvazione, previa parificazione, il conto deve essere depositato presso la sezione giurisdizionale territorialmente competente.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Cosa si intende per responsabilità sanzionatoria 'spuria'?",
				options: ["Una responsabilità che prevede sanzioni pecuniarie tra un minimo e un massimo", "Una responsabilità amministrativa generica senza indicazione dell'entità della sanzione", "Una responsabilità che si applica solo agli agenti contabili", "Una forma di responsabilità penale applicata dalla Corte dei conti"],
				correct: 1,
				motivation: "Si parla di responsabilità sanzionatoria 'spuria' quando il legislatore prevede genericamente la responsabilità amministrativa quale conseguenza di una determinata condotta senza stabilire l'entità della sanzione neppure tra un minimo e un massimo. Non è disciplinata dagli artt. 133 e seguenti del c.g.c.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Quale articolo del Codice di giustizia contabile disciplina l'anagrafe degli agenti contabili?",
				options: ["Art. 133 c.g.c.", "Art. 145 c.g.c.", "Art. 138 c.g.c.", "Art. 52 c.g.c."],
				correct: 2,
				motivation: "L'art. 138 del Codice di giustizia contabile attribuisce alle amministrazioni l'obbligo di comunicare alla Sezione giurisdizionale i dati identificativi relativi ai soggetti nominati agenti contabili e tenuti alla resa di conto giudiziale (c.d. 'anagrafe degli agenti contabili').",
				category: "Responsabilità Contabile"
			},
			{
				question: "Il giudizio per la resa del conto è promosso da:",
				options: ["L'amministrazione interessata con atto di citazione", "Il Pubblico Ministero con ricorso", "L'agente contabile con istanza", "Il giudice monocratico d'ufficio"],
				correct: 1,
				motivation: "Il giudizio per la resa del conto è promosso dal Pubblico Ministero con ricorso al giudice monocratico, d'ufficio o su richiesta della sezione giurisdizionale o su segnalazione dell'amministrazione (artt. 141-144 c.g.c.).",
				category: "Responsabilità Contabile"
			},
			{
				question: "Entro quale termine il giudice monocratico deve decidere nel giudizio per la resa del conto?",
				options: ["60 giorni dal deposito del ricorso", "15 giorni dal deposito del ricorso", "30 giorni dal deposito del ricorso", "90 giorni dal deposito del ricorso"],
				correct: 2,
				motivation: "Il giudice monocratico deve decidere con decreto motivato entro 30 giorni dal deposito del ricorso presentato dal Pubblico Ministero, assegnando all'agente contabile un termine perentorio non inferiore a 30 giorni per la presentazione del conto.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Qual è la sanzione pecuniaria massima per omessa resa del conto?",
				options: ["Fino al totale dello stipendio annuo", "Fino alla metà degli stipendi, agi o indennità (o max 1.000 euro)", "Fino a 5.000 euro", "Fino a 10 volte la retribuzione mensile"],
				correct: 1,
				motivation: "In caso di grave e ingiustificato omesso deposito del conto entro il termine fissato, si applica una sanzione pecuniaria non superiore alla metà degli stipendi, agi o indennità dovuti in relazione al periodo cui il conto si riferisce, o comunque non superiore a 1.000 euro.",
				category: "Responsabilità Contabile"
			},
			{
				question: "La responsabilità sanzionatoria è trasmissibile agli eredi?",
				options: ["Sì, sempre", "Sì, ma solo in caso di arricchimento", "No, mai", "Sì, ma solo per le sanzioni superiori a 10.000 euro"],
				correct: 2,
				motivation: "La responsabilità sanzionatoria non è mai trasmissibile agli eredi, a differenza della responsabilità amministrativa che può essere trasmessa a determinate condizioni previste dalla legge 20/1994.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Chi può accedere all'anagrafe degli agenti contabili?",
				options: ["Solo le sezioni giurisdizionali", "Amministrazioni interessate, sezioni giurisdizionali e procure territorialmente competenti", "Solo il Pubblico Ministero", "Qualunque cittadino in base al principio di trasparenza"],
				correct: 1,
				motivation: "All'anagrafe degli agenti contabili possono accedere le amministrazioni interessate, le sezioni giurisdizionali e le procure territorialmente competenti, come previsto dall'art. 138 c.g.c.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Quale atto introduce il giudizio di responsabilità sanzionatoria?",
				options: ["Atto di citazione del Pubblico Ministero", "Invito a dedurre", "Ricorso del Pubblico Ministero", "Denuncia dell'amministrazione"],
				correct: 2,
				motivation: "Il giudizio è promosso dal P.M. con ricorso al giudice monocratico. Non è previsto l'invito a dedurre né l'atto di citazione, a differenza del giudizio di responsabilità amministrativa (art. 133 c.g.c.).",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Quando si estingue il giudizio sul conto?",
				options: ["Dopo 3 anni dal deposito del conto", "Dopo 10 anni dal deposito del conto", "Dopo 5 anni dal deposito del conto senza relazione o contestazioni", "Dopo 1 anno dalla cessazione dell'agente contabile"],
				correct: 2,
				motivation: "Il giudizio sul conto si estingue decorsi 5 anni dal deposito del conto senza che sia stata depositata la relazione o siano state elevate contestazioni a carico del contabile. L'estinzione opera di diritto (art. 150 c.g.c.).",
				category: "Responsabilità Contabile"
			},
			{
				question: "L'estinzione del giudizio sul conto estingue anche l'azione di responsabilità amministrativa?",
				options: ["Sì, sempre", "No, sono azioni autonome e distinte", "Sì, ma solo se non c'è stato dolo", "Sì, ma solo per importi inferiori a 5.000 euro"],
				correct: 1,
				motivation: "L'estinzione del giudizio sul conto non estingue l'azione di responsabilità amministrativa, come espressamente previsto dall'art. 150, ultimo comma, del c.g.c. Le due forme di responsabilità sono autonome e distinte.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Entro quale termine il P.M. deve esprimere avviso sulla proposta di discarico?",
				options: ["15 giorni", "60 giorni", "30 giorni", "90 giorni"],
				correct: 2,
				motivation: "Il Pubblico Ministero esprime il proprio avviso entro il termine di 30 giorni dalla trasmissione della relazione. Se non esprime avviso contrario entro questo termine, opera il silenzio-assenso.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Nel giudizio sanzionatorio, entro quale termine la parte può costituirsi dopo la notifica del ricorso?",
				options: ["5 giorni", "10 giorni", "15 giorni", "30 giorni"],
				correct: 3,
				motivation: "Entro 30 giorni dalla notificazione del ricorso, la parte interessata può costituirsi in giudizio depositando la propria difesa, la copia del ricorso notificato e i documenti (art. 133 c.g.c.).",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Qual è il termine per il deposito dei documenti nel procedimento sanzionatorio?",
				options: ["10 giorni dalla notificazione", "20 giorni dalla notificazione", "30 giorni dalla notificazione", "60 giorni dalla notificazione"],
				correct: 2,
				motivation: "Il termine per il deposito dei documenti da parte della parte costituita è di 30 giorni dalla notificazione del ricorso, come previsto dall'art. 133 del Codice di giustizia contabile.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Entro quale termine il giudice monocratico decide nel procedimento sanzionatorio?",
				options: ["30 giorni dal deposito del ricorso", "45 giorni dal deposito del ricorso", "60 giorni dal deposito del ricorso", "90 giorni dal deposito del ricorso"],
				correct: 2,
				motivation: "Il giudice monocratico decide con decreto motivato entro 60 giorni dal deposito del ricorso, sentite le parti presenti (art. 133 c.g.c.).",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "In che misura è ridotta la sanzione per pagamento immediato?",
				options: ["10%", "20%", "30%", "50%"],
				correct: 2,
				motivation: "Contestualmente alla determinazione della sanzione, il giudice fissa anche una sanzione in misura ridotta, pari al 30%, per agevolare il pagamento immediato della stessa.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Qual è il termine minimo assegnato per il pagamento della sanzione ridotta?",
				options: ["15 giorni", "20 giorni", "30 giorni", "60 giorni"],
				correct: 2,
				motivation: "Viene assegnato al responsabile un termine non inferiore a 30 giorni per procedere al versamento della somma nella misura ridotta del 30%.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Entro quale termine si può proporre opposizione al decreto del giudice monocratico nel procedimento sanzionatorio?",
				options: ["15 giorni", "20 giorni", "30 giorni", "60 giorni"],
				correct: 2,
				motivation: "Le parti possono proporre opposizione al collegio depositando un ricorso nella segreteria della sezione nel termine di 30 giorni dalla notificazione del decreto (art. 135 c.g.c.).",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Quale effetto ha il deposito del ricorso in opposizione nel procedimento sanzionatorio?",
				options: ["Nessun effetto sull'esecuzione", "Sospende l'esecuzione del decreto", "Annulla automaticamente il decreto", "Riduce la sanzione del 50%"],
				correct: 1,
				motivation: "Il deposito del ricorso in opposizione sospende l'esecuzione del decreto del giudice monocratico, impedendo la riscossione della sanzione fino alla decisione definitiva del collegio.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Entro quale termine il presidente fissa l'udienza dopo il deposito dell'opposizione?",
				options: ["5 giorni", "10 giorni", "15 giorni", "30 giorni"],
				correct: 1,
				motivation: "Il Presidente entro 10 giorni dal deposito del ricorso in opposizione fissa l'udienza di discussione, assegnando alle parti un termine per il deposito delle memorie e dei documenti.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Qual è il termine massimo tra deposito opposizione e udienza nel procedimento sanzionatorio?",
				options: ["20 giorni", "30 giorni", "40 giorni", "60 giorni"],
				correct: 2,
				motivation: "Tra il giorno del deposito del ricorso in opposizione e l'udienza di discussione non devono decorrere più di 40 giorni.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Qual è il termine minimo tra notifica e udienza nel procedimento sanzionatorio?",
				options: ["10 giorni", "15 giorni", "20 giorni", "30 giorni"],
				correct: 2,
				motivation: "Tra la data di notifica del decreto di fissazione dell'udienza e quella dell'udienza di discussione deve intercorrere un termine non minore di 20 giorni.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "La sentenza del collegio in opposizione nel procedimento sanzionatorio è:",
				options: ["Appellabile entro 30 giorni", "Non appellabile e immediatamente esecutiva", "Appellabile solo dal P.M.", "Soggetta a ricorso straordinario"],
				correct: 1,
				motivation: "Il collegio definisce il giudizio con sentenza non appellabile e immediatamente esecutiva, chiudendo definitivamente la vicenda processuale.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Può essere agente contabile un soggetto senza formale nomina?",
				options: ["No, la nomina formale è sempre necessaria", "Sì, come agente contabile 'di fatto'", "Solo se autorizzato dal Prefetto", "Solo in caso di emergenza documentata"],
				correct: 1,
				motivation: "È agente contabile anche chi, in assenza di autorizzazione o provvedimento di nomina, di fatto maneggia denaro pubblico o gestisce beni pubblici (agente contabile 'di fatto').",
				category: "Responsabilità Contabile"
			},
			{
				question: "Quale elemento psicologico è richiesto per la responsabilità sanzionatoria?",
				options: ["Solo il dolo", "Dolo o colpa grave", "Qualsiasi forma di colpa", "Nessun elemento psicologico (responsabilità oggettiva)"],
				correct: 1,
				motivation: "La responsabilità sanzionatoria richiede il dolo o la colpa grave, come la responsabilità amministrativa. Non è sufficiente la mera violazione oggettiva della norma.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Il Pubblico Ministero può agire d'ufficio nella responsabilità sanzionatoria?",
				options: ["No, serve sempre una denuncia", "Sì, può agire anche d'ufficio", "Solo se autorizzato dal presidente della sezione", "Solo per importi superiori a 10.000 euro"],
				correct: 1,
				motivation: "A differenza della responsabilità amministrativa, per la responsabilità sanzionatoria l'inizio dell'attività istruttoria del P.M. non è subordinata ad una notizia specifica e concreta di danno. Il P.M. può agire d'ufficio (art. 133 c.g.c.).",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Quali amministrazioni sono soggette al giudizio sui conti?",
				options: ["Solo le amministrazioni statali", "Solo gli enti locali", "Le amministrazioni individuate nell'elenco ISTAT", "Tutte le società partecipate pubbliche"],
				correct: 2,
				motivation: "Sono soggette al giudizio sui conti le amministrazioni individuate nell'elenco ISTAT previsto dall'art. 1, comma 3, della legge n. 196/2009, non solo amministrazioni statali ma anche Regioni, enti locali, ASL, ecc.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Quale deroga al giudizio sui conti è prevista per consuetudine costituzionale?",
				options: ["I comuni con meno di 5.000 abitanti", "Presidenza della Repubblica, Camera e Senato", "Le università pubbliche", "Le ASL"],
				correct: 1,
				motivation: "Sono previste per consuetudine costituzionale deroghe al giudizio sui conti per Presidenza della Repubblica, Camera e Senato, in ragione della loro autonomia costituzionale.",
				category: "Responsabilità Contabile"
			},
			{
				question: "I fondi riservati dei servizi segreti sono soggetti al giudizio sui conti?",
				options: ["Sì, come tutte le amministrazioni", "No, per espressa previsione normativa", "Solo per importi superiori a 100.000 euro", "Sì, ma con procedura riservata"],
				correct: 1,
				motivation: "È prevista una deroga normativa per i c.d. 'fondi riservati' dei Servizi di informazione e sicurezza, che non sono soggetti all'obbligo di rendicontazione (art. 29 legge 124/2007).",
				category: "Responsabilità Contabile"
			},
			{
				question: "Il magistrato che ha redatto la relazione sul conto può far parte del collegio giudicante?",
				options: ["Sì, sempre", "No, per garantire l'imparzialità", "Solo se designato dal presidente", "Sì, ma solo come relatore"],
				correct: 1,
				motivation: "Una novità importante introdotta dalla riforma del 2019 (D.Lgs. 114/2019) è che il magistrato che ha sottoscritto la relazione sul conto non fa parte del collegio giudicante, per garantire maggiore imparzialità.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Nel determinare la sanzione tra minimo e massimo, di cosa deve tener conto il giudice?",
				options: ["Solo della situazione economica del responsabile", "Solo della gravità della violazione", "Della gravità della violazione e del ravvedimento operoso", "Del danno eventualmente causato"],
				correct: 2,
				motivation: "Il giudice deve tenere conto della gravità della violazione e dell'opera svolta dall'agente per l'eliminazione o l'attenuazione delle conseguenze della violazione (ravvedimento operoso).",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Da quando decorre la prescrizione nella responsabilità sanzionatoria?",
				options: ["Dal momento del danno", "Dalla scoperta della violazione", "Dalla realizzazione della condotta prevista dal legislatore", "Dalla denuncia al P.M."],
				correct: 2,
				motivation: "La prescrizione decorre dalla realizzazione della condotta prevista dal legislatore (e non dal danno), proprio perché la responsabilità sanzionatoria prescinde dall'esistenza di un danno.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Quale è il termine di prescrizione per la responsabilità sanzionatoria secondo la tesi prevalente?",
				options: ["3 anni", "5 anni", "10 anni", "15 anni"],
				correct: 1,
				motivation: "Secondo la tesi prevalente, il termine di prescrizione per la responsabilità sanzionatoria è quinquennale (5 anni), analogamente alla responsabilità amministrativa.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "L'obbligo di denuncia ex art. 52 c.g.c. vale anche per la responsabilità sanzionatoria?",
				options: ["No, vale solo per la responsabilità amministrativa", "Sì, vale anche per la responsabilità sanzionatoria", "Solo se l'importo supera i 10.000 euro", "Solo se c'è anche un danno erariale"],
				correct: 1,
				motivation: "L'obbligo di denuncia previsto dall'art. 52 c.g.c. vale anche per la responsabilità sanzionatoria. Il comma 3 dell'art. 52 prevede espressamente che l'obbligo riguarda anche i fatti dai quali può derivare l'applicazione di sanzioni pecuniarie.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Nella responsabilità sanzionatoria si applica il principio di parzialità della condanna?",
				options: ["Sì, sempre", "No, tutti i responsabili sono sottoposti alla sanzione senza parzialità", "Solo per importi superiori a 5.000 euro", "Solo se ci sono più di tre responsabili"],
				correct: 1,
				motivation: "Tutti i responsabili sono sottoposti alla sanzione senza applicazione dell'art. 1, comma 1-quater, della legge n. 20/1994 che prevede il principio di parzialità (condanna di ciascuno per la parte che vi ha preso).",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Quali sono le fonti più frequenti di segnalazione per la responsabilità sanzionatoria?",
				options: ["Solo le denunce dei cittadini", "Principalmente le Sezioni di controllo della Corte dei conti", "Solo la Guardia di Finanza", "Solo il Procuratore Generale"],
				correct: 1,
				motivation: "Le ipotesi di responsabilità sanzionatoria possono emergere principalmente dall'attività svolta dalle Sezioni di controllo (art. 52 c.g.c.), che nel loro lavoro di controllo rilevano violazioni normative in materia di finanza pubblica.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Cosa deve depositare il conto giudiziale presso la Corte dei conti?",
				options: ["Il presidente della sezione giurisdizionale", "L'agente contabile direttamente", "Il Pubblico Ministero", "Il responsabile del procedimento dell'amministrazione"],
				correct: 3,
				motivation: "Il deposito del conto presso la sezione giurisdizionale territorialmente competente è effettuato dal responsabile del procedimento dell'amministrazione, previa parificazione (art. 139 c.g.c.).",
				category: "Responsabilità Contabile"
			},
			{
				question: "Il dissesto degli enti locali può dar luogo a responsabilità sanzionatoria?",
				options: ["No, mai", "Sì, per amministratori e revisori dei conti", "Solo per il sindaco", "Solo per il segretario comunale"],
				correct: 1,
				motivation: "L'art. 248, commi 5 e 5-bis del TUEL prevede specifiche ipotesi di responsabilità sanzionatoria in caso di dissesto: sanzione interdittiva per gli amministratori (10 anni) e sanzione pecuniaria per i revisori dei conti (da 5 a 20 volte la retribuzione mensile).",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "L'agente contabile deve avere necessariamente un rapporto di pubblico impiego?",
				options: ["Sì, è requisito essenziale", "No, può essere anche un soggetto privato con contratto", "Solo per importi superiori a 50.000 euro", "Solo per la gestione di denaro, non di beni"],
				correct: 1,
				motivation: "L'agente contabile non deve necessariamente avere un rapporto di pubblico impiego. È irrilevante il titolo (rapporto di impiego, servizio, concessione, contratto) in base al quale avviene il maneggio. Esempio tipico è il tesoriere.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Chi può giustificare l'ammanco di cassa l'agente contabile?",
				options: ["Dimostrando la buona fede", "Dimostrando la colpa lieve", "Provando il caso fortuito e la forza maggiore", "Dimostrando di aver seguito le procedure"],
				correct: 2,
				motivation: "L'agente contabile può giustificare la mancata restituzione di quanto dovuto solo provando il caso fortuito e la forza maggiore (ad esempio un furto documentato con denuncia).",
				category: "Responsabilità Contabile"
			},
			{
				question: "In caso di dissesto, quale sanzione pecuniaria rischia il revisore dei conti?",
				options: ["Da 1.000 a 5.000 euro", "Da 2 a 5 volte la retribuzione mensile", "Da 5 a 20 volte la retribuzione mensile lorda", "Da 10 a 50 volte la retribuzione mensile"],
				correct: 2,
				motivation: "L'art. 248, comma 5-bis del TUEL prevede che ai revisori ritenuti responsabili si applichi una sanzione pecuniaria pari ad un minimo di 5, fino ad un massimo di 20 volte la retribuzione mensile lorda dovuta al momento della commissione della violazione.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Può coesistere responsabilità amministrativa e responsabilità sanzionatoria per lo stesso fatto?",
				options: ["No, violerebbe il principio del ne bis in idem", "Sì, hanno natura e finalità diverse", "Solo se gli importi sono superiori a 100.000 euro", "Solo se c'è autorizzazione del procuratore generale"],
				correct: 1,
				motivation: "La stessa fattispecie può dar luogo a entrambe le responsabilità senza violare il ne bis in idem, perché hanno natura diversa: una risarcitoria (ripristino patrimonio), l'altra sanzionatoria (punizione violazione norma). Il legislatore lo chiarisce con la formula 'fermo restando quanto previsto dalla legge 20/1994'.",
				category: "Responsabilità Sanzionatoria"
			},
			{
				question: "Cosa significa che il deposito del conto 'costituisce in giudizio' l'agente contabile?",
				options: ["Che l'agente deve comparire personalmente", "Che inizia il giudizio sul conto", "Che l'agente deve nominare un difensore", "Che si applica una sanzione automatica"],
				correct: 1,
				motivation: "Il deposito del conto costituisce in giudizio l'agente contabile, cioè rappresenta il momento di avvio del giudizio sul conto, analogamente a quanto avviene con l'atto di citazione nel giudizio di responsabilità amministrativa.",
				category: "Responsabilità Contabile"
			},
			{
				question: "Nel giudizio sul conto, il Pubblico Ministero svolge un'autonoma istruttoria?",
				options: ["Sì, come nel giudizio di responsabilità amministrativa", "No, riceve la relazione per esprimere il proprio avviso", "Solo se ci sono contestazioni", "Solo se l'importo supera i 50.000 euro"],
				correct: 1,
				motivation: "Nel giudizio sul conto il Pubblico Ministero non svolge una propria autonoma istruttoria (che è già stata svolta dal giudice relatore) ma riceve la relazione per esprimere, entro 30 giorni, il proprio avviso.",
				category: "Responsabilità Contabile"
			},

            // B02 - Responsabilità Amministrativa
            {
                question: "Qual è la definizione più accreditata di responsabilità amministrativa?",
                options: ["Responsabilità penale dei dipendenti pubblici", "Responsabilità patrimoniale a carattere personale per la tutela delle risorse pubbliche", "Responsabilità civile verso i terzi", "Responsabilità disciplinare interna"],
                correct: 1,
                motivation: "La responsabilità amministrativa è una responsabilità patrimoniale, personale, volta a tutelare le risorse pubbliche e la collettività.",
                category: "Responsabilità Amministrativa"
            },
            {
                question: "Quale tra questi è un presupposto necessario per la responsabilità amministrativa?",
                options: ["Rapporto di impiego o di servizio con l'ente pubblico", "Essere cittadino italiano", "Aver commesso un reato penale", "Essere dirigente"],
                correct: 0,
                motivation: "È necessario il rapporto di impiego o di servizio con l'ente pubblico per configurare la responsabilità amministrativa.",
                category: "Responsabilità Amministrativa"
            },
            {
                question: "Il danno erariale può consistere in:",
                options: ["Solo perdita di denaro", "Qualsiasi depauperamento certo, concreto e attuale del patrimonio pubblico", "Solo danni morali", "Solo danni futuri"],
                correct: 1,
                motivation: "Il danno erariale è ogni depauperamento certo, concreto e attuale del patrimonio pubblico, anche mancata entrata.",
                category: "Responsabilità Amministrativa"
            },
            {
                question: "Quale tra questi soggetti può essere chiamato a rispondere davanti alla Corte dei conti?",
                options: ["Solo dipendenti pubblici", "Anche soggetti privati legati da rapporto di servizio", "Solo amministratori pubblici", "Solo funzionari con incarico dirigenziale"],
                correct: 1,
                motivation: "Anche soggetti privati legati da rapporto di servizio con l'ente pubblico possono essere chiamati a rispondere.",
                category: "Responsabilità Amministrativa"
            },
            {
                question: "Il danno all'immagine della PA può essere risarcito:",
                options: ["Solo se c'è una sentenza penale irrevocabile per reati contro la PA", "Sempre, anche senza danno patrimoniale", "Solo se c'è una spesa per ripristinare l'immagine", "Mai"],
                correct: 0,
                motivation: "Il danno all'immagine è risarcibile solo in presenza di sentenza penale irrevocabile per reati contro la PA.",
                category: "Responsabilità Amministrativa"
            },
			{
				question: "Quale articolo della Costituzione sancisce la responsabilità solidale dei funzionari e dipendenti dello Stato per gli atti compiuti in violazione di diritti?",
				options: ["Art. 97 Cost.", "Art. 103 Cost.", "Art. 28 Cost.", "Art. 54 Cost."],
				correct: 2,
				motivation: "L'art. 28 della Costituzione stabilisce che 'i funzionari e i dipendenti dello Stato e degli enti pubblici sono direttamente responsabili, secondo le leggi penali, civili e amministrative, degli atti compiuti in violazione di diritti'. Questo articolo è fondamentale perché sancisce il principio di immedesimazione organica e la responsabilità solidale tra PA e dipendente.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Qual è la soglia minima di colpevolezza richiesta per la responsabilità amministrativa dopo la riforma del 1996?",
				options: ["Colpa lieve", "Colpa lievissima", "Colpa grave o dolo", "Solo dolo"],
				correct: 2,
				motivation: "La Legge n. 639/1996 ha modificato l'art. 1 della Legge 20/1994, innalzando il requisito soggettivo minimo alla colpa grave. Prima della riforma era sufficiente la colpa lieve, regime considerato troppo severo e causa di 'burocrazia difensiva'.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Secondo l'art. 21 del D.L. 76/2020, cosa richiede la prova del dolo?",
				options: ["La violazione intenzionale dei doveri d'ufficio", "La volontà dell'evento dannoso", "La negligenza intollerabile", "La consapevolezza dell'illiceità"],
				correct: 1,
				motivation: "L'art. 21, comma 1, del D.L. 76/2020 (disposizione permanente) stabilisce che 'la prova del dolo richiede la dimostrazione della volontà dell'evento dannoso', introducendo la nozione penalistica di dolo e superando il concetto di 'dolo contrattuale' precedentemente utilizzato dalla giurisprudenza contabile.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Fino a quando è prevista l'esimente temporanea che limita la responsabilità al solo dolo per le condotte commissive?",
				options: ["30 giugno 2024", "31 dicembre 2024", "31 dicembre 2025", "Indeterminato"],
				correct: 1,
				motivation: "L'art. 21, comma 2, del D.L. 76/2020 ha introdotto una disposizione temporanea che limita la responsabilità al solo dolo per fatti dal 17/07/2020 al 31/12/2024, salvo per omissioni e inerzie. Dal 1° gennaio 2025, salvo proroghe, tornerà applicabile la colpa grave anche per le condotte commissive.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quali sono i DUE elementi costitutivi del rapporto di servizio secondo la giurisprudenza consolidata?",
				options: ["Retribuzione pubblica e potere autoritativo", "Nomina formale e giuramento", "Attività per PA e inserimento funzionale nel procedimento", "Contratto scritto e subordinazione"],
				correct: 2,
				motivation: "Secondo Cass. SS.UU. n. 4060/1993 e n. 24002/2007, il rapporto di servizio sussiste quando coesistono due elementi: 1) lo svolgimento di attività a favore dell'Amministrazione, e 2) l'inserimento funzionale nel modulo procedimentale amministrativo. Non basta fare qualcosa 'per' la PA, bisogna essere inseriti 'dentro' il procedimento pubblico.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Il progettista privato di un'opera pubblica è soggetto alla giurisdizione della Corte dei Conti?",
				options: ["Sì, sempre", "No, secondo Cass. SS.UU. n. 340/2003", "Sì, ma solo se è anche direttore lavori", "Solo per opere sopra soglia comunitaria"],
				correct: 1,
				motivation: "Cass. SS.UU. n. 340/2003 ha stabilito che il progettista privato NON è soggetto alla giurisdizione contabile perché il rapporto è di natura meramente privatistica (contratto d'opera professionale), senza inserimento funzionale nell'organizzazione della PA. Il progetto deve essere fatto proprio dall'Amministrazione mediante approvazione.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale tipologia di danno richiede necessariamente una sentenza penale definitiva come condizione di procedibilità?",
				options: ["Danno da disservizio", "Danno patrimoniale diretto", "Danno all'immagine", "Danno indiretto"],
				correct: 2,
				motivation: "Il danno all'immagine può essere contestato solo in presenza di una sentenza penale irrevocabile di condanna per delitti contro la PA (Capo I, Titolo II, Libro II c.p.), come stabilito dalla Corte Costituzionale con la sentenza n. 355/2010. Questa condizione non è richiesta per le altre tipologie di danno.",
				category: "Danno erariale"
			},
			{
				question: "Secondo la Legge 190/2012, come si presume il danno all'immagine?",
				options: ["Pari all'utilità percepita", "Triplo dell'utilità percepita", "Doppio dell'utilità illecitamente percepita", "Metà dell'utilità percepita"],
				correct: 2,
				motivation: "L'art. 1, comma 62, della Legge n. 190/2012 stabilisce che il danno all'immagine si presume, salvo prova contraria, pari al DOPPIO della somma di denaro o del valore patrimoniale di altra utilità illecitamente percepita dal dipendente. Questa presunzione si applica solo ai fatti successivi all'entrata in vigore della norma.",
				category: "Danno erariale"
			},
			{
				question: "Cosa caratterizza il danno da disservizio rispetto al danno all'immagine?",
				options: ["Richiede sempre sentenza penale", "Non richiede sentenza penale ed è contestabile anche per colpa grave", "È sempre di importo inferiore", "Riguarda solo i dirigenti"],
				correct: 1,
				motivation: "A differenza del danno all'immagine che richiede sentenza penale definitiva, il danno da disservizio NON richiede tale presupposto e può essere contestato anche per condotte non penalmente rilevanti connotate da colpa grave. È una voce di danno più ampia e flessibile, definita dalla Cass. SS.UU. n. 2370/2023 come 'voce di chiusura e sintesi'.",
				category: "Danno erariale"
			},
			{
				question: "Quale principio regola il nesso causale nella responsabilità amministrativa secondo Cass. SS.UU. n. 581/2008?",
				options: ["Certezza assoluta", "Preponderanza dell'evidenza causale", "Oltre ogni ragionevole dubbio", "Responsabilità oggettiva"],
				correct: 1,
				motivation: "Cass. SS.UU. n. 581/2008 ha affermato il principio della 'preponderanza dell'evidenza causale' o del 'più probabile che non'. A differenza del processo penale (che richiede la prova oltre ogni ragionevole dubbio), in ambito civile e amministrativo vige uno standard più flessibile basato sulla probabilità logica, non quantitativa-statistica.",
				category: "Nesso causale"
			},
			{
				question: "Qual è il termine ordinario di prescrizione dell'azione di responsabilità amministrativa?",
				options: ["3 anni", "5 anni", "7 anni", "10 anni"],
				correct: 1,
				motivation: "L'art. 1, comma 2, della Legge 20/1994 stabilisce che 'il diritto al risarcimento del danno si prescrive in ogni caso in cinque anni decorrenti dalla data in cui si è verificato il fatto dannoso'. Il termine decorre dall'evento lesivo, non dalla condotta.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Per i fatti commessi dopo il 7 ottobre 2016, qual è il termine massimo assoluto entro cui può essere esercitata l'azione di responsabilità?",
				options: ["5 anni", "6 anni", "7 anni", "10 anni"],
				correct: 2,
				motivation: "Il D.Lgs. 174/2016 (Codice di giustizia contabile) ha introdotto un tetto massimo di 7 anni dall'evento dannoso, anche in caso di interruzione della prescrizione. La prescrizione può essere interrotta una sola volta, ma comunque non può superare i 7 anni. Questa regola garantisce maggiore certezza dei rapporti giuridici.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Secondo la concezione normativa della colpa grave, cosa rappresenta la colpevolezza?",
				options: ["Uno stato mentale di negligenza", "Un giudizio di rimproverabilità per atteggiamento antidoveroso evitabile", "Una presunzione legale", "Un elemento oggettivo del danno"],
				correct: 1,
				motivation: "La concezione normativa della colpevolezza, abbandonando quella psicologica, definisce la colpa come un giudizio di rimproverabilità per l'atteggiamento antidoveroso della volontà che era possibile non assumere. Si valuta il rapporto di contraddizione tra la volontà dell'agente e le norme, con una valutazione 'in concreto' ed 'ex ante'.",
				category: "Elemento soggettivo"
			},
			{
				question: "Cosa significa 'culpa lata' secondo la definizione di Ulpiano?",
				options: ["Violare la legge consapevolmente", "Non intelligere quod omnes intelligunt", "Agire con dolo eventuale", "Omettere per negligenza"],
				correct: 1,
				motivation: "La colpa grave ('culpa lata') è definita da Ulpiano come 'non intelligere quod omnes intelligunt' - non comprendere ciò che tutti comprendono. Rappresenta l'inosservanza della diligenza minimale che anche l'agente meno preparato avrebbe usato, una negligenza intollerabile e imperdonabile.",
				category: "Elemento soggettivo"
			},
			{
				question: "Secondo l'art. 2, comma 3, del D.Lgs. 36/2023 (Codice Appalti), cosa NON costituisce colpa grave?",
				options: ["Violazione di norme di diritto", "Riferimento a indirizzi giurisprudenziali prevalenti", "Omissione di cautele normalmente richieste", "Palese violazione di regole di prudenza"],
				correct: 1,
				motivation: "L'art. 2, comma 3, del nuovo Codice dei Contratti Pubblici stabilisce espressamente che NON costituisce colpa grave 'la violazione o l'omissione determinata dal riferimento a indirizzi giurisprudenziali prevalenti o a pareri delle Autorità competenti'. Questo crea uno 'scudo protettivo' per chi segue orientamenti consolidati.",
				category: "Elemento soggettivo"
			},
			{
				question: "Nel danno indiretto, chi viene tipicamente citato in giudizio dal terzo danneggiato?",
				options: ["Solo il dipendente responsabile", "L'Amministrazione pubblica", "Sia PA che dipendente solidalmente", "Il dirigente dell'ufficio"],
				correct: 1,
				motivation: "Il terzo danneggiato cita tipicamente l'Amministrazione (non il dipendente) per tre ragioni: 1) garanzia di solvibilità della PA, 2) la PA risponde anche per colpa lieve mentre il dipendente solo per dolo o colpa grave (art. 23 DPR 3/1957), 3) possibilità di invocare responsabilità contrattuale. Poi la PA esercita rivalsa obbligatoria sul dipendente.",
				category: "Danno erariale"
			},
			{
				question: "Quale elemento caratterizza la responsabilità amministrativa come 'personale' dopo la riforma del 1996?",
				options: ["È trasmissibile agli eredi", "È solidale tra corresponsabili", "Non si trasmette agli eredi ed è parziaria", "Richiede sempre dolo"],
				correct: 2,
				motivation: "Il carattere personale della responsabilità amministrativa si manifesta in: 1) NON trasmissibilità agli eredi, 2) parziarietà (non solidarietà) tra corresponsabili, 3) graduabilità tramite potere riduttivo, 4) valutazione personalizzata della colpevolezza. La solidarietà è prevista solo in casi eccezionali tassativi (es. danno da tangente).",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale sentenza della Cassazione ha esteso la giurisdizione contabile ai privati beneficiari di fondi pubblici?",
				options: ["Cass. SS.UU. n. 500/1999", "Cass. SS.UU. n. 4511/2006", "Cass. SS.UU. n. 340/2003", "Cass. SS.UU. n. 581/2008"],
				correct: 1,
				motivation: "Cass. SS.UU. n. 4511/2006 è la sentenza 'capostipite' che ha segnato una svolta: il baricentro passa dalla qualità del soggetto alla natura del danno. Quando un privato riceve fondi pubblici finalizzati, viola il vincolo di scopo e causa un danno alle pubbliche finanze, sussiste la giurisdizione contabile anche senza formale inserimento in un procedimento amministrativo.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Cosa si intende per 'occasionalità necessaria' rispetto alla causazione del danno?",
				options: ["Il danno deve essere voluto", "La condotta deve essere espressamente prevista dalle mansioni", "L'esercizio delle funzioni deve essere stata 'condicio sine qua non' del fatto illecito", "Il danno deve verificarsi durante l'orario di lavoro"],
				correct: 2,
				motivation: "L'occasionalità necessaria significa che lo svolgimento delle funzioni deve essere stata 'condicio sine qua non' del fatto illecito, avendone grandemente agevolato la realizzazione in maniera decisiva. La giurisdizione si esclude solo quando il dipendente agisce come semplice privato per fini strettamente personali, senza alcun collegamento con il servizio.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale norma ha introdotto la prima tipizzazione legislativa della colpa grave?",
				options: ["Legge 20/1994", "D.L. 76/2020", "D.Lgs. 36/2023", "Legge 639/1996"],
				correct: 2,
				motivation: "L'art. 2, comma 3, del D.Lgs. 36/2023 (nuovo Codice dei Contratti Pubblici) rappresenta la PRIMA volta che il legislatore 'scrive' cosa sia la colpa grave, definendola per le attività in materia di appalti. Prima esistevano solo definizioni giurisprudenziali.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "In presenza di dolo, il giudice può applicare il potere riduttivo?",
				options: ["Sì, sempre", "Sì, ma solo se le condizioni economiche del convenuto lo richiedono", "No, secondo la giurisprudenza maggioritaria", "Sì, ma solo per il dolo eventuale"],
				correct: 2,
				motivation: "La giurisprudenza maggioritaria ritiene che in caso di dolo il giudice NON possa applicare il potere riduttivo previsto dall'art. 52 del Codice di Giustizia Contabile. Il dolo rappresenta la massima riprovevolezza: chi agisce volontariamente per danneggiare l'erario non merita attenuazioni.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale articolo costituzionale fonda il dovere di adempiere le pubbliche funzioni 'con disciplina ed onore'?",
				options: ["Art. 28 Cost.", "Art. 54 Cost.", "Art. 97 Cost.", "Art. 103 Cost."],
				correct: 1,
				motivation: "L'art. 54 della Costituzione stabilisce che 'i cittadini cui sono affidate funzioni pubbliche hanno il dovere di adempierle con disciplina ed onore'. Questo dovere di 'onore' è uno dei fondamenti del danno all'immagine e della dimensione etico-giuridica della responsabilità amministrativa.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Il giudizio contabile sul danno indiretto è vincolato alla sentenza che ha condannato la PA?",
				options: ["Sì, sia sull'an che sul quantum", "Sì, solo sull'an", "Sì, solo sul quantum", "No, è autonomo su entrambi"],
				correct: 3,
				motivation: "Il giudizio davanti alla Corte dei Conti è AUTONOMO rispetto a quello che ha condannato la PA. Il giudice contabile non è vincolato né sull'an (se c'è responsabilità) né sul quantum (quanto va risarcito). Può assolvere il dipendente anche se la PA è stata condannata, perché si applicano regole diverse (serve almeno colpa grave).",
				category: "Danno erariale"
			},
			{
				question: "Quale tipo di probabilità rileva per il nesso causale in ambito amministrativo secondo Cass. III Civ. n. 21619/2007?",
				options: ["Probabilità quantitativa-statistica", "Probabilità logica", "Probabilità presuntiva", "Probabilità assoluta"],
				correct: 1,
				motivation: "Cass. III Civ. n. 21619/2007 ha chiarito che rileva la PROBABILITÀ LOGICA, non quella quantitativa-statistica. La valutazione avviene caso per caso, sulla base delle circostanze concrete, delle prove disponibili e delle massime di esperienza, non su dati statistici di frequenza.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Da quando decorre il termine di prescrizione quinquennale?",
				options: ["Dalla condotta illecita", "Dal fatto dannoso (evento lesivo)", "Dalla scoperta del danno", "Dalla denuncia alla Procura"],
				correct: 1,
				motivation: "L'art. 1, comma 2, della Legge 20/1994 stabilisce che il termine decorre 'dalla data in cui si è verificato il fatto dannoso'. Per fatto dannoso si intende l'evento lesivo, non la condotta. Esempio: se l'autorizzazione è del 2018 ma il pagamento del 2020, il termine decorre dal 2020.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale norma ha previsto l'esimente per i decreti di cessazione anticipata delle concessioni autostradali vistati dalla Corte dei Conti?",
				options: ["D.L. 76/2020", "D.L. 32/2019", "D.Lgs. 36/2023", "Legge 190/2012"],
				correct: 1,
				motivation: "L'art. 4, comma 12-ter, del D.L. 32/2019 (conv. L. 55/2019) esclude ogni responsabilità (anche la condotta antigiuridica) per decreti di cessazione anticipata di concessioni autostradali vistati dalla Corte dei Conti, per ogni profilo. È uno 'scudo' totale di immunità decisionale per questa materia specifica.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Le carenze organizzative dell'Amministrazione possono rilevare sulla responsabilità del dipendente?",
				options: ["No, mai", "Sì, possono escludere o attenuare la colpa grave", "Sì, ma solo per i dirigenti", "Solo se documentate per iscritto"],
				correct: 1,
				motivation: "La giurisprudenza riconosce che carenze organizzative gravi, diffuse e preesistenti possono: 1) escludere la colpa grave del singolo, 2) attenuare la responsabilità (potere riduttivo), 3) configurare concorso di colpa dell'Ente. Si parla di 'rischio di impresa' che grava sull'Amministrazione mal organizzata.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quando è entrato in vigore il Codice di Giustizia Contabile (D.Lgs. 174/2016)?",
				options: ["1 gennaio 2016", "7 ottobre 2016", "1 gennaio 2017", "7 ottobre 2017"],
				correct: 1,
				motivation: "Il D.Lgs. 174/2016 è entrato in vigore il 7 ottobre 2016, abrogando il precedente R.D. 1038/1933. Ha introdotto maggiori garanzie difensive, parentesi giurisdizionali in fase istruttoria, riti speciali e il nuovo regime di prescrizione (max 7 anni con interruzione una sola volta).",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Qual è la funzione principale della responsabilità amministrativa?",
				options: ["Sanzionatoria", "Prevalentemente risarcitoria", "Punitiva", "Deterrente"],
				correct: 1,
				motivation: "Nonostante la Corte Costituzionale (sent. 371 e 453/1998) abbia riconosciuto che la riforma ha accentuato i profili sanzionatori, la funzione principale resta RISARCITORIA: l'obiettivo è riparare il danno causato all'erario, ripristinare l'equilibrio patrimoniale, non principalmente 'punire' il colpevole.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Le Sezioni Unite della Cassazione con quale sentenza hanno riconosciuto la risarcibilità dell'interesse legittimo?",
				options: ["Sent. 4060/1993", "Sent. 500/1999", "Sent. 4511/2006", "Sent. 340/2003"],
				correct: 1,
				motivation: "Cass. SS.UU. n. 500/1999 ha segnato una svolta storica riconoscendo la risarcibilità dell'interesse legittimo pretensivo. Questo ha comportato un notevole ampliamento delle ipotesi di responsabilità civile della PA e, conseguentemente, delle fattispecie di danno indiretto perseguibili davanti alla Corte dei Conti.",
				category: "Danno erariale"
			},
			{
				question: "Cosa si intende per 'danno-evento' e 'danno-conseguenza'?",
				options: ["Sono sinonimi", "Il primo è la lesione dell'interesse, il secondo l'effetto economico", "Il primo è patrimoniale, il secondo no", "Il primo riguarda i terzi, il secondo la PA"],
				correct: 1,
				motivation: "La distinzione tradizionale nel nesso causale: il DANNO-EVENTO è la lesione dell'interesse tutelato (art. 2043 c.c., causalità materiale), il DANNO-CONSEGUENZA è l'effetto economico negativo risarcibile (art. 1223 c.c., causalità giuridica). Si valutano in due momenti distinti del rapporto di causalità.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Per i fatti commessi prima del 17 luglio 2020, quale concezione di dolo può ancora essere invocata?",
				options: ["Solo dolo penalistico", "Dolo contrattuale o in adimplendo", "Dolo d'impeto", "Dolo specifico"],
				correct: 1,
				motivation: "Per i fatti anteriori al 17/07/2020 (entrata in vigore art. 21 DL 76/2020) può ancora essere invocato il DOLO CONTRATTUALE o IN ADIMPLENDO, che richiedeva solo la violazione intenzionale dei doveri d'ufficio, non la volontà dell'evento dannoso. L'art. 21 ha natura sostanziale quindi non è retroattivo.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Il direttore dei lavori privato è soggetto alla giurisdizione della Corte dei Conti?",
				options: ["No, mai", "Solo se è anche progettista", "Sì, perché ha un rapporto di servizio", "Solo per opere pubbliche sopra soglia"],
				correct: 2,
				motivation: "Il DIRETTORE DEI LAVORI è soggetto alla giurisdizione contabile perché svolge funzioni di vigilanza, controllo e coordinamento, esercita poteri pubblicistici ed è il 'braccio' dell'Amministrazione sul cantiere. C'è inserimento funzionale nel procedimento amministrativo, a differenza del progettista privato.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale sentenza della Corte Costituzionale ha dichiarato legittima l'esimente temporanea del D.L. 76/2020?",
				options: ["Sent. 371/1998", "Sent. 355/2010", "Sent. 132/2024", "Sent. 453/1998"],
				correct: 2,
				motivation: "La Corte Costituzionale con la sentenza n. 132/2024 ha dichiarato infondate/inammissibili le questioni di legittimità costituzionale dell'art. 21, c. 2, evidenziando il concetto di 'amministrazione di risultato', la necessità di contrastare la 'paura della firma' e auspicando una riforma organica della responsabilità amministrativa.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quante volte può essere interrotta la prescrizione per i fatti commessi dopo il 7 ottobre 2016?",
				options: ["Infinite volte", "Una sola volta", "Due volte", "Tre volte"],
				correct: 1,
				motivation: "Il Codice di Giustizia Contabile (D.Lgs. 174/2016) ha introdotto un limite: per i fatti successivi al 7 ottobre 2016, la prescrizione può essere interrotta UNA SOLA VOLTA e comunque il termine massimo non può superare i 7 anni dall'evento dannoso. Questo garantisce maggiore certezza dei rapporti giuridici.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale norma prevede la rivalsa obbligatoria della PA nei confronti del dipendente che ha causato danno a terzi?",
				options: ["Art. 28 Cost.", "Art. 22 DPR 3/1957", "Art. 55 D.Lgs. 165/2001", "Art. 1 L. 20/1994"],
				correct: 1,
				motivation: "L'art. 22 del D.P.R. n. 3/1957 stabilisce che l'Amministrazione che ha risarcito il terzo DEVE esercitare la rivalsa contro il dipendente responsabile. Non è una facoltà, è un OBBLIGO. L'Amministrazione deve segnalare il fatto alla Procura della Corte dei Conti trasmettendo la documentazione.",
				category: "Danno erariale"
			},
			{
				question: "Secondo l'art. 52 del Codice di Giustizia Contabile, su quali elementi si basa il potere riduttivo del giudice?",
				options: ["Solo sulle condizioni economiche del convenuto", "Solo sulla gravità del comportamento", "Gravità, responsabilità concorrenti, condizioni economiche, entità conseguenze", "Solo sull'entità del danno"],
				correct: 2,
				motivation: "L'art. 52 CGC (già art. 1, c. 1-bis, L. 20/1994) prevede che il giudice consideri: 1) gravità del comportamento, 2) responsabilità concorrenti (altri corresponsabili, carenze organizzative), 3) condizioni economiche del convenuto, 4) entità delle conseguenze dannose. È una facoltà discrezionale, non applicabile in caso di dolo.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "I Parlamentari possono essere sottoposti alla giurisdizione della Corte dei Conti?",
				options: ["No, mai per immunità assoluta", "Sì, ma solo per atti estranei alle funzioni parlamentari", "Sì, sempre", "Solo con autorizzazione della Camera"],
				correct: 1,
				motivation: "Secondo Cass. SS.UU. n. 4582/2006, i Deputati possono essere sottoposti alla giurisdizione contabile, ma l'immunità ex art. 68 Cost. copre le opinioni espresse e i voti dati nell'esercizio delle funzioni. Se il comportamento illecito è estraneo alle funzioni parlamentari, non c'è copertura costituzionale e sussiste la giurisdizione.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale principio costituzionale fonda il danno da disservizio?",
				options: ["Art. 2 Cost. - diritti inviolabili", "Art. 28 Cost. - responsabilità funzionari", "Art. 97 Cost. - buon andamento", "Art. 103 Cost. - giurisdizione contabile"],
				correct: 2,
				motivation: "Il danno da disservizio si fonda sull'art. 97 della Costituzione (buon andamento e imparzialità). Dal 1990 (L. 241) i parametri di efficienza, efficacia ed economicità sono specificazioni del buon andamento e costituiscono parametri di legittimità dell'azione amministrativa. La loro violazione può generare danno da disservizio.",
				category: "Danno erariale"
			},
			{
				question: "Cosa prevede il D.Lgs. 219/2023 in materia di autotutela tributaria?",
				options: ["Responsabilità per colpa grave", "Responsabilità solo per dolo", "Esenzione totale da responsabilità", "Responsabilità aggravata"],
				correct: 1,
				motivation: "Gli artt. 10-quater e 10-quinquies del D.Lgs. 219/2023 (Statuto del contribuente) prevedono che i funzionari dell'Agenzia delle Entrate che adottano provvedimenti di autotutela obbligatoria o facoltativa rispondono SOLO per DOLO, escludendo quindi la colpa grave. È una scriminante settoriale.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "La sentenza di patteggiamento integra la condizione di procedibilità per il danno all'immagine?",
				options: ["No, serve condanna con rito ordinario", "Sì, secondo giurisprudenza maggioritaria", "Solo se superiore a 2 anni", "Solo dopo riforma Cartabia"],
				correct: 1,
				motivation: "La giurisprudenza maggioritaria ritiene che la sentenza di patteggiamento integri la condizione di procedibilità anche dopo la riforma Cartabia (D.Lgs. 150/2022). È assimilabile a sentenza di condanna ai fini del presupposto, incidendo eventualmente solo sull'onere probatorio della condotta illecita.",
				category: "Danno erariale"
			},
			{
				question: "Come viene definita la colpa grave dalla giurisprudenza consolidata?",
				options: ["Violazione di qualsiasi norma", "Negligenza intollerabile, trascuratezza imperdonabile", "Errore tecnico", "Violazione colposa"],
				correct: 1,
				motivation: "La giurisprudenza consolidata (Cass. SS.UU. n. 43/1996, SR Corte Conti n. 56/1997) definisce la colpa grave come: NEGLIGENZA INTOLLERABILE, TRASCURATEZZA IMPERDONABILE, SUPERFICIALITÀ INESCUSABILE. È l'inosservanza della diligenza minimale che anche l'agente meno preparato avrebbe dovuto usare.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Gli amministratori di società beneficiarie di fondi pubblici possono essere chiamati a rispondere davanti alla Corte dei Conti?",
				options: ["No, solo la società", "Sì, se hanno distratto i fondi", "Solo se dipendenti pubblici", "Mai, solo giudice ordinario"],
				correct: 1,
				motivation: "Cass. SS.UU. n. 5019/2010 ha stabilito che anche gli AMMINISTRATORI della società beneficiaria rispondono personalmente se hanno distratto i fondi pubblici, frustrando gli scopi perseguiti dalla PA. Il dato fondante è la distrazione dei fondi, quindi ne rispondono sia la società che le persone fisiche che li hanno materialmente distratti.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Quale norma mantiene ferma la disciplina della responsabilità anche dopo la contrattualizzazione del pubblico impiego?",
				options: ["Art. 28 Cost.", "Art. 55 D.Lgs. 165/2001", "Art. 1 L. 20/1994", "Art. 97 Cost."],
				correct: 1,
				motivation: "L'art. 55 del D.Lgs. 165/2001 stabilisce espressamente che le previsioni del D.P.R. 3/1957 in tema di responsabilità patrimoniale dei pubblici dipendenti sono state mantenute ferme anche dopo la contrattualizzazione del rapporto di lavoro. La 'privatizzazione' non ha toccato la responsabilità amministrativa.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Il danno all'immagine può essere contestato indipendentemente dal danno patrimoniale?",
				options: ["No, mai", "Sì, sono autonomi", "Solo se il danno patrimoniale è inferiore a 10.000 euro", "Solo con autorizzazione del Procuratore"],
				correct: 1,
				motivation: "Sì, il danno all'immagine può essere contestato anche INDIPENDENTEMENTE dal danno patrimoniale. Sono due voci autonome: uno è patrimoniale (esborso/mancata entrata), l'altro è non patrimoniale ma economicamente valutabile (lesione della reputazione). Possono coesistere o sussistere separatamente.",
				category: "Danno erariale"
			},
			{
				question: "La transazione tra PA e terzo danneggiato può dar luogo a danno indiretto?",
				options: ["No, solo la sentenza", "Sì, se la transazione è ragionevole", "Sì, sempre", "Solo se omologata dal giudice"],
				correct: 1,
				motivation: "Sì, il danno indiretto può nascere anche da TRANSAZIONE, non solo da sentenza, ma la transazione deve essere RAGIONEVOLE, frutto di seria valutazione costi/benefici. Se la PA ha transatto in modo irragionevole, arbitrario, senza motivo, si interrompe il nesso causale: la causa del danno è la transazione scellerata, non la condotta originaria del dipendente.",
				category: "Danno erariale"
			},
			{
				question: "Quale criterio deve guidare la valutazione della colpa grave secondo la giurisprudenza?",
				options: ["Valutazione astratta ed ex post", "Valutazione in concreto ed ex ante", "Valutazione oggettiva", "Valutazione solo ex post"],
				correct: 1,
				motivation: "La valutazione della colpa grave deve essere condotta 'IN CONCRETO' (considerando quel dipendente specifico, con le sue capacità e le circostanze concrete) ed 'EX ANTE' (ponendosi al momento della condotta, con le conoscenze disponibili allora, non con il senno di poi). Questo realizza la personalizzazione della responsabilità.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "I Gruppi consiliari regionali sono soggetti alla giurisdizione della Corte dei Conti per la gestione dei contributi?",
				options: ["No, hanno natura privata", "Sì, secondo Cass. SS.UU. n. 23257/2014", "Solo su autorizzazione del Consiglio", "Solo per importi sopra 100.000 euro"],
				correct: 1,
				motivation: "Cass. SS.UU. n. 23257/2014 ha affermato la giurisdizione contabile sui Presidenti dei Gruppi consiliari per gestione contributi. I Gruppi hanno natura 'bivalente' (privata per attività partitica, pubblica per funzione consiliare). Sono organi del Consiglio e i contributi sono fondi pubblici da gestire correttamente.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Secondo la Corte Costituzionale (sent. 132/2024), quali sono le prospettive di riforma auspicate?",
				options: ["Abolizione della responsabilità", "Solo aumento termini prescrizione", "Tipizzazione colpa grave, tetti, esoneri, polizze, potere riduttivo obbligatorio", "Solo riduzione dell'elemento soggettivo"],
				correct: 2,
				motivation: "La Corte Cost. sent. 132/2024 auspica una riforma organica su: 1) tipizzazione della colpa grave, 2) tetto massimo di condanna, 3) esoneri per categorie/atti specifici, 4) incentivazione polizze assicurative, 5) potere riduttivo obbligatorio in casi tipizzati. Sottolinea la necessità di bilanciare tutela erario e serenità decisionale.",
                category: "Responsabilità Amministrativa"
			},
			{
				question: "Per quale periodo è applicabile l'esimente temporanea dell'art. 21, comma 2, D.L. 76/2020?",
				options: ["Dal 1/1/2020 al 31/12/2023", "Dal 17/7/2020 al 31/12/2024", "Dal 1/1/2021 al 31/12/2025", "Periodo indeterminato"],
				correct: 1,
				motivation: "L'esimente temporanea che limita la responsabilità al solo dolo (salvo omissioni/inerzie) si applica ai fatti commessi nel periodo DAL 17 LUGLIO 2020 (entrata vigore DL 76/2020) AL 31 DICEMBRE 2024 (termine così prorogato dal DL 215/2023 conv. L. 18/2024). Dal 1° gennaio 2025, salvo nuove proroghe, tornerà la colpa grave.",
                category: "Responsabilità Amministrativa"
			},

            // B03 - Funzione Consultiva
            {
                question: "La funzione consultiva della Corte dei conti trova fondamento:",
                options: ["Solo nella Costituzione", "In norme ordinarie e non nella Costituzione", "Solo in regolamenti interni", "Unicamente in prassi amministrative"],
                correct: 1,
                motivation: "La funzione consultiva non ha un esplicito riferimento costituzionale, ma è fondata su norme ordinarie.",
                category: "Funzione Consultiva"
            },
            {
                question: "Quale articolo del r.d. 1214/1934 prevede la funzione consultiva della Corte dei conti?",
                options: ["Art. 100", "Art. 13", "Art. 7", "Art. 103"],
                correct: 1,
                motivation: "L'art. 13 del r.d. 1214/1934 attribuisce alla Corte la facoltà di dare pareri nella formazione di atti e provvedimenti amministrativi.",
                category: "Funzione Consultiva"
            },
            {
                question: "Le Regioni possono richiedere pareri alle sezioni regionali di controllo della Corte dei conti:",
                options: ["Solo tramite il Ministero dell'Interno", "In materia di contabilità pubblica", "Solo su questioni di diritto privato", "Solo per questioni tributarie"],
                correct: 1,
                motivation: "La legge 131/2003 prevede la richiesta di pareri in materia di contabilità pubblica.",
                category: "Funzione Consultiva"
            },
            {
                question: "Quale tra questi enti NON è legittimato a richiedere pareri alle sezioni regionali di controllo?",
                options: ["Comune", "Provincia", "Comunità montana", "Regione"],
                correct: 2,
                motivation: "Le comunità montane non sono tra i soggetti legittimati secondo la normativa e la giurisprudenza.",
                category: "Funzione Consultiva"
            },
            {
                question: "La richiesta di parere è ammissibile solo se:",
                options: ["Proviene da qualsiasi organo dell'ente", "Proviene dall'organo rappresentativo (es. Sindaco, Presidente)", "È firmata da un cittadino", "È presentata dal segretario comunale"],
                correct: 1,
                motivation: "Solo l'organo rappresentativo dell'ente ha legittimazione interna a presentare la richiesta.",
                category: "Funzione Consultiva"
            },
			{
				question: "Quale articolo della Costituzione disciplina espressamente la funzione consultiva della Corte dei conti?",
				options: ["Art. 100 Cost.", "Art. 103 Cost.", "La funzione consultiva non è menzionata in Costituzione", "Art. 81 Cost."],
				correct: 2,
				motivation: "La funzione consultiva, a differenza delle funzioni di controllo e giurisdizionali, non trova un esplicito riferimento nella Costituzione. È disciplinata da norme di legge ordinaria.",
                category: "Funzione Consultiva"
			},
			{
				question: "Qual è il fondamento normativo generale della funzione consultiva della Corte dei conti?",
				options: ["Art. 7, comma 8, legge n. 131/2003", "Art. 13, R.D. n. 1214/1934", "Art. 5, d.lgs. n. 175/2016", "Art. 69, d.lgs. n. 174/2016"],
				correct: 1,
				motivation: "L'art. 13 del Testo unico delle leggi sulla Corte dei conti del 1934 rappresenta il fondamento generale, stabilendo che la Corte formula proposte e pareri nella formazione di atti e provvedimenti amministrativi indicati dalla legge.",
                category: "Funzione Consultiva"
			},
			{
				question: "Quale norma prevede il parere obbligatorio delle Sezioni riunite sui provvedimenti che modificano le attribuzioni della Corte dei conti?",
				options: ["R.D. n. 1214/1934", "Legge n. 131/2003", "R.D. n. 273/1939", "D.lgs. n. 174/2016"],
				correct: 2,
				motivation: "L'art. 1 del R.D. n. 273/1939 prevede che i provvedimenti che conferiscono nuove attribuzioni alla Corte o modificano quelle esistenti siano adottati previo parere delle Sezioni riunite.",
                category: "Funzione Consultiva"
			},
			{
				question: "L'art. 7, comma 8, della legge n. 131/2003 consente di richiedere pareri in quale materia?",
				options: ["Diritto del lavoro pubblico", "Contratti pubblici", "Contabilità pubblica", "Procedimento amministrativo"],
				correct: 2,
				motivation: "La norma circoscrive espressamente la competenza consultiva delle Sezioni regionali di controllo alla 'materia della contabilità pubblica'.",
                category: "Funzione Consultiva"
			},
			{
				question: "Secondo la delibera n. 5/2004 delle Sezioni riunite, cosa si intende per contabilità pubblica?",
				options: ["Solo le norme sul bilancio degli enti pubblici", "Il complesso di principi e norme che regolano l'attività finanziaria e patrimoniale degli enti pubblici", "Esclusivamente le procedure contabili", "Le norme sulla tesoreria"],
				correct: 1,
				motivation: "Le Sezioni riunite hanno definito la contabilità pubblica come 'il complesso di principi e di norme che regolano l'attività finanziaria e patrimoniale dello Stato e degli enti pubblici'.",
                category: "Funzione Consultiva"
			},
			{
				question: "Chi può richiedere un parere alle Sezioni regionali di controllo secondo la legge n. 131/2003?",
				options: ["Solo le Regioni", "Regioni, Comuni, Province e Città metropolitane", "Tutte le amministrazioni pubbliche", "Solo i Comuni capoluogo"],
				correct: 1,
				motivation: "L'art. 7, comma 8, della legge n. 131/2003 prevede espressamente che Regioni, Comuni, Province e Città metropolitane possano richiedere pareri in materia di contabilità pubblica.",
                category: "Funzione Consultiva"
			},
			{
				question: "Un'Unione di comuni può richiedere un parere alla Corte dei conti?",
				options: ["No, mai", "Sì, su qualsiasi materia", "Sì, ma solo sulle funzioni esercitate dall'Unione stessa", "Sì, ma solo tramite i singoli Comuni"],
				correct: 2,
				motivation: "La delibera n. 1/SEZAUT/2021/QMIG ha stabilito che l'Unione di comuni è legittimata limitatamente a questioni inerenti alle funzioni esercitate dall'Unione stessa.",
                category: "Funzione Consultiva"
			},
			{
				question: "Una società a totale capitale pubblico locale può richiedere un parere alla Corte dei conti?",
				options: ["Sì, sempre", "Sì, se controllata da un Comune", "No, non è legittimata", "Sì, ma solo tramite l'ente controllante"],
				correct: 2,
				motivation: "La giurisprudenza esclude la legittimazione delle società a capitale pubblico, anche se interamente pubbliche, in quanto l'elenco dei soggetti legittimati è sostanzialmente tassativo.",
                category: "Funzione Consultiva"
			},
			{
				question: "Chi deve firmare la richiesta di parere per un Comune?",
				options: ["Il Segretario comunale", "La Giunta comunale", "Il Sindaco", "Il Consiglio comunale"],
				correct: 2,
				motivation: "La richiesta deve provenire dall'organo di rappresentanza dell'ente. Per i Comuni, l'organo competente è il Sindaco.",
                category: "Funzione Consultiva"
			},
			{
				question: "Il Vicesindaco può richiedere un parere alla Corte dei conti?",
				options: ["Sì, sempre", "No, mai", "Sì, ma solo in caso di impedimento permanente, decadenza o decesso del Sindaco", "Sì, se delegato dal Sindaco"],
				correct: 2,
				motivation: "La delibera n. 11/SEZAUT/2020/QMIG ha stabilito che il Vicesindaco è legittimato solo nelle circostanze di cui all'art. 53 del TUEL che giustificano l'esercizio delle funzioni vicarie.",
                category: "Funzione Consultiva"
			},
			{
				question: "Il Commissario straordinario prefettizio può richiedere pareri alla Corte dei conti?",
				options: ["No, non ha questa competenza", "Sì, sostituisce l'organo politico e può rappresentare l'ente", "Sì, ma solo per questioni urgenti", "No, deve attendere la ricostituzione degli organi"],
				correct: 1,
				motivation: "È pacifica la legittimazione del commissario straordinario che, in caso di scioglimento degli organi, sostituisce l'organo politico e assume la rappresentanza dell'ente.",
                category: "Funzione Consultiva"
			},
			{
				question: "Una Camera di Commercio può richiedere un parere alla Corte dei conti?",
				options: ["Sì, è un ente pubblico", "No, non rientra tra i soggetti legittimati", "Sì, ma solo tramite la Regione", "Sì, se autorizzata dal Ministero"],
				correct: 1,
				motivation: "Le Camere di Commercio non rientrano nell'elenco tassativo dei soggetti legittimati dalla legge n. 131/2003. Le richieste da esse provenienti sono state respinte per inammissibilità.",
                category: "Funzione Consultiva"
			},
			{
				question: "Gli organismi rappresentativi degli enti locali (come l'ANCI) possono richiedere pareri alla Corte dei conti?",
				options: ["No, mai", "Sì, ma solo alle Sezioni regionali", "Sì, direttamente alla Sezione delle autonomie", "Sì, ma solo tramite la Conferenza Stato-Regioni"],
				correct: 2,
				motivation: "L'art. 6-bis del d.l. n. 113/2016 consente agli organismi rappresentativi (come ANCI per i Comuni) di richiedere pareri direttamente alla Sezione delle autonomie.",
				category: "Legittimazione soggettiva"
			},
			{
				question: "Quale organo può richiedere pareri per le Regioni secondo l'art. 6-bis del d.l. n. 113/2016?",
				options: ["Il Consiglio regionale", "Solo il Presidente della Regione", "La Conferenza delle Regioni e la Conferenza dei Presidenti delle Assemblee legislative", "La Giunta regionale"],
				correct: 2,
				motivation: "L'art. 6-bis prevede che per le Regioni possano richiedere pareri direttamente alla Sezione delle autonomie la Conferenza delle Regioni, la Conferenza dei Presidenti delle Assemblee legislative e le rispettive componenti nella Conferenza unificata.",
                category: "Funzione Consultiva"
			},
			{
				question: "Rientrano nella materia della contabilità pubblica le questioni relative ai contratti collettivi di lavoro?",
				options: ["Sì, sempre", "Sì, se hanno impatto sulla spesa", "No, sono generalmente escluse", "Sì, ma solo per il personale dirigenziale"],
				correct: 2,
				motivation: "La delibera n. 5/2019/QMIG ha escluso le questioni inerenti ai contratti collettivi e al rapporto di lavoro, salvo che riguardino l'interpretazione di norme della finanza pubblica che pongono limiti strumentali al contenimento della spesa.",
                category: "Funzione Consultiva"
			},
			{
				question: "Quale delle seguenti questioni rientra nella materia della contabilità pubblica?",
				options: ["Interpretazione del CCNL del personale", "Gestione degli equilibri di bilancio", "Procedure di concorso pubblico", "Organizzazione degli uffici"],
				correct: 1,
				motivation: "I bilanci e i relativi equilibri rientrano espressamente nell'ambito della contabilità pubblica secondo gli orientamenti della Sezione delle autonomie.",
                category: "Funzione Consultiva"
			},
			{
				question: "È ammissibile una richiesta di parere su un atto già adottato?",
				options: ["Sì, per verificarne la legittimità", "No, il parere deve essere preventivo", "Sì, se l'atto non è ancora esecutivo", "Sì, ma solo entro 30 giorni dall'adozione"],
				correct: 1,
				motivation: "La funzione consultiva ha natura preventiva. Non è ammissibile l'esercizio della funzione consultiva su atti già adottati.",
                category: "Funzione Consultiva"
			},
			{
				question: "È ammissibile una richiesta di parere su un caso gestionale specifico?",
				options: ["Sì, è l'oggetto principale della funzione consultiva", "No, la questione deve avere rilevanza generale", "Sì, se di valore superiore a 1 milione di euro", "Sì, ma solo per gli enti sopra i 5.000 abitanti"],
				correct: 1,
				motivation: "La giurisprudenza richiede che la questione abbia rilevanza generale. Non sono scrutinabili richieste concernenti valutazioni su casi o atti gestionali specifici.",
                category: "Funzione Consultiva"
			},
			{
				question: "Una Sezione regionale di controllo può sollevare questioni di legittimità costituzionale in sede consultiva?",
				options: ["Sì, come qualsiasi giudice", "No, non esercita funzioni giurisdizionali in senso proprio", "Sì, ma solo se rimette alla Sezione delle autonomie", "Sì, ma solo su richiesta dell'ente"],
				correct: 1,
				motivation: "In sede consultiva le Sezioni regionali non possono sollevare questioni di legittimità costituzionale, non esercitando funzioni giurisdizionali in senso proprio.",
                category: "Funzione Consultiva"
			},
			{
				question: "Cosa accade se una richiesta di parere contiene più quesiti, solo alcuni ammissibili?",
				options: ["Tutta la richiesta è dichiarata inammissibile", "Si risponde solo ai quesiti ammissibili (inammissibilità parziale)", "Si chiede all'ente di riformulare la richiesta", "Si risponde comunque a tutti i quesiti"],
				correct: 1,
				motivation: "È frequente l'inammissibilità parziale della richiesta: la Sezione dichiara inammissibili i quesiti che non hanno i requisiti e risponde nel merito solo a quelli ammissibili.",
                category: "Funzione Consultiva"
			},
			{
				question: "Quando una Sezione regionale può rimettere una questione alla Sezione delle autonomie?",
				options: ["Mai, decide sempre autonomamente", "Solo se richiesto dall'ente", "In presenza di contrasto giurisprudenziale o massima di particolare rilevanza", "Solo per questioni di valore superiore a 1 milione"],
				correct: 2,
				motivation: "L'art. 6, comma 4, del d.l. n. 174/2012 prevede la rimessione alla Sezione delle autonomie in presenza di contrasto giurisprudenziale o di massima di particolare rilevanza.",
				category: "Funzione nomofilattica"
			},
			{
				question: "Le Sezioni regionali devono conformarsi alle massime della Sezione delle autonomie?",
				options: ["No, sono orientamenti non vincolanti", "Sì, hanno obbligo di conformarsi", "Solo se concordano", "Solo per gli enti della stessa Regione"],
				correct: 1,
				motivation: "Una volta enunciato il principio di diritto dalla Sezione delle autonomie, le Sezioni regionali hanno l'obbligo di conformarsi a tale orientamento.",
				category: "Funzione nomofilattica"
			},
			{
				question: "Cosa prevede l'art. 69, comma 2, del Codice di giustizia contabile sui pareri della Corte?",
				options: ["I pareri sono sempre vincolanti", "Il PM deve archiviare in assenza di colpa grave quando l'azione si è conformata al parere", "I pareri hanno valore solo orientativo", "L'ente deve sempre richiedere un parere prima di ogni atto"],
				correct: 1,
				motivation: "L'art. 69, comma 2, del d.lgs. n. 174/2016 impone al PM l'archiviazione in assenza di colpa grave quando l'azione amministrativa si è conformata a parere della Corte nel rispetto dei presupposti generali.",
                category: "Funzione Consultiva"
			},
			{
				question: "Un dirigente che adotta un atto conforme a un parere della Corte dei conti è protetto dalla responsabilità amministrativa?",
				options: ["No, risponde sempre delle sue scelte", "Sì, è sempre esente da responsabilità", "È esclusa la gravità della colpa se rispettati i presupposti", "Solo se il parere è delle Sezioni riunite"],
				correct: 2,
				motivation: "La conformità al parere comporta l'esclusione della gravità della colpa, requisito necessario per la responsabilità amministrativa, purché siano rispettati i presupposti generali per il rilascio del parere.",
                category: "Funzione Consultiva"
			},
			{
				question: "L'art. 95, comma 4, del Codice di giustizia contabile prevede che il giudice:",
				options: ["Deve sempre conformarsi ai pareri della Corte", "Può ignorare i pareri resi in via consultiva", "Deve considerare i pareri nella valutazione della responsabilità", "Può richiedere nuovi pareri durante il giudizio"],
				correct: 2,
				motivation: "L'art. 95, comma 4, prevede che il giudice deve considerare, tra gli elementi di valutazione della responsabilità, anche i pareri resi dalla Corte in via consultiva.",
                category: "Funzione Consultiva"
			},
			{
				question: "Qual è il termine entro cui la Sezione regionale deve deliberare sul parere ex art. 5 TUSP?",
				options: ["30 giorni", "45 giorni", "60 giorni", "90 giorni"],
				correct: 2,
				motivation: "L'art. 5 del d.lgs. n. 175/2016 prevede che la Sezione regionale deliberi entro 60 giorni dal ricevimento dell'atto relativo a costituzione di società o acquisizione di partecipazioni.",
				category: "Società partecipate"
			},
			{
				question: "Il parere ex art. 5 TUSP è obbligatorio?",
				options: ["No, è facoltativo", "Sì, l'atto deve essere trasmesso alla Corte", "Solo per società con capitale superiore a 1 milione", "Solo per i Comuni capoluogo"],
				correct: 1,
				motivation: "La trasmissione dell'atto deliberativo alla Sezione regionale è obbligatoria per tutte le amministrazioni pubbliche che intendono costituire società o acquisire partecipazioni.",
				category: "Società partecipate"
			},
			{
				question: "Secondo l'orientamento prevalente, il 'parere' ex art. 5 TUSP è:",
				options: ["Una vera funzione consultiva", "Una forma di controllo sulle partecipate", "Un parere facoltativo", "Una funzione giurisdizionale"],
				correct: 1,
				motivation: "La delibera n. 16/SSRRCO/QMIG/2022 ha chiarito che si tratta di una peculiare attività di controllo sulle partecipate, più che di un parere in senso tecnico-giuridico.",
				category: "Società partecipate"
			},
			{
				question: "Cosa verifica la Corte nel parere ex art. 5 TUSP?",
				options: ["Solo la convenienza economica", "Solo la legittimità formale", "Conformità alla normativa TUSP, sostenibilità finanziaria e compatibilità con i principi di efficienza", "Solo il rispetto del codice civile"],
				correct: 2,
				motivation: "La verifica riguarda la conformità ai commi 1 e 2 dell'art. 5 e agli articoli 4, 7 e 8 TUSP, la sostenibilità finanziaria e la compatibilità con i principi di efficienza, efficacia ed economicità.",
				category: "Società partecipate"
			},
			{
				question: "L'art. 7, comma 1-bis, del d.l. n. 77/2021 prevede pareri in ambito PNRR per fattispecie di valore:",
				options: ["Superiore a 500.000 euro", "Non inferiore a 1 milione di euro", "Superiore a 5 milioni di euro", "Senza limiti di valore"],
				correct: 1,
				motivation: "La norma prevede pareri delle Sezioni riunite su fattispecie relative al PNRR e fondi complementari di valore complessivo non inferiore a un milione di euro.",
                category: "Funzione Consultiva"
			},
			{
				question: "Chi può richiedere pareri in ambito PNRR alle Sezioni riunite?",
				options: ["Solo gli enti locali", "Solo le Regioni", "Amministrazioni centrali e organismi di diritto pubblico nazionali", "Tutti gli enti pubblici"],
				correct: 2,
				motivation: "L'art. 7, comma 1-bis, del d.l. n. 77/2021 prevede che le richieste alle Sezioni riunite provengano da amministrazioni centrali e altri organismi di diritto pubblico nazionali.",
                category: "Funzione Consultiva"
			},
			{
				question: "Per gli enti locali, i pareri PNRR sono resi da:",
				options: ["Sezioni riunite", "Sezioni regionali di controllo", "Sezione delle autonomie", "Sezione centrale di legittimità"],
				correct: 1,
				motivation: "La stessa norma prevede che i Comuni, Province, Città metropolitane e Regioni richiedano pareri sulle risorse PNRR alle Sezioni regionali di controllo.",
                category: "Funzione Consultiva"
			},
			{
				question: "La norma sui pareri PNRR (art. 7, comma 1-bis, d.l. n. 77/2021) ha avuto significative applicazioni pratiche?",
				options: ["Sì, moltissime", "Sì, alcune decine", "Non risultano ancora significative applicazioni", "Solo per le grandi opere"],
				correct: 2,
				motivation: "Come evidenziato nella lezione, nonostante l'ambito applicativo estremamente ampio, non risultano ancora significative applicazioni pratiche di questa norma.",
                category: "Funzione Consultiva"
			},
			{
				question: "Il progetto di legge C. n. 1621 (Progetto Foti) propone:",
				options: ["L'abolizione della funzione consultiva", "Pareri anche su fattispecie concrete con termine di 30 giorni", "Solo modifiche alle funzioni di controllo", "L'aumento dei termini per i pareri"],
				correct: 1,
				motivation: "Il progetto propone l'estensione dei pareri a fattispecie concrete connesse al PNRR con valore superiore a 1 milione di euro, con termine perentorio di 30 giorni.",
				category: "Progetti di riforma"
			},
			{
				question: "Nel progetto di legge C. n. 1621, quale organo dovrebbe rendere i pareri a livello centrale?",
				options: ["Le Sezioni riunite", "La Sezione delle autonomie", "La Sezione centrale di legittimità", "La Sezione di controllo sulla gestione"],
				correct: 2,
				motivation: "Il progetto prevede stranamente che i pareri siano resi dalla Sezione centrale per il controllo di legittimità, che attualmente svolge funzioni di controllo preventivo.",
                category: "Funzione Consultiva"
			},
			{
				question: "Cosa prevede il progetto di legge C. n. 1621 se la Corte non rende il parere entro 30 giorni?",
				options: ["La richiesta decade", "Si forma un silenzio-assenso conforme a quanto prospettato", "Si proroga automaticamente di altri 30 giorni", "L'ente può procedere liberamente"],
				correct: 1,
				motivation: "Il progetto prevede un meccanismo di silenzio-assenso: il parere si intende reso in senso conforme a quanto prospettato dall'amministrazione (o negativo se non prospettata soluzione).",
                category: "Funzione Consultiva"
			},
			{
				question: "Le Sezioni riunite con la delibera n. 3/2024 sul progetto Foti hanno espresso:",
				options: ["Pieno consenso", "Numerose criticità e perplessità", "Solo osservazioni formali", "Parere favorevole con riserve minori"],
				correct: 1,
				motivation: "Le Sezioni riunite hanno evidenziato numerose criticità, tra cui sovrapposizione di funzioni, snaturamento della funzione consultiva, problemi di sostenibilità del sistema.",
                category: "Funzione Consultiva"
			},
			{
				question: "Una delle principali criticità del progetto Foti evidenziate dalla Corte riguarda:",
				options: ["L'aumento dei costi", "La riduzione del personale", "L'apertura ai pareri su fattispecie concrete e casi gestionali specifici", "L'abolizione dei controlli"],
				correct: 2,
				motivation: "La Corte ha evidenziato che l'apertura ai pareri su fattispecie concrete rappresenta un significativo snaturamento della funzione consultiva e rischia di coinvolgere la Corte nell'amministrazione attiva.",
                category: "Funzione Consultiva"
			},
			{
				question: "Il meccanismo del silenzio-assenso proposto dal progetto Foti è stato criticato perché:",
				options: ["È troppo rigido", "Un parere dovrebbe essere frutto di analisi, non il risultato automatico del decorso di un termine", "Favorisce solo gli enti grandi", "È già previsto da altre norme"],
				correct: 1,
				motivation: "La Corte ha evidenziato problemi di coerenza sistematica: un parere dovrebbe essere il frutto di un'attività di analisi e valutazione, non il risultato automatico del decorso di un termine.",
                category: "Funzione Consultiva"
			},
			{
				question: "Secondo il progetto Foti, chi potrebbe richiedere pareri oltre agli enti territoriali?",
				options: ["Solo le Regioni a statuto speciale", "Anche le amministrazioni centrali e organismi di diritto pubblico", "Solo le società partecipate", "Nessun altro soggetto"],
				correct: 1,
				motivation: "Il progetto propone un'estensione significativa, consentendo anche alle amministrazioni centrali e agli organismi di diritto pubblico di richiedere pareri.",
                category: "Funzione Consultiva"
			},
			{
				question: "Quale delle seguenti delibere ha definito la nozione di contabilità pubblica?",
				options: ["Delibera n. 1/SEZAUT/2021/QMIG", "Delibera n. 5/2004 delle Sezioni riunite", "Delibera n. 3/2024/CONS", "Delibera n. 16/SSRRCO/QMIG/2022"],
				correct: 1,
				motivation: "La delibera n. 5/2004 delle Sezioni riunite ha fornito la definizione di contabilità pubblica come 'complesso di principi e norme che regolano l'attività finanziaria e patrimoniale degli enti pubblici'.",
                category: "Funzione Consultiva"
			},
			{
				question: "La delibera n. 1/SEZAUT/2021/QMIG ha riguardato:",
				options: ["La legittimazione delle Unioni di comuni", "I pareri PNRR", "Le società partecipate", "Il disavanzo di amministrazione"],
				correct: 0,
				motivation: "La delibera n. 1/SEZAUT/2021/QMIG ha stabilito che l'Unione di comuni è legittimata a richiedere pareri limitatamente alle funzioni da essa esercitate.",
                category: "Funzione Consultiva"
			},
			{
				question: "La delibera n. 11/SEZAUT/2020/QMIG ha trattato:",
				options: ["L'indennità dei Sindaci", "La legittimazione del Vicesindaco", "I mutui degli enti locali", "Le assunzioni di personale"],
				correct: 1,
				motivation: "La delibera ha stabilito i requisiti per l'ammissibilità delle richieste di parere inoltrate dal Vicesindaco (impedimento permanente, decadenza o decesso del Sindaco).",
                category: "Funzione Consultiva"
			},
			{
				question: "Quale delibera ha trattato il tema dei divieti assunzionali per enti dissestati?",
				options: ["Delibera n. 14/SEZAUT/2022/QMIG", "Delibera n. 4/SEZAUT/2022/QMIG", "Delibera n. 9/SEZAUT/2023/QMIG", "Delibera n. 15/SEZAUT/2024/QMIG"],
				correct: 1,
				motivation: "La delibera n. 4/SEZAUT/2022/QMIG ha affrontato il tema dell'applicazione dei divieti assunzionali per gli enti dissestati, deficitari e in riequilibrio finanziario pluriennale.",
                category: "Funzione Consultiva"
			},
			{
				question: "La delibera n. 9/SEZAUT/2023/QMIG ha riguardato:",
				options: ["Le società partecipate", "Il ripiano del disavanzo di amministrazione", "Le indennità di funzione", "I mutui bancari"],
				correct: 1,
				motivation: "La delibera n. 9/SEZAUT/2023/QMIG ha trattato le modalità di ripiano del disavanzo di amministrazione, questione rilevante per la gestione degli equilibri di bilancio.",
                category: "Funzione Consultiva"
			},
			{
				question: "Quale delibera ha affrontato la disciplina delle indennità dei Sindaci metropolitani?",
				options: ["Delibera n. 17/SEZAUT/2023/QMIG", "Delibera n. 11/SEZAUT/2023/QMIG", "Delibera n. 14/SEZAUT/2022/QMIG", "Delibera n. 4/2014/SEZAUT"],
				correct: 1,
				motivation: "La delibera n. 11/SEZAUT/2023/QMIG ha trattato la disciplina delle indennità di funzione dei Sindaci metropolitani e dei Comuni delle regioni a statuto ordinario.",
                category: "Funzione Consultiva"
			},
			{
				question: "Quale di queste materie NON rientra nell'ambito della contabilità pubblica secondo la giurisprudenza?",
				options: ["Equilibri di bilancio", "Gestione del patrimonio", "Procedure di concorso senza limiti di spesa", "Indebitamento"],
				correct: 2,
				motivation: "Le procedure concorsuali in sé non rientrano nella contabilità pubblica, salvo che la questione riguardi l'interpretazione di norme della finanza pubblica che pongono limiti di spesa.",
                category: "Funzione Consultiva"
			},
			{
				question: "Il Consiglio delle autonomie locali (CAL) è:",
				options: ["Un organo obbligatorio in tutte le Regioni", "Un organo previsto dall'art. 123 Cost., se istituito a livello regionale", "Un organo statale", "Un organismo dell'ANCI"],
				correct: 1,
				motivation: "Il CAL è previsto dall'art. 123 della Costituzione come organo regionale. Se istituito, le richieste degli enti locali dovrebbero transitare di norma attraverso di esso.",
                category: "Funzione Consultiva"
			},
			{
				question: "Secondo l'art. 123 della Costituzione, il CAL è:",
				options: ["Obbligatorio", "Facoltativo per le Regioni", "Previsto solo per le Regioni a statuto speciale", "Un organo dello Stato"],
				correct: 1,
				motivation: "L'art. 123 Cost. prevede che lo Statuto regionale possa istituire il Consiglio delle autonomie locali, ma non ne impone l'obbligatorietà.",
                category: "Funzione Consultiva"
			},
			{
				question: "Un privato cittadino può richiedere un parere alla Corte dei conti?",
				options: ["Sì, su questioni che lo riguardano", "Sì, se paga le spese", "No, non è legittimato", "Sì, ma solo tramite un avvocato"],
				correct: 2,
				motivation: "I privati cittadini non sono tra i soggetti legittimati. L'elenco è sostanzialmente tassativo e comprende solo enti pubblici territoriali e loro organismi rappresentativi.",
                category: "Funzione Consultiva"
			},
			{
				question: "Una richiesta di parere può riguardare questioni all'esame della Procura contabile?",
				options: ["Sì, anzi è consigliabile", "No, sono inammissibili", "Sì, se autorizzate dal Procuratore", "Solo se non c'è ancora l'invito a dedurre"],
				correct: 1,
				motivation: "Non sono ammissibili richieste su questioni all'esame della Procura contabile che implichino valutazioni di comportamenti amministrativi rilevanti per iniziative giudiziarie.",
                category: "Funzione Consultiva"
			},
			{
				question: "In quale anno è stata introdotta la possibilità per gli enti territoriali di richiedere pareri in materia di contabilità pubblica?",
				options: ["1934", "1939", "2003", "2012"],
				correct: 2,
				motivation: "La legge n. 131 del 2003, nell'ambito della riforma del Titolo V della Costituzione, ha introdotto l'art. 7, comma 8, che consente agli enti territoriali di richiedere pareri.",
                category: "Funzione Consultiva"
			},
			{
				question: "Il Testo unico delle leggi sulla Corte dei conti risale al:",
				options: ["1923", "1934", "1948", "1961"],
				correct: 1,
				motivation: "Il R.D. n. 1214/1934 costituisce il Testo unico delle leggi sulla Corte dei conti, ancora oggi in parte vigente.",
                category: "Funzione Consultiva"
			},
			{
				question: "Il Codice della giustizia contabile è stato approvato nel:",
				options: ["2003", "2012", "2016", "2020"],
				correct: 2,
				motivation: "Il d.lgs. n. 174/2016 ha approvato il Codice della giustizia contabile, disciplinando tra l'altro gli effetti dei pareri consultivi sulla responsabilità amministrativa.",
                category: "Funzione Consultiva"
			},		

            // B04 - Sezione Controllo Enti
            {
                question: "Qual è il fondamento costituzionale della funzione di controllo sugli enti della Corte dei conti?",
                options: ["Articolo 103 della Costituzione", "Articolo 100 della Costituzione", "Articolo 81 della Costituzione", "Articolo 97 della Costituzione"],
                correct: 1,
                motivation: "L'articolo 100 della Costituzione attribuisce alla Corte dei conti la funzione di controllo sugli enti cui lo Stato contribuisce in via ordinaria.",
                category: "Sezione Controllo Enti"
            },
            {
                question: "Secondo la legge 259/1958, quale caratteristica deve avere la contribuzione per assoggettare un ente al controllo?",
                options: ["Deve essere occasionale", "Deve essere straordinaria", "Deve essere periodica e continuativa", "Deve essere solo in natura di beni"],
                correct: 2,
                motivation: "La contribuzione deve avere carattere di periodicità e continuità.",
                category: "Sezione Controllo Enti"
            },
            {
                question: "Il controllo documentale del magistrato sugli enti prevede:",
                options: ["Solo la revisione contabile", "L'obbligo per gli enti di inviare bilanci e relazioni entro termini precisi", "Solo ispezioni fisiche", "Nessun obbligo di trasmissione documentale"],
                correct: 1,
                motivation: "Gli enti devono inviare i bilanci e le relazioni entro 15 giorni dall'approvazione e comunque entro sei mesi e 15 giorni dalla chiusura dell'esercizio.",
                category: "Sezione Controllo Enti"
            },
            {
                question: "Il magistrato può richiedere informazioni e formulare rilievi:",
                options: ["Solo agli organi di revisione", "Solo al Parlamento", "Ai Ministeri, agli organi di vigilanza e ai collegi di revisione", "Solo al Presidente dell'ente"],
                correct: 2,
                motivation: "Il magistrato può richiedere informazioni sia agli organi di revisione che ai Ministeri e agli organi di vigilanza.",
                category: "Sezione Controllo Enti"
            },
            {
                question: "Il controllo ex art. 12 della legge 259/1958 si caratterizza per:",
                options: ["Essere solo successivo", "Prevedere la presenza del magistrato alle sedute degli organi di gestione e revisione", "Essere solo formale", "Non prevedere alcun rilievo"],
                correct: 1,
                motivation: "Il magistrato assiste alle sedute degli organi di gestione e revisione dell'ente.",
                category: "Sezione Controllo Enti"
            },
			{
				question: "Qual è il fondamento costituzionale del controllo della Corte dei Conti sugli enti?",
				options: ["Art. 97 della Costituzione", "Art. 81 della Costituzione", "Art. 100 della Costituzione", "Art. 103 della Costituzione"],
				correct: 2,
				motivation: "L'art. 100 della Costituzione costituisce il fondamento costituzionale della funzione di controllo sugli enti, definendo la Corte dei Conti come organo ausiliario del Parlamento e rinviando alla legge ordinaria per la determinazione dei casi e modi del controllo.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale legge disciplina organicamente il controllo sugli enti a cui lo Stato contribuisce in via ordinaria?",
				options: ["Legge n. 20/1994", "Legge n. 259/1958", "Legge n. 142/1990", "Legge n. 133/2008"],
				correct: 1,
				motivation: "La legge n. 259 del 14 novembre 1958 rappresenta la legge organica di attuazione dell'art. 100 Cost. e disciplina il controllo sugli enti attraverso gli articoli 2 (controllo successivo) e 12 (controllo concomitante).",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quanti sono attualmente gli enti sottoposti al controllo della Sezione Controllo Enti?",
				options: ["Circa 50", "Circa 100", "Oltre 200", "Oltre 500"],
				correct: 2,
				motivation: "Attualmente gli enti sottoposti al controllo della Sezione sono oltre 200, distribuiti in diverse categorie funzionali (assistenziali, culturali, di ricerca, previdenziali, regolatori).",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale sentenza della Corte Costituzionale ha risolto il conflitto di attribuzione tra la Sezione Controllo Enti e il Parlamento?",
				options: ["Sent. n. 466/1993", "Sent. n. 295/1995", "Sent. n. 139/2001", "Sent. n. 184/2016"],
				correct: 2,
				motivation: "La sentenza n. 139/2001 della Corte Costituzionale ha risolto il conflitto di attribuzione, annullando l'abrogazione dell'art. 8 della L. 259/1958 e chiarendo la natura costituzionalmente necessaria del controllo sugli enti.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Entro quanti giorni dall'approvazione gli enti devono trasmettere il bilancio alla Corte dei Conti?",
				options: ["7 giorni", "15 giorni", "30 giorni", "60 giorni"],
				correct: 1,
				motivation: "Gli enti hanno l'obbligo di trasmettere i conti consuntivi e i bilanci entro 15 giorni dalla loro approvazione, come stabilito dall'art. 2 della L. 259/1958.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Qual è il termine massimo assoluto per la trasmissione del bilancio dalla chiusura dell'esercizio?",
				options: ["3 mesi", "4 mesi e 15 giorni", "6 mesi e 15 giorni", "12 mesi"],
				correct: 2,
				motivation: "In ogni caso, la trasmissione deve avvenire entro 6 mesi e 15 giorni dalla chiusura dell'esercizio finanziario. Questo termine è inderogabile e serve a garantire che il controllo possa essere esercitato in tempi ragionevoli.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Entro quanto tempo il magistrato deve depositare la bozza di relazione dal deposito del bilancio?",
				options: ["3 mesi", "4 mesi", "6 mesi", "9 mesi"],
				correct: 2,
				motivation: "Il magistrato deve depositare la bozza di relazione entro 6 mesi dal deposito del bilancio. Questo termine è particolarmente impegnativo considerando tutte le attività istruttorie necessarie.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale articolo della L. 259/1958 disciplina il controllo successivo sulla gestione?",
				options: ["Art. 1", "Art. 2", "Art. 8", "Art. 12"],
				correct: 1,
				motivation: "L'art. 2 della L. 259/1958 disciplina il controllo successivo sulla gestione, stabilendo gli obblighi di trasmissione dei bilanci e le modalità del controllo documentale.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale articolo della L. 259/1958 disciplina il controllo concomitante?",
				options: ["Art. 2", "Art. 5", "Art. 8", "Art. 12"],
				correct: 3,
				motivation: "L'art. 12 della L. 259/1958 disciplina il controllo concomitante, mediante la partecipazione del magistrato delegato alle sedute degli organi di gestione e revisione degli enti.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Qual è il sistema informatico su cui devono essere caricati i bilanci degli enti?",
				options: ["SIOPE", "SICE", "BDAP", "SICOGE"],
				correct: 1,
				motivation: "Il sistema SICE (Sistema Integrato Controllo Enti) è la piattaforma informatica dedicata su cui deve essere caricata tutta la documentazione contestualmente all'invio via PEC alla Sezione.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Chi decide l'assoggettamento di un ente al controllo della Corte dei Conti?",
				options: ["La Sezione Controllo Enti", "Il Presidente della Corte dei Conti", "Il legislatore", "Il Ministero vigilante"],
				correct: 2,
				motivation: "La valutazione sostanziale della necessità di sottoporre un ente al controllo spetta al legislatore, che decide caso per caso valutando le caratteristiche dell'ente, le sue funzioni e i contributi pubblici ricevuti. L'attuazione avviene poi con decreto del Presidente della Repubblica.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale legge attribuisce alla Corte dei Conti i poteri di richiedere atti e disporre ispezioni?",
				options: ["L. 259/1958", "L. 20/1994, art. 3, comma 8", "L. 142/1990", "L. 131/2003"],
				correct: 1,
				motivation: "L'art. 3, comma 8 della legge n. 20 del 14 gennaio 1994 attribuisce alla Corte dei Conti ampi poteri istruttori, consentendole di richiedere qualsiasi atto o notizia e di effettuare ispezioni e accertamenti diretti.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il controllo ex art. 2 è esercitato da:",
				options: ["Magistrati fuori ruolo", "Magistrati che svolgono altre funzioni primarie", "Magistrati in organico presso la Sezione Controllo Enti", "Funzionari amministrativi"],
				correct: 2,
				motivation: "Il controllo ex art. 2 è esercitato da magistrati che fanno parte dell'organico della Sezione Controllo Enti, dedicandosi a tempo pieno a questa attività.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il controllo ex art. 12 è esercitato da:",
				options: ["Magistrati in organico della Sezione", "Magistrati che svolgono altre funzioni primarie come attività aggiuntiva", "Funzionari amministrativi delegati", "Revisori dei conti esterni"],
				correct: 1,
				motivation: "Il controllo ex art. 12 è configurato come una funzione aggiuntiva per magistrati che svolgono altre funzioni primarie. Questa scelta è resa necessaria dal numero molto elevato di enti da controllare (oltre 200).",
                category: "Sezione Controllo Enti"
			},
			{
				question: "I rilievi del magistrato delegato ex art. 12 costituiscono:",
				options: ["Pareri preventivi vincolanti", "Osservazioni senza alcun valore giuridico", "Rilievi non vincolanti ma motivati in materia di legittimità e regolarità", "Provvedimenti esecutivi"],
				correct: 2,
				motivation: "I rilievi del magistrato delegato NON sono pareri preventivi vincolanti. Sono osservazioni motivate in materia di legittimità e regolarità finanziaria. L'ente mantiene autonomia decisionale, salvo il caso di palesi illegittimità o reati.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Chi partecipa alle riunioni del Gruppo di Lavoro?",
				options: ["Magistrati e funzionari assegnati", "Solo il magistrato relatore", "Magistrato relatore, coordinatore, altri magistrati (non i funzionari)", "Solo i coordinatori di gruppo"],
				correct: 2,
				motivation: "Il Gruppo di Lavoro è composto dal magistrato relatore, dal coordinatore del gruppo, da altri colleghi magistrati e, nel caso di art. 12, dal delegato sostituto. Il funzionario NON partecipa alle riunioni, che hanno natura collegiale riservata ai magistrati.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale delle seguenti NON è una categoria di enti controllati?",
				options: ["Enti di ricerca", "Enti previdenziali", "Regioni e Province autonome", "Enti assistenziali e culturali"],
				correct: 2,
				motivation: "Le Regioni e Province autonome sono controllate dalla Sezione delle Autonomie, non dalla Sezione Controllo Enti. La Sezione Enti controlla invece enti di ricerca, previdenziali, assistenziali, culturali, regolatori, etc.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale ente viene citato come esempio di controllo ex art. 12 nel settore della ricerca?",
				options: ["ISTAT", "CNR", "INVALSI", "CIRA"],
				correct: 1,
				motivation: "Il CNR (Consiglio Nazionale delle Ricerche) è citato come ente di ricerca sottoposto a controllo ex art. 12, insieme all'ENEA. Altri enti di ricerca come ISTAT, INVALSI e CIRA rientrano invece nel controllo ex art. 2.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Le casse professionali (ingegneri, avvocati, medici) sono finanziate principalmente da:",
				options: ["Contributi statali", "Contributi degli iscritti", "Imposte locali", "Finanziamenti europei"],
				correct: 1,
				motivation: "Le casse professionali sono finanziate per la stragrande maggioranza dai contributi versati dai singoli iscritti, ma mantengono connotazione pubblicistica per la funzione previdenziale integrativa che svolgono e per i contributi statali che comunque ricevono.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Secondo la sentenza n. 139/2001, gli enti controllati operano spesso in:",
				options: ["Mercati altamente concorrenziali", "Ambiti di protezione che escludono la garanzia del mercato", "Settori completamente privatizzati", "Mercati internazionali"],
				correct: 1,
				motivation: "La Corte Costituzionale ha evidenziato che questi enti operano in 'ambiti di protezione' che escludono la garanzia del mercato e il controllo della concorrenza, rendendo ancora più necessario un controllo pubblico qualificato.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il controllo della Corte dei Conti sugli enti ha come finalità principale:",
				options: ["La sostituzione degli organi di revisione", "Il controllo penale sugli amministratori", "La tutela delle pubbliche finanze e la trasparenza", "La gestione diretta degli enti"],
				correct: 2,
				motivation: "Il controllo ha come finalità costituzionale la tutela delle pubbliche finanze, la trasparenza nella gestione delle risorse pubbliche, l'accountability degli enti verso il Parlamento e la prevenzione di irregolarità gestionali.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il controllo della Corte dei Conti si distingue dalla revisione contabile perché:",
				options: ["È meno approfondito della revisione", "Riguarda solo gli aspetti penali", "Esamina la gestione complessiva, non solo la correttezza formale", "È facoltativo per gli enti"],
				correct: 2,
				motivation: "Il controllo della Corte è più ampio della revisione contabile: riguarda la gestione finanziaria complessiva dell'ente, non solo la correttezza formale dei conti, e ha natura magistratuale e imparziale.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale documento NON deve essere trasmesso obbligatoriamente alla Corte dei Conti?",
				options: ["Bilancio di esercizio", "Relazione dell'organo amministrativo", "Relazione del collegio dei revisori", "Piano industriale triennale"],
				correct: 3,
				motivation: "Gli enti devono trasmettere: conti consuntivi, bilanci di esercizio con conto economico, relazione dell'organo amministrativo e relazione dei revisori. Il piano industriale non è tra i documenti obbligatori, salvo specifica richiesta istruttoria.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "La nozione di 'contribuzione in via ordinaria' ha carattere:",
				options: ["Formale e rigido", "Sostanziale e aspecifico", "Penalistico", "Esclusivamente finanziario"],
				correct: 1,
				motivation: "La nozione ha carattere sostanziale e aspecifico: può essere qualsiasi tipo di erogazione con qualsiasi denominazione. Ciò che conta è la sostanza: risorse pubbliche destinate alla gestione dell'ente con carattere di continuità.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Per quale motivo il controllo ex art. 12 è configurato come funzione aggiuntiva?",
				options: ["Per ridurre i costi della Corte", "Perché è meno importante dell'art. 2", "Per l'elevato numero di enti (oltre 200) e il sotto-organico", "Per scelta discrezionale del Presidente"],
				correct: 2,
				motivation: "Il controllo ex art. 12 è configurato come funzione aggiuntiva per motivi organizzativi: sarebbe impossibile attribuire tutti gli enti (oltre 200) ai soli magistrati in organico della Sezione, che peraltro è in situazione di sotto-organico.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il funzionario amministrativo può esprimere giudizi sulla regolarità della gestione dell'ente?",
				options: ["Sì, in modo vincolante", "Sì, ma solo in assenza del magistrato", "No, ma può formulare proposte e osservazioni al magistrato", "No, non può esprimersi in alcun modo"],
				correct: 2,
				motivation: "Il giudizio sulla regolarità e gestione finanziaria spetta esclusivamente al magistrato, ma il funzionario può formulare proposte e osservazioni tecniche che il magistrato valuterà autonomamente.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale sistema ha sostituito le 'aziende autonome statali' menzionate nella L. 259/1958?",
				options: ["Le regioni", "Il concetto policentrico di pubblica amministrazione a geometria variabile", "Le province", "Le autorità indipendenti"],
				correct: 1,
				motivation: "Le aziende autonome statali menzionate nella legge del 1958 non esistono più, ma sono state sostituite dal concetto policentrico di pubblica amministrazione a geometria variabile, di matrice europea e sostanziale.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Su quali aspetti si concentra particolarmente il controllo del magistrato?",
				options: ["Solo sugli aspetti contabili formali", "Compensi organi, personale, contratti, contenzioso, società controllate", "Solo sul bilancio consolidato", "Esclusivamente sulle entrate"],
				correct: 1,
				motivation: "Il magistrato si concentra su: compensi organi e spese di rappresentanza, spese di personale e reclutamento, modifiche pianta organica, attività contrattuale e Codice contratti, contenzioso, società del gruppo, applicazione TUSP.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il contraddittorio con l'ente avviene quando:",
				options: ["Sempre, per ogni relazione", "Mai, il controllo è unilaterale", "Solo quando la bozza di relazione contiene rilievi", "Solo su richiesta dell'ente"],
				correct: 2,
				motivation: "Il contraddittorio con l'ente avviene quando la bozza di relazione contiene rilievi. L'ente ha la facoltà di presentare controdeduzioni in termini brevi (generalmente 15-20 giorni) che il magistrato deve poi valutare.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale ente è citato come esempio di controllo nel settore radiotelevisivo?",
				options: ["Mediaset", "Sky Italia", "RAI", "Discovery Italia"],
				correct: 2,
				motivation: "La RAI è citata come esempio emblematico di ente che opera in ambito di protezione (servizio radiotelevisivo) e che fu al centro del caso che diede origine alla sentenza costituzionale n. 139/2001.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Cosa significa che il controllo ha 'funzione referente o di referto'?",
				options: ["Che sostituisce gli organi dell'ente", "Che informa il Parlamento sullo stato degli enti", "Che giudica penalmente gli amministratori", "Che approva preventivamente le decisioni"],
				correct: 1,
				motivation: "La funzione referente o di referto significa che la Corte, come organo ausiliario del Parlamento, informa quest'ultimo sullo stato degli enti controllati, fornendo elementi conoscitivi per le determinazioni parlamentari.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "La CSEA (Cassa Servizi Energetici Ambientali) è un esempio di ente sottoposto a controllo per:",
				options: ["Contributi periodici", "Capacità di imporre contribuzioni", "Finanziamenti europei", "Donazioni private"],
				correct: 1,
				motivation: "La CSEA è un esempio di ente sottoposto a controllo perché ha la capacità di imporre contribuzioni a carico dei gestori pubblici delle energie. Questa caratteristica ha determinato la sua trasformazione in ente pubblico economico e la sottoposizione al controllo nel 2018.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "In caso di palesi illegittimità o reati, il magistrato delegato ex art. 12:",
				options: ["Non può intervenire per rispetto dell'autonomia", "Deve intervenire immediatamente e formalmente", "Deve attendere l'approvazione del bilancio", "Può solo segnalare alla Procura"],
				correct: 1,
				motivation: "In caso di palesi illegittimità o ipotesi di reato, il magistrato delegato ha l'obbligo di intervenire immediatamente e formalmente, superando il carattere normalmente non vincolante dei suoi rilievi.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale delle seguenti affermazioni sul controllo ex art. 2 è corretta?",
				options: ["È un controllo preventivo", "È un controllo concomitante", "È un controllo successivo sulla gestione", "È un controllo penale"],
				correct: 2,
				motivation: "Il controllo ex art. 2 è essenzialmente un controllo successivo che si svolge dopo che i fatti gestionali si sono conclusi e sono stati cristallizzati nel bilancio consuntivo dell'ente.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Chi assegna gli enti ai gruppi di lavoro?",
				options: ["I magistrati si auto-assegnano", "Il Presidente della Sezione e il Dirigente", "Il Ministero vigilante", "La Presidenza della Corte dei Conti"],
				correct: 1,
				motivation: "L'assegnazione di ciascun ente a un gruppo di lavoro è effettuata dal Presidente della Sezione e dal Dirigente, sulla base della complessità dell'ente e della rilevanza del contributo statale.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il termine di 6 mesi per la relazione del magistrato è definito dalla docente come:",
				options: ["Facilmente rispettabile", "Di difficile attuazione", "Eccessivamente lungo", "Non vincolante"],
				correct: 1,
				motivation: "Il termine di 6 mesi è definito 'di difficile attuazione' per la complessità degli enti, la necessità di attendere risposte istruttorie, il contraddittorio, il sotto-organico della Sezione e il coordinamento di più soggetti.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale attività NON rientra tra i compiti del funzionario amministrativo?",
				options: ["Esame preliminare del bilancio", "Invio richieste istruttorie", "Partecipazione al Gruppo di Lavoro", "Solleciti agli enti inadempienti"],
				correct: 2,
				motivation: "Il funzionario NON partecipa alle riunioni del Gruppo di Lavoro, che hanno natura collegiale riservata ai magistrati. Svolge invece attività tecniche e amministrative di supporto.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "La specializzazione dei gruppi di lavoro per tipologia di enti serve a:",
				options: ["Ridurre il numero di magistrati necessari", "Sviluppare competenze specifiche su problematiche e normativa di settore", "Evitare conflitti di interesse", "Rispettare le competenze territoriali"],
				correct: 1,
				motivation: "La specializzazione consente di sviluppare competenze specifiche sulle caratteristiche, le problematiche e la normativa di settore di ciascuna categoria di enti, migliorando la qualità del controllo.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale forma di trasmissione è obbligatoria per i bilanci degli enti?",
				options: ["Solo cartacea", "Solo telematica via SICE", "Sia caricamento SICE che invio PEC", "Solo tramite il Ministero vigilante"],
				correct: 2,
				motivation: "La trasmissione deve avvenire sia tramite caricamento sul sistema SICE che mediante invio via PEC alla Sezione Controllo Enti, contestualmente.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il controllo successivo previsto dall'art. 100 Cost. avviene quando:",
				options: ["Durante l'elaborazione del bilancio", "Prima dell'approvazione del bilancio", "Dopo che i fatti gestionali sono cristallizzati nel bilancio", "Durante l'esercizio finanziario"],
				correct: 2,
				motivation: "Il controllo successivo avviene quando i fatti gestionali sono già conclusi e cristallizzati nel bilancio, permettendo alla Corte di rendere edotto il Parlamento sulle problematiche gestionali emerse.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale dei seguenti NON è un ente previdenziale citato?",
				options: ["INPS", "INAIL", "Cassa Avvocati", "ENEA"],
				correct: 3,
				motivation: "L'ENEA è un ente di ricerca, non previdenziale. Gli enti previdenziali citati includono INPS, INAIL e le varie casse professionali (avvocati, ingegneri, geometri, medici, farmacisti).",
				category: "Enti soggetti a controllo"
			},
			{
				question: "Per quale ragione gli enti di piccole dimensioni necessitano particolare attenzione?",
				options: ["Sono più soggetti a frodi", "Hanno bilanci più complessi", "Spesso non hanno strutture burocratiche adeguate e contezza degli obblighi", "Ricevono maggiori contributi"],
				correct: 2,
				motivation: "Gli enti di piccole dimensioni spesso non dispongono di strutture burocratiche adeguate e non hanno piena contezza degli obblighi derivanti dalla sottoposizione al controllo, necessitando quindi di maggiore supporto e sollecitazioni.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il carattere di 'periodicità' della contribuzione significa che:",
				options: ["Deve essere mensile", "Deve essere annuale", "Deve avere carattere di continuità, non necessariamente essere effettiva", "Deve essere trimestrale"],
				correct: 2,
				motivation: "Il carattere di periodicità significa continuità della contribuzione. Non rileva se l'erogazione sia effettivamente avvenuta o comporti solo iscrizione di poste contabili passive: l'importante è la continuità.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Dopo l'approvazione del Gruppo di Lavoro, la relazione viene:",
				options: ["Immediatamente trasmessa al Parlamento", "Depositata in segreteria per l'adunanza della Sezione", "Archiviata", "Inviata all'ente per approvazione"],
				correct: 1,
				motivation: "Dopo l'approvazione del Gruppo di Lavoro e le eventuali modifiche, la relazione viene depositata in segreteria per l'iscrizione all'ordine del giorno dell'adunanza plenaria della Sezione.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Chi firma la relazione finale prima della trasmissione al Parlamento?",
				options: ["Solo il magistrato relatore", "Il coordinatore del gruppo", "Il magistrato relatore e il Presidente della Sezione", "Tutti i componenti del Gruppo"],
				correct: 2,
				motivation: "La relazione definitiva viene firmata dal magistrato relatore e dal Presidente della Sezione prima di essere trasmessa al Parlamento, adempiendosi così alla funzione referente costituzionale.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale settore NON è menzionato tra gli ambiti di protezione privi di controllo di mercato?",
				options: ["Telecomunicazioni", "Trasporto ferroviario", "Commercio al dettaglio", "Servizio postale"],
				correct: 2,
				motivation: "La Corte Costituzionale ha citato come ambiti di protezione: telecomunicazioni, trasporto ferroviario e aereo, servizio postale e servizio radiotelevisivo. Il commercio al dettaglio non è menzionato tra questi.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il magistrato può richiedere informazioni direttamente a:",
				options: ["Solo all'ente controllato", "Solo al collegio dei revisori", "Ministeri, organi di vigilanza e organi di controllo", "Solo al Parlamento"],
				correct: 2,
				motivation: "Il magistrato può richiedere direttamente ai Ministeri vigilanti e agli organi di vigilanza informazioni e formulare rilievi. I componenti dei collegi di revisione hanno l'obbligo di riferire al magistrato.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Quale criterio NON è utilizzato per l'assegnazione degli enti ai gruppi?",
				options: ["Complessità dell'ente", "Rilevanza del contributo statale", "Ubicazione territoriale dell'ente", "Tipologia funzionale"],
				correct: 2,
				motivation: "I criteri di assegnazione sono la complessità dell'ente (consolidato o meno), la rilevanza del contributo statale e la tipologia funzionale per la specializzazione. L'ubicazione territoriale non è un criterio rilevante.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Cosa avviene se l'ente non rispetta i termini di trasmissione del bilancio?",
				options: ["Sanzioni pecuniarie automatiche", "Scioglimento immediato dell'ente", "Solleciti formali e possibile segnalazione al Parlamento", "Nulla, i termini sono indicativi"],
				correct: 2,
				motivation: "Se l'ente non rispetta i termini, la Sezione procede con solleciti formali. Il ritardo comporta difficoltà nel rispetto del termine semestrale per la relazione. Nei casi gravi, può esserci segnalazione agli organi di vigilanza e al Parlamento.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "Il funzionario si relaziona con quale figura dell'ente controllato?",
				options: ["Solo con il presidente", "Con un referente designato (responsabile affari legali, finanziario, etc.)", "Direttamente con il collegio dei revisori", "Con tutti gli organi indistintamente"],
				correct: 1,
				motivation: "Il funzionario si relaziona con un referente individuato dall'ente, che può essere il responsabile degli affari legali, il responsabile finanziario, il direttore dell'ufficio bilancio o altra figura con funzioni analoghe.",
                category: "Sezione Controllo Enti"
			},
			{
				question: "L'adunanza plenaria della Sezione può:",
				options: ["Solo approvare le relazioni", "Approvare, richiedere modifiche o ulteriori approfondimenti", "Solo bocciare le relazioni", "Solo prendere atto senza decidere"],
				correct: 1,
				motivation: "L'adunanza plenaria della Sezione esamina e approva definitivamente la relazione, ma può anche richiedere ulteriori approfondimenti o modifiche prima dell'approvazione finale.",
                category: "Sezione Controllo Enti"
			},
			
            // B05 - Sezione Autonomie
            {
                question: "In quale anno la Sezione delle Autonomie ha assunto la sua attuale denominazione?",
                options: ["1981", "2003", "2000", "1994"],
                correct: 1,
                motivation: "Dal 16 luglio 2003 la Sezione autonomie assume la denominazione attuale.",
                category: "Sezione Autonomie"
            },
            {
                question: "Qual è la funzione principale attribuita alla Sezione delle Autonomie dall'art. 3, comma 6, L. 20/1994?",
                options: ["Funzione di controllo preventivo", "Funzione di referto annuale al Parlamento", "Funzione consultiva", "Funzione giurisdizionale"],
                correct: 1,
                motivation: "L'art. 3, comma 6, L. 20/1994 individua la funzione di referto annuale al Parlamento.",
                category: "Sezione Autonomie"
            },
            {
                question: "Chi presiede la Sezione delle Autonomie?",
                options: ["Il Ministro dell'Economia", "Il Presidente della Corte dei conti", "Il Presidente del Consiglio", "Il Presidente della Camera"],
                correct: 1,
                motivation: "La Sezione delle Autonomie è presieduta dal Presidente della Corte dei conti.",
                category: "Sezione Autonomie"
            },
            {
                question: "Quale tra questi strumenti è utilizzato dalla Sezione delle Autonomie per la funzione di coordinamento?",
                options: ["Decreti ministeriali", "Linee guida e questioni di massima di interesse generale (QMIG)", "Sentenze della Corte costituzionale", "Circolari interne"],
                correct: 1,
                motivation: "Le linee guida e le QMIG sono strumenti principali di coordinamento.",
                category: "Sezione Autonomie"
            },
            {
                question: "Le linee guida della Sezione delle Autonomie sono rivolte principalmente:",
                options: ["Ai cittadini", "Agli Organi di Revisione e altri soggetti individuati dalla normativa", "Ai parlamentari", "Alle imprese private"],
                correct: 1,
                motivation: "Le linee guida sono rivolte agli Organi di Revisione e altri soggetti previsti dalla normativa.",
                category: "Sezione Autonomie"
            },
			{
				question: "In quale anno è stata istituita la Sezione Enti Locali, antenata dell'attuale Sezione delle Autonomie?",
				options: ["1994", "2000", "1981", "2003"],
				correct: 2,
				motivation: "La Sezione Enti Locali è stata istituita nel 1981 con l'art. 13 della L. 786/1981, con il compito di esaminare i consuntivi di Province e Comuni con più di 8.000 abitanti.",
				category: "Sezione delle Autonomie"
			},
			{
				question: "Chi presiede attualmente la Sezione delle Autonomie?",
				options: ["Un Presidente di Sezione nominato dal CDP", "Il Presidente della Corte dei Conti", "Il Presidente delle Sezioni Riunite", "Un magistrato eletto dal collegio"],
				correct: 1,
				motivation: "Dal 16 luglio 2003, la Sezione delle Autonomie è presieduta dal Presidente della Corte dei Conti, coadiuvato da due Presidenti di Sezione.",
				category: "Sezione delle Autonomie"
			},
			{
				question: "Quale norma ha introdotto per la prima volta la funzione di referto al Parlamento?",
				options: ["L. 131/2003", "L. 20/1994", "DL 174/2012", "Delib. SS.RR. 14/2000"],
				correct: 1,
				motivation: "La funzione di referto al Parlamento è stata introdotta dall'art. 3, comma 6, della L. 20/1994, modificando significativamente le funzioni della Corte dei Conti.",
				category: "Sezione delle Autonomie"
			},
			{
				question: "Quante sono le funzioni principali svolte dalla Sezione delle Autonomie?",
				options: ["Due", "Tre", "Cinque", "Quattro"],
				correct: 3,
				motivation: "La Sezione delle Autonomie svolge quattro funzioni principali: referto al Parlamento, coordinamento, consultiva e nomofilachia.",
				category: "Sezione delle Autonomie"
			},
			{
				question: "Con quale frequenza minima la Sezione delle Autonomie deve riferire al Parlamento?",
				options: ["Almeno una volta per esercizio finanziario", "Ogni sei mesi", "Almeno due volte all'anno", "Ogni volta che viene richiesto"],
				correct: 0,
				motivation: "L'art. 9, comma 2, della Delib. SS.RR. 14/2000 stabilisce che la Sezione riferisce al Parlamento 'almeno una volta in ciascun esercizio finanziario'.",
				category: "Funzione di referto"
			},
			{
				question: "Quale deliberazione ha trasformato la Sezione Enti Locali in Sezione Autonomie?",
				options: ["Delib. CDP 554/2000", "Delib. SS.RR. 14/2000", "Delib. SS.RR. 54/2010", "L. 131/2003"],
				correct: 1,
				motivation: "La Delib. SS.RR. 14 giugno 2000, n. 14 ha stabilito che la Sezione Enti Locali assumesse la denominazione di 'Sezione Autonomie', costituendo ancora oggi l'ossatura del sistema organizzativo dei controlli.",
				category: "Sezione delle Autonomie"
			},
			{
				question: "Qual è lo scopo principale della funzione di referto?",
				options: ["Sanzionare gli enti inadempienti", "Dare un quadro esaustivo per adiuvare il Parlamento nelle valutazioni politiche", "Imporre correzioni ai bilanci degli enti", "Controllare la regolarità contabile"],
				correct: 1,
				motivation: "La funzione di referto non innesca processi autocorrettivi ma è una funzione di ausilio per fornire al Parlamento un'analisi tecnica che orienti le scelte legislative.",
				category: "Funzione di referto"
			},
			{
				question: "Chi fa parte del collegio della Sezione delle Autonomie oltre ai magistrati assegnati?",
				options: ["I revisori degli enti locali", "I Presidenti delle Regioni", "I Presidenti delle Sezioni regionali di controllo", "I funzionari del MEF"],
				correct: 2,
				motivation: "Tutti i Presidenti delle Sezioni regionali di controllo partecipano al collegio della Sezione delle Autonomie, garantendo che ogni delibera sia condivisa anche dalle articolazioni territoriali.",
				category: "Sezione delle Autonomie"
			},
			{
				question: "Quale banca dati viene utilizzata principalmente per esaminare i dati di bilancio degli enti?",
				options: ["SIOPE", "BDAP", "ReGis", "NSIS"],
				correct: 1,
				motivation: "La BDAP (Banca Dati delle Amministrazioni Pubbliche), gestita dal MEF Ragioneria dello Stato, è la banca dati principale per i dati di bilancio delle PA.",
				category: "Funzione di referto"
			},
			{
				question: "A cosa serve la banca dati SIOPE?",
				options: ["Raccogliere i dati di bilancio", "Tracciare i flussi di tesoreria", "Gestire i progetti PNRR", "Monitorare la spesa sanitaria"],
				correct: 1,
				motivation: "SIOPE (Sistema Informativo sulle Operazioni degli Enti Pubblici), gestita dalla Banca d'Italia, traccia tutti i flussi monetari in entrata e in uscita degli enti.",
				category: "Funzione di referto"
			},
			{
				question: "Cosa sono le 'linee guida' della Sezione delle Autonomie?",
				options: ["Norme vincolanti per gli enti locali", "Indicazioni con questionari standardizzati per uniformare le relazioni", "Pareri obbligatori sulle leggi regionali", "Sanzioni per inadempimenti"],
				correct: 1,
				motivation: "Le linee guida sono indicazioni rivolte agli Organi di Revisione e altri soggetti, che si traducono in questionari Excel standardizzati per garantire uniformità nazionale nella trasmissione dei dati.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Quale piattaforma viene utilizzata per la compilazione e trasmissione dei questionari?",
				options: ["BDAP", "LimeSurvey", "SIOPE", "ReGis"],
				correct: 1,
				motivation: "LimeSurvey è la piattaforma attraverso cui vengono compilati e trasmessi i questionari Excel alle Sezioni regionali di controllo.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Con quale frequenza vengono aggiornate le linee guida?",
				options: ["Ogni sei mesi", "Ogni due anni", "Annualmente", "Solo in caso di modifiche normative"],
				correct: 2,
				motivation: "Le linee guida vengono approvate e aggiornate ogni anno per recepire novità normative, orientamenti giurisprudenziali e adattarsi al contesto esterno.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Cosa significa l'acronimo QMIG?",
				options: ["Quesiti Ministeriali di Interesse Generale", "Questioni di Massima di Interesse Generale", "Qualificazione Magistrati di Indirizzo Generale", "Questionari di Monitoraggio di Interesse Governativo"],
				correct: 1,
				motivation: "QMIG sta per Questioni di Massima di Interesse Generale, lo strumento attraverso cui la Sezione delle Autonomie compone i contrasti interpretativi.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Chi può richiedere pareri direttamente alla Sezione delle Autonomie?",
				options: ["Qualsiasi ente locale", "Solo le Regioni a statuto speciale", "Le associazioni nazionali rappresentative", "I singoli Comuni sopra i 15.000 abitanti"],
				correct: 2,
				motivation: "Possono richiedere pareri alla Sezione delle Autonomie solo le associazioni nazionali rappresentative (es. ANCI nazionale, Conferenza delle Regioni), non le associazioni regionali o i singoli enti.",
				category: "Funzione consultiva"
			},
			{
				question: "In quale anno è stata attribuita competenza consultiva diretta alla Sezione delle Autonomie?",
				options: ["2003", "2012", "2016", "2019"],
				correct: 2,
				motivation: "L'art. 10-bis del DL 11/2016 ha modificato la L. 131/2003, attribuendo competenza consultiva diretta alla Sezione delle Autonomie, 13 anni dopo la legge originaria.",
				category: "Funzione consultiva"
			},
			{
				question: "Quale deliberazione delle Sezioni Riunite definisce i requisiti di ammissibilità della funzione consultiva?",
				options: ["Delib. SS.RR. 14/2000", "Delib. SS.RR. 39/2014", "Delib. SS.RR. 54/2010", "Delib. SS.RR. 32/2016"],
				correct: 2,
				motivation: "La Delib. SS.RR. n. 54/2010 costituisce la 'pietra miliare' che definisce cosa si intende per contabilità pubblica e quali sono i limiti della funzione consultiva.",
				category: "Funzione consultiva"
			},
			{
				question: "Perché il parere richiesto da ANCI Lazio è stato dichiarato inammissibile?",
				options: ["Per mancanza di generalità del quesito", "Per inammissibilità soggettiva - solo associazioni nazionali possono richiedere pareri", "Per interferenza con giudizi pendenti", "Per materia non rientrante nella contabilità pubblica"],
				correct: 1,
				motivation: "Con la Delib. n. 19/2023/QMIG, la Sezione ha dichiarato il parere inammissibile perché ANCI Lazio è un'associazione regionale, mentre possono rivolgersi alla Sezione solo associazioni nazionali.",
				category: "Funzione consultiva"
			},
			{
				question: "Quali sono i tre requisiti oggettivi di ammissibilità di un quesito?",
				options: ["Urgenza, rilevanza e generalità", "Generalità e astrattezza, non interferenza con giudizi, materia di contabilità pubblica", "Conformità normativa, tempestività e pertinenza", "Legittimità, opportunità e congruità"],
				correct: 1,
				motivation: "I tre requisiti oggettivi fissati dalla Delib. SS.RR. 54/2010 sono: generalità e astrattezza del quesito, non interferenza con giudizi pendenti, e materia di contabilità pubblica in senso stretto.",
				category: "Funzione consultiva"
			},
			{
				question: "Cosa si intende per 'contabilità pubblica in senso stretto'?",
				options: ["Solo la disciplina dei bilanci", "Tutta la materia amministrativa degli enti pubblici", "L'attività finanziaria che precede o segue gli interventi di settore, inclusa la gestione della spesa", "Esclusivamente le entrate tributarie"],
				correct: 2,
				motivation: "Secondo la Delib. SS.RR. 54/2010, la contabilità pubblica comprende: bilanci ed equilibri, entrate, organizzazione finanziaria, patrimonio, gestione spesa, indebitamento, rendicontazione, controlli e modalità di utilizzo risorse pubbliche.",
				category: "Funzione consultiva"
			},
			{
				question: "Quale norma ha introdotto la funzione nomofilattica della Sezione delle Autonomie?",
				options: ["L. 131/2003", "DL 78/2009", "DL 174/2012", "L. 20/1994"],
				correct: 2,
				motivation: "L'art. 6, comma 4, del DL 174/2012 ha attribuito alla Sezione delle Autonomie la funzione nomofilattica, con il potere di emanare delibere di orientamento vincolanti.",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Qual è la principale differenza tra la nomofilachia del DL 78/2009 e quella del DL 174/2012?",
				options: ["Il DL 174/2012 prevede anche la prevenzione dei contrasti, non solo la risoluzione", "Il DL 78/2009 è più vincolante", "Il DL 174/2012 si applica solo alle Regioni", "Non ci sono differenze sostanziali"],
				correct: 0,
				motivation: "Il DL 174/2012 introduce la possibilità di 'prevenire' i contrasti, non solo di risolverli quando già verificati, ampliando la portata rispetto al DL 78/2009 che parla solo di questioni 'già risolte' in modo difforme.",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Chi decide se una questione nomofilattica va alle Sezioni Riunite o alla Sezione delle Autonomie?",
				options: ["Il Consiglio di Presidenza", "Il Presidente della Corte dei Conti", "Le Sezioni territoriali a maggioranza", "Il Ministro della Giustizia"],
				correct: 1,
				motivation: "È il Presidente della Corte dei Conti che valuta caso per caso se deferire la questione alle Sezioni Riunite (eccezionale rilevanza) o alla Sezione delle Autonomie (particolare rilevanza per finanza locale).",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Quale sentenza della Corte Costituzionale ha confermato la legittimità della funzione nomofilattica?",
				options: ["Sent. 18/2019", "Sent. 54/2010", "Sent. 39/2014", "Sent. 32/2016"],
				correct: 2,
				motivation: "La Corte Costituzionale, con la sent. n. 39/2014, ha chiarito che l'art. 6, comma 4, DL 174/2012 non attribuisce potere normativo ma solo funzione interpretativa, quindi è costituzionalmente legittimo.",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Cosa significa che le Sezioni territoriali devono 'conformarsi' alla delibera di orientamento?",
				options: ["Devono applicare letteralmente la delibera senza margini di valutazione", "Devono rispettare il principio di diritto astratto applicandolo al caso concreto", "Devono richiedere autorizzazione per ogni decisione", "Non possono più pronunciarsi su quella materia"],
				correct: 1,
				motivation: "Conformarsi significa rispettare il principio di diritto enunciato in astratto dalla Sezione delle Autonomie, ma l'applicazione al caso concreto spetta alla Sezione territoriale che conosce le specificità locali.",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Quale caso ha portato all'unico intervento nomofilattico esplicitamente preventivo?",
				options: ["Il caso del welfare integrativo", "La questione ANCI Lazio", "La Sentenza di San Valentino sui piani di riequilibrio", "Il referto sul PNRR"],
				correct: 2,
				motivation: "La Delib. 8/2019, emanata dopo la Corte Cost. sent. 18/2019 ('Sentenza di San Valentino'), rappresenta l'unico caso di intervento d'ufficio esplicitamente preventivo per evitare contrasti futuri sull'applicazione della sentenza.",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Qual è l'organico iniziale della Sezione Autonomie fissato nel 2000?",
				options: ["10 magistrati + 1 Presidente", "16 magistrati + 2 Presidenti", "20 magistrati + 3 Presidenti", "12 magistrati + 2 Presidenti"],
				correct: 1,
				motivation: "Nel 2000 l'organico della Sezione Autonomie è stato fissato in 16 unità più 2 Presidenti, come stabilito dalle deliberazioni CDP nn. 554, 555/2000, 712/2000 e 299/2002.",
				category: "Sezione delle Autonomie"
			},
			{
				question: "Quale norma disciplina l'obbligo degli Organi di Revisione di trasmettere relazioni sui bilanci?",
				options: ["Art. 7, c. 8, L. 131/2003", "Art. 1, c. 166, L. 266/2005", "Art. 6, c. 4, DL 174/2012", "Art. 3, c. 6, L. 20/1994"],
				correct: 1,
				motivation: "L'art. 1, comma 166, della L. 266/2005 stabilisce che gli Organi di Revisione degli enti locali trasmettono alle Sezioni regionali relazioni sul bilancio di previsione e sul rendiconto.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Quanti referti obbligatori annuali predispone la Sezione delle Autonomie?",
				options: ["Uno solo, sulla finanza locale complessiva", "Tre: Regioni, Comuni e Province", "Due: uno sulle Regioni e uno sugli enti locali", "Quattro, uno per ciascuna funzione"],
				correct: 2,
				motivation: "La Sezione predispone due referti obbligatori annuali: uno dedicato alle Regioni (Delib. 14/SEZAUT/2024/FRG) e uno agli enti locali (Delib. 13/SEZAUT/2024/FRG).",
				category: "Funzione di referto"
			},
			{
				question: "Quale focus specifico è presente nel referto sulle Regioni del 2024?",
				options: ["Spesa per il personale", "Spesa sanitaria e LEA", "Digitalizzazione", "Opere pubbliche"],
				correct: 1,
				motivation: "Il referto sulle Regioni 2024 include un focus specifico sulla spesa sanitaria e sui Livelli Essenziali di Assistenza (LEA), considerato che la sanità è la principale missione di spesa regionale.",
				category: "Funzione di referto"
			},
			{
				question: "Quale analisi specifica caratterizza il referto sugli enti locali 2024?",
				options: ["Solo l'indebitamento", "Enti in crisi finanziaria e spesa per PNRR", "Esclusivamente la fiscalità locale", "Solo gli equilibri di bilancio"],
				correct: 1,
				motivation: "Il referto 2024 sugli enti locali include analisi specifiche sugli enti in crisi finanziaria (dissesti e piani di riequilibrio) e sulla spesa per PNRR, essendo i Comuni tra i principali soggetti attuatori.",
				category: "Funzione di referto"
			},
			{
				question: "Quando viene approvato tipicamente il referto sugli enti locali?",
				options: ["A fine anno dell'esercizio di riferimento", "Entro marzo dell'anno successivo", "A metà anno con dati quasi in tempo reale", "Dopo due anni dall'esercizio di riferimento"],
				correct: 2,
				motivation: "Il referto sugli enti locali viene approvato tipicamente a metà anno (es. luglio 2024) con dati aggiornati quasi in tempo reale grazie a SIOPE (es. dati al 30 giugno 2024).",
				category: "Funzione di referto"
			},
			{
				question: "Quale deliberazione ha approvato le linee guida 2024 per i bilanci consuntivi delle Regioni?",
				options: ["Delib. n. 8/2024/INPR", "Delib. n. 13/2024/FRG", "Delib. n. 6/2024/INPR", "Delib. n. 14/2024/FRG"],
				correct: 2,
				motivation: "La Delib. n. 6/2024/INPR ha approvato le linee guida per l'esame dei bilanci consuntivi delle Regioni, strutturate in diverse sezioni tematiche.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Quale sezione è presente nelle linee guida 2024 per le Regioni relativa agli eventi sismici?",
				options: ["Sezione VII", "Sezione VIII", "Sezione IX", "Sezione X"],
				correct: 1,
				motivation: "La Sezione VIII delle linee guida sui bilanci consuntivi delle Regioni è dedicata all'analisi dei fondi per eventi sismici del 2016, compilata solo dalle Regioni interessate.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Chi sono i soggetti che compilano i questionari per i bilanci consuntivi degli enti locali?",
				options: ["I Sindaci", "Gli Organi di Revisione", "Le Sezioni regionali di controllo", "I Segretari comunali"],
				correct: 1,
				motivation: "I questionari per i bilanci consuntivi degli enti locali sono compilati dagli Organi di Revisione economico-finanziaria, come previsto dall'art. 1, c. 166, L. 266/2005.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Cosa consente principalmente l'uso dei questionari standardizzati rispetto alle relazioni in forma libera?",
				options: ["Riduce il lavoro degli enti", "Garantisce uniformità nazionale e possibilità di aggregare dati", "Elimina la necessità di controlli", "Sostituisce i giudizi delle Sezioni territoriali"],
				correct: 1,
				motivation: "I questionari standardizzati consentono uniformità sul territorio nazionale nei dati trasmessi e nelle modalità di compilazione, oltre alla possibilità per la Sezione delle Autonomie di aggregare e analizzare i dati.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Chi elabora le linee guida annuali?",
				options: ["Solo i magistrati della Sezione delle Autonomie", "Esclusivamente esperti esterni", "Magistrati della Sezione con funzionari, esperti esterni e magistrati delle Sezioni territoriali", "Il Ministero dell'Economia"],
				correct: 2,
				motivation: "Le linee guida sono elaborate dai magistrati della Sezione delle Autonomie supportati dai funzionari, con la collaborazione di un gruppo di lavoro formato da esperti esterni e magistrati delle Sezioni territoriali.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Cosa è la 'centrale dei pareri'?",
				options: ["Un archivio cartaceo presso il MEF", "Una piattaforma interna dove le Sezioni territoriali caricano i propri pareri", "Un database europeo", "Un ufficio delle Sezioni Riunite"],
				correct: 1,
				motivation: "La centrale dei pareri è una piattaforma interna della Corte dove ogni Sezione territoriale carica i propri pareri, consentendo alla Sezione delle Autonomie di monitorare gli orientamenti e rilevare eventuali contrasti.",
				category: "Funzione di coordinamento"
			},
			{
				question: "In quale modo la Sezione delle Autonomie può essere attivata per una QMIG?",
				options: ["Solo su richiesta del Parlamento", "Solo su richiesta delle Sezioni territoriali o d'ufficio", "Esclusivamente d'ufficio", "Solo su richiesta del Presidente del Consiglio"],
				correct: 1,
				motivation: "La Sezione può intervenire sia su richiesta di una Sezione territoriale che deferisce la questione al Presidente della Corte, sia d'ufficio monitorando la centrale dei pareri.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Quale effetto ha un parere della Sezione delle Autonomie sulle Sezioni territoriali?",
				options: ["Nessun effetto vincolante", "Effetto conformativo", "Effetto sospensivo", "Effetto meramente consultivo"],
				correct: 1,
				motivation: "Secondo la Delib. 32/2016, i pareri della Sezione delle Autonomie hanno 'effetto conformativo' nei confronti delle Sezioni regionali, orientandone l'attività per prevenire contrasti interpretativi.",
				category: "Funzione consultiva"
			},
			{
				question: "Cosa stabilisce la clausola di salvaguardia dell'art. 6, comma 4, DL 174/2012?",
				options: ["Che la Sezione delle Autonomie ha sempre competenza esclusiva", "Che resta salva la competenza delle Sezioni Riunite per casi di eccezionale rilevanza", "Che le Sezioni territoriali possono discostarsi dalle delibere", "Che il Parlamento può intervenire direttamente"],
				correct: 1,
				motivation: "La clausola stabilisce che 'resta salva l'applicazione dell'art. 17, comma 31, DL 78/2009' per i casi di eccezionale rilevanza o quando coinvolgono le Sezioni centrali di controllo, mantenendo la competenza delle Sezioni Riunite.",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Nel caso della Delib. 17/2024 sul welfare integrativo, qual era il contrasto interpretativo?",
				options: ["Sul limite di età per il personale", "Sull'assoggettamento delle risorse welfare ai limiti del CCNL o anche all'art. 23, c. 2, D.Lgs. 75/2017", "Sulla possibilità di assumere personale", "Sul calcolo delle ferie"],
				correct: 1,
				motivation: "Il contrasto riguardava se le risorse per welfare integrativo dovessero essere assoggettate solo ai limiti del CCNL (orientamento tradizionale) o anche al limite dell'art. 23, comma 2, D.Lgs. 75/2017 (tesi innovativa della Sezione Liguria).",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Quale orientamento ha confermato la Sezione delle Autonomie nel caso del welfare integrativo?",
				options: ["L'orientamento innovativo della Sezione Liguria", "Un orientamento intermedio", "L'orientamento tradizionale seguito da tutte le altre Sezioni", "Ha rinviato la decisione alle Sezioni Riunite"],
				correct: 2,
				motivation: "La Sezione delle Autonomie, con la Delib. 17/2024, ha confermato l'orientamento tradizionale (assoggettamento ai soli limiti del CCNL), motivando analiticamente la scelta.",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Perché le funzioni di coordinamento, consultiva e nomofilachia sono descritte come 'intersecate'?",
				options: ["Perché hanno la stessa base normativa", "Perché hanno tutte l'obiettivo comune di garantire uniformità interpretativa nazionale", "Perché sono svolte dallo stesso magistrato", "Perché si svolgono nello stesso periodo dell'anno"],
				correct: 1,
				motivation: "Come sottolineato nella lezione, le tre funzioni sono interconnesse perché rispondono all'esigenza comune di garantire uniformità interpretativa e coordinamento sul territorio nazionale, pur attraverso strumenti diversi.",
				category: "Sezione delle Autonomie"
			},
			{
				question: "Cosa prevede l'art. 9, comma 3, della Delib. SS.RR. 14/2000?",
				options: ["La composizione delle Sezioni Riunite", "Il coordinamento della Sezione con le Sezioni territoriali", "I termini per i referti", "Le sanzioni per inadempimenti"],
				correct: 1,
				motivation: "L'art. 9, comma 3, stabilisce che 'il Presidente cura il coordinamento delle attività della Sezione ed i necessari raccordi con le Sezioni regionali di controllo', fondando normativamente la funzione di coordinamento.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Cosa si intende per 'set minimo di informazioni' delle linee guida?",
				options: ["Un limite massimo di dati richiesti", "Informazioni essenziali che non escludono approfondimenti delle Sezioni territoriali", "Dati obbligatori senza possibilità di integrazione", "Informazioni riservate"],
				correct: 1,
				motivation: "Le linee guida specificano sempre di costituire un 'set minimo' che non esclude né limita la possibilità per le Sezioni territoriali di effettuare approfondimenti e adattamenti alle peculiarità locali.",
				category: "Funzione di coordinamento"
			},
			{
				question: "Quale banca dati gestisce i flussi e progetti PNRR?",
				options: ["BDAP", "SIOPE", "ReGis", "MOP"],
				correct: 2,
				motivation: "ReGis è la banca dati gestita dal MEF che raccoglie le segnalazioni in materia di progetti e investimenti PNRR, utilizzata dalla Sezione per i referti tematici sul Piano.",
				category: "Funzione di referto"
			},
			{
				question: "La banca dati NSIS è gestita da quale ente?",
				options: ["MEF", "Banca d'Italia", "Ministero della Salute", "ISTAT"],
				correct: 2,
				motivation: "NSIS (Nuovo Sistema Informativo Sanitario) è gestita dal Ministero della Salute e contiene i dati economici relativi alla sanità, utilizzati per i referti sulla spesa sanitaria.",
				category: "Funzione di referto"
			},
			{
				question: "Quale deliberazione recente ha riguardato gli organismi partecipati?",
				options: ["Delib. n. 3/2023", "Delib. n. 10/2024", "Delib. n. 4/2024", "Delib. n. 9/2024"],
				correct: 1,
				motivation: "La Delib. n. 10/2024 è un referto tematico dedicato agli organismi partecipati, uno dei referti aggiuntivi elaborati dalla Sezione oltre ai due obbligatori annuali.",
				category: "Funzione di referto"
			},
			{
				question: "In quale periodo dell'anno vengono tipicamente approvate le linee guida?",
				options: ["A fine anno precedente", "Gennaio-Marzo", "Giugno-Luglio", "Settembre-Ottobre"],
				correct: 1,
				motivation: "Le linee guida vengono tipicamente approvate all'inizio dell'anno (gennaio-marzo) per consentire agli enti di compilare i questionari in tempo utile rispetto alle scadenze di approvazione dei bilanci.",
				category: "Funzione di coordinamento"
			},
			{
				question: "La Sentenza di San Valentino della Corte Costituzionale porta quale numero?",
				options: ["Sent. 39/2014", "Sent. 18/2019", "Sent. 54/2010", "Sent. 32/2016"],
				correct: 1,
				motivation: "La Corte Cost. sent. n. 18/2019, denominata 'Sentenza di San Valentino', ha ammesso per la prima volta la possibilità di sollevare questioni di legittimità costituzionale nell'ambito dei piani di riequilibrio finanziario.",
				category: "Funzione di nomofilachia"
			},
			{
				question: "Quale focus specifico sul piano fiscale è presente nel referto enti locali 2024?",
				options: ["Solo l'IMU", "Evasione fiscale e capacità fiscale residua", "Solo la TARI", "Esclusivamente i tributi minori"],
				correct: 1,
				motivation: "Il referto 2024 sugli enti locali include un focus su evasione fiscale e capacità fiscale, per appurare quali spazi fiscali siano ancora disponibili per i Comuni e quale sia la dimensione dell'evasione.",
				category: "Funzione di referto"
			},

            // B06 - Giudizio Primo Grado
            {
                question: "Qual è il fondamento costituzionale della responsabilità amministrativa patrimoniale?",
                options: ["Art. 97 Cost.", "Art. 28 Cost.", "Art. 113 Cost.", "Art. 101 Cost."],
                correct: 1,
                motivation: "L'art. 28 Cost. stabilisce la responsabilità diretta dei funzionari e dipendenti pubblici per atti compiuti in violazione di diritti.",
                category: "Giudizio Primo Grado"
            },
            {
                question: "Quale tra questi NON è una componente strutturale della responsabilità amministrativa?",
                options: ["Rapporto di impiego o servizio", "Danno al patrimonio dell'ente", "Elemento soggettivo (dolo o colpa grave)", "Interesse pubblico prevalente"],
                correct: 3,
                motivation: "L'interesse pubblico prevalente non è una componente strutturale della responsabilità amministrativa.",
                category: "Giudizio Primo Grado"
            },
            {
                question: "La funzione della responsabilità amministrativa è:",
                options: ["Solo risarcitoria", "Solo deterrente", "Risarcitoria, sanzionatoria e deterrente", "Solo disciplinare"],
                correct: 2,
                motivation: "La responsabilità amministrativa ha funzione risarcitoria, sanzionatoria e deterrente.",
                category: "Giudizio Primo Grado"
            },
            {
                question: "Nel processo contabile, la trattazione avviene:",
                options: ["Sempre in più udienze", "Di regola in un'unica udienza pubblica", "Solo per iscritto", "Solo in Camera di Consiglio"],
                correct: 1,
                motivation: "La trattazione avviene di regola in un'unica udienza pubblica.",
                category: "Giudizio Primo Grado"
            },
            {
                question: "Quale tra questi è un incidente processuale che può sospendere la trattazione?",
                options: ["Mancata notifica della sentenza", "Querela di falso", "Mancata produzione di documenti", "Richiesta di rinvio generica"],
                correct: 1,
                motivation: "La querela di falso è un incidente processuale che impone la sospensione.",
                category: "Giudizio Primo Grado"
            },
			{
				question: "Quale articolo della Costituzione stabilisce il fondamento della responsabilità amministrativa dei funzionari pubblici?",
				options: ["Art. 27 Cost.", "Art. 28 Cost.", "Art. 97 Cost.", "Art. 111 Cost."],
				correct: 1,
				motivation: "L'articolo 28 della Costituzione stabilisce che i funzionari e dipendenti dello Stato e degli enti pubblici sono direttamente responsabili, secondo le leggi penali, civili e amministrative, degli atti compiuti in violazione di diritti.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Quanti sono gli elementi costitutivi della responsabilità amministrativa?",
				options: ["3 elementi", "7 elementi", "5 elementi", "4 elementi"],
				correct: 2,
				motivation: "La responsabilità amministrativa si fonda su 5 elementi essenziali: rapporto di impiego/servizio, condotta contraria agli obblighi, danno patrimoniale, nesso causale ed elemento soggettivo (dolo o colpa grave).",
				category: "Responsabilità amministrativa"
			},
			{
				question: "Dal 18 luglio 2020, per quali condotte rileva la colpa grave?",
				options: ["Per tutte le condotte", "Solo per le condotte commissive", "Solo per le condotte omissive", "Non rileva più in nessun caso"],
				correct: 2,
				motivation: "Il D.L. 76/2020 ha modificato la disciplina stabilendo che la colpa grave rileva solo per le condotte omissive. Per le condotte commissive è necessario il dolo.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "La responsabilità amministrativa si trasmette agli eredi?",
				options: ["Sì, sempre", "No, mai", "Solo in caso di illecito arricchimento del de cuius", "Solo se gli eredi erano a conoscenza del fatto"],
				correct: 2,
				motivation: "Secondo la L. 20/1994, la responsabilità amministrativa è personale e intrasmissibile agli eredi, salvo che sussista un illecito arricchimento del de cuius che abbia determinato un correlativo arricchimento degli eredi.",
				category: "Responsabilità amministrativa"
			},
			{
				question: "Quale organo introduce il processo di responsabilità amministrativa?",
				options: ["L'amministrazione danneggiata", "Il giudice d'ufficio", "Il Pubblico Ministero contabile", "Qualsiasi cittadino"],
				correct: 2,
				motivation: "Il processo contabile è ad impulso d'ufficio ed è introdotto dal Pubblico Ministero contabile (Procuratore Regionale), che è l'organo inquirente e requirente della Corte dei Conti.",
				category: "Processo di primo grado"
			},
			{
				question: "Entro quale termine il convenuto deve costituirsi in giudizio?",
				options: ["10 giorni prima dell'udienza", "30 giorni prima dell'udienza", "20 giorni prima dell'udienza", "15 giorni prima dell'udienza"],
				correct: 2,
				motivation: "Secondo l'art. 90 del CGC, il convenuto deve costituirsi depositando il proprio fascicolo almeno 20 giorni prima dell'udienza fissata.",
				category: "Costituzione in giudizio"
			},
			{
				question: "L'udienza di discussione nel processo contabile è pubblica?",
				options: ["No, è sempre riservata", "Sì, a pena di nullità", "Solo se richiesto dalle parti", "A discrezione del Presidente"],
				correct: 1,
				motivation: "L'art. 91 del CGC stabilisce che l'udienza di discussione è pubblica a pena di nullità, salvo che il Presidente disponga lo svolgimento a porte chiuse per ragioni di sicurezza, ordine pubblico o buon costume.",
				category: "Udienza pubblica"
			},
			{
				question: "In quante udienze si svolge normalmente la trattazione nel processo contabile?",
				options: ["Tre udienze", "Due udienze", "Una sola udienza", "Quattro udienze"],
				correct: 2,
				motivation: "L'art. 92 del CGC stabilisce che l'udienza di discussione ha luogo in un unico giorno e solo se necessario è aggiornata a un'udienza immediatamente successiva, secondo il principio di concentrazione.",
				category: "Trattazione"
			},
			{
				question: "Cosa si intende per contumacia del convenuto?",
				options: ["Il convenuto è presente ma non parla", "Il convenuto è citato ma non si costituisce", "Il convenuto si costituisce in ritardo", "Il convenuto non è stato citato"],
				correct: 1,
				motivation: "Il convenuto regolarmente citato che non si costituisce depositando la comparsa di risposta è dichiarato contumace dal collegio ai sensi dell'art. 93 del CGC.",
				category: "Contumacia"
			},
			{
				question: "Le sentenze devono essere notificate al contumace?",
				options: ["No, nessun atto va notificato", "Solo le ordinanze", "Sì, personalmente", "Solo su richiesta"],
				correct: 2,
				motivation: "Secondo l'art. 93, comma 8, del CGC, le sentenze devono essere notificate alla parte contumace personalmente, mentre gli altri atti processuali non sono soggetti a notificazione.",
				category: "Contumacia"
			},
			{
				question: "Fino a quando il contumace può costituirsi nel processo?",
				options: ["Entro 20 giorni dalla citazione", "Fino alla pubblicazione della sentenza", "Fino all'udienza di discussione", "Non può più costituirsi"],
				correct: 2,
				motivation: "L'art. 93, comma 9, del CGC prevede che la parte dichiarata contumace può costituirsi fino all'udienza di discussione mediante deposito di comparsa, procura e documenti o mediante comparizione all'udienza.",
				category: "Contumacia"
			},
			{
				question: "Uno stato di malattia è considerato causa non imputabile per la riammissione in termini?",
				options: ["Sì, sempre", "No, perché è possibile rilasciare procura ad hoc", "Solo se grave", "Solo se certificata da medico pubblico"],
				correct: 1,
				motivation: "Secondo la Cassazione (sent. Sez. II, n. 7/2014), uno stato di malattia non è considerato causa non imputabile perché è comunque possibile rilasciare una procura ad hoc per la costituzione.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Chi ha giurisdizione sulla querela di falso?",
				options: ["La Corte dei Conti", "Il TAR", "Il giudice ordinario", "Il Consiglio di Stato"],
				correct: 2,
				motivation: "La giurisdizione sulla querela di falso spetta esclusivamente al giudice ordinario, come stabilito dalla Cassazione Sez. Unite, sent. n. 4479/1988. La Corte dei Conti deve sospendere il processo.",
				category: "Querela di falso"
			},
			{
				question: "Entro quale termine deve essere depositata la prova della querela di falso proposta?",
				options: ["20 giorni", "60 giorni", "30 giorni", "45 giorni"],
				correct: 2,
				motivation: "L'art. 105, comma 3, del CGC prevede che la prova dell'avvenuta proposizione della querela di falso deve essere depositata entro 30 giorni dalla scadenza del termine fissato dal collegio.",
				category: "Querela di falso"
			},
			{
				question: "Entro quale termine va riattivato il processo dopo la definizione della querela di falso?",
				options: ["3 mesi dal passaggio in giudicato", "60 giorni dalla pubblicazione", "6 mesi dalla comunicazione", "1 anno dalla decisione"],
				correct: 0,
				motivation: "Secondo l'art. 105, comma 6, del CGC, il processo deve essere riattivato entro 3 mesi dal passaggio in giudicato della sentenza che definisce il giudizio di falso, altrimenti si estingue.",
				category: "Querela di falso"
			},
			{
				question: "Qual è la durata massima della sospensione concordata del processo?",
				options: ["1 mese", "6 mesi", "3 mesi", "2 mesi"],
				correct: 2,
				motivation: "L'art. 106, comma 2, del CGC prevede che la sospensione su istanza concorde delle parti può essere disposta per una sola volta e per un periodo non superiore a 3 mesi.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "La pendenza del processo penale obbliga sempre alla sospensione del processo contabile?",
				options: ["Sì, sempre", "No, solo se c'è pregiudizialità giuridica", "Solo su richiesta delle parti", "Solo se il PM lo richiede"],
				correct: 1,
				motivation: "Secondo le Sezioni Riunite (sent. 11/2018 e 13/2019), non sussiste automaticamente l'obbligo di sospensione. Occorre pregiudizialità giuridica, non semplice pregiudizialità logica. Il processo contabile è autonomo.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Cosa accade in caso di morte del convenuto durante il processo?",
				options: ["Il processo prosegue con gli eredi", "Il processo si sospende automaticamente", "Il processo si interrompe", "Il processo si estingue immediatamente"],
				correct: 2,
				motivation: "L'art. 108 del CGC prevede che il processo si interrompe in caso di morte della parte. Il PM può poi chiedere l'estinzione se non sussiste illecito arricchimento del de cuius (art. 109, co. 6).",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Entro quale termine va riassunto il processo dopo l'interruzione?",
				options: ["1 anno", "6 mesi", "3 mesi", "60 giorni"],
				correct: 2,
				motivation: "Il processo interrotto deve essere riassunto entro 3 mesi dalla possibilità di riassunzione, come previsto dall'art. 109 del CGC. In mancanza, il processo si estingue.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Su chi grava l'onere della prova nel processo contabile?",
				options: ["Solo sul Pubblico Ministero", "Solo sul convenuto", "Sulle parti", "Sul giudice d'ufficio"],
				correct: 2,
				motivation: "L'art. 94 del CGC stabilisce che l'onere di fornire le prove concernenti i fatti posti a fondamento delle domande e delle eccezioni è a carico delle parti.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Quali mezzi di prova sono espressamente esclusi nel processo contabile?",
				options: ["Testimonianza e documenti", "Giuramento e interrogatorio formale", "Consulenza tecnica e presunzioni", "Documenti e perizie"],
				correct: 1,
				motivation: "L'art. 94, comma 4, del CGC esclude espressamente il giuramento e l'interrogatorio formale, che sono prove legali incompatibili con l'esigenza di ricostruire la verità processuale.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Il giudice contabile può utilizzare sentenze penali come mezzo di prova?",
				options: ["No, mai", "Solo se passate in giudicato", "Sì, come prove atipiche", "Solo le sentenze di assoluzione"],
				correct: 2,
				motivation: "Il giudice contabile può utilizzare sentenze di altri giudizi, comprese quelle penali e di patteggiamento, come prove atipiche per desumere elementi sulla sussistenza del dolo o della colpa.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "La consulenza tecnica è un mezzo di prova nel processo contabile?",
				options: ["Sì, è il principale mezzo di prova", "No, è un ausilio per il giudice", "Solo se richiesta dalle parti", "Solo in appello"],
				correct: 1,
				motivation: "La consulenza tecnica non è un mezzo di prova ma un ausilio al giudice per acquisire conoscenze tecniche, valutare situazioni di fatto e valutare le prove fornite (può essere valutativa o percipiente).",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Come valuta il giudice le prove nel processo contabile?",
				options: ["Secondo regole di prova legale", "Secondo il prudente apprezzamento", "Solo in base a documenti pubblici", "Secondo quanto richiesto dal PM"],
				correct: 1,
				motivation: "L'art. 95 del CGC stabilisce che il giudice valuta le prove secondo il suo prudente apprezzamento, senza essere vincolato da regole di prova legale.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "I fatti non contestati dalle parti necessitano di prova?",
				options: ["Sì, sempre", "No, per il principio di non contestazione", "Solo se richiesto dal giudice", "Solo in primo grado"],
				correct: 1,
				motivation: "Secondo l'art. 95, comma 1, del CGC, il giudice può porre a fondamento della decisione i fatti non specificamente contestati dalle parti costituite, applicando il principio di non contestazione.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Dove viene deliberata la decisione della causa?",
				options: ["In udienza pubblica", "In camera di consiglio nel segreto", "Nell'ufficio del Presidente", "In aula magna"],
				correct: 1,
				motivation: "L'art. 101 del CGC prevede che la decisione è deliberata in camera di consiglio nel segreto, con la partecipazione dei soli giudici che hanno assistito alla discussione.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Qual è l'ordine di votazione nella deliberazione?",
				options: ["Presidente, relatore, altri giudici", "Altri giudici, presidente, relatore", "Relatore, altri giudici, presidente", "Presidente, altri giudici, relatore"],
				correct: 2,
				motivation: "L'art. 101, comma 4, del CGC stabilisce che il primo a votare è il relatore, quindi gli altri giudici e infine il Presidente.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Entro quale termine deve essere redatta la sentenza?",
				options: ["30 giorni dalla decisione", "45 giorni dalla decisione", "60 giorni dalla decisione", "90 giorni dalla decisione"],
				correct: 1,
				motivation: "L'art. 103, comma 1, del CGC prevede che la sentenza deve essere redatta non oltre il 45° giorno dalla decisione della causa.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Entro quale termine deve essere depositata la sentenza?",
				options: ["30 giorni dalla camera di consiglio", "45 giorni dalla camera di consiglio", "60 giorni dalla camera di consiglio", "90 giorni dalla camera di consiglio"],
				correct: 2,
				motivation: "Secondo l'art. 100, comma 2, del CGC, la sentenza deve essere depositata in segreteria entro 60 giorni dalla conclusione della camera di consiglio.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Qual è lo scopo del rito abbreviato?",
				options: ["Accelerare la decisione finale", "Deflazione del contenzioso mediante pagamento", "Ridurre le spese processuali", "Semplificare l'istruttoria"],
				correct: 1,
				motivation: "L'art. 130 del CGC prevede il rito abbreviato come procedimento speciale con funzione deflattiva del contenzioso, consentendo la rapida definizione mediante pagamento di una somma ridotta.",
				category: "Rito abbreviato"
			},
			{
				question: "Quale percentuale massima del danno può essere offerta in primo grado con il rito abbreviato?",
				options: ["30%", "50%", "70%", "60%"],
				correct: 1,
				motivation: "L'art. 130, comma 1, del CGC prevede che in primo grado la somma non può essere superiore al 50% del danno contestato in citazione.",
				category: "Rito abbreviato"
			},
			{
				question: "Quale percentuale minima del danno deve essere offerta in appello con il rito abbreviato?",
				options: ["50%", "60%", "80%", "70%"],
				correct: 3,
				motivation: "L'art. 130, comma 1, del CGC stabilisce che in appello la somma non può essere inferiore al 70% del danno contestato in citazione.",
				category: "Rito abbreviato"
			},
			{
				question: "Quando deve essere proposta la richiesta di rito abbreviato in primo grado?",
				options: ["Nella prima comparsa di risposta", "Entro 30 giorni dalla citazione", "All'udienza di discussione", "Entro 20 giorni dall'udienza"],
				correct: 0,
				motivation: "L'art. 130, comma 2, del CGC prevede che in primo grado la richiesta deve essere proposta, a pena di decadenza, nella prima comparsa di risposta.",
				category: "Rito abbreviato"
			},
			{
				question: "Quando è inammissibile il rito abbreviato?",
				options: ["Quando il danno supera 100.000 euro", "Nei casi di doloso arricchimento del danneggiante", "Quando ci sono più convenuti", "Mai, è sempre ammissibile"],
				correct: 1,
				motivation: "L'art. 130, comma 4, del CGC stabilisce che il rito abbreviato è inammissibile nei casi di doloso arricchimento del danneggiante (es. attività extra-istituzionale non autorizzata).",
				category: "Rito abbreviato"
			},
			{
				question: "Entro quale termine deve essere versata la somma nel rito abbreviato?",
				options: ["20 giorni", "30 giorni", "45 giorni", "60 giorni"],
				correct: 1,
				motivation: "L'art. 130, comma 3, del CGC prevede che il collegio stabilisce un termine perentorio per il versamento non superiore a 30 giorni.",
				category: "Rito abbreviato"
			},
			{
				question: "Quanti sono i mezzi di impugnazione previsti dal CGC?",
				options: ["2", "3", "5", "4"],
				correct: 3,
				motivation: "L'art. 177 del CGC prevede 4 mezzi di impugnazione: appello, opposizione di terzo, revocazione e ricorso per cassazione (solo per motivi inerenti alla giurisdizione).",
				category: "Impugnazioni"
			},
			{
				question: "Qual è il termine per proporre appello contro una sentenza notificata?",
				options: ["30 giorni dalla notificazione", "60 giorni dalla notificazione", "90 giorni dalla notificazione", "6 mesi dalla notificazione"],
				correct: 1,
				motivation: "L'art. 178, commi 1-2, del CGC stabilisce che il termine per proporre appello contro una sentenza notificata è di 60 giorni dalla notificazione.",
				category: "Appello"
			},
			{
				question: "Qual è il termine per proporre appello contro una sentenza non notificata?",
				options: ["6 mesi dalla pubblicazione", "1 anno dalla pubblicazione", "2 anni dalla pubblicazione", "60 giorni dalla pubblicazione"],
				correct: 1,
				motivation: "L'art. 178, comma 4, del CGC prevede che l'appello contro una sentenza non notificata deve essere proposto entro 1 anno dalla pubblicazione, a pena di decadenza.",
				category: "Appello"
			},
			{
				question: "Entro quale termine deve essere depositato l'atto di impugnazione?",
				options: ["15 giorni dall'ultima notificazione", "20 giorni dall'ultima notificazione", "30 giorni dall'ultima notificazione", "60 giorni dall'ultima notificazione"],
				correct: 2,
				motivation: "L'art. 180, comma 1, del CGC stabilisce che l'atto di impugnazione deve essere depositato, a pena di decadenza, entro 30 giorni dall'ultima notificazione.",
				category: "Impugnazioni"
			},
			{
				question: "L'appello sospende l'esecuzione della sentenza impugnata?",
				options: ["No, mai", "Solo se richiesto", "Sì, ex lege", "Solo per le sentenze di condanna"],
				correct: 2,
				motivation: "L'art. 190, comma 4, del CGC prevede che la proposizione dell'appello sospende ex lege l'esecuzione della sentenza impugnata, salvo che il giudice disponga l'esecutività provvisoria.",
				category: "Appello"
			},
			{
				question: "Da chi deve essere sottoscritto l'atto di appello?",
				options: ["Da qualsiasi avvocato", "Solo dal convenuto personalmente", "Da avvocato ammesso al patrocinio in Cassazione", "Dal Pubblico Ministero"],
				correct: 2,
				motivation: "L'art. 190, comma 3, del CGC prevede, a pena di inammissibilità, che l'atto di appello sia sottoscritto da un avvocato ammesso al patrocinio innanzi alla Corte di Cassazione.",
				category: "Appello"
			},
			{
				question: "Possono essere proposte nuove domande in appello?",
				options: ["Sì, liberamente", "Solo con autorizzazione del giudice", "No, sono dichiarate inammissibili d'ufficio", "Solo se concordate con il PM"],
				correct: 2,
				motivation: "L'art. 193 del CGC stabilisce che nel giudizio di appello non possono essere proposte nuove domande né nuove eccezioni non rilevabili d'ufficio e, se proposte, sono dichiarate inammissibili d'ufficio.",
				category: "Appello"
			},
			{
				question: "Possono essere prodotti nuovi documenti in appello?",
				options: ["Sì, sempre", "No, salvo causa non imputabile", "Solo su autorizzazione", "Solo entro 30 giorni"],
				correct: 1,
				motivation: "L'art. 194 del CGC prevede che non possono essere prodotti nuovi documenti, salvo che la parte dimostri di non averli potuto produrre in primo grado per causa a sé non imputabile.",
				category: "Appello"
			},
			{
				question: "Cosa accade alle domande non riproposte in appello?",
				options: ["Vengono esaminate d'ufficio", "Si intendono rinunciate", "Possono essere riproposte in Cassazione", "Restano valide"],
				correct: 1,
				motivation: "L'art. 195 del CGC stabilisce che le domande e le eccezioni non accolte in primo grado che non sono espressamente riproposte in appello si intendono rinunciate.",
				category: "Appello"
			},
			{
				question: "Cosa accade se l'appellante non compare all'udienza?",
				options: ["Il processo prosegue in sua assenza", "Si rinvia una volta, poi appello improcedibile", "Si dichiara contumace", "Si estingue il processo"],
				correct: 1,
				motivation: "L'art. 196 del CGC prevede che se l'appellante non compare, il collegio rinvia una volta; se non compare neppure alla nuova udienza, l'appello è dichiarato improcedibile anche d'ufficio.",
				category: "Appello"
			},
			{
				question: "Entro quale termine va riassunto il processo dopo rinvio al primo giudice?",
				options: ["60 giorni", "90 giorni", "3 mesi", "6 mesi"],
				correct: 2,
				motivation: "L'art. 199, comma 3, del CGC stabilisce che le parti devono riassumere il processo nel termine perentorio di 3 mesi dalla notificazione o comunicazione della sentenza di appello.",
				category: "Appello"
			},
			{
				question: "L'appello dichiarato inammissibile può essere riproposto?",
				options: ["Sì, entro 60 giorni", "Sì, se pendono i termini", "No, per il principio di consunzione", "Solo con autorizzazione"],
				correct: 2,
				motivation: "L'art. 198 del CGC stabilisce che l'appello dichiarato inammissibile o improcedibile non può essere riproposto, anche se non è decorso il termine di 60 giorni, per il principio di consunzione dell'impugnazione.",
				category: "Appello"
			},
			{
				question: "Dopo quanto tempo di inattività si estingue il processo?",
				options: ["6 mesi", "1 anno", "2 anni", "3 anni"],
				correct: 1,
				motivation: "L'art. 111, comma 3, del CGC prevede che il processo si estingue quando è decorso 1 anno senza che sia stata fatta alcuna istanza di fissazione dell'udienza o altro atto di procedura.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "L'estinzione del processo estingue anche l'azione?",
				options: ["Sì, sempre", "No, l'azione resta", "Solo se dichiarata dal giudice", "Dipende dalle circostanze"],
				correct: 1,
				motivation: "L'art. 111, comma 5, del CGC stabilisce espressamente che l'estinzione del processo non estingue l'azione, che può quindi essere riproposta.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Qual è il termine di prescrizione dell'azione di responsabilità amministrativa?",
				options: ["3 anni", "5 anni", "10 anni", "7 anni"],
				correct: 1,
				motivation: "La L. 20/1994 stabilisce che l'azione di responsabilità amministrativa si prescrive in 5 anni dal compimento del fatto, salvo occultamento doloso (dalla scoperta).",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Quale atto interrompe la prescrizione dell'azione di responsabilità?",
				options: ["La notizia di danno", "L'invito a fornire deduzioni", "La delibera di giunta", "Il parere dell'avvocatura"],
				correct: 1,
				motivation: "L'invito a fornire deduzioni notificato dal Pubblico Ministero è il principale atto interruttivo della prescrizione, salvo che l'amministrazione abbia già notificato una messa in mora stragiudiziale.",
                category: "Giudizio Primo Grado"
			},
			{
				question: "Qual è il termine per il ricorso per Cassazione contro sentenza non notificata?",
				options: ["3 mesi dalla pubblicazione", "6 mesi dalla pubblicazione", "1 anno dalla pubblicazione", "60 giorni dalla pubblicazione"],
				correct: 1,
				motivation: "L'art. 178, comma 5, del CGC stabilisce che il ricorso per Cassazione contro una sentenza non notificata deve essere proposto entro 6 mesi dalla pubblicazione.",
				category: "Ricorso per Cassazione"
			},

            // B07 - Sezioni Riunite in sede giurisdizionale
            {
                question: "Cosa significa etimologicamente il termine 'nomofilachia'?",
                options: ["Creazione della norma", "Protezione della legge", "Applicazione della sanzione", "Interpretazione soggettiva"],
                correct: 1,
                motivation: "'Nomofilachia' deriva dal greco e significa protezione/custodia della legge, non creazione della norma (che è nomopoiesi).",
                category: "Sezioni Riunite"
            },
            {
                question: "Qual è la funzione principale della nomofilachia?",
                options: ["Creare nuove norme", "Garantire la certezza del diritto e l'uniformità dell'interpretazione", "Sanzionare i giudici", "Gestire il bilancio"],
                correct: 1,
                motivation: "La nomofilachia mira a garantire la certezza del diritto e l'uniformità interpretativa.",
                category: "Sezioni Riunite"
            },
            {
                question: "Quale organo, secondo l'art. 65 del r.d. 12/1941, assicura l'esatta osservanza e l'uniforme interpretazione della legge?",
                options: ["Consiglio di Stato", "Corte dei conti", "Corte di Cassazione", "TAR"],
                correct: 2,
                motivation: "L'art. 65 attribuisce questa funzione alla Corte di Cassazione.",
                category: "Sezioni Riunite"
            },
            {
                question: "La nomofilachia si distingue dalla nomopoiesi perché:",
                options: ["La prima crea norme, la seconda le interpreta", "La prima interpreta e protegge la legge, la seconda la crea", "Sono sinonimi", "Entrambe sono funzioni legislative"],
                correct: 1,
                motivation: "La nomofilachia protegge/interpreta la legge, la nomopoiesi la crea.",
                category: "Sezioni Riunite"
            },
            {
                question: "L'uniformità dell'interpretazione della legge è:",
                options: ["Un effetto della nomopoiesi", "Un corollario dell'esatta osservanza", "Un compito del Parlamento", "Un principio solo amministrativo"],
                correct: 1,
                motivation: "L'uniformità è conseguenza dell'esatta osservanza della legge.",
                category: "Sezioni Riunite"
            },
			{
				question: "Qual è l'origine etimologica del termine 'nomofilachia'?",
				options: ["Dal latino 'nomos' (ordine) e 'filia' (amore)", "Dal greco 'nomos' (norma) e 'filasso' (proteggere con lo sguardo)", "Dal greco 'nomos' (legge) e 'philia' (amicizia)", "Dal latino 'nomina' (nome) e 'filare' (custodire)"],
				correct: 1,
				motivation: "Il termine 'nomofilachia' deriva dal greco 'nomos' che significa norma e dal verbo 'filasso' che indica l'azione del proteggere con lo sguardo. Letteralmente significa 'protezione della legge'.",
				category: "Nomofilachia - Concetti Generali"
			},
			{
				question: "Quale articolo definisce la funzione nomofilattica della Corte di Cassazione?",
				options: ["Art. 111 Cost.", "Art. 65 R.D. n. 12/1941", "Art. 100 Cost.", "Art. 103 Cost."],
				correct: 1,
				motivation: "L'art. 65 del R.D. 30 gennaio 1941 n. 12 (legge sull'ordinamento giudiziario) stabilisce che 'La Corte di Cassazione assicura l'esatta osservanza e l'uniforme interpretazione della legge, nonché l'unità del diritto oggettivo nazionale'.",
				category: "Nomofilachia - Normativa"
			},
			{
				question: "Cosa si intende per 'esatta osservanza' nella funzione nomofilattica?",
				options: ["L'applicazione letterale della disposizione normativa", "L'interpretazione più vicina alla ratio legis tra le possibili interpretazioni", "L'osservanza della giurisprudenza consolidata", "L'applicazione uniforme della norma sul territorio"],
				correct: 1,
				motivation: "L'esatta osservanza presuppone che tra le possibili interpretazioni di una disposizione normativa, quella esatta è quella più vicina alla ratio legis, cioè allo scopo del legislatore. È una selezione interpretativa qualificata.",
				category: "Nomofilachia - Concetti Generali"
			},
			{
				question: "Qual è la differenza fondamentale tra 'disposizione' e 'norma'?",
				options: ["La disposizione è l'enunciato del legislatore, la norma è il risultato dell'interpretazione", "Non c'è differenza, sono sinonimi", "La disposizione è generale, la norma è specifica", "La norma è scritta, la disposizione è consuetudinaria"],
				correct: 0,
				motivation: "La disposizione è il testo scritto fornito dal legislatore (complesso di segni linguistici), mentre la norma è il precetto giuridico che emerge dall'interpretazione della disposizione. La nomofilachia opera sul piano dell'interpretazione.",
				category: "Nomofilachia - Concetti Generali"
			},
			{
				question: "Cosa distingue la 'nomofilachia' dalla 'nomotesia'?",
				options: ["La nomofilachia crea norme, la nomotesia le interpreta", "La nomofilachia conserva l'interpretazione prevalente, la nomotesia la innova", "La nomofilachia è amministrativa, la nomotesia è giurisdizionale", "Non c'è differenza sostanziale"],
				correct: 1,
				motivation: "La nomofilachia tende a conservare l'interpretazione prevalente e parte da un panorama interpretativo consolidato. La nomotesia invece introduce interpretazioni innovative che rinnovano il precedente. Entrambe operano sul piano dell'interpretazione.",
				category: "Nomofilachia - Concetti Generali"
			},
			{
				question: "Quale tipo di nomofilachia opera su iniziativa delle parti attraverso il sistema delle impugnazioni?",
				options: ["Nomofilachia positiva", "Nomofilachia collaborativa", "Nomofilachia negativa", "Nomofilachia preventiva"],
				correct: 2,
				motivation: "La nomofilachia negativa (o per impugnazione) è quella che si produce attraverso la cassazione delle sentenze contenenti interpretazioni inesatte, su iniziativa delle parti. Presenta limiti perché non tutte le sentenze vengono impugnate.",
				category: "Nomofilachia - Evoluzione"
			},
			{
				question: "Secondo l'art. 111, comma 8 Cost., per quali motivi è ammesso ricorso in Cassazione contro le decisioni della Corte dei conti?",
				options: ["Per tutti i motivi di merito e di legittimità", "Solo per violazione di legge", "Per i soli motivi inerenti alla giurisdizione", "Per vizi di procedura e violazione di legge"],
				correct: 2,
				motivation: "L'art. 111, comma 8 Cost. stabilisce che 'Contro le decisioni del Consiglio di Stato e della Corte dei conti il ricorso in Cassazione è ammesso per i soli motivi inerenti alla giurisdizione'. Questo consacra il pluralismo nomofilattico.",
				category: "Pluralismo Giurisdizionale"
			},
			{
				question: "Quale organo è competente per i conflitti di giurisdizione tra diversi ordini giurisdizionali?",
				options: ["Consiglio di Stato", "Corte Costituzionale", "Sezioni Riunite della Corte dei conti", "Corte di Cassazione"],
				correct: 3,
				motivation: "La Corte di Cassazione rimane il giudice dei conflitti di giurisdizione tra i diversi ordini. Può sindacare quando un giudice speciale 'straripa' dalla propria giurisdizione invadendo quella altrui.",
				category: "Pluralismo Giurisdizionale"
			},
			{
				question: "In caso di difetto assoluto di giurisdizione, cosa accade?",
				options: ["Il giudice rimette gli atti alla Corte Costituzionale", "Il giudice afferma la propria giurisdizione in una sfera riservata al legislatore/amministrazione o la nega quando gli spetterebbe", "Il procedimento viene sospeso", "Si applica l'analogia legis"],
				correct: 1,
				motivation: "Il difetto assoluto di giurisdizione si verifica quando il giudice afferma la propria giurisdizione nella sfera riservata al legislatore o all'amministrazione, oppure la nega quando invece gli spetterebbe (denegata giustizia).",
				category: "Eccesso di Potere Giurisdizionale"
			},
			{
				question: "Quale sentenza della Cassazione ha introdotto il concetto di giurisdizione in senso 'dinamico'?",
				options: ["Cass. SS.UU. n. 2242/2015", "Cass. SS.UU. n. 30254/2008", "Cass. SS.UU. n. 500/1999", "Cass. SS.UU. n. 1/2020"],
				correct: 1,
				motivation: "La sentenza Cass. SS.UU. n. 30254/2008 ha sviluppato il concetto di giurisdizione dinamica, affermando che è norma sulla giurisdizione non solo quella che individua i presupposti dell'attribuzione del potere, ma anche quella che stabilisce le forme di tutela.",
                category: "Sezioni Riunite"
			},
			{
				question: "Secondo la Corte Costituzionale, il bilancio è qualificato come:",
				options: ["Un atto amministrativo complesso", "Un bene della vita costituzionalmente tutelato", "Una fonte normativa secondaria", "Un atto politico"],
				correct: 1,
				motivation: "La Corte costituzionale con la sentenza n. 184/2016 ha qualificato il bilancio come 'bene della vita costituzionalmente tutelato' e 'bene pubblico', aprendo la strada a una tutela giurisdizionale oggettiva.",
                category: "Sezioni Riunite"
			},
			{
				question: "Quali sono i tre attributi essenziali del bilancio secondo la Corte Costituzionale (sent. n. 157/2020)?",
				options: ["Legalità, trasparenza, efficacia", "Copertura, pareggio, equilibrio", "Sincerità, equilibrio, continuità", "Preventività, universalità, pubblicità"],
				correct: 2,
				motivation: "La Corte costituzionale ha individuato il trittico: sincerità (sent. n. 192/2012), equilibrio dinamico (sent. n. 60/2013) e continuità (sent. n. 274/2017). Questi tre elementi formano una struttura logica inscindibile.",
                category: "Sezioni Riunite"
			},
			{
				question: "Quale norma costituzionale è definita 'norma-ponte' per la disciplina delle verifiche sui saldi?",
				options: ["Art. 81, co. 6 Cost.", "Art. 100 Cost.", "Art. 5, co. 1, lett. a) L. cost. n. 1/2012", "Art. 111, co. 8 Cost."],
				correct: 2,
				motivation: "L'art. 5, co. 1, lett. a) della L. cost. n. 1/2012 è la norma-ponte che impone alla legge rinforzata di disciplinare le 'verifiche preventive e consuntive' sull'andamento della finanza pubblica.",
                category: "Sezioni Riunite"
			},
			{
				question: "Quanti sono i livelli della struttura dei conti secondo la lezione?",
				options: ["Due livelli", "Tre livelli", "Quattro livelli", "Cinque livelli"],
				correct: 2,
				motivation: "La struttura dei conti si articola su quattro livelli: 1) pezze giustificative, 2) scritture contabili (contabilità analitica), 3) rendiconto e bilancio, 4) i saldi (che misurano le variazioni nel tempo).",
                category: "Sezioni Riunite"
			},
			{
				question: "Quale articolo del Codice di giustizia contabile disciplina la giurisdizione in unico grado delle Sezioni Riunite?",
				options: ["Art. 10 C.g.c.", "Art. 11, co. 6 C.g.c.", "Art. 123 C.g.c.", "Art. 145 C.g.c."],
				correct: 1,
				motivation: "L'art. 11, comma 6, del Codice di giustizia contabile elenca le sei tipologie di materie su cui le Sezioni Riunite in speciale composizione decidono in unico grado in sede giurisdizionale.",
				category: "Giurisdizione in Unico Grado"
			},
			{
				question: "Quale lettera dell'art. 11, co. 6 C.g.c. riguarda i piani di riequilibrio finanziario?",
				options: ["Lettera a)", "Lettera e)", "Lettera c)", "Lettera f)"],
				correct: 0,
				motivation: "La lettera a) dell'art. 11, co. 6 C.g.c. disciplina i giudizi in materia di piani di riequilibrio degli enti territoriali e ammissione al Fondo di rotazione per la stabilità finanziaria degli enti locali.",
				category: "Giurisdizione in Unico Grado"
			},
			{
				question: "La ricognizione delle amministrazioni pubbliche operata dall'ISTAT è disciplinata da quale lettera dell'art. 11, co. 6 C.g.c.?",
				options: ["Lettera d)", "Lettera a)", "Lettera b)", "Lettera f)"],
				correct: 2,
				motivation: "La lettera b) riguarda la ricognizione ISTAT delle amministrazioni pubbliche, ai soli fini dell'applicazione della normativa sul contenimento della spesa pubblica. È stata oggetto di rinvii pregiudiziali alla CGUE (ordd. nn. 5 e 6/2021).",
				category: "Giurisdizione in Unico Grado"
			},
			{
				question: "Quale principio giustifica la giurisdizione delle Sezioni Riunite sugli atti soggetti a controllo?",
				options: ["Principio di sussidiarietà", "Principio del parallelismo", "Principio di specialità", "Principio di separazione dei poteri"],
				correct: 1,
				motivation: "Il principio del parallelismo stabilisce che dove c'è controllo vincolante della Corte dei conti, là consegue automaticamente la giurisdizione delle Sezioni Riunite in caso di contestazione. È stato affermato dalla sent. n. 5/2021.",
				category: "Giurisdizione in Unico Grado"
			},
			{
				question: "Qual è la lettera più importante e ampia dell'art. 11, co. 6 C.g.c.?",
				options: ["Lettera a) - piani di riequilibrio", "Lettera c) - fondazioni liriche", "Lettera e) - impugnazioni deliberazioni sezioni regionali", "Lettera f) - materie ulteriori"],
				correct: 2,
				motivation: "La lettera e) è la più importante perché comprende tutte le impugnazioni conseguenti alle deliberazioni delle sezioni regionali di controllo in materia di contabilità pubblica, applicando il principio del parallelismo.",
				category: "Giurisdizione in Unico Grado"
			},
			{
				question: "Chi può ricorrere davanti alle Sezioni Riunite secondo la sent. n. 32/2020?",
				options: ["Solo il Procuratore generale", "Solo il soggetto controllato", "Solo l'amministrazione pubblica interessata", "Chiunque vi abbia interesse, inclusi terzi qualificati"],
				correct: 3,
				motivation: "La sent. n. 32/2020 ha riconosciuto un'ampia legittimazione: può ricorrere 'chiunque vi abbia interesse', includendo il Procuratore generale, il soggetto controllato e terzi interessati (cittadini, soci privati, consiglieri in carica).",
				category: "Giurisdizione in Unico Grado"
			},
			{
				question: "Quante sono le fasi del giudizio in unico grado?",
				options: ["Una fase unica", "Due fasi: officiosa e contenziosa", "Tre fasi: istruttoria, decisoria e impugnatoria", "Quattro fasi progressive"],
				correct: 1,
				motivation: "Il giudizio in unico grado ha una struttura bifasica peculiare: una prima fase officiosa (davanti alle Sezioni Regionali di Controllo) obbligatoria, e una seconda fase eventuale contenziosa (davanti alle Sezioni Riunite).",
                category: "Sezioni Riunite"
			},
			{
				question: "Chi stabilisce le priorità per l'esame dei conti all'inizio di ogni anno?",
				options: ["Il Ministro dell'Economia", "Il Procuratore generale", "Il Presidente della sezione giurisdizionale", "Il giudice relatore"],
				correct: 2,
				motivation: "Secondo l'art. 145, co. 2 C.g.c., il presidente della sezione giurisdizionale stabilisce all'inizio di ogni anno, con proprio decreto, le priorità per l'esame dei conti sulla base di criteri oggettivi e predeterminati.",
				category: "Fase Officiosa - Procedura"
			},
			{
				question: "Quale articolo del T.U. 1934 attribuisce al giudice relatore il diritto di chiedere informazioni ai ministeri?",
				options: ["Art. 40 T.U. 1934", "Art. 73 T.U. 1934", "Art. 16 T.U. 1934", "Art. 74 T.U. 1934"],
				correct: 2,
				motivation: "L'art. 16 del T.U. 1934 (già nella legge istitutiva del 1862) stabilisce il diritto della Corte dei conti di chiedere informazioni e documenti ai ministeri, alle amministrazioni e agli agenti che da esse dipendono.",
				category: "Fase Officiosa - Poteri Istruttori"
			},
			{
				question: "Entro quanti giorni dal deposito della relazione il presidente deve fissare l'udienza?",
				options: ["15 giorni", "20 giorni", "30 giorni", "60 giorni"],
				correct: 2,
				motivation: "L'art. 147, co. 2 C.g.c. stabilisce che entro 30 giorni dal deposito della relazione, il presidente fissa con decreto l'udienza per la discussione del giudizio e assegna termine per deposito memorie e conclusioni del PM.",
				category: "Fase Officiosa - Termini"
			},
			{
				question: "Quale effetto produce la relazione di deferimento del giudice relatore?",
				options: ["Vincola completamente il collegio", "Non ha alcun effetto vincolante", "Pre-perimetra l'oggetto della decisione (prima perimetrazione)", "Sostituisce la decisione finale"],
				correct: 2,
				motivation: "La relazione di deferimento pre-perimetra l'oggetto della decisione, costituendo la prima perimetrazione del thema decidendum. La seconda perimetrazione avverrà con i motivi del ricorso nella fase contenziosa.",
				category: "Fase Officiosa - Relazione"
			},
			{
				question: "Quale forma ha la decisione della Sezione regionale di controllo?",
				options: ["Forma di deliberazione amministrativa", "Forma di parere obbligatorio", "Forma di sentenza", "Forma di decreto presidenziale"],
				correct: 2,
				motivation: "La decisione ha forma di sentenza, come riconosciuto dalla giurisprudenza (SS.RR. n. 4/2023, C. cost. n. 18/2019). Questa qualificazione comporta conseguenze giuridiche rilevanti, inclusa la formazione del giudicato.",
				category: "Fase Officiosa - Decisione"
			},
			{
				question: "Quale tipo di giudicato si forma in caso di parifica positiva?",
				options: ["Giudicato sostanziale", "Giudicato parziale", "Giudicato formale", "Giudicato costituzionale"],
				correct: 2,
				motivation: "In caso di parifica positiva si forma un giudicato formale: il conto non può più essere ri-esaminato per la stessa annualità (ne bis in idem), ma l'effetto normativo rimane quello della presunzione di legittimità dell'atto amministrativo.",
				category: "Fase Officiosa - Giudicato"
			},
			{
				question: "Quale effetto si produce in caso di parifica negativa?",
				options: ["Sospensione del bilancio", "Giudicato sostanziale con inversione della presunzione di legittimità", "Nullità del rendiconto", "Commissariamento dell'ente"],
				correct: 1,
				motivation: "In caso di parifica negativa (o parziale) si produce un giudicato sostanziale che inverte la presunzione di legittimità amministrativa, accerta il diverso fatto di gestione e determina effetti conformativi immediati.",
				category: "Fase Officiosa - Effetti"
			},
			{
				question: "Quale sentenza della Corte Costituzionale ha affermato l'obbligo di 'appropriate variazioni del bilancio di previsione'?",
				options: ["Sent. n. 184/2016", "Sent. n. 250/2013", "Sent. n. 39/2014", "Sent. n. 274/2017"],
				correct: 1,
				motivation: "La sent. n. 250/2013 della Corte costituzionale ha affermato che l'amministrazione deve adottare 'appropriate variazioni del bilancio di previsione' per recuperare l'equilibrio turbato, come principale misura correttiva.",
				category: "Fase Officiosa - Effetti Conformativi"
			},
			{
				question: "Chi è sempre parte necessaria nella fase contenziosa davanti alle Sezioni Riunite?",
				options: ["La Sezione regionale di controllo", "Il Ministro dell'Economia", "Il Procuratore generale della Corte dei conti", "Il difensore civico"],
				correct: 2,
				motivation: "Secondo l'art. 127, co. 2 C.g.c., il Procuratore generale è sempre parte necessaria interveniente nel giudizio. La sua assenza comporta l'inammissibilità del ricorso.",
				category: "Fase Contenziosa - Parti"
			},
			{
				question: "La Sezione regionale di controllo è parte processuale nella fase contenziosa?",
				options: ["Sì, è parte necessaria", "Sì, è parte eventuale", "No, la notificazione è solo 'ai fini conoscitivi'", "Sì, ma solo come interventore"],
				correct: 2,
				motivation: "La Sezione regionale di controllo NON è parte processuale nella fase contenziosa. L'art. 124, co. 1 C.g.c. stabilisce che la notificazione è prevista solo 'ai fini conoscitivi', non come vocatio in iudicium.",
				category: "Fase Contenziosa - Parti"
			},
			{
				question: "Su quale modello processuale è strutturato il ricorso introduttivo alle Sezioni Riunite?",
				options: ["Processo civile ordinario", "Processo penale", "Processo amministrativo (art. 40 c.p.a.)", "Processo costituzionale"],
				correct: 2,
				motivation: "L'art. 123 C.g.c. struttura il ricorso ricalcando il modello del processo amministrativo (art. 40 c.p.a.), con indicazione delle parti, della deliberazione impugnata, dei motivi specifici e delle conclusioni.",
				category: "Fase Contenziosa - Ricorso"
			},
			{
				question: "Cosa opera la 'seconda perimetrazione' del thema decidendum?",
				options: ["La sentenza finale", "La relazione del giudice relatore", "I motivi specifici di ricorso", "Le conclusioni del PM"],
				correct: 2,
				motivation: "I motivi specifici di ricorso operano la seconda perimetrazione del thema decidendum. La prima perimetrazione era stata operata dalla relazione del giudice relatore nella fase officiosa.",
				category: "Fase Contenziosa - Oggetto"
			},
			{
				question: "Quale natura ha il giudizio davanti alle Sezioni Riunite secondo la sent. n. 9/2021?",
				options: ["Giudizio di legittimità pura", "Appello amministrativo", "Revisio prioris instantiae peculiare", "Ricorso straordinario"],
				correct: 2,
				motivation: "La sent. n. 9/2021 ha qualificato il giudizio come una 'revisio prioris instantiae peculiare', cioè un controllo riferito al giudizio del primo grado sulla base di motivi specifici, senza automaticità dell'effetto devolutivo.",
				category: "Fase Contenziosa - Natura"
			},
			{
				question: "Quale principio del C.g.c. garantisce la tutela piena ed effettiva?",
				options: ["Art. 1 - Principio di legalità", "Art. 2 - Principio di effettività", "Art. 3 - Principio di concentrazione", "Art. 4 - Principio del contraddittorio"],
				correct: 1,
				motivation: "L'art. 2 C.g.c. stabilisce il principio di effettività: 'La giurisdizione contabile assicura una tutela piena ed effettiva secondo i principi della Costituzione e del diritto europeo'.",
				category: "Fase Contenziosa - Principi"
			},
			{
				question: "Cosa significa il 'carattere dinamico' del giudizio secondo le SS.RR. (sentt. nn. 4/2020, 7/2021)?",
				options: ["Il giudizio si svolge in tempi rapidi", "È possibile tenere conto di fatti sopravvenuti e ius superveniens", "Il giudizio può essere sospeso e ripreso", "Si applica il diritto vivente"],
				correct: 1,
				motivation: "Il carattere dinamico significa che il giudizio non valuta staticamente il mero ripristino della legalità, ma valuta la congruità dei percorsi di risanamento considerando fatti sopravvenuti, ius superveniens e la natura del disavanzo.",
				category: "Fase Contenziosa - Cognizione"
			},
			{
				question: "Quale funzione svolge il Pubblico Ministero contabile nella fase officiosa?",
				options: ["È un semplice organo consultivo", "È parte in senso sostanziale con poteri partecipativi e istruttori", "È il difensore dell'amministrazione", "È un testimone qualificato"],
				correct: 1,
				motivation: "Il PM contabile è parte in senso sostanziale, dotato di poteri partecipativi ed eccezionalmente istruttori (art. 74 T.U. 1214/1934). Può chiedere atti, disporre accertamenti e proporre impugnazioni.",
				category: "Pubblico Ministero"
			},
			{
				question: "Quali interessi rappresenta il Pubblico Ministero contabile?",
				options: ["Solo l'interesse dello Stato", "Solo l'interesse dell'ente controllato", "Interessi adespoti al bilancio e dello Stato-ordinamento nella triplice unità", "Solo l'interesse dei cittadini"],
				correct: 2,
				motivation: "Il PM rappresenta: 1) interessi adespoti al bilancio, 2) lo Stato-ordinamento nella triplice unità (giuridica, finanziaria, economica - C. cost. n. 89/2017), 3) la comunità territoriale, 4) relazioni con UE.",
				category: "Pubblico Ministero"
			},
			{
				question: "Il PM può rinunciare agli atti nel giudizio in unico grado?",
				options: ["Sì, liberamente", "Sì, con autorizzazione del Procuratore generale", "No, gli interessi sono pubblici e indisponibili", "Sì, ma solo nella fase contenziosa"],
				correct: 2,
				motivation: "Secondo la sent. n. 20/2021/DELC, il PM non può rinunciare agli atti perché rappresenta interessi pubblici indisponibili. La rinuncia è priva di efficacia giuridica in un giudizio necessario.",
				category: "Pubblico Ministero"
			},
			{
				question: "In quale giudizio il PM è presente necessariamente sin dall'inizio?",
				options: ["Giudizio di conto", "Giudizio sui piani di riequilibrio", "Giudizio di parifica", "Giudizio sui rendiconti"],
				correct: 2,
				motivation: "Il PM è presente necessariamente nel giudizio di parifica sin dal primo momento, per effetto dell'art. 40 del T.U. 34/1934. Negli altri controlli la presenza può essere eventuale.",
				category: "Pubblico Ministero"
			},
			{
				question: "Chi ha giurisdizione sulla legittimità della dichiarazione di dissesto secondo le SS.RR. (sent. n. 32/2020)?",
				options: ["Sempre il giudice amministrativo", "Sempre la Corte dei conti", "La Corte dei conti se si contesta il presupposto tecnico-giuridico del dissesto", "La Corte Costituzionale"],
				correct: 2,
				motivation: "Le SS.RR. (sent. n. 32/2020) affermano la giurisdizione contabile quando si contesta il presupposto tecnico-giuridico del dissesto (requisiti art. 243-quater TUEL), mentre spetta al GA la cognizione sui vizi propri dell'atto.",
				category: "Conflitti di Giurisdizione"
			},
			{
				question: "Quale principio giustifica la giurisdizione contabile sul dissesto?",
				options: ["Principio di specialità", "Principio del 'blocco di materia' (contabilità pubblica)", "Principio di sussidiarietà", "Principio del ne bis in idem"],
				correct: 1,
				motivation: "Il principio del 'blocco di materia' stabilisce che la contabilità pubblica resta unitariamente nella giurisdizione contabile. Se c'è stata impugnazione della deliberazione della Sezione regionale, consegue la giurisdizione sugli atti susseguenti.",
				category: "Conflitti di Giurisdizione"
			},
			{
				question: "Secondo il Consiglio di Stato (sent. n. 8108/2020), chi ha giurisdizione sulla dichiarazione di dissesto?",
				options: ["La Corte dei conti", "Il giudice amministrativo", "Il giudice ordinario", "Il Tribunale dei Ministri"],
				correct: 1,
				motivation: "Il Consiglio di Stato (sent. n. 8108/2020) ha trattenuto la giurisdizione amministrativa considerando la dichiarazione di dissesto un provvedimento amministrativo spontaneo di autotutela, negando lo 'stretto collegamento' con la funzione di controllo.",
				category: "Conflitti di Giurisdizione"
			},
			{
				question: "Secondo la sent. n. 184/2022, su cosa si forma il giudicato contabile?",
				options: ["Sulla legittimità dell'atto amministrativo", "Sulla legittimità della legge", "Sulla legittimità del saldo ad una certa data", "Su tutto il bilancio pluriennale"],
				correct: 2,
				motivation: "La sent. n. 184/2022 chiarisce che il giudicato contabile copre solo la legittimità del saldo ad una certa data, non la legittimità dell'atto (competenza GA) né della legge (competenza C. cost.).",
				category: "Conflitti di Giurisdizione"
			},
			{
				question: "Chi può giudicare la legittimità costituzionale di una legge di spesa?",
				options: ["La Corte dei conti", "Il giudice amministrativo", "La Corte Costituzionale", "Le Sezioni Riunite"],
				correct: 2,
				motivation: "La Corte Costituzionale giudica la legittimità delle leggi rispetto alla Costituzione. La Corte dei conti giudica la legittimità dei saldi, il GA la legittimità degli atti amministrativi. Sono competenze distinte.",
				category: "Conflitti di Giurisdizione"
			},
			{
				question: "Quale T.A.R. ha affermato l'esistenza di una riserva costituzionale di giurisdizione contabile?",
				options: ["T.A.R. Lazio", "T.A.R. Lombardia (sent. n. 1088/2022)", "T.A.R. Campania", "T.A.R. Sicilia"],
				correct: 1,
				motivation: "Il T.A.R. Lombardia con la sent. n. 1088/2022 ha affermato che la lesione di un interesse legittimo non è da sola sufficiente, sussistendo una riserva costituzionale di giurisdizione contabile in materia di contabilità pubblica.",
				category: "Conflitti di Giurisdizione"
			},
			{
				question: "Quale sentenza della CGUE ha ritenuto che le Sezioni regionali svolgano funzione amministrativa?",
				options: ["CGUE C-500/2019", "CGUE C-161/21 (Camerota, 4.10.2021)", "CGUE C-300/2020", "CGUE C-100/2018"],
				correct: 1,
				motivation: "La CGUE con la sent. C-161/21 (Camerota) del 4 ottobre 2021 ha dichiarato irricevibile l'ordinanza di rimessione della SRC Campania, affermando che le Sezioni regionali svolgerebbero 'funzione amministrativa e non giurisdizionale'.",
                category: "Sezioni Riunite"
			},
			{
				question: "Quale è il principale punto di debolezza del sistema secondo la lezione?",
				options: ["Eccessiva durata dei giudizi", "Costi elevati", "Mancata definizione generale delle parti necessarie nella fase officiosa", "Incompetenza dei magistrati"],
				correct: 2,
				motivation: "Il principale punto di debolezza è la mancata definizione in via generale delle parti necessarie nella fase officiosa. Questo può integrare un vulnus al diritto di difesa e alimentare i dubbi sulla natura giurisdizionale.",
                category: "Sezioni Riunite"
			},
			{
				question: "Quale equilibrio viene bilanciato nella fase officiosa secondo la giurisprudenza?",
				options: ["Art. 24 e art. 111 Cost.", "Art. 97 Cost. (buon andamento) e art. 111 Cost. (giusto processo)", "Art. 100 e art. 103 Cost.", "Art. 3 e art. 53 Cost."],
				correct: 1,
				motivation: "La fase officiosa con contraddittorio limitato risponde a un bilanciamento tra l'art. 97 Cost. (buon andamento della PA) che richiede celerità, e l'art. 111 Cost. (giusto processo) che richiede contraddittorio pieno.",
                category: "Sezioni Riunite"
			},
			{
				question: "Cosa giustifica il contraddittorio limitato nella fase officiosa?",
				options: ["La natura amministrativa del procedimento", "Esigenze di celerità e compatibilità con il ciclo politico del bilancio", "La riservatezza dei dati finanziari", "La complessità tecnica delle verifiche"],
				correct: 1,
				motivation: "Il contraddittorio limitato risponde a esigenze di celerità ed economia processuale, imponendo che il controllo si chiuda in tempi compatibili con il ciclo politico del bilancio (approvazione bilancio successivo, misure correttive).",
				category: "Fase Officiosa - Contraddittorio"
			},
			{
				question: "Quale articolo del D.lgs. 118/2011 disciplina il riaccertamento ordinario?",
				options: ["Art. 2, co. 4", "Art. 3, co. 4", "Art. 5, co. 2", "Art. 10, co. 1"],
				correct: 1,
				motivation: "L'art. 3, comma 4, del D.lgs. n. 118/2011 disciplina il riaccertamento ordinario dei residui, che deve avvenire al termine del successivo esercizio finanziario per verificare l'attendibilità delle poste.",
                category: "Sezioni Riunite"
			},
			{
				question: "Quando si presume l'inattendibilità delle poste di bilancio?",
				options: ["Dopo 6 mesi", "Se non riaccertate al termine del successivo esercizio finanziario", "Dopo 3 anni", "Solo in caso di dissesto"],
				correct: 1,
				motivation: "Secondo il D.lgs. 118/2011, le poste si presumono inattendibili se non sono riaccertate al termine del successivo esercizio finanziario attraverso il riaccertamento ordinario.",
                category: "Sezioni Riunite"
			},
			{
				question: "Il termine per il ripiano del disavanzo è riferito:",
				options: ["Al momento dell'emersione del disavanzo", "Alla natura del disavanzo", "All'approvazione del bilancio", "Alla fine del mandato"],
				correct: 1,
				motivation: "La sent. n. 6/2021/EL ha chiarito che i termini per il ripiano del disavanzo non devono essere riferiti al 'quando' della sua emersione, ma alla natura dello stesso.",
                category: "Sezioni Riunite"
			},
			{
				question: "I ritardi imputabili a terzi e non all'ente come sono valutati nel piano di riequilibrio?",
				options: ["Sono sempre causa di rigetto", "Non inficiano il piano", "Comportano sospensione", "Richiedono nuova delibera"],
				correct: 1,
				motivation: "La sent. n. 7/2021/EL ha affermato che il piano di riequilibrio non è inficiato da ritardi finanziari imputabili a terzi e non riconducibili alla volontà dell'ente locale, applicando il carattere dinamico del giudizio.",
                category: "Sezioni Riunite"
			},
			{
				question: "L'approvazione tardiva del piano di riequilibrio comporta:",
				options: ["Automatico rigetto del piano", "Possibile rigetto se inadeguato", "Nullità della delibera", "Commissariamento immediato"],
				correct: 1,
				motivation: "La sent. n. 32/2020 ha stabilito che l'approvazione tardiva del piano di riequilibrio può comportare il rigetto se le misure sono inadeguate, valutando la congruità complessiva del percorso di risanamento.",
                category: "Sezioni Riunite"
			},
			
			// B08 - Sezioni riunite controllo
			{
				question: "Quale articolo della Costituzione disciplina il controllo della Corte dei conti sulla gestione del bilancio dello Stato?",
				options: ["Art. 81 Cost.", "Art. 97 Cost.", "Art. 100 Cost.", "Art. 119 Cost."],
				correct: 2,
				motivation: "L'art. 100 Cost. stabilisce che la Corte dei conti esercita il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del bilancio dello Stato, partecipando anche al controllo sulla gestione finanziaria degli enti sovvenzionati dallo Stato.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Qual è il quorum minimo di votanti richiesto per le deliberazioni delle Sezioni Riunite?",
				options: ["10 votanti", "12 votanti", "15 votanti", "20 votanti"],
				correct: 2,
				motivation: "Le Sezioni Riunite decidono con non meno di quindici votanti, come previsto dall'art. 3 del R.D. 1214/1934. Questo quorum garantisce la rappresentatività e l'autorevolezza delle decisioni.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Entro quale data le Sezioni Riunite devono definire il quadro programmatico annuale delle indagini di finanza pubblica?",
				options: ["30 settembre", "31 ottobre", "30 novembre", "31 dicembre"],
				correct: 1,
				motivation: "Entro il 30 ottobre di ciascun anno, le Sezioni Riunite definiscono il quadro di riferimento programmatico delle indagini di finanza pubblica e dei controlli sulla gestione, come previsto dal Regolamento per l'organizzazione delle funzioni di controllo.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Con quale periodicità la Corte dei conti trasmette al Parlamento le relazioni sulle coperture finanziarie delle leggi?",
				options: ["Mensile", "Bimestrale", "Quadrimestrale", "Semestrale"],
				correct: 2,
				motivation: "L'art. 17, comma 9, della legge n. 196/2009 prevede che ogni quattro mesi la Corte dei conti trasmetta alle Camere una relazione sulla tipologia delle coperture finanziarie adottate nelle leggi approvate nel periodo considerato.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale norma ha introdotto il giudizio di parificazione dei rendiconti regionali?",
				options: ["L. 20/1994", "L. 131/2003", "D.L. 174/2012", "D.L. 78/2009"],
				correct: 2,
				motivation: "Il D.L. 174/2012 ha introdotto la regionalizzazione dei controlli, includendo il giudizio di parificazione dei rendiconti delle Regioni, estendendo così a livello regionale il modello già applicato allo Stato.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "In quante vesti funzionali operano le Sezioni Riunite?",
				options: ["Due: controllo e giurisdizione", "Tre: controllo, consultiva e deliberante", "Quattro: controllo, consultiva, deliberante e giurisdizionale", "Cinque: controllo, consultiva, deliberante, giurisdizionale e nomofilattica"],
				correct: 1,
				motivation: "Le Sezioni Riunite operano in tre diverse vesti: sede di controllo (funzione referente verso il Parlamento), sede consultiva (pareri su atti normativi) e sede deliberante (autonomia organizzativa).",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale articolo del R.D. 1214/1934 disciplina il procedimento di parificazione del rendiconto generale dello Stato?",
				options: ["Artt. 25-27", "Artt. 30-32", "Artt. 39-41", "Artt. 50-52"],
				correct: 2,
				motivation: "Gli articoli 39-41 del R.D. 1214/1934 disciplinano rispettivamente: la verifica del rendiconto (art. 39), la deliberazione a Sezioni Riunite (art. 40) e il contenuto della relazione al Parlamento (art. 41).",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Con quale frequenza la Corte dei conti riferisce al Parlamento sullo stato di attuazione del PNRR?",
				options: ["Trimestrale", "Quadrimestrale", "Semestrale", "Annuale"],
				correct: 2,
				motivation: "L'art. 7, comma 7, del D.L. 77/2021 prevede che la Corte dei conti riferisca al Parlamento con cadenza semestrale sullo stato di attuazione del Piano Nazionale di Ripresa e Resilienza.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale principio costituzionale fonda le relazioni quadrimestrali sulle coperture finanziarie?",
				options: ["Art. 81, comma 1, Cost. - Equilibrio di bilancio", "Art. 81, comma 3, Cost. - Copertura finanziaria", "Art. 97, comma 1, Cost. - Buon andamento", "Art. 119, comma 6, Cost. - Limiti indebitamento"],
				correct: 1,
				motivation: "L'art. 81, terzo comma, della Costituzione stabilisce che ogni legge che importi nuovi o maggiori oneri debba provvedere ai mezzi per farvi fronte. Le relazioni quadrimestrali verificano il rispetto di questo principio.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale sentenza della Corte costituzionale ha riconosciuto la legittimazione delle Sezioni Riunite a sollevare questioni di costituzionalità in sede di parifica?",
				options: ["Sent. 15/2015", "Sent. 45/2016", "Sent. 89/2017", "Sent. 103/2018"],
				correct: 2,
				motivation: "La sentenza n. 89/2017 della Corte costituzionale ha riconosciuto la legittimazione delle Sezioni Riunite a sollevare questioni di costituzionalità in sede di parificazione, valorizzando la natura eterogenea e composita di tale giudizio.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Qual è la natura giuridica prevalente del giudizio di parificazione secondo l'orientamento nomofilattico della Corte?",
				options: ["Giurisdizione contenziosa pura", "Controllo referente con funzione ausiliaria", "Atto amministrativo vincolante", "Parere obbligatorio non vincolante"],
				correct: 1,
				motivation: "L'orientamento nomofilattico della Corte inquadra il giudizio di parifica nella tipologia del controllo quale manifestazione della funzione ausiliaria rispetto al Parlamento, pur se reso con le formalità della giurisdizione contenziosa.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Chi presiede le Sezioni Riunite della Corte dei conti?",
				options: ["Il Presidente anziano di sezione", "Il Primo Presidente aggiunto", "Il Presidente della Corte dei conti", "Un Presidente eletto annualmente"],
				correct: 2,
				motivation: "Le Sezioni Riunite sono presiedute dal Presidente della Corte dei conti, coadiuvato da due presidenti di sezione, come previsto dall'art. 3 del R.D. 1214/1934.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale norma ha introdotto la funzione nomofilattica delle Sezioni Riunite per il coordinamento della finanza pubblica?",
				options: ["L. 20/1994", "L. 131/2003", "D.L. 78/2009, art. 17, comma 31", "D.L. 174/2012, art. 6, comma 4"],
				correct: 2,
				motivation: "L'art. 17, comma 31, del D.L. 78/2009 ha introdotto la funzione nomofilattica delle Sezioni Riunite per garantire la coerenza nell'attività di coordinamento della finanza pubblica, anche in relazione al federalismo fiscale.",
				category: "Funzione nomofilattica"
			},
			{
				question: "Quale legge ha riformato profondamente il sistema dei controlli riducendo i controlli preventivi e introducendo quelli successivi sulla gestione?",
				options: ["L. 142/1990", "L. 20/1994", "L. 131/2003", "L. 196/2009"],
				correct: 1,
				motivation: "La legge n. 20/1994 ha operato una riforma fondamentale riducendo drasticamente il numero degli atti sottoposti al controllo preventivo di legittimità e introducendo una nuova forma di controllo successivo sulla gestione del bilancio e del patrimonio.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Cosa deve contenere la relazione allegata alla deliberazione di parificazione secondo l'art. 41 del R.D. 1214/1934?",
				options: ["Solo le irregolarità riscontrate", "Solo le proposte di riforma", "Le ragioni dei visti con riserva, le osservazioni sul comportamento delle amministrazioni e le proposte di riforma", "Solo i dati contabili verificati"],
				correct: 2,
				motivation: "L'art. 41 prevede che la relazione esponga: le ragioni dei visti con riserva, le osservazioni sul modo in cui le amministrazioni si sono conformate alle discipline finanziarie, e le proposte di riforme legislative e regolamentari.",
				category: "Parificazione rendiconto"
			},
			{
				question: "Quale organo certifica l'attendibilità della quantificazione dei costi dei contratti collettivi nazionali del pubblico impiego?",
				options: ["Il Ministero dell'Economia e delle Finanze", "La Ragioneria Generale dello Stato", "Le Sezioni Riunite della Corte dei conti", "L'ARAN autonomamente"],
				correct: 2,
				motivation: "L'art. 47, comma 5, del D.Lgs. n. 165/2001 assegna alle Sezioni Riunite della Corte dei conti la funzione di certificazione dell'attendibilità della quantificazione dei costi dei CCNL e della loro compatibilità con gli strumenti di bilancio.",
				category: "Certificazione CCNL"
			},
			{
				question: "In caso di certificazione negativa dei costi di un CCNL, cosa accade?",
				options: ["Il contratto viene automaticamente annullato", "L'ARAN assume iniziative per adeguare la quantificazione", "Il Governo può procedere comunque", "Si apre un contenzioso giurisdizionale"],
				correct: 1,
				motivation: "In caso di certificazione negativa, l'ARAN assume le iniziative per adeguare la quantificazione dei costi contrattuali, mentre in caso di certificazione positiva può procedere alla sottoscrizione del contratto.",
				category: "Certificazione CCNL"
			},
			{
				question: "Qual è il valore minimo delle fattispecie per cui le amministrazioni centrali possono richiedere pareri alle Sezioni Riunite su risorse PNRR?",
				options: ["500.000 euro", "750.000 euro", "1 milione di euro", "5 milioni di euro"],
				correct: 2,
				motivation: "L'art. 46, comma 2, della legge n. 238/2021 prevede che le Sezioni Riunite rendano pareri su fattispecie di valore complessivo non inferiore a un milione di euro per le amministrazioni centrali.",
				category: "Funzione consultiva"
			},
			{
				question: "Quale effetto produce il parere reso dalla Corte dei conti su risorse PNRR in caso di responsabilità amministrativa?",
				options: ["Nessun effetto particolare", "Riduce la sanzione del 50%", "Esclude la gravità della colpa", "Elimina completamente la responsabilità"],
				correct: 2,
				motivation: "L'art. 46, comma 2, della legge n. 238/2021 prevede l'esclusione della gravità della colpa qualora l'azione amministrativa si sia conformata ai pareri resi dalla Corte dei conti, nel rispetto dei presupposti generali.",
				category: "Funzione consultiva"
			},
			{
				question: "Quale norma attribuisce alla Corte dei conti il controllo sul rispetto degli equilibri di bilancio degli enti territoriali?",
				options: ["L. 20/1994", "L. cost. 3/2001", "L. 131/2003, art. 7", "D.L. 174/2012"],
				correct: 2,
				motivation: "L'art. 7 della legge n. 131/2003 ha attribuito alla Corte dei conti il controllo sul rispetto degli equilibri di bilancio da parte di Comuni, Province, Città metropolitane e Regioni, ai fini del coordinamento della finanza pubblica.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Cosa prevede l'art. 1 del R.D. 273/1939?",
				options: ["Il controllo preventivo sugli atti", "Il parere obbligatorio su modifiche all'ordinamento della Corte", "La composizione delle Sezioni Riunite", "Le modalità di parificazione"],
				correct: 1,
				motivation: "L'art. 1 del R.D. 273/1939 prevede che i provvedimenti legislativi che riguardino l'ordinamento e le funzioni della Corte dei conti siano adottati previo parere delle Sezioni Riunite.",
				category: "Funzione consultiva"
			},
			{
				question: "In quale anno è stato deliberato il Regolamento per l'organizzazione delle funzioni di controllo della Corte dei conti?",
				options: ["1994", "1998", "2000", "2003"],
				correct: 2,
				motivation: "Il Regolamento per l'organizzazione delle funzioni di controllo è stato deliberato dalle Sezioni Riunite il 16 giugno 2000 con delibera n. 14/DEL/2000, e successivamente modificato e integrato.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale articolo costituzionale sancisce il principio di copertura finanziaria delle leggi di spesa?",
				options: ["Art. 75 Cost.", "Art. 81 Cost.", "Art. 100 Cost.", "Art. 119 Cost."],
				correct: 1,
				motivation: "L'art. 81, comma 3, della Costituzione stabilisce che ogni legge che importi nuovi o maggiori oneri deve provvedere ai mezzi per farvi fronte, sancendo il principio fondamentale di copertura finanziaria.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Cosa caratterizza il controllo della Corte dei conti rispetto ai controlli interni delle amministrazioni?",
				options: ["È un controllo interno rafforzato", "È un controllo esterno svolto in veste neutrale", "È un controllo politico", "È un controllo gerarchico"],
				correct: 1,
				motivation: "Il controllo della Corte dei conti è un controllo di tipo esterno, svolto in veste neutrale da un organo indipendente, a garanzia dell'interesse generale alla regolarità e al buon andamento dell'azione amministrativa.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale Sezione ha competenza nomofilattica specifica sulle questioni risolte in maniera difforme dalle Sezioni Regionali, secondo il D.L. 174/2012?",
				options: ["Le Sezioni Riunite in ogni caso", "La Sezione delle Autonomie, salvo casi eccezionali", "La Sezione centrale di controllo", "Il Presidente della Corte"],
				correct: 1,
				motivation: "L'art. 6, comma 4, del D.L. 174/2012 attribuisce alla Sezione delle Autonomie la competenza nomofilattica, fatta salva l'applicazione dell'art. 17, comma 31, del D.L. 78/2009 per casi di eccezionale rilevanza.",
				category: "Funzione nomofilattica"
			},
			{
				question: "Quale principio costituzionale ha introdotto la legge costituzionale n. 3/2001 nel rapporto tra Stato e autonomie locali?",
				options: ["Principio di gerarchia", "Principio di sussidiarietà verticale", "Principio di supremazia statale", "Principio di coordinamento orizzontale"],
				correct: 1,
				motivation: "La legge cost. 3/2001 ha dato piena attuazione al principio di sussidiarietà verticale, riconoscendo le autonomie locali quali enti esponenziali preesistenti deputati all'azione di governo al livello più vicino ai cittadini.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quanti documenti tra audizioni e memorie hanno predisposto le Sezioni Riunite nel 2023?",
				options: ["7 documenti", "9 documenti", "11 documenti", "15 documenti"],
				correct: 2,
				motivation: "Nel 2023 sono stati predisposti dalle Sezioni Riunite complessivamente 11 documenti: 7 audizioni e 4 memorie, prevalentemente per le Commissioni Bilancio di Camera e Senato.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Cosa accade a un atto governativo registrato con riserva dalle Sezioni Riunite?",
				options: ["Viene annullato", "Resta sospeso in attesa del Parlamento", "Acquista piena efficacia", "Deve essere ritirato"],
				correct: 2,
				motivation: "L'atto registrato con riserva acquista piena efficacia, ma può dare luogo a responsabilità politica del Governo. La Corte trasmette periodicamente al Parlamento l'elenco degli atti registrati con riserva.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale norma ha introdotto la relazione annuale sul costo del lavoro pubblico?",
				options: ["D.Lgs. 29/1993", "D.Lgs. 165/2001, art. 60", "L. 196/2009", "D.L. 78/2009"],
				correct: 1,
				motivation: "L'art. 60, comma 4, del D.Lgs. n. 165/2001 prevede che la Corte dei conti riferisca annualmente al Parlamento sulla gestione delle risorse finanziarie destinate al personale del settore pubblico.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Su quale fonte si basa l'elaborazione della relazione sul costo del lavoro pubblico?",
				options: ["Bilancio dello Stato", "Conto Annuale del MEF", "Relazioni delle singole amministrazioni", "Dati ISTAT"],
				correct: 1,
				motivation: "La relazione sul costo del lavoro si basa sui dati del Conto Annuale elaborato dal Ministero dell'Economia e delle Finanze, che fornisce informazioni complete sulla spesa per il personale pubblico.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Qual è la duplice natura del giudizio di parificazione?",
				options: ["Controllo e giurisdizione", "Decisione e relazione", "Preventivo e successivo", "Interno ed esterno"],
				correct: 0,
				motivation: "Il giudizio di parificazione nasce come funzione di controllo della Corte dei conti sui rendiconti delle Regioni. Allo stesso tempo, il giudizio ha forma e sostanza di sentenza.",
				category: "Parificazione rendiconto"
			},
			{
				question: "Quale articolo del R.D. 1214/1934 stabilisce che la deliberazione di parificazione avviene con le formalità della giurisdizione contenziosa?",
				options: ["Art. 3", "Art. 25", "Art. 39", "Art. 40"],
				correct: 3,
				motivation: "L'art. 40 del R.D. 1214/1934 stabilisce che la Corte delibera sul rendiconto generale dello Stato a Sezioni Riunite con le formalità della sua giurisdizione contenziosa.",
				category: "Parificazione rendiconto"
			},
			{
				question: "Quale fondamento normativo attribuisce alla Corte dei conti l'autonomia regolamentare in materia di organizzazione?",
				options: ["Art. 100 Cost.", "Art. 4 L. 20/1994", "Art. 3 R.D. 1214/1934", "Art. 7 L. 131/2003"],
				correct: 1,
				motivation: "L'art. 4 della legge n. 20/1994 attribuisce alla Corte dei conti il potere di regolamentare le norme concernenti l'organizzazione, il funzionamento, la struttura dei bilanci e la gestione delle spese dell'Istituto.",
				category: "Autonomia organizzativa"
			},
			{
				question: "Quale tipo di controllo ha sostituito progressivamente il controllo preventivo di legittimità dopo la riforma del 1994?",
				options: ["Controllo politico", "Controllo di gestione e sui risultati", "Controllo gerarchico", "Controllo ispettivo"],
				correct: 1,
				motivation: "La riforma del 1994 ha spostato l'attenzione dal controllo preventivo di legittimità sui singoli atti al controllo successivo di gestione, valutando i risultati delle gestioni pubbliche e la sana gestione finanziaria.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Il bilancio pubblico, dopo la riforma del 1994, viene qualificato come:",
				options: ["Atto amministrativo", "Bene pubblico", "Atto politico", "Documento programmatico"],
				correct: 1,
				motivation: "Dopo la riforma del 1994, il bilancio viene qualificato come 'bene pubblico', tutelando così l'interesse della collettività dei contribuenti a un corretto uso delle risorse pubbliche.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale norma disciplina il procedimento per l'acquisizione del parere della Corte su modifiche alla contabilità generale dello Stato?",
				options: ["R.D. 2440/1923", "R.D. 1214/1934", "L. 229/2003, art. 13", "L. 196/2009"],
				correct: 2,
				motivation: "L'art. 13 della legge n. 229/2003 ha disciplinato il procedimento per l'acquisizione del parere della Corte dei conti sulle modifiche alle norme per l'amministrazione del patrimonio e la contabilità generale dello Stato.",
				category: "Funzione consultiva"
			},
			{
				question: "Quale norma ha previsto il referto sul sistema universitario?",
				options: ["L. 168/1989", "L. 537/1993, art. 5", "L. 43/2005", "D.Lgs. 165/2001"],
				correct: 1,
				motivation: "L'art. 5, comma 21, della legge n. 537/1993 prevede che la Corte dei conti predisponga un referto sul sistema universitario per offrire al Parlamento un quadro conoscitivo dei profili finanziari e gestionali.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale caratteristica distingue l'obbligo di conformazione nella nomofilachia di controllo rispetto a quella giurisdizionale?",
				options: ["È più attenuato", "È identico", "È più stringente e vincolante", "Non esiste obbligo"],
				correct: 2,
				motivation: "Nella funzione di controllo, l'obbligo di conformazione delle Sezioni Regionali alle pronunce delle Sezioni Riunite è più stringente e vincolante rispetto alla tradizionale nomofilachia giurisdizionale, dove opera in maniera attenuata.",
				category: "Funzione nomofilattica"
			},
			{
				question: "Quale organo nomina i magistrati relatori per gli affari delle Sezioni Riunite?",
				options: ["Il Presidente della Corte autonomamente", "I due Presidenti di coordinamento, di concerto con il Presidente", "Il Consiglio di Presidenza", "Le Sezioni Riunite collegialmente"],
				correct: 1,
				motivation: "I due Presidenti di coordinamento delle Sezioni Riunite, di concerto con il Presidente della Corte, nominano i magistrati relatori per i singoli affari e provvedono alla formazione dei collegi.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Qual è la finalità ultima del controllo esercitato dalle Sezioni Riunite?",
				options: ["Sanzionare le irregolarità", "Sostituirsi alle amministrazioni", "Verificare la tenuta degli equilibri di bilancio secondo i parametri UE", "Approvare preventivamente le spese"],
				correct: 2,
				motivation: "La finalità del controllo è verificare la tenuta degli equilibri di bilancio sulla base dei parametri finanziari concordati con l'Unione europea, assicurando la regolarità e il buon andamento della gestione finanziaria pubblica.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale procedimento caratterizza l'istruttoria per la parificazione del rendiconto?",
				options: ["Procedimento unilaterale della Corte", "Procedimento in contraddittorio con le amministrazioni", "Procedimento documentale senza confronto", "Procedimento ispettivo sorpresa"],
				correct: 1,
				motivation: "Il procedimento istruttorio alla parificazione è caratterizzato dal contraddittorio con le amministrazioni, che si confrontano con la Corte attraverso riunioni, risposte a questionari e scambi di valutazioni.",
				category: "Parificazione rendiconto"
			},
			{
				question: "Per alcuni atti contemplati dall'art. 25 del R.D. 1214/1934, come opera il rifiuto di registrazione?",
				options: ["È relativo e superabile", "È assoluto e annulla il provvedimento", "È sospensivo in attesa del Parlamento", "È meramente consultivo"],
				correct: 1,
				motivation: "Per alcuni atti espressamente contemplati dall'art. 25 del R.D. 1214/1934, il rifiuto di registrazione è assoluto e annulla il provvedimento, non essendo possibile procedere alla registrazione con riserva.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale testo unico disciplina le società a partecipazione pubblica oggetto del referto delle Sezioni Riunite?",
				options: ["D.Lgs. 165/2001", "D.Lgs. 267/2000", "D.Lgs. 175/2016", "D.Lgs. 118/2011"],
				correct: 2,
				motivation: "Il D.Lgs. n. 175/2016 (Testo Unico in materia di società a partecipazione pubblica) disciplina le società partecipate dalle amministrazioni pubbliche, oggetto del referto periodico delle Sezioni Riunite.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale articolo costituzionale garantisce l'indipendenza della Corte dei conti e dei suoi componenti?",
				options: ["Art. 97 Cost.", "Art. 100 Cost.", "Art. 103 Cost.", "Art. 108 Cost."],
				correct: 1,
				motivation: "L'art. 100, ultimo comma, della Costituzione stabilisce che la legge assicura l'indipendenza della Corte dei conti e dei suoi componenti di fronte al Governo, garantendo la neutralità del controllo.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale norma ha introdotto le relazioni semestrali sul PNRR?",
				options: ["D.L. 34/2020", "D.L. 77/2021", "D.L. 152/2021", "L. 238/2021"],
				correct: 1,
				motivation: "L'art. 7, comma 7, del decreto-legge n. 77 del 31 maggio 2021 ha introdotto l'obbligo per la Corte dei conti di riferire semestralmente al Parlamento sullo stato di attuazione del PNRR.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Cosa devono verificare le Sezioni Riunite nella certificazione dei CCNL oltre alla quantificazione dei costi?",
				options: ["La convenienza economica", "La compatibilità con gli strumenti di programmazione e bilancio", "L'equità retributiva", "La soddisfazione dei sindacati"],
				correct: 1,
				motivation: "Le Sezioni Riunite devono certificare non solo l'attendibilità della quantificazione dei costi, ma anche la compatibilità con gli strumenti di programmazione e di bilancio e il rispetto dei vincoli di bilancio.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Qual è l'effetto principale delle pronunce di orientamento generale delle Sezioni Riunite ex art. 17, comma 31, D.L. 78/2009?",
				options: ["Sono meramente indicative", "Hanno valore di soft law", "Tutte le Sezioni Regionali devono conformarsi", "Sono vincolanti solo per le Sezioni centrali"],
				correct: 2,
				motivation: "Le pronunce di orientamento generale adottate dalle Sezioni Riunite sono vincolanti: tutte le Sezioni Regionali di controllo si conformano a tali pronunce, come espressamente previsto dalla norma.",
				category: "Funzione nomofilattica"
			},
			{
				question: "In quale contesto la Sezione delle Autonomie emana delibere di orientamento?",
				options: ["Per questioni giurisdizionali", "Per prevenire o risolvere contrasti interpretativi rilevanti per l'attività di controllo o consultiva", "Per questioni disciplinari", "Per nomine di magistrati"],
				correct: 1,
				motivation: "L'art. 6, comma 4, del D.L. 174/2012 prevede che la Sezione delle Autonomie emani delibere di orientamento per prevenire o risolvere contrasti interpretativi rilevanti o per questioni di massima di particolare rilevanza.",
				category: "Funzione nomofilattica"
			},
			{
				question: "Quali criteri devono verificare le Sezioni Riunite per l'ammissibilità di una questione nomofilattica?",
				options: ["Solo l'urgenza", "Solo la rilevanza economica", "Concretezza, limitazione, particolare rilevanza e ancoraggio normativo", "Solo il contrasto interpretativo"],
				correct: 2,
				motivation: "Le questioni devono essere concrete, limitate, di particolare rilevanza e ancorate a norme specifiche che generano concreti conflitti interpretativi, non possono essere quesiti astratti o di scarso rilievo sistematico.",
				category: "Funzione nomofilattica"
			},
			{
				question: "Quale rapporto delle Sezioni Riunite esamina specificamente i grandi comparti della spesa pubblica come previdenza, assistenza e sanità?",
				options: ["La relazione sul costo del lavoro", "Il rapporto sul coordinamento della finanza pubblica", "La relazione quadrimestrale sulle coperture", "Il referto sul sistema universitario"],
				correct: 1,
				motivation: "Il rapporto annuale sul coordinamento della finanza pubblica esamina i grandi comparti della spesa pubblica, con particolare attenzione a previdenza, assistenza, sanità e investimenti pubblici.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quale principio costituzionale è alla base dell'autonomia funzionale della Corte dei conti?",
				options: ["Solo l'art. 100 Cost.", "Solo l'art. 103 Cost.", "Il combinato disposto degli artt. 100 e 103 Cost.", "L'art. 97 Cost."],
				correct: 2,
				motivation: "L'autonomia funzionale della Corte dei conti, quale organo di rilevanza costituzionale, trova fondamento nel combinato disposto degli artt. 100 e 103 della Costituzione, garantendo indipendenza organizzativa e finanziaria.",
				category: "Sezioni riunite controllo"
			},
			{
				question: "Quando la Corte dei conti riferisce al Parlamento sulla definitiva quantificazione dei costi contrattuali?",
				options: ["Prima della certificazione", "Durante la trattativa", "Dopo la sottoscrizione del contratto", "Mai, è compito dell'ARAN"],
				correct: 2,
				motivation: "La Corte riferisce al Parlamento sulla definitiva quantificazione dei costi contrattuali, sulla loro copertura finanziaria e sulla compatibilità con gli strumenti della programmazione dopo il completamento del procedimento di certificazione.",
				category: "Sezioni riunite controllo"
			},
			
			// B09 - La Procura Generale
			{
				question: "Qual è il fondamento costituzionale dell'obbligatorietà dell'azione del P.M. contabile?",
				options: ["Articoli 101 e 102 della Costituzione", "Articoli 2, 3, 97 e 81 della Costituzione", "Articoli 24 e 111 della Costituzione", "Articoli 103 e 107 della Costituzione"],
				correct: 1,
				motivation: "L'obbligatorietà dell'azione risarcitoria o sanzionatoria del P.M. contabile trova fondamento negli articoli 2 (tutela dei diritti), 3 (uguaglianza), 97 (buon andamento della P.A.) e 81 (equilibrio di bilancio) della Costituzione.",
				category: "Procura Generale"
			},
			{
				question: "Quale articolo del codice di giustizia contabile disciplina l'apertura del procedimento istruttorio?",
				options: ["Art. 54 c.g.c.", "Art. 12 c.g.c.", "Art. 11 c.g.c.", "Art. 114 c.g.c."],
				correct: 0,
				motivation: "L'art. 54 c.g.c. stabilisce che il P.M., ove non disponga l'archiviazione immediata, deve disporre l'apertura di un procedimento istruttorio. Questo articolo regola anche i criteri obiettivi di assegnazione dei fascicoli.",
				category: "Procura Generale"
			},
			{
				question: "Quanti anni di esperienza nelle funzioni giurisdizionali e di procura devono avere i magistrati per essere assegnati alla Procura generale?",
				options: ["Almeno 2 anni", "Almeno 5 anni", "Almeno 4 anni", "Almeno 3 anni"],
				correct: 2,
				motivation: "I magistrati assegnati all'Ufficio della Procura generale devono aver svolto almeno 4 anni nelle funzioni giurisdizionali e di procura, garantendo così un'adeguata esperienza professionale.",
				category: "Procura Generale"
			},
			{
				question: "In quale città ha sede l'ufficio distaccato della Procura generale per la Sezione di appello siciliana?",
				options: ["Catania", "Messina", "Palermo", "Siracusa"],
				correct: 2,
				motivation: "L'ufficio distaccato della Procura generale presso la Sezione di appello per la Regione siciliana ha sede a Palermo ed è preposto da un Consigliere.",
				category: "Procura Generale"
			},
			{
				question: "Quale disposizione ha istituito il Servizio di coordinamento della Procura generale?",
				options: ["Disposizione n. 96 del 2022", "Disposizione di servizio 2/2020", "Disposizione di servizio 4/2021/AC", "Nota prot. 571 del 2022"],
				correct: 2,
				motivation: "La disposizione di servizio 4/2021/AC ha istituito il Servizio di coordinamento dell'attività dei procuratori regionali, modificando la precedente disposizione n. 2/2020 e riorganizzando gli uffici della Procura generale.",
				category: "Procura Generale"
			},
			{
				question: "Quanti sono gli uffici specializzati della Procura generale secondo la riorganizzazione del 2021?",
				options: ["Quattro uffici", "Cinque uffici", "Sei uffici", "Sette uffici"],
				correct: 2,
				motivation: "La disposizione 4/2021 ha organizzato la Procura generale in sei uffici specializzati: appelli e ricorsi per revocazione, ricorsi per cassazione, ricorsi Sezioni riunite, affari internazionali, coordinamento e studi, ufficio disciplinare.",
				category: "Procura Generale"
			},
			{
				question: "Quale articolo del c.g.c. attribuisce al Procuratore generale il potere di coordinamento?",
				options: ["Art. 11, c. 3 c.g.c.", "Art. 54, c. 1 c.g.c.", "Art. 12, c. 3 c.g.c.", "Art. 114, c. 2 c.g.c."],
				correct: 2,
				motivation: "L'art. 12, comma 3, del codice di giustizia contabile (già art. 2, c. 3, d.l. n. 453/93 conv. in l. n. 19/94) attribuisce al Procuratore generale il potere di emanare indirizzi di coordinamento vincolanti.",
				category: "Procura Generale"
			},
			{
				question: "Qual è la natura del coordinamento del Procuratore generale secondo il 'principio Garri'?",
				options: ["Gerarchia amministrativa con vincolo di subordinazione", "Non gerarchia, ma collegialità dialettica e vincolatività", "Mera consultazione senza vincoli", "Potere discrezionale assoluto"],
				correct: 1,
				motivation: "Il coordinamento del Procuratore generale, secondo il principio Garri, non è una gerarchia ma si caratterizza per la collegialità e dialettica nell'adozione degli indirizzi, che sono poi vincolanti per tutti i Procuratori regionali.",
				category: "Procura Generale"
			},
			{
				question: "Quando è stata emanata la disposizione di coordinamento sui giudizi di parifica regionale?",
				options: ["23 ottobre 2013, nota 2216", "5 aprile 2022, nota prot. 494", "3 maggio 2022, nota prot. 550", "5 maggio 2022, nota prot. 571"],
				correct: 3,
				motivation: "La nota prot. 571 del 5 maggio 2022 ha fornito gli indirizzi di coordinamento sui giudizi di parifica regionale, disciplinando le modalità operative per i Procuratori regionali.",
				category: "Procura Generale"
			},
			{
				question: "Quale disposizione disciplina il dovere di astensione del P.M.?",
				options: ["Nota prot. 550 del 3 maggio 2022", "Nota prot. 494 del 5 aprile 2022", "Disposizione n. 96 del 21 gennaio 2022", "Nota 2216 del 23 ottobre 2013"],
				correct: 0,
				motivation: "La nota prot. 550 del 3 maggio 2022 ha chiarito in quali situazioni il magistrato della Procura deve astenersi dal trattare un procedimento (ad esempio per rapporti di parentela o interesse personale).",
				category: "Procura Generale"
			},
			{
				question: "Quale ufficio della Procura generale cura i rapporti con OLAF ed EPPO?",
				options: ["Ufficio ricorsi Sezioni riunite", "Ufficio affari internazionali", "Ufficio coordinamento e studi", "Ufficio appelli"],
				correct: 1,
				motivation: "L'Ufficio affari internazionali e per i rapporti interistituzionali si occupa della collaborazione con OLAF (Ufficio europeo antifrode) ed EPPO (Procura europea) per il contrasto alle frodi ai danni dei fondi UE.",
				category: "Procura Generale"
			},
			{
				question: "Qual è il termine per proporre appello contro le sentenze delle sezioni regionali?",
				options: ["30 giorni dalla notifica", "45 giorni dalla notifica", "60 giorni dalla notifica", "90 giorni dalla notifica"],
				correct: 2,
				motivation: "L'art. 207 c.g.c. stabilisce il termine perentorio di 60 giorni dalla notifica della sentenza per proporre appello contro le sentenze delle sezioni regionali. L'inosservanza comporta l'inammissibilità dell'impugnazione.",
				category: "Procura Generale"
			},
			{
				question: "Quale articolo della Costituzione garantisce l'indipendenza dei magistrati e si applica analogicamente alla Procura contabile?",
				options: ["Art. 100 Cost.", "Art. 103 Cost.", "Art. 107 Cost.", "Art. 111 Cost."],
				correct: 2,
				motivation: "L'art. 107 della Costituzione, che stabilisce che i magistrati si distinguono solo per diversità di funzioni e sono inamovibili, si applica analogicamente ai magistrati della Procura contabile garantendone l'indipendenza.",
				category: "Procura Generale"
			},
			{
				question: "In quale sede le Sezioni Riunite giudicano il Rendiconto generale dello Stato?",
				options: ["In sede giurisdizionale", "In sede di controllo", "In sede deliberante", "In sede consultiva"],
				correct: 1,
				motivation: "Il giudizio annuale di parificazione del Rendiconto generale dello Stato avviene davanti alle Sezioni Riunite in sede di controllo, secondo gli artt. 13, 39 ss. del R.D. n. 1214/1934.",
				category: "Procura Generale"
			},
			{
				question: "Quale criterio deve essere seguito nell'assegnazione dei fascicoli ai magistrati?",
				options: ["Criteri discrezionali del Procuratore", "Criteri soggettivi basati sulla fiducia", "Criteri obiettivi ed automatici", "Criteri liberi senza vincoli"],
				correct: 2,
				motivation: "L'art. 54, comma 1, c.g.c. stabilisce che l'assegnazione delle vertenze deve avvenire secondo criteri obiettivi ed automatici, garantendo trasparenza e impedendo arbitrarietà nella distribuzione dei fascicoli.",
				category: "Procura Generale"
			},
			{
				question: "Cosa avviene se il Procuratore regionale non condivide la proposta di archiviazione di un magistrato?",
				options: ["Deve accettare comunque la proposta", "Può avocare il fascicolo", "Deve richiedere parere alle Sezioni Riunite", "Deve rinviare al magistrato con osservazioni non vincolanti"],
				correct: 1,
				motivation: "In caso di dissenso sull'archiviazione, il Procuratore regionale può avocare il fascicolo, togliendolo al magistrato assegnatario per disporre l'apertura del procedimento o ulteriori accertamenti, pur rispettando l'autonomia del magistrato.",
				category: "Procura Generale"
			},
			{
				question: "Quale norma disciplina i ricorsi per cassazione nel processo contabile?",
				options: ["Artt. 54-60 c.g.c.", "Artt. 114-119 c.g.c.", "Artt. 207-210 c.g.c. e art. 362 c.p.c.", "Artt. 11-15 c.g.c."],
				correct: 2,
				motivation: "I ricorsi e controricorsi per cassazione nel processo contabile sono disciplinati dagli artt. 207-210 del codice di giustizia contabile, in combinato con l'art. 362 del codice di procedura civile.",
				category: "Procura Generale"
			},
			{
				question: "Chi predispone i turni e calendari di udienza per la Procura generale?",
				options: ["Il magistrato coordinatore di ciascun ufficio", "Il Procuratore generale tramite la Segreteria", "Il Dirigente di Segreteria autonomamente", "Ogni magistrato per sé stesso"],
				correct: 1,
				motivation: "È il Procuratore generale, tramite la Segreteria, che predispone i turni calendari di udienza, assicurando la copertura di tutte le udienze e preferibilmente la partecipazione dei P.M. titolari dei fascicoli.",
				category: "Procura Generale"
			},
			{
				question: "Quando deve avvenire l'inserimento degli atti processuali nel sistema Giudico?",
				options: ["Entro 7 giorni dalla redazione", "Entro 3 giorni lavorativi", "Entro 15 giorni", "Immediatamente (stesso giorno)"],
				correct: 3,
				motivation: "L'inserimento degli atti processuali nel sistema informatico Giudico deve avvenire immediatamente (stesso giorno della redazione) per garantire a tutti gli operatori una visione aggiornata dello stato del procedimento.",
				category: "Procura Generale"
			},
			{
				question: "Quale articolo del c.g.c. regola i giudizi davanti alle Sezioni Riunite in speciale composizione?",
				options: ["Art. 54 c.g.c.", "Art. 12 c.g.c.", "Art. 11 c.g.c.", "Art. 119 c.g.c."],
				correct: 2,
				motivation: "L'art. 11 c.g.c. disciplina i giudizi in unico grado davanti alle Sezioni Riunite in speciale composizione, che riguardano materie come piani di riequilibrio, ammissione al Fondo di rotazione, rendiconti di gruppi consiliari regionali.",
				category: "Procura Generale"
			},
			{
				question: "Quale disposizione ha costituito gruppi di lavoro per valutare la produttività degli uffici?",
				options: ["Nota prot. 571 del 5 maggio 2022", "Disposizione n. 96 del 21 gennaio 2022", "Nota prot. 550 del 3 maggio 2022", "Disp. serv. 4/2021/AC"],
				correct: 1,
				motivation: "La disposizione n. 96 del 21 gennaio 2022 ha costituito gruppi di lavoro per valutare la produttività e il peso delle istruttorie e delle citazioni, ottimizzando la distribuzione del carico di lavoro.",
				category: "Procura Generale"
			},
			{
				question: "Entro quale termine deve essere concluso il giudizio di parificazione del Rendiconto generale dello Stato?",
				options: ["Entro marzo dell'anno successivo", "Entro dicembre dello stesso anno", "Entro luglio dell'anno successivo", "Entro aprile dell'anno successivo"],
				correct: 2,
				motivation: "Il giudizio di parificazione del Rendiconto generale dello Stato davanti alle Sezioni Riunite deve concludersi entro luglio dell'anno successivo a quello del rendiconto, secondo gli artt. 13, 39 ss. R.D. n. 1214/1934.",
				category: "Procura Generale"
			},
			{
				question: "Quale norma previgente è confluita nell'attuale art. 12, c. 3, c.g.c. sul coordinamento?",
				options: ["Art. 1, c. 2, l. n. 19/94", "Art. 2, c. 3, d.l. n. 453/93 conv. in l. n. 19/94", "Art. 3, c. 1, l. n. 20/94", "Art. 4, c. 2, d.l. n. 453/93"],
				correct: 1,
				motivation: "Il potere di coordinamento del Procuratore generale era originariamente previsto dall'art. 2, c. 3, del d.l. n. 453/93 convertito in l. n. 19/94, poi confluito nell'art. 12, c. 3, del codice di giustizia contabile.",
				category: "Procura Generale"
			},
			{
				question: "Quale principio fondamentale deve guidare i rapporti tra uffici requirenti e giudicanti?",
				options: ["Collaborazione gerarchica", "Rispetto dei ruoli e imparzialità", "Dipendenza funzionale", "Subordinazione operativa"],
				correct: 1,
				motivation: "Il principio fondamentale che deve sempre guidare i rapporti tra uffici requirenti e giudicanti è il rispetto dei ruoli e l'imparzialità, garantendo l'autonomia di ciascuno nelle valutazioni di merito pur collaborando negli aspetti organizzativi.",
				category: "Procura Generale"
			},
			{
				question: "Qual è il termine per proporre ricorso per cassazione contro le sentenze d'appello?",
				options: ["30 giorni dalla notifica", "45 giorni dalla notifica", "60 giorni dalla notifica", "90 giorni dalla notifica"],
				correct: 2,
				motivation: "Il termine per proporre ricorso per cassazione contro le sentenze delle sezioni centrali d'appello è di 60 giorni dalla notifica della sentenza, secondo gli artt. 207-210 c.g.c. È un termine perentorio.",
				category: "Procura Generale"
			},
			{
				question: "Chi sovrintende all'Ufficio di Segreteria della Procura generale?",
				options: ["Il Procuratore generale direttamente", "Il Procuratore generale aggiunto", "Il Dirigente di Segreteria", "Il magistrato coordinatore più anziano"],
				correct: 2,
				motivation: "L'Ufficio di Segreteria della Procura generale è diretto dal Dirigente di Segreteria, che coordina il personale amministrativo, la gestione documentale e i flussi procedimentali.",
				category: "Procura Generale"
			},
			{
				question: "Quale disposizione disciplina la gestione delle discordanze tra P.G. e P.M. di udienza?",
				options: ["Nota prot. 571 del 2022", "Nota prot. 494 del 2022", "Nota 2216 del 23 ottobre 2013", "Disposizione n. 96 del 2022"],
				correct: 2,
				motivation: "L'indirizzo di coordinamento del 23 ottobre 2013, nota 2216, disciplina la gestione delle discordanze tra il Procuratore generale e il P.M. di udienza o tra atto scritto e conclusioni orali.",
				category: "Procura Generale"
			},
			{
				question: "Quale ufficio redige i ricorsi della Procura per la Corte di Cassazione?",
				options: ["Ufficio appelli e ricorsi per revocazione", "Ufficio ricorsi e controricorsi per cassazione", "Ufficio ricorsi Sezioni riunite", "Ufficio coordinamento e studi"],
				correct: 1,
				motivation: "L'Ufficio ricorsi e controricorsi per cassazione si occupa specificamente della redazione dei ricorsi della Procura per cassazione e dei controricorsi alle impugnazioni delle parti private (artt. 207-210 c.g.c. e 362 c.p.c.).",
				category: "Procura Generale"
			},
			{
				question: "Quale articolo della Costituzione attribuisce alla Corte dei conti la giurisdizione in materia di contabilità pubblica?",
				options: ["Art. 100, comma 1 Cost.", "Art. 103, comma 2 Cost.", "Art. 107 Cost.", "Art. 111 Cost."],
				correct: 1,
				motivation: "L'art. 103, comma 2, della Costituzione stabilisce che la Corte dei conti ha giurisdizione nelle materie di contabilità pubblica e nelle altre specificate dalla legge.",
				category: "Procura Generale"
			},
			{
				question: "Qual è il termine per il controricorso in cassazione dalla notifica del ricorso avverso?",
				options: ["20 giorni", "30 giorni", "40 giorni", "60 giorni"],
				correct: 2,
				motivation: "Il termine per depositare il controricorso per cassazione è di 40 giorni dalla notifica del ricorso della controparte, secondo l'art. 207 c.g.c. È comunque possibile presentarlo fino a 5 giorni prima dell'udienza.",
				category: "Procura Generale"
			},
			{
				question: "In che anno è stata emanata la Legge n. 20 sull'autonomia finanziaria della Corte dei conti?",
				options: ["1992", "1993", "1994", "1995"],
				correct: 2,
				motivation: "La Legge 14 gennaio 1994, n. 20 ha introdotto disposizioni in materia di giurisdizione e controllo della Corte dei conti, prevedendo all'art. 4 l'autonomia finanziaria dell'istituzione.",
				category: "Procura Generale"
			},
			{
				question: "Quale documento raccoglie organicamente tutti gli indirizzi emanati dal Procuratore generale?",
				options: ["Il Regolamento interno della Procura", "Il Testo Unico delle disposizioni di coordinamento", "Il Codice di comportamento della Procura", "Il Piano Integrato Triennale"],
				correct: 1,
				motivation: "Il Testo Unico delle disposizioni di coordinamento è il documento che raccoglie in modo organico tutti gli indirizzi emanati dal Procuratore generale nel corso del tempo, costituendo il riferimento operativo per i Procuratori regionali.",
				category: "Procura Generale"
			},
			{
				question: "Quale articolo del c.g.c. disciplina le Sezioni Riunite per questioni di massima?",
				options: ["Art. 11 c.g.c.", "Art. 54 c.g.c.", "Artt. 114 ss. c.g.c.", "Art. 207 c.g.c."],
				correct: 2,
				motivation: "Gli artt. 114 e seguenti del codice di giustizia contabile disciplinano le Sezioni Riunite quando si pronunciano su questioni di massima di particolare rilevanza giuridica.",
				category: "Procura Generale"
			},
			{
				question: "Quando è stata emanata la disposizione sul dovere di riservatezza del P.M. e i mass media?",
				options: ["23 ottobre 2013", "21 gennaio 2022", "5 aprile 2022", "5 maggio 2022"],
				correct: 2,
				motivation: "La nota prot. 494 del 5 aprile 2022 ha disciplinato il dovere di riservatezza del P.M. e i rapporti con i mass media, stabilendo il divieto di rilasciare dichiarazioni sui procedimenti in corso.",
				category: "Procura Generale"
			},
			{
				question: "Con quale frequenza si tengono generalmente i Consigli di Procura?",
				options: ["Mensilmente", "Bimestralmente", "Trimestralmente o semestralmente", "Annualmente"],
				correct: 2,
				motivation: "I Consigli di Procura, riunioni tra il Procuratore generale e i Procuratori regionali per discutere questioni giuridiche e adottare indirizzi, si tengono generalmente con periodicità trimestrale o semestrale.",
				category: "Procura Generale"
			},
			{
				question: "Qual è il sistema informatico utilizzato per la gestione dei fascicoli processuali della Corte dei conti?",
				options: ["SistemaCDC", "Giudico", "ProcuraWeb", "ContabilitApp"],
				correct: 1,
				motivation: "Giudico è il sistema informatico che gestisce tutti i fascicoli processuali della Corte dei conti. Richiede l'inserimento immediato degli atti per garantire a tutti gli operatori una visione aggiornata dei procedimenti.",
				category: "Procura Generale"
			},
			{
				question: "Quale tipo di controllo esercita il Procuratore regionale sul provvedimento di archiviazione proposto dal magistrato?",
				options: ["Controllo di merito vincolante", "Controllo gerarchico assoluto", "Controllo di regolarità formale", "Nessun controllo"],
				correct: 2,
				motivation: "Il 'visto' del Procuratore regionale sulla proposta di archiviazione è un controllo di regolarità formale che verifica che siano stati espletati tutti gli accertamenti necessari, senza sostituire la valutazione del magistrato assegnatario.",
				category: "Procura Generale"
			},
			{
				question: "Quale organizzazione internazionale si occupa della lotta antifrode nell'Unione Europea?",
				options: ["EPPO", "INTOSAI", "OLAF", "EUROSAI"],
				correct: 2,
				motivation: "OLAF (Ufficio europeo per la lotta antifrode) è l'organizzazione che si occupa della repressione delle frodi ai danni del bilancio UE. La Procura generale ha stipulato un accordo di collaborazione con OLAF per lo scambio di informazioni.",
				category: "Procura Generale"
			},
			{
				question: "Chi può rimettere una questione di massima alle Sezioni Riunite?",
				options: ["Solo il Presidente della Corte dei conti", "Solo le sezioni giudicanti", "Anche la Procura generale", "Solo il Procuratore regionale"],
				correct: 2,
				motivation: "Anche la Procura generale può rimettere una questione di massima alle Sezioni Riunite quando una questione giuridica particolarmente rilevante richiede una pronuncia di principio vincolante per tutte le sezioni.",
				category: "Procura Generale"
			},
			{
				question: "Quale norma stabilisce che i magistrati sono inamovibili?",
				options: ["Art. 100 Cost.", "Art. 103 Cost.", "Art. 107 Cost.", "Art. 54 c.g.c."],
				correct: 2,
				motivation: "L'art. 107 della Costituzione stabilisce che i magistrati sono inamovibili, principio che si applica analogicamente anche ai magistrati della Procura contabile per garantirne l'indipendenza.",
				category: "Procura Generale"
			},
			{
				question: "Entro quale termine devono essere trasmessi gli atti al gruppo di lavoro per il controllo formale?",
				options: ["Entro 10 giorni dalla redazione", "Entro 3 giorni dalla redazione", "Entro 5 giorni dalla redazione", "Entro 7 giorni dalla redazione"],
				correct: 2,
				motivation: "Secondo la prassi organizzativa interna, gli atti devono essere trasmessi al gruppo di lavoro assegnato per il controllo formale entro 5 giorni dalla redazione, per verificarne la regolarità prima della notifica.",
				category: "Procura Generale"
			},
			{
				question: "Quale articolo della Costituzione sancisce il principio di buon andamento della pubblica amministrazione?",
				options: ["Art. 81 Cost.", "Art. 97 Cost.", "Art. 100 Cost.", "Art. 103 Cost."],
				correct: 1,
				motivation: "L'art. 97 della Costituzione sancisce il principio di buon andamento della pubblica amministrazione, che costituisce uno dei fondamenti dell'obbligatorietà dell'azione del P.M. contabile in caso di danno erariale.",
				category: "Procura Generale"
			},
			{
				question: "Quale ufficio si occupa della gestione dei procedimenti disciplinari?",
				options: ["Ufficio coordinamento e studi", "Ufficio affari internazionali", "Ufficio disciplinare", "Ufficio ricorsi Sezioni riunite"],
				correct: 2,
				motivation: "L'Ufficio disciplinare, uno dei sei uffici specializzati della Procura generale istituiti con la disposizione 4/2021, gestisce i procedimenti disciplinari a carico del personale amministrativo e dei magistrati quando di competenza.",
				category: "Procura Generale"
			},
			{
				question: "In quale periodo dell'anno si svolgono generalmente i giudizi di parifica dei rendiconti regionali?",
				options: ["Gennaio-marzo", "Aprile-giugno", "Maggio-luglio", "Settembre-novembre"],
				correct: 2,
				motivation: "I giudizi di parifica dei rendiconti regionali si svolgono generalmente nel periodo maggio-luglio, anche se ogni Regione ha un proprio calendario specifico, secondo quanto disciplinato dalla nota prot. 571 del 5 maggio 2022.",
				category: "Procura Generale"
			},
			{
				question: "Qual è l'acronimo della Procura europea istituita con Regolamento UE 2017/1939?",
				options: ["OLAF", "EUROSAI", "EPPO", "INTOSAI"],
				correct: 2,
				motivation: "EPPO (European Public Prosecutor's Office) è la Procura europea istituita con Regolamento (UE) 2017/1939 per perseguire i reati contro gli interessi finanziari dell'Unione. La Procura generale collabora con EPPO.",
				category: "Procura Generale"
			},
			{
				question: "Con quale periodicità i magistrati coordinatori degli uffici riferiscono al Procuratore generale sull'attività svolta?",
				options: ["Mensilmente", "Bimestralmente", "Trimestralmente", "Semestralmente"],
				correct: 2,
				motivation: "I magistrati coordinatori degli uffici della Procura generale hanno l'obbligo di riferire trimestralmente al Procuratore generale e al Procuratore aggiunto sull'attività svolta, entro 15 giorni dalla fine di ogni trimestre.",
				category: "Procura Generale"
			},
			{
				question: "Quale articolo del c.g.c. disciplina i conflitti di competenza tra sezioni regionali?",
				options: ["Art. 54 c.g.c.", "Art. 11 c.g.c.", "Art. 119, c. 1 c.g.c.", "Art. 207 c.g.c."],
				correct: 2,
				motivation: "L'art. 119, comma 1, del codice di giustizia contabile disciplina i conflitti di competenza tra sezioni regionali, che vengono risolti dalle Sezioni Riunite con la partecipazione della Procura generale.",
				category: "Procura Generale"
			},
			{
				question: "Quale attività di vertice si svolge tradizionalmente nel periodo gennaio-febbraio?",
				options: ["Parificazione Rendiconto generale dello Stato", "Inaugurazione anno giudiziario con relazione del P.G.", "Giudizi di parifica regionali", "Consigli di Procura ordinari"],
				correct: 1,
				motivation: "L'inaugurazione dell'anno giudiziario della Corte dei conti, con la relazione del Procuratore generale sull'attività svolta e le linee per l'anno successivo, si svolge tradizionalmente nel periodo gennaio-febbraio.",
				category: "Procura Generale"
			},
			{
				question: "Quale principio garantisce che ogni danno alla finanza pubblica sia perseguito con uguale rigore?",
				options: ["Principio di discrezionalità dell'azione", "Principio di opportunità politica", "Principio di obbligatorietà dell'azione", "Principio di facoltatività processuale"],
				correct: 2,
				motivation: "Il principio di obbligatorietà dell'azione, fondato sugli artt. 2, 3, 97 e 81 Cost., garantisce che ogni danno alla finanza pubblica sia perseguito con uguale rigore, indipendentemente da chi lo ha causato.",
				category: "Procura Generale"
			},
			{
				question: "Quale organizzazione internazionale delle Istituzioni Superiori di Controllo opera a livello europeo?",
				options: ["INTOSAI", "OLAF", "EUROSAI", "EPPO"],
				correct: 2,
				motivation: "EUROSAI è l'organizzazione europea delle Istituzioni Superiori di Controllo (il corrispettivo europeo di INTOSAI), con cui la Procura generale collabora per lo scambio di metodologie di controllo e best practices.",
				category: "Procura Generale"
			},
			{
				question: "Entro quale termine il Procuratore regionale dovrebbe apporre il visto sulla proposta di archiviazione?",
				options: ["Entro 5 giorni", "Entro 10 giorni", "Entro 15 giorni", "Entro 30 giorni"],
				correct: 2,
				motivation: "Secondo la prassi organizzativa interna, il Procuratore regionale dovrebbe apporre il visto sulla proposta di archiviazione entro 15 giorni, per garantire la tempestività nella definizione dei procedimenti.",
				category: "Procura Generale"
			},
			{
				question: "A chi vengono trasmessi i risultati del giudizio di parificazione del Rendiconto generale dello Stato?",
				options: ["Al Governo", "Al Parlamento", "Alla Corte Costituzionale", "Al Presidente della Repubblica"],
				correct: 1,
				motivation: "La decisione delle Sezioni Riunite sul giudizio di parificazione del Rendiconto generale dello Stato viene trasmessa al Parlamento e costituisce la base per l'approvazione parlamentare del rendiconto.",
				category: "Procura Generale"
			}
        ];
