export default async function handler(req, res) {
    const response = await fetch("https://api.instatus.com/v1/clqbdolmk19837b0op7fb9dw2z/components", {
        method: "GET",
        headers: {
            Authorization: "Bearer 71e6fca45c3d05f9a30310ac0e4ce1e1",
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    res.status(200).json(data);
}