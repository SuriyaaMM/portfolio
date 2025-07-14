import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const projects = [
        { name: "jax#29343", url: "https://github.com/jax-ml/jax/pull/29343", description: "Gumbel distribution implementation for JAX", language: "Python" },
        { name: "VisionTransformer-JAX", url: "https://github.com/SuriyaaMM/VisionTransformer-Jax", description: "ViT from scratch with Optax", language: "Python" },
        { name: "Raptor", url: "https://github.com/SuriyaaMM/Raptor", description: "Sentiment-aware stock prediction using NLP", language: "Python" },
        { name: "Parallel-Computing-GANs", url: "https://github.com/codeclubiittp/Parallel-Computing-GANs", description: "CUDA layer implementations", language: "C++" },
        { name: "AIStuff", url: "https://github.com/SuriyaaMM/AIStuff", description: "LLM/DL zoo built from scratch", language: "Python" }
    ];

    try {
        const res = await fetch('https://api.github.com/users/SuriyaaMM/repos?sort=updated&per_page=6');
        if (res.ok) {
            const data = await res.json();
            const repos = data.map((repo: any) => ({
                name: repo.name,
                url: repo.html_url,
                description: repo.description || 'No description available.',
                language: repo.language
            }));
            return { repos };
        }
        return { repos: projects };
    } catch (error) {
        console.error("Error fetching repos:", error);
        return { repos: projects };
    }
};