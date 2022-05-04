var a = $(".r"); var b = $(".b"); var c = $(".g"); var d = $(".y"); var i = 1;



$("body").on("click", function () {
    console.log("i got clicked");
    var output = Math.floor(Math.random() * 4 + 1);
    $("h1").text(`level ${i} ${output}`);
    if (output === 1) { a.addClass("selected"); }
    if (output === 2) { b.addClass("selected"); }
    if (output === 3) { c.addClass("selected"); }
    if (output === 4) { d.addClass("selected"); }
    setTimeout(function () { $(".box").removeClass("selected") }, (1000/i));
    i++;
    $(".box").on("click",function(){
        console.log($(this).attr("id"));
    })
}
)
// $("body").on("click", function () {
//     console.log("i got clicked");
//     for (var i = 1; i < 5; i++) {
//         $("h1").text(`Level ${i}`)
//         for (var j = 0; j < i; j++) {
//             var output = Math.floor(Math.random() * 4 + 1);
//             if (output === 1) { a.addClass("selected"); }
//             if (output === 2) { b.addClass("selected"); }
//             if (output === 3) { c.addClass("selected"); }
//             if (output === 4) { d.addClass("selected"); }
//             setTimeout(function () { $(".box").removeClass("selected") }, 1000);
//         }
//     }
// })