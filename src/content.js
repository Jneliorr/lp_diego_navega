export const clinic = {
  name: 'Dr. Diego Navega',
  phone: '(21) 96478-7624',
  whatsapp: 'https://wa.me/5521964787624?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  instagram: 'https://www.instagram.com/drdiegonavega/',
  maps: 'https://www.google.com/maps/place/?q=place_id:ChIJozsJWbeZ7ZkRiTnqRnoY99s',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=-22.9197201,-42.8178756&destination_place_id=ChIJozsJWbeZ7ZkRiTnqRnoY99s',
  rating: '5,0', reviewCount: 23, cro: 'CRO/RJ 48217',
}

// Transcrições da visualização pública do Google Maps em 23/10/2026.
// As outras 20 avaliações exigiram login; não foram inventadas ou reproduzidas.
export const reviews = [
  { name: 'Adelaine Cardoso', initials: 'AC', text: 'Dr. Diego, super indico, excelente profissional. Agende sua consulta sem medo de ser feliz, vai deixar seu sorriso maravilhoso.', color: 'olive' },
  { name: 'Juliana Anastácio', initials: 'JA', text: 'Atendimento impecável! O Dr. é extremamente atencioso, cuidadoso e explica cada etapa do tratamento com muita clareza.', color: 'sand' },
  { name: 'Daniel Manhães', initials: 'DM', text: 'O melhor dentista e o Melhor consultório de todos, padrão de excelência e atenção durante o atendimento é singular, além de saber o que está fazendo! Recomendo demais!', color: 'clay' },
]

export const services = [
  { name: 'Lentes em resina', tag: 'ESTÉTICA & NATURALIDADE', text: 'Um olhar atento às proporções, à cor e aos detalhes do seu sorriso. Conheça o trabalho com lentes em resina e converse com o Dr. Diego sobre as possibilidades para o seu caso.', image: '/images/resultado-02.jpg', alt: 'Detalhes de lentes em resina publicados pelo Dr. Diego' },
  { name: 'Tratamento de canal', tag: 'ENDODONTIA', text: 'Cuidado com a saúde do dente, com atenção em cada etapa. O Dr. Diego é endodontista e realiza uma avaliação individual para orientar o tratamento adequado.', image: '/images/consultorio.jpg', alt: 'Ambiente do consultório do Dr. Diego Navega' },
  // Conteúdo comercial provisório solicitado pelo usuário. Validar oferta com a clínica.
  { name: 'Clareamento dental', tag: 'LUMINOSIDADE & EQUILÍBRIO', text: 'Um sorriso mais luminoso começa com uma avaliação cuidadosa. Conheça as possibilidades de clareamento e receba orientação sobre a abordagem indicada para você.', image: '/images/consultorio.jpg', alt: 'Recepção do consultório' },
  { name: 'Implantes e próteses', tag: 'FUNÇÃO & CONFIANÇA', text: 'Voltar a sorrir, conversar e se alimentar com conforto. Um planejamento individual considera a saúde bucal e as necessidades de cada pessoa.', image: '/images/diego-retrato.jpg', alt: 'Dr. Diego Navega' },
  { name: 'Ortodontia', tag: 'ALINHAMENTO & HARMONIA', text: 'O alinhamento dos dentes faz parte do equilíbrio do sorriso. Uma avaliação ajuda a entender as opções de tratamento e os próximos passos.', image: '/images/consultorio.jpg', alt: 'Espaço de atendimento da clínica' },
  { name: 'Prevenção e saúde bucal', tag: 'CUIDADO QUE CONTINUA', text: 'A saúde do sorriso se constrói todos os dias. Orientação, avaliações periódicas e cuidados preventivos ajudam a manter uma rotina de atenção à saúde bucal.', image: '/images/consultorio.jpg', alt: 'Ambiente acolhedor da clínica' },
]

export const gallery = [
  { src: '/images/diego-retrato.jpg', title: 'Quem cuida do seu sorriso', type: 'clinica', label: 'Dr. Diego Navega', href: clinic.instagram },
  { src: '/images/resultado-03.jpg', title: 'Um novo jeito de sorrir', type: 'resultados', label: 'Lentes em resina', href: 'https://www.instagram.com/drdiegonavega/p/DdcWfGpEVKa/' },
  { src: '/images/consultorio.jpg', title: 'Cuidado em cada detalhe', type: 'clinica', label: 'Nosso espaço', href: clinic.maps },
  { src: '/images/resultado-05.jpg', title: 'Detalhes que fazem a diferença', type: 'resultados', label: 'Naturalidade', href: 'https://www.instagram.com/drdiegonavega/p/DV9omMWEXwq/' },
  { src: '/images/video-capa.jpg', video: '/images/resultado-video.mp4', title: 'Por trás de um sorriso', type: 'videos', label: 'Assista ao reel', href: 'https://www.instagram.com/drdiegonavega/reel/DVhIzbREZZS/' },
  { src: '/images/resultado-06.jpg', title: 'Cada sorriso, uma identidade', type: 'resultados', label: 'Resultado real', href: 'https://www.instagram.com/drdiegonavega/p/DVrkAXokbLW/' },
]
