

Oprócz poprawnego wykonania poleceń z tego submodułu, Twoim zadaniem jest wykonanie tego samego dla autorów artykułów, czyli:

* w każdym artykule dodaj autora w atrybucie data-author (usuń autora z wrappera .post-author),
* wyświetl autora jako link we wrapperze post-author, pod tytułem artykułu,
* powiąż kliknięcie w link do autora z wygenerowaniem przefiltrowanej listy artykułów.

Dla uproszczenia, niech każdy autor ma tylko imię i nazwisko – bez kropek, myślników czy drugich imion.

Wskazówki
1. Potrzebujesz napisać funkcję generateAuthors, wzorując się na generateTags,
2. Funkcja generateAuthors będzie prostsza niż generateTags, ponieważ jest tylko jeden autor artykułu – nie musisz dzielić tego pola funkcją split, ani wykonywać pętli podobnej do tej iterującej po tagach. Dla każdego artykułu będzie tylko jeden link do autora.
3. Napisz też funkcje addClickListenersToAuthors i authorClickHandler, wzorując się na addClickListenersToTags i tagClickHandler.
4. Nie musisz w żaden sposób zmieniać funkcji generateTitleLinks – wystarczy, że w funkcji authorClickHandler wywołasz ją z odpowiednim argumentem. Pamiętaj, że w tym wypadku w selektorze atrybutu użyjesz łącznika = zamiast ~=.
5. Nie zapomnij dodać nowej stałej ustawień – optArticleAuthorSelector.
6. Usuń przykładową zawartość listy autorów z kodu HTML – nie będzie nam już potrzebna.


# javascript-blog
