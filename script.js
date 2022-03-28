var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if (initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 350); // Dot Speed

var $loadingMessage = $('#loadingH1');

setTimeout(function() {
    clearInterval(loading);
    $loadingMessage.hide();
}, 1500);

var initProgram = setTimeout(function() {
    var greeting = "UNIDENTIFIED ORGANIC LIFEFORM DETECTED";
    var message = "RUNNING INTRODUCTION PROTOCOL";
    var $identityDiv = $("#identity-results");
    var $name = "NAME: STEVEN PETZ";
    var $alias = "KNOWN ALIAS: SPETZER, STEVO";
    var $occupation = "OCCUPATION: TikTok Creator | Forward Thinker ";
    var $frontEnd = "WHAT IS THIS WEBSITE FOR?";
    var $JSFrameworks = "Showcase my work and ideas";

    function initIdentityResults(i) {
        $("#message").addClass("sign cursor").text(message.substring(0, i));
        if (i < message.length) {
            setTimeout(function() {
                initIdentityResults(i + 1);
            }, 35);
        } else {
            $('#message').removeClass("cursor");
            var loadingResume = function() {
                $("#loadingMessage2").show()
                var dotAlpha = document.getElementById("alpha-loading");
                var loadingAlpha = setInterval(function() {
                    if (dotAlpha.innerHTML.length == 6) {
                        dotAlpha.innerHTML = "";
                    } else {
                        dotAlpha.innerHTML += ".";
                        setTimeout(function() {
                            clearInterval(loadingAlpha);
                            $("#loadingMessage2").hide();
                        }, 2000);
                    }
                }, 350); // Dot Speed
            }
            loadingResume();

            function initName(i) {
                $("#name").addClass("sign cursor").text($name.substring(0, i));
                if (i < $name.length) {
                    setTimeout(function() {
                        initName(i + 1);
                    }, 35);
                } else {
                    $("#name").removeClass("cursor");
                    setTimeout(function() {
                        initAlias(0);
                    }, 1500);
                }
            }
            setTimeout(function() {
                initName(0);
            }, 2500);
        }

        function initAlias(i) {
            $("#alias").addClass("sign cursor").text($alias.substring(0, i));
            if (i < $alias.length) {
                setTimeout(function() {
                    initAlias(i + 1);
                }, 35);
            } else {
                $("#alias").removeClass("cursor");
                setTimeout(function() {
                    initOccupation(0);
                }, 1500);
            }
        }

        function initOccupation(i) {
            $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
            if (i < $occupation.length) {
                setTimeout(function() {
                    initOccupation(i + 1);
                }, 35);
            } else {
                $("#occupation").removeClass("cursor");
                setTimeout(function() {
                    initFrontEnd(0);
                }, 1500);
            }
        }

        function initFrontEnd(i) {
            $('#front-end-span').addClass('fa fa-wrench');
            $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
            if (i < $frontEnd.length) {
                setTimeout(function() {
                    initFrontEnd(i + 1);
                }, 35);
            } else {
                $('#front-end').removeClass("cursor");
                setTimeout(function() {
                    initJSFrameworks(0);
                }, 1500);
            }
        }

        function initJSFrameworks(i) {
            $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
            if (i < $JSFrameworks.length) {
                setTimeout(function() {
                    initJSFrameworks(i + 1);
                }, 35);
            } else {
                $('#js-frameworks').removeClass("cursor");
                setTimeout(function() {
                    initDesignAnimation(0);
                }, 1500);
            }
        }

        function initDesignAnimation(i) {
            $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
            if (i < $designAnimation.length) {
                setTimeout(function() {
                    initDesignAnimation(i + 1);
                }, 35);
            } else {
                //$('#design-animation').removeClass("cursor");
            }
        }
    }

    function initProgramAlpha(i) {
        $("#greeting").addClass("cursor").text(greeting.substring(0, i));
        if (i < greeting.length) {
            setTimeout(function() {
                initProgramAlpha(i + 1);
            }, 35);
        } else {
            $("#greeting").removeClass("cursor");
            initIdentityResults(0);
        }
    }
    initProgramAlpha(0)

}, 1500);

initProgram()