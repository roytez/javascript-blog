# javascript-blog

Na początku zbudujmy strukturę HTML menu pierwszego poziomu.

Wewnątrz taga <body> stwórz element <nav> z klasą .navigation, a wewnątrz niego umieść <div> z klasą .container.
W tym divie dodaj nieuporządkowaną listę wraz z kilkoma pozycjami (<li>). Każdy znacznik <li> powinien zawierać znacznik <a> (który na razie nigdzie nie będzie prowadził, więc powinien mieć atrybut href równy #). Wprowadź przykładowe teksty do tych elementów listy (takie jak na projekcie lub własne).
W pliku .css/.scss utwórz sekcję dla stylów nawigacji (/* Navigation */).

Całej nawigacji nadaj tło – wykorzystaj jeden z wybranych przez siebie kolorów. Dodaj jej padding równy 12px 0;.
Dla selektora <ul> wewnątrz elementu .navigation musisz wyzerować padding i margin oraz wyłączyć punktory (za pomocą właściwości list-style-type). W razie problemów odwołaj się do Preworka.
Dodaj deklarację display: inline-block; dla elementów listy <li> znajdujących się wewnątrz elementu .navigation. To wyświetli elementy listy poziomo. Dodaj im przy okazji margines równy 0 36px 0 0; oraz pozycję relative.
Dodaj selektor wybierający elementy <a> wewnątrz .navigation. Nadaj im właściwość text-decoration: none; oraz ustaw kolor czcionki.
Całość wygląda już przyjemnie, jednak nasza nawigacja aż się prosi o to, żeby dodać jakiś efekt na :hover dla naszych linków. Może to być zmiana koloru czcionki (w projekcie na zielony - #33d9b2) lub cokolwiek innego, co podpowie Ci fantazja.
