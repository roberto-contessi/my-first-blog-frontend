// aspettare che il dom sia pronto

document.addEventListener("DOMContentLoaded", function() {

    // prendere tutte le immagine con classe lazy
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;


    const lazyLoad = function() {
        if (active == false) {
            active = true;

            setTimeout(function() {, 2000);


                //per ogni immagine
                lazyImages.forEach(function(lazyImages) {
                    // capire se l'immagine è in vista e se è visibile 
                    if ((lazyImages.getBoundingClientReact().top <= windows.innerHeight && lazyImages.getBoundingClientReact().bottom >= 0) && getComputedStyle(LazyImage).display !== "none") {
                        // idrato src e srcset con data-src e data-srcset 
                        lazyImages.src = lazyImage.dataset.src

                        //rimuovo la classe lazy per non ripetere l'operazione su questa immagine
                        lazyImage.classList.remove("lazy");
                        //tolgo l'immagine corrente dell'array delle immagini ancora da fare
                        lazyImages = lazyImages.filter(function(image) {
                            return image !== lazyImages;
                        })



                        // mi metto in ascolto sugli eventi di scroll e di resize per attivare la funzione lazyLoad
                        // if (lazyImages.lenght === 0 ){
                        //     document
                        // }






                    }

                });




                active = false;
            }

        }



    })


// trigger 
lazyLoad();
//mi metto in ascolto deggli eventi di scroll e di resize per attivare la funzione lazyload
document.addEventListener("scroll", lazyLoad); windows.addEventListener("resize", lazyLoad); windows.addEventListener("orientationchange", lazyLoad)


})