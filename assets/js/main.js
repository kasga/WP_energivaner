(function($){
    "use strict";

    window.MAIN = {

        // Handling views with bxSlider
        manager : $('.z_question_views').bxSlider({
            infiniteLoop : false,
            slideSelector : $('.z_view'),
            mode : 'fade',
            speed : 0,
            adaptiveHeight : true,
            adaptiveHeightSpeed : 0,
            startSlide : 0,
            touchEnabled : false,
            pager : false,
            controls : false,
            onSlideBefore: function () {
              // Scroll to top
              if ('parentIFrame' in window) {
                  // Send scroll event
                  parentIFrame.sendMessage('scrollToIframe');
              } else {
                  $(window).scrollTop(0);
              }
            },
            onSlideAfter: function (item, oldIndex, newIndex) {
                switch (newIndex) {
                    case 0:
                        break;
                    case 1:
                        MAIN.tracking('Step 1: Underholdning');
                        break;
                    case 2:
                        MAIN.tracking('Step 2: Belysning');
                        break;
                    case 3:
                        MAIN.tracking('Step 3: Køkken');
                        break;
                    case 4:
                        MAIN.tracking('Step 4: Hårde hvidevarer');
                        break;
                    case 5:
                        MAIN.tracking('Step 5: Opvarmning');
                        break;
                    case 6:
                        MAIN.tracking('Step 6: Vask');
                        break;
                    case 7:
                        MAIN.tracking('Step 7: Varmt vand');
                        break;
                    case 8:
                        MAIN.tracking('Step 8: Resultatside');
                        break;
                }
            }
        }),

        $cta_footer : $('.z_view_ctas'),
        $view : $('.z_view'),

        // Tracking base
        tracking_base: 'beregner/energivaner/',

        // API base url
        apiBase: 'https://api.de-dynamisk.dk/api',

        result_data : [
            {
              "init" : false,
              "ET": [
                {
                  "title" : "TV (i baggrunden)",
                  "q_txt": "Kører tv’et i baggrunden, selvom du ikke følger med?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Hvis du bruger dit tv som lydtapet, bør du overveje at slukke for det, når du ikke bruger det. Der kan spares ca. 100 kr. ved at bruge tv en time mindre om dagen.",
                  "tip_alt" : "Fjernbetjening der peger på et TV"
                },
                {
                  "title" : "spillekonsol på standby",
                  "q_txt": "Har du en spillekonsol (for eksempel PS, Wii, Xbox) stående på standby?",
                  "a_txt": "",
                  "a_val":0,
                  "a_qual" : 0,
                  "tip_txt" : "Sluk for spillekonsollen på kontakten, når den ikke er i brug. Den kan koste op mod 3.000 kr. om året i forbrug, hvis den ligger tændt uden at den benyttes.",
                  "tip_alt" : "Controller til spillekonsol"
                },
                {
                  "title" : "tv(-boks) på standby",
                  "q_txt": "Har du tv og eventuelt tv-boks stående på standby?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Brug en spareskinne til tv, tv-boks, spillekonsoller og dvd-afspillere, så slukker du for det hele ét sted og kan spare op til 411 kr. årligt.",
                  "tip_alt" : "Standby-knap"
                }
              ],
              "LT": [
                {
                  "title" : "lys",
                  "q_txt": "Er lyset tændt i rum, hvor ingen opholder sig?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Du kan også skifte til LED-pærer, de bruger minimalt med el.",
                  "tip_alt" : "Lamper over køkkenvask",
                  "tip_link_text" : "Se hvad du kan spare",
                  "tip_link": "https://shop.orsted.dk/shop/frontpage.html"
                },
                {
                  "title" : "sparepærer",
                  "q_txt": "Er der sparepærer eller LED-pærer i lamperne (inde og ude)?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Når din halogenpære ikke kan mere, så skift til en LED-pære. Den er dyrere i indkøb, men den lever meget længe (15-30 år), og dens strømforbrug er minimalt.",
                  "tip_alt" : "4 forskellige elpærer",
                  "tip_link_text" : "Gå til energishoppen",
                  "tip_link" : "https://shop.orsted.dk/shop/frontpage.html"
                }
              ],
              "KT": [
                {
                  "title" : "mikroovn",
                  "q_txt": "Bruger du mikroovnen, når du skal tø madvarer op?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Har du frostvarer, så undgå at tø dem op i mikroovn. Læg dem i stedet i køleskabet aftenen før, og udnyt kulden i køleskabet.",
                  "tip_alt" : "Microovn"
                  // "tip_link_text" : "Sparetips til når du laver mad i mirkoovnen",
                  // "tip_link" : "http://www.orstedenergy.dk/privat/energitips-og-tilskud/energibesparelser-i-hjemmet/h%C3%A5rde-hvidevarer/sparetips-til-mikroovn?nm_extag=Link%3D%2CEnergivanetesten%2520%2CGodt%2520r%25C3%25A5d%2520til%2520mikroovn%2C"
                },
                {
                  "title" : "ovn",
                  "q_txt": "Forvarmer du ovnen, inden du sætter maden ind?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Drop forvarmen, og sluk for ovnen 10 minutter før, maden er færdig. Hvis du bruger ovnen hver dag, kan du spare op til 390 kr. om året.",
                  "tip_alt" : "Kogeplade med gryder"
                  // "tip_link_text" : "6 gode råd til et lavere elforbrug, når du laver mad",
                  // "tip_link" : "http://www.orstedenergy.dk/privat/energitips-og-tilskud/energibesparelser-i-hjemmet/hårde-hvidevarer/sparetips-til-ovn-og-komfur?nm_extag=Link%3D%2CEnergivanetesten%2520%2CGodt%2520r%25C3%25A5d%2520til%2520ovn%2520og%2520komfur%2C"
                },
                {
                  "title" : "ovnen",
                  "q_txt": "Udnytter du eftervarmen og slukker for ovnen de sidste 10 minutter?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Fyld ovnen op, hvis du bruger varmluft, så brug gerne flere plader. Drop forvarmen, og udnyt eftervarmen i ovnen når maden skal have mere end 30 min. Sluk for ovnen 10 min før og lad maden stå i ovnen.",
                  "tip_alt" : "Ovn"
                }
              ],
              "WG": [
                {
                  "title" : "hvidevarer",
                  "q_txt": "Er dine hårde hvidevarer som ovn, komfur, fryser, køleskab, vaskemaskine mere end 5 år gamle?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Har du gamle hårde hvidevarer, så mål dem med en energimåler, så du kan se, om de bruger meget strøm. Er dine hårde hvidevarer mere end 10 år gamle kan der være rigtig mange penge at spare ved at skifte dem ud – især hvis målingen viser, at de er nogle strømslugere.",
                  "tip_alt" : "Hårde hvidevarer"
                },
                {
                  "title" : "køl og frys",
                  "q_txt": "Tjekker du temperaturen i køleskab og fryser?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Hav fast et termometer liggende i både køleskab og fryser, så du kan følge med i, om temperaturen er den rette. +5 i dit køleskab og -18 i din fryser.",
                  "tip_alt" : "Køleskab"
                  // "tip_link_text" : "Få 4 gode vaner og spar penge",
                  // "tip_link" : "http://www.orstedenergy.dk/privat/energitips-og-tilskud/energibesparelser-i-hjemmet/hårde-hvidevarer/sparetips-til-køleskab-og-fryser?nm_extag=Link%3D%2CEnergivanetesten%2520%2CGodt%2520r%25C3%25A5d%2520til%2520k%25C3%25B8l%2520og%2520frys%2C"
                }
              ],
              "HT": [
                {
                  "title" : "varme",
                  "q_txt": "Hvor varmt er der i hjemmets opholdsrum (stue og køkken) ?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Når temperaturen sænkes med 1 grad, kan du spare op til 5 % på dit varmeforbrug.",
                  "tip_alt" : "Termostat"
                  // "tip_link_text" : "Gode tips der sparer dig penge",
                  // "tip_link" : "http://www.orstedenergy.dk/privat/energitips-og-tilskud/energibesparelser-i-hjemmet/varme/mindsk-varmetabet?nm_extag=Link%3D%2CEnergivanetesten%2520%2CGodt%2520r%25C3%25A5d%2520til%2520varme%2C"
                },
                {
                  "title" : "termostater",
                  "q_txt": "Hvor gamle er termostaterne på dine radiatorer?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Gamle termostater reagerer ikke så hurtigt og hvis for eksempel ventilnålen sætter sig fast hele tiden, så buldrer varmen derud af.",
                  "tip_alt" : "Radiatortermostat"
                                  
                }
              ],
              "LD": [
                {
                  "title" : "tørring af tøj",
                  "q_txt": "Hænger du vasketøjet på tørresnoren, eller smider du det i tørretumbleren?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Tøjet skal centrifugeres mest muligt, hvis tørretumbleren skal bruges.",
                  "tip_alt" : "Tøj på tørresnor"
                },
                {
                  "title" : "vask",
                  "q_txt": "Hvilken temperatur vælger du til en almindelig kulørt vask?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "En almindelig kulørtvask kan vaskes på 30-40 grader i stedet for 60 grader. Fyld maskinen.",
                  "tip_alt" : "Åben vaskemaskine",
                  //"tip_link_text" : "Tag energitesten",
                  //"tip_link" : "https://orsted.dk/Privat/Faa-en-lavere-regning/Test-og-tips/Test-dit-energiforbrug/Test-dine-energivaner"
                },
                {
                  "title" : "kogevask",
                  "q_txt": "Hvilken temperatur vælger du til en kogevask?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "I en almindelig husstand, hvor alle er raske kan kogevasken vaskes på 60 grader og ikke 90 grader.",
                  "tip_alt" : "Åben vaskemaskine"
                }
              ],
              "HW": [
                {
                  "title" : "bad",
                  "q_txt": "Hvor lang tid tager du normalt brusebad?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Undgå karbad. Sluk for det varme vand i brusebadet, mens du sæber dig ind og kommer shampoo i håret.",
                  "tip_alt" : "Badeværelse"
                },
                {
                  "title" : "vandforbrug",
                  "q_txt": "Er der opsat sparehaner og/eller sparebruser?",
                  "a_txt": "",
                  "a_val": 0,
                  "a_qual" : 0,
                  "tip_txt" : "Hvis du skifter dine vandhaner og bruser til sparehaner og sparebruser, bruger du kun halvt så meget vand.",
                  "tip_alt" : "Rindende vand"
                }
              ]
            }
        ],
    
        result_txts : [
            {
                "header" : 'Flot! Hold fast i de gode vaner',
                "sub_header" : '',
                "description" : 'Det ser godt ud. Du gør tydeligvis mange ting rigtigt. Fortsæt med det – og husk, at der hele tiden opstår nye muligheder for at spare på energiforbruget.',
                "degree" : 'er lavt'
            },
            {
                "header" : 'Der er plads til forbedring',
                "sub_header" : 'Men se positivt på det! Det betyder, at du har mulighed for at spare penge.',
                "description" : 'Du gør mange ting rigtigt, men du vil sandsynligvis kunne udnytte energien endnu mere effektivt og spare penge, hvis du ændrer på nogle af dine vaner og rutiner.',
                "degree" : 'kunne være lavere'
            },
            {
                "header" : 'Der er virkelig plads til forbedring',
                "sub_header" : 'Men se positivt på det! Det betyder, at du har mulighed for at spare penge.',
                "description" : 'Det betyder, at du kan udnytte energien meget mere effektivt og højst sandsynligt spare penge, hvis du ændrer på dine vaner og rutiner.',
                "degree" : 'er højt'
            },
            {
                "header" : 'Åh-åh! Det ser dyrt ud',
                "sub_header" : 'Men se positivt på det! Det betyder, at du har mulighed for at spare penge.',
                "description" : 'Det betyder, at du kan udnytte energien meget mere effektivt og højst sandsynligt spare en del penge, hvis du ændrer på dine vaner og rutiner.',
                "degree" : 'er virkelig højt'
            }
        ],

        // Initialize
        init: function () {
            this.misc();
            this.change_view();
            this.build_views();
            // Disable native autocompletes
            this.disableNativeAutocomplete();
            this.preloader();
            this.animate_standbybtn();
            this.start_test();
            this.handle_answers();
            this.simple_accordion();
            this.handleNewsletter();
            this.handleAutoComplete();
            this.simple_modal();
            // New custom tooltips
            this.formHelp();
            // Terms popover element
            this.popover();
            // Handle theme background image
            this.imageTheme();
            // Handle arrow links
            this.linkArrow();
            // Build export data
            this.buildExpData();

            MAIN.tracking('Start');
        },

        simple_modal : function() {

            $('.question-help-trigger').hammer().on('tap', function() {
                var content = $(this).parent().find('.question-help-content');
                if( content.hasClass('_open') ) {
                    content.removeClass('_open');
                } else {
                    content.addClass('_open');
                }
            });

        },        

        // Handle tracking
        tracking: function (path) {
            // Is path an array?
            if ($.isArray(path)) {
                path = path.join('/');
            }

            // Track
            if (typeof $netminers !== 'undefined') {
                $netminers.push(
                    ['postPageView', MAIN.tracking_base + path]
                );
            }

            // Google analytics?
            if (typeof ga !== 'undefined') {
                ga('send', 'pageview', MAIN.tracking_base + path);
            }
        },

        misc : function() {

            $('input[data-type="numeric"]').hammer().on('keydown', function(e) {

                var k = e.keyCode;
                if( k == 8 || k == 9 || k == 13 || k == 35 || k == 36 || k == 37 || k == 39 || (k > 45 && k < 58) || (k > 95 && k < 106)){
                    return true;
                } else {
                    e.stopPropagation
                    e.preventDefault();
                    return false;
                }

            });

            // Fixes extra input cursor mysteriously appearing when clicking on the red border
            $('.mandatory').hammer().on('tap', function(e){
                e.preventDefault();
            });
        },

        simple_accordion : function() {

            $('.z_acc_trigger').hammer().on('tap', function() {
                var parent = $(this).closest('.z_acc_wrap');
                if( parent.hasClass('_open') ) {
                    parent.removeClass('_open');
                } else {
                    parent.addClass('_open');
                }
            });

        },

        buildExpData : function(energy_num) {
            var expData = {};
            for( var key in MAIN.result_data[0] ) {
                for( var subkey in MAIN.result_data[0][key] ) {
                    expData[MAIN.result_data[0][key][subkey].q_txt] = MAIN.result_data[0][key][subkey].a_txt;
                }
            }
    
            // Add energy number
            expData.result = energy_num;
    
            // Send request
            $.ajax({
                type: 'POST',
                data: JSON.stringify(expData),
                contentType: 'text/plain',
                processData: false,
                xhrFields: { withCredentials: true },
                url: MAIN.apiBase+'/calculator/1',
                success: function (data) { },
                error: function (err) { }
            });
        },

        set_result : function() {
            var key;
            var point_arr = [],
                tip_cats = [];
            var tip_fixx = [];
            for( key in MAIN.result_data[0] ) {
                var sub_key;
                for( sub_key in MAIN.result_data[0][key] ) {
                    tip_cats.push( MAIN.result_data[0][key][sub_key].a_val+'_'+' '+MAIN.result_data[0][key][sub_key].title);
                    point_arr.push( MAIN.result_data[0][key][sub_key].a_val );
                }
            }
    
            // Sort the concatenated string of point + title
            var sorted = tip_cats.sort(),
                worst_3 = sorted.slice( Math.max( sorted.length - 3, 1 ) );
    
            // Split each string in the array and push title to new array
            var improve_on = [];
            for( var i = 0; i < worst_3.length; i++ ) {
                var test = worst_3[i].split('_');
                improve_on.push( test[1] );
            }
    
            // Handle the 3rd tip title
            var last_in_string = improve_on.slice( Math.max( improve_on.length - 1 ) ),
                chunk = improve_on.slice( 0, -1 ),
                improve_str = chunk + ' og' + last_in_string;
    
            // Flet tekst
            $('.z_saveon_this').text(improve_str);
    
            $('.z_tips_wrapper').empty();
    
            // Tip snippet flet
            for( var i = 0; i < improve_on.length; i++ ) {
                var index = 0, key;
                for( key in MAIN.result_data[0] ) {
                    var subindex = 0, subkey;
                    for( var j = 0; j < MAIN.result_data[0][key].length; j++ ) {
                        var title_str = improve_on[i].trim();
                        var result_str = MAIN.result_data[0][key][j].title.trim();
                        if( result_str == title_str ) {
                            var tip_snippet = $('<div class="row teaser recommendation">'+
                                                    '<img class="z_recommendation_img" src="assets/img/z_tip_'+ key+j +'.jpg">'+
                                                    '<div class="theme-content">'+
                                                        '<h4>Gode råd til '+MAIN.result_data[0][key][j].title+'</h4>'+
                                                        '<p>'+MAIN.result_data[0][key][j].tip_txt+'</p>'+
                                                        ((MAIN.result_data[0][key][j].tip_link) ? '<a href="'+ MAIN.result_data[0][key][j].tip_link + '" target="_parent" class="btn btn-blue">' + ((MAIN.result_data[0][key][j].tip_link_text) ? MAIN.result_data[0][key][j].tip_link_text : 'Læs mere') + '</a>' : '') +
                                                    '</div>'+
                                                '</div>');
    
                            $('.z_tips_wrapper').append( tip_snippet );
                            //$('#zupa_41346').append( tip_snippet );
                        }
                    }
                    index++;
                }
            }
    
            // Calculate the sum of the points
            var total_points = point_arr.reduce(function(a, b) {
                return a + b;
            });
            var energy_num_dec = (total_points / 51) * 100;
            var energy_num = Math.round(energy_num_dec);
            // Handling which advice to show on result view
            var qual;
            if( energy_num <= 25 ) {
                qual = 0;
            } else if( energy_num > 25 && energy_num <= 50 ) {
                qual = 1;
            } else if( energy_num > 50 && energy_num <= 75 ) {
                qual = 2;
            } else if( energy_num > 75 ) {
                qual = 3;
            }
            $('.z_r_descr').text( MAIN.result_txts[qual].description );
            $('.z_r_header').text( MAIN.result_txts[qual].header );
            $('.z_r_subheader').text( MAIN.result_txts[qual].sub_header );
            $('.z_enum_quality').text( MAIN.result_txts[qual].degree );
            
            var $meter = $('svg.meter'),
                $needle = $meter.find('.needle'),
                degrees = (energy_num * 2),
                $your_energy = $('.z_your_energynum'),
                $bar = $('.chart').find('.bar'),
                $usage = $bar.find('.bar-usage'),
                $average = $bar.find('.bar-average'),
                $usage_text = $usage.find('.bar-text-container'),
                $average_text = $average.find('.bar-text-container'),
                $usage_height, $average_height = 42, // Fixed average consumption
                $label = $bar.find('li .label'),
                $brace = $bar.find('.bar-brace');
            
            // Correct degrees
            if (degrees < 100) {
                degrees = degrees - 2;
            } else {
                degrees = degrees + 2;
            }
            
            // Set the needle to "0" before animating
            TweenMax.to( $needle, 0, {
                rotation : -100,
                transformOrigin:"50% 100%",
                ease : Elastic.easeOut
            });
            
            // Animate needle
            setTimeout(function() {
                TweenMax.to( $needle, 3, {
                    rotation : "+="+ degrees,
                    transformOrigin:"50% 100%",
                    ease : Elastic.easeOut
                });
            }, 100);
            
            // ..and numbers
            $({ Counter: 0 }).animate({ Counter: energy_num }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $your_energy.text(Math.ceil(this.Counter));
                },
                progress: function() {
                    var num = Math.ceil(this.Counter);
                    if( num <= 25 ) {
                        TweenMax.to( $your_energy , .2, { ease : Sine.easeInOut} );
                        TweenMax.to( $usage , .2, { ease : Sine.easeInOut} );
                    } else if( num > 25 && num <= 75 ) {
                        TweenMax.to( $your_energy , .2, { ease : Sine.easeInOut} );
                        TweenMax.to( $usage , .2, { ease : Sine.easeInOut} );
                    } else if( num > 75 ) {
                        TweenMax.to( $your_energy , .2, { ease : Sine.easeInOut} );
                        TweenMax.to( $usage , .2, { ease : Sine.easeInOut} );
                    }
                },
                complete: function() {
                }
            });
            
            // Above or below 50 points
            // Handle bar chart labels
            $label.each(function() {
                var $text_num = $(this).text();
                $(this).attr('data-num', $text_num);
                var $data_num = $(this).data('num');

                if (energy_num > 50) {
                    $(this).text($data_num * 2);
                } else {
                    $(this).text($data_num);
                }
            });

            // Handle bars and brace
            if (energy_num > 50) {
                $brace.addClass('x2');
                $usage_height = energy_num;
            } else {
                $brace.removeClass('x2');
                $usage_height = energy_num * 2;
                $average_height = $average_height * 2;
            }
            
            // ..aaaand the bars
            TweenMax.to( $usage, 2, {
                height : $usage_height +'%',
                delay : 0.1,
                ease : Strong.easeOut,
                onUpdate: function() {
                    if ($usage.height() < 25) {
                        $usage_text.addClass('offset');
                    } else {
                        $usage_text.removeClass('offset');
                    }
                }
            });

            TweenMax.to( $average, 3, {
                height : $average_height +'%',
                delay : 0.1,
                ease : Strong.easeOut,
                onUpdate: function() {
                    if ($average.height() < 25) {
                        $average_text.addClass('offset');
                    } else {
                        $average_text.removeClass('offset');
                    }
                }
            });
    
            // Save result
            MAIN.buildExpData(energy_num);
            // Add pictures to tips
            MAIN.imageTheme();
        },

        start_test : function() {
            // Handle start button click
            $('#z_start').hammer().on('tap', function() {
                // Go to first step
                MAIN.manager.goToNextSlide();

                // Tracking
                // MAIN.tracking( 'Start' );

                TweenMax.to( $('.z_view_ctas'), .2, {
                    autoAlpha : 1,
                    maxHeight : 10000
                });
            });
        },

        // Handle autocomplete
        handleAutoComplete: function () {
            // Find autocomplete
            var $input = $('input[data-type="autocomplete"]');

            // Setup autocomplete
            $input.autocomplete({
                serviceUrl: 'https://dawa.aws.dk/adresser/autocomplete',
                minChars: 3,
                maxHeight: 300,
                paramName: 'q',
                dataType: 'json',
                formatResult: function(suggestion, currentValue) {
                    return suggestion.value;
                },
                transformResult: function(response) {
                    // Return modified suggestions
                    return {
                        suggestions: $.map(response, function(item) {
                            return { value: item.tekst, data: item.adresse };
                        })
                    };
                },
                onSelect: function (suggestion) {
                    // // Build address-string
                    // var address = [
                    //     suggestion.data.vejnavn,
                    //     suggestion.data.husnr,
                    //     suggestion.data.etage,
                    //     suggestion.data['dør'],
                    // ].join(' ');

                    // // Trim
                    // address = $.trim(address);

                    // // Set address
                    // $('input[name="address"]').val(address);

                    // // Set postal
                    // $('input[name="zip"]').val(suggestion.data.postnr);

                    // // Set city
                    // $('input[name="city"]').val(suggestion.data.postnrnavn);
                }
            });
        },

        // Handle required fields
        required: function (index) {
            // Get required fields
            var $required;

            // Make sure to blur active element
            $(':focus').blur();

            // Index provided?
            if (index) {
                // Get active page
                $required = $('.page').slice(0, index).find('.mandatory');
            } else {
                $required = $('.page').find('.mandatory:visible');
            }

            // Any mandatory fields not filled out?
            var not_filled = false; $required.each(function(){
                // Get input
                var $input = $(this).find('input,select,textarea').eq(0);

                // Check if it has been filled
                var value = $input.val();

                // Handle radiobutton
                if ($input.is('[type="radio"]') || $input.is('[type="checkbox"]')) {
                    if ($('[name="' + $input.attr('name') + '"]:checked').length === 0) {
                        value = '';
                    }
                }

                if (value === '') {
                    // First input?
                    if (not_filled === false) {
                        $input.focus();
                    }

                    // Set filled status
                    not_filled = true;

                    // Show error
                    if ($(this).closest('.form-group').find('.error-text,.radio-error-text').length) {
                        $(this).closest('.form-group').removeClass('has-danger').find('.error-text,.radio-error-text').remove();
                    }

                    // Append error-message
                    $('<div/>')
                        .addClass(($input.is('[type="radio"]') || $input.is('[type="checkbox"]')) ? 'radio-error-text' : 'error-text')
                        .html(($(this).data('error')) ? $(this).data('error') : 'Dette felt skal udfyldes')
                        .appendTo($(this).closest('.form-group'));

                    if ($(this).find('input').length &&
                        !$(this).find('input').is('[type="radio"]') &&
                        !$(this).find('input').is('[type="checkbox"]')) {
                        $(this).closest('.form-group').addClass('has-danger')
                    }

                    // Highlight
                    $(this).one('change focus focusin keydown', function() {
                        $(this).closest('.form-group').removeClass('has-danger').find('.error-text,.radio-error-text').remove();
                    });
                }
            });

            // Make sure theres no visible errors showing
            if ($('.error-text:visible').length) {
                not_filled = true;
            }

            // Return true if all mandatory fields has been filled
            if (!not_filled) return true;

            return false;
        },

        change_view : function() {

            // Buttons
            var $nxt = MAIN.$cta_footer.find('._nxt'),
                $nxt_text = $nxt.text(),
                $prev = MAIN.$cta_footer.find('._prev'),
                $first = $('._first');

            // Next handler
            $nxt.hammer().on('tap', function() {
                var $cur_view_index = MAIN.manager.getCurrentSlide();
                var $cur_view = $('.z_view').eq( parseInt( $cur_view_index ) );
                var $questions_wrap = $cur_view.find('.z_questions');

                $questions_wrap.find('.z_radiobtn_bar_wrap').each(function() {
                    var $btn_wrap = $(this).find('.z_radiobtn_bar');
                    if( $btn_wrap.find('.active').length === 0 ) {
                        $btn_wrap.parent().addClass('error');
                    } else {
                        $btn_wrap.parent().addClass('valid');
                    }
                });

                var valid_rows = $questions_wrap.find('.z_radiobtn_bar_wrap.valid').length;
                var num_of_rows = $questions_wrap.find('.z_radiobtn_bar_wrap').length;

                // If valid
                if( valid_rows === num_of_rows ) {

                    var obj_index = MAIN.manager.getCurrentSlide() - 1;
                    var result = $cur_view.find('.z_calc_saved').data('sum');

                    // Next question slide
                    MAIN.manager.goToNextSlide();

                    // Scroll to top of page
                    // TweenMax.to( window, .3, {
                    //   scrollTo : {
                    //       y : 0
                    //   },
                    //   delay : .4
                    // });

                    // Change _nxt button text on last question page
                    if( $cur_view_index === 6 ) {
                        $nxt.text('Se resultat');
                    } else {
                        $nxt.text($nxt_text);
                    }

                    // Hide footer if we're going to result page
                    if( $cur_view_index === 7 ) {
                        TweenMax.to( $('.z_view_ctas'), 0, {
                            autoAlpha : 0,
                            maxHeight : 0
                        });
                        // Set result
                        MAIN.set_result();

                        $('.z_view_ctas').addClass('no-padding');
                    }

                    // // Scroll to top
                    // if ('parentIFrame' in window) {
                    //     // Send scroll event
                    //     parentIFrame.sendMessage('scrollToIframe');
                    // } else {
                    //     $(window).scrollTop(0);
                    // }

                } else { // validation error, scroll to first row with error

                    // var first_invalid_offset_top = Math.floor( $questions_wrap.find('.z_radiobtn_bar_wrap.error').eq(0).offset().top );
                    // TweenMax.to( window, .3, {
                    //   scrollTo : {
                    //       y : first_invalid_offset_top - 20
                    //   },
                    //   delay : .4
                    // });
                }

            });

            $prev.hammer().on('tap', function() {
                var $cur_view_index = MAIN.manager.getCurrentSlide();
                if( $cur_view_index === 1 ) {
                    TweenMax.to( $('.z_view_ctas'), 0, {
                        autoAlpha : 0,
                        maxHeight : 0
                    });
                }

                // Set _nxt button initial text
                $nxt.text($nxt_text);
                
                MAIN.manager.goToPrevSlide();

                // TweenMax.to( window, .3, {
                //   scrollTo : {
                //       y : 0
                //   },
                //   delay : .4
                // });

            });

            $first.hammer().on('tap', function() {                
                MAIN.manager.goToSlide(1);

                TweenMax.to( $('.z_view_ctas'), 0, {
                    autoAlpha : 1,
                    maxHeight : 10000
                });

                $('.z_view_ctas').removeClass('no-padding');

                // // Scroll to top of page
                // TweenMax.to( window, .3, {
                //     scrollTo : {
                //         y : 0
                //     },
                //     delay : .4
                // });
            });

        },

        handle_answers : function() {

            $('.z_lbl').hammer().on('tap', function() {
                // Set init to true, so user is warned when leaving
                MAIN.result_data[0].init = true;

                var point = $(this).data('val'),
                    txt_val = $(this).find('.z_lbl_txt').text(),
                    CAT = $(this).closest('.z_questions').data('cat'),
                    child = $(this).closest('.z_radiobtn_bar_wrap'),
                    parent = $(this).closest('.z_view'),
                    $bar_wrap = $(this).closest('.z_radiobtn_bar');
    
                var index = parent.find('.z_radiobtn_bar_wrap').index(child);
    
                child.find('._test_val').remove();
                var test_val = $('<span class="_test_val"> = '+point+'</span>');
                //$(this).find('.z_lbl_txt').append(test_val);
    
                var qindex = $(this).closest('.z_radiobtn');
                var quality = $(this).closest('.z_radiobtn_bar').find('.z_radiobtn').index(qindex);
                // Save values to object
                MAIN.result_data[0][CAT][index].a_qual = quality;
                MAIN.result_data[0][CAT][index].a_val = point;
                MAIN.result_data[0][CAT][index].a_txt = txt_val;
                
                if( parseInt(point) >= 25 ) {
                    MAIN.result_data[0][CAT][index].tip = true;
                } else {
                    delete MAIN.result_data[0][CAT][index].tip;
                }

                $bar_wrap.removeClass('error');
                $bar_wrap.parent().removeClass('error');

                // Make clicked option active
                $bar_wrap.find('.z_radiobtn').removeClass('active');
                $(this).parent().addClass('active');

            });

        },

        animate_standbybtn : function() {

            var tl = new TimelineMax({
                delay : 2,
                onComplete : function() {
                }
            }),elem = $('.z_LED_on');

            tl.to( elem, 1.1, {
                ease : Sine.ease,
                autoAlpha : 1
            }).to( elem, .9, {
                delay : .4,
                ease : Sine.ease,
                autoAlpha : 0,
                maxHeight : 400
            });

        },

        preloader : function() {

            TweenMax.to( $('.z_preloader_wrap'), .2, {
                autoAlpha : 0,
                delay : .1,
                onComplete : function() {
                    this.target.remove();
                }
            });

            var ctx = $("#z_load_circle").get(0).getContext('2d');
            var data = [
                {
                    value: 100,
                    color:"#ccc"
                }
            ];
            var options = {
                segmentShowStroke : false,
                percentageInnerCutout : 86,
                animationSteps : 40,
                animationEasing : "easeOutQuart",
                animateRotate : true,
                animateScale : false,
                // Oncomplete function
                onAnimationComplete : function() {


                    // var Counter = { val : 0 };
                    // TweenMax.to( Counter, 1, {
                    //   val : "+="+100,
                    //   onUpdate : function() {
                    //     $('.z_stats_percentage').text( Math.floor(Counter.val) );
                    //   }
                    // });
                }
            };
            //var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
        },


        // Populates the views with content
        // --------------------------------------------------------------------------------
        // --------------------------------------------------------------------------------
        build_views : function() {

            for( var i = 0; i < z_DATA.length; i++ ) {

                var $view = $('.z_view').eq( i + 1 ),
                $q_wrap = $view.find('.z_questions'),
                $header = $view.find('.z_view_header'),
                $q_header = $view.find('.z_question_header'),
                $view_footer = $view.find('.z_cta_footer'),
                $step_head = $header.find('.step-head'),
                $header_image = $step_head.find('.theme-image-circle'),
                $header_content = $step_head.find('.theme-content');

                $q_wrap.attr('data-cat', z_DATA[i].category)

                if( z_DATA[i].sub_header != '' ) {
                    var $sub_header = $('<p class="z_step_subh">'+ z_DATA[i].sub_header +'</p>');

                    $header_content.append($sub_header);
                }

                if( z_DATA[i].acc_title != '' ) {
                    var $z_acc = $('<div class="z_acc_wrap">'+ 
                                        '<span class="z_acc_trigger">'+ z_DATA[i].acc_title +'</span>'+
                                        '<div class="z_acc_content">'+
                                            '<p>'+ z_DATA[i].acc_body +'</p>'+
                                        '</div>'+
                                    '</div>');

                    $header_content.append($z_acc);
                }

                // Populate header
                $header.find('.z_view_title').text( z_DATA[i].title );
                $header.find('.z_step_txt').text( ' ('+ ( i + 1 ) +' af 7)' );
                $header.find('.z_step_subh').text( z_DATA[i].sub_header );
                $header_image.attr('data-image', 'assets/img/'+(i+1)+'.png');

                if (!$header_image.attr('data-position')) {
                    $header_image.attr('data-position', 'center');
                }

                // Adding all question lines
                for( var j = 0; j < z_DATA[i].questions.length; j++ ) {

                    var $question;

                    if(z_DATA[i].questions[j].modalDescription){
                        $question = $('<div class="z_radiobtn_bar_wrap">'+
                                        '<div class="z_bar_title">'+
                                            '<strong>'+ z_DATA[i].questions[j].title +
                                                '<div class="popunder-trigger"></div>'+
                                                '<div class="popunder">'+
                                                    '<div class="popunder-content">'+
                                                        '<img src="' + z_DATA[i].questions[j].modalImg + '" class="popunder-hero">'+
                                                        '<h3><strong>' + z_DATA[i].questions[j].modalTitle + '</strong></h3>'+
                                                        z_DATA[i].questions[j].modalDescription +
                                                    '</div>'+
                                                '</div>'+
                                            '</strong>'+
                                        '</div>'+
                                        '<div class="z_radiobtn_bar"></div>'+
                                        '<span class="z_error"></span>'+
                                    '</div>');
                    }
                    else{
                        $question = $('<div class="z_radiobtn_bar_wrap">'+
                                        '<div class="z_bar_title">'+
                                            '<strong>'+ z_DATA[i].questions[j].title +'</strong>'+
                                        '</div>'+
                                        '<div class="z_radiobtn_bar"></div>'+
                                        '<span class="z_error"></span>'+
                                    '</div>');
                    }
                    
                    $q_wrap.append( $question );
                    
                    // Then add 4 answer options for each question
                    for( var k = 0; k < z_DATA[i].questions[j].answers.length; k++ ) {

                        var $option = $('<div class="z_radiobtn">'+
                                            '<span class="z_lbl" data-val="'+ z_DATA[i].questions[j].answers[k].value +'">'+
                                                '<span class="z_lbl_txt">'+ z_DATA[i].questions[j].answers[k].title +'</span>'+
                                            '</span>'+
                                            '<span class="z_dot"></span>'+
                                        '</div>');

                        $question.find('.z_radiobtn_bar').append( $option );

                        
                    }
                }
            }

            $('.bx-viewport').css('overflow', 'inherit');            
        },

        // Disable autocomplete
        disableNativeAutocomplete: function() {
            $('input[type="text"]').prop('autocomplete', 'off');
        },

        // Get url query variable
        getQueryVariable : function (variable) {
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i=0;i<vars.length;i++) {
                        var pair = vars[i].split("=");
                        if(pair[0] == variable){return pair[1];}
                }
                return(false);
        },

        // Get form data
        getFormData: function($form) {
            // Make sure form is wrapped in jquery
            $form = $($form);

            // Prepare data
            var data = {};

            // Get all form elements
            var $elements = $form.find('input,textarea,select').filter('[name]');

            // Loop through elements
            var $element; $elements.each(function(){
                // Get element
                $element = $(this);

                // Handle checkbox arrays
                if ($element.is('[type="checkbox"]')) {
                    // Is there multiple checkboxes with same name?
                    if ($('input[type="checkbox"][name="' + $element.attr('name') + '"]').not($element).length) {
                        if (typeof data[$element.attr('name')] === 'undefined') {
                            data[$element.attr('name')] = [];
                        }
                    }

                    // Make sure checkbox is selected
                    if (!$element.prop('checked')) {
                        return true;
                    }

                    // Handle array
                    if ($.isArray(data[$element.attr('name')])) {
                        data[$element.attr('name')].push($element.val());
                    } else if (typeof data[$element.attr('name')] === 'undefined') {
                        data[$element.attr('name')] = $element.val();
                    }
                } else if ($element.is('[type="radio"]')) {
                    // Make sure checkbox is selected
                    if ($element.prop('checked')) {
                        data[$element.attr('name')] = $element.val();
                    } else if (typeof data[$element.attr('name')] === 'undefined') {
                        data[$element.attr('name')] = '';
                    }
                } else {
                    data[$element.attr('name')] = $element.val();
                }
            });

            // return data
            return data;
        },

        // Handle newsletter signup
        handleNewsletter: function () {
            // Get checkbox
            var $checkbox = $('input[name="newsletterSignup"]');

            // Get container
            var $container = $('.sign-up-container');

            // Find form
            var $form = $container.find('form.newsletter-form');

            // Handle submit
            $form.on('submit', function (e) {
                // Prevent default
                e.preventDefault();

                // Make sure required fields has been filled
                if (!MAIN.required()) {
                    return;
                }

                // Get form data
                var data = MAIN.getFormData($form);

                // Terms checked?
                if (typeof data.terms === 'undefined' || data.terms != '1') {
                    // Set error
                    $container
                        .find('input[name="terms"]')
                        .closest('.orsted-checkbox')
                        .addClass('error');

                    // Show error text
                    $container
                        .find('.terms-error')
                        .removeClass('hidden');

                    // Return
                    return;

                } else {
                    // Set error
                    $container
                        .find('input[name="terms"]')
                        .closest('.orsted-checkbox')
                        .removeClass('error');

                    // Show error text
                    $container
                        .find('.terms-error')
                        .addClass('hidden');
                }

                // Fix data
                var fixedData = {
                    name: data.name,
                    surName: data.surName,
                    address: data.address,
                    zip: data.zip,
                    city: data.city,
                    isCustomer: data.orstedCustomer == '1',
                    phone: data.phone,
                    email: data.email,
                    customerId: data.customerId,
                    source: 'standby-forbrug',
                };

                // Send request
                $.ajax({
                    type: 'POST',
                    data: JSON.stringify(fixedData),
                    contentType: 'text/plain',
                    processData: false,
                    xhrFields: { withCredentials: true },
                    url: MAIN.apiBase + '/newsletter',
                    success: function (data) {
                        // Blur any current active element
                        $(document.activeElement).blur();

                        // Hide container
                        $container.addClass('hidden');
                        $('.newsletter').remove();

                        // Show confirmation
                        $('.sign-up-confirmation').removeClass('hidden');
                        // $('.bx-wrapper').addClass('hidden');

                        // Track nyhedsbrev signup
                        MAIN.tracking('Step 8: Nyhedsbrev tilmeldt');

                        // Uncheck newsletter
                        $checkbox.closest('.form-group').addClass('hidden').off('change');

                        // Kvitteringsside
                        $('[data-bind]').each(function(i, item){
                            // Get bind value
                            var $el = $(item),
                                    value = $el.data('bind');

                            // Handle name
                            if (value === 'fullName') {
                                $el.html($.trim([fixedData.name, fixedData.surName].join(' ')))
                            } else if (value === 'address') {
                                $el.html(fixedData.address);
                            } else if (value === 'phone') {
                                $el.html(fixedData.phone);
                            } else if (value === 'mail') {
                                $el.html(fixedData.email);
                            } else if (value === 'customerId') {
                                if (fixedData.customerId == '') {
                                    $('.customerid-container').hide();
                                } else {
                                    $el.html(fixedData.customerId);
                                }
                            }
                        });
                    },
                    error: function (err) {

                    }
                });
            });

            // Handle change
            $checkbox.on('change', function () {
                // Show or hide newsletter signup?
                if ($(this).is(':checked')) {

                    // Show form
                    $container.removeClass('hidden');

                    // Track nyhedsbrev signup
                    MAIN.tracking('Step 7: Nyhedsbrev checkbox');

                    // Hide confirmation
                    $('.sign-up-confirmation').addClass('hidden');

                    // Set focus in first input
                    setTimeout(function() {
                        $container.find('input[name="name"]').focus();
                    }, 250);
                } else {
                    // Hide form
                    $container.addClass('hidden');
                }
            });

            // Trigger change
            $checkbox.trigger('change');

            // Handle customerId check
            $container.find('input[name="orstedCustomer"]').on('change', function() {
                // Check value
                if ($(this).val() == 1) {
                    $container.find('.customerid').removeClass('hidden');
                } else {
                    $container.find('.customerid').addClass('hidden');
                }
            });

            // Trigger change
            $container.find('input[name="orstedCustomer"]:checked').trigger('change');

            // Find terms-overlay
            var $termsOverlay = $container.find('.terms-overlay');

            // Handle close
            $termsOverlay.hammer().on('tap click mousedown', function (e) {
                // Prevent propagation
                e.preventDefault();
                e.stopPropagation();

                // Not tap? skip
                if (e.type !== 'tap') {
                    return;
                }

                // Hide overlay
                setTimeout(function(){ $termsOverlay.trigger('hide'); }, 200);
            });

            // Show event
            $termsOverlay.on('show', function() {
                // Blur any active element
                $(document.activeElement).blur();

                // Show terms
                TweenLite.from($termsOverlay, 0.3, {
                    opacity: 0,
                    onStart: function() {
                        $termsOverlay.removeClass('hidden');
                    }
                });
            });

            // Hide event
            $termsOverlay.on('hide', function() {
                // Show terms
                TweenLite.to($termsOverlay, 0.3, {
                    opacity: 0,
                    onComplete: function() {
                        $termsOverlay.addClass('hidden');
                        TweenLite.set($termsOverlay, {opacity: 1});
                    }
                });
            });

            // Handle terms
            $container.find('a[data-action="show-terms"]').on('click', function(e) {
                e.preventDefault();
                $termsOverlay.trigger('show');
            });
        },

        // Tooltip for form elements
        formHelp: function() {
            $('.form-help').each(function() {
            var $formHelp = $(this),
                $label = $formHelp.parent(),
                $text = $formHelp.data('help'),
                $input = $label.parent().find('input'),
                $labels = $('body').find('label, legend').not($label),
                $help = $('<div>', { class: 'form-help-text', html: $text });
    
            // Trigger form help and set position and width
            $formHelp.on('mouseenter click', function() {
                var $width = $(this).position().left + ($(this).width() * 2),
                    $top = $(this).height() + 8;
    
                // Adjust width for active label
                if ($label.is('.is-active')) {
                $width += 10;
                }
    
                // Specifically for legend
                if ($label.is('legend')) {
                $top += 4;
                $width -= 16;
                }
    
                // If input is disabled
                // don't show form help
                if (!$label.is('.disabled')) {
                $label.append($help);
                }
                
                // Set classes and properties
                $labels.addClass('below');
                $help.css({'top': $top, 'min-width': $width +'px'});
                $formHelp.addClass('on');
    
                return false;
            }).on('mouseleave', function() {
                // Remove classes and properties
                $help.remove();
                $labels.removeClass('below');
                $formHelp.removeClass('on');
            });
            });
        },
    
        // Terms popover
        popover: function() {
            $('.popover, .popunder').each(function() {
            var $pop = $(this),
                $popcon = $pop.find('[class*="-content"]'),
                $closex = $('<span class="close"/>').prependTo($popcon),
                $trigger = $pop.parent().find('[class*="-trigger"]'),
                $parent = $pop.parents().filter(function() {
                return $(this).css('position') == 'relative' }).first();
            
            // There can be only one close X
            if (!$closex.is(':only-of-type')) {
                $closex.siblings('span').remove();
            }
    
            /*
            // Remove close X if not needed
            if ($pop.is('.no-x') || $trigger.is('.hover-in-out')) {
                $closex.remove();
            }
            */
    
            // Handle close X click
            $closex.on('click touchstart', function() {
                $pop.removeClass('show').blur();
            });
    
            // Three ways to trigger pop box
            // Hover-in
            if ($trigger.is('[class*="hover-in"]')) {
                $trigger.on('mouseenter click', popBox);
                // Hover-in-out
                if ($trigger.is('[class*="-out"]')) {
                $trigger.on('mouseleave', function() {
                    $pop.removeClass('show').blur();
                });
                }
            } else { // Click
                $trigger.on('click', popBox);
            }
    
            // Calculate and set position of the box
            function popBox() {
                var $popover = $(this).siblings('.popover'),
                    $popunder = $(this).siblings('.popunder'),
                    $parentLeft = $parent.position().left,
                    $parentRight = $parent.width(),
                    $triggerLeft = $trigger.position().left,
                    $popoverWidth = $pop.outerWidth(),
                    $triggerWidth = $trigger.outerWidth(),
                    $widthDiff = ($popoverWidth - $triggerWidth) / 2,
                    $popoverLeft = $triggerLeft - $widthDiff,
                    $popoverRight = $popoverLeft + $popoverWidth,
                    $popunderTop = $trigger.position().top + ($trigger.height() + 6);
    
                // Hide all other popover or popunder boxes
                $('.popover, .popunder').removeClass('show');
                
                // If left boundary exceeded
                if ($popoverLeft <= $parentLeft) {
                $popoverLeft = $parentLeft;
                }
                
                // If right boundary exceeded
                if ($popoverRight >= $parentRight) {
                $popoverLeft = $parentRight - $popoverWidth;
                }
    
                // Set popover position
                $popover.css({
                'left': $popoverLeft
                }).addClass('show').focus();
                
                // Set popunder position
                $popunder.css({
                'top': $popunderTop,
                'left': $popoverLeft
                }).addClass('show').focus();
    
                return false;
            }
    
            // Hide box when click anywhere but trigger
            $(document).on('click', function() {
                $pop.removeClass('show').blur();
            });
            }).on('click', function() {	return false; });
        },
    
        // Handle image theme background
        imageTheme: function() {
            $('[class*="theme-image"][data-image]').each(function() {
            var $theme = $(this),
                $size = $theme.data('size'),
                $image = $theme.data('image'),
                $position = $theme.data('position'),
                $background = $('<div/>'),
                $class = $theme.is('[class*="-circle"]')
                ? 'theme-image-circle-background'
                : 'theme-image-background';
    
            // Set background css properties
            $background.css({
                'background-image': 'url('+ $image +')',
                'background-position': $position,
                'background-size': $size
            }).addClass($class);
    
            // Insert background image
            $theme.prepend($background);
        
            // Make sure there is only one background
            if (!$background.is(':only-child')) {
                $background.siblings().remove();
            }
            });
        },
    
        // Wrap last word in arrow span
        linkArrow: function() {
            $('[class*="link-arrow"]')
            .not('.link-arrow-back')
            .each(function() {
            var $link = $(this).html().split(' ');
    
            // Wrap the last word + arrow in span
            $link = $link.slice(0, -1).join(' ') +
            ' <span class="arrow">' +
            $link.pop() + '</span>';
    
            // Insert span tag
            $(this).html($link);
            });
        },

    };

    MAIN.init();

})(jQuery);