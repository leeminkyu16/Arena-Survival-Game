module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            name:
            {
                type: String,
                required: true,
            },
            saveData:
            {
                type: String,
                required: true,
            },
            score: {
                type: Number,
                required: true,
            },
            owner: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Account",
            }
        },
    )

    const Save = mongoose.model("Save", schema)

    return Save
}