const invalidInput = function() {
    $(".modal-title").text(`Incomplete`);
    $(".modal-body").html(`<p>*Name is a required field.</p>`);
}

const submit = function () {
    let name = $("#name").val();
    if (!name) {
        return invalidInput();
    }
    let photo = $("#photo").val();
    let scores = []
    for (i = 1; i <= 10; i++) {
        scores.push($(`#q${i}`).val());
    }

    $.ajax({
        url: "/api/employees",
        method: "POST",
        data: {
            name: name,
            photo: photo,
            scores: scores
        }
    }).then(function (response) {
        console.log("lol");
        $(".modal-title").text(`Best Match`);
        $(".modal-body").html(`<img src="${response.photo}"><br><p>${response.name}</p>`);
    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();
    submit();
})