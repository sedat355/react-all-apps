const Card = ({ card }) => {
  return (
    <div className="flex flex-col border border-black-one rounded w-56">
      <div className="mb-2 border-b border-black-one">
        <img className="h-62 w-full p-2 object-cover" src={card.imageUrl} alt={card.title} />
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