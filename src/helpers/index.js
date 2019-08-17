export const throwError = ({ response = null }) => {
  let message = "ooops, something went wrong!!";
  if (response && response.data && response.data.errors) {
    message = response.data.errors.message;
  }

  return Promise.reject(message);
};
