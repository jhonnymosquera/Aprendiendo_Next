export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            tienda: "D1",
            produts: [
                {
                    id: 1,
                    produtName: "produt 1"
                }, {
                    id: 2,
                    produtName: "produt 2"
                }, {
                    id: 3,
                    produtName: "produt 3"
                }, {
                    id: 4,
                    produtName: "produt 4"
                },
            ]
        },
        {
            id: 2,
            tienda: "D2",
            produts: [
                {
                    id: 1,
                    produtName: "produt 1"
                }, {
                    id: 2,
                    produtName: "produt 2"
                }, {
                    id: 3,
                    produtName: "produt 3"
                }, {
                    id: 4,
                    produtName: "produt 4"
                },
            ]
        },
        {
            id: 3,
            tienda: "D3",
            produts: [
                {
                    id: 1,
                    produtName: "produt 1"
                }, {
                    id: 2,
                    produtName: "produt 2"
                }, {
                    id: 3,
                    produtName: "produt 3"
                }, {
                    id: 4,
                    produtName: "produt 4"
                },
            ]
        },
    ]);
}
