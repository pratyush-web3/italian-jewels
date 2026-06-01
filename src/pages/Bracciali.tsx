import ProductCategoryPage from "@/components/sections/ProductCategoryPage";

export default function Bracciali() {
  return (
    <ProductCategoryPage
      eyebrow="Creazioni Preziose"
      title="Bracciali"
      intro="I bracciali uniscono movimento e struttura: una presenza continua che avvolge il polso con ritmo, luce e precisione artigianale."
      image="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1400&q=80"
      sections={[
        {
          title: "Linee fluide",
          content: "Elementi snodati e forme pulite rendono il bracciale facile da indossare e naturalmente elegante in ogni gesto.",
        },
        {
          title: "Struttura e comfort",
          content: "La costruzione interna è pensata per distribuire il peso e mantenere la stabilità senza sacrificare la morbidezza del tocco.",
        },
        {
          title: "Dettagli luminosi",
          content: "Incisioni, micro-incastonature e piccoli contrasti di metallo aggiungono profondità senza interrompere la linea principale.",
        },
      ]}
    />
  );
}