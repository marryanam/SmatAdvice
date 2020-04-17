$(window).on("load", function() {

    /*---------------------------------   preloader    -------------------------------*/

    var counter = 0;
    var count = 0;
    var i = setInterval(function() {
        $(".prograss__line span").html(count + "%");
        $(".prograss__line").css("width", count + "%");
        counter++;
        count++;
        if (counter == 101) {
            clearInterval(i);
            $(".preloader").fadeOut();
            $("html, body").css("overflow-y", "visible");
        }
    }, 20);

    /*---------------------------------   swiper sliders    -------------------------------*/
    var swiper;
    $(".swiper-js").each(function() {
        var _this = $(this),
            container = _this.find(".swiper-container");
        if (_this.hasClass("reviews__slider")) {
            swiper = new Swiper(container, {
                speed: 2500,
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 15000,
                },
                navigation: {
                    nextEl: $(this).find(".swiper-button-next"),
                    prevEl: $(this).find(".swiper-button-prev")
                },
                breakpoints: {
                    991: {
                        slidesPerView: 1
                    }
                }
            });
        } else if (_this.hasClass("certificates__slider")) {
            swiper = new Swiper(container, {
                speed: 1500,
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                fadeEffect: { crossFade: true },
                effect: "fade",
                autoplay: {
                    delay: 15000,
                },
                navigation: {
                    nextEl: $(this).find(".swiper-button-next"),
                    prevEl: $(this).find(".swiper-button-prev")
                }
            });
        }
    });

});

