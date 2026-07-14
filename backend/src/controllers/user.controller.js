

export const getUsers = async (req, res) => {
   try{
     res.status(501).json({
         message: "Get user pending"
     });
   }catch(error){
    res.status(500).json({
        message: error.message
    });
   }
};

export const getUserById = async (req, res) => {
    try {
        res.status(501).json({
            message: "Get user by id pending"
        });
    }catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};