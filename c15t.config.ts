import { googleTagManager } from '@c15t/integrations/google-tag-manager';
import { defineConsentConfig } from 'c15t/next';

export default defineConsentConfig({
	scripts: [
		googleTagManager({
			id: 'GTM-M2MCGTDJ',
			loadMode: 'after-consent',
		}),
	],
});
