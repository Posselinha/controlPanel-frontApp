const API_URL = 'https://controlpanel-app.gabrielfilipeposs.workers.dev';

export type Produto = {
    id: number;
    nome: string;
    preco: number;
}

export const apiService = {
    async getStatus() {
        const res = await fetch(`${API_URL}`);
        if (!res.ok) throw new Error('Erro ao conectar na API');
        return res.json();
    },

    async getProdutos(): Promise<Produto[]> {
        const res = await fetch(`${API_URL}/produtos`);
        if (!res.ok) throw new Error("Erro ao carregar produtos");
        return res.json();
    },

    async loginUser(username: string, password: string) {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (!res.ok) {
            console.log(await res.json());
            return;
        }
    },

    async registerUser() {
        const res = await fetch(`${API_URL}/cadastro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    username: "gabriel",
                    password: "123",
                    token: "1234"
                }),
        })

        if (!res.ok) {
            const errorText = await res.text();
            let erroBackend = errorText;
            try {
                erroBackend = JSON.parse(errorText);
            } catch {

            }

            console.error(`Erro no servidor [Status: ${res.status}]`, erroBackend);
            throw new Error(`Erro ao cadastrar usuário (Status: ${res.status})`);
        }

        return res.json();

    }
};