filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  let counts = setInterval(updated);
  let upto = 1000;
  function updated() {
      let count1 = document.getElementById("counter1");
      count1.innerHTML = --upto;
      let count2 = document.getElementById("counter2");
      count2.innerHTML = --upto;
      let count3 = document.getElementById("counter3");
      count3.innerHTML = --upto;
      let count4 = document.getElementById("counter4");
      count4.innerHTML = --upto;
      if (upto === 0) {
          clearInterval(counts);
      }
  }
  document.getElementById('btn-monthly').addEventListener('click', function() {
    document.getElementById('monthly-plans').classList.remove('hidden');
    document.getElementById('yearly-plans').classList.add('hidden');
    this.classList.add('btn-primary');
    this.classList.remove('btn-secondary');
    document.getElementById('btn-yearly').classList.remove('btn-primary');
    document.getElementById('btn-yearly').classList.add('btn-secondary');
});

document.getElementById('btn-yearly').addEventListener('click', function() {
    document.getElementById('yearly-plans').classList.remove('hidden');
    document.getElementById('monthly-plans').classList.add('hidden');
    this.classList.add('btn-primary');
    this.classList.remove('btn-secondary');
    document.getElementById('btn-monthly').classList.remove('btn-primary');
    document.getElementById('btn-monthly').classList.add('btn-secondary');
});
jQuery(document).ready(function ($) {
	var owl = $("#owl-demo-2");
	owl.owlCarousel({
        
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		items: 3,
		loop: true,
		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 0,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoWidth: false,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {
			0: {
				items: 1
				// nav: true
			},
			480: {
				items: 2,
				nav: false
			},
			768: {
				items: 3,
				// nav: true,
				loop: false
			},
			992: {
				items: 2,
				// nav: true,
				loop: false
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: "swing",
		info: false,
		nestedItemSelector: false,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab",
		autoHeight: false,
		lazyLoad: false
	});

	$(".next").click(function () {
		owl.trigger("owl.next");
	});
	$(".prev").click(function () {
		owl.trigger("owl.prev");
	});
});


  