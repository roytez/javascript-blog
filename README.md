# grecce-rent

W swoim kodzie CSS:

Do selektora .btn dodaj właściwość background-color: inherit;
Do selektora .btn-one dodaj background-image: linear-gradient(90deg, #ffffff 50%, transparent 50%);, zastępując w razie potrzeby wartość #ffffff (biały kolor) swoją własną zmienną lub wybranym kodem koloru.
Teraz schowamy nasz gradient, a następnie dodamy kod, który sprawi, że po najechaniu kursorem na przycisk gradient wypełni go w całości.

Do selektora .btn dodaj background-position: 100% 0; oraz background-size: 300%;.
Stwórz selektor dla stanu :hover elementu .btn i nadaj mu background-position: 0 100%; oraz color: #ffffff;.
W razie potrzeby zmień również kolor czcionki dla stanu :hover elementu .btn-one, aby była widoczna na wybranym tle.
Aby uruchomić animację, dodaj selektorowi .btn właściwość transition podaną wyżej.

Gotowe!

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
