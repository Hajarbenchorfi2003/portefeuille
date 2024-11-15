

// src/utils/prismicClient.js
import * as prismic from "@prismicio/client";

// Utiliser les variables d'environnement
const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY;
const endpoint = process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT;

// Création du client Prismic
export const client = prismic.createClient(endpoint, {
  repositoryName,
});
