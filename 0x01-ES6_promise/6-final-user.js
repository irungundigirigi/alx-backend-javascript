import signUpUser from './4-user-promises';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
	return Promise
		.allSettled([signUpUser(firstName, lastName)])
		.then((res) => (
			res.map ((o) => ({
				status: o.status,
				value: o.status === 'fulfilled' ? o.value : String(o.reason),
			}))
		));
}
