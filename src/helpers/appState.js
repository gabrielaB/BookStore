export default {
  questions: [
    {
      id: 1,
      name: "Nutzung",
      text: "Wofür möchtest du dein neues Notebook hauptsächlich verwenden?",
      info:
        "Deine Auswahl hier hilft uns die Anforderungen an Arbeitsspeicher und Prozessor einzuschätzen.",
      answerType: "Radiobutton",
      answers: [
        {
          id: 1,
          text: "Surfen und Filme ansehen",
          explanationText:
            "Du erwartest eine solide Grundausstattung, um z.B. Texte zu verarbeiten, im Internet zu surfen oder für E-Mails. Du möchtest zudem regelmäßig Filme z.B. über Netflix ansehen.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 2
          },
          filters: [
            {
              id: 3,
              values: [
                397,
                10079,
                1876,
                1738,
                8871,
                4693,
                3132,
                5677,
                12208,
                4746,
                6832,
                42406,
                10185,
                9268,
                37788,
                31341,
                3522973,
                35477,
                1639776
              ]
            },
            {
              id: 62,
              values: [
                177,
                1243,
                5667,
                17871,
                17878,
                17889,
                18278,
                19240,
                25976,
                31546,
                31613,
                31666,
                48808,
                48858,
                83745,
                19420,
                32050,
                32051,
                32052,
                1168366,
                1168367,
                1168368,
                1876021,
                6050,
                8000,
                9617,
                11979,
                12243,
                20358,
                31081,
                47421,
                1538613,
                6035,
                8001,
                9555,
                9919,
                11978,
                20359,
                27500,
                31082,
                42074,
                1538612,
                5885,
                8002,
                9366,
                9949,
                11880,
                12242,
                20360,
                31083,
                36237,
                42073,
                1538611,
                8837,
                9116,
                7907,
                9115,
                2230906,
                1521765,
                1521766
              ]
            }
          ]
        },
        {
          id: 2,
          text: "Anspruchsvolle Officearbeiten",
          explanationText:
            "Mit deinem Notebook möchtest du in erster Linie zuverlässig arbeiten und dabei auch auf anspruchsvolle Anwendungen zurückgreifen.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 2
          },
          filters: [
            {
              id: 3,
              values: [
                3132,
                5677,
                12208,
                4746,
                6832,
                42406,
                10185,
                9268,
                37788,
                31341,
                3522973,
                35477,
                1639776
              ]
            },
            {
              id: 62,
              values: [
                6050,
                8000,
                9617,
                11979,
                12243,
                20358,
                31081,
                47421,
                1538613,
                6035,
                8001,
                9555,
                9919,
                11978,
                20359,
                27500,
                31082,
                42074,
                1538612,
                5885,
                8002,
                9366,
                9949,
                11880,
                12242,
                20360,
                31083,
                36237,
                42073,
                1538611,
                2230906,
                1521765,
                1521766
              ]
            }
          ]
        },
        {
          id: 3,
          text: "Digitale Bild- und Videobearbeitung",
          explanationText:
            "Du möchtest Bilder- oder Videos bearbeiten und benötigst dafür eine besonders hohe Rechenleistung.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 2
          },
          filters: [
            {
              id: 3,
              values: [3132, 5677, 12208, 4746, 6832]
            },
            {
              id: 62,
              values: [
                6035,
                8001,
                9555,
                9919,
                11978,
                20359,
                27500,
                31082,
                42074,
                1538612,
                5885,
                8002,
                9366,
                9949,
                11880,
                12242,
                20360,
                31083,
                36237,
                42073,
                1538611,
                1521765,
                1521766
              ]
            }
          ]
        },
        {
          id: 4,
          text: "Gaming",
          explanationText:
            "Du spielest regelmäßig (Online-) Spiele mit deinem Notebook und möchtest ein optimales Gaming-Erlebnis.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 9
          },
          filters: [
            {
              id: 3,
              values: [
                3132,
                5677,
                12208,
                4746,
                6832,
                42406,
                10185,
                9268,
                37788,
                31341,
                3522973,
                35477,
                1639776
              ]
            },
            {
              id: 62,
              values: [
                6035,
                8001,
                9555,
                9919,
                11978,
                20359,
                27500,
                31082,
                42074,
                1538612,
                5885,
                8002,
                9366,
                9949,
                11880,
                12242,
                20360,
                31083,
                36237,
                42073,
                1538611,
                1521765,
                1521766
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Mobilität",
      text: "Wie häufig wirst du dein Notebook unterwegs nutzen?",
      info:
        "Deine Auswahl hier hilft uns die Anforderungen an Displaygröße, Gewicht und Akkulaufzeit einzuschätzen.",
      answerType: "Radiobutton",
      answers: [
        {
          id: 1,
          text: "Ich nutze mein Notebook viel unterwegs.",
          explanationText: "Kleines Display, geringes Gewicht.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 3
          },
          filters: [
            {
              id: "weight",
              values: [0, 2]
            },
            {
              id: "battery",
              values: [6, "*"]
            },
            {
              id: 1942,
              values: [
                5233,
                14159,
                5227,
                5207,
                5208,
                5205,
                5238,
                50470,
                5221,
                5209,
                3079548,
                83741,
                7763,
                20235,
                43199,
                31167,
                5217,
                5237,
                5228,
                5210,
                32656,
                48300,
                5211,
                5216,
                7062,
                8285,
                8432,
                9987,
                5212
              ]
            }
          ]
        },
        {
          id: 2,
          text: "Ich nutze mein Notebook ab und zu unterwegs",
          explanationText: "Mittlere Displaygröße, mittleres Gewicht.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 3
          },
          filters: [
            {
              id: "weight",
              values: [0, 3]
            },
            {
              id: "battery",
              values: [3, "*"]
            },
            {
              id: 1942,
              values: [
                5217,
                5237,
                5228,
                5210,
                32656,
                48300,
                5211,
                5216,
                7062,
                8285,
                8432,
                9987,
                5212,
                5213,
                5214,
                5651,
                5234,
                5225
              ]
            }
          ]
        },
        {
          id: 3,
          text:
            "Ich nutze mein Notebook meistens zu Hause oder am Arbeitsplatz.",
          explanationText: "Großes Display, Gewicht egal.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 3
          },
          filters: [
            {
              id: 1942,
              values: [
                5221,
                5209,
                3079548,
                83741,
                7763,
                20235,
                43199,
                31167,
                5217,
                5237,
                5228,
                5210,
                32656,
                48300,
                5211,
                5216,
                7062,
                8285,
                8432,
                9987,
                5212,
                5213,
                5214,
                5651,
                5234,
                5225,
                5215,
                5222,
                5206,
                5218
              ]
            }
          ]
        },
        {
          id: 4,
          text: "Ich bin hier noch unentschlossen",
          explanationText: "Displaygröße, Gewicht egal.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 3
          },
          filters: []
        }
      ]
    },
    {
      id: 3,
      name: "Display",
      text:
        "Hast du besondere Anforderungen an den Bildschirm deines Notebooks?",
      info:
        "Deine Auswahl hier hilft uns die Anforderungen an Displayart und Displayauflösung einzuschätzen.",
      answerType: "Checkboxes",
      answers: [
        {
          id: 1,
          text: "Glänzendes Display (940)",
          explanationText: "Reflektionen stören mich nicht.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 48,
              values: [6509]
            }
          ]
        },
        {
          id: 2,
          text: "Mattes Display (675)",
          explanationText: "Ich möchte keine Spiegelungen im Display sehen.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 48,
              values: [1026]
            }
          ]
        },
        {
          id: 3,
          text: "Hohe Auflösung (mind. Full HD) (940)",
          explanationText:
            "Eine knackig scharfe Darstellung finde ich wichtig.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 47,
              values: [
                881,
                544,
                3971,
                17550,
                50439,
                21967,
                49909,
                12333,
                10291,
                83742,
                11933,
                9612,
                48308,
                32657,
                12250,
                15036,
                3985632,
                17584
              ]
            }
          ]
        }
      ]
    },
    {
      id: 8,
      name: "Display",
      text:
        "Hast du besondere Anforderungen an den Bildschirm deines Notebooks?",
      info:
        "Deine Auswahl hier hilft uns die Anforderungen an Displayart und Displayauflösung einzuschätzen.",
      answerType: "Checkboxes",
      answers: [
        {
          id: 1,
          text: "Glänzendes Display (940)",
          explanationText: "Reflektionen stören mich nicht.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 10
          },
          filters: [
            {
              id: 48,
              values: [6509]
            },
            {
              id: 12084,
              values: [41846]
            }
          ]
        },
        {
          id: 2,
          text: "Mattes Display (675)",
          explanationText: "Ich möchte keine Spiegelungen im Display sehen.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 10
          },
          filters: [
            {
              id: 48,
              values: [1026]
            },
            {
              id: 12084,
              values: [41846]
            }
          ]
        },
        {
          id: 3,
          text: "Sehr hohe Auflösung (4K UHD)",
          explanationText: "Ich bearbeite Videos mit sehr hoher Auflösung.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 10
          },
          filters: [
            {
              id: 47,
              values: [17584]
            },
            {
              id: 12084,
              values: [41846]
            }
          ]
        }
      ]
    },
    {
      id: 9,
      name: "Display",
      text:
        "Hast du besondere Anforderungen an den Bildschirm deines Notebooks?",
      info:
        "Deine Auswahl hier hilft uns die Anforderungen an Displayart und Displayauflösung einzuschätzen.",
      answerType: "Checkboxes",
      answers: [
        {
          id: 1,
          text: "Glänzendes Display (940)",
          explanationText: "Spiegelungen stören mich nicht beim Zocken.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 11
          },
          filters: [
            {
              id: 48,
              values: [6509]
            }
          ]
        },
        {
          id: 2,
          text: "Mattes Display (675)",
          explanationText: "Ich möchte keine Reflektionen im Display.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 11
          },
          filters: [
            {
              id: 48,
              values: [1026]
            }
          ]
        },
        {
          id: 3,
          text: "Sehr hohe Auflösung (4K UHD)",
          explanationText: "Meine Hardware reicht für die höchste Auflösung.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 11
          },
          filters: [
            {
              id: 47,
              values: [17584]
            }
          ]
        },
        {
          id: 4,
          text: "Schnelles Display",
          explanationText:
            "Spiele sollen besonders flüssig dargestellt werden.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 11
          },
          filters: [
            {
              id: 1069134,
              values: [6176890, 6176889]
            }
          ]
        }
      ]
    },
    {
      id: 10,
      name: "Grafikkarte",
      text: "Wie nutzt du dein Notebook für Bild- und Videobearbeitung?",
      info:
        "Deine Auswahl hier hilft uns die Anforderungen an Grafikkarte bzw. dedizierten Speicher einzuschätzen",
      answerType: "Radiobutton",
      answers: [
        {
          id: 1,
          text: "Einsteiger",
          explanationText: "Ich bearbeite ab und an Fotos.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 12,
              values: [
                20385,
                8092,
                41609,
                9582,
                37438,
                14196,
                11884,
                31763,
                13263,
                14248,
                42509,
                11932,
                42517,
                43240,
                31939,
                31773,
                31086,
                47602,
                32721,
                19571,
                19570,
                20367,
                47279,
                50565,
                43102,
                42388,
                49964,
                1364,
                39733,
                50440,
                316718,
                14711,
                5451186,
                5451185,
                1825389,
                4691234
              ]
            }
          ]
        },
        {
          id: 2,
          text: "Einsteiger",
          explanationText: "Ich bearbeite ab und an Fotos.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 12,
              values: [
                42775,
                22034,
                48675,
                21731,
                37641,
                37434,
                5191982,
                3045581,
                50210
              ]
            }
          ]
        },
        {
          id: 3,
          text: "Profi",
          explanationText:
            "Ich bearbeite primär Videos mit 4K Dateien und highend Detailauflösung.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 12,
              values: [
                41975,
                40692,
                33029,
                50374,
                32508,
                33030,
                50120,
                32534,
                33032,
                33033,
                49957,
                33031,
                50379,
                50381,
                4846584
              ]
            }
          ]
        }
      ]
    },
    {
      id: 11,
      name: "Grafikkarte",
      text: "Worauf kommt es dir beim Spielen an?",
      info:
        "Deine Auswahl hier hilft uns die Anforderungen an Grafikkarte bzw. dedizierten Speicher einzuschätzen",
      answerType: "Radiobutton",
      answers: [
        {
          id: 1,
          text: "Hohe Performance (schnell)",
          explanationText:
            "E-Sports Titel wie Counter Strike, League of Legends, Dota, StarCraft.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 12,
              values: [
                48309,
                48116,
                42220,
                42084,
                4967469,
                42411,
                47850,
                2705840,
                4484192,
                1859135,
                316719,
                316720,
                3642868,
                1724079,
                433319,
                1521772
              ]
            }
          ]
        },
        {
          id: 2,
          text: "Hohe Grafikleistung (Bildqualität)",
          explanationText: "Triple A Titel sollen möglichst gut aussehen.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 12,
              values: [42220, 42084, 4967469, 42411, 47850, 1521772]
            },
            {
              id: 13,
              values: [11851, 9964, 16961, 15523, 15521]
            }
          ]
        },
        {
          id: 3,
          text: "Performance und Grafikleistung sind mir beide sehr wichtig.",
          explanationText:
            "Alle Spiele auf möglichst hoher Detailstufe/Auflösung.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 5
          },
          filters: [
            {
              id: 12,
              values: [42084, 4967469, 42411, 47850, 1521772]
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Speicherbedarf",
      text: "Wie hoch ist dein Speicherbedarf?",
      info:
        "Deine Auswahl hier hilft uns die Anforderungen an Speicherkapazität einzuschätzen",
      answerType: "Checkboxes",
      answers: [
        {
          id: 1,
          text: "Weniger als 128 GB",
          explanationText: "TBD",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 6
          },
          filters: [
            {
              id: 43,
              values: [
                95,
                96,
                97,
                98,
                99,
                487,
                1339,
                2461,
                2466,
                3974,
                4365,
                6892,
                6893,
                8488,
                9054,
                9593,
                10005
              ]
            },
            {
              id: 2754,
              values: [6894, 9852]
            }
          ]
        },
        {
          id: 2,
          text: "Von 128 bis 256 GB",
          explanationText: "TBD",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 6
          },
          filters: [
            {
              id: 43,
              values: [
                2595,
                5597,
                488,
                9560,
                30775,
                489,
                2434221,
                875,
                490,
                6450,
                6451
              ]
            },
            {
              id: 2754,
              values: [6894, 9852]
            }
          ]
        },
        {
          id: 3,
          text: "Von 256 bis 512 GB",
          explanationText: "TBD",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 6
          },
          filters: [
            {
              id: 43,
              values: [
                47766,
                10053,
                491,
                492,
                12310,
                10249,
                2133,
                26007,
                27677,
                493,
                32299,
                27676,
                9811,
                4686,
                494,
                12214,
                8794,
                9079
              ]
            },
            {
              id: 2754,
              values: [6894, 9852]
            }
          ]
        },
        {
          id: 4,
          text: "Von 512 GB bis 1 TB",
          explanationText: "TBD ",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 6
          },
          filters: [
            {
              id: 43,
              values: [
                12211,
                10247,
                49609,
                9746,
                8731,
                9649,
                49662,
                8041,
                9574,
                1786,
                10371,
                2421,
                8647,
                2361,
                9625,
                11889,
                8648,
                11209,
                10255,
                10254,
                9803,
                2344,
                13136,
                8128,
                9479,
                25993,
                3474,
                10179,
                1739,
                9317,
                12267,
                10250,
                10251,
                11212,
                42436,
                11213
              ]
            },
            {
              id: 2754,
              values: [6894, 9852]
            }
          ]
        },
        {
          id: 5,
          text: "Mehr als 1 TB",
          explanationText: "TBD",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 6
          },
          filters: [
            {
              id: 43,
              values: [
                9317,
                12267,
                10250,
                10251,
                11212,
                42436,
                11213,
                9839,
                9390,
                9588,
                19632,
                48898,
                8410,
                8732,
                11875,
                42777,
                47407,
                9391,
                11855,
                8752,
                47768,
                3129,
                13265,
                9947,
                18015,
                2431,
                19566,
                19452,
                48154,
                42444,
                10278,
                10334,
                41633,
                10281,
                9323,
                3481,
                12286,
                48896,
                10338,
                19563,
                12233,
                8792,
                11401,
                8771,
                10176,
                30473,
                18005,
                9291,
                6176879,
                47430,
                32128,
                17885,
                15473,
                11430,
                50484,
                41345,
                4859,
                22031,
                20839,
                15961,
                11680,
                2841681,
                18001,
                11431,
                12268,
                19624,
                19640,
                38861,
                7061,
                48627,
                12159,
                5555073,
                14343,
                21383,
                7395
              ]
            },
            {
              id: 2754,
              values: [6894, 9852]
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Extras",
      text: "Welche Ausstattung sollte dein Notebook haben?",
      info: "",
      answerType: "Checkboxes",
      answers: [
        {
          id: 1,
          text: "USB C (60)",
          explanationText: "Ein Anschluss für alles.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 6932,
              values: [
                21969,
                21970,
                21971,
                21972,
                21973,
                21974,
                21975,
                2112368,
                2112369,
                2112378,
                2112379
              ]
            }
          ]
        },
        {
          id: 2,
          text: "Bluetooth (60)",
          explanationText: "Kabellos Daten, Musik und mehr übertragen.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 53,
              values: [542, 9499, 31970, 47500, 48961, 5226557]
            }
          ]
        },
        {
          id: 3,
          text: "Ethernet/LAN (120)",
          explanationText: "Besonders für große Datenmengen geeignet.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 50,
              values: [132, 133]
            }
          ]
        },
        {
          id: 4,
          text: "HDMI (0)",
          explanationText: "Anschluss für Beamer, Displays und mehr.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 409,
              values: [907, 8020, 8860]
            }
          ]
        },
        {
          id: 5,
          text: "DisplayPort (60)",
          explanationText: "Anschluss für Beamer, Displays und mehr.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 1289,
              values: [3736, 8733]
            }
          ]
        },
        {
          id: 6,
          text: "Windows Hello Support (60)",
          explanationText:
            "Einloggen per Fingerabdruck oder Gesichtserkennung.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 26,
              values: [93]
            }
          ]
        },
        {
          id: 7,
          text: "Dockinstation-Anschluss (60)",
          explanationText: "Erweitert die Zahl der Anschlüsse.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 20,
              values: [34, 49514, 49515, 49517]
            }
          ]
        },
        {
          id: 8,
          text: "Touchdisplay (8)",
          explanationText: "Falls du gerne mit einem Stift Eingaben machst.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 2649,
              values: [6504, 6517]
            }
          ]
        },
        {
          id: 9,
          text: "Windows (250)",
          explanationText: "Das am meisten verbreitete Betriebssystem.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 132,
              values: [30475, 30493, 50438, 5892, 9861]
            }
          ]
        },
        {
          id: 10,
          text: "Mac OS (100)",
          explanationText: "Für alle, die einen Apple Rechner haben wollen.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 132,
              values: [3181532, 47499]
            }
          ]
        },
        {
          id: 11,
          text: "Chrome OS (0)",
          explanationText: "Betirebssystem von Google.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 132,
              values: [11180]
            }
          ]
        },
        {
          id: 12,
          text: "mobiler Internetzugang",
          explanationText: "4G/LTE Modem integriert.",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: 7
          },
          filters: [
            {
              id: 6916,
              values: [21788]
            }
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Preis",
      text: "Welchen Betrag möchtest du maximal ausgeben?",
      info: "",
      answerType: "Checkboxes",
      answers: [
        {
          id: 1,
          text: "bis 400€",
          explanationText: "",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: ""
          },
          filters: [
            {
              id: "price",
              values: [0, 400]
            }
          ]
        },
        {
          id: 2,
          text: "400€ - 600€",
          explanationText: "",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: ""
          },
          filters: [
            {
              id: "price",
              values: [400, 600]
            }
          ]
        },
        {
          id: 3,
          text: "600€ - 800€",
          explanationText: "",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: ""
          },
          filters: [
            {
              id: "price",
              values: [600, 800]
            }
          ]
        },
        {
          id: 4,
          text: "800€ - 1.000€",
          explanationText: "",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: ""
          },
          filters: [
            {
              id: "price",
              values: [800, 1000]
            }
          ]
        },
        {
          id: 5,
          text: "1.000€ - 2.000€",
          explanationText: "",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: ""
          },
          filters: [
            {
              id: "price",
              values: [1000, 2000]
            }
          ]
        },
        {
          id: 6,
          text: "mehr als 2.000€",
          explanationText: "",
          image: "www.image.bg",
          nextQuestion: {
            defaultNextQuestion: ""
          },
          filters: [
            {
              id: "price",
              values: [2000, "*"]
            }
          ]
        }
      ]
    }
  ]
};
