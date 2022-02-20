const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const accountConfig = require("../config/account.config");

module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        accessTokens: [{
            value: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now()
            },
        }],
        refreshTokens: [{
            value: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now()
            },
        }],
    }, {
        timestamps: false
    })

    schema.virtual("saves", {
        ref: "Save",
        localField: "_id",
        foreignField: "owner"
    })

    schema.method("toJSON", function () {
        const account = this
        const accountObject = account.toObject()

        delete accountObject.password
        delete accountObject.refreshTokens
        delete accountObject.accessTokens

        return accountObject
    });

    schema.method("generateAccessToken", async function () {
        const account = this;
        const token = jwt.sign({
            _id: account._id.toString()
        }, process.env.ACCESS_SECRET, {
            expiresIn: `${accountConfig.accessExpires}ms`
        });

        const comparedTime = Date.now() - (accountConfig.accessExpires);

        account.accessTokens = account.accessTokens.filter(
            (token) => {
                return (token.date.getTime() > comparedTime);
            }
        )

        account.accessTokens = account.accessTokens.concat({
            value: token
        })
        await account.save()

        return token
    });

    schema.method("generateRefreshToken", async function () {
        const account = this;
        const token = jwt.sign({
            _id: account._id.toString()
        }, process.env.REFRESH_SECRET, {
            expiresIn: `${accountConfig.refreshExpires}ms`
        });

        const comparedTime = Date.now() - (accountConfig.refreshExpires);

        account.refreshTokens = account.refreshTokens.filter(
            (token) => {
                return (token.date.getTime() > comparedTime);
            }
        );

        account.refreshTokens = account.refreshTokens.concat({
            value: token
        });
        await account.save();

        return token;
    });

    schema.static("findByCredentials", async (username, password) => {
        const account = await Account.findOne({
            username
        })

        if (!account) {
            throw new Error("Unable to login")
        }

        const isMatch = await bcrypt.compare(password, account.password)

        if (isMatch) {
            return account
        } else {
            throw new Error("Unable to login")
        }
    });

    schema.pre("save", async function (next) {
        if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 9)
        }

        next()
    })

    const Account = mongoose.model("Account", schema)

    return Account
};