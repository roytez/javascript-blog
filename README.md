# grecce-rent

10. Rozwiązaniem pierwszego problemu jest stworzenie selektora mówiącego: "wybierz wszystkie elementy o klasie skill-image, znajdujące się wewnątrz elementu z klasami skill i right". To najbardziej złożony selektor, jaki stworzyliśmy do tej pory! Powinien wyglądać on tak: .skill.right .skill-image. Kiedy potrzebujemy wybrać w CSS element z dwiema klasami, nie wstawiamy między nimi spacji.

Do tego selektora dodaj właściwość right: 0;. Oznacza ona, że element-dziecko ustawi się tuż przy prawej krawędzi elementu-rodzica.


Prawie dobrze! Teraz jeszcze tylko paddingi i wyrównanie tekstu.

11. Stwórz selektor wybierający wszystkie elementy z klasą .skill-description, znajdujące się wewnątrz elementu z klasami skill i right (użyj poprzedniego selektora jako wzoru). Dodaj mu padding: 36px 55% 36px 0; i za pomocą text-align wyrównaj tekst do prawej (right). Powtórz proces dla selektora wybierającego wszystkie elementy z klasą .skill-description, znajdujące się wewnątrz elementu z klasami skill i left: jemu z kolei nadaj padding: 36px 0 36px 55%; i wyrównaj tekst do lewej (left).


Pamiętaj, że gdy wartość liczbowa jakiejś właściwości wynosi 0, nie używamy żadnej jednostki. Zapis np. 0px jest błędny.

Voilà!

Teraz twoim zadaniem jest ostylowanie nagłówków i tekstów obok obrazków według własnych preferencji. Możesz inspirować się projektem, albo użyć własnej wyobraźni.


html Logo

<div class="blog">
  <div class="container">
    <h1 class="logo">Greece rent</h1>
    <main class="wrapper">



slider
<div id="main-slider" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="w-100" src="https://i.postimg.cc/j58JcVCw/MB.jpg" alt="image">
            <div class="carousel-caption">
                <h1 class="logo">Greece rent</h1>
                <h4></h4>
                <h3></h3>
            </div>
        </div>
    <div class="carousel-item">
        <img class="w-100" src="https://i.postimg.cc/Xq37gRH6/MW1.jpg" alt="image">
        <div class="carousel-caption">
                <h1 class="logo">Greece rent</h1>
                <h4></h4>
                <h3></h3>
        </div>
    </div>
    <div class="carousel-item">
        <img class="w-100" src="https://i.postimg.cc/TwtHkmQ2/MW3.jpg" alt="image">
        <div class="carousel-caption">
                <h1 class="logo">Greece rent</h1>
                <h4></h4>
                <h3></h3>
        </div>
    </div>
</div>
    <a class="carousel-control-prev" href="#main-slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#main-slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
