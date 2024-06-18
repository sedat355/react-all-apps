const Card = ({ card }) => {
  return (
    <div className="flex flex-col w-56 shadow-lg border">
      <div className="mb-2 flex items-center justify-center">
        <img className="max-w-56 object-cover" src={card.imageUrl} alt={card.title} />
      </div>

      <div className="p-4 flex flex-col h-full">
        <div className="mb-2">
          <h3>{card.title}</h3>
          <span>{card.subtitle}</span>
        </div>

        <p className="mt-auto">{card.description}</p>
      </div>
    </div>
  )
}

export default Card