function PortfolioOffer({children, name}) {
  return (
    <section className="flex flex-col justify-center items-center text-center mb-0 lg:my-12 w-full ">
      <h3 className="text-3xl lg:text-4xl font-hussar my-4">{`Nasze portfolio związene z${name}`}</h3>
      <p className="text-lg opacity-80 p-4 mb-4">Sprawdź nasze portfolio poprzednich prac</p>
      <div className="flex justify-center items-stretch flex-wrap mt-4 lg:gap-8">
        {children}
      </div>
    </section>
  )
}

export default PortfolioOffer