const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify2 = createVuetify( );
const app2 = createApp({

	data: () => ({ 
        valid: true,    
        firstName: "",
        lastName: "",
        dob: "",
        userName: "",
        pass: "",
        cpass: "",
        email: "",
        stradd: "",
        suburb: "",
        postcode: "",
        mobile: "",
        category: "",
        categoryList: ['AI', 'Data Science', 'Software Development', 'DevOps', 'Cybersecurity'],
        tandc: false,

        nameRules: [
			v => !!v || 'Name is required',
			v => /^[a-zA-Z]+$/.test(v) || 'Name can only contain letters'
		],
        userNameRules: [
            v => !!v || 'Username is required',
            v => (v && v.length >= 3) || 'Username must have a minimum of 3 characters'
        ],
        passRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 8) || 'Password must have a minimum of 8 characters',
            v => /[$%^&*]/.test(v) || 'Password must include at least 1 special character ($, %, ^, &, *)'
        ],
        emailRules: [
            v => !!v || 'Email is required',
            v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'Please enter a valid email'
        ],
        postcodeRules: [
            v => !!v || 'Postcode is required',
            v => (v && v.length == 4) || 'Postcode must have exactly 4 digits',
            v => /^\d+$/.test(v) || 'Postcode can only contain numbers'
        ],
        mobileRules: [
            v => !!v || 'Mobile number is required',
            v => (v && v.length == 10) || 'Mobile number must have exactly 10 digits',
            v => v.startsWith("04") || 'Mobile number must start with 04',
            v => /^\d+$/.test(v) || 'Mobile number can only contain numbers'
        ],
        categoryRules: [
            v => !!v || 'Please select the category'
        ]
	}),

    computed: {
        dobRules() {
          return [
            v => !!v || 'Date of Birth is required',
            v => this.isValid(v), 
            v => this.is16(v) 
          ];
        }
    },

    methods: {
        isValid(Dob) {
            const date = new Date(Dob);
            if (!isNaN(date.getTime())) {
                return true;
            } else {
                return 'Date of Birth must be valid'; 
            }
        },
        
        is16(Dob) {
            const current = new Date();
            const DOB = new Date(Dob);
            
            const age = current.getFullYear() - DOB.getFullYear() - (current.getMonth() < DOB.getMonth() || (current.getMonth() === DOB.getMonth() && current.getDate() < DOB.getDate()) ? 1 : 0);
            
            if (age >= 16) {
                return true;
            } else {
                return 'Applicant must be at least 16 years old'; 
            }
        },
          
        toggle() {
           this.tandc = !this.tandc;
        },

        submit() {
            this.$refs.form.validate().then(result => {
              if (result.valid) {
                this.$refs.form.$el.submit();
              }
            });
          }
          
    },
});
app2.use(vuetify2).mount('#app2');