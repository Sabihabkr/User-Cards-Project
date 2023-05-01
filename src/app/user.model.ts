export interface User {
  name: {
    gender:string;
    title: string;
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: Date;
    age: number;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  phone: string;
  login: {
    username: string;
    password: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
