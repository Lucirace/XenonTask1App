import Property from '../models/Property.js';
export const getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

