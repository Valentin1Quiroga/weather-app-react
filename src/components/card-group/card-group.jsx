import Card from '../card/card';
const ciudades=[{id:1,name:"Aguilares", temperatura:"32°C", clima:"Soleado"},{id:2,name:"Cordoba", temperatura:"28°C", clima:"Algunas nubes"},{id:3,name:"Tucuman", temperatura:"33°C", clima:"Soleado"}]
const CardsGroup = () => {
    return (
        <div className='container'>
          <div className="row">
            {
              ciudades.map(ciudad=>(
                <div className="col-lg-4">
                  <Card imagen={"https://picsum.photos/700/400?random" + ciudad.id } nombre={ciudad.name} temperatura={ciudad.temperatura} clima={ciudad.clima} key={ciudad.id}/>
                </div>
              ))
            }
          </div>
        </div>
     );
}
 
export default CardsGroup;