$(document).ready(function() {

    /*---------------------------------    animation     -------------------------------*/

    var animationData={assets:[],v:"5.3.4",fr:24,ip:0,op:144,w:757,h:1016,nm:"251695-P46VB0-32",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Layer 3",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:-12,s:[-12],e:[3]},{t:24}],ix:10,x:"var $bm_rt;\n$bm_rt = loopOut('pingpong');"},p:{a:0,k:[365.76,735.29,0],ix:2},a:{a:0,k:[365.76,735.29,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-3.635,-12.356],[0,0],[37.505,150.018],[-29.778,-94.295]],o:[[0,0],[23.722,-99.23],[0,0],[7.273,24.732]],v:[[-32.491,285.336],[-16.37,285.336],[40.802,-285.336],[-48.529,230.806]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.356999984442,.709999952129,.607999973671,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[390.646,446.953],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:144,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Layer 4",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:0,s:[15],e:[5]},{t:36}],ix:10,x:"var $bm_rt;\n$bm_rt = loopOut('pingpong');"},p:{a:0,k:[363.814,735.956,0],ix:2},a:{a:0,k:[363.814,735.956,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[84.37,238.22],[-69.481,-183.628]],o:[[0,0],[0,0]],v:[[-27.297,-342.44],[12.407,342.44]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.388000009574,.647000002394,.564999988032,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[354.524,393.515],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:144,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Layer 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:0,s:[-5],e:[10]},{t:36}],ix:10,x:"var $bm_rt;\n$bm_rt = loopOut('pingpong');"},p:{a:0,k:[368.407,735.956,0],ix:2},a:{a:0,k:[368.407,735.956,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[153.851,173.703],[-94.295,-178.664],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-47.148,-310.182],[-12.408,131.517],[81.888,310.182]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.356999984442,.709999952129,.607999973671,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[285.043,425.774],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:144,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"OBJECTS",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[370.803,823.802,0],ix:2},a:{a:0,k:[370.803,823.802,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-33.471,-1.957],[-23.027,12.404],[2.177,3.035],[8.494,.877],[43.04,-7.297]],o:[[36.58,2.14],[4.609,-2.482],[-2.573,-3.589],[-43.977,-4.539],[-63.058,10.694]],v:[[2.925,17.482],[102.172,1.61],[108.701,-7.091],[87.895,-13.035],[-47.82,-12.325]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.322000002394,.310000011968,.388000009574,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[343.549,719.329],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[-6.255,-35.215],[-15.962,-28.607],[-31.839,-7.712],[-14.846,.398],[-14.044,8.272],[-7.437,19.898],[-6.362,35.375],[9.535,18.43],[27.741,4.525],[44.168,-18.771]],o:[[5.729,32.256],[15.963,28.609],[14.436,3.495],[16.293,-.434],[18.303,-10.779],[12.582,-33.668],[3.673,-20.423],[-12.915,-24.963],[-46.098,-7.52],[-38.56,16.388]],v:[[-127.799,-19.068],[-98.767,74.334],[-25.176,135.21],[19.14,138.255],[66.498,128.516],[101.837,77.033],[130.332,-26.813],[126.844,-87.807],[55.924,-127.341],[-97.819,-119.935]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,1,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[369.721,821.354],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1}],ip:0,op:144,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:0,k:20,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[386.5,518,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[264,64],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.995999983245,.875,.532999973671,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:.5,ix:5},lc:1,lj:1,ml:4,ml2:{a:0,k:4,ix:8},nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[0,0,0,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-6.5,436],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:144,st:0,bm:0}],markers:[]};
    var body = document.body;

    function bodymoving(elemId) {
        var animContainer = document.getElementById(elemId);

        var params = {
            container: animContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'none',
                progressiveLoad: true,
            }
        };
        var anim = bodymovin.loadAnimation(params);

        anim.setDirection(1);
        anim.play();
        body.classList.add("open");
    }
    bodymoving('bodymovin');

    /*---------------------------------    animation on scroll    -------------------------------*/

    function animationTrigger() {
        var $animation_elements = $(".js_st");
        var $window = $(window);
        $window.on("scroll resize", check_if_in_view);
        $window.trigger("scroll");

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = window_top_position + window_height;

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = element_top_position + element_height;

                if (
                    element_bottom_position >= window_top_position &&
                    element_top_position <= window_bottom_position
                ) {
                    $element.addClass("in-view");
                } else {
                    $element.removeClass("in-view");
                }
            });
        }
    }
    animationTrigger();


    /*---------------------------------   mask tel   -------------------------------*/

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }

    function funMask(event) {
        var that = event.target;
        var matrix = "+38(___)-___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = that.value.replace(/\D/g, "");
        if (def.length >= val.length) {
            val = def;
        }
        that.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        if (event.type === "blur") {
            if (that.value.length === 2) {
                that.value = "";
            }
        } else {
            setCursorPosition(that.value.length, that);
        }
    }

    var $telForm = $("input[type='tel']");
    $telForm.on("focus click blur input", funMask);

    /*---------------------------------   modals  -------------------------------*/

    $(".modal-btn").click(function(e) {

        var target = $(this).data("target"),
            form = $(".modal");
        $(".overlay").fadeIn();
        $(target).toggleClass("active");
        $("html,\n" + "body").css("overflow-y", "hidden");
        form.not(target).removeClass("active");
        var firstClick = true;
        $(document).bind("click.myEvent", function(e) {
            var data_t = e.target;
            if (
                !firstClick &&
                data_t.tagName !== "path" &&
                $(e.target).closest(form).length === 0
            ) {
                if (!$(data_t).hasClass("modal-btn")) {
                    $(form).removeClass("active");
                    $(".overlay").fadeOut();
                    $(document).unbind("click.myEvent");
                    $("html,\n" + "body").css("overflow-y", "visible");

                }
            }
            firstClick = false;
        });
        $(".close").click(function(e) {
            $(form).removeClass("active");
            $(".overlay").fadeOut();
            $(document).unbind("click.myEvent");
            $("html,\n" + "body").css("overflow-y", "visible");

        });
    });

    /*---------------------------------  map   -------------------------------*/

    function initMap() {

        var myLatlng = { lat: 49.4180044, lng: 27.0015429 };
        var mapOptions = {
            zoom: 15,
            center: myLatlng,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false
        };
        var icon = "../smartAdvice/img/11.png";
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            icon: icon,
            animation: google.maps.Animation.DROP
        });
        marker.addListener(toggleBounce);

        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }

        marker.setMap(map);

        function toggleBounce() {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
        toggleBounce();
    }

    if ($("#map") != null && $("#map").length > 0) {
        initMap();
    }

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()

        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 200,
            },
            1000,
            'linear'
        )
    });

    SmoothScroll({
        keyboardSupport: true,
        animationTime: 1000,
        stepSize: 120, // [px]
    });

    /*---------------------------------   menu    -------------------------------*/

    $(".menuIcon").on("click", function() {
        $(this).toggleClass("opened");
        if ($(this).hasClass("opened")) {
            $(this)
                .next()
                .addClass("opened");
        } else {
            $(this)
                .next()
                .removeClass("opened");
            $(this).removeClass("opened");
        }
    });


});