
function Card(props){
  const {TitleText, DescText, FooterText} = props;
    return <div className="card">
        <h2 className="heading">{TitleText}</h2>
        <p className="pragraph">{DescText}</p>
        <p className="footer">{FooterText}</p>
      </div>
  }


export default Card;