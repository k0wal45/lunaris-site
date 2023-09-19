
const Map = ({header, text}) => {
  return (
    <section className='flex flex-col justify-center items-center w-full py-4 lg:py-16 gap-4'>
      <h5 className="font-hussar text-4xl p-4">Jeśteśmy zlokalizowani w Katowicach</h5>
      <p className="p-4">Jesteśmy zlokalizowani w Katowicach oraz często bywamy we Wrocławiu więc jeśli preferujesz spotkania twarzą w twarz, umów się już teraz na darmowe konsultacje</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163404.43961140903!2d18.867110072402557!3d50.21358819181318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2336a1ccd1%3A0xb9af2a350559fabb!2sKatowice!5e0!3m2!1spl!2spl!4v1689259688523!5m2!1spl!2spl" title='map' className='h-96 w-full'allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default Map
