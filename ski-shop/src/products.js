const products = [{
		id: 1,
		name: "Biały Kask Smith",
		rating: 3.7,
		description: "Nasze kaski narciarskie to idealne połączenie lekkości i wytrzymałości, dzięki czemu zapewniają maksymalny komfort podczas jazdy na nartach.",
		longdescription: "Nasz kask narciarski to wysokiej jakości ochrona głowy, która zapewnia bezpieczeństwo podczas jazdy na nartach lub innych zimowych aktywności. Skorupa zewnętrzna wykonana jest z trwałego i lekkiego poliwęglanu, a wnętrze wyściełane jest pianką o wysokiej gęstości, która absorbuje siłę uderzenia i zmniejsza ryzyko obrażeń. Kask posiada także system wentylacji, który pozwala na swobodny przepływ powietrza i zapewnia odpowiednią temperaturę głowy podczas jazdy. Dostępny jest w kilku rozmiarach, aby dopasować go do rozmiaru głowy użytkownika. Nasz kask narciarski to niezbędny element wyposażenia każdego narciarza, który ceni sobie bezpieczeństwo i wygodę podczas uprawiania tej aktywności.",
		price: 911.55,
		image: require("./assets/images/product-1.jpg"),
	},
	{
		id: 2,
		name: "Czerwony Kask Bolle",
		rating: 2.1,
		description: "Nasze kaski narciarskie to idealne połączenie lekkości i wytrzymałości, dzięki czemu zapewniają maksymalny komfort podczas jazdy na nartach.",
		longdescription: "Nasz kask narciarski to najlepsze rozwiązanie dla tych, którzy cenią sobie bezpieczeństwo i wygodę podczas jazdy na nartach. Wysokiej jakości skorupa zewnętrzna i amortyzująca warstwa wewnętrzna chronią głowę przed urazami spowodowanymi upadkami lub kontaktem z innymi przedmiotami. Kask posiada także system wentylacji, który zapewnia odpowiednią temperaturę głowy podczas jazdy. Dostępny jest w kilku rozmiarach, aby dopasować go do rozmiaru głowy użytkownika.",
		price: 736.22,
		image: require("./assets/images/product-2.jpg"),
	},
	{
		id: 3,
		name: "Czarny Kask Sessions",
		rating: 4.7,
		description: "Nasze kaski narciarskie to gwarancja modnego i nowoczesnego wyglądu, dzięki szerokiemu wyborowi kolorów oraz oryginalnym kształtom.",
		longdescription: "Kask narciarski to obowiązkowy element wyposażenia każdego narciarza, który chce zadbać o swoje bezpieczeństwo podczas uprawiania tej aktywności. Nasz kask wyróżnia się lekką skorupą zewnętrzną i amortyzującą warstwą wewnętrzną, która zapewnia odpowiedni poziom ochrony głowy. Kask posiada także system wentylacji, który pozwala na swobodny przepływ powietrza i zapewnia komfort termiczny podczas jazdy. Dostępny jest w kilku rozmiarach, aby dopasować go do rozmiaru głowy użytkownika.",
		price: 251.66,
		image: require("./assets/images/product-3.jpg"),
	},
	{
		id: 4,
		name: "Kolorowy Kask Giro",
		rating: 1.1,
		description: "Dzięki naszym kaskom narciarskim będziesz mógł cieszyć się swoją jazdą na nartach bez żadnych ograniczeń, dzięki elastycznemu paskowi oraz regulowanej wysokości.",
		longdescription: "Zadbaj o swoje bezpieczeństwo podczas jazdy na nartach dzięki naszemu kaskowi narciarskiemu. Wysokiej jakości skorupa zewnętrzna i amortyzująca warstwa wewnętrzna zapewniają odpowiedni poziom ochrony głowy podczas upadków lub kontaktu z innymi przedmiotami. Kask posiada także system wentylacji, który pozwala na swobodny przepływ powietrza i utrzymanie odpowiedniej temperatury głowy podczas jazdy. Dostępny jest w kilku rozmiarach, aby dopasować go do rozmiaru głow",
		price: 326.47,
		image: require("./assets/images/product-4.jpg"),
	},
	{
		id: 5,
		name: "Narty Salomon",
		rating: 2.5,
		description: "Nasze narty to połączenie nowoczesnej technologii i stylowego designu, dzięki czemu są idealne dla wszystkich miłośników jazdy na nartach.",
		longdescription: "Nasze narty to idealne rozwiązanie dla miłośników szybkiej jazdy i wyzwań na stoku. Dzięki zastosowaniu nowoczesnych technologii takich jak wzmocniona konstrukcja z włókna węglowego oraz profilowana powierzchnia boczna, narty zapewniają doskonałą przyczepność i stabilność nawet w najtrudniejszych warunkach. Ich lekka i smukła budowa pozwala na łatwe manewrowanie i szybkie reakcje, co sprawia, że są one idealne zarówno dla zaawansowanych, jak i początkujących narciarzy.",
		price: 252.55,
		image: require("./assets/images/product-5.jpg"),
	},
	{
		id: 6,
		name: "Czerwono-Zielone Rossignol Narty",
		rating: 5.0,
		description: "Dzięki naszym nartom będziesz mógł cieszyć się perfekcyjną kontrolą podczas jazdy, dzięki specjalnie zaprojektowanym krawędziom oraz lekkiej konstrukcji.",
		longdescription: "Jeśli szukasz nart, które zapewnią Ci płynną i komfortową jazdę, to nasza propozycja jest właśnie dla Ciebie. Nasze narty zostały zaprojektowane z myślą o narciarzach o umiarkowanym poziomie zaawansowania, którzy cenią sobie wygodę i bezpieczeństwo na stoku. Dzięki zastosowaniu specjalnego systemu amortyzacji oraz szerokiej platformie, narty te zapewniają wysoki komfort jazdy i doskonale tłumią wstrząsy. Ich uniwersalny charakter sprawia, że sprawdzą się zarówno na twardych, jak i średnio miękkich nawierzchniach.",
		price: 889.32,
		image: require("./assets/images/product-6.jpg"),
	},
	{
		id: 7,
		name: "Czarne Narty Atomic",
		rating: 2.4,
		description: "Nasze narty są idealne dla wymagających narciarzy, którzy cenią sobie wyjątkową jakość oraz wydajność na stoku.",
		longdescription: "Dla wymagających narciarzy, którzy szukają nart o najwyższych osiągach, mamy coś specjalnego. Nasze narty to prawdziwy kombajn szybkości i zwrotności, dzięki zastosowaniu ultralekkich materiałów i wysoko wyprofilowanego kształtu. Ich agresywna konstrukcja zapewnia maksymalną przyczepność i stabilność podczas jazdy w trudnych warunkach, a specjalnie zaprojektowana platforma umożliwia szybkie i precyzyjne skręcanie. Te narty to prawdziwe narzędzie dla zaawansowanych narciarzy, którzy cenią sobie maksymalne wrażenia z jazdy i nie boją się wyzwań na stoku.",
		price: 704.48,
		image: require("./assets/images/product-7.jpg"),
	},
	{
		id: 8,
		name: "Czarna Deska Snowboardowa Burton",
		rating: 4.3,
		description: "Nasze snowboardy to połączenie nowoczesnej technologii i modnego designu, dzięki czemu są idealne dla wszystkich miłośników jazdy na snowboardzie.",
		longdescription: "Nasze deski snowboardowe to połączenie wytrzymałości i zwrotności, dzięki zastosowaniu nowoczesnych technologii takich jak konstrukcja z włókna węglowego oraz specjalny profil boczny. Deski te zapewniają doskonałą przyczepność i stabilność podczas jazdy zarówno po prostej, jak i w trakcie skrętów, co sprawia, że są one idealne dla zaawansowanych snowboardzistów. Ich lekka budowa umożliwia łatwe manewrowanie i szybkie reakcje, a specjalnie zaprojektowana platforma zapewnia wysoki komfort jazdy.",
		price: 255.48,
		image: require("./assets/images/product-8.jpg"),
	},
	{
		id: 9,
		name: "Pomarańczowa Deska Snowboardowa Arbor",
		rating: 3.7,
		description: "Dzięki naszym snowboardom będziesz mógł cieszyć się perfekcyjną kontrolą podczas jazdy, dzięki specjalnie zaprojektowanej sztywności oraz lekkiej konstrukcji.",
		longdescription: "Jeśli szukasz deski snowboardowej, która zapewni Ci płynną i komfortową jazdę, to nasza propozycja jest właśnie dla Ciebie. Nasze deski zostały zaprojektowane z myślą o snowboardzistach o umiarkowanym poziomie zaawansowania, którzy cenią sobie wygodę i bezpieczeństwo na stoku. Dzięki zastosowaniu specjalnego systemu amortyzacji oraz szerokiej platformie, deski te zapewniają doskonały komfort jazdy i doskonale tłumią wstrząsy. Ich uniwersalny charakter sprawia, że sprawdzą się zarówno na twardych, jak i średnio miękkich nawierzchniach.",
		price: 535.35,
		image: require("./assets/images/product-9.jpg"),
	},
	{
		id: 10,
		name: "Zielona Deska Snowboardowa K2 Snowboarding",
		rating: 4.5,
		description: "Nasze snowboardy są idealne dla wymagających snowboardzistów, którzy cenią sobie wyjątkową jakość oraz wydajność na stoku.",
		longdescription: "Dla wymagających snowboardzistów, którzy szukają deski o najwyższych osiągach, mamy coś specjalnego. Nasze deski snowboardowe to prawdziwe narzędzie szybkości i zwrotności, dzięki zastosowaniu ultralekkich materiałów i wysoko wyprofilowanego kształtu. Ich agresywna konstrukcja zapewnia maksymalną przyczepność i stabilność podczas jazdy w trudnych warunkach, a specjalnie zaprojektowana platforma umożliwia szybkie i precyzyjne skręcanie. Te deski to prawdziwe narzędzie dla zaawansowanych snowboardzistów, którzy cenią sobie maksymalne wrażenia z jazdy i nie boją się wyzwań na stoku.",
		price: 521.75,
		image: require("./assets/images/product-10.jpg"),
	},
	{
		id: 11,
		name: "Czarne Buty Narciarskie Rossignol",
		rating: 1.4,
		description: "Nasze buty narciarskie to idealne połączenie komfortu i wydajności, dzięki specjalnym technologiom oraz nowoczesnemu designowi.",
		longdescription: "Nasze buty narciarskie to połączenie wygody i wytrzymałości, dzięki zastosowaniu nowoczesnych technologii takich jak specjalna wkładka z amortyzacją oraz wodoodporna i oddychająca membrana. Buty te zapewniają doskonały komfort podczas jazdy na nartach, dzięki elastycznemu i dopasowującemu się kształtowi oraz specjalnemu systemowi sznurowania, który umożliwia idealne dopasowanie buta do stopy. Ich wytrzymała konstrukcja sprawia, że są one odporne na uszkodzenia i doskonale sprawdzają się w najtrudniejszych warunkach.",
		price: 348.99,
		image: require("./assets/images/product-11.jpg"),
	},
	{
		id: 12,
		name: "Niebieskie Narty Biegowe Salomon",
		rating: 1.6,
		description: "Nasze narty biegowe to połączenie lekkości i wytrzymałości, dzięki czemu zapewniają maksymalną wydajność podczas biegu na nartach.",
		longdescription: "Nasze narty biegowe to połączenie szybkości i wytrzymałości, dzięki zastosowaniu nowoczesnych technologii takich jak konstrukcja z włókna węglowego oraz specjalny profil boczny. Narty te zapewniają doskonałą przyczepność i stabilność podczas jazdy po różnych nawierzchniach, a ich lekka budowa umożliwia łatwe manewrowanie i szybkie reakcje. Ich specjalny kształt i szeroka platforma zapewniają wysoki komfort jazdy, a elastyczne wiązania pozwalają na idealne dopasowanie do stopy.",
		price: 479.98,
		image: require("./assets/images/product-12.jpg"),
	},
	{
		id: 13,
		name: "Czarne Narty Biegowe Salomon",
		rating: 3.4,
		description: "Dzięki naszym nartom biegowym będziesz mógł cieszyć się perfekcyjną przyczepnością oraz kontrolą podczas jazdy, dzięki specjalnie zaprojektowanym krawędziom oraz lekkiej konstrukcji.",
		longdescription: "Jeśli szukasz nart biegowych, które zapewnią Ci płynną i komfortową jazdę, to nasza propozycja jest właśnie dla Ciebie. Nasze narty zostały zaprojektowane z myślą o biegaczach o umiarkowanym poziomie zaawansowania, którzy cenią sobie wygodę i bezpieczeństwo podczas treningów. Dzięki zastosowaniu specjalnego systemu amortyzacji oraz szerokiej platformie, narty te zapewniają doskonały komfort jazdy i doskonale tłumią wstrząsy. Ich uniwersalny charakter sprawia, że sprawdzą się zarówno na twardych, jak i średnio miękkich nawierzchniach.",
		price: 360.21,
		image: require("./assets/images/product-13.jpg"),
	},
	{
		id: 14,
		name: "Pomarańczowe Gogle Narciarskie Smith",
		rating: 3.8,
		description: "Nasze gogle narciarskie to połączenie nowoczesnej technologii i modnego designu, dzięki czemu są idealne dla wszystkich miłośników jazdy na nartach.",
		longdescription: "Nasze gogle narciarskie to połączenie wygody i bezpieczeństwa, dzięki zastosowaniu nowoczesnych technologii takich jak specjalna szyba z filtrem UV oraz oddychająca i wodoodporna membrana. Gogle te zapewniają doskonałą widoczność nawet w najtrudniejszych warunkach pogodowych, dzięki specjalnemu systemowi wentylacji oraz elastycznemu i dopasowującemu się kształtowi. Ich wytrzymała konstrukcja sprawia, że są one odporne na uszkodzenia i doskonale sprawdzają się podczas jazdy na nartach.",
		price: 758.58,
		image: require("./assets/images/product-14.jpg"),
	},
	{
		id: 15,
		name: "Niebieskie Gogle Oakley",
		rating: 2.9,
		description: "Dzięki naszym goglom narciarskim będziesz mógł cieszyć się doskonałą widocznością oraz komfortem podczas jazdy, dzięki specjalnym szkłom oraz wentylacji.",
		longdescription: "Jeśli szukasz gogli narciarskich, które zapewnią Ci płynną i komfortową jazdę, to nasza propozycja jest właśnie dla Ciebie. Nasze gogle zostały zaprojektowane z myślą o narciarzach o umiarkowanym poziomie zaawansowania, którzy cenią sobie wygodę i bezpieczeństwo na stoku. Dzięki zastosowaniu specjalnej szyby z filtrem UV oraz elastycznej i oddychającej membranie, gogle te zapewniają doskonałą widoczność i komfort podczas jazdy na nartach. Ich uniwersalny charakter sprawia, że sprawdzą się zarówno w słoneczne, jak i pochmurne dni.",
		price: 936.25,
		image: require("./assets/images/product-15.jpg"),
	},


]

export default products