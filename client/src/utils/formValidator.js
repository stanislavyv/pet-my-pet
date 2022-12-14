const EMAIL_PATTERN =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PASSWORD_PATTERN = /^[a-zA-Z0-9!@#$%^&*+\-_]{6,}$/;

const IMAGE_URL_PATTERN = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;

const USERNAME_PATTERN = /^[a-zA-Z0-9!@#$%^&*+\-_]{4,}$/;

export const isDescriptionValid = (value) => {
    return value.length >= 10 && value.length <= 100;
};

export const isPetNameValid = (value) => {
    return value.length >= 2;
};

export const isPasswordRightLength = (value) => {
    return value.length >= 6;
};

export const isPasswordRightFormat = (value) => {
    return String(value).match(PASSWORD_PATTERN);
};

export const isEmailValid = (value) => {
    return String(value).toLowerCase().match(EMAIL_PATTERN);
};

export const isUsernameRightLength = (value) => {
    return value.length >= 4 && value.length <= 15;
};

export const isUsernameValid = (value) => {
    return String(value).toLowerCase().match(USERNAME_PATTERN);
};

export const isImageUrlValid = (value) => {
    return String(value).match(IMAGE_URL_PATTERN);
};
