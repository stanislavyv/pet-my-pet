const SUBSTRING_LENGTH = 35;

const formatDescription = (description, isDetailsPage) => {
    let newDescription = isDetailsPage
        ? description
        : `${description.substring(0, SUBSTRING_LENGTH)}`;

    if (!isDetailsPage && description.length > SUBSTRING_LENGTH) {
        newDescription += '...';
    }

    return newDescription;
};

export default formatDescription;
