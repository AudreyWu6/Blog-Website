import jwt from "jsonwebtoken";

const authentication = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        // console.log('Authorization Header:', authHeader); // Log the authorization header
        if (!authHeader) return res.status(401).json({ message: "No authorization header provided" });

        const token = authHeader.split(' ')[1];
        if (token) {
            let decodedData = jwt.verify(token, "1234");
            req.userId = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid token" });
    }
};


export default authentication;