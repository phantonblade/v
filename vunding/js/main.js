$('.progress').progress();

$('.ui.modal').modal();

$('.menu .item').tab();

$('.ui-register').click(function() {
    $('.ui-register-modal').modal('show');
    hideAllSections();
    $('.ui-register-modal-select-section').show();
    $('.ui-register-modal').modal('show');
});

$('.ui-login').click(function() {
    $('.ui-login-modal').modal('show');
});

$('.ui-case-1').click(function() {
    location.href = './case.html';
});

function hideAllSections() {
    $('.ui-register-modal').modal('hide');
    $('.ui-register-modal-select-section').hide();
    $('.ui-register-modal-facility-section').hide();
    $('.ui-register-modal-volunteer-section').hide();
}

$('.ui-register-modal-facility').click(function() {
    hideAllSections();
    $('.ui-register-modal-facility-section').show();
    $('.ui-register-modal').modal('show');
});

$('.ui-register-modal-volunteer').click(function() {
    hideAllSections();
    $('.ui-register-modal-volunteer-section').show();
    $('.ui-register-modal').modal('show');
});