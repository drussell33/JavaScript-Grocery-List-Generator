
// refresh page button
$("#RefreshButton").click(function() {
  window.location.reload();
});

// user selection of store lists
$("#storeSelectionButton").click(function() {
  let storeVar = $("#inputStore").val();
  console.log("button was clicked");
  console.log(storeVar);

  $("#" + storeVar).removeClass("hidden-list");
  $("#" + storeVar).addClass("active-list");
  $(".store-selection-form").addClass("hidden-list")
  $(".addItemForm").removeClass("hidden-list");
  $("#RefreshButton").removeClass("hidden-list");

});

//adding additional items to the selected list
$("#addItemButton").click(function() {
  let addItemName = $("#inputItemName").val();
  let addItemCategory = $("#inputItemCategory").val();
  let addItemPrice = $("#inputItemPrice").val();
  let addItemUnit = $("#inputItemUnit").val();
  let addItemRecyle = $("#inputItemRecycle").val();

  console.log(addItemName);
  console.log(addItemCategory);
  console.log(addItemPrice);
  console.log(addItemUnit);
  console.log(addItemRecyle);

  //Regular expression! for the price format.
  const priceRE = /\$[\d]*\.[\d]{2}/;

  function checkPrice(addItemPrice) {
    var valid = priceRE.test(addItemPrice);
    if (valid) {
      $('.active-list tbody:last').append('<tr><th scope="row">' + addItemName + '</th><td>' + addItemCategory + '</td><td>' + addItemPrice + '</td><td>' + addItemUnit + '</td><td>' + addItemRecyle + '</td></tr>');
    } else {
      alert("Please enter the price in the correct format");
    }
  }
  checkPrice(addItemPrice);
});
