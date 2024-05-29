exports.get = async (req: any, res: any) => {
    try {
        res.status(200).json("Hello")
    } catch (err) {
        res.status(400).json(err)
    }
}
