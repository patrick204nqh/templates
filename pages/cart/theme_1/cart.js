// ============== input number cart =============
$('.input_number .value-button.increase').click(function (e) {
    var result = parseInt($(e.target).closest('tr').find('.num').val(), 10)
    result+=1
    $(e.target).closest('tr').find('.num').val(result)
})
$('.input_number .value-button.decrease').click(function (e) {
    var result = parseInt($(e.target).closest('tr').find('.num').val(), 10)
    result-=1
    if(result < 1) {
        result = 1
    }
    $(e.target).closest('tr').find('.num').val(result)
})
// ============== End input number cart =============