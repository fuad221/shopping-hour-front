

//---------------------------- Fillter
const [rate, setRate] = useState(3)


<Rating rating={rate} onClick={(i) =>setRate(i + 1)} style={{cursor: "pointer"}} />



//------------------------Rating
function Rating({rating, onClick, style}) {
    return (
        <div>
            {
                [...Array(5)].map((_, i) => (
                    <span key={i} onClick={() => onClick(i)} style={style}>
                      {rating > i ? (
                        <AiFillStar fontSize="15px" />
                      ) : (
                        <AiOutlineStar fontSize="15px" />
                      )}
                    </span>
                  ))
            }
        </div>
    )
}




//-------------------------------------------------



