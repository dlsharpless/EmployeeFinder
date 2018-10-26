const submit = function () {
    let scores = []
    for (i = 1; i <= 10; i++) {
        scores.push($(`#q${i}`)[0].value);
    }
    $.ajax({
        url: "/api/employees",
        method: "POST",
        data: { scores: scores }
    }).then(function (response) {
        console.log(response)
    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();
    submit();
})