import axios from "axios";

describe("Integration Test", () => {
    it("hello world integration test", async () => {
        const response = await axios.get("http://127.0.0.1:3000/poke", {
        });

        expect(response.status).toEqual(200);
        expect(response.data).toEqual(`👋 hey`);
    });
});