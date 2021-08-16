export interface IProfile {
  id: { name: string; value: string };
  gender: string;
  email: string;
  cell: string;
  phone: string;
  name: { title: string; first: string; last: string };
  dob: { date: string; age: string };
  picture: { large: string; medium: string; thumbnail: string };
  location: {
    country: string;
    state: string;
    city: string;
    street: { number: number; name: string };
    postcode: string;
  };
  registered: { date: string; age: string };
}
