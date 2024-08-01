$(document).ready(function () {
    $('#colorChangeForm').on('submit', function (event) {
        event.preventDefault();

        $.post('/login', $(this).serialize(), function (response) {
            if (response.valid) {
                $('#colorMessage').css('background-color', 'green').text('Credentials match!').show();
            } else {
                $('#colorMessage').css('background-color', 'red').text('Credentials do not match!').show();
            }
        });
    });

    $('#loginForm').on('submit', function (event) {
        event.preventDefault();

        // Hide the error message initially
        $('#errormsg').hide();

        $.post('/login', $(this).serialize(), function (response) {
            if (response.valid) {
                window.location.href = '/account';
            } else {
                // Show the error message
                $('#errormsg').text('User credentials do not match').show();
            }
        });
    });
});
