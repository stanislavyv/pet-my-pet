const admin = require('../config/firebase');

const authenticate = () => {
    return async (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const token = req.headers.authorization.split(' ')[1];

        if (token === 'null') {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {
            const decoded = await admin.auth().verifyIdToken(token);

            if (decoded) {
                req.uid = decoded.uid;
                return next();
            }

            return res.status(401).json({ message: 'Unauthorized' });
        } catch (e) {
            return res.status(500).json({ message: 'Internal error' });
        }
    };
};

module.exports = authenticate;
