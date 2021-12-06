checkLength = (str) => {
  return str.split(" ").join("");
};

$("#add_user").submit(function (event) {
  var name = document.forms["add_user_frm"]["name"].value;
  var email = document.forms["add_user_frm"]["email"].value;
  var password = document.forms["add_user_frm"]["password"].value;

  if (
    checkLength(name) === "" ||
    checkLength(email) === "" ||
    checkLength(password) === ""
  ) {
    alert("Please complete the input fields...");
    return false;
  } else {
    alert("User successfully added!");
  }
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var name = document.forms["update_user_frm"]["name"].value;
  var email = document.forms["update_user_frm"]["email"].value;
  var password = document.forms["update_user_frm"]["password"].value;

  if (
    checkLength(name) === "" ||
    checkLength(email) === "" ||
    checkLength(password) === ""
  ) {
    alert("Please complete the input fields...");
    return false;
  }

  var unindexed_array = $(this).serializeArray();
  var data = {};
  $.map(unindexed_array, function (n, index) {
    data[n["name"]] = n["value"];
  });
  console.log(data);

  var request = {
    url: `https://acc-dashboard.herokuapp.com/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  // var request = {
  //   url: `http://localhost:8080/api/users/${data.id}`,
  //   method: "PUT",
  //   data: data,
  // };

  $.ajax(request).done(function (response) {
    alert("User successfully updated!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");
    var request = {
      url: `https://acc-dashboard.herokuapp.com/api/users/${id}`,
      method: "DELETE",
    };

    // var request = {
    //   url: `http://localhost:8080/api/users/${id}`,
    //   method: "DELETE",
    // };

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
