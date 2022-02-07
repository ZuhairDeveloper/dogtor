// export const apiUrl = "https://codeangelzbackend.herokuapp.com"; //live
export const apiUrl = "https://0fda-119-155-153-170.ngrok.io"; //local
export const imageUrl = `${apiUrl}/api/images/`;

export const BaseURL = (link) => {
  return `${apiUrl}/api/v1/${link}`;
};

export const apiHeader = (token, isFormData) => {
  if (token && !isFormData) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  }
  if (token && isFormData) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        // Accept: 'application/json',
        "Content-Type": "multipart/form-data",
      },
    };
  }
  if (!token && !isFormData) {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (!token && isFormData) {
    return {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  }
};

export const firebaseVapidObject = {
  vapidKey: "",
};

export const stripe_public_key = "";
