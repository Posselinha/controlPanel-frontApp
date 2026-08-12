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
    }
};