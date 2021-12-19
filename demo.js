// CONCEPT HOW TO PASS FUNCTION AS AN ARGUMENT

const manikangkan = () => {
  console.log("this is manikangkan function");
};

// here we are passing only reference i.e in the form formal argument of function manikangkan
const asity = (manikangkan) => {
  manikangkan();
};

// here we are passing the referent of function manikangkan as an actual argument argument
asity(manikangkan);
