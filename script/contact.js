(function () {
    emailjs.init("user_Y41fnJgv1nj4ow0DJZfmZ");
  }
)();

const btn = document.getElementById("button-contact");

document
  .getElementById("form-contact")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_e53plim";
    const templateID = "template_zuxutbl";

    emailjs.send(serviceID, templateID, this).then(
      () => {
        Swal.fire(
            'This message was sent successfully!',
            '',
            'success'
          )
      },
      (err) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
      }
    );
  });
