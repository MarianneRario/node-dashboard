$("#add_user").submit(function (event) {
  alert("User successfully added!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  var data = {};
  $.map(unindexed_array, function (n, index) {
    data[n["name"]] = n["value"];
  });
  console.log(data);
  var request = {
    url: `process.env.PORT/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("User successfully updated!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");
    var request = {
      url: `process.env.PORT/api/users/${id}`,
      method: "DELETE",
    };

    // ask for user permission

    if (confirm("Do you want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Record deleted successfully!");
        location.reload();
      });
    } else {
      alert("Record deletion cancelled!");
    }
  });
}
