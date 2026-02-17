The project is Karibu Groceries 

Role Authorization Middleware 

middleware/roleMiddleware.js 

const authorize = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return 
res.status(403).json({ message: "Access denied" });
        } 
        next();
    };
}; 

module.exports = authorize;  