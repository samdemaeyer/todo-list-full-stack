"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const output_json_1 = __importDefault(require("./swagger/output.json"));
const todos_1 = require("./routes/todos");
const fakeDBSetup_1 = require("./database/fakeDBSetup");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const port = process.env.PORT;
exports.app.use((0, cors_1.default)({ origin: "*" }), express_1.default.json());
exports.app.use(express_1.default.json({ limit: "1mb" }));
(0, fakeDBSetup_1.setup)(() => {
    exports.app.use("/todos", todos_1.todos);
    exports.app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(output_json_1.default));
    exports.app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
});
