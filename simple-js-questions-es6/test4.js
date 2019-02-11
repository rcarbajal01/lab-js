const templateConfiguration = {
  preferredFormat: 'pdf',
  language: 'en',
  showCompanyLogo: true,
  showPageNumbers: false,
  fontSize: 12,
};


const customConfiguration = {
  language: 'es',
  fontSize: 14,
};


// 1. Create a configuration object that uses the templateConfiguration as a base
// and overrides any existing options as specified in customConfiguration
// the result oboject should looke like this:

// {
//   preferredFormat: 'pdf',
//   language: 'es',
//   showCompanyLogo: true,
//   showPageNumbers: false,
//   fontSize: 14,
// };


// 2. (optional) If we wanted to ensure that no other properties would be added or removed in the templateConfiguration object
// how would we do that using only built-in JS functionality?
