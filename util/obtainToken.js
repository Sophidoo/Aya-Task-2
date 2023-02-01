
export const obtainToken = (req, res) => {
    const header = req.headers;
    const token = header.authorization.split(" ")[1]

    if(token !== undefined){
        return token
    }else{
        res.json({
            status: "Failed",
            message: "No token attached to header"
        })
    }
}