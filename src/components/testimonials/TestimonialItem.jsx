import React from 'react'

const TestimonialItem = ({img, name, opinion, rate}) => {

  const rating = [];
    
  for (let i = 1; i <= rate; i++) {
      rating.push(
        i === rate 
        ? <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled  checked/>
        : <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
      );
    }
  

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md border-2 border-neutral-200 max-w-[30rem] max-h-min mx-auto">
      <div className="flex justify-start items-center gap-4">
        <img src={img} alt="Zdjęcie użytkownika który wystawił opinię" className='aspect-square rounded-full w-16'/>

        <div className="flex flex-col gap-2">
          <h7 className="text-xl font-hussar">{name}</h7>

          <div class="rating">
            {rating}
          </div>
          
        </div>

      </div>
      <p className="text-lg">{opinion}</p>
    </div>
  )
}

export default TestimonialItem
