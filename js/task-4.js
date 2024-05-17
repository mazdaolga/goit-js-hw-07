 const form = document.querySelector('.login-form');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
      event.preventDefault();

      const formData = {};
      const formElements = event.target.elements;

      for (let element of formElements) {
        if (element.tagName === 'INPUT') {
          const { name, value } = element;
          formData[name] = value.trim();
        }
      }

      if (!formData.email || !formData.password) {
        alert('All form fields must be filled in');
        return;
      }

      console.log(formData);
      form.reset();
    }
