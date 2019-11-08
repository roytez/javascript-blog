# grecce-rent

W pliku HTML, pod nawigacją, stwórz element <header> o klasie splash. W CSS nadaj kolor tła (najlepiej taki, jak tło nawigacji), kolor czcionki, minimalną wysokość (w projekcie jest to 500px) oraz, co najważniejsze, display: flex;. To będzie nasz element-rodzic.

Wewnątrz <header> dodaj <div> o klasie splash-inner. W środku umieść element <h1> z klasą page-title i dowolną treścią, oraz <h2> z klasą page-subtitle - również wpisz w nim dowolną treść. Pod nagłówkiem <h2> umieść link (<a>) z atrybutem href równym # oraz dwiema klasami: btn oraz btn-one. W projekcie jego treść to "see our work", ale możesz wstawić własną.

W CSS nadaj elementowi splash-inner właściwość margin: auto;. I tylko tyle wystarczy, by dzięki flexboksowi perfekcyjnie wycentrować element w obu osiach! W projekcie dodatkowo nadaliśmy temu elementowi max-width: 70%;.

Następnie ostyluj oba nagłówki zgodnie z własnym uznaniem. W projekcie główny tytuł ma zerowy margines, czcionkę 72px, word-spacing równy -24px, wagę 700 i interlinię - 1.2. Podtytuł natomiast ma margines 24px 0;, wagę czcionki 400 i rozmiar 16px;.

Jak widzisz, w projekcie słowo „creatively” jest zapisane inną czcionką, niż reszta tytułu. Jak osiągnąć taki efekt? Za pomocą znanego Ci już znacznika <span>! Owiń wybrane słowo w tytule w znacznik <span></span> i za pomocą selektora .page-title span nadaj mu wybrane style.

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
