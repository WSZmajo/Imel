function save() {
    var email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    var name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    var surname = document.getElementById("surname").value;
    localStorage.setItem("surname", surname);
    var company = document.getElementById("company").value;
    localStorage.setItem("company", company);
    var address = document.getElementById("address").value;
    localStorage.setItem("address", address);
    var accommodation = document.getElementById("accommodation").value;
    localStorage.setItem("accommodation", accommodation);
    var postalcode = document.getElementById("postalcode").value;
    localStorage.setItem("postalcode", postalcode);
    var city = document.getElementById("city").value;
    localStorage.setItem("city", city);
    var country = document.getElementById("country").value;
    localStorage.setItem("country", country);
    var phone = document.getElementById("phone").value;
    localStorage.setItem("phone", phone);
    var paypal = document.getElementById("paypal");
    localStorage.setItem("paypal", paypal);
    var stripe = document.getElementById("stripe");
    localStorage.setItem("stripe", stripe);
    var applepay = document.getElementById("applepay");
    localStorage.setItem("applepay", applepay);
    var karna = document.getElementById("karna");
    localStorage.setItem("karna", karna);
}