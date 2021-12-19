export default {
  name: "login",
  components: {},
  props: [],
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "Debe ingresar un e-mail válido",
      (v) => /.+@.+\..+/.test(v) || "Debe ingresar un e-mail válido",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Debe ingresar la contraseña"],
  }),

  methods: {
    validate() {
      let isValid = this.$refs.form.validate();
      if (isValid) this.$router.push({ name: "Home" });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    register() {
      this.$router.push({ name: "Register" });
    },
  },

  computed: {},
  mounted() {},
};
