const petService = require('../services/petService');

module.exports = () => {
    return async (req, res, next) => {
        const pet = await petService.getById(req.params.id);

        if (pet.creator.id == req.uid) {
            return next();
        }

        return res.status(401).json({ message: 'Unauthorized' });
    };
};
