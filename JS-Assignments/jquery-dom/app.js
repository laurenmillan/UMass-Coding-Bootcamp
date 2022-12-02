$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

$("#title").css("font-size", Math.random() * 100);

$("article img").addClass("image-center");

$("img").on('click', function (e) {
    $(e.target).remove();
  });
  
$("article p:last-child").remove();

$("ol").append($("<li>", {text: "puppies are cute."}));

$("aside").empty().append($("<p>", {text: "the list is silly :("}));