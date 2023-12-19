$("#sweets").hide();
$("button").click(function() {
    var mystery = $(".secret").val();
    var mystery2 = $(".secret2").val();
console.log(mystery);
$(".vote-result").text(mystery);
    $(".vote-result2").text(mystery2);
    $("#sweets").show();
    alert("Thank You For Voting");
});
