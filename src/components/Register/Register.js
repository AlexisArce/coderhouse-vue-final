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
      axios
        .post("https://61ba455648df2f0017e5aa20.mockapi.io/Users", this.form)
        .then((response) => {
          console.log(response);
          this.resetForm();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    goBack() {
      this.$router.go(-1);
      console.log("goBack");
    },
  },
};
