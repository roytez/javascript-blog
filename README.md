# grecce-rent

Przeanalizujmy strukturę naszego menu. Link drugiego poziomu jest elementem listy pierwszego poziomu. Aby wybrać listy drugiego rzędu, stworzylibyśmy następujący selektor:.navigation li ul { }.

W ten sposób wybieramy listy <ul> będące wewnątrz elementów listy pierwszego poziomu - tj. znajdujące się wewnątrz taga <li>. Chcemy wyświetlić te listy dopiero w momencie, gdy użytkownik najedzie kursorem na element <li>, zatem nasz selektor powinien wyglądać następująco: .navigation li:hover ul {...}. Do wyświetlenia listy wystarczy wewnątrz takiego selektora dodać właściwość display; block;.

Stwórz selektor wybierający listy drugiego rzędu po najechaniu myszką na element listy pierwszego rzędu, tak jak w opisie powyżej.
Dodaj właściwość display: block; wewnątrz utworzonego wyżej selektora i wycentruj w nim tekst. Menu w tym momencie zachowuje się dość dziwnie, ale zaraz to naprawimy.
Żeby lista drugiego poziomu nie rozpychała nam nawigacji, musimy ją "wyciągnąć z obiegu". Uzyskamy to dzięki dodaniu (tej zagnieżdżonej liście) position: absolute;.
Nadajmy liście drugiego poziomu tło – w projekcie użyliśmy koloru białego.
Stwórz selektor wybierający linki (<a>) na liście drugiego poziomu i nadaj im kolor czcionki (w projekcie jest to niebieski - #0097e6) oraz efekt hover (w projekcie jest to kolor zielony - #33d9b2).
Prawie dobrze! Dopracujmy kilka ostatnich detali. Przede wszystkim chcielibyśmy, żeby linki drugiego poziomu zajmowały 100% szerokości swojego rodzica. Zapewni nam to właściwość display: block;. Uwaga! Upewnij się, że wyświetlanie blokowe będą miały tylko linki nawigacji drugiego poziomu! W przypadku linków nawigacji pierwszego poziomu nadal chcemy, żeby były liniowo-blokowe. Dodaj również linkom nawigacji drugiego poziomu padding równy 0 24px;.
Aby wycentrować rozwijane menu względem jego rodzica (to znaczy względem linka pierwszego poziomu), dodaj do listy drugiego rzędu właściwości left: 50%; oraz transform: translateX(-50%);. Jak pamiętasz, lista drugiego poziomu jest absolute, a jej rodzic jest relative. Użycie powyższej transformacji wycentruje element absoute w osi X, czyli poziomo. Na końcu dodaj liście drugiego poziomu górny padding równy 12px;.
Voila! Menu pojawiać się będzie po najechaniu kursorem na link pierwszego rzędu.
