(function($) {

	// swedish - sweden

	var Alpaca = $.alpaca;

	Alpaca.registerView ({
		"id": "base",
		"messages": {
            "is_IS": {
                required: "Krafa að skila gildi",
                invalid: "Rangt gildi",
                months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Juní", "Julí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
                timeUnits: {
                    SECOND: "sekúndur",
                    MINUTE: "mínútur",
                    HOUR: "klukkustundir",
                    DAY: "dagar",
                    MONTH: "mánuðir",
                    YEAR: "ár"
                },
                "notOptional": "Þetta reitur er nauðsynlegur",
                "disallowValue": "Þetta gildi eru ekki leyft: {0}",
                "invalidValueOfEnum": "Reiturinn verður að innihalda eitt af eftirfarandi: {0}. [{1}]",
                "notEnoughItems": "Lágmarksfjöldi gilda er {0}",
                "tooManyItems": "Hágmarksfjöldi gilda er {0}",
                "valueNotUnique": "Gildi er ekki einstakt",
                "notAnArray": "Ekki listi yfir gildi",
                "invalidDate": "Rangt snið fyrir dagsetningu: {0}",
                "invalidEmail": "Ógilt netfang",
                "stringNotAnInteger": "Gildið er ekki heil tala",
                "invalidIPv4": "Ógild IPv4 tala",
                "stringValueTooSmall": "Lágmarks leyfilegt gildi er {0}",
                "stringValueTooLarge": "Hámarks leyfilegt gildi er {0}",
                "stringValueTooSmallExclusive": "Gildi verður að vera hærra en {0}",
                "stringValueTooLargeExclusive": "Gildi verður að vera lærra en {0}",
                "stringDivisibleBy": "Tala verður að vera deilanleg með {0}",
                "stringNotANumber": "Gildið er ekki tala",
                "invalidPassword": "Ógilt lykilorð",
                "invalidPhone": "Ógilt símanúmer",
                "invalidPattern": "Gildi verður að vera á eftirfarandi sniði: {0}",
                "stringTooShort": "Þessi reitur verður að innihalda {0} stafi",
                "stringTooLong": "Þessi reitur getur ekk innihaldið meira en {0} stafi",
                "addItemButtonLabel": "Bæta við staki",
                "addButtonLabel": "Bæta við",
                "removeButtonLabel": "Eyða",
                "upButtonLabel": "Upp",
                "downButtonLabel": "Niður"
            }
		}
	});

})(jQuery);
