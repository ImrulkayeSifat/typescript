import { User } from "./User";
import { Company } from "./Company";
import 'googlemaps';
import { CustomMap } from "./CustomMap";

const user = new User();
console.log('%c⧭', 'color: #00e600', user);

const company = new Company;
console.log('%c⧭', 'color: #00a3cc', company);

const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
