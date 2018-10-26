const submit = function () {
    let input = []
    for (i = 1; i <= 10; i++) {
        input.push(parseInt($(`#q${i}`)[0].value));
    }
    $.ajax({
        url: "/api/employees",
        method: "POST",
        data: input
    }).then(function (response) {

    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();
    submit();
})