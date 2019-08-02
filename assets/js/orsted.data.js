(function($){
  "use strict";

  window.z_DATA = [
    {
      title: "Underholdning",
      sub_header: "",
      acc_title: "",
      acc_body: "",
      question: "",
      category: "ET",
      questions: [
        {
          title: "Kører tv’et i baggrunden, selvom du ikke følger med?",
          answers: [
            {
              value: "3",
              title: "Ja, altid"
            },
            {
              value: "2",
              title: "Ja, ofte"
            },
            {
              value: "1",
              title: "Det sker"
            },
            {
              value: "0",
              title: "Nej, aldrig"
            }
          ]
        },
        {
          title: "Har du en spillekonsol (for eksempel PS, Wii, Xbox) stående på standby?",
          answers: [
            {
              value: "3",
              title: "Ja, altid"
            },
            {
              value: "2",
              title: "Ja, ofte"
            },
            {
              value: "1",
              title: "Det sker"
            },
            {
              value: "0",
              title: "Nej, aldrig"
            }
          ]
        },
        {
          title: "Har du tv og eventuelt tv-boks stående på standby?",
          answers: [
            {
              value: "3",
              title: "Ja, altid"
            },
            {
              value: "1",
              title: "Kun tv på standby"
            },
            {
              value: "2",
              title: "Kun tv-boks på standby"
            },
            {
              value: "0",
              title: "Nej, aldrig"
            }
          ]
        }
      ]
    },
    {
      title: "Belysning",
      sub_header: "",
      acc_title: "",
      acc_body: "",
      category: "LT",
      questions: [
        {
          title: "Er lyset tændt i rum, hvor ingen opholder sig?",
          answers: [
            {
              value: "3",
              title: "Ja, altid"
            },
            {
              value: "2",
              title: "Ja, ofte"
            },
            {
              value: "1",
              title: "Det sker"
            },
            {
              value: "0",
              title: "Nej, aldrig"
            }
          ]
        },
        {
          title: "Er der sparepærer eller LED-pærer i lamperne (inde og ude)?",
          answers: [
            {
              value: "0",
              title: "Ja, overalt"
            },
            {
              value: "1",
              title: "Mange steder"
            },
            {
              value: "2",
              title: "Få steder"
            },
            {
              value: "3",
              title: "Nej, slet ikke"
            }
          ]
        }
      ]
    },
    {
      title: "Køkken",
      sub_header: "",
      acc_title: "",
      acc_body: "",
      category: "KT",
      questions: [
        {
          title: "Bruger du mikroovnen, når du skal tø madvarer op?",
          answers: [
            {
              value: "3",
              title: "Ja, altid"
            },
            {
              value: "2",
              title: "Ja, ofte"
            },
            {
              value: "1",
              title: "Det sker"
            },
            {
              value: "0",
              title: "Nej, aldrig"
            }
          ]
        },
        {
          title: "Forvarmer du ovnen, inden du sætter maden ind?",
          answers: [
            {
              value: "3",
              title: "Ja, altid"
            },
            {
              value: "2",
              title: "Ja, ofte"
            },
            {
              value: "1",
              title: "Det sker"
            },
            {
              value: "0",
              title: "Nej, aldrig"
            }
          ]
        },
        {
          title: "Udnytter du eftervarmen og slukker for ovnen de sidste 10 minutter?",
          answers: [
            {
              value: "0",
              title: "Ja, altid"
            },
            {
              value: "1",
              title: "Ja, ofte"
            },
            {
              value: "2",
              title: "Det sker"
            },
            {
              value: "3",
              title: "Nej, aldrig"
            }
          ]
        }
      ]
    },
    {
      title: "Hårde hvidevarer",
      sub_header: "",
      acc_title: "",
      acc_body: "",
      category: "WG",
      questions: [
        {
          title: "Er dine hårde hvidevarer som ovn, komfur, fryser, køleskab, vaskemaskine mere end 5 år gamle?",
          answers: [
            {
              value: "3",
              title: "Ja, alle&shy;sammen"
            },
            {
              value: "2",
              title: "Ja, de fleste"
            },
            {
              value: "1",
              title: "Nogle af dem"
            },
            {
              value: "0",
              title: "Nej, de er yngre"
            }
          ]
        },
        {
          title: "Tjekker og justerer du temperaturen i køleskab og fryser?",
          answers: [
            {
              value: "0",
              title: "Ja, ofte"
            },
            {
              value: "1",
              title: "Af og til"
            },
            {
              value: "2",
              title: "Sjældent"
            },
            {
              value: "3",
              title: "Nej, aldrig"
            }
          ]
        }
      ]
    },
    {
      title: "Opvarmning",
      sub_header: "",
      acc_title: "",
      acc_body: "",
      category: "HT",
      questions: [
        {
          title: "Hvor varmt er der i hjemmets opholdsrum (stue og køkken)?",
          answers: [
            {
              value: "0",
              title: "18 - 19 grader"
            },
            {
              value: "1",
              title: "20 - 21 grader"
            },
            {
              value: "2",
              title: "22 - 23 grader"
            },
            {
              value: "3",
              title: "Ved ikke"
            }
          ]
        },
        {
          title: "Hvor gamle er termostaterne på dine radiatorer?",
          answers: [
            {
              value: "2",
              title: "Ældre end 15 år"
            },
            {
              value: "1",
              title: "Nyere end 15 år"
            },
            {
              value: "0",
              title: "Jeg har varme&shy;styring"
            },
            {
              value: "3",
              title: "Ved ikke"
            }
          ]
        }
      ]
    },
    {
      title: "Vask",
      sub_header: "",
      acc_title: "",
      acc_body: "",
      category: "LD",
      questions: [
        {
          title: "Hænger du vasketøjet på tørresnoren, eller smider du det i tørretumbleren?",
          answers: [
            {
              value: "0",
              title: "Altid på snoren"
            },
            {
              value: "1",
              title: "Oftest på snoren"
            },
            {
              value: "2",
              title: "Oftest i tumbler"
            },
            {
              value: "3",
              title: "Altid i tumbler"
            }
          ]
        },
        {
          title: "Hvilken temperatur vælger du til en almindelig kulørt vask?",
          answers: [
            {
              value: "0",
              title: "20 - 30 grader"
            },
            {
              value: "1",
              title: "40 grader"
            },
            {
              value: "2",
              title: "60 grader"
            },
            {
              value: "3",
              title: "90 grader"
            }
          ]
        },
        {
          title: "Hvilken temperatur vælger du til en kogevask?",
          answers: [
            {
              value: "0",
              title: "60 grader"
            },
            {
              value: "1",
              title: "70 grader"
            },
            {
              value: "2",
              title: "90 grader"
            },
            {
              value: "3",
              title: "Ved ikke"
            }
          ]
        }
      ]
    },
    {
      title: "Varmt vand",
      sub_header: "",
      acc_title: "",
      acc_body: "",
      category: "HW",
      questions: [
        {
          title: "Hvor lang tid tager du normalt brusebad?",
          answers: [
            {
              value: "3",
              title: "Jeg tager karbad"
            },
            {
              value: "0",
              title: "2 - 5 minutter"
            },
            {
              value: "1",
              title: "5 - 10 minutter"
            },
            {
              value: "2",
              title: "Over 10 minutter"
            }
          ]
        },
        {
          title: "Er der opsat sparehaner og/eller sparebruser?",
          answers: [
            {
              value: "0",
              title: "Ja, alle steder"
            },
            {
              value: "1",
              title: "Kun spare&shy;haner"
            },
            {
              value: "2",
              title: "Kun spare&shy;bruser"
            },
            {
              value: "3",
              title: "Nej, ingen"
            }
          ]
        }
      ]
    }
  ];

})(jQuery);
