# grecce-rent


Teraz możemy dodać menu drugiego poziomu. Będzie się wyświetlać dopiero po najechaniu na link pierwszego rzędu. Zacznijmy od HTML.

Wewnątrz pierwszego elementu <li>, zaraz za elementem <a>, dodaj element <ul> wraz z kilkoma pozycjami oraz linkami, tak jak poprzednio. Element ten powinien znaleźć się na tym samym poziomie zagnieżdżenia, co <a>.
Ustawmy elementy naszego menu drugiego poziomu w pionowym rzędzie. W tym celu dodaj selektor .navigation ul ul li oraz dodaj do niego właściwość display: block;. Dodaj mu też margines równy 0 0 12px 0;.
Aby ukryć menu niższego poziomu (na razie będzie schowane), stwórz regułę display: none; dla list znajdujących się wewnątrz innych list w panelu nawigacji. Skorzystaj w tym celu ze znanych nam zagnieżdżonych selektorów CSS.
