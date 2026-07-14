

export const register = async (req, res) => {
    try{
        res.status(501).json({
            message: "Register pending"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const login = async (req, res) => {
    try{
        res.status(501).json({
            message: "Login pending"
        });
    } catch(error){
        res.status(501).json({
            message: error.message
        });
    }
};