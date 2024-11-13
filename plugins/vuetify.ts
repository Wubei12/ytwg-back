// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';
import { VStepperVertical } from 'vuetify/labs/VStepperVertical';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		// ... your configuration
		components: {
			VStepperVertical,
		},
		theme: {
			themes: {
				light: {
					dark: false,
					colors: {
						primary: '#061C23',
						secondary: '#f5d451',
						background: '#eff0f2',
					},
				},
			},
		},
	});
	app.vueApp.use(vuetify);
});
