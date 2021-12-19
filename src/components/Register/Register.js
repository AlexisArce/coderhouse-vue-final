import axios from "axios";

export default {
  name: "register",
  data() {
    const defaultForm = Object.freeze({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        firstname: [
          (val) => (val || "").length > 0 || "Debe ingresar su nombre",
        ],
        lastname: [
          (val) => (val || "").length > 0 || "Debe ingresar su apellido",
        ],
        email: [
          (v) => !!v || "Debe ingresar un e-mail válido",
          (v) => /.+@.+\..+/.test(v) || "Debe ingresar un e-mail válido",
        ],
        password: [(v) => !!v || "Debe ingresar la contraseña"],
      },
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.firstname &&
        this.form.lastname &&
        this.form.email &&
        this.form.password
      );
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },

    submit() {
      const newUser = {
        firstName: this.form.firstname,
        lastName: this.form.lastname,
        email: this.form.email,
      };

      axios({
        method: "post",
        headers: { "app-id": "61bd5f9981e13ce1612897e9" },
        url: "https://dummyapi.io/data/v1/user/create",
        data: newUser,
      })
        .then((response) => {
          console.log(response);
          this.resetForm();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
