import ProductCategoryPage from "@/components/sections/ProductCategoryPage";

export default function Anelli() {
  return (
    <ProductCategoryPage
      eyebrow="Creazioni Preziose"
      title="Anelli"
      intro="Gli anelli sono progettati come piccoli oggetti d'architettura: presenza netta, proporzioni bilanciate e carattere immediato al primo sguardo."
      image="https://images.unsplash.com/photo-1633810542706-90e5ff7557be?w=1400&q=80"
      sections={[
        {
          title: "Anelli iconici",
          content: "Modelli con silhouette riconoscibili, pensati per diventare il pezzo centrale di una collezione personale.",
        },
        {
          title: "Montature e volumi",
          content: "Le montature bilanciano solidità e leggerezza visiva, con profili studiati per non interrompere la continuità della linea.",
        },
        {
          title: "Pietre e simboli",
          content: "Ogni pietra è scelta per intensità e purezza, in modo da restituire un anello che racconti qualcosa di preciso a chi lo indossa.",
        },
      ]}
    />
  );
}