import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

// new google.maps.Map(document.getElementById('map') as HTMLElement, {
//   center: { lat: 0, lng: 0 },
//   zoom: 3
// });

const map = new CustomMap('map');
map.addUserMarker(user);
map.addCompanyMarker(company);
