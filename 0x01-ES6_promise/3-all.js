import { uploadPhoto, createUser } from './utils.js';
export function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((resolve) => {
      console.log('${resolve[0].body} ${resolve[1].firstName} ${resolve[1].lastName}');
    })
    .cath(() => console.log('Signup system offline'));
}
