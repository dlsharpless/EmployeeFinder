const submit = function () {
    let name = $("#name").val();
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
            scores: scores }
    }).then(function (response) {
        console.log(response)
    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();
    submit();
})