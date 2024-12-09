	/* Slider*/
	
	$(document).ready(function(){
		$('.reviews__wrapper').slick({
			arrows:false,
			dots:true,
			slidesToShow:3,
			autoplay:true,
			speed:500,
			responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow:1
				}
			}
		]
		});
	});

	/* Nav*/

	const toggleButton = document.getElementsByClassName('toggle-button')[0]
      const navbarLinks = document.getElementsByClassName('navbar-list')[0]

      toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("active");
      navbarLinks.classList.toggle("active");
      })

      document.querySelectorAll(".navbar-list").forEach(n => n.addEventListener("click", () => {
      toggleButton.classList.remove("active");
      navbarLinks.classList.remove("active");
    }))

	/* Accordion*/

	var acc = document.getElementsByClassName("questions__accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}

		/* Filter*/

		let filter = $("[data-filter]");

	    filter.on("click", function(event) {
	        event.preventDefault();

	        let cat = $(this).data('filter');

	        if(cat == 'all') {
	            $("[data-cat]").removeClass("hide");
	        } else {
	            $("[data-cat]").each(function() {
	                let workCat = $(this).data('cat');

	                if(workCat != cat) {
	                    $(this).addClass('hide');
	                } else {
	                    $(this).removeClass('hide');
	                }
	            });
	        }
	    